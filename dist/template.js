'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.




















































Template = Template;exports.












































































































































































































































































































_json = _json;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _parameter = require('./elements/parameter');var _description = require('./elements/description');var _mapping = require('./elements/mapping');var _condition = require('./elements/condition');var _resource = require('./elements/resource');var _output = require('./elements/output');var _creationpolicy = require('./attributes/creationpolicy');var _metadata = require('./attributes/metadata');var _intrinsic = require('./intrinsic');var _service = require('./service');var _pseudo = require('./pseudo');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} // import { IMetadata } from './elements/metadata';
/**
 * Returns a new Template object.
 */function Template() {return { AWSTemplateFormatVersion: '2010-09-09', Conditions: {}, Mappings: {}, Outputs: {}, Parameters: {}, Resources: {}, /**
                                                                                                                                                    * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
                                                                                                                                                    */add: function (e, options) {const _t = _lodash2.default.cloneDeep(this);switch (e.kind) {case 'CreationPolicy':return _addCreationPolicy(_t, e);case 'ResourceMetadata':return _addResourceMetadata(_t, e);case 'Condition':return _addCondition(_t, e);case 'Mapping':return _addMapping(_t, e);case 'Parameter':return _addParameter(_t, e);case 'Output':return _addOutput(_t, e);case 'Resource':let newT = _t;let f = _lodash2.default.cloneDeep(e);if (options) {const nameSplit = f.Type.split('::').splice(1);const shortName = nameSplit.join('');if (options.Parameters) {options.Parameters.map(p => {const paramName = `${f.Name}${shortName}Param`;if (!f.Properties) {f.Properties = {};}f.Properties[p] = (0, _intrinsic.Ref)(paramName);newT = _addParameter(newT, (0, _parameter.Parameter)(paramName, { Type: 'String' }));});}newT = _addResource(_t, f);if (options.Output) {newT = _addOutput(newT, (0, _output.Output)(`${f.Name}${shortName}Output`, { Value: (0, _intrinsic.Ref)(f.Name), Export: { Name: (0, _intrinsic.FnSub)(`\$\{${_pseudo.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`) } }));}} else {newT = _addResource(_t, f);}return newT;case 'Description':return _addDescription(_t, e);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, build: function () {let result = { AWSTemplateFormatVersion: '2010-09-09', Resources: {} };if (Object.keys(this.Conditions).length > 0) {result.Conditions = {};Object.keys(this.Conditions).map(c => {result.Conditions[c] = _json(this.Conditions[c]);});}if (Object.keys(this.Parameters).length > 0) {result.Parameters = {};Object.keys(this.Parameters).map(p => {result.Parameters[p] = _json(this.Parameters[p]);});}if (Object.keys(this.Mappings).length > 0) {result.Mappings = {};Object.keys(this.Mappings).map(m => {result.Mappings[m] = _json(this.Mappings[m]);});}if (Object.keys(this.Outputs).length > 0) {result.Outputs = {};Object.keys(this.Outputs).map(o => {result.Outputs[o] = _json(this.Outputs[o]);});}if (Object.keys(this.Resources).length > 0) {result.Resources = {};Object.keys(this.Resources).map(r => {result.Resources[r] = _json(this.Resources[r]);});}if (this.Description) {result.Description = this.Description;}return result;}, kind: 'Template', remove: function (e) {let result = _lodash2.default.cloneDeep(this);let element;if (typeof e === 'string') {let parameter = result.Parameters[e];if (parameter) {element = parameter;} else {let output = result.Outputs[e];if (output) {element = output;} else {let mapping = result.Mappings[e];if (mapping) {element = mapping;} else {throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);}}}} else {element = e;}switch (element.kind) {/*case 'Condition':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   return _removeCondition(this, e);*/case 'Parameter':return _removeParameter(this, element);case 'Output':return _removeOutput(this, element); /*case 'Resource':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             return _removeResource(this, e);*/case 'Mapping':return _removeMapping(this, element);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, removeDescription: function () {const _ref = this,{ Description } = _ref,remaining = _objectWithoutProperties(_ref, ['Description']);return remaining;}, merge: function (t) {const _t = _lodash2.default.cloneDeep(this);const combined = {};['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {if (t[block]) {combined[block] = _extends({}, _t[block], t[block]);}});return _extends({}, _t, combined);}, import: function (inputTemplate) {let _t = _lodash2.default.cloneDeep(this);return _calcFromExistingTemplate(_t, inputTemplate);} };}function _validateRef(t, ref) {if (ref.Ref) {if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);}}return;}function _validateFnGetAtt(t, att) {if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);}return;}function _strip(t) {let { kind, Name } = t,rest = _objectWithoutProperties(t, ['kind', 'Name']);return rest;}function _stripKind(target) {let { kind } = target,rest = _objectWithoutProperties(target, ['kind']);return rest;}function _cleanObject(object) {if (Array.isArray(object)) {for (let v = 0; v < object.length; v++) {object[v] = _cleanObject(object[v]);}} else {if (object.kind) {object = _json(object);} else {for (let o in object) {if (object[o] !== null && typeof object[o] === 'object') {object[o] = _cleanObject(object[o]);}}}}return object;}function _buildResource(t) {let { Type, Properties, CreationPolicy, Metadata } = t;let newProps = {};if (Properties) {Object.keys(Properties).map(p => {if (Properties[p].kind) {newProps[p] = _json(Properties[p]);} else {newProps[p] = _cleanObject(Properties[p]);}});}let result = { Type, Properties: newProps };if (CreationPolicy) {result.CreationPolicy = _json(CreationPolicy);}if (Metadata) {result.Metadata = _json(Metadata);}return result;}function _buildCondition(t) {let { Condition } = t;let result = _json(Condition);Object.keys(result).map(k => {result[k][0] = _json(result[k][0]);});return result;}function _buildCreationPolicy(t) {let { Content } = t;return Content;}function _buildResourceMetadata(t) {let { Content } = t;return Content;}function _buildFnJoin(t) {if (Array.isArray(t.Values)) {return { 'Fn::Join': [t.Delimiter, t.Values] };} else {return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };}}function _buildMapping(t) {let result = t.Content;return result;}function _buildOutput(t) {let outputResult = Object.assign({}, t.Properties);if (typeof outputResult.Value !== 'string') {let stripped = _json(outputResult.Value);outputResult = _extends({}, outputResult, { Value: stripped });}if (outputResult.Export && outputResult.Export.Name && typeof outputResult.Export.Name !== 'string') {let stripped = _json(outputResult.Export.Name);outputResult = _extends({}, outputResult, { Export: { Name: stripped } });}return outputResult;}function _json(t) {switch (t.kind) {case 'Ref':return { Ref: t.Ref };case 'FnGetAtt':return { 'Fn::GetAtt': t.FnGetAtt };
    case 'FnJoin':
      return _buildFnJoin(t);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uIiwiQ29uZGl0aW9ucyIsIk1hcHBpbmdzIiwiT3V0cHV0cyIsIlBhcmFtZXRlcnMiLCJSZXNvdXJjZXMiLCJhZGQiLCJlIiwib3B0aW9ucyIsIl90IiwiY2xvbmVEZWVwIiwia2luZCIsIl9hZGRDcmVhdGlvblBvbGljeSIsIl9hZGRSZXNvdXJjZU1ldGFkYXRhIiwiX2FkZENvbmRpdGlvbiIsIl9hZGRNYXBwaW5nIiwiX2FkZFBhcmFtZXRlciIsIl9hZGRPdXRwdXQiLCJuZXdUIiwiZiIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJtYXAiLCJwIiwicGFyYW1OYW1lIiwiTmFtZSIsIlByb3BlcnRpZXMiLCJfYWRkUmVzb3VyY2UiLCJPdXRwdXQiLCJWYWx1ZSIsIkV4cG9ydCIsIkFXU19TVEFDS19OQU1FIiwiX2FkZERlc2NyaXB0aW9uIiwiU3ludGF4RXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGQiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYyIsIm0iLCJvIiwiciIsIkRlc2NyaXB0aW9uIiwicmVtb3ZlIiwiZWxlbWVudCIsInBhcmFtZXRlciIsIm91dHB1dCIsIm1hcHBpbmciLCJfcmVtb3ZlUGFyYW1ldGVyIiwiX3JlbW92ZU91dHB1dCIsIl9yZW1vdmVNYXBwaW5nIiwicmVtb3ZlRGVzY3JpcHRpb24iLCJyZW1haW5pbmciLCJtZXJnZSIsInQiLCJjb21iaW5lZCIsImJsb2NrIiwiaW1wb3J0IiwiaW5wdXRUZW1wbGF0ZSIsIl9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUiLCJfdmFsaWRhdGVSZWYiLCJyZWYiLCJSZWYiLCJfdmFsaWRhdGVGbkdldEF0dCIsImF0dCIsIkZuR2V0QXR0IiwiX3N0cmlwIiwicmVzdCIsIl9zdHJpcEtpbmQiLCJ0YXJnZXQiLCJfY2xlYW5PYmplY3QiLCJvYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiX2J1aWxkUmVzb3VyY2UiLCJDcmVhdGlvblBvbGljeSIsIk1ldGFkYXRhIiwibmV3UHJvcHMiLCJfYnVpbGRDb25kaXRpb24iLCJDb25kaXRpb24iLCJrIiwiX2J1aWxkQ3JlYXRpb25Qb2xpY3kiLCJDb250ZW50IiwiX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSIsIl9idWlsZEZuSm9pbiIsIlZhbHVlcyIsIkRlbGltaXRlciIsIl9idWlsZE1hcHBpbmciLCJfYnVpbGRPdXRwdXQiLCJvdXRwdXRSZXN1bHQiLCJhc3NpZ24iLCJzdHJpcHBlZCIsIkZuRXF1YWxzIiwiRm5TdWIiLCJkZXNjIiwiUmVzb3VyY2UiLCJyZXNvdXJjZSIsImUwIiwib3V0IiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiY2F0IiwicmVzVHlwZSIsInNlcnZpY2UiLCJtMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRGdCQSxRLEdBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2U0FDLEssR0FBQUEsSyxDQWpXaEIsZ0MsK0NBQ0EsaURBQ0EscURBRUEsNkNBQ0EsaURBQ0EsK0NBQ0EsMkNBR0EsNkRBQ0EsaURBQ0Esd0NBQ0Esb0NB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bGUiOiJ0ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSVBhcmFtZXRlciwgUGFyYW1ldGVyIH0gZnJvbSAnLi9lbGVtZW50cy9wYXJhbWV0ZXInO1xuaW1wb3J0IHsgSURlc2NyaXB0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9kZXNjcmlwdGlvbic7XG4vLyBpbXBvcnQgeyBJTWV0YWRhdGEgfSBmcm9tICcuL2VsZW1lbnRzL21ldGFkYXRhJztcbmltcG9ydCB7IElNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmltcG9ydCB7IElDb25kaXRpb24gfSBmcm9tICcuL2VsZW1lbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBJUmVzb3VyY2UgfSBmcm9tICcuL2VsZW1lbnRzL3Jlc291cmNlJztcbmltcG9ydCB7IElPdXRwdXQsIE91dHB1dCB9IGZyb20gJy4vZWxlbWVudHMvb3V0cHV0JztcbmltcG9ydCB0eXBlIHsgSUVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTWFwcGluZyB9IGZyb20gJy4vZWxlbWVudHMvbWFwcGluZyc7XG5pbXBvcnQgeyBJQ3JlYXRpb25Qb2xpY3kgfSBmcm9tICcuL2F0dHJpYnV0ZXMvY3JlYXRpb25wb2xpY3knO1xuaW1wb3J0IHsgSVJlc291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2F0dHJpYnV0ZXMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgUmVmLCBGblN1YiwgRm5HZXRBdHQgfSBmcm9tICcuL2ludHJpbnNpYyc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmltcG9ydCB7IFBzZXVkbyB9IGZyb20gJy4vcHNldWRvJztcbmltcG9ydCB0eXBlIHtcbiAgSVJlZixcbiAgSUZuR2V0QXR0LFxuICBJRm5Kb2luLFxuICBDb25kaXRpb25hbCxcbiAgSUludHJpbnNpYyxcbiAgSUZuQW5kLFxuICBJRm5FcXVhbHMsXG4gIElGbklmLFxuICBJRm5Ob3QsXG4gIElGbk9yXG59IGZyb20gJy4vaW50cmluc2ljJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGUge1xuICAra2luZDogJ1RlbXBsYXRlJyxcbiAgK0FXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogc3RyaW5nLFxuICArRGVzY3JpcHRpb24/OiB2b2lkIHwgc3RyaW5nLFxuICArUGFyYW1ldGVyczogeyArW3M6IHN0cmluZ106IElQYXJhbWV0ZXIgfSxcbiAgLy8gK01ldGFkYXRhOiB7ICtbczogc3RyaW5nXTogSU1ldGFkYXRhIH07XG4gICtNYXBwaW5nczogeyArW3M6IHN0cmluZ106IElNYXBwaW5nIH0sXG4gICtDb25kaXRpb25zOiB7ICtbczogc3RyaW5nXTogSUNvbmRpdGlvbiB9LFxuICArUmVzb3VyY2VzOiB7ICtbczogc3RyaW5nXTogSVJlc291cmNlIH0sXG4gICtPdXRwdXRzOiB7ICtbczogc3RyaW5nXTogSU91dHB1dCB9LFxuICArYWRkOiBGdW5jdGlvbixcbiAgK3JlbW92ZTogRnVuY3Rpb24sXG4gICtyZW1vdmVEZXNjcmlwdGlvbjogRnVuY3Rpb24sXG4gICtidWlsZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkT3B0aW9ucyB7XG4gIE91dHB1dDogYm9vbGVhbixcbiAgUGFyYW1ldGVyczogQXJyYXk8c3RyaW5nPlxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVGVtcGxhdGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gVGVtcGxhdGUoKTogSVRlbXBsYXRlIHtcbiAgcmV0dXJuIHtcbiAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICBDb25kaXRpb25zOiB7fSxcbiAgICBNYXBwaW5nczoge30sXG4gICAgT3V0cHV0czoge30sXG4gICAgUGFyYW1ldGVyczoge30sXG4gICAgUmVzb3VyY2VzOiB7fSxcbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgUGFyYW1ldGVyLCBEZXNjcmlwdGlvbiwgT3V0cHV0LCBSZXNvdXJjZSwgQ29uZGl0aW9uLCBvciBNYXBwaW5nIHRvIHRoZSB0ZW1wbGF0ZS4gUmV0dXJucyBhIG5ldyBUZW1wbGF0ZSB3aXRoIHRoZSBlbGVtZW50IGFkZGVkLiBEb2VzIG5vdCBtdXRhdGUgdGhlIG9yaWdpbmFsIFRlbXBsYXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uKGU6IElFbGVtZW50LCBvcHRpb25zPzogSUFkZE9wdGlvbnMpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIHN3aXRjaCAoZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgICAgICByZXR1cm4gX2FkZENyZWF0aW9uUG9saWN5KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2VNZXRhZGF0YSc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRSZXNvdXJjZU1ldGFkYXRhKF90LCBlKTtcbiAgICAgICAgY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICByZXR1cm4gX2FkZENvbmRpdGlvbihfdCwgZSk7XG4gICAgICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgICAgIHJldHVybiBfYWRkTWFwcGluZyhfdCwgZSk7XG4gICAgICAgIGNhc2UgJ1BhcmFtZXRlcic6XG4gICAgICAgICAgcmV0dXJuIF9hZGRQYXJhbWV0ZXIoX3QsIGUpO1xuICAgICAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgICAgIHJldHVybiBfYWRkT3V0cHV0KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2UnOlxuICAgICAgICAgIGxldCBuZXdUID0gX3Q7XG4gICAgICAgICAgbGV0IGYgPSBfLmNsb25lRGVlcChlKTtcbiAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbmFtZVNwbGl0ID0gZi5UeXBlLnNwbGl0KCc6OicpLnNwbGljZSgxKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0TmFtZSA9IG5hbWVTcGxpdC5qb2luKCcnKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLlBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5QYXJhbWV0ZXJzLm1hcChwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBgJHtmLk5hbWV9JHtzaG9ydE5hbWV9UGFyYW1gO1xuICAgICAgICAgICAgICAgIGlmICghZi5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICBmLlByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZi5Qcm9wZXJ0aWVzW3BdID0gUmVmKHBhcmFtTmFtZSk7XG4gICAgICAgICAgICAgICAgbmV3VCA9IF9hZGRQYXJhbWV0ZXIoXG4gICAgICAgICAgICAgICAgICBuZXdULFxuICAgICAgICAgICAgICAgICAgUGFyYW1ldGVyKHBhcmFtTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiAnU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1QgPSBfYWRkUmVzb3VyY2UoX3QsIGYpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuT3V0cHV0KSB7XG4gICAgICAgICAgICAgIG5ld1QgPSBfYWRkT3V0cHV0KFxuICAgICAgICAgICAgICAgIG5ld1QsXG4gICAgICAgICAgICAgICAgT3V0cHV0KGAke2YuTmFtZX0ke3Nob3J0TmFtZX1PdXRwdXRgLCB7XG4gICAgICAgICAgICAgICAgICBWYWx1ZTogUmVmKGYuTmFtZSksXG4gICAgICAgICAgICAgICAgICBFeHBvcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogRm5TdWIoXG4gICAgICAgICAgICAgICAgICAgICAgYFxcJFxceyR7UHNldWRvLkFXU19TVEFDS19OQU1FfVxcfS0ke25hbWVTcGxpdFswXX0tJHtuYW1lU3BsaXRbMV19LSR7Zi5OYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1QgPSBfYWRkUmVzb3VyY2UoX3QsIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3VDtcbiAgICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxuICAgICAgICAgIHJldHVybiBfYWRkRGVzY3JpcHRpb24oX3QsIGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDogZnVuY3Rpb24oKTogbWl4ZWQge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge1xuICAgICAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICAgICAgUmVzb3VyY2VzOiB7fVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNvbmRpdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnNbY10gPSBfanNvbih0aGlzLkNvbmRpdGlvbnNbY10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLlBhcmFtZXRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnNbcF0gPSBfanNvbih0aGlzLlBhcmFtZXRlcnNbcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5NYXBwaW5ncyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5tYXAobSA9PiB7XG4gICAgICAgICAgcmVzdWx0Lk1hcHBpbmdzW21dID0gX2pzb24odGhpcy5NYXBwaW5nc1ttXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuT3V0cHV0cykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuT3V0cHV0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgICAgICByZXN1bHQuT3V0cHV0c1tvXSA9IF9qc29uKHRoaXMuT3V0cHV0c1tvXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUmVzb3VyY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5SZXNvdXJjZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5SZXNvdXJjZXMpLm1hcChyID0+IHtcbiAgICAgICAgICByZXN1bHQuUmVzb3VyY2VzW3JdID0gX2pzb24odGhpcy5SZXNvdXJjZXNbcl0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5EZXNjcmlwdGlvbiA9IHRoaXMuRGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAga2luZDogJ1RlbXBsYXRlJyxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGU6IElFbGVtZW50IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgICAgIGxldCByZXN1bHQgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIGxldCBlbGVtZW50OiBJRWxlbWVudDtcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjogSVBhcmFtZXRlciB8IHZvaWQgPSByZXN1bHQuUGFyYW1ldGVyc1tlXTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcikge1xuICAgICAgICAgIGVsZW1lbnQgPSBwYXJhbWV0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG91dHB1dDogSU91dHB1dCB8IHZvaWQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gb3V0cHV0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWFwcGluZzogSU1hcHBpbmcgfCB2b2lkID0gcmVzdWx0Lk1hcHBpbmdzW2VdO1xuICAgICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudCA9IG1hcHBpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gZTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZWxlbWVudC5raW5kKSB7XG4gICAgICAgIC8qY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZW1vdmVDb25kaXRpb24odGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZVBhcmFtZXRlcih0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgY2FzZSAnT3V0cHV0JzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZU91dHB1dCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgLypjYXNlICdSZXNvdXJjZSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVtb3ZlUmVzb3VyY2UodGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmVNYXBwaW5nKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVEZXNjcmlwdGlvbjogZnVuY3Rpb24oKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IHsgRGVzY3JpcHRpb24sIC4uLnJlbWFpbmluZyB9ID0gdGhpcztcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24odDogSVRlbXBsYXRlKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICBjb25zdCBjb21iaW5lZCA9IHt9O1xuICAgICAgW1xuICAgICAgICAnQ29uZGl0aW9ucycsXG4gICAgICAgICdNYXBwaW5nJyxcbiAgICAgICAgJ091dHB1dHMnLFxuICAgICAgICAnUGFyYW1ldGVycycsXG4gICAgICAgICdSZXNvdXJjZXMnLFxuICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICBdLm1hcChibG9jayA9PiB7XG4gICAgICAgIGlmICh0W2Jsb2NrXSkge1xuICAgICAgICAgIGNvbWJpbmVkW2Jsb2NrXSA9IHsgLi4uX3RbYmxvY2tdLCAuLi50W2Jsb2NrXSB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLl90LFxuICAgICAgICAuLi5jb21iaW5lZFxuICAgICAgfTtcbiAgICB9LFxuICAgIGltcG9ydDogZnVuY3Rpb24oaW5wdXRUZW1wbGF0ZTogbWl4ZWQpOiBJVGVtcGxhdGUge1xuICAgICAgbGV0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICByZXR1cm4gX2NhbGNGcm9tRXhpc3RpbmdUZW1wbGF0ZShfdCwgaW5wdXRUZW1wbGF0ZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVSZWYodDogSVRlbXBsYXRlLCByZWY6IElSZWYpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAocmVmLlJlZikge1xuICAgIGlmICghKHQuUGFyYW1ldGVyc1tyZWYuUmVmXSB8fCB0LlJlc291cmNlc1tyZWYuUmVmXSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShyZWYpfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZUZuR2V0QXR0KHQ6IElUZW1wbGF0ZSwgYXR0OiBJRm5HZXRBdHQpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAoYXR0LkZuR2V0QXR0ICYmICF0LlJlc291cmNlc1thdHQuRm5HZXRBdHRbMF1dKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGF0dCl9YCk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBfc3RyaXAodDogSVBhcmFtZXRlciB8IElPdXRwdXQgfCBJUmVzb3VyY2UgfCBJQ29uZGl0aW9uKTogYW55IHtcbiAgbGV0IHsga2luZCwgTmFtZSwgLi4ucmVzdCB9ID0gdDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEtpbmQodGFyZ2V0OiBhbnkpOiBtaXhlZCB7XG4gIGxldCB7IGtpbmQsIC4uLnJlc3QgfSA9IHRhcmdldDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9jbGVhbk9iamVjdChvYmplY3Q6IGFueSk6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgb2JqZWN0Lmxlbmd0aDsgdisrKSB7XG4gICAgICBvYmplY3Rbdl0gPSBfY2xlYW5PYmplY3Qob2JqZWN0W3ZdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdC5raW5kKSB7XG4gICAgICBvYmplY3QgPSBfanNvbihvYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBvIGluIG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0W29dICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3Rbb10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb2JqZWN0W29dID0gX2NsZWFuT2JqZWN0KG9iamVjdFtvXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2UodDogSVJlc291cmNlKTogbWl4ZWQge1xuICBsZXQgeyBUeXBlLCBQcm9wZXJ0aWVzLCBDcmVhdGlvblBvbGljeSwgTWV0YWRhdGEgfSA9IHQ7XG4gIGxldCBuZXdQcm9wczogbWl4ZWQgPSB7fTtcbiAgaWYgKFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3Qua2V5cyhQcm9wZXJ0aWVzKS5tYXAocCA9PiB7XG4gICAgICBpZiAoUHJvcGVydGllc1twXS5raW5kKSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2pzb24oUHJvcGVydGllc1twXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQcm9wc1twXSA9IF9jbGVhbk9iamVjdChQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgcmVzdWx0ID0geyBUeXBlLCBQcm9wZXJ0aWVzOiBuZXdQcm9wcyB9O1xuICBpZiAoQ3JlYXRpb25Qb2xpY3kpIHtcbiAgICByZXN1bHQuQ3JlYXRpb25Qb2xpY3kgPSBfanNvbihDcmVhdGlvblBvbGljeSk7XG4gIH1cbiAgaWYgKE1ldGFkYXRhKSB7XG4gICAgcmVzdWx0Lk1ldGFkYXRhID0gX2pzb24oTWV0YWRhdGEpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENvbmRpdGlvbih0OiBJQ29uZGl0aW9uKTogc3RyaW5nIHtcbiAgbGV0IHsgQ29uZGl0aW9uIH0gPSB0O1xuICBsZXQgcmVzdWx0ID0gX2pzb24oQ29uZGl0aW9uKTtcbiAgT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoayA9PiB7XG4gICAgcmVzdWx0W2tdWzBdID0gX2pzb24ocmVzdWx0W2tdWzBdKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENyZWF0aW9uUG9saWN5KHQ6IElDcmVhdGlvblBvbGljeSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFJlc291cmNlTWV0YWRhdGEodDogSVJlc291cmNlTWV0YWRhdGEpOiBtaXhlZCB7XG4gIGxldCB7IENvbnRlbnQgfSA9IHQ7XG4gIHJldHVybiBDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRGbkpvaW4odDogSUZuSm9pbik6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodC5WYWx1ZXMpKSB7XG4gICAgcmV0dXJuIHsgJ0ZuOjpKb2luJzogW3QuRGVsaW1pdGVyLCB0LlZhbHVlc10gfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIF9qc29uKHQuVmFsdWVzKV0gfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYnVpbGRNYXBwaW5nKHQ6IElNYXBwaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IHQuQ29udGVudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkT3V0cHV0KHQ6IElPdXRwdXQpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0UmVzdWx0OiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0LlByb3BlcnRpZXMpO1xuICBpZiAodHlwZW9mIG91dHB1dFJlc3VsdC5WYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBsZXQgc3RyaXBwZWQgPSBfanNvbihvdXRwdXRSZXN1bHQuVmFsdWUpO1xuICAgIG91dHB1dFJlc3VsdCA9IHsgLi4ub3V0cHV0UmVzdWx0LCBWYWx1ZTogc3RyaXBwZWQgfTtcbiAgfVxuICBpZiAoXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydCAmJlxuICAgIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAmJlxuICAgIHR5cGVvZiBvdXRwdXRSZXN1bHQuRXhwb3J0Lk5hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIEV4cG9ydDogeyBOYW1lOiBzdHJpcHBlZCB9IH07XG4gIH1cbiAgcmV0dXJuIG91dHB1dFJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9qc29uKFxuICB0OiBJRWxlbWVudCB8IElSZWYgfCBJRm5HZXRBdHQgfCBJRm5Kb2luIHwgRm5TdWIgfCBJQ3JlYXRpb25Qb2xpY3lcbik6IG1peGVkIHtcbiAgc3dpdGNoICh0LmtpbmQpIHtcbiAgICBjYXNlICdSZWYnOlxuICAgICAgcmV0dXJuIHsgUmVmOiB0LlJlZiB9O1xuICAgIGNhc2UgJ0ZuR2V0QXR0JzpcbiAgICAgIHJldHVybiB7ICdGbjo6R2V0QXR0JzogdC5GbkdldEF0dCB9O1xuICAgIGNhc2UgJ0ZuSm9pbic6XG4gICAgICByZXR1cm4gX2J1aWxkRm5Kb2luKHQpO1xuICAgIGNhc2UgJ0ZuRXF1YWxzJzpcbiAgICAgIHJldHVybiB7ICdGbjo6RXF1YWxzJzogdC5GbkVxdWFscyB9O1xuICAgIGNhc2UgJ0ZuU3ViJzpcbiAgICAgIHJldHVybiB7ICdGbjo6U3ViJzogdC5GblN1YiB9O1xuICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgIHJldHVybiBfYnVpbGRDcmVhdGlvblBvbGljeSh0KTtcbiAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZU1ldGFkYXRhKHQpO1xuICAgIGNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICByZXR1cm4gX2J1aWxkQ29uZGl0aW9uKHQpO1xuICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgcmV0dXJuIF9idWlsZE1hcHBpbmcodCk7XG4gICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgIHJldHVybiBfc3RyaXAodCkuUHJvcGVydGllcztcbiAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgcmV0dXJuIF9idWlsZE91dHB1dCh0KTtcbiAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICByZXR1cm4gX2J1aWxkUmVzb3VyY2UodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ2FuJ3QgY2FsbCBfanNvbiBvbiAke0pTT04uc3RyaW5naWZ5KHQpfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hZGREZXNjcmlwdGlvbih0OiBJVGVtcGxhdGUsIGU6IElEZXNjcmlwdGlvbik6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IGRlc2MgPSB7IERlc2NyaXB0aW9uOiBlLkNvbnRlbnQgfTtcbiAgcmVzdWx0ID0geyAuLi50LCAuLi5kZXNjIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDcmVhdGlvblBvbGljeSh0OiBJVGVtcGxhdGUsIGU6IElDcmVhdGlvblBvbGljeSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgQ3JlYXRpb25Qb2xpY3kgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuQ3JlYXRpb25Qb2xpY3kgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZU1ldGFkYXRhKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlTWV0YWRhdGEpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGlmICghcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICdDYW5ub3QgYWRkIE1ldGFkYXRhIHRvIGEgUmVzb3VyY2UgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuJ1xuICAgICk7XG4gIH1cbiAgbGV0IHJlc291cmNlID0geyAuLi5yZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdIH07XG4gIHJlc291cmNlLk1ldGFkYXRhID0gZTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSA9IHJlc291cmNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkQ29uZGl0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSUNvbmRpdGlvbik6IElUZW1wbGF0ZSB7XG4gIC8vIFRPRE86IFZhbGlkYXRlIGludHJpbnNpY3NcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuQ29uZGl0aW9uc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQpOiBJVGVtcGxhdGUge1xuICBsZXQgZTAgPSBfLmNsb25lRGVlcChlKTtcbiAgaWYgKHR5cGVvZiBlMC5Qcm9wZXJ0aWVzLlZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGlmIChlMC5Qcm9wZXJ0aWVzLlZhbHVlLlJlZikge1xuICAgICAgX3ZhbGlkYXRlUmVmKHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgZTAuUHJvcGVydGllcy5WYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVxuICAgICkge1xuICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZSA9IEZuR2V0QXR0KFxuICAgICAgICBlMC5Qcm9wZXJ0aWVzLlZhbHVlWydGbjo6R2V0QXR0J11bMF0sXG4gICAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVsxXVxuICAgICAgKTtcbiAgICAgIF92YWxpZGF0ZUZuR2V0QXR0KHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH1cbiAgfVxuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5PdXRwdXRzW2UwLk5hbWVdID0gZTA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuUGFyYW1ldGVyc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdKSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSB7XG4gICAgICAuLi5lLFxuICAgICAgQ29udGVudDogeyAuLi5yZXN1bHQuTWFwcGluZ3NbZS5OYW1lXS5Db250ZW50LCAuLi5lLkNvbnRlbnQgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSBlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZSh0OiBJVGVtcGxhdGUsIGU6IElSZXNvdXJjZSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZU1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IG1hcHBpbmc6IElNYXBwaW5nO1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlXSkge1xuICAgICAgbWFwcGluZyA9IHJlc3VsdC5NYXBwaW5nc1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXBwaW5nID0gZTtcbiAgfVxuICBpZiAocmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KG1hcHBpbmcpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVPdXRwdXQodDogSVRlbXBsYXRlLCBlOiBJT3V0cHV0IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgb3V0OiBJT3V0cHV0O1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5PdXRwdXRzW2VdKSB7XG4gICAgICBvdXQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvdXQgPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuT3V0cHV0c1tvdXQuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk91dHB1dHNbb3V0Lk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShvdXQpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyIHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgcGFyYW06IElQYXJhbWV0ZXI7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0LlBhcmFtZXRlcnNbZV0pIHtcbiAgICAgIHBhcmFtID0gcmVzdWx0LlBhcmFtZXRlcnNbZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyYW0gPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkocGFyYW0pfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUodDogSVRlbXBsYXRlLCBpbnB1dFRlbXBsYXRlOiBtaXhlZCkge1xuICBpZiAoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICB0ID0gdC5hZGQoUGFyYW1ldGVyKHAsIGlucHV0VGVtcGxhdGUuUGFyYW1ldGVyc1twXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLlJlc291cmNlcykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncicpO1xuICAgICAgY29uc29sZS5sb2coaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0pO1xuICAgICAgbGV0IHNwbGl0ID0gaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uVHlwZS5zcGxpdCgnOjonKTtcbiAgICAgIGxldCBjYXQgPSBzcGxpdFsxXTtcbiAgICAgIGxldCByZXNUeXBlID0gc3BsaXRbMl07XG4gICAgICBsZXQgc2VydmljZSA9IFNlcnZpY2UoY2F0KTtcbiAgICAgIHQgPSB0LmFkZChzZXJ2aWNlW3Jlc1R5cGVdKHIsIGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzW3JdLlByb3BlcnRpZXMpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKS5tYXAobyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbycpO1xuICAgICAgdCA9IHQuYWRkKE91dHB1dChvLCBpbnB1dFRlbXBsYXRlLk91dHB1dHNbb10pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuTWFwcGluZ3MpLm1hcChtID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuTWFwcGluZ3NbbV0pLm1hcChtMCA9PiB7XG4gICAgICAgIHQgPSB0LmFkZChNYXBwaW5nKG0sIG0wLCBpbnB1dFRlbXBsYXRlLk1hcHBpbmdzW21dW20wXSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlucHV0VGVtcGxhdGUuQ29uZGl0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuQ29uZGl0aW9ucykubWFwKGMgPT4ge1xuICAgICAgdCA9IHQuYWRkKENvbmRpdGlvbihjLCBpbnB1dFRlbXBsYXRlLkNvbmRpdGlvbnNbY10pKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbiJdfQ==