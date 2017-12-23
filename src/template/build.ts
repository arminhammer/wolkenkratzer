import { cloneDeep, isEmpty } from 'lodash';
import {
  IAttribute,
  ICondition,
  ICreationPolicy,
  IDeletionPolicy,
  IDependsOn,
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
  IMapping,
  IOutput,
  IRef,
  IResource,
  IResourceMetadata,
  IUpdatePolicy,
} from '../types';
import { _isEmptyObject } from './util';

/**
 * @hidden
 * @param t
 */
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
    UpdatePolicy,
  } = newT;
  const newProps = {};
  const result: any = { Type };
  if (Properties && !isEmpty(Properties)) {
    Object.keys(Properties).forEach(p => {
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

/**
 * @hidden
 * @param t
 */
function _buildCondition(t: ICondition): string {
  const { Condition: condition } = t;
  const result = _json(condition);
  Object.keys(result).forEach(k => {
    if (result[k][0].kind) {
      result[k][0] = _json(result[k][0]);
    }
  });
  return result;
}

/**
 * @hidden
 * @param t
 */
function _buildAttribute(t: IAttribute) {
  const { Content } = t;
  return Content;
}

/**
 * @hidden
 * @param t
 */
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

/**
 * @hidden
 */
function _buildFnFindInMap(t: IFnFindInMap) {
  return t.FnFindInMap.map(x => {
    if (typeof x === 'string') {
      return x;
    } else {
      return _json(x);
    }
  });
}

/**
 * @hidden
 */
function _buildGetAZs(t: IFnGetAZs) {
  if (typeof t.FnGetAZs === 'string') {
    return t.FnGetAZs;
  } else {
    return _json(t.FnGetAZs);
  }
}

/**
 * @hidden
 * @param t
 */
function _buildFnSplit(t: IFnSplit) {
  if (typeof t.value === 'string') {
    return [t.delimiter, t.value];
  } else {
    return [t.delimiter, _json(t.value)];
  }
}

/**
 * @hidden
 */
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

/**
 * @hidden
 * @param t
 */
function _buildFnImportValue(t: IFnImportValue) {
  if (typeof t.FnImportValue === 'string') {
    return t.FnImportValue;
  } else {
    return _json(t.FnImportValue);
  }
}

/**
 * @hidden
 * @param t
 */
function _buildFnBase64(t: IFnBase64) {
  if (typeof t.FnBase64 === 'string') {
    return t.FnBase64;
  } else {
    return _json(t.FnBase64);
  }
}

/**
 * @hidden
 */
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

/**
 * @hidden
 */
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

/**
 * @hidden
 */
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

/**
 * @hidden
 */
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

/**
 * @hidden
 */
function _buildFnSelect(t: IFnSelect) {
  if (Array.isArray(t.FnSelect)) {
    const values = t.FnSelect.map(x => {
      if (typeof x === 'string') {
        return x;
      } else {
        if (x.kind) {
          return _json(x);
        }
        return x;
      }
    });
    return [t.index, values];
  } else {
    return [t.index, _json(t.FnSelect)];
  }
}

/**
 * @hidden
 */
function _buildMapping(t: IMapping) {
  const result = t.Content;
  return result;
}

/**
 * @hidden
 */
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

/**
 * @hidden
 * @param object
 */
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

/**
 * @hidden
 * @param t
 */
function _json(
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
      return t.Properties;
    case 'Output':
      return _buildOutput(t);
    case 'Resource':
      return _buildResource(t);
    default:
      throw new SyntaxError(`Can't call _json on ${JSON.stringify(t)}`);
  }
}

export { _json };
