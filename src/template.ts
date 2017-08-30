import { cloneDeep, omit } from 'lodash';
import { IParameter, Parameter } from './elements/parameter';
import { IDescription, Description } from './elements/description';
// import { IMetadata } from './elements/metadata';
import { IMapping, Mapping } from './elements/mapping';
import { ICondition, Condition } from './elements/condition';
import { IResource, CustomResource } from './elements/resource';
import { IOutput, Output } from './elements/output';
import { IElement } from './elements/element';
import { ICreationPolicy } from './attributes/creationpolicy';
import { IResourceMetadata } from './attributes/metadata';
import { Ref, FnSub, FnGetAtt } from './intrinsic';
import { Service } from './service';
import { Pseudo } from './pseudo';
import stubs from 'cfn-doc-json-stubs';
import {
  IRef,
  IFnGetAtt,
  IFnJoin,
  Conditional,
  IIntrinsic,
  IFnAnd,
  IFnEquals,
  IFnFindInMap,
  IFnIf,
  IFnNot,
  IFnOr,
  IFnSub
} from './intrinsic';

/** @module Template */

/**
 * Template Interface
 * @member Template
 */
export interface ITemplate {
  readonly kind: 'Template';
  readonly AWSTemplateFormatVersion: string;
  readonly Description?: void | string;
  readonly Parameters: { readonly [s: string]: IParameter };
  // readonly Metadata: { readonly [s: string]: IMetadata };
  readonly Mappings: { readonly [s: string]: IMapping };
  readonly Conditions: { readonly [s: string]: ICondition };
  readonly Resources: { readonly [s: string]: IResource };
  readonly Outputs: { readonly [s: string]: IOutput };
  readonly add: Function;
  readonly remove: Function;
  readonly removeDescription: Function;
  readonly build: Function;
  readonly merge: Function;
  readonly import: Function;
  readonly map: Function;
}

/**
 * IAddOptions Interface
 * @member Template
 */
export interface IAddOptions {
  Output: boolean;
  Parameters: Array<string>;
}

/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
export function Template(): ITemplate {
  return {
    AWSTemplateFormatVersion: '2010-09-09',
    Conditions: {},
    Mappings: {},
    Outputs: {},
    Parameters: {},
    Resources: {},
    /**
     * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
     * @example
     * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
     */
    add: function(
      e: IElement | ICreationPolicy | IResourceMetadata,
      options?: IAddOptions
    ): ITemplate {
      const _t = cloneDeep(this);
      switch (e.kind) {
        case 'CreationPolicy':
          return _addCreationPolicy(_t, e);
        case 'ResourceMetadata':
          return _addResourceMetadata(_t, e);
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
          let f = cloneDeep(e);
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
                    Type: 'String'
                  })
                );
              });
            }
            newT = _addResource(newT, f);
            if (options.Output) {
              newT = _addOutput(
                newT,
                Output(`${f.Name}${shortName}Output`, {
                  Value: Ref(f.Name),
                  Condition: f.Condition,
                  Export: {
                    Name: FnSub(
                      `\$\{${Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`
                    )
                  }
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
    },
    /**
     * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
     * @example
     * const t = Template();
     * JSON.stringify(t.build(), null, 2)
     */
    build: function() {
      let result: any = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
      };
      if (Object.keys(this.Conditions).length > 0) {
        result.Conditions = {};
        Object.keys(this.Conditions).map(c => {
          result.Conditions[c] = _json(this.Conditions[c]);
        });
      }
      if (Object.keys(this.Parameters).length > 0) {
        result.Parameters = {};
        Object.keys(this.Parameters).map(p => {
          result.Parameters[p] = _json(this.Parameters[p]);
        });
      }
      if (Object.keys(this.Mappings).length > 0) {
        result.Mappings = {};
        Object.keys(this.Mappings).map(m => {
          result.Mappings[m] = _json(this.Mappings[m]);
        });
      }
      if (Object.keys(this.Outputs).length > 0) {
        result.Outputs = {};
        Object.keys(this.Outputs).map(o => {
          result.Outputs[o] = _json(this.Outputs[o]);
        });
      }
      if (Object.keys(this.Resources).length > 0) {
        result.Resources = {};
        Object.keys(this.Resources).map(r => {
          result.Resources[r] = _json(this.Resources[r]);
        });
      }
      if (this.Description) {
        result.Description = this.Description;
      }
      return result;
    },
    kind: 'Template',
    /**
     * Add elements to the Template in a functional way.
     */
    map: function(iterable: Array<IElement>, mapFn: Function): ITemplate {
      let result = cloneDeep(this);
      iterable.map(i => {
        result = result.add(mapFn(i));
      });
      return result;
    },
    /**
     * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
     * @example
     * let t = Template();
     * let p = Parameter('NewParam', { Type: 'String' });
     * t.add(p).remove(p);
     */
    remove: function(e: IElement | string): ITemplate {
      let result = cloneDeep(this);
      let element: IElement;
      if (typeof e === 'string') {
        let parameter: IParameter | void = result.Parameters[e];
        if (parameter) {
          element = parameter;
        } else {
          let output: IOutput | void = result.Outputs[e];
          if (output) {
            element = output;
          } else {
            let mapping: IMapping | void = result.Mappings[e];
            if (mapping) {
              element = mapping;
            } else {
              throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
            }
          }
        }
      } else {
        element = e;
      }
      switch (element.kind) {
        /*case 'Condition':
                    return _removeCondition(this, e);*/
        case 'Parameter':
          return _removeParameter(this, element);
        case 'Output':
          return _removeOutput(this, element);
        /*case 'Resource':
                    return _removeResource(this, e);*/
        case 'Mapping':
          return _removeMapping(this, element);
        default:
          throw new SyntaxError(
            `${JSON.stringify(e)} is not a valid type, could not be added.`
          );
      }
    },
    /**
     * Removes the Description from the Template.
     */
    removeDescription: function(): ITemplate {
      const { Description, ...remaining } = this;
      return remaining;
    },
    /**
     * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
     */
    merge: function(t: ITemplate): ITemplate {
      const _t = cloneDeep(this);
      const combined = {};
      [
        'Conditions',
        'Mapping',
        'Outputs',
        'Parameters',
        'Resources',
        'Description'
      ].map(block => {
        if (t[block]) {
          combined[block] = { ..._t[block], ...t[block] };
        }
      });
      return {
        ..._t,
        ...combined
      };
    },
    /**
     * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
     * @example
     * const templateJson = require('template.json');
     * const t = Template().import(templateJson);
     */
    import: function(inputTemplate): ITemplate {
      let _t = cloneDeep(this);
      return _calcFromExistingTemplate(_t, inputTemplate);
    }
  };
}

function _isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function _validateRef(t: ITemplate, ref: IRef): void | SyntaxError {
  if (ref.Ref) {
    if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
      throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);
    }
  }
  return;
}

function _validateFnGetAtt(t: ITemplate, att: IFnGetAtt): void | SyntaxError {
  if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {
    throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);
  }
  return;
}

function _strip(t: IParameter | IOutput | IResource | ICondition): any {
  let { kind, Name, ...rest } = t;
  return rest;
}

function _stripKind(target: any) {
  let { kind, ...rest } = target;
  return rest;
}

function _cleanObject(object: any) {
  if (Array.isArray(object)) {
    for (let v = 0; v < object.length; v++) {
      object[v] = _cleanObject(object[v]);
    }
  } else {
    if (object.kind) {
      object = _json(object);
    } else {
      for (let o in object) {
        if (object[o] !== null && typeof object[o] === 'object') {
          object[o] = _cleanObject(object[o]);
        }
      }
    }
  }
  return object;
}

function _buildResource(t: IResource) {
  let { Type, Properties, CreationPolicy, Metadata, Condition } = t;
  let newProps = {};
  if (Properties) {
    Object.keys(Properties).map(p => {
      // Ignore empty arrays
      if (!(Array.isArray(Properties[p]) && Properties[p].length === 0)) {
        if (Properties[p].kind) {
          newProps[p] = _json(Properties[p]);
        } else if (!_isEmptyObject(Properties[p])) {
          newProps[p] = _cleanObject(Properties[p]);
        }
      }
    });
  }
  let result: any = { Type, Properties: newProps };
  if (CreationPolicy) {
    result.CreationPolicy = _json(CreationPolicy);
  }
  if (Metadata) {
    result.Metadata = _json(Metadata);
  }
  if (Condition) {
    result.Condition = Condition;
  }
  return result;
}

function _buildCondition(t: ICondition): string {
  let { Condition } = t;
  let result = _json(Condition);
  Object.keys(result).map(k => {
    if (result[k][0].kind) {
      result[k][0] = _json(result[k][0]);
    }
  });
  return result;
}

function _buildCreationPolicy(t: ICreationPolicy) {
  let { Content } = t;
  return Content;
}

function _buildResourceMetadata(t: IResourceMetadata) {
  let { Content } = t;
  return Content;
}

function _buildFnJoin(t: IFnJoin) {
  if (Array.isArray(t.Values)) {
    const jsonValues = t.Values.map(x => {
      if (typeof x === 'string') {
        return x;
      } else {
        return _json(x);
      }
    });
    return { 'Fn::Join': [t.Delimiter, jsonValues] };
  } else {
    return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };
  }
}

function _buildFnFindInMap(t: IFnFindInMap) {
  return t.FnFindInMap.map(x => {
    if (typeof x === 'string') {
      return x;
    } else {
      return _json(x);
    }
  });
}

function _buildFnAnd(t: IFnAnd) {
  return t.FnAnd.map(x => {
    if (typeof x === 'string') {
      return x;
    } else {
      if (x.kind) {
        return _json(x);
      }
      return x;
    }
  });
}

function _buildFnEquals(t: IFnEquals) {
  return t.FnEquals.map(x => {
    if (typeof x === 'string') {
      return x;
    } else {
      if (x.kind) {
        return _json(x);
      }
      return x;
    }
  });
}

function _buildMapping(t: IMapping) {
  let result = t.Content;
  return result;
}

function _buildOutput(t: IOutput): string {
  let outputResult: any = cloneDeep(t.Properties);
  if (typeof outputResult.Value !== 'string') {
    let stripped = _json(outputResult.Value);
    outputResult = { ...outputResult, Value: stripped };
  }
  if (
    outputResult.Export &&
    outputResult.Export.Name &&
    typeof outputResult.Export.Name !== 'string'
  ) {
    let stripped = _json(outputResult.Export.Name);
    outputResult = { ...outputResult, Export: { Name: stripped } };
  }
  return outputResult;
}

export function _json(
  t:
    | IElement
    | IFnAnd
    | IFnFindInMap
    | IRef
    | IFnGetAtt
    | IFnJoin
    | IFnSub
    | ICreationPolicy
    | IFnEquals
    | IFnIf
    | IFnNot
    | IFnOr
    | IResourceMetadata
) {
  switch (t.kind) {
    case 'Ref':
      return { Ref: t.Ref };
    case 'FnGetAtt':
      return { 'Fn::GetAtt': t.FnGetAtt };
    case 'FnJoin':
      return _buildFnJoin(t);
    case 'FnAnd':
      return { 'Fn::And': _buildFnAnd(t) };
    case 'FnFindInMap':
      return { 'Fn::FindInMap': _buildFnFindInMap(t) };
    case 'FnEquals':
      return { 'Fn::Equals': _buildFnEquals(t) };
    case 'FnSub':
      return { 'Fn::Sub': t.FnSub };
    case 'CreationPolicy':
      return _buildCreationPolicy(t);
    case 'ResourceMetadata':
      return _buildResourceMetadata(t);
    case 'Condition':
      return _buildCondition(t);
    case 'Mapping':
      return _buildMapping(t);
    case 'Parameter':
      return _strip(t).Properties;
    case 'Output':
      return _buildOutput(t);
    case 'Resource':
      return _buildResource(t);
    default:
      throw new SyntaxError(`Can't call _json on ${JSON.stringify(t)}`);
  }
}

function _addDescription(t: ITemplate, e: IDescription): ITemplate {
  let result = { ...t };
  let desc = { Description: e.Content };
  result = { ...t, ...desc };
  return result;
}

function _addCreationPolicy(t: ITemplate, e: ICreationPolicy): ITemplate {
  let result = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add CreationPolicy to a Resource that does not exist in the template.'
    );
  }
  let resource = { ...result.Resources[e.Resource] };
  resource.CreationPolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addResourceMetadata(t: ITemplate, e: IResourceMetadata): ITemplate {
  let result = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add Metadata to a Resource that does not exist in the template.'
    );
  }
  let resource = { ...result.Resources[e.Resource] };
  resource.Metadata = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addCondition(t: ITemplate, e: ICondition): ITemplate {
  // TODO: Validate intrinsics
  let result = cloneDeep(t);
  result.Conditions[e.Name] = e;
  return result;
}

function _addOutput(t: ITemplate, e: IOutput): ITemplate {
  let e0 = cloneDeep(e);
  if (typeof e0.Properties.Value !== 'string') {
    if (e0.Properties.Value.Ref) {
      _validateRef(t, e0.Properties.Value);
    } else if (
      typeof e0.Properties.Value !== 'string' &&
      e0.Properties.Value['Fn::GetAtt']
    ) {
      e0.Properties.Value = FnGetAtt(
        e0.Properties.Value['Fn::GetAtt'][0],
        e0.Properties.Value['Fn::GetAtt'][1]
      );
      _validateFnGetAtt(t, e0.Properties.Value);
    }
  }
  let result = cloneDeep(t);
  result.Outputs[e0.Name] = e0;
  return result;
}

function _addParameter(t: ITemplate, e: IParameter): ITemplate {
  const result = cloneDeep(t);
  result.Parameters[e.Name] = e;
  return result;
}

function _addMapping(t: ITemplate, e: IMapping): ITemplate {
  let result = { ...t };
  if (result.Mappings[e.Name]) {
    const newMappings = cloneDeep(result.Mappings);
    newMappings[e.Name] = {
      ...e,
      Content: { ...result.Mappings[e.Name].Content, ...e.Content }
    };
    result.Mappings = newMappings;
  } else {
    const newMappings = cloneDeep(result.Mappings);
    newMappings[e.Name] = e;
    result.Mappings = newMappings;
  }
  return result;
}

function _addResource(t: ITemplate, e: IResource): ITemplate {
  let result = { ...t };
  let newResources = cloneDeep(result.Resources);
  newResources[e.Name] = e;
  result.Resources = newResources;
  return result;
}

function _removeMapping(t: ITemplate, e: IMapping | string): ITemplate {
  let result = { ...t };
  let mapping: IMapping;
  if (typeof e === 'string') {
    if (result.Mappings[e]) {
      mapping = result.Mappings[e];
    } else {
      throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
    }
  } else {
    mapping = e;
  }
  if (result.Mappings[mapping.Name]) {
    result.Mappings = omit(result.Mappings, mapping.Name);
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(mapping)}`);
  }
  return result;
}

function _removeOutput(t: ITemplate, e: IOutput | string): ITemplate {
  let result = { ...t };
  let out: IOutput;
  if (typeof e === 'string') {
    if (result.Outputs[e]) {
      out = result.Outputs[e];
    } else {
      throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
    }
  } else {
    out = e;
  }
  if (result.Outputs[out.Name]) {
    result.Outputs = omit(result.Outputs, out.Name);
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(out)}`);
  }
  return result;
}

function _removeParameter(t: ITemplate, e: IParameter | string): ITemplate {
  let result = { ...t };
  let param: IParameter;
  if (typeof e === 'string') {
    if (result.Parameters[e]) {
      param = result.Parameters[e];
    } else {
      throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
    }
  } else {
    param = e;
  }
  if (result.Parameters[param.Name]) {
    result.Parameters = omit(result.Parameters, param.Name);
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(param)}`);
  }
  return result;
}

function _calcFromExistingTemplate(t: ITemplate, inputTemplate: any) {
  if (inputTemplate.Description) {
    t = t.add(Description(inputTemplate.Description));
  }
  if (inputTemplate.Parameters) {
    Object.keys(inputTemplate.Parameters).map(p => {
      t = t.add(Parameter(p, inputTemplate.Parameters[p]));
    });
  }
  if (inputTemplate.Resources) {
    Object.keys(inputTemplate.Resources).map(r => {
      let split = inputTemplate.Resources[r].Type.split('::');
      let cat = split[1];
      let resType = split[2];
      if (split[0] === 'AWS') {
        let service = Service(stubs[cat]);
        t = t.add(service[resType](r, inputTemplate.Resources[r].Properties));
      } else if (split[0] === 'Custom') {
        t = t.add(CustomResource(r, inputTemplate.Resources[r].Properties));
      }
    });
  }
  if (inputTemplate.Outputs) {
    Object.keys(inputTemplate.Outputs).map(o => {
      t = t.add(Output(o, inputTemplate.Outputs[o]));
    });
  }
  if (inputTemplate.Mappings) {
    Object.keys(inputTemplate.Mappings).map(m => {
      Object.keys(inputTemplate.Mappings[m]).map(m0 => {
        t = t.add(Mapping(m, m0, inputTemplate.Mappings[m][m0]));
      });
    });
  }
  if (inputTemplate.Conditions) {
    Object.keys(inputTemplate.Conditions).map(c => {
      t = t.add(Condition(c, inputTemplate.Conditions[c]));
    });
  }
  return t;
}
