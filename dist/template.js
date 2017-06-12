'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.

























































Template = Template;exports.












































































































































































































































































































_json = _json;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _parameter = require('./elements/parameter');var _description = require('./elements/description');var _mapping = require('./elements/mapping');var _condition = require('./elements/condition');var _resource = require('./elements/resource');var _output = require('./elements/output');var _creationpolicy = require('./attributes/creationpolicy');var _metadata = require('./attributes/metadata');var _intrinsic = require('./intrinsic');var _service = require('./service');var _pseudo = require('./pseudo');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} // import { IMetadata } from './elements/metadata';
/**
 * Returns a new Template object.
 */ /**
     * Template Interface
     */function Template() {return { AWSTemplateFormatVersion: '2010-09-09', Conditions: {}, Mappings: {}, Outputs: {}, Parameters: {}, Resources: {}, /**
                                                                                                                                                        * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
                                                                                                                                                        */add: function (e, options) {const _t = _lodash2.default.cloneDeep(this);switch (e.kind) {case 'CreationPolicy':return _addCreationPolicy(_t, e);case 'ResourceMetadata':return _addResourceMetadata(_t, e);case 'Condition':return _addCondition(_t, e);case 'Mapping':return _addMapping(_t, e);case 'Parameter':return _addParameter(_t, e);case 'Output':return _addOutput(_t, e);case 'Resource':let newT = _t;let f = _lodash2.default.cloneDeep(e);if (options) {const nameSplit = f.Type.split('::').splice(1);const shortName = nameSplit.join('');if (options.Parameters) {options.Parameters.map(p => {const paramName = `${f.Name}${shortName}Param`;if (!f.Properties) {f.Properties = {};}f.Properties[p] = (0, _intrinsic.Ref)(paramName);newT = _addParameter(newT, (0, _parameter.Parameter)(paramName, { Type: 'String' }));});}newT = _addResource(_t, f);if (options.Output) {newT = _addOutput(newT, (0, _output.Output)(`${f.Name}${shortName}Output`, { Value: (0, _intrinsic.Ref)(f.Name), Export: { Name: (0, _intrinsic.FnSub)(`\$\{${_pseudo.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`) } }));}} else {newT = _addResource(_t, f);}return newT;case 'Description':return _addDescription(_t, e);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, build: function () {let result = { AWSTemplateFormatVersion: '2010-09-09', Resources: {} };if (Object.keys(this.Conditions).length > 0) {result.Conditions = {};Object.keys(this.Conditions).map(c => {result.Conditions[c] = _json(this.Conditions[c]);});}if (Object.keys(this.Parameters).length > 0) {result.Parameters = {};Object.keys(this.Parameters).map(p => {result.Parameters[p] = _json(this.Parameters[p]);});}if (Object.keys(this.Mappings).length > 0) {result.Mappings = {};Object.keys(this.Mappings).map(m => {result.Mappings[m] = _json(this.Mappings[m]);});}if (Object.keys(this.Outputs).length > 0) {result.Outputs = {};Object.keys(this.Outputs).map(o => {result.Outputs[o] = _json(this.Outputs[o]);});}if (Object.keys(this.Resources).length > 0) {result.Resources = {};Object.keys(this.Resources).map(r => {result.Resources[r] = _json(this.Resources[r]);});}if (this.Description) {result.Description = this.Description;}return result;}, kind: 'Template', remove: function (e) {let result = _lodash2.default.cloneDeep(this);let element;if (typeof e === 'string') {let parameter = result.Parameters[e];if (parameter) {element = parameter;} else {let output = result.Outputs[e];if (output) {element = output;} else {let mapping = result.Mappings[e];if (mapping) {element = mapping;} else {throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);}}}} else {element = e;}switch (element.kind) {/*case 'Condition':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       return _removeCondition(this, e);*/case 'Parameter':return _removeParameter(this, element);case 'Output':return _removeOutput(this, element); /*case 'Resource':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 return _removeResource(this, e);*/case 'Mapping':return _removeMapping(this, element);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, removeDescription: function () {const _ref = this,{ Description } = _ref,remaining = _objectWithoutProperties(_ref, ['Description']);return remaining;}, merge: function (t) {const _t = _lodash2.default.cloneDeep(this);const combined = {};['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {if (t[block]) {combined[block] = _extends({}, _t[block], t[block]);}});return _extends({}, _t, combined);}, import: function (inputTemplate) {let _t = _lodash2.default.cloneDeep(this);return _calcFromExistingTemplate(_t, inputTemplate);} };}function _validateRef(t, ref) {if (ref.Ref) {if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);}}return;}function _validateFnGetAtt(t, att) {if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);}return;}function _strip(t) {let { kind, Name } = t,rest = _objectWithoutProperties(t, ['kind', 'Name']);return rest;}function _stripKind(target) {let { kind } = target,rest = _objectWithoutProperties(target, ['kind']);return rest;}function _cleanObject(object) {if (Array.isArray(object)) {for (let v = 0; v < object.length; v++) {object[v] = _cleanObject(object[v]);}} else {if (object.kind) {object = _json(object);} else {for (let o in object) {if (object[o] !== null && typeof object[o] === 'object') {object[o] = _cleanObject(object[o]);}}}}return object;}function _buildResource(t) {let { Type, Properties, CreationPolicy, Metadata } = t;let newProps = {};if (Properties) {Object.keys(Properties).map(p => {if (Properties[p].kind) {newProps[p] = _json(Properties[p]);} else {newProps[p] = _cleanObject(Properties[p]);}});}let result = { Type, Properties: newProps };if (CreationPolicy) {result.CreationPolicy = _json(CreationPolicy);}if (Metadata) {result.Metadata = _json(Metadata);}return result;}function _buildCondition(t) {let { Condition } = t;let result = _json(Condition);Object.keys(result).map(k => {result[k][0] = _json(result[k][0]);});return result;}function _buildCreationPolicy(t) {let { Content } = t;return Content;}function _buildResourceMetadata(t) {let { Content } = t;return Content;}function _buildFnJoin(t) {if (Array.isArray(t.Values)) {return { 'Fn::Join': [t.Delimiter, t.Values] };} else {return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };}}function _buildMapping(t) {let result = t.Content;return result;}function _buildOutput(t) {let outputResult = Object.assign({}, t.Properties);if (typeof outputResult.Value !== 'string') {let stripped = _json(outputResult.Value);outputResult = _extends({}, outputResult, { Value: stripped });}if (outputResult.Export && outputResult.Export.Name && typeof outputResult.Export.Name !== 'string') {let stripped = _json(outputResult.Export.Name);outputResult = _extends({}, outputResult, { Export: { Name: stripped } });}return outputResult;}function _json(t) {switch (t.kind) {case 'Ref':return { Ref: t.Ref };case 'FnGetAtt':return { 'Fn::GetAtt': t.FnGetAtt };case 'FnJoin':return _buildFnJoin(t);
    case 'FnEquals':
      return { 'Fn::Equals': t.FnEquals };
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
      throw new SyntaxError(`Can't call _json on ${JSON.stringify(t)}`);}

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
    throw new SyntaxError(
    'Cannot add CreationPolicy to a Resource that does not exist in the template.');

  }
  let resource = _extends({}, result.Resources[e.Resource]);
  resource.CreationPolicy = e;
  result.Resources[e.Resource] = resource;
  return result;
}

function _addResourceMetadata(t, e) {
  let result = _extends({}, t);
  if (!result.Resources[e.Resource]) {
    throw new SyntaxError(
    'Cannot add Metadata to a Resource that does not exist in the template.');

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
  let e0 = _lodash2.default.cloneDeep(e);
  if (typeof e0.Properties.Value !== 'string') {
    if (e0.Properties.Value.Ref) {
      _validateRef(t, e0.Properties.Value);
    } else if (
    typeof e0.Properties.Value !== 'string' &&
    e0.Properties.Value['Fn::GetAtt'])
    {
      e0.Properties.Value = (0, _intrinsic.FnGetAtt)(
      e0.Properties.Value['Fn::GetAtt'][0],
      e0.Properties.Value['Fn::GetAtt'][1]);

      _validateFnGetAtt(t, e0.Properties.Value);
    }
  }
  let result = _extends({}, t);
  result.Outputs[e0.Name] = e0;
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
    result.Mappings[e.Name] = _extends({},
    e, {
      Content: _extends({}, result.Mappings[e.Name].Content, e.Content) });

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

function _calcFromExistingTemplate(t, inputTemplate) {
  if (inputTemplate.Parameters) {
    Object.keys(inputTemplate.Parameters).map(p => {
      t = t.add((0, _parameter.Parameter)(p, inputTemplate.Parameters[p]));
    });
  }
  if (inputTemplate.Resources) {
    Object.keys(inputTemplate.Resources).map(r => {
      console.log('r');
      console.log(inputTemplate.Resources[r]);
      let split = inputTemplate.Resources[r].Type.split('::');
      let cat = split[1];
      let resType = split[2];
      let service = (0, _service.Service)(cat);
      t = t.add(service[resType](r, inputTemplate.Resources[r].Properties));
    });
  }
  if (inputTemplate.Outputs) {
    Object.keys(inputTemplate.Outputs).map(o => {
      console.log('o');
      t = t.add((0, _output.Output)(o, inputTemplate.Outputs[o]));
    });
  }
  if (inputTemplate.Mappings) {
    Object.keys(inputTemplate.Mappings).map(m => {
      Object.keys(inputTemplate.Mappings[m]).map(m0 => {
        t = t.add((0, _mapping.Mapping)(m, m0, inputTemplate.Mappings[m][m0]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uIiwiQ29uZGl0aW9ucyIsIk1hcHBpbmdzIiwiT3V0cHV0cyIsIlBhcmFtZXRlcnMiLCJSZXNvdXJjZXMiLCJhZGQiLCJlIiwib3B0aW9ucyIsIl90IiwiY2xvbmVEZWVwIiwia2luZCIsIl9hZGRDcmVhdGlvblBvbGljeSIsIl9hZGRSZXNvdXJjZU1ldGFkYXRhIiwiX2FkZENvbmRpdGlvbiIsIl9hZGRNYXBwaW5nIiwiX2FkZFBhcmFtZXRlciIsIl9hZGRPdXRwdXQiLCJuZXdUIiwiZiIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJtYXAiLCJwIiwicGFyYW1OYW1lIiwiTmFtZSIsIlByb3BlcnRpZXMiLCJfYWRkUmVzb3VyY2UiLCJPdXRwdXQiLCJWYWx1ZSIsIkV4cG9ydCIsIkFXU19TVEFDS19OQU1FIiwiX2FkZERlc2NyaXB0aW9uIiwiU3ludGF4RXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGQiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYyIsIm0iLCJvIiwiciIsIkRlc2NyaXB0aW9uIiwicmVtb3ZlIiwiZWxlbWVudCIsInBhcmFtZXRlciIsIm91dHB1dCIsIm1hcHBpbmciLCJfcmVtb3ZlUGFyYW1ldGVyIiwiX3JlbW92ZU91dHB1dCIsIl9yZW1vdmVNYXBwaW5nIiwicmVtb3ZlRGVzY3JpcHRpb24iLCJyZW1haW5pbmciLCJtZXJnZSIsInQiLCJjb21iaW5lZCIsImJsb2NrIiwiaW1wb3J0IiwiaW5wdXRUZW1wbGF0ZSIsIl9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUiLCJfdmFsaWRhdGVSZWYiLCJyZWYiLCJSZWYiLCJfdmFsaWRhdGVGbkdldEF0dCIsImF0dCIsIkZuR2V0QXR0IiwiX3N0cmlwIiwicmVzdCIsIl9zdHJpcEtpbmQiLCJ0YXJnZXQiLCJfY2xlYW5PYmplY3QiLCJvYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiX2J1aWxkUmVzb3VyY2UiLCJDcmVhdGlvblBvbGljeSIsIk1ldGFkYXRhIiwibmV3UHJvcHMiLCJfYnVpbGRDb25kaXRpb24iLCJDb25kaXRpb24iLCJrIiwiX2J1aWxkQ3JlYXRpb25Qb2xpY3kiLCJDb250ZW50IiwiX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSIsIl9idWlsZEZuSm9pbiIsIlZhbHVlcyIsIkRlbGltaXRlciIsIl9idWlsZE1hcHBpbmciLCJfYnVpbGRPdXRwdXQiLCJvdXRwdXRSZXN1bHQiLCJhc3NpZ24iLCJzdHJpcHBlZCIsIkZuRXF1YWxzIiwiRm5TdWIiLCJkZXNjIiwiUmVzb3VyY2UiLCJyZXNvdXJjZSIsImUwIiwib3V0IiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiY2F0IiwicmVzVHlwZSIsInNlcnZpY2UiLCJtMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEZ0JBLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZTQUMsSyxHQUFBQSxLLENBdFdoQixnQywrQ0FDQSxpREFDQSxxREFFQSw2Q0FDQSxpREFDQSwrQ0FDQSwyQ0FHQSw2REFDQSxpREFDQSx3Q0FD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QUFQO0FBQ0QiLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElQYXJhbWV0ZXIsIFBhcmFtZXRlciB9IGZyb20gJy4vZWxlbWVudHMvcGFyYW1ldGVyJztcbmltcG9ydCB7IElEZXNjcmlwdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvZGVzY3JpcHRpb24nO1xuLy8gaW1wb3J0IHsgSU1ldGFkYXRhIH0gZnJvbSAnLi9lbGVtZW50cy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBJTWFwcGluZyB9IGZyb20gJy4vZWxlbWVudHMvbWFwcGluZyc7XG5pbXBvcnQgeyBJQ29uZGl0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgSVJlc291cmNlIH0gZnJvbSAnLi9lbGVtZW50cy9yZXNvdXJjZSc7XG5pbXBvcnQgeyBJT3V0cHV0LCBPdXRwdXQgfSBmcm9tICcuL2VsZW1lbnRzL291dHB1dCc7XG5pbXBvcnQgdHlwZSB7IElFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9lbGVtZW50JztcbmltcG9ydCB7IE1hcHBpbmcgfSBmcm9tICcuL2VsZW1lbnRzL21hcHBpbmcnO1xuaW1wb3J0IHsgSUNyZWF0aW9uUG9saWN5IH0gZnJvbSAnLi9hdHRyaWJ1dGVzL2NyZWF0aW9ucG9saWN5JztcbmltcG9ydCB7IElSZXNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9hdHRyaWJ1dGVzL21ldGFkYXRhJztcbmltcG9ydCB7IFJlZiwgRm5TdWIsIEZuR2V0QXR0IH0gZnJvbSAnLi9pbnRyaW5zaWMnO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQgeyBQc2V1ZG8gfSBmcm9tICcuL3BzZXVkbyc7XG5pbXBvcnQgdHlwZSB7XG4gIElSZWYsXG4gIElGbkdldEF0dCxcbiAgSUZuSm9pbixcbiAgQ29uZGl0aW9uYWwsXG4gIElJbnRyaW5zaWMsXG4gIElGbkFuZCxcbiAgSUZuRXF1YWxzLFxuICBJRm5JZixcbiAgSUZuTm90LFxuICBJRm5PclxufSBmcm9tICcuL2ludHJpbnNpYyc7XG5cbi8qKlxuICogVGVtcGxhdGUgSW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlIHtcbiAgK2tpbmQ6ICdUZW1wbGF0ZScsXG4gICtBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246IHN0cmluZyxcbiAgK0Rlc2NyaXB0aW9uPzogdm9pZCB8IHN0cmluZyxcbiAgK1BhcmFtZXRlcnM6IHsgK1tzOiBzdHJpbmddOiBJUGFyYW1ldGVyIH0sXG4gIC8vICtNZXRhZGF0YTogeyArW3M6IHN0cmluZ106IElNZXRhZGF0YSB9O1xuICArTWFwcGluZ3M6IHsgK1tzOiBzdHJpbmddOiBJTWFwcGluZyB9LFxuICArQ29uZGl0aW9uczogeyArW3M6IHN0cmluZ106IElDb25kaXRpb24gfSxcbiAgK1Jlc291cmNlczogeyArW3M6IHN0cmluZ106IElSZXNvdXJjZSB9LFxuICArT3V0cHV0czogeyArW3M6IHN0cmluZ106IElPdXRwdXQgfSxcbiAgK2FkZDogRnVuY3Rpb24sXG4gICtyZW1vdmU6IEZ1bmN0aW9uLFxuICArcmVtb3ZlRGVzY3JpcHRpb246IEZ1bmN0aW9uLFxuICArYnVpbGQ6IEZ1bmN0aW9uLFxuICArbWVyZ2U6IEZ1bmN0aW9uLFxuICAraW1wb3J0OiBGdW5jdGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBZGRPcHRpb25zIHtcbiAgT3V0cHV0OiBib29sZWFuLFxuICBQYXJhbWV0ZXJzOiBBcnJheTxzdHJpbmc+XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBUZW1wbGF0ZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZW1wbGF0ZSgpOiBJVGVtcGxhdGUge1xuICByZXR1cm4ge1xuICAgIEFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogJzIwMTAtMDktMDknLFxuICAgIENvbmRpdGlvbnM6IHt9LFxuICAgIE1hcHBpbmdzOiB7fSxcbiAgICBPdXRwdXRzOiB7fSxcbiAgICBQYXJhbWV0ZXJzOiB7fSxcbiAgICBSZXNvdXJjZXM6IHt9LFxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBQYXJhbWV0ZXIsIERlc2NyaXB0aW9uLCBPdXRwdXQsIFJlc291cmNlLCBDb25kaXRpb24sIG9yIE1hcHBpbmcgdG8gdGhlIHRlbXBsYXRlLiBSZXR1cm5zIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGVsZW1lbnQgYWRkZWQuIERvZXMgbm90IG11dGF0ZSB0aGUgb3JpZ2luYWwgVGVtcGxhdGUgb2JqZWN0LlxuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24oZTogSUVsZW1lbnQsIG9wdGlvbnM/OiBJQWRkT3B0aW9ucyk6IElUZW1wbGF0ZSB7XG4gICAgICBjb25zdCBfdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgc3dpdGNoIChlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnQ3JlYXRpb25Qb2xpY3knOlxuICAgICAgICAgIHJldHVybiBfYWRkQ3JlYXRpb25Qb2xpY3koX3QsIGUpO1xuICAgICAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgICAgICByZXR1cm4gX2FkZFJlc291cmNlTWV0YWRhdGEoX3QsIGUpO1xuICAgICAgICBjYXNlICdDb25kaXRpb24nOlxuICAgICAgICAgIHJldHVybiBfYWRkQ29uZGl0aW9uKF90LCBlKTtcbiAgICAgICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRNYXBwaW5nKF90LCBlKTtcbiAgICAgICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgICAgICByZXR1cm4gX2FkZFBhcmFtZXRlcihfdCwgZSk7XG4gICAgICAgIGNhc2UgJ091dHB1dCc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRPdXRwdXQoX3QsIGUpO1xuICAgICAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICAgICAgbGV0IG5ld1QgPSBfdDtcbiAgICAgICAgICBsZXQgZiA9IF8uY2xvbmVEZWVwKGUpO1xuICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lU3BsaXQgPSBmLlR5cGUuc3BsaXQoJzo6Jykuc3BsaWNlKDEpO1xuICAgICAgICAgICAgY29uc3Qgc2hvcnROYW1lID0gbmFtZVNwbGl0LmpvaW4oJycpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuUGFyYW1ldGVycykge1xuICAgICAgICAgICAgICBvcHRpb25zLlBhcmFtZXRlcnMubWFwKHAgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGAke2YuTmFtZX0ke3Nob3J0TmFtZX1QYXJhbWA7XG4gICAgICAgICAgICAgICAgaWYgKCFmLlByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgIGYuUHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmLlByb3BlcnRpZXNbcF0gPSBSZWYocGFyYW1OYW1lKTtcbiAgICAgICAgICAgICAgICBuZXdUID0gX2FkZFBhcmFtZXRlcihcbiAgICAgICAgICAgICAgICAgIG5ld1QsXG4gICAgICAgICAgICAgICAgICBQYXJhbWV0ZXIocGFyYW1OYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIFR5cGU6ICdTdHJpbmcnXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VCA9IF9hZGRSZXNvdXJjZShfdCwgZik7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5PdXRwdXQpIHtcbiAgICAgICAgICAgICAgbmV3VCA9IF9hZGRPdXRwdXQoXG4gICAgICAgICAgICAgICAgbmV3VCxcbiAgICAgICAgICAgICAgICBPdXRwdXQoYCR7Zi5OYW1lfSR7c2hvcnROYW1lfU91dHB1dGAsIHtcbiAgICAgICAgICAgICAgICAgIFZhbHVlOiBSZWYoZi5OYW1lKSxcbiAgICAgICAgICAgICAgICAgIEV4cG9ydDoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBGblN1YihcbiAgICAgICAgICAgICAgICAgICAgICBgXFwkXFx7JHtQc2V1ZG8uQVdTX1NUQUNLX05BTUV9XFx9LSR7bmFtZVNwbGl0WzBdfS0ke25hbWVTcGxpdFsxXX0tJHtmLk5hbWV9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VCA9IF9hZGRSZXNvdXJjZShfdCwgZik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdUO1xuICAgICAgICBjYXNlICdEZXNjcmlwdGlvbic6XG4gICAgICAgICAgcmV0dXJuIF9hZGREZXNjcmlwdGlvbihfdCwgZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoZSl9IGlzIG5vdCBhIHZhbGlkIHR5cGUsIGNvdWxkIG5vdCBiZSBhZGRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiBmdW5jdGlvbigpOiBtaXhlZCB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7XG4gICAgICAgIEFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogJzIwMTAtMDktMDknLFxuICAgICAgICBSZXNvdXJjZXM6IHt9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuQ29uZGl0aW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuQ29uZGl0aW9ucyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLkNvbmRpdGlvbnMpLm1hcChjID0+IHtcbiAgICAgICAgICByZXN1bHQuQ29uZGl0aW9uc1tjXSA9IF9qc29uKHRoaXMuQ29uZGl0aW9uc1tjXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUGFyYW1ldGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuUGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLlBhcmFtZXRlcnMpLm1hcChwID0+IHtcbiAgICAgICAgICByZXN1bHQuUGFyYW1ldGVyc1twXSA9IF9qc29uKHRoaXMuUGFyYW1ldGVyc1twXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuTWFwcGluZ3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0Lk1hcHBpbmdzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuTWFwcGluZ3MpLm1hcChtID0+IHtcbiAgICAgICAgICByZXN1bHQuTWFwcGluZ3NbbV0gPSBfanNvbih0aGlzLk1hcHBpbmdzW21dKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5PdXRwdXRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5PdXRwdXRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuT3V0cHV0cykubWFwKG8gPT4ge1xuICAgICAgICAgIHJlc3VsdC5PdXRwdXRzW29dID0gX2pzb24odGhpcy5PdXRwdXRzW29dKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5SZXNvdXJjZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LlJlc291cmNlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLlJlc291cmNlcykubWFwKHIgPT4ge1xuICAgICAgICAgIHJlc3VsdC5SZXNvdXJjZXNbcl0gPSBfanNvbih0aGlzLlJlc291cmNlc1tyXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuRGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmVzdWx0LkRlc2NyaXB0aW9uID0gdGhpcy5EZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBraW5kOiAnVGVtcGxhdGUnLFxuICAgIHJlbW92ZTogZnVuY3Rpb24oZTogSUVsZW1lbnQgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICAgICAgbGV0IHJlc3VsdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgbGV0IGVsZW1lbnQ6IElFbGVtZW50O1xuICAgICAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgcGFyYW1ldGVyOiBJUGFyYW1ldGVyIHwgdm9pZCA9IHJlc3VsdC5QYXJhbWV0ZXJzW2VdO1xuICAgICAgICBpZiAocGFyYW1ldGVyKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHBhcmFtZXRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgb3V0cHV0OiBJT3V0cHV0IHwgdm9pZCA9IHJlc3VsdC5PdXRwdXRzW2VdO1xuICAgICAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvdXRwdXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtYXBwaW5nOiBJTWFwcGluZyB8IHZvaWQgPSByZXN1bHQuTWFwcGluZ3NbZV07XG4gICAgICAgICAgICBpZiAobWFwcGluZykge1xuICAgICAgICAgICAgICBlbGVtZW50ID0gbWFwcGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBlO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChlbGVtZW50LmtpbmQpIHtcbiAgICAgICAgLypjYXNlICdDb25kaXRpb24nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlbW92ZUNvbmRpdGlvbih0aGlzLCBlKTsqL1xuICAgICAgICBjYXNlICdQYXJhbWV0ZXInOlxuICAgICAgICAgIHJldHVybiBfcmVtb3ZlUGFyYW1ldGVyKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgICAgIHJldHVybiBfcmVtb3ZlT3V0cHV0KHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICAvKmNhc2UgJ1Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZW1vdmVSZXNvdXJjZSh0aGlzLCBlKTsqL1xuICAgICAgICBjYXNlICdNYXBwaW5nJzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZU1hcHBpbmcodGhpcywgZWxlbWVudCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoZSl9IGlzIG5vdCBhIHZhbGlkIHR5cGUsIGNvdWxkIG5vdCBiZSBhZGRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZURlc2NyaXB0aW9uOiBmdW5jdGlvbigpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgeyBEZXNjcmlwdGlvbiwgLi4ucmVtYWluaW5nIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbih0OiBJVGVtcGxhdGUpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0ge307XG4gICAgICBbXG4gICAgICAgICdDb25kaXRpb25zJyxcbiAgICAgICAgJ01hcHBpbmcnLFxuICAgICAgICAnT3V0cHV0cycsXG4gICAgICAgICdQYXJhbWV0ZXJzJyxcbiAgICAgICAgJ1Jlc291cmNlcycsXG4gICAgICAgICdEZXNjcmlwdGlvbidcbiAgICAgIF0ubWFwKGJsb2NrID0+IHtcbiAgICAgICAgaWYgKHRbYmxvY2tdKSB7XG4gICAgICAgICAgY29tYmluZWRbYmxvY2tdID0geyAuLi5fdFtibG9ja10sIC4uLnRbYmxvY2tdIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uX3QsXG4gICAgICAgIC4uLmNvbWJpbmVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgaW1wb3J0OiBmdW5jdGlvbihpbnB1dFRlbXBsYXRlOiBtaXhlZCk6IElUZW1wbGF0ZSB7XG4gICAgICBsZXQgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIHJldHVybiBfY2FsY0Zyb21FeGlzdGluZ1RlbXBsYXRlKF90LCBpbnB1dFRlbXBsYXRlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVJlZih0OiBJVGVtcGxhdGUsIHJlZjogSVJlZik6IHZvaWQgfCBTeW50YXhFcnJvciB7XG4gIGlmIChyZWYuUmVmKSB7XG4gICAgaWYgKCEodC5QYXJhbWV0ZXJzW3JlZi5SZWZdIHx8IHQuUmVzb3VyY2VzW3JlZi5SZWZdKSkge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KHJlZil9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gX3ZhbGlkYXRlRm5HZXRBdHQodDogSVRlbXBsYXRlLCBhdHQ6IElGbkdldEF0dCk6IHZvaWQgfCBTeW50YXhFcnJvciB7XG4gIGlmIChhdHQuRm5HZXRBdHQgJiYgIXQuUmVzb3VyY2VzW2F0dC5GbkdldEF0dFswXV0pIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoYXR0KX1gKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIF9zdHJpcCh0OiBJUGFyYW1ldGVyIHwgSU91dHB1dCB8IElSZXNvdXJjZSB8IElDb25kaXRpb24pOiBhbnkge1xuICBsZXQgeyBraW5kLCBOYW1lLCAuLi5yZXN0IH0gPSB0O1xuICByZXR1cm4gcmVzdDtcbn1cblxuZnVuY3Rpb24gX3N0cmlwS2luZCh0YXJnZXQ6IGFueSk6IG1peGVkIHtcbiAgbGV0IHsga2luZCwgLi4ucmVzdCB9ID0gdGFyZ2V0O1xuICByZXR1cm4gcmVzdDtcbn1cblxuZnVuY3Rpb24gX2NsZWFuT2JqZWN0KG9iamVjdDogYW55KTogbWl4ZWQge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgZm9yIChsZXQgdiA9IDA7IHYgPCBvYmplY3QubGVuZ3RoOyB2KyspIHtcbiAgICAgIG9iamVjdFt2XSA9IF9jbGVhbk9iamVjdChvYmplY3Rbdl0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAob2JqZWN0LmtpbmQpIHtcbiAgICAgIG9iamVjdCA9IF9qc29uKG9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IG8gaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3Rbb10gIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdFtvXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBvYmplY3Rbb10gPSBfY2xlYW5PYmplY3Qob2JqZWN0W29dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRSZXNvdXJjZSh0OiBJUmVzb3VyY2UpOiBtaXhlZCB7XG4gIGxldCB7IFR5cGUsIFByb3BlcnRpZXMsIENyZWF0aW9uUG9saWN5LCBNZXRhZGF0YSB9ID0gdDtcbiAgbGV0IG5ld1Byb3BzOiBtaXhlZCA9IHt9O1xuICBpZiAoUHJvcGVydGllcykge1xuICAgIE9iamVjdC5rZXlzKFByb3BlcnRpZXMpLm1hcChwID0+IHtcbiAgICAgIGlmIChQcm9wZXJ0aWVzW3BdLmtpbmQpIHtcbiAgICAgICAgbmV3UHJvcHNbcF0gPSBfanNvbihQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2NsZWFuT2JqZWN0KFByb3BlcnRpZXNbcF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCByZXN1bHQgPSB7IFR5cGUsIFByb3BlcnRpZXM6IG5ld1Byb3BzIH07XG4gIGlmIChDcmVhdGlvblBvbGljeSkge1xuICAgIHJlc3VsdC5DcmVhdGlvblBvbGljeSA9IF9qc29uKENyZWF0aW9uUG9saWN5KTtcbiAgfVxuICBpZiAoTWV0YWRhdGEpIHtcbiAgICByZXN1bHQuTWV0YWRhdGEgPSBfanNvbihNZXRhZGF0YSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkQ29uZGl0aW9uKHQ6IElDb25kaXRpb24pOiBzdHJpbmcge1xuICBsZXQgeyBDb25kaXRpb24gfSA9IHQ7XG4gIGxldCByZXN1bHQgPSBfanNvbihDb25kaXRpb24pO1xuICBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcChrID0+IHtcbiAgICByZXN1bHRba11bMF0gPSBfanNvbihyZXN1bHRba11bMF0pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkQ3JlYXRpb25Qb2xpY3kodDogSUNyZWF0aW9uUG9saWN5KTogbWl4ZWQge1xuICBsZXQgeyBDb250ZW50IH0gPSB0O1xuICByZXR1cm4gQ29udGVudDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSh0OiBJUmVzb3VyY2VNZXRhZGF0YSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZEZuSm9pbih0OiBJRm5Kb2luKTogbWl4ZWQge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0LlZhbHVlcykpIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIHQuVmFsdWVzXSB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7ICdGbjo6Sm9pbic6IFt0LkRlbGltaXRlciwgX2pzb24odC5WYWx1ZXMpXSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF9idWlsZE1hcHBpbmcodDogSU1hcHBpbmcpOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gdC5Db250ZW50O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRPdXRwdXQodDogSU91dHB1dCk6IHN0cmluZyB7XG4gIGxldCBvdXRwdXRSZXN1bHQ6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHQuUHJvcGVydGllcyk7XG4gIGlmICh0eXBlb2Ygb3V0cHV0UmVzdWx0LlZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5WYWx1ZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIFZhbHVlOiBzdHJpcHBlZCB9O1xuICB9XG4gIGlmIChcbiAgICBvdXRwdXRSZXN1bHQuRXhwb3J0ICYmXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydC5OYW1lICYmXG4gICAgdHlwZW9mIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgbGV0IHN0cmlwcGVkID0gX2pzb24ob3V0cHV0UmVzdWx0LkV4cG9ydC5OYW1lKTtcbiAgICBvdXRwdXRSZXN1bHQgPSB7IC4uLm91dHB1dFJlc3VsdCwgRXhwb3J0OiB7IE5hbWU6IHN0cmlwcGVkIH0gfTtcbiAgfVxuICByZXR1cm4gb3V0cHV0UmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2pzb24oXG4gIHQ6IElFbGVtZW50IHwgSVJlZiB8IElGbkdldEF0dCB8IElGbkpvaW4gfCBGblN1YiB8IElDcmVhdGlvblBvbGljeVxuKTogbWl4ZWQge1xuICBzd2l0Y2ggKHQua2luZCkge1xuICAgIGNhc2UgJ1JlZic6XG4gICAgICByZXR1cm4geyBSZWY6IHQuUmVmIH07XG4gICAgY2FzZSAnRm5HZXRBdHQnOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpHZXRBdHQnOiB0LkZuR2V0QXR0IH07XG4gICAgY2FzZSAnRm5Kb2luJzpcbiAgICAgIHJldHVybiBfYnVpbGRGbkpvaW4odCk7XG4gICAgY2FzZSAnRm5FcXVhbHMnOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpFcXVhbHMnOiB0LkZuRXF1YWxzIH07XG4gICAgY2FzZSAnRm5TdWInOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpTdWInOiB0LkZuU3ViIH07XG4gICAgY2FzZSAnQ3JlYXRpb25Qb2xpY3knOlxuICAgICAgcmV0dXJuIF9idWlsZENyZWF0aW9uUG9saWN5KHQpO1xuICAgIGNhc2UgJ1Jlc291cmNlTWV0YWRhdGEnOlxuICAgICAgcmV0dXJuIF9idWlsZFJlc291cmNlTWV0YWRhdGEodCk7XG4gICAgY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgIHJldHVybiBfYnVpbGRDb25kaXRpb24odCk7XG4gICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICByZXR1cm4gX2J1aWxkTWFwcGluZyh0KTtcbiAgICBjYXNlICdQYXJhbWV0ZXInOlxuICAgICAgcmV0dXJuIF9zdHJpcCh0KS5Qcm9wZXJ0aWVzO1xuICAgIGNhc2UgJ091dHB1dCc6XG4gICAgICByZXR1cm4gX2J1aWxkT3V0cHV0KHQpO1xuICAgIGNhc2UgJ1Jlc291cmNlJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZSh0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDYW4ndCBjYWxsIF9qc29uIG9uICR7SlNPTi5zdHJpbmdpZnkodCl9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FkZERlc2NyaXB0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSURlc2NyaXB0aW9uKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgZGVzYyA9IHsgRGVzY3JpcHRpb246IGUuQ29udGVudCB9O1xuICByZXN1bHQgPSB7IC4uLnQsIC4uLmRlc2MgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZENyZWF0aW9uUG9saWN5KHQ6IElUZW1wbGF0ZSwgZTogSUNyZWF0aW9uUG9saWN5KTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBpZiAoIXJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0pIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAnQ2Fubm90IGFkZCBDcmVhdGlvblBvbGljeSB0byBhIFJlc291cmNlIHRoYXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRlbXBsYXRlLidcbiAgICApO1xuICB9XG4gIGxldCByZXNvdXJjZSA9IHsgLi4ucmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSB9O1xuICByZXNvdXJjZS5DcmVhdGlvblBvbGljeSA9IGU7XG4gIHJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gPSByZXNvdXJjZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFJlc291cmNlTWV0YWRhdGEodDogSVRlbXBsYXRlLCBlOiBJUmVzb3VyY2VNZXRhZGF0YSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgTWV0YWRhdGEgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuTWV0YWRhdGEgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDb25kaXRpb24odDogSVRlbXBsYXRlLCBlOiBJQ29uZGl0aW9uKTogSVRlbXBsYXRlIHtcbiAgLy8gVE9ETzogVmFsaWRhdGUgaW50cmluc2ljc1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5Db25kaXRpb25zW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkT3V0cHV0KHQ6IElUZW1wbGF0ZSwgZTogSU91dHB1dCk6IElUZW1wbGF0ZSB7XG4gIGxldCBlMCA9IF8uY2xvbmVEZWVwKGUpO1xuICBpZiAodHlwZW9mIGUwLlByb3BlcnRpZXMuVmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGUwLlByb3BlcnRpZXMuVmFsdWUuUmVmKSB7XG4gICAgICBfdmFsaWRhdGVSZWYodCwgZTAuUHJvcGVydGllcy5WYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBlMC5Qcm9wZXJ0aWVzLlZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZVsnRm46OkdldEF0dCddXG4gICAgKSB7XG4gICAgICBlMC5Qcm9wZXJ0aWVzLlZhbHVlID0gRm5HZXRBdHQoXG4gICAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVswXSxcbiAgICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZVsnRm46OkdldEF0dCddWzFdXG4gICAgICApO1xuICAgICAgX3ZhbGlkYXRlRm5HZXRBdHQodCwgZTAuUHJvcGVydGllcy5WYWx1ZSk7XG4gICAgfVxuICB9XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0Lk91dHB1dHNbZTAuTmFtZV0gPSBlMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFBhcmFtZXRlcih0OiBJVGVtcGxhdGUsIGU6IElQYXJhbWV0ZXIpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5QYXJhbWV0ZXJzW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkTWFwcGluZyh0OiBJVGVtcGxhdGUsIGU6IElNYXBwaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBpZiAocmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0pIHtcbiAgICByZXN1bHQuTWFwcGluZ3NbZS5OYW1lXSA9IHtcbiAgICAgIC4uLmUsXG4gICAgICBDb250ZW50OiB7IC4uLnJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdLkNvbnRlbnQsIC4uLmUuQ29udGVudCB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQuTWFwcGluZ3NbZS5OYW1lXSA9IGU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFJlc291cmNlKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuUmVzb3VyY2VzW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTWFwcGluZyh0OiBJVGVtcGxhdGUsIGU6IElNYXBwaW5nIHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgbWFwcGluZzogSU1hcHBpbmc7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0Lk1hcHBpbmdzW2VdKSB7XG4gICAgICBtYXBwaW5nID0gcmVzdWx0Lk1hcHBpbmdzW2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcHBpbmcgPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuTWFwcGluZ3NbbWFwcGluZy5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuTWFwcGluZ3NbbWFwcGluZy5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkobWFwcGluZyl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZU91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGxldCBvdXQ6IElPdXRwdXQ7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0Lk91dHB1dHNbZV0pIHtcbiAgICAgIG91dCA9IHJlc3VsdC5PdXRwdXRzW2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG91dCA9IGU7XG4gIH1cbiAgaWYgKHJlc3VsdC5PdXRwdXRzW291dC5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuT3V0cHV0c1tvdXQuTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KG91dCl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZVBhcmFtZXRlcih0OiBJVGVtcGxhdGUsIGU6IElQYXJhbWV0ZXIgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGxldCBwYXJhbTogSVBhcmFtZXRlcjtcbiAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChyZXN1bHQuUGFyYW1ldGVyc1tlXSkge1xuICAgICAgcGFyYW0gPSByZXN1bHQuUGFyYW1ldGVyc1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJhbSA9IGU7XG4gIH1cbiAgaWYgKHJlc3VsdC5QYXJhbWV0ZXJzW3BhcmFtLk5hbWVdKSB7XG4gICAgZGVsZXRlIHJlc3VsdC5QYXJhbWV0ZXJzW3BhcmFtLk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShwYXJhbSl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2NhbGNGcm9tRXhpc3RpbmdUZW1wbGF0ZSh0OiBJVGVtcGxhdGUsIGlucHV0VGVtcGxhdGU6IG1peGVkKSB7XG4gIGlmIChpbnB1dFRlbXBsYXRlLlBhcmFtZXRlcnMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLlBhcmFtZXRlcnMpLm1hcChwID0+IHtcbiAgICAgIHQgPSB0LmFkZChQYXJhbWV0ZXIocCwgaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzW3BdKSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXMpLm1hcChyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyJyk7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dFRlbXBsYXRlLlJlc291cmNlc1tyXSk7XG4gICAgICBsZXQgc3BsaXQgPSBpbnB1dFRlbXBsYXRlLlJlc291cmNlc1tyXS5UeXBlLnNwbGl0KCc6OicpO1xuICAgICAgbGV0IGNhdCA9IHNwbGl0WzFdO1xuICAgICAgbGV0IHJlc1R5cGUgPSBzcGxpdFsyXTtcbiAgICAgIGxldCBzZXJ2aWNlID0gU2VydmljZShjYXQpO1xuICAgICAgdCA9IHQuYWRkKHNlcnZpY2VbcmVzVHlwZV0ociwgaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uUHJvcGVydGllcykpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk91dHB1dHMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdvJyk7XG4gICAgICB0ID0gdC5hZGQoT3V0cHV0KG8sIGlucHV0VGVtcGxhdGUuT3V0cHV0c1tvXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk1hcHBpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykubWFwKG0gPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5nc1ttXSkubWFwKG0wID0+IHtcbiAgICAgICAgdCA9IHQuYWRkKE1hcHBpbmcobSwgbTAsIGlucHV0VGVtcGxhdGUuTWFwcGluZ3NbbV1bbTBdKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICB0ID0gdC5hZGQoQ29uZGl0aW9uKGMsIGlucHV0VGVtcGxhdGUuQ29uZGl0aW9uc1tjXSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0O1xufVxuIl19