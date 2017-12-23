import { cloneDeep } from 'lodash';
import { Output } from '../elements/output';
import { Parameter } from '../elements/parameter';
import { FnGetAtt, FnSub, Ref } from '../intrinsic';
import { Pseudo } from '../pseudo';
import {
  IAddOptions,
  ICondition,
  ICreationPolicy,
  IDeletionPolicy,
  IDependsOn,
  IDescription,
  IElement,
  IMapping,
  IOutput,
  IParameter,
  IResource,
  IResourceMetadata,
  ITemplate,
  IUpdatePolicy,
} from '../types';
import {
  _validateFnGetAtt,
  _validateRef,
  _validateResourceIntrinsics,
} from './validate';

/**
 * @hidden
 */
function _add(
  template: ITemplate,
  e:
    | IElement
    | ICreationPolicy
    | IDeletionPolicy
    | IResourceMetadata
    | IDependsOn
    | IUpdatePolicy,
  options?: IAddOptions
): ITemplate {
  const _t = cloneDeep(template);
  switch (e.kind) {
    case 'CreationPolicy':
      return _addResourcePolicy(_t, e);
    case 'DeletionPolicy':
      return _addResourcePolicy(_t, e);
    case 'DependsOn':
      return _addResourcePolicy(_t, e);
    case 'ResourceMetadata':
      return _addResourcePolicy(_t, e);
    case 'UpdatePolicy':
      return _addResourcePolicy(_t, e);
    case 'Condition':
      return _addCondition(_t, e);
    case 'Mapping':
      return _addMapping(_t, e);
    case 'Parameter':
      return _addParameter(_t, e);
    case 'Output':
      return _addOutput(_t, e);
    case 'Resource':
      let newT = _t;
      const f: any = cloneDeep(e);
      if (options) {
        const nameSplit = f.Type.split('::').splice(1);
        const shortName = nameSplit.join('');
        if (options.Parameters) {
          options.Parameters.map(p => {
            const paramName = `${f.Name}${shortName}Param`;
            if (!f.Properties) {
              f.Properties = {};
            }
            f.Properties[p] = Ref(paramName);
            newT = _addParameter(
              newT,
              Parameter(paramName, {
                Type: 'String',
              })
            );
          });
        }
        newT = _addResource(newT, f);
        if (options.Output) {
          newT = _addOutput(
            newT,
            Output(`${f.Name}${shortName}Output`, {
              Condition: f.Condition,
              Export: {
                Name: FnSub(
                  `\$\{${Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${
                    nameSplit[1]
                  }-${f.Name}`
                ),
              },
              Value: Ref(f.Name),
            })
          );
        }
      } else {
        newT = _addResource(_t, f);
      }
      return newT;
    case 'Description':
      return _addDescription(_t, e);
    default:
      throw new SyntaxError(
        `${JSON.stringify(e)} is not a valid type, could not be added.`
      );
  }
}

/**
 * @hidden
 */
function _addDescription(t: ITemplate, e: IDescription): ITemplate {
  const desc = { Description: e.Content };
  const result = { ...t, ...desc };
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addResourcePolicy(
  t: ITemplate,
  e:
    | ICreationPolicy
    | IDeletionPolicy
    | IDependsOn
    | IUpdatePolicy
    | IResourceMetadata
): ITemplate {
  const result: any = cloneDeep(t);
  const block: string = e.kind === 'ResourceMetadata' ? 'Metadata' : e.kind;
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      `Cannot add ${block} to a Resource that does not exist in the template.`
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource[block] = e;
  result.Resources[e.Resource] = resource;
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addCondition(t: ITemplate, e: ICondition): ITemplate {
  // TODO: Validate intrinsics
  const result: any = cloneDeep(t);
  result.Conditions[e.Name] = e;
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addOutput(t: ITemplate, e: IOutput): ITemplate {
  const e0: any = cloneDeep(e);
  if (typeof e0.Properties.Value !== 'string') {
    if (e0.Properties.Value.Ref) {
      _validateRef(t, e0.Properties.Value);
    } else if (e0.Properties.Value['Fn::GetAtt']) {
      e0.Properties.Value = FnGetAtt(
        e0.Properties.Value['Fn::GetAtt'][0],
        e0.Properties.Value['Fn::GetAtt'][1]
      );
      _validateFnGetAtt(t, e0.Properties.Value);
    }
  }
  const result: any = cloneDeep(t);
  result.Outputs[e0.Name] = e0;
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addParameter(t: ITemplate, e: IParameter): ITemplate {
  const result: any = cloneDeep(t);
  result.Parameters[e.Name] = e;
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addMapping(t: ITemplate, e: IMapping): ITemplate {
  const result = { ...t };
  if (result.Mappings[e.Name]) {
    const newMappings: any = cloneDeep(result.Mappings);
    newMappings[e.Name] = {
      ...e,
      Content: { ...result.Mappings[e.Name].Content, ...e.Content },
    };
    result.Mappings = newMappings;
  } else {
    const newMappings: any = cloneDeep(result.Mappings);
    newMappings[e.Name] = e;
    result.Mappings = newMappings;
  }
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
function _addResource(t: ITemplate, e: IResource): ITemplate {
  _validateResourceIntrinsics(t, e);
  const result = { ...t };
  const newResources: any = cloneDeep(result.Resources);
  newResources[e.Name] = e;
  result.Resources = newResources;
  return result;
}

export {
  _addResourcePolicy,
  _add,
  _addCondition,
  _addDescription,
  _addMapping,
  _addOutput,
  _addParameter,
  _addResource,
};
