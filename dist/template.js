'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { IMetadata } from './elements/metadata';


exports.Template = Template;
exports._json = _json;

var _parameter = require('./elements/parameter');

var _description = require('./elements/description');

var _mapping = require('./elements/mapping');

var _condition = require('./elements/condition');

var _resource = require('./elements/resource');

var _output = require('./elements/output');

var _creationpolicy = require('./attributes/creationpolicy');

var _metadata = require('./attributes/metadata');

var _intrinsic = require('./intrinsic');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Returns a new Template.
 */
function Template() {
  return {
    AWSTemplateFormatVersion: '2010-09-09',
    Conditions: {},
    Mappings: {},
    Outputs: {},
    Parameters: {},
    Resources: {},
    add: function (e, options) {
      switch (e.kind) {
        case 'CreationPolicy':
          return _addCreationPolicy(this, e);
        case 'ResourceMetadata':
          return _addResourceMetadata(this, e);
        case 'Condition':
          return _addCondition(this, e);
        case 'Mapping':
          return _addMapping(this, e);
        case 'Parameter':
          return _addParameter(this, e);
        case 'Output':
          return _addOutput(this, e);
        case 'Resource':
          let newT = _addResource(this, e);
          if (options) {
            const shortName = e.Type.split('::').splice(1).join('');
            if (options.Output) {
              newT = _addOutput(newT, (0, _output.Output)(`${e.Name}${shortName}Output`, {
                Value: (0, _intrinsic.Ref)(e.Name)
              }));
            }
            if (options.Parameters) {
              options.Parameters.map(p => {
                newT = _addParameter(newT, (0, _parameter.Parameter)(`${e.Name}${shortName}Param`, {
                  Type: 'String'
                }));
              });
            }
          }
          return newT;
        case 'Description':
          return _addDescription(this, e);
        default:
          throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
      }
    },
    build: function () {
      let result = {
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
    remove: function (e) {
      let result = _extends({}, this);
      let element;
      if (typeof e === 'string') {
        let parameter = result.Parameters[e];
        if (parameter) {
          element = parameter;
        } else {
          let output = result.Outputs[e];
          if (output) {
            element = output;
          } else {
            let mapping = result.Mappings[e];
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
          throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
      }
    },
    removeDescription: function () {
      const _ref = this,
            { Description } = _ref,
            remaining = _objectWithoutProperties(_ref, ['Description']);
      return remaining;
    },
    merge: function (template) {
      const combined = {};
      ['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {
        if (template[block]) {
          combined[block] = _extends({}, this[block], template[block]);
        }
      });
      return _extends({}, this, combined);
    }
  };
}

function _validateRef(t, ref) {
  if (ref.Ref) {
    if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
      throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);
    }
  }
  return;
}

function _validateFnGetAtt(t, att) {
  if (!t.Resources[att.FnGetAtt[0]]) {
    throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);
  }
  return;
}

function _strip(t) {
  let { kind, Name } = t,
      rest = _objectWithoutProperties(t, ['kind', 'Name']);
  return rest;
}

function _stripKind(target) {
  let { kind } = target,
      rest = _objectWithoutProperties(target, ['kind']);
  return rest;
}

function _cleanObject(object) {
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

function _buildResource(t) {
  let { Type, Properties, CreationPolicy, Metadata } = t;
  let newProps = {};
  if (Properties) {
    Object.keys(Properties).map(p => {
      if (Properties[p].kind) {
        newProps[p] = _json(Properties[p]);
      } else {
        newProps[p] = _cleanObject(Properties[p]);
      }
    });
  }
  let result = { Type, Properties: newProps };
  if (CreationPolicy) {
    result.CreationPolicy = _json(CreationPolicy);
  }
  if (Metadata) {
    result.Metadata = _json(Metadata);
  }
  return result;
}

function _buildCondition(t) {
  let { Condition } = t;
  let result = _json(Condition);
  Object.keys(result).map(k => {
    result[k][0] = _json(result[k][0]);
  });
  return result;
}

function _buildCreationPolicy(t) {
  let { Content } = t;
  return Content;
}

function _buildResourceMetadata(t) {
  let { Content } = t;
  return Content;
}

function _buildFnJoin(t) {
  if (Array.isArray(t.Values)) {
    return { 'Fn::Join': [t.Delimiter, t.Values] };
  } else {
    return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };
  }
}

function _buildMapping(t) {
  let result = t.Content;
  return result;
}

function _buildOutput(t) {
  let outputResult = Object.assign({}, t.Properties);
  if (typeof outputResult.Value !== 'string') {
    let stripped = _json(outputResult.Value);
    outputResult = _extends({}, outputResult, { Value: stripped });
  }
  return outputResult;
}

function _json(t) {
  switch (t.kind) {
    case 'Ref':
      return { Ref: t.Ref };
    case 'FnGetAtt':
      return { 'Fn::GetAtt': t.FnGetAtt };
    case 'FnJoin':
      return _buildFnJoin(t);
    case 'FnEquals':
      return { 'Fn::Equals': t.FnEquals };
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

function _addDescription(t, e) {
  let result = _extends({}, t);
  let desc = { Description: e.Content };
  result = _extends({}, t, desc);
  return result;
}

function _addCreationPolicy(t, e) {
  let result = _extends({}, t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError('Cannot add CreationPolicy to a Resource that does not exist in the template.');
  }
  let resource = _extends({}, result.Resources[e.Resource]);
  resource.CreationPolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addResourceMetadata(t, e) {
  let result = _extends({}, t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError('Cannot add Metadata to a Resource that does not exist in the template.');
  }
  let resource = _extends({}, result.Resources[e.Resource]);
  resource.Metadata = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addCondition(t, e) {
  // TODO: Validate intrinsics
  let result = _extends({}, t);
  result.Conditions[e.Name] = e;
  return result;
}

function _addOutput(t, e) {
  if (typeof e.Properties.Value !== 'string' && e.Properties.Value.Ref) {
    _validateRef(t, e.Properties.Value);
  }
  /*if (typeof e.Properties.Value !== 'string' && e.Properties.Value['Fn::GetAtt']) {
        _validateFnGetAtt(this, e.Properties.Value);
    }*/
  let result = _extends({}, t);
  result.Outputs[e.Name] = e;
  return result;
}

function _addParameter(t, e) {
  let result = _extends({}, t);
  result.Parameters[e.Name] = e;
  return result;
}

function _addMapping(t, e) {
  let result = _extends({}, t);
  if (result.Mappings[e.Name]) {
    result.Mappings[e.Name] = _extends({}, e, {
      Content: _extends({}, result.Mappings[e.Name].Content, e.Content)
    });
  } else {
    result.Mappings[e.Name] = e;
  }
  return result;
}

function _addResource(t, e) {
  let result = _extends({}, t);
  result.Resources[e.Name] = e;
  return result;
}

function _removeMapping(t, e) {
  let result = _extends({}, t);
  let mapping;
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
    delete result.Mappings[mapping.Name];
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(mapping)}`);
  }
  return result;
}

function _removeOutput(t, e) {
  let result = _extends({}, t);
  let out;
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
    delete result.Outputs[out.Name];
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(out)}`);
  }
  return result;
}

function _removeParameter(t, e) {
  let result = _extends({}, t);
  let param;
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
    delete result.Parameters[param.Name];
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(param)}`);
  }
  return result;
}