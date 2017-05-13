'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { IMetadata } from './elements/metadata';
// import { IMapping } from './elements/mapping';


exports.Template = Template;
exports._json = _json;

var _parameter = require('./elements/parameter');

var _description = require('./elements/description');

var _condition = require('./elements/condition');

var _resource = require('./elements/resource');

var _output = require('./elements/output');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Template() {
  return {
    AWSTemplateFormatVersion: '2010-09-09',
    Conditions: {},
    Outputs: {},
    Parameters: {},
    Resources: {},
    add: function add(e) {
      switch (e.kind) {
        case 'Condition':
          return _addCondition(this, e);
        case 'Parameter':
          return _addParameter(this, e);
        case 'Output':
          return _addOutput(this, e);
        case 'Resource':
          return _addResource(this, e);
        case 'Description':
          return _addDescription(this, e);
        default:
          throw new SyntaxError(JSON.stringify(e) + ' is not a valid type, could not be added.');
      }
    },
    build: function build() {
      var _this = this;

      var result = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
      };
      if (Object.keys(this.Conditions).length > 0) {
        result.Conditions = {};
        Object.keys(this.Conditions).map(function (c) {
          result.Conditions[c] = _json(_this.Conditions[c]);
        });
      }
      if (Object.keys(this.Parameters).length > 0) {
        result.Parameters = {};
        Object.keys(this.Parameters).map(function (p) {
          result.Parameters[p] = _json(_this.Parameters[p]);
        });
      }
      if (Object.keys(this.Outputs).length > 0) {
        result.Outputs = {};
        Object.keys(this.Outputs).map(function (o) {
          result.Outputs[o] = _json(_this.Outputs[o]);
        });
      }
      if (Object.keys(this.Resources).length > 0) {
        result.Resources = {};
        Object.keys(this.Resources).map(function (r) {
          result.Resources[r] = _json(_this.Resources[r]);
        });
      }
      if (this.Description) {
        result.Description = this.Description;
      }
      return result;
    },
    kind: 'Template',
    remove: function remove(e) {
      var result = _extends({}, this);
      var element = void 0;
      if (typeof e === 'string') {
        var parameter = result.Parameters[e];
        if (parameter) {
          element = parameter;
        } else {
          var output = result.Outputs[e];
          if (output) {
            element = output;
          } else {
            throw new SyntaxError('Could not find ' + JSON.stringify(e));
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
        // case 'Description':
        //    return _removeDescription(this, element);
        default:
          throw new SyntaxError(JSON.stringify(e) + ' is not a valid type, could not be added.');
      }
    },
    removeDescription: function removeDescription() {
      var Description = this.Description,
          remaining = _objectWithoutProperties(this, ['Description']);

      return remaining;
    }
  };
}

function _validateRef(t, ref) {
  if (ref.Ref) {
    if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
      throw new SyntaxError('Could not find ' + JSON.stringify(ref));
    }
  }
  return;
}

function _validateFnGetAtt(t, att) {
  if (!t.Resources[att.FnGetAtt[0]]) {
    throw new SyntaxError('Could not find ' + JSON.stringify(att));
  }
  return;
}

function _strip(t) {
  var kind = t.kind,
      Name = t.Name,
      rest = _objectWithoutProperties(t, ['kind', 'Name']);

  return rest;
}

function _stripKind(target) {
  var kind = target.kind,
      rest = _objectWithoutProperties(target, ['kind']);

  return rest;
}

function _cleanObject(object) {
  if (Array.isArray(object)) {
    for (var v = 0; v < object.length; v++) {
      object[v] = _cleanObject(object[v]);
    }
  } else {
    if (object.kind) {
      object = _json(object);
    } else {
      for (var o in object) {
        if (object[o] !== null && _typeof(object[o]) === 'object') {
          object[o] = _cleanObject(object[o]);
        }
      }
    }
  }
  return object;
}

function _buildResource(t) {
  var Type = t.Type,
      Properties = t.Properties;

  var newProps = {};
  if (Properties) {
    Object.keys(Properties).map(function (p) {
      if (Properties[p].kind) {
        newProps[p] = _json(Properties[p]);
      } else {
        newProps[p] = _cleanObject(Properties[p]);
      }
    });
  }
  return { Type: Type, Properties: newProps };
}

function _buildCondition(t) {
  var Condition = t.Condition;

  var result = _json(Condition);
  Object.keys(result).map(function (k) {
    result[k][0] = _json(result[k][0]);
  });
  return result;
}

function _buildOutput(t) {
  var outputResult = Object.assign({}, t.Properties);
  if (typeof outputResult.Value !== 'string') {
    var stripped = _json(outputResult.Value);
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
    case 'FnEquals':
      return { 'Fn::Equals': t.FnEquals };
    case 'Condition':
      return _buildCondition(t);
    case 'Parameter':
      return _strip(t).Properties;
    case 'Output':
      return _buildOutput(t);
    case 'Resource':
      return _buildResource(t);
    default:
      throw new SyntaxError('Can\'t call _json on ' + JSON.stringify(t));
  }
}

function _addDescription(t, e) {
  var result = _extends({}, t);
  var desc = { Description: e.Content };
  result = _extends({}, t, desc);
  return result;
}

function _addCondition(t, e) {
  // TODO: Validate intrinsics
  var result = _extends({}, t);
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
  var result = _extends({}, t);
  result.Outputs[e.Name] = e;
  return result;
}

function _addParameter(t, e) {
  var result = _extends({}, t);
  result.Parameters[e.Name] = e;
  return result;
}

function _addResource(t, e) {
  var result = _extends({}, t);
  result.Resources[e.Name] = e;
  return result;
}

function _removeOutput(t, e) {
  var result = _extends({}, t);
  var out = void 0;
  if (typeof e === 'string') {
    if (result.Outputs[e]) {
      out = result.Outputs[e];
    } else {
      throw new SyntaxError('Could not find ' + JSON.stringify(e));
    }
  } else {
    out = e;
  }
  if (result.Outputs[out.Name]) {
    delete result.Outputs[out.Name];
  } else {
    throw new SyntaxError('Could not find ' + JSON.stringify(out));
  }
  return result;
}

function _removeParameter(t, e) {
  var result = _extends({}, t);
  var param = void 0;
  if (typeof e === 'string') {
    if (result.Parameters[e]) {
      param = result.Parameters[e];
    } else {
      throw new SyntaxError('Could not find ' + JSON.stringify(e));
    }
  } else {
    param = e;
  }
  if (result.Parameters[param.Name]) {
    delete result.Parameters[param.Name];
  } else {
    throw new SyntaxError('Could not find ' + JSON.stringify(param));
  }
  return result;
}