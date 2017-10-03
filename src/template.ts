import stubs from 'cfn-doc-json-stubs';
import cftSchema from 'cloudformation-schema-js-yaml';
import { safeDump } from 'js-yaml';
import { cloneDeep, omit } from 'lodash';
import { CreationPolicy as CreationPolicyConstructor } from './attributes/creationpolicy';
import { DeletionPolicy as DeletionPolicyConstructor } from './attributes/deletionpolicy';
import { DependsOn as DependsOnConstructor } from './attributes/dependson';
import { ResourceMetadata as ResourceMetadataConstructor } from './attributes/metadata';
import { UpdatePolicy as UpdatePolicyConstructor } from './attributes/updatepolicy';
import { Condition } from './elements/condition';
import { Description } from './elements/description';
import { Mapping } from './elements/mapping';
import { Output } from './elements/output';
import { Parameter } from './elements/parameter';
import { CustomResource } from './elements/resource';
import { FnBase64, FnGetAtt, FnGetAZs, FnSplit, FnSub, Ref } from './intrinsic';
// import { IMetadata } from './elements/metadata';
import { Pseudo } from './pseudo';
import { Service } from './service';
import {
  Conditional,
  IAddOptions,
  IAttribute,
  ICondition,
  ICreationPolicy,
  IDeletionPolicy,
  IDependsOn,
  IDescription,
  IElement,
  IFnAnd,
  IFnBase64,
  IFnEquals,
  IFnFindInMap,
  IFnGetAtt,
  IFnGetAZs,
  IFnIf,
  IFnImportValue,
  IFnJoin,
  IFnNot,
  IFnOr,
  IFnSelect,
  IFnSplit,
  IFnSub,
  IIntrinsic,
  IMapping,
  IOutput,
  IParameter,
  IRef,
  IResource,
  IResourceMetadata,
  ITemplate,
  IUpdatePolicy
} from './types';

/** @module Template */

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
      e:
        | IElement
        | ICreationPolicy
        | IDeletionPolicy
        | IResourceMetadata
        | IDependsOn
        | IUpdatePolicy,
      options?: IAddOptions
    ): ITemplate {
      const _t = cloneDeep(this);
      switch (e.kind) {
        case 'CreationPolicy':
          return _addCreationPolicy(_t, e);
        case 'DeletionPolicy':
          return _addDeletionPolicy(_t, e);
        case 'DependsOn':
          return _addDependsOn(_t, e);
        case 'ResourceMetadata':
          return _addResourceMetadata(_t, e);
        case 'UpdatePolicy':
          return _addUpdatePolicy(_t, e);
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
                  Condition: f.Condition,
                  Export: {
                    Name: FnSub(
                      `\$\{${Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`
                    )
                  },
                  Value: Ref(f.Name)
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
    build: function(): object {
      const result: any = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
      };
      const skel = {
        Conditions: this.Conditions,
        Mappings: this.Mappings,
        Outputs: this.Outputs,
        Parameters: this.Parameters,
        Resources: this.Resources
      };
      Object.keys(skel).map(element => {
        if (Object.keys(skel[element]).length > 0) {
          result[element] = {};
          Object.keys(skel[element]).map(item => {
            result[element][item] = _json(skel[element][item]);
          });
        }
      });
      if (this.Description) {
        result.Description = this.Description;
      }
      return result;
    },
    /**
     * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
     * @example
     * const templateJson = require('template.json');
     * const t = Template().import(templateJson);
     */
    import: function(inputTemplate): ITemplate {
      const _t = cloneDeep(this);
      return _calcFromExistingTemplate(_t, inputTemplate);
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
     * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
     * @example
     * let t = Template();
     * let p = Parameter('NewParam', { Type: 'String' });
     * t.add(p).remove(p);
     */
    remove: function(e: IElement | string): ITemplate {
      const result = cloneDeep(this);
      let element: IElement;
      if (typeof e === 'string') {
        const parameter: IParameter | void = result.Parameters[e];
        if (parameter) {
          element = parameter;
        } else {
          const output: IOutput | void = result.Outputs[e];
          if (output) {
            element = output;
          } else {
            const mapping: IMapping | void = result.Mappings[e];
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
      const newT = cloneDeep(this);
      delete newT.Description;
      return newT;
    },
    yaml: function(): string {
      const cleanedTemplate = this.build();
      // const templateString = JSON.stringify(cleanedTemplate, null, 2);
      const templateString = safeDump(cleanedTemplate, {
        flowLevel: 5,
        schema: cftSchema
      })
        // See note on http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-base64.html
        // .replace(/'Fn::Base64':/g, '!Base64')
        .replace(/'Fn::Equals':/g, '!Equals')
        .replace(/'Fn::And':/g, '!And')
        .replace(/'Fn::GetAZs':/g, '!GetAZs')
        .replace(/\{Ref: ([^}]+)\}/g, (match, p1) => {
          return `!Ref ${p1}`;
        })
        .replace(/Ref: (\w+)/g, (match, p1) => {
          return `!Ref ${p1}`;
        })
        .replace(/'Fn::ImportValue':/g, '!ImportValue')
        .replace(/'Fn::Or':/g, '!Or')
        .replace(/'Fn::Not':/g, '!Not')
        .replace(/'Fn::If':/g, '!If')
        .replace(
          /\{'Fn::GetAtt': \[(\w+), ([\w|\.]+)\]\}/g,
          (match, p1, p2) => {
            return `!GetAtt ${p1}.${p2}`;
          }
        )
        .replace(
          /\{'Fn::FindInMap': \[([\w\d!]+), ([\w\d! ]+), ([\w\d!]+)\]\}/g,
          (match, p1, p2, p3) => {
            return `!FindInMap [ ${p1}, ${p2}, ${p3} ]`;
          }
        );
      /*
      TODO: add support for short versions of the rest
        .replace(/'Fn::Join':/g, '!Join');
        'Fn::FindInMap'
        "Fn::Select"
        "Fn::Split"
        "Fn::Sub"*/
      return templateString;
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
  const { kind, Name, ...rest } = t;
  return rest;
}

function _stripKind(target: any) {
  const { kind, ...rest } = target;
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
      for (const o in object) {
        if (object[o] !== null && typeof object[o] === 'object') {
          object[o] = _cleanObject(object[o]);
        }
      }
    }
  }
  return object;
}

function _buildResource(t: IResource) {
  const newT = cloneDeep(t);
  const {
    Type,
    Properties,
    CreationPolicy,
    DeletionPolicy,
    DependsOn,
    Metadata,
    Condition: condition,
    UpdatePolicy
  } = newT;
  const newProps = {};
  const result: any = { Type };
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
    result.Properties = newProps;
  }
  if (CreationPolicy) {
    result.CreationPolicy = _json(CreationPolicy);
  }
  if (DeletionPolicy) {
    result.DeletionPolicy = _json(DeletionPolicy);
  }
  if (DependsOn) {
    result.DependsOn = _json(DependsOn);
  }
  if (Metadata) {
    result.Metadata = _json(Metadata);
  }
  if (UpdatePolicy) {
    result.UpdatePolicy = _json(UpdatePolicy);
  }
  if (condition) {
    result.Condition = condition;
  }
  return result;
}

function _buildCondition(t: ICondition): string {
  const { Condition: condition } = t;
  const result = _json(condition);
  Object.keys(result).map(k => {
    if (result[k][0].kind) {
      result[k][0] = _json(result[k][0]);
    }
  });
  return result;
}

function _buildAttribute(t: IAttribute) {
  const { Content } = t;
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

function _buildGetAZs(t: IFnGetAZs) {
  if (typeof t.FnGetAZs === 'string') {
    return t.FnGetAZs;
  } else {
    return _json(t.FnGetAZs);
  }
}

function _buildFnSplit(t: IFnSplit) {
  if (typeof t.value === 'string') {
    return [t.delimiter, t.value];
  } else {
    return [t.delimiter, _json(t.value)];
  }
}

function _buildFnOr(t: IFnOr) {
  const jsonValues = t.FnOr.map(x => {
    if (typeof x === 'string') {
      return x;
    } else {
      return _json(x);
    }
  });
  return jsonValues;
}

function _buildFnImportValue(t: IFnImportValue) {
  if (typeof t.FnImportValue === 'string') {
    return t.FnImportValue;
  } else {
    return _json(t.FnImportValue);
  }
}

function _buildFnBase64(t: IFnBase64) {
  if (typeof t.FnBase64 === 'string') {
    return t.FnBase64;
  } else {
    return _json(t.FnBase64);
  }
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

function _buildFnNot(t: IFnNot) {
  return t.FnNot.map(x => {
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

function _buildFnIf(t: IFnIf) {
  return t.FnIf.map(x => {
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

function _buildFnSelect(t: IFnSelect) {
  let values = t.FnSelect;
  if (Array.isArray(t.FnSelect)) {
    values = t.FnSelect.map(x => {
      if (typeof x === 'string') {
        return x;
      } else {
        if (x.kind) {
          return _json(x);
        }
        return x;
      }
    });
  } else {
    values = _json(t.FnSelect);
  }
  return [t.index, values];
}

function _buildMapping(t: IMapping) {
  const result = t.Content;
  return result;
}

function _buildOutput(t: IOutput): string {
  let outputResult: any = cloneDeep(t.Properties);
  if (typeof outputResult.Value !== 'string') {
    const stripped = _json(outputResult.Value);
    outputResult = { ...outputResult, Value: stripped };
  }
  if (
    outputResult.Export &&
    outputResult.Export.Name &&
    typeof outputResult.Export.Name !== 'string'
  ) {
    const stripped = _json(outputResult.Export.Name);
    outputResult = { ...outputResult, Export: { Name: stripped } };
  }
  return outputResult;
}

export function _json(
  t:
    | IElement
    | IFnAnd
    | IFnBase64
    | IFnFindInMap
    | IRef
    | IFnGetAtt
    | IFnGetAZs
    | IFnImportValue
    | IFnJoin
    | IFnSelect
    | IFnSplit
    | IFnSub
    | ICreationPolicy
    | IDeletionPolicy
    | IDependsOn
    | IFnEquals
    | IFnIf
    | IFnNot
    | IFnOr
    | IResourceMetadata
    | IUpdatePolicy
) {
  switch (t.kind) {
    case 'Ref':
      return { Ref: t.Ref };
    case 'FnBase64':
      return { 'Fn::Base64': _buildFnBase64(t) };
    case 'FnGetAtt':
      return { 'Fn::GetAtt': t.FnGetAtt };
    case 'FnGetAZs':
      return { 'Fn::GetAZs': _buildGetAZs(t) };
    case 'FnJoin':
      return _buildFnJoin(t);
    case 'FnAnd':
      return { 'Fn::And': _buildFnAnd(t) };
    case 'FnNot':
      return { 'Fn::Not': _buildFnNot(t) };
    case 'FnIf':
      return { 'Fn::If': _buildFnIf(t) };
    case 'FnFindInMap':
      return { 'Fn::FindInMap': _buildFnFindInMap(t) };
    case 'FnEquals':
      return { 'Fn::Equals': _buildFnEquals(t) };
    case 'FnImportValue':
      return { 'Fn::ImportValue': _buildFnImportValue(t) };
    case 'FnOr':
      return { 'Fn::Or': _buildFnOr(t) };
    case 'FnSelect':
      return { 'Fn::Select': _buildFnSelect(t) };
    case 'FnSplit':
      return { 'Fn::Split': _buildFnSplit(t) };
    case 'FnSub':
      return { 'Fn::Sub': t.FnSub };
    case 'CreationPolicy':
      return _buildAttribute(t);
    case 'DeletionPolicy':
      return _buildAttribute(t);
    case 'DependsOn':
      return _buildAttribute(t);
    case 'ResourceMetadata':
      return _buildAttribute(t);
    case 'UpdatePolicy':
      return _buildAttribute(t);
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
  const desc = { Description: e.Content };
  result = { ...t, ...desc };
  return result;
}

function _addCreationPolicy(t: ITemplate, e: ICreationPolicy): ITemplate {
  const result: any = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add CreationPolicy to a Resource that does not exist in the template.'
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource.CreationPolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addDeletionPolicy(t: ITemplate, e: IDeletionPolicy): ITemplate {
  const result: any = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add DeletionPolicy to a Resource that does not exist in the template.'
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource.DeletionPolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addUpdatePolicy(t: ITemplate, e: IUpdatePolicy): ITemplate {
  const result: any = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add DeletionPolicy to a Resource that does not exist in the template.'
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource.UpdatePolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addDependsOn(t: ITemplate, e: IDependsOn): ITemplate {
  const result: any = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add DeletionPolicy to a Resource that does not exist in the template.'
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource.DependsOn = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addResourceMetadata(t: ITemplate, e: IResourceMetadata): ITemplate {
  const result: any = cloneDeep(t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
      'Cannot add Metadata to a Resource that does not exist in the template.'
    );
  }
  const resource = { ...result.Resources[e.Resource] };
  resource.Metadata = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addCondition(t: ITemplate, e: ICondition): ITemplate {
  // TODO: Validate intrinsics
  const result: any = cloneDeep(t);
  result.Conditions[e.Name] = e;
  return result;
}

function _addOutput(t: ITemplate, e: IOutput): ITemplate {
  const e0: any = cloneDeep(e);
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
  const result: any = cloneDeep(t);
  result.Outputs[e0.Name] = e0;
  return result;
}

function _addParameter(t: ITemplate, e: IParameter): ITemplate {
  const result: any = cloneDeep(t);
  result.Parameters[e.Name] = e;
  return result;
}

function _addMapping(t: ITemplate, e: IMapping): ITemplate {
  const result = { ...t };
  if (result.Mappings[e.Name]) {
    const newMappings: any = cloneDeep(result.Mappings);
    newMappings[e.Name] = {
      ...e,
      Content: { ...result.Mappings[e.Name].Content, ...e.Content }
    };
    result.Mappings = newMappings;
  } else {
    const newMappings: any = cloneDeep(result.Mappings);
    newMappings[e.Name] = e;
    result.Mappings = newMappings;
  }
  return result;
}

function _addResource(t: ITemplate, e: IResource): ITemplate {
  const result = { ...t };
  const newResources: any = cloneDeep(result.Resources);
  newResources[e.Name] = e;
  result.Resources = newResources;
  return result;
}

function _removeMapping(t: ITemplate, e: IMapping | string): ITemplate {
  const result = { ...t };
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
  const result = { ...t };
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
  const result = { ...t };
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
      const split = inputTemplate.Resources[r].Type.split('::');
      const cat = split[1];
      const resType = split[2];
      const options = {
        Condition: inputTemplate.Resources[r].Condition
      };
      if (split[0] === 'AWS') {
        const service = Service(stubs[cat]);
        t = t.add(
          service[resType](r, inputTemplate.Resources[r].Properties, options)
        );
      } else if (split[0] === 'Custom') {
        t = t.add(
          CustomResource(r, inputTemplate.Resources[r].Properties, options)
        );
      }
      if (inputTemplate.Resources[r].Metadata) {
        t = _addResourceMetadata(
          t,
          ResourceMetadataConstructor(r, inputTemplate.Resources[r].Metadata)
        );
      }
      if (inputTemplate.Resources[r].CreationPolicy) {
        t = _addCreationPolicy(
          t,
          CreationPolicyConstructor(
            r,
            inputTemplate.Resources[r].CreationPolicy
          )
        );
      }
      if (inputTemplate.Resources[r].DeletionPolicy) {
        t = _addDeletionPolicy(
          t,
          DeletionPolicyConstructor(
            r,
            inputTemplate.Resources[r].DeletionPolicy
          )
        );
      }
      if (inputTemplate.Resources[r].DependsOn) {
        t = _addDependsOn(
          t,
          DependsOnConstructor(r, inputTemplate.Resources[r].DependsOn)
        );
      }
      if (inputTemplate.Resources[r].UpdatePolicy) {
        t = _addUpdatePolicy(
          t,
          UpdatePolicyConstructor(r, inputTemplate.Resources[r].UpdatePolicy)
        );
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
