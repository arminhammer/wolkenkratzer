import { cloneDeep, isEmpty, omit } from 'lodash';
import {
  IAddOptions,
  ICondition,
  ICreationPolicy,
  IDeletionPolicy,
  IDependsOn,
  IDescription,
  IElement,
  IFnGetAtt,
  IMapping,
  IOutput,
  IParameter,
  IRef,
  IResource,
  IResourceMetadata,
  ITemplate,
  IUpdatePolicy,
} from '../types';

/**
 * @hidden
 * @param t
 * @param e
 */
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

/**
 * @hidden
 * @param t
 * @param e
 */
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

/**
 * @hidden
 * @param t
 * @param e
 */
function _removeResource(t: ITemplate, e: IResource): ITemplate {
  const result: any = cloneDeep(t);
  if (result.Resources[e.Name]) {
    result.Resources = omit(result.Resources, e.Name);
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
  }
  return result;
}

/**
 * @hidden
 * @param t
 * @param e
 */
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

export { _removeMapping, _removeOutput, _removeParameter, _removeResource };
