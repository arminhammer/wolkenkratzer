'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.




















































Template = Template;exports.
































































































































































































































































































_json = _json;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _parameter = require('./elements/parameter');var _description = require('./elements/description');var _mapping = require('./elements/mapping');var _condition = require('./elements/condition');var _resource = require('./elements/resource');var _output = require('./elements/output');var _creationpolicy = require('./attributes/creationpolicy');var _metadata = require('./attributes/metadata');var _intrinsic = require('./intrinsic');var _service = require('./service');var _pseudo = require('./pseudo');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} // import { IMetadata } from './elements/metadata';
/**
 * Returns a new Template.
 */function Template(inputTemplate) {return { AWSTemplateFormatVersion: '2010-09-09', Conditions: {}, Mappings: {}, Outputs: {}, Parameters: {}, Resources: {}, add: function (e, options) {const _t = _lodash2.default.cloneDeep(this);switch (e.kind) {case 'CreationPolicy':return _addCreationPolicy(_t, e);case 'ResourceMetadata':return _addResourceMetadata(_t, e);case 'Condition':return _addCondition(_t, e);case 'Mapping':return _addMapping(_t, e);case 'Parameter':return _addParameter(_t, e);case 'Output':return _addOutput(_t, e);case 'Resource':let newT = _addResource(_t, e);if (options) {const nameSplit = e.Type.split('::').splice(1);const shortName = nameSplit.join('');if (options.Output) {newT = _addOutput(newT, (0, _output.Output)(`${e.Name}${shortName}Output`, { Value: (0, _intrinsic.Ref)(e.Name), Export: { Name: (0, _intrinsic.FnSub)(`\$\{${_pseudo.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${e.Name}`) } }));}if (options.Parameters) {options.Parameters.map(p => {newT = _addParameter(newT, (0, _parameter.Parameter)(`${e.Name}${shortName}Param`, { Type: 'String' }));});}}return newT;case 'Description':return _addDescription(_t, e);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, build: function () {let result = { AWSTemplateFormatVersion: '2010-09-09', Resources: {} };if (Object.keys(this.Conditions).length > 0) {result.Conditions = {};Object.keys(this.Conditions).map(c => {result.Conditions[c] = _json(this.Conditions[c]);});}if (Object.keys(this.Parameters).length > 0) {result.Parameters = {};Object.keys(this.Parameters).map(p => {result.Parameters[p] = _json(this.Parameters[p]);});}if (Object.keys(this.Mappings).length > 0) {result.Mappings = {};Object.keys(this.Mappings).map(m => {result.Mappings[m] = _json(this.Mappings[m]);});}if (Object.keys(this.Outputs).length > 0) {result.Outputs = {};Object.keys(this.Outputs).map(o => {result.Outputs[o] = _json(this.Outputs[o]);});}if (Object.keys(this.Resources).length > 0) {result.Resources = {};Object.keys(this.Resources).map(r => {result.Resources[r] = _json(this.Resources[r]);});}if (this.Description) {result.Description = this.Description;}return result;}, kind: 'Template', remove: function (e) {let result = _lodash2.default.cloneDeep(this);let element;if (typeof e === 'string') {let parameter = result.Parameters[e];if (parameter) {element = parameter;} else {let output = result.Outputs[e];if (output) {element = output;} else {let mapping = result.Mappings[e];if (mapping) {element = mapping;} else {throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);}}}} else {element = e;}switch (element.kind) {/*case 'Condition':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      return _removeCondition(this, e);*/case 'Parameter':return _removeParameter(this, element);case 'Output':return _removeOutput(this, element); /*case 'Resource':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                return _removeResource(this, e);*/case 'Mapping':return _removeMapping(this, element);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, removeDescription: function () {const _ref = this,{ Description } = _ref,remaining = _objectWithoutProperties(_ref, ['Description']);return remaining;}, merge: function (t) {const _t = _lodash2.default.cloneDeep(this);const combined = {};['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {if (t[block]) {combined[block] = _extends({}, _t[block], t[block]);}});return _extends({}, _t, combined);}, import: function (inputTemplate) {let _t = _lodash2.default.cloneDeep(this);return _calcFromExistingTemplate(_t, inputTemplate);} };}function _validateRef(t, ref) {if (ref.Ref) {if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);}}return;}function _validateFnGetAtt(t, att) {if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);}return;}function _strip(t) {let { kind, Name } = t,rest = _objectWithoutProperties(t, ['kind', 'Name']);return rest;}function _stripKind(target) {let { kind } = target,rest = _objectWithoutProperties(target, ['kind']);return rest;}function _cleanObject(object) {if (Array.isArray(object)) {for (let v = 0; v < object.length; v++) {object[v] = _cleanObject(object[v]);}} else {if (object.kind) {object = _json(object);} else {for (let o in object) {if (object[o] !== null && typeof object[o] === 'object') {object[o] = _cleanObject(object[o]);}}}}return object;}function _buildResource(t) {let { Type, Properties, CreationPolicy, Metadata } = t;let newProps = {};if (Properties) {Object.keys(Properties).map(p => {if (Properties[p].kind) {newProps[p] = _json(Properties[p]);} else {newProps[p] = _cleanObject(Properties[p]);}});}let result = { Type, Properties: newProps };if (CreationPolicy) {result.CreationPolicy = _json(CreationPolicy);}if (Metadata) {result.Metadata = _json(Metadata);}return result;}function _buildCondition(t) {let { Condition } = t;let result = _json(Condition);Object.keys(result).map(k => {result[k][0] = _json(result[k][0]);});return result;}function _buildCreationPolicy(t) {let { Content } = t;return Content;}function _buildResourceMetadata(t) {let { Content } = t;return Content;}function _buildFnJoin(t) {if (Array.isArray(t.Values)) {return { 'Fn::Join': [t.Delimiter, t.Values] };} else {return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };}}function _buildMapping(t) {let result = t.Content;return result;}function _buildOutput(t) {let outputResult = Object.assign({}, t.Properties);if (typeof outputResult.Value !== 'string') {let stripped = _json(outputResult.Value);outputResult = _extends({}, outputResult, { Value: stripped });}if (outputResult.Export && outputResult.Export.Name && typeof outputResult.Export.Name !== 'string') {let stripped = _json(outputResult.Export.Name);outputResult = _extends({}, outputResult, { Export: { Name: stripped } });}return outputResult;}function _json(t) {switch (t.kind) {case 'Ref':return { Ref: t.Ref };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiaW5wdXRUZW1wbGF0ZSIsIkFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbiIsIkNvbmRpdGlvbnMiLCJNYXBwaW5ncyIsIk91dHB1dHMiLCJQYXJhbWV0ZXJzIiwiUmVzb3VyY2VzIiwiYWRkIiwiZSIsIm9wdGlvbnMiLCJfdCIsImNsb25lRGVlcCIsImtpbmQiLCJfYWRkQ3JlYXRpb25Qb2xpY3kiLCJfYWRkUmVzb3VyY2VNZXRhZGF0YSIsIl9hZGRDb25kaXRpb24iLCJfYWRkTWFwcGluZyIsIl9hZGRQYXJhbWV0ZXIiLCJfYWRkT3V0cHV0IiwibmV3VCIsIl9hZGRSZXNvdXJjZSIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJPdXRwdXQiLCJOYW1lIiwiVmFsdWUiLCJFeHBvcnQiLCJBV1NfU1RBQ0tfTkFNRSIsIm1hcCIsInAiLCJfYWRkRGVzY3JpcHRpb24iLCJTeW50YXhFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJidWlsZCIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjIiwibSIsIm8iLCJyIiwiRGVzY3JpcHRpb24iLCJyZW1vdmUiLCJlbGVtZW50IiwicGFyYW1ldGVyIiwib3V0cHV0IiwibWFwcGluZyIsIl9yZW1vdmVQYXJhbWV0ZXIiLCJfcmVtb3ZlT3V0cHV0IiwiX3JlbW92ZU1hcHBpbmciLCJyZW1vdmVEZXNjcmlwdGlvbiIsInJlbWFpbmluZyIsIm1lcmdlIiwidCIsImNvbWJpbmVkIiwiYmxvY2siLCJpbXBvcnQiLCJfY2FsY0Zyb21FeGlzdGluZ1RlbXBsYXRlIiwiX3ZhbGlkYXRlUmVmIiwicmVmIiwiUmVmIiwiX3ZhbGlkYXRlRm5HZXRBdHQiLCJhdHQiLCJGbkdldEF0dCIsIl9zdHJpcCIsInJlc3QiLCJfc3RyaXBLaW5kIiwidGFyZ2V0IiwiX2NsZWFuT2JqZWN0Iiwib2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwidiIsIl9idWlsZFJlc291cmNlIiwiUHJvcGVydGllcyIsIkNyZWF0aW9uUG9saWN5IiwiTWV0YWRhdGEiLCJuZXdQcm9wcyIsIl9idWlsZENvbmRpdGlvbiIsIkNvbmRpdGlvbiIsImsiLCJfYnVpbGRDcmVhdGlvblBvbGljeSIsIkNvbnRlbnQiLCJfYnVpbGRSZXNvdXJjZU1ldGFkYXRhIiwiX2J1aWxkRm5Kb2luIiwiVmFsdWVzIiwiRGVsaW1pdGVyIiwiX2J1aWxkTWFwcGluZyIsIl9idWlsZE91dHB1dCIsIm91dHB1dFJlc3VsdCIsImFzc2lnbiIsInN0cmlwcGVkIiwiRm5FcXVhbHMiLCJGblN1YiIsImRlc2MiLCJSZXNvdXJjZSIsInJlc291cmNlIiwiZTAiLCJvdXQiLCJwYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJjYXQiLCJyZXNUeXBlIiwic2VydmljZSIsIm0wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEZ0JBLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlTQUMsSyxHQUFBQSxLLENBclZoQixnQywrQ0FDQSxpREFDQSxxREFFQSw2Q0FDQSxpREFDQSwrQ0FDQSwyQ0FHQSw2REFDQSxpREFDQSx3Q0FDQSxvQ0FDQSxrQyxrVEFYQTtBQThDQTs7R0FHTyxTQUFT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QUFQLEVBQVU3QyxjQUFjSSxPQUFkLENBQXNCeUMsQ0FBdEIsQ0FBVixDQUFOLENBQUo7QUFDRCxLQUhEO0FBSUQ7QUFDRCxNQUFJN0MsY0FBY0csUUFBbEIsRUFBNEI7QUFDMUJxQyxXQUFPQyxJQUFQLENBQVl6QyxjQUFjRyxRQUExQixFQUFvQzZCLEdBQXBDLENBQXdDWSxLQUFLO0FBQzNDSixhQUFPQyxJQUFQLENBQVl6QyxjQUFjRyxRQUFkLENBQXVCeUMsQ0FBdkIsQ0FBWixFQUF1Q1osR0FBdkMsQ0FBMkMrRSxNQUFNO0FBQy9DcEQsWUFBSUEsRUFBRXBELEdBQUYsQ0FBTSxzQkFBUXFDLENBQVIsRUFBV21FLEVBQVgsRUFBZS9HLGNBQWNHLFFBQWQsQ0FBdUJ5QyxDQUF2QixFQUEwQm1FLEVBQTFCLENBQWYsQ0FBTixDQUFKO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFLRDtBQUNELE1BQUkvRyxjQUFjRSxVQUFsQixFQUE4QjtBQUM1QnNDLFdBQU9DLElBQVAsQ0FBWXpDLGNBQWNFLFVBQTFCLEVBQXNDOEIsR0FBdEMsQ0FBMENXLEtBQUs7QUFDN0NnQixVQUFJQSxFQUFFcEQsR0FBRixDQUFNOEUsVUFBVTFDLENBQVYsRUFBYTNDLGNBQWNFLFVBQWQsQ0FBeUJ5QyxDQUF6QixDQUFiLENBQU4sQ0FBSjtBQUNELEtBRkQ7QUFHRDtBQUNELFNBQU9nQixDQUFQO0FBQ0QiLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElQYXJhbWV0ZXIsIFBhcmFtZXRlciB9IGZyb20gJy4vZWxlbWVudHMvcGFyYW1ldGVyJztcbmltcG9ydCB7IElEZXNjcmlwdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvZGVzY3JpcHRpb24nO1xuLy8gaW1wb3J0IHsgSU1ldGFkYXRhIH0gZnJvbSAnLi9lbGVtZW50cy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBJTWFwcGluZyB9IGZyb20gJy4vZWxlbWVudHMvbWFwcGluZyc7XG5pbXBvcnQgeyBJQ29uZGl0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgSVJlc291cmNlIH0gZnJvbSAnLi9lbGVtZW50cy9yZXNvdXJjZSc7XG5pbXBvcnQgeyBJT3V0cHV0LCBPdXRwdXQgfSBmcm9tICcuL2VsZW1lbnRzL291dHB1dCc7XG5pbXBvcnQgdHlwZSB7IElFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9lbGVtZW50JztcbmltcG9ydCB7IE1hcHBpbmcgfSBmcm9tICcuL2VsZW1lbnRzL21hcHBpbmcnO1xuaW1wb3J0IHsgSUNyZWF0aW9uUG9saWN5IH0gZnJvbSAnLi9hdHRyaWJ1dGVzL2NyZWF0aW9ucG9saWN5JztcbmltcG9ydCB7IElSZXNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9hdHRyaWJ1dGVzL21ldGFkYXRhJztcbmltcG9ydCB7IFJlZiwgRm5TdWIsIEZuR2V0QXR0IH0gZnJvbSAnLi9pbnRyaW5zaWMnO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQgeyBQc2V1ZG8gfSBmcm9tICcuL3BzZXVkbyc7XG5pbXBvcnQgdHlwZSB7XG4gIElSZWYsXG4gIElGbkdldEF0dCxcbiAgSUZuSm9pbixcbiAgQ29uZGl0aW9uYWwsXG4gIElJbnRyaW5zaWMsXG4gIElGbkFuZCxcbiAgSUZuRXF1YWxzLFxuICBJRm5JZixcbiAgSUZuTm90LFxuICBJRm5PclxufSBmcm9tICcuL2ludHJpbnNpYyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlIHtcbiAgK2tpbmQ6ICdUZW1wbGF0ZScsXG4gICtBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246IHN0cmluZyxcbiAgK0Rlc2NyaXB0aW9uPzogdm9pZCB8IHN0cmluZyxcbiAgK1BhcmFtZXRlcnM6IHsgK1tzOiBzdHJpbmddOiBJUGFyYW1ldGVyIH0sXG4gIC8vICtNZXRhZGF0YTogeyArW3M6IHN0cmluZ106IElNZXRhZGF0YSB9O1xuICArTWFwcGluZ3M6IHsgK1tzOiBzdHJpbmddOiBJTWFwcGluZyB9LFxuICArQ29uZGl0aW9uczogeyArW3M6IHN0cmluZ106IElDb25kaXRpb24gfSxcbiAgK1Jlc291cmNlczogeyArW3M6IHN0cmluZ106IElSZXNvdXJjZSB9LFxuICArT3V0cHV0czogeyArW3M6IHN0cmluZ106IElPdXRwdXQgfSxcbiAgK2FkZDogRnVuY3Rpb24sXG4gICtyZW1vdmU6IEZ1bmN0aW9uLFxuICArcmVtb3ZlRGVzY3JpcHRpb246IEZ1bmN0aW9uLFxuICArYnVpbGQ6IEZ1bmN0aW9uXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZE9wdGlvbnMge1xuICBPdXRwdXQ6IGJvb2xlYW4sXG4gIFBhcmFtZXRlcnM6IEFycmF5PHN0cmluZz5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IFRlbXBsYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gVGVtcGxhdGUoaW5wdXRUZW1wbGF0ZT86IG1peGVkKTogSVRlbXBsYXRlIHtcbiAgcmV0dXJuIHtcbiAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICBDb25kaXRpb25zOiB7fSxcbiAgICBNYXBwaW5nczoge30sXG4gICAgT3V0cHV0czoge30sXG4gICAgUGFyYW1ldGVyczoge30sXG4gICAgUmVzb3VyY2VzOiB7fSxcbiAgICBhZGQ6IGZ1bmN0aW9uKGU6IElFbGVtZW50LCBvcHRpb25zPzogSUFkZE9wdGlvbnMpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIHN3aXRjaCAoZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgICAgICByZXR1cm4gX2FkZENyZWF0aW9uUG9saWN5KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2VNZXRhZGF0YSc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRSZXNvdXJjZU1ldGFkYXRhKF90LCBlKTtcbiAgICAgICAgY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICByZXR1cm4gX2FkZENvbmRpdGlvbihfdCwgZSk7XG4gICAgICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgICAgIHJldHVybiBfYWRkTWFwcGluZyhfdCwgZSk7XG4gICAgICAgIGNhc2UgJ1BhcmFtZXRlcic6XG4gICAgICAgICAgcmV0dXJuIF9hZGRQYXJhbWV0ZXIoX3QsIGUpO1xuICAgICAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgICAgIHJldHVybiBfYWRkT3V0cHV0KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2UnOlxuICAgICAgICAgIGxldCBuZXdUID0gX2FkZFJlc291cmNlKF90LCBlKTtcbiAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbmFtZVNwbGl0ID0gZS5UeXBlLnNwbGl0KCc6OicpLnNwbGljZSgxKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0TmFtZSA9IG5hbWVTcGxpdC5qb2luKCcnKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLk91dHB1dCkge1xuICAgICAgICAgICAgICBuZXdUID0gX2FkZE91dHB1dChcbiAgICAgICAgICAgICAgICBuZXdULFxuICAgICAgICAgICAgICAgIE91dHB1dChgJHtlLk5hbWV9JHtzaG9ydE5hbWV9T3V0cHV0YCwge1xuICAgICAgICAgICAgICAgICAgVmFsdWU6IFJlZihlLk5hbWUpLFxuICAgICAgICAgICAgICAgICAgRXhwb3J0OiB7XG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IEZuU3ViKFxuICAgICAgICAgICAgICAgICAgICAgIGBcXCRcXHske1BzZXVkby5BV1NfU1RBQ0tfTkFNRX1cXH0tJHtuYW1lU3BsaXRbMF19LSR7bmFtZVNwbGl0WzFdfS0ke2UuTmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuUGFyYW1ldGVycykge1xuICAgICAgICAgICAgICBvcHRpb25zLlBhcmFtZXRlcnMubWFwKHAgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1QgPSBfYWRkUGFyYW1ldGVyKFxuICAgICAgICAgICAgICAgICAgbmV3VCxcbiAgICAgICAgICAgICAgICAgIFBhcmFtZXRlcihgJHtlLk5hbWV9JHtzaG9ydE5hbWV9UGFyYW1gLCB7XG4gICAgICAgICAgICAgICAgICAgIFR5cGU6ICdTdHJpbmcnXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3VDtcbiAgICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxuICAgICAgICAgIHJldHVybiBfYWRkRGVzY3JpcHRpb24oX3QsIGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDogZnVuY3Rpb24oKTogbWl4ZWQge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge1xuICAgICAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICAgICAgUmVzb3VyY2VzOiB7fVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNvbmRpdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnNbY10gPSBfanNvbih0aGlzLkNvbmRpdGlvbnNbY10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLlBhcmFtZXRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnNbcF0gPSBfanNvbih0aGlzLlBhcmFtZXRlcnNbcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5NYXBwaW5ncyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5tYXAobSA9PiB7XG4gICAgICAgICAgcmVzdWx0Lk1hcHBpbmdzW21dID0gX2pzb24odGhpcy5NYXBwaW5nc1ttXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuT3V0cHV0cykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuT3V0cHV0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgICAgICByZXN1bHQuT3V0cHV0c1tvXSA9IF9qc29uKHRoaXMuT3V0cHV0c1tvXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUmVzb3VyY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5SZXNvdXJjZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5SZXNvdXJjZXMpLm1hcChyID0+IHtcbiAgICAgICAgICByZXN1bHQuUmVzb3VyY2VzW3JdID0gX2pzb24odGhpcy5SZXNvdXJjZXNbcl0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5EZXNjcmlwdGlvbiA9IHRoaXMuRGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAga2luZDogJ1RlbXBsYXRlJyxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGU6IElFbGVtZW50IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgICAgIGxldCByZXN1bHQgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIGxldCBlbGVtZW50OiBJRWxlbWVudDtcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjogSVBhcmFtZXRlciB8IHZvaWQgPSByZXN1bHQuUGFyYW1ldGVyc1tlXTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcikge1xuICAgICAgICAgIGVsZW1lbnQgPSBwYXJhbWV0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG91dHB1dDogSU91dHB1dCB8IHZvaWQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gb3V0cHV0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWFwcGluZzogSU1hcHBpbmcgfCB2b2lkID0gcmVzdWx0Lk1hcHBpbmdzW2VdO1xuICAgICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudCA9IG1hcHBpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gZTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZWxlbWVudC5raW5kKSB7XG4gICAgICAgIC8qY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZW1vdmVDb25kaXRpb24odGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZVBhcmFtZXRlcih0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgY2FzZSAnT3V0cHV0JzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZU91dHB1dCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgLypjYXNlICdSZXNvdXJjZSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVtb3ZlUmVzb3VyY2UodGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmVNYXBwaW5nKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVEZXNjcmlwdGlvbjogZnVuY3Rpb24oKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IHsgRGVzY3JpcHRpb24sIC4uLnJlbWFpbmluZyB9ID0gdGhpcztcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24odDogSVRlbXBsYXRlKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICBjb25zdCBjb21iaW5lZCA9IHt9O1xuICAgICAgW1xuICAgICAgICAnQ29uZGl0aW9ucycsXG4gICAgICAgICdNYXBwaW5nJyxcbiAgICAgICAgJ091dHB1dHMnLFxuICAgICAgICAnUGFyYW1ldGVycycsXG4gICAgICAgICdSZXNvdXJjZXMnLFxuICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICBdLm1hcChibG9jayA9PiB7XG4gICAgICAgIGlmICh0W2Jsb2NrXSkge1xuICAgICAgICAgIGNvbWJpbmVkW2Jsb2NrXSA9IHsgLi4uX3RbYmxvY2tdLCAuLi50W2Jsb2NrXSB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLl90LFxuICAgICAgICAuLi5jb21iaW5lZFxuICAgICAgfTtcbiAgICB9LFxuICAgIGltcG9ydDogZnVuY3Rpb24oaW5wdXRUZW1wbGF0ZTogbWl4ZWQpOiBJVGVtcGxhdGUge1xuICAgICAgbGV0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICByZXR1cm4gX2NhbGNGcm9tRXhpc3RpbmdUZW1wbGF0ZShfdCwgaW5wdXRUZW1wbGF0ZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVSZWYodDogSVRlbXBsYXRlLCByZWY6IElSZWYpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAocmVmLlJlZikge1xuICAgIGlmICghKHQuUGFyYW1ldGVyc1tyZWYuUmVmXSB8fCB0LlJlc291cmNlc1tyZWYuUmVmXSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShyZWYpfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZUZuR2V0QXR0KHQ6IElUZW1wbGF0ZSwgYXR0OiBJRm5HZXRBdHQpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAoYXR0LkZuR2V0QXR0ICYmICF0LlJlc291cmNlc1thdHQuRm5HZXRBdHRbMF1dKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGF0dCl9YCk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBfc3RyaXAodDogSVBhcmFtZXRlciB8IElPdXRwdXQgfCBJUmVzb3VyY2UgfCBJQ29uZGl0aW9uKTogYW55IHtcbiAgbGV0IHsga2luZCwgTmFtZSwgLi4ucmVzdCB9ID0gdDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEtpbmQodGFyZ2V0OiBhbnkpOiBtaXhlZCB7XG4gIGxldCB7IGtpbmQsIC4uLnJlc3QgfSA9IHRhcmdldDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9jbGVhbk9iamVjdChvYmplY3Q6IGFueSk6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgb2JqZWN0Lmxlbmd0aDsgdisrKSB7XG4gICAgICBvYmplY3Rbdl0gPSBfY2xlYW5PYmplY3Qob2JqZWN0W3ZdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdC5raW5kKSB7XG4gICAgICBvYmplY3QgPSBfanNvbihvYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBvIGluIG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0W29dICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3Rbb10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb2JqZWN0W29dID0gX2NsZWFuT2JqZWN0KG9iamVjdFtvXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2UodDogSVJlc291cmNlKTogbWl4ZWQge1xuICBsZXQgeyBUeXBlLCBQcm9wZXJ0aWVzLCBDcmVhdGlvblBvbGljeSwgTWV0YWRhdGEgfSA9IHQ7XG4gIGxldCBuZXdQcm9wczogbWl4ZWQgPSB7fTtcbiAgaWYgKFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3Qua2V5cyhQcm9wZXJ0aWVzKS5tYXAocCA9PiB7XG4gICAgICBpZiAoUHJvcGVydGllc1twXS5raW5kKSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2pzb24oUHJvcGVydGllc1twXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQcm9wc1twXSA9IF9jbGVhbk9iamVjdChQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgcmVzdWx0ID0geyBUeXBlLCBQcm9wZXJ0aWVzOiBuZXdQcm9wcyB9O1xuICBpZiAoQ3JlYXRpb25Qb2xpY3kpIHtcbiAgICByZXN1bHQuQ3JlYXRpb25Qb2xpY3kgPSBfanNvbihDcmVhdGlvblBvbGljeSk7XG4gIH1cbiAgaWYgKE1ldGFkYXRhKSB7XG4gICAgcmVzdWx0Lk1ldGFkYXRhID0gX2pzb24oTWV0YWRhdGEpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENvbmRpdGlvbih0OiBJQ29uZGl0aW9uKTogc3RyaW5nIHtcbiAgbGV0IHsgQ29uZGl0aW9uIH0gPSB0O1xuICBsZXQgcmVzdWx0ID0gX2pzb24oQ29uZGl0aW9uKTtcbiAgT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoayA9PiB7XG4gICAgcmVzdWx0W2tdWzBdID0gX2pzb24ocmVzdWx0W2tdWzBdKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENyZWF0aW9uUG9saWN5KHQ6IElDcmVhdGlvblBvbGljeSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFJlc291cmNlTWV0YWRhdGEodDogSVJlc291cmNlTWV0YWRhdGEpOiBtaXhlZCB7XG4gIGxldCB7IENvbnRlbnQgfSA9IHQ7XG4gIHJldHVybiBDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRGbkpvaW4odDogSUZuSm9pbik6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodC5WYWx1ZXMpKSB7XG4gICAgcmV0dXJuIHsgJ0ZuOjpKb2luJzogW3QuRGVsaW1pdGVyLCB0LlZhbHVlc10gfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIF9qc29uKHQuVmFsdWVzKV0gfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYnVpbGRNYXBwaW5nKHQ6IElNYXBwaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IHQuQ29udGVudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkT3V0cHV0KHQ6IElPdXRwdXQpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0UmVzdWx0OiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0LlByb3BlcnRpZXMpO1xuICBpZiAodHlwZW9mIG91dHB1dFJlc3VsdC5WYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBsZXQgc3RyaXBwZWQgPSBfanNvbihvdXRwdXRSZXN1bHQuVmFsdWUpO1xuICAgIG91dHB1dFJlc3VsdCA9IHsgLi4ub3V0cHV0UmVzdWx0LCBWYWx1ZTogc3RyaXBwZWQgfTtcbiAgfVxuICBpZiAoXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydCAmJlxuICAgIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAmJlxuICAgIHR5cGVvZiBvdXRwdXRSZXN1bHQuRXhwb3J0Lk5hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIEV4cG9ydDogeyBOYW1lOiBzdHJpcHBlZCB9IH07XG4gIH1cbiAgcmV0dXJuIG91dHB1dFJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9qc29uKFxuICB0OiBJRWxlbWVudCB8IElSZWYgfCBJRm5HZXRBdHQgfCBJRm5Kb2luIHwgRm5TdWIgfCBJQ3JlYXRpb25Qb2xpY3lcbik6IG1peGVkIHtcbiAgc3dpdGNoICh0LmtpbmQpIHtcbiAgICBjYXNlICdSZWYnOlxuICAgICAgcmV0dXJuIHsgUmVmOiB0LlJlZiB9O1xuICAgIGNhc2UgJ0ZuR2V0QXR0JzpcbiAgICAgIHJldHVybiB7ICdGbjo6R2V0QXR0JzogdC5GbkdldEF0dCB9O1xuICAgIGNhc2UgJ0ZuSm9pbic6XG4gICAgICByZXR1cm4gX2J1aWxkRm5Kb2luKHQpO1xuICAgIGNhc2UgJ0ZuRXF1YWxzJzpcbiAgICAgIHJldHVybiB7ICdGbjo6RXF1YWxzJzogdC5GbkVxdWFscyB9O1xuICAgIGNhc2UgJ0ZuU3ViJzpcbiAgICAgIHJldHVybiB7ICdGbjo6U3ViJzogdC5GblN1YiB9O1xuICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgIHJldHVybiBfYnVpbGRDcmVhdGlvblBvbGljeSh0KTtcbiAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZU1ldGFkYXRhKHQpO1xuICAgIGNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICByZXR1cm4gX2J1aWxkQ29uZGl0aW9uKHQpO1xuICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgcmV0dXJuIF9idWlsZE1hcHBpbmcodCk7XG4gICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgIHJldHVybiBfc3RyaXAodCkuUHJvcGVydGllcztcbiAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgcmV0dXJuIF9idWlsZE91dHB1dCh0KTtcbiAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICByZXR1cm4gX2J1aWxkUmVzb3VyY2UodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ2FuJ3QgY2FsbCBfanNvbiBvbiAke0pTT04uc3RyaW5naWZ5KHQpfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hZGREZXNjcmlwdGlvbih0OiBJVGVtcGxhdGUsIGU6IElEZXNjcmlwdGlvbik6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IGRlc2MgPSB7IERlc2NyaXB0aW9uOiBlLkNvbnRlbnQgfTtcbiAgcmVzdWx0ID0geyAuLi50LCAuLi5kZXNjIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDcmVhdGlvblBvbGljeSh0OiBJVGVtcGxhdGUsIGU6IElDcmVhdGlvblBvbGljeSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgQ3JlYXRpb25Qb2xpY3kgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuQ3JlYXRpb25Qb2xpY3kgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZU1ldGFkYXRhKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlTWV0YWRhdGEpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGlmICghcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICdDYW5ub3QgYWRkIE1ldGFkYXRhIHRvIGEgUmVzb3VyY2UgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuJ1xuICAgICk7XG4gIH1cbiAgbGV0IHJlc291cmNlID0geyAuLi5yZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdIH07XG4gIHJlc291cmNlLk1ldGFkYXRhID0gZTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSA9IHJlc291cmNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkQ29uZGl0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSUNvbmRpdGlvbik6IElUZW1wbGF0ZSB7XG4gIC8vIFRPRE86IFZhbGlkYXRlIGludHJpbnNpY3NcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuQ29uZGl0aW9uc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQpOiBJVGVtcGxhdGUge1xuICBsZXQgZTAgPSBfLmNsb25lRGVlcChlKTtcbiAgaWYgKHR5cGVvZiBlMC5Qcm9wZXJ0aWVzLlZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGlmIChlMC5Qcm9wZXJ0aWVzLlZhbHVlLlJlZikge1xuICAgICAgX3ZhbGlkYXRlUmVmKHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgZTAuUHJvcGVydGllcy5WYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVxuICAgICkge1xuICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZSA9IEZuR2V0QXR0KFxuICAgICAgICBlMC5Qcm9wZXJ0aWVzLlZhbHVlWydGbjo6R2V0QXR0J11bMF0sXG4gICAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVsxXVxuICAgICAgKTtcbiAgICAgIF92YWxpZGF0ZUZuR2V0QXR0KHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH1cbiAgfVxuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5PdXRwdXRzW2UwLk5hbWVdID0gZTA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuUGFyYW1ldGVyc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdKSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSB7XG4gICAgICAuLi5lLFxuICAgICAgQ29udGVudDogeyAuLi5yZXN1bHQuTWFwcGluZ3NbZS5OYW1lXS5Db250ZW50LCAuLi5lLkNvbnRlbnQgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSBlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZSh0OiBJVGVtcGxhdGUsIGU6IElSZXNvdXJjZSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZU1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IG1hcHBpbmc6IElNYXBwaW5nO1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlXSkge1xuICAgICAgbWFwcGluZyA9IHJlc3VsdC5NYXBwaW5nc1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXBwaW5nID0gZTtcbiAgfVxuICBpZiAocmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KG1hcHBpbmcpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVPdXRwdXQodDogSVRlbXBsYXRlLCBlOiBJT3V0cHV0IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgb3V0OiBJT3V0cHV0O1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5PdXRwdXRzW2VdKSB7XG4gICAgICBvdXQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvdXQgPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuT3V0cHV0c1tvdXQuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk91dHB1dHNbb3V0Lk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShvdXQpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyIHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgcGFyYW06IElQYXJhbWV0ZXI7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0LlBhcmFtZXRlcnNbZV0pIHtcbiAgICAgIHBhcmFtID0gcmVzdWx0LlBhcmFtZXRlcnNbZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyYW0gPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkocGFyYW0pfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUodDogSVRlbXBsYXRlLCBpbnB1dFRlbXBsYXRlOiBtaXhlZCkge1xuICBpZiAoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICB0ID0gdC5hZGQoUGFyYW1ldGVyKHAsIGlucHV0VGVtcGxhdGUuUGFyYW1ldGVyc1twXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLlJlc291cmNlcykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncicpO1xuICAgICAgY29uc29sZS5sb2coaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0pO1xuICAgICAgbGV0IHNwbGl0ID0gaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uVHlwZS5zcGxpdCgnOjonKTtcbiAgICAgIGxldCBjYXQgPSBzcGxpdFsxXTtcbiAgICAgIGxldCByZXNUeXBlID0gc3BsaXRbMl07XG4gICAgICBsZXQgc2VydmljZSA9IFNlcnZpY2UoY2F0KTtcbiAgICAgIHQgPSB0LmFkZChzZXJ2aWNlW3Jlc1R5cGVdKHIsIGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzW3JdLlByb3BlcnRpZXMpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5PdXRwdXRzKS5tYXAobyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbycpO1xuICAgICAgdCA9IHQuYWRkKE91dHB1dChvLCBpbnB1dFRlbXBsYXRlLk91dHB1dHNbb10pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuTWFwcGluZ3MpLm1hcChtID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuTWFwcGluZ3NbbV0pLm1hcChtMCA9PiB7XG4gICAgICAgIHQgPSB0LmFkZChNYXBwaW5nKG0sIG0wLCBpbnB1dFRlbXBsYXRlLk1hcHBpbmdzW21dW20wXSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlucHV0VGVtcGxhdGUuQ29uZGl0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuQ29uZGl0aW9ucykubWFwKGMgPT4ge1xuICAgICAgdCA9IHQuYWRkKENvbmRpdGlvbihjLCBpbnB1dFRlbXBsYXRlLkNvbmRpdGlvbnNbY10pKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbiJdfQ==