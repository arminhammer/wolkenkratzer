'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.



















































Template = Template;exports.
































































































































































































































































































_json = _json;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _parameter = require('./elements/parameter');var _description = require('./elements/description');var _mapping = require('./elements/mapping');var _condition = require('./elements/condition');var _resource = require('./elements/resource');var _output = require('./elements/output');var _creationpolicy = require('./attributes/creationpolicy');var _metadata = require('./attributes/metadata');var _intrinsic = require('./intrinsic');var _pseudo = require('./pseudo');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} // import { IMetadata } from './elements/metadata';
/**
 * Returns a new Template.
 */function Template(inputTemplate) {return { AWSTemplateFormatVersion: '2010-09-09', Conditions: {}, Mappings: {}, Outputs: {}, Parameters: {}, Resources: {}, add: function (e, options) {const _t = _lodash2.default.cloneDeep(this);switch (e.kind) {case 'CreationPolicy':return _addCreationPolicy(_t, e);case 'ResourceMetadata':return _addResourceMetadata(_t, e);case 'Condition':return _addCondition(_t, e);case 'Mapping':return _addMapping(_t, e);case 'Parameter':return _addParameter(_t, e);case 'Output':return _addOutput(_t, e);case 'Resource':let newT = _addResource(_t, e);if (options) {const nameSplit = e.Type.split('::').splice(1);const shortName = nameSplit.join('');if (options.Output) {newT = _addOutput(newT, (0, _output.Output)(`${e.Name}${shortName}Output`, { Value: (0, _intrinsic.Ref)(e.Name), Export: { Name: (0, _intrinsic.FnSub)(`\$\{${_pseudo.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${e.Name}`) } }));}if (options.Parameters) {options.Parameters.map(p => {newT = _addParameter(newT, (0, _parameter.Parameter)(`${e.Name}${shortName}Param`, { Type: 'String' }));});}}return newT;case 'Description':return _addDescription(_t, e);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, build: function () {let result = { AWSTemplateFormatVersion: '2010-09-09', Resources: {} };if (Object.keys(this.Conditions).length > 0) {result.Conditions = {};Object.keys(this.Conditions).map(c => {result.Conditions[c] = _json(this.Conditions[c]);});}if (Object.keys(this.Parameters).length > 0) {result.Parameters = {};Object.keys(this.Parameters).map(p => {result.Parameters[p] = _json(this.Parameters[p]);});}if (Object.keys(this.Mappings).length > 0) {result.Mappings = {};Object.keys(this.Mappings).map(m => {result.Mappings[m] = _json(this.Mappings[m]);});}if (Object.keys(this.Outputs).length > 0) {result.Outputs = {};Object.keys(this.Outputs).map(o => {result.Outputs[o] = _json(this.Outputs[o]);});}if (Object.keys(this.Resources).length > 0) {result.Resources = {};Object.keys(this.Resources).map(r => {result.Resources[r] = _json(this.Resources[r]);});}if (this.Description) {result.Description = this.Description;}return result;}, kind: 'Template', remove: function (e) {let result = _lodash2.default.cloneDeep(this);let element;if (typeof e === 'string') {let parameter = result.Parameters[e];if (parameter) {element = parameter;} else {let output = result.Outputs[e];if (output) {element = output;} else {let mapping = result.Mappings[e];if (mapping) {element = mapping;} else {throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);}}}} else {element = e;}switch (element.kind) {/*case 'Condition':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      return _removeCondition(this, e);*/case 'Parameter':return _removeParameter(this, element);case 'Output':return _removeOutput(this, element); /*case 'Resource':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                return _removeResource(this, e);*/case 'Mapping':return _removeMapping(this, element);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, removeDescription: function () {const _ref = this,{ Description } = _ref,remaining = _objectWithoutProperties(_ref, ['Description']);return remaining;}, merge: function (t) {const _t = _lodash2.default.cloneDeep(this);const combined = {};['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {if (t[block]) {combined[block] = _extends({}, _t[block], t[block]);}});return _extends({}, _t, combined);}, import: function (inputTemplate) {let _t = _lodash2.default.cloneDeep(this);return _calcFromExistingTemplate(_t, inputTemplate);} };}function _validateRef(t, ref) {if (ref.Ref) {if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);}}return;}function _validateFnGetAtt(t, att) {if (!t.Resources[att.FnGetAtt[0]]) {throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);}return;}function _strip(t) {let { kind, Name } = t,rest = _objectWithoutProperties(t, ['kind', 'Name']);return rest;}function _stripKind(target) {let { kind } = target,rest = _objectWithoutProperties(target, ['kind']);return rest;}function _cleanObject(object) {if (Array.isArray(object)) {for (let v = 0; v < object.length; v++) {object[v] = _cleanObject(object[v]);}} else {if (object.kind) {object = _json(object);} else {for (let o in object) {if (object[o] !== null && typeof object[o] === 'object') {object[o] = _cleanObject(object[o]);}}}}return object;}function _buildResource(t) {let { Type, Properties, CreationPolicy, Metadata } = t;let newProps = {};if (Properties) {Object.keys(Properties).map(p => {if (Properties[p].kind) {newProps[p] = _json(Properties[p]);} else {newProps[p] = _cleanObject(Properties[p]);}});}let result = { Type, Properties: newProps };if (CreationPolicy) {result.CreationPolicy = _json(CreationPolicy);}if (Metadata) {result.Metadata = _json(Metadata);}return result;}function _buildCondition(t) {let { Condition } = t;let result = _json(Condition);Object.keys(result).map(k => {result[k][0] = _json(result[k][0]);});return result;}function _buildCreationPolicy(t) {let { Content } = t;return Content;}function _buildResourceMetadata(t) {let { Content } = t;return Content;}function _buildFnJoin(t) {if (Array.isArray(t.Values)) {return { 'Fn::Join': [t.Delimiter, t.Values] };} else {return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };}}function _buildMapping(t) {let result = t.Content;return result;}function _buildOutput(t) {let outputResult = Object.assign({}, t.Properties);if (typeof outputResult.Value !== 'string') {let stripped = _json(outputResult.Value);outputResult = _extends({}, outputResult, { Value: stripped });}if (outputResult.Export && outputResult.Export.Name && typeof outputResult.Export.Name !== 'string') {let stripped = _json(outputResult.Export.Name);outputResult = _extends({}, outputResult, { Export: { Name: stripped } });}return outputResult;}function _json(t) {switch (t.kind) {case 'Ref':return { Ref: t.Ref };
    case 'FnGetAtt':
      return { 'Fn::GetAtt': t.FnGetAtt };
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
  if (typeof e.Properties.Value !== 'string') {
    if (e.Properties.Value.Ref) {
      _validateRef(t, e.Properties.Value);
    } else if (
    typeof e.Properties.Value !== 'string' &&
    e.Properties.Value['Fn::GetAtt'])
    {
      _validateFnGetAtt(t, e.Properties.Value);
    }
  }

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
  if (inputTemplate.Outputs) {
    Object.keys(inputTemplate.Outputs).map(o => {
      console.log('o');
      t = t.add((0, _output.Output)(o, inputTemplate.Outputs[o]));
    });
  }
  /*
     if (inputTemplate.Mappings) {
      Object.keys(inputTemplate.Mappings).map(m => {
        t = t.add(Mapping(m, inputTemplate.Mappings[m]));
      });
    }
    if (inputTemplate.Resources) {
      Object.keys(inputTemplate.Resources).map(r => {
        t = t.add(Mapping(r, inputTemplate.Resources[r]));
      });
    }
    */

  if (inputTemplate.Conditions) {
    Object.keys(inputTemplate.Conditions).map(c => {
      t = t.add(Condition(c, inputTemplate.Conditions[c]));
    });
  }
  return t;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiaW5wdXRUZW1wbGF0ZSIsIkFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbiIsIkNvbmRpdGlvbnMiLCJNYXBwaW5ncyIsIk91dHB1dHMiLCJQYXJhbWV0ZXJzIiwiUmVzb3VyY2VzIiwiYWRkIiwiZSIsIm9wdGlvbnMiLCJfdCIsImNsb25lRGVlcCIsImtpbmQiLCJfYWRkQ3JlYXRpb25Qb2xpY3kiLCJfYWRkUmVzb3VyY2VNZXRhZGF0YSIsIl9hZGRDb25kaXRpb24iLCJfYWRkTWFwcGluZyIsIl9hZGRQYXJhbWV0ZXIiLCJfYWRkT3V0cHV0IiwibmV3VCIsIl9hZGRSZXNvdXJjZSIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJPdXRwdXQiLCJOYW1lIiwiVmFsdWUiLCJFeHBvcnQiLCJBV1NfU1RBQ0tfTkFNRSIsIm1hcCIsInAiLCJfYWRkRGVzY3JpcHRpb24iLCJTeW50YXhFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJidWlsZCIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjIiwibSIsIm8iLCJyIiwiRGVzY3JpcHRpb24iLCJyZW1vdmUiLCJlbGVtZW50IiwicGFyYW1ldGVyIiwib3V0cHV0IiwibWFwcGluZyIsIl9yZW1vdmVQYXJhbWV0ZXIiLCJfcmVtb3ZlT3V0cHV0IiwiX3JlbW92ZU1hcHBpbmciLCJyZW1vdmVEZXNjcmlwdGlvbiIsInJlbWFpbmluZyIsIm1lcmdlIiwidCIsImNvbWJpbmVkIiwiYmxvY2siLCJpbXBvcnQiLCJfY2FsY0Zyb21FeGlzdGluZ1RlbXBsYXRlIiwiX3ZhbGlkYXRlUmVmIiwicmVmIiwiUmVmIiwiX3ZhbGlkYXRlRm5HZXRBdHQiLCJhdHQiLCJGbkdldEF0dCIsIl9zdHJpcCIsInJlc3QiLCJfc3RyaXBLaW5kIiwidGFyZ2V0IiwiX2NsZWFuT2JqZWN0Iiwib2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwidiIsIl9idWlsZFJlc291cmNlIiwiUHJvcGVydGllcyIsIkNyZWF0aW9uUG9saWN5IiwiTWV0YWRhdGEiLCJuZXdQcm9wcyIsIl9idWlsZENvbmRpdGlvbiIsIkNvbmRpdGlvbiIsImsiLCJfYnVpbGRDcmVhdGlvblBvbGljeSIsIkNvbnRlbnQiLCJfYnVpbGRSZXNvdXJjZU1ldGFkYXRhIiwiX2J1aWxkRm5Kb2luIiwiVmFsdWVzIiwiRGVsaW1pdGVyIiwiX2J1aWxkTWFwcGluZyIsIl9idWlsZE91dHB1dCIsIm91dHB1dFJlc3VsdCIsImFzc2lnbiIsInN0cmlwcGVkIiwiRm5FcXVhbHMiLCJGblN1YiIsImRlc2MiLCJSZXNvdXJjZSIsInJlc291cmNlIiwib3V0IiwicGFyYW0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RnQkEsUSxHQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaVNBQyxLLEdBQUFBLEssQ0FwVmhCLGdDLCtDQUNBLGlEQUNBLHFEQUVBLDZDQUNBLGlEQUNBLCtDQUNBLDJDQUdBLDZEQUNBLGlEQUNBLHdDQUNBLGtDLGtUQVZBO0FBNkNBOztHQUdPLFNBQVNELFFBQVQsQ0FBa0JFLGFBQWxCLEVBQW9ELENBQ3pELE9BQU8sRUFDTEMs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b0MsV0FBT0MsSUFBUCxDQUFZekMsY0FBY0ksT0FBMUIsRUFBbUM0QixHQUFuQyxDQUF1Q2EsS0FBSztBQUMxQzRELGNBQVFDLEdBQVIsQ0FBWSxHQUFaO0FBQ0EvQyxVQUFJQSxFQUFFcEQsR0FBRixDQUFNLG9CQUFPc0MsQ0FBUCxFQUFVN0MsY0FBY0ksT0FBZCxDQUFzQnlDLENBQXRCLENBQVYsQ0FBTixDQUFKO0FBQ0QsS0FIRDtBQUlEO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFJN0MsY0FBY0UsVUFBbEIsRUFBOEI7QUFDNUJzQyxXQUFPQyxJQUFQLENBQVl6QyxjQUFjRSxVQUExQixFQUFzQzhCLEdBQXRDLENBQTBDVyxLQUFLO0FBQzdDZ0IsVUFBSUEsRUFBRXBELEdBQUYsQ0FBTThFLFVBQVUxQyxDQUFWLEVBQWEzQyxjQUFjRSxVQUFkLENBQXlCeUMsQ0FBekIsQ0FBYixDQUFOLENBQUo7QUFDRCxLQUZEO0FBR0Q7QUFDRCxTQUFPZ0IsQ0FBUDtBQUNEIiwiZmlsZSI6InRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJUGFyYW1ldGVyLCBQYXJhbWV0ZXIgfSBmcm9tICcuL2VsZW1lbnRzL3BhcmFtZXRlcic7XG5pbXBvcnQgeyBJRGVzY3JpcHRpb24gfSBmcm9tICcuL2VsZW1lbnRzL2Rlc2NyaXB0aW9uJztcbi8vIGltcG9ydCB7IElNZXRhZGF0YSB9IGZyb20gJy4vZWxlbWVudHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICcuL2VsZW1lbnRzL21hcHBpbmcnO1xuaW1wb3J0IHsgSUNvbmRpdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IElSZXNvdXJjZSB9IGZyb20gJy4vZWxlbWVudHMvcmVzb3VyY2UnO1xuaW1wb3J0IHsgSU91dHB1dCwgT3V0cHV0IH0gZnJvbSAnLi9lbGVtZW50cy9vdXRwdXQnO1xuaW1wb3J0IHR5cGUgeyBJRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZWxlbWVudCc7XG5pbXBvcnQgeyBNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmltcG9ydCB7IElDcmVhdGlvblBvbGljeSB9IGZyb20gJy4vYXR0cmlidXRlcy9jcmVhdGlvbnBvbGljeSc7XG5pbXBvcnQgeyBJUmVzb3VyY2VNZXRhZGF0YSB9IGZyb20gJy4vYXR0cmlidXRlcy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBSZWYsIEZuU3ViIH0gZnJvbSAnLi9pbnRyaW5zaWMnO1xuaW1wb3J0IHsgUHNldWRvIH0gZnJvbSAnLi9wc2V1ZG8nO1xuaW1wb3J0IHR5cGUge1xuICBJUmVmLFxuICBJRm5HZXRBdHQsXG4gIElGbkpvaW4sXG4gIENvbmRpdGlvbmFsLFxuICBJSW50cmluc2ljLFxuICBJRm5BbmQsXG4gIElGbkVxdWFscyxcbiAgSUZuSWYsXG4gIElGbk5vdCxcbiAgSUZuT3Jcbn0gZnJvbSAnLi9pbnRyaW5zaWMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZSB7XG4gICtraW5kOiAnVGVtcGxhdGUnLFxuICArQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uOiBzdHJpbmcsXG4gICtEZXNjcmlwdGlvbj86IHZvaWQgfCBzdHJpbmcsXG4gICtQYXJhbWV0ZXJzOiB7ICtbczogc3RyaW5nXTogSVBhcmFtZXRlciB9LFxuICAvLyArTWV0YWRhdGE6IHsgK1tzOiBzdHJpbmddOiBJTWV0YWRhdGEgfTtcbiAgK01hcHBpbmdzOiB7ICtbczogc3RyaW5nXTogSU1hcHBpbmcgfSxcbiAgK0NvbmRpdGlvbnM6IHsgK1tzOiBzdHJpbmddOiBJQ29uZGl0aW9uIH0sXG4gICtSZXNvdXJjZXM6IHsgK1tzOiBzdHJpbmddOiBJUmVzb3VyY2UgfSxcbiAgK091dHB1dHM6IHsgK1tzOiBzdHJpbmddOiBJT3V0cHV0IH0sXG4gICthZGQ6IEZ1bmN0aW9uLFxuICArcmVtb3ZlOiBGdW5jdGlvbixcbiAgK3JlbW92ZURlc2NyaXB0aW9uOiBGdW5jdGlvbixcbiAgK2J1aWxkOiBGdW5jdGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBZGRPcHRpb25zIHtcbiAgT3V0cHV0OiBib29sZWFuLFxuICBQYXJhbWV0ZXJzOiBBcnJheTxzdHJpbmc+XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBUZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRlbXBsYXRlKGlucHV0VGVtcGxhdGU/OiBtaXhlZCk6IElUZW1wbGF0ZSB7XG4gIHJldHVybiB7XG4gICAgQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uOiAnMjAxMC0wOS0wOScsXG4gICAgQ29uZGl0aW9uczoge30sXG4gICAgTWFwcGluZ3M6IHt9LFxuICAgIE91dHB1dHM6IHt9LFxuICAgIFBhcmFtZXRlcnM6IHt9LFxuICAgIFJlc291cmNlczoge30sXG4gICAgYWRkOiBmdW5jdGlvbihlOiBJRWxlbWVudCwgb3B0aW9ucz86IElBZGRPcHRpb25zKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICBzd2l0Y2ggKGUua2luZCkge1xuICAgICAgICBjYXNlICdDcmVhdGlvblBvbGljeSc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRDcmVhdGlvblBvbGljeShfdCwgZSk7XG4gICAgICAgIGNhc2UgJ1Jlc291cmNlTWV0YWRhdGEnOlxuICAgICAgICAgIHJldHVybiBfYWRkUmVzb3VyY2VNZXRhZGF0YShfdCwgZSk7XG4gICAgICAgIGNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICAgICAgcmV0dXJuIF9hZGRDb25kaXRpb24oX3QsIGUpO1xuICAgICAgICBjYXNlICdNYXBwaW5nJzpcbiAgICAgICAgICByZXR1cm4gX2FkZE1hcHBpbmcoX3QsIGUpO1xuICAgICAgICBjYXNlICdQYXJhbWV0ZXInOlxuICAgICAgICAgIHJldHVybiBfYWRkUGFyYW1ldGVyKF90LCBlKTtcbiAgICAgICAgY2FzZSAnT3V0cHV0JzpcbiAgICAgICAgICByZXR1cm4gX2FkZE91dHB1dChfdCwgZSk7XG4gICAgICAgIGNhc2UgJ1Jlc291cmNlJzpcbiAgICAgICAgICBsZXQgbmV3VCA9IF9hZGRSZXNvdXJjZShfdCwgZSk7XG4gICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVTcGxpdCA9IGUuVHlwZS5zcGxpdCgnOjonKS5zcGxpY2UoMSk7XG4gICAgICAgICAgICBjb25zdCBzaG9ydE5hbWUgPSBuYW1lU3BsaXQuam9pbignJyk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5PdXRwdXQpIHtcbiAgICAgICAgICAgICAgbmV3VCA9IF9hZGRPdXRwdXQoXG4gICAgICAgICAgICAgICAgbmV3VCxcbiAgICAgICAgICAgICAgICBPdXRwdXQoYCR7ZS5OYW1lfSR7c2hvcnROYW1lfU91dHB1dGAsIHtcbiAgICAgICAgICAgICAgICAgIFZhbHVlOiBSZWYoZS5OYW1lKSxcbiAgICAgICAgICAgICAgICAgIEV4cG9ydDoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBGblN1YihcbiAgICAgICAgICAgICAgICAgICAgICBgXFwkXFx7JHtQc2V1ZG8uQVdTX1NUQUNLX05BTUV9XFx9LSR7bmFtZVNwbGl0WzBdfS0ke25hbWVTcGxpdFsxXX0tJHtlLk5hbWV9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLlBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5QYXJhbWV0ZXJzLm1hcChwID0+IHtcbiAgICAgICAgICAgICAgICBuZXdUID0gX2FkZFBhcmFtZXRlcihcbiAgICAgICAgICAgICAgICAgIG5ld1QsXG4gICAgICAgICAgICAgICAgICBQYXJhbWV0ZXIoYCR7ZS5OYW1lfSR7c2hvcnROYW1lfVBhcmFtYCwge1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiAnU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld1Q7XG4gICAgICAgIGNhc2UgJ0Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICByZXR1cm4gX2FkZERlc2NyaXB0aW9uKF90LCBlKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShlKX0gaXMgbm90IGEgdmFsaWQgdHlwZSwgY291bGQgbm90IGJlIGFkZGVkLmBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IGZ1bmN0aW9uKCk6IG1peGVkIHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHtcbiAgICAgICAgQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uOiAnMjAxMC0wOS0wOScsXG4gICAgICAgIFJlc291cmNlczoge31cbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5Db25kaXRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5Db25kaXRpb25zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuQ29uZGl0aW9ucykubWFwKGMgPT4ge1xuICAgICAgICAgIHJlc3VsdC5Db25kaXRpb25zW2NdID0gX2pzb24odGhpcy5Db25kaXRpb25zW2NdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5QYXJhbWV0ZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5QYXJhbWV0ZXJzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuUGFyYW1ldGVycykubWFwKHAgPT4ge1xuICAgICAgICAgIHJlc3VsdC5QYXJhbWV0ZXJzW3BdID0gX2pzb24odGhpcy5QYXJhbWV0ZXJzW3BdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5NYXBwaW5ncykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuTWFwcGluZ3MgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5NYXBwaW5ncykubWFwKG0gPT4ge1xuICAgICAgICAgIHJlc3VsdC5NYXBwaW5nc1ttXSA9IF9qc29uKHRoaXMuTWFwcGluZ3NbbV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk91dHB1dHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0Lk91dHB1dHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5PdXRwdXRzKS5tYXAobyA9PiB7XG4gICAgICAgICAgcmVzdWx0Lk91dHB1dHNbb10gPSBfanNvbih0aGlzLk91dHB1dHNbb10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLlJlc291cmNlcykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuUmVzb3VyY2VzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgICAgICAgcmVzdWx0LlJlc291cmNlc1tyXSA9IF9qc29uKHRoaXMuUmVzb3VyY2VzW3JdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5EZXNjcmlwdGlvbikge1xuICAgICAgICByZXN1bHQuRGVzY3JpcHRpb24gPSB0aGlzLkRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGtpbmQ6ICdUZW1wbGF0ZScsXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlOiBJRWxlbWVudCB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gICAgICBsZXQgcmVzdWx0ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICBsZXQgZWxlbWVudDogSUVsZW1lbnQ7XG4gICAgICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXI6IElQYXJhbWV0ZXIgfCB2b2lkID0gcmVzdWx0LlBhcmFtZXRlcnNbZV07XG4gICAgICAgIGlmIChwYXJhbWV0ZXIpIHtcbiAgICAgICAgICBlbGVtZW50ID0gcGFyYW1ldGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBvdXRwdXQ6IElPdXRwdXQgfCB2b2lkID0gcmVzdWx0Lk91dHB1dHNbZV07XG4gICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgZWxlbWVudCA9IG91dHB1dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1hcHBpbmc6IElNYXBwaW5nIHwgdm9pZCA9IHJlc3VsdC5NYXBwaW5nc1tlXTtcbiAgICAgICAgICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQgPSBtYXBwaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IGU7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGVsZW1lbnQua2luZCkge1xuICAgICAgICAvKmNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVtb3ZlQ29uZGl0aW9uKHRoaXMsIGUpOyovXG4gICAgICAgIGNhc2UgJ1BhcmFtZXRlcic6XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmVQYXJhbWV0ZXIodGhpcywgZWxlbWVudCk7XG4gICAgICAgIGNhc2UgJ091dHB1dCc6XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmVPdXRwdXQodGhpcywgZWxlbWVudCk7XG4gICAgICAgIC8qY2FzZSAnUmVzb3VyY2UnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlbW92ZVJlc291cmNlKHRoaXMsIGUpOyovXG4gICAgICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgICAgIHJldHVybiBfcmVtb3ZlTWFwcGluZyh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShlKX0gaXMgbm90IGEgdmFsaWQgdHlwZSwgY291bGQgbm90IGJlIGFkZGVkLmBcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRGVzY3JpcHRpb246IGZ1bmN0aW9uKCk6IElUZW1wbGF0ZSB7XG4gICAgICBjb25zdCB7IERlc2NyaXB0aW9uLCAuLi5yZW1haW5pbmcgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHQ6IElUZW1wbGF0ZSk6IElUZW1wbGF0ZSB7XG4gICAgICBjb25zdCBfdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgY29uc3QgY29tYmluZWQgPSB7fTtcbiAgICAgIFtcbiAgICAgICAgJ0NvbmRpdGlvbnMnLFxuICAgICAgICAnTWFwcGluZycsXG4gICAgICAgICdPdXRwdXRzJyxcbiAgICAgICAgJ1BhcmFtZXRlcnMnLFxuICAgICAgICAnUmVzb3VyY2VzJyxcbiAgICAgICAgJ0Rlc2NyaXB0aW9uJ1xuICAgICAgXS5tYXAoYmxvY2sgPT4ge1xuICAgICAgICBpZiAodFtibG9ja10pIHtcbiAgICAgICAgICBjb21iaW5lZFtibG9ja10gPSB7IC4uLl90W2Jsb2NrXSwgLi4udFtibG9ja10gfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5fdCxcbiAgICAgICAgLi4uY29tYmluZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBpbXBvcnQ6IGZ1bmN0aW9uKGlucHV0VGVtcGxhdGU6IG1peGVkKTogSVRlbXBsYXRlIHtcbiAgICAgIGxldCBfdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgcmV0dXJuIF9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUoX3QsIGlucHV0VGVtcGxhdGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX3ZhbGlkYXRlUmVmKHQ6IElUZW1wbGF0ZSwgcmVmOiBJUmVmKTogdm9pZCB8IFN5bnRheEVycm9yIHtcbiAgaWYgKHJlZi5SZWYpIHtcbiAgICBpZiAoISh0LlBhcmFtZXRlcnNbcmVmLlJlZl0gfHwgdC5SZXNvdXJjZXNbcmVmLlJlZl0pKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkocmVmKX1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVGbkdldEF0dCh0OiBJVGVtcGxhdGUsIGF0dDogSUZuR2V0QXR0KTogdm9pZCB8IFN5bnRheEVycm9yIHtcbiAgaWYgKCF0LlJlc291cmNlc1thdHQuRm5HZXRBdHRbMF1dKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGF0dCl9YCk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBfc3RyaXAodDogSVBhcmFtZXRlciB8IElPdXRwdXQgfCBJUmVzb3VyY2UgfCBJQ29uZGl0aW9uKTogYW55IHtcbiAgbGV0IHsga2luZCwgTmFtZSwgLi4ucmVzdCB9ID0gdDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEtpbmQodGFyZ2V0OiBhbnkpOiBtaXhlZCB7XG4gIGxldCB7IGtpbmQsIC4uLnJlc3QgfSA9IHRhcmdldDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9jbGVhbk9iamVjdChvYmplY3Q6IGFueSk6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgb2JqZWN0Lmxlbmd0aDsgdisrKSB7XG4gICAgICBvYmplY3Rbdl0gPSBfY2xlYW5PYmplY3Qob2JqZWN0W3ZdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdC5raW5kKSB7XG4gICAgICBvYmplY3QgPSBfanNvbihvYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBvIGluIG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0W29dICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3Rbb10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb2JqZWN0W29dID0gX2NsZWFuT2JqZWN0KG9iamVjdFtvXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2UodDogSVJlc291cmNlKTogbWl4ZWQge1xuICBsZXQgeyBUeXBlLCBQcm9wZXJ0aWVzLCBDcmVhdGlvblBvbGljeSwgTWV0YWRhdGEgfSA9IHQ7XG4gIGxldCBuZXdQcm9wczogbWl4ZWQgPSB7fTtcbiAgaWYgKFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3Qua2V5cyhQcm9wZXJ0aWVzKS5tYXAocCA9PiB7XG4gICAgICBpZiAoUHJvcGVydGllc1twXS5raW5kKSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2pzb24oUHJvcGVydGllc1twXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQcm9wc1twXSA9IF9jbGVhbk9iamVjdChQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgcmVzdWx0ID0geyBUeXBlLCBQcm9wZXJ0aWVzOiBuZXdQcm9wcyB9O1xuICBpZiAoQ3JlYXRpb25Qb2xpY3kpIHtcbiAgICByZXN1bHQuQ3JlYXRpb25Qb2xpY3kgPSBfanNvbihDcmVhdGlvblBvbGljeSk7XG4gIH1cbiAgaWYgKE1ldGFkYXRhKSB7XG4gICAgcmVzdWx0Lk1ldGFkYXRhID0gX2pzb24oTWV0YWRhdGEpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENvbmRpdGlvbih0OiBJQ29uZGl0aW9uKTogc3RyaW5nIHtcbiAgbGV0IHsgQ29uZGl0aW9uIH0gPSB0O1xuICBsZXQgcmVzdWx0ID0gX2pzb24oQ29uZGl0aW9uKTtcbiAgT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoayA9PiB7XG4gICAgcmVzdWx0W2tdWzBdID0gX2pzb24ocmVzdWx0W2tdWzBdKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENyZWF0aW9uUG9saWN5KHQ6IElDcmVhdGlvblBvbGljeSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFJlc291cmNlTWV0YWRhdGEodDogSVJlc291cmNlTWV0YWRhdGEpOiBtaXhlZCB7XG4gIGxldCB7IENvbnRlbnQgfSA9IHQ7XG4gIHJldHVybiBDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRGbkpvaW4odDogSUZuSm9pbik6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodC5WYWx1ZXMpKSB7XG4gICAgcmV0dXJuIHsgJ0ZuOjpKb2luJzogW3QuRGVsaW1pdGVyLCB0LlZhbHVlc10gfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIF9qc29uKHQuVmFsdWVzKV0gfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYnVpbGRNYXBwaW5nKHQ6IElNYXBwaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IHQuQ29udGVudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkT3V0cHV0KHQ6IElPdXRwdXQpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0UmVzdWx0OiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0LlByb3BlcnRpZXMpO1xuICBpZiAodHlwZW9mIG91dHB1dFJlc3VsdC5WYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBsZXQgc3RyaXBwZWQgPSBfanNvbihvdXRwdXRSZXN1bHQuVmFsdWUpO1xuICAgIG91dHB1dFJlc3VsdCA9IHsgLi4ub3V0cHV0UmVzdWx0LCBWYWx1ZTogc3RyaXBwZWQgfTtcbiAgfVxuICBpZiAoXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydCAmJlxuICAgIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAmJlxuICAgIHR5cGVvZiBvdXRwdXRSZXN1bHQuRXhwb3J0Lk5hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIEV4cG9ydDogeyBOYW1lOiBzdHJpcHBlZCB9IH07XG4gIH1cbiAgcmV0dXJuIG91dHB1dFJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9qc29uKFxuICB0OiBJRWxlbWVudCB8IElSZWYgfCBJRm5HZXRBdHQgfCBJRm5Kb2luIHwgRm5TdWIgfCBJQ3JlYXRpb25Qb2xpY3lcbik6IG1peGVkIHtcbiAgc3dpdGNoICh0LmtpbmQpIHtcbiAgICBjYXNlICdSZWYnOlxuICAgICAgcmV0dXJuIHsgUmVmOiB0LlJlZiB9O1xuICAgIGNhc2UgJ0ZuR2V0QXR0JzpcbiAgICAgIHJldHVybiB7ICdGbjo6R2V0QXR0JzogdC5GbkdldEF0dCB9O1xuICAgIGNhc2UgJ0ZuSm9pbic6XG4gICAgICByZXR1cm4gX2J1aWxkRm5Kb2luKHQpO1xuICAgIGNhc2UgJ0ZuRXF1YWxzJzpcbiAgICAgIHJldHVybiB7ICdGbjo6RXF1YWxzJzogdC5GbkVxdWFscyB9O1xuICAgIGNhc2UgJ0ZuU3ViJzpcbiAgICAgIHJldHVybiB7ICdGbjo6U3ViJzogdC5GblN1YiB9O1xuICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgIHJldHVybiBfYnVpbGRDcmVhdGlvblBvbGljeSh0KTtcbiAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZU1ldGFkYXRhKHQpO1xuICAgIGNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICByZXR1cm4gX2J1aWxkQ29uZGl0aW9uKHQpO1xuICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgcmV0dXJuIF9idWlsZE1hcHBpbmcodCk7XG4gICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgIHJldHVybiBfc3RyaXAodCkuUHJvcGVydGllcztcbiAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgcmV0dXJuIF9idWlsZE91dHB1dCh0KTtcbiAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICByZXR1cm4gX2J1aWxkUmVzb3VyY2UodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ2FuJ3QgY2FsbCBfanNvbiBvbiAke0pTT04uc3RyaW5naWZ5KHQpfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hZGREZXNjcmlwdGlvbih0OiBJVGVtcGxhdGUsIGU6IElEZXNjcmlwdGlvbik6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IGRlc2MgPSB7IERlc2NyaXB0aW9uOiBlLkNvbnRlbnQgfTtcbiAgcmVzdWx0ID0geyAuLi50LCAuLi5kZXNjIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDcmVhdGlvblBvbGljeSh0OiBJVGVtcGxhdGUsIGU6IElDcmVhdGlvblBvbGljeSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgQ3JlYXRpb25Qb2xpY3kgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuQ3JlYXRpb25Qb2xpY3kgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZU1ldGFkYXRhKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlTWV0YWRhdGEpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGlmICghcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICdDYW5ub3QgYWRkIE1ldGFkYXRhIHRvIGEgUmVzb3VyY2UgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuJ1xuICAgICk7XG4gIH1cbiAgbGV0IHJlc291cmNlID0geyAuLi5yZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdIH07XG4gIHJlc291cmNlLk1ldGFkYXRhID0gZTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSA9IHJlc291cmNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkQ29uZGl0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSUNvbmRpdGlvbik6IElUZW1wbGF0ZSB7XG4gIC8vIFRPRE86IFZhbGlkYXRlIGludHJpbnNpY3NcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuQ29uZGl0aW9uc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQpOiBJVGVtcGxhdGUge1xuICBpZiAodHlwZW9mIGUuUHJvcGVydGllcy5WYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZS5Qcm9wZXJ0aWVzLlZhbHVlLlJlZikge1xuICAgICAgX3ZhbGlkYXRlUmVmKHQsIGUuUHJvcGVydGllcy5WYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBlLlByb3BlcnRpZXMuVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAgICBlLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVxuICAgICkge1xuICAgICAgX3ZhbGlkYXRlRm5HZXRBdHQodCwgZS5Qcm9wZXJ0aWVzLlZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5PdXRwdXRzW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkUGFyYW1ldGVyKHQ6IElUZW1wbGF0ZSwgZTogSVBhcmFtZXRlcik6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0LlBhcmFtZXRlcnNbZS5OYW1lXSA9IGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRNYXBwaW5nKHQ6IElUZW1wbGF0ZSwgZTogSU1hcHBpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGlmIChyZXN1bHQuTWFwcGluZ3NbZS5OYW1lXSkge1xuICAgIHJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdID0ge1xuICAgICAgLi4uZSxcbiAgICAgIENvbnRlbnQ6IHsgLi4ucmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0uQ29udGVudCwgLi4uZS5Db250ZW50IH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdID0gZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkUmVzb3VyY2UodDogSVRlbXBsYXRlLCBlOiBJUmVzb3VyY2UpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5SZXNvdXJjZXNbZS5OYW1lXSA9IGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVNYXBwaW5nKHQ6IElUZW1wbGF0ZSwgZTogSU1hcHBpbmcgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGxldCBtYXBwaW5nOiBJTWFwcGluZztcbiAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChyZXN1bHQuTWFwcGluZ3NbZV0pIHtcbiAgICAgIG1hcHBpbmcgPSByZXN1bHQuTWFwcGluZ3NbZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFwcGluZyA9IGU7XG4gIH1cbiAgaWYgKHJlc3VsdC5NYXBwaW5nc1ttYXBwaW5nLk5hbWVdKSB7XG4gICAgZGVsZXRlIHJlc3VsdC5NYXBwaW5nc1ttYXBwaW5nLk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShtYXBwaW5nKX1gKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlT3V0cHV0KHQ6IElUZW1wbGF0ZSwgZTogSU91dHB1dCB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IG91dDogSU91dHB1dDtcbiAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChyZXN1bHQuT3V0cHV0c1tlXSkge1xuICAgICAgb3V0ID0gcmVzdWx0Lk91dHB1dHNbZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3V0ID0gZTtcbiAgfVxuICBpZiAocmVzdWx0Lk91dHB1dHNbb3V0Lk5hbWVdKSB7XG4gICAgZGVsZXRlIHJlc3VsdC5PdXRwdXRzW291dC5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkob3V0KX1gKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlUGFyYW1ldGVyKHQ6IElUZW1wbGF0ZSwgZTogSVBhcmFtZXRlciB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IHBhcmFtOiBJUGFyYW1ldGVyO1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5QYXJhbWV0ZXJzW2VdKSB7XG4gICAgICBwYXJhbSA9IHJlc3VsdC5QYXJhbWV0ZXJzW2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcmFtID0gZTtcbiAgfVxuICBpZiAocmVzdWx0LlBhcmFtZXRlcnNbcGFyYW0uTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0LlBhcmFtZXRlcnNbcGFyYW0uTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KHBhcmFtKX1gKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfY2FsY0Zyb21FeGlzdGluZ1RlbXBsYXRlKHQ6IElUZW1wbGF0ZSwgaW5wdXRUZW1wbGF0ZTogbWl4ZWQpIHtcbiAgaWYgKGlucHV0VGVtcGxhdGUuUGFyYW1ldGVycykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUGFyYW1ldGVycykubWFwKHAgPT4ge1xuICAgICAgdCA9IHQuYWRkKFBhcmFtZXRlcihwLCBpbnB1dFRlbXBsYXRlLlBhcmFtZXRlcnNbcF0pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKS5tYXAobyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbycpO1xuICAgICAgdCA9IHQuYWRkKE91dHB1dChvLCBpbnB1dFRlbXBsYXRlLk91dHB1dHNbb10pKTtcbiAgICB9KTtcbiAgfVxuICAvKlxuXG4gIGlmIChpbnB1dFRlbXBsYXRlLk1hcHBpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykubWFwKG0gPT4ge1xuICAgICAgdCA9IHQuYWRkKE1hcHBpbmcobSwgaW5wdXRUZW1wbGF0ZS5NYXBwaW5nc1ttXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLlJlc291cmNlcykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgICB0ID0gdC5hZGQoTWFwcGluZyhyLCBpbnB1dFRlbXBsYXRlLlJlc291cmNlc1tyXSkpO1xuICAgIH0pO1xuICB9XG4gICovXG4gIGlmIChpbnB1dFRlbXBsYXRlLkNvbmRpdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLkNvbmRpdGlvbnMpLm1hcChjID0+IHtcbiAgICAgIHQgPSB0LmFkZChDb25kaXRpb24oYywgaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zW2NdKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG4iXX0=