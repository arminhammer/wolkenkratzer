'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.


































































Template = Template;exports.







































































































































































































































































































































_json = _json;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _parameter = require('./elements/parameter');var _description = require('./elements/description');var _mapping = require('./elements/mapping');var _condition = require('./elements/condition');var _resource = require('./elements/resource');var _output = require('./elements/output');var _creationpolicy = require('./attributes/creationpolicy');var _metadata = require('./attributes/metadata');var _intrinsic = require('./intrinsic');var _service = require('./service');var _pseudo = require('./pseudo');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;} // import { IMetadata } from './elements/metadata';
/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */ /** @module Template */ /**
                             * Template Interface
                             * @member Template
                             */ /**
                                 * IAddOptions Interface
                                 * @member Template
                                 */function Template() {return { AWSTemplateFormatVersion: '2010-09-09', Conditions: {}, Mappings: {}, Outputs: {}, Parameters: {}, Resources: {}, /**
                                                                                                                                                                                    * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
                                                                                                                                                                                    * @example
                                                                                                                                                                                    * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
                                                                                                                                                                                    */add: function (e, options) {const _t = _lodash2.default.cloneDeep(this);switch (e.kind) {case 'CreationPolicy':return _addCreationPolicy(_t, e);case 'ResourceMetadata':return _addResourceMetadata(_t, e);case 'Condition':return _addCondition(_t, e);case 'Mapping':return _addMapping(_t, e);case 'Parameter':return _addParameter(_t, e);case 'Output':return _addOutput(_t, e);case 'Resource':let newT = _t;let f = _lodash2.default.cloneDeep(e);if (options) {const nameSplit = f.Type.split('::').splice(1);const shortName = nameSplit.join('');if (options.Parameters) {options.Parameters.map(p => {const paramName = `${f.Name}${shortName}Param`;if (!f.Properties) {f.Properties = {};}f.Properties[p] = (0, _intrinsic.Ref)(paramName);newT = _addParameter(newT, (0, _parameter.Parameter)(paramName, { Type: 'String' }));});}newT = _addResource(_t, f);if (options.Output) {newT = _addOutput(newT, (0, _output.Output)(`${f.Name}${shortName}Output`, { Value: (0, _intrinsic.Ref)(f.Name), Export: { Name: (0, _intrinsic.FnSub)(`\$\{${_pseudo.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`) } }));}} else {newT = _addResource(_t, f);}return newT;case 'Description':return _addDescription(_t, e);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * const t = Template();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * JSON.stringify(t.build(), null, 2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */build: function () {let result = { AWSTemplateFormatVersion: '2010-09-09', Resources: {} };if (Object.keys(this.Conditions).length > 0) {result.Conditions = {};Object.keys(this.Conditions).map(c => {result.Conditions[c] = _json(this.Conditions[c]);});}if (Object.keys(this.Parameters).length > 0) {result.Parameters = {};Object.keys(this.Parameters).map(p => {result.Parameters[p] = _json(this.Parameters[p]);});}if (Object.keys(this.Mappings).length > 0) {result.Mappings = {};Object.keys(this.Mappings).map(m => {result.Mappings[m] = _json(this.Mappings[m]);});}if (Object.keys(this.Outputs).length > 0) {result.Outputs = {};Object.keys(this.Outputs).map(o => {result.Outputs[o] = _json(this.Outputs[o]);});}if (Object.keys(this.Resources).length > 0) {result.Resources = {};Object.keys(this.Resources).map(r => {result.Resources[r] = _json(this.Resources[r]);});}if (this.Description) {result.Description = this.Description;}return result;}, kind: 'Template', /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * let t = Template();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * let p = Parameter('NewParam', { Type: 'String' });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * t.add(p).remove(p);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */remove: function (e) {let result = _lodash2.default.cloneDeep(this);let element;if (typeof e === 'string') {let parameter = result.Parameters[e];if (parameter) {element = parameter;} else {let output = result.Outputs[e];if (output) {element = output;} else {let mapping = result.Mappings[e];if (mapping) {element = mapping;} else {throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);}}}} else {element = e;}switch (element.kind) {/*case 'Condition':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         return _removeCondition(this, e);*/case 'Parameter':return _removeParameter(this, element);case 'Output':return _removeOutput(this, element); /*case 'Resource':
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   return _removeResource(this, e);*/case 'Mapping':return _removeMapping(this, element);default:throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);}}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Removes the Description from the Template.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */removeDescription: function () {const _ref = this,{ Description } = _ref,remaining = _objectWithoutProperties(_ref, ['Description']);return remaining;}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */merge: function (t) {const _t = _lodash2.default.cloneDeep(this);const combined = {};['Conditions', 'Mapping', 'Outputs', 'Parameters', 'Resources', 'Description'].map(block => {if (t[block]) {combined[block] = _extends({}, _t[block], t[block]);}});return _extends({}, _t, combined);}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * const templateJson = require('template.json');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * const t = Template().import(templateJson);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */import: function (inputTemplate) {let _t = _lodash2.default.cloneDeep(this);return _calcFromExistingTemplate(_t, inputTemplate);} };}function _validateRef(t, ref) {if (ref.Ref) {if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);}}return;}function _validateFnGetAtt(t, att) {if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);}return;}function _strip(t) {let { kind, Name } = t,rest = _objectWithoutProperties(t, ['kind', 'Name']);return rest;}function _stripKind(target) {let { kind } = target,rest = _objectWithoutProperties(target, ['kind']);return rest;}function _cleanObject(object) {if (Array.isArray(object)) {for (let v = 0; v < object.length; v++) {object[v] = _cleanObject(object[v]);}} else {if (object.kind) {object = _json(object);} else {for (let o in object) {if (object[o] !== null && typeof object[o] === 'object') {object[o] = _cleanObject(object[o]);}}}}return object;}function _buildResource(t) {let { Type, Properties, CreationPolicy, Metadata } = t;let newProps = {};if (Properties) {Object.keys(Properties).map(p => {if (Properties[p].kind) {newProps[p] = _json(Properties[p]);} else {newProps[p] = _cleanObject(Properties[p]);}});}let result = { Type, Properties: newProps };if (CreationPolicy) {result.CreationPolicy = _json(CreationPolicy);}if (Metadata) {result.Metadata = _json(Metadata);}return result;}function _buildCondition(t) {let { Condition } = t;let result = _json(Condition);Object.keys(result).map(k => {result[k][0] = _json(result[k][0]);});return result;}function _buildCreationPolicy(t) {let { Content } = t;return Content;}function _buildResourceMetadata(t) {let { Content } = t;return Content;}function _buildFnJoin(t) {if (Array.isArray(t.Values)) {return { 'Fn::Join': [t.Delimiter, t.Values] };} else {return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };}}function _buildMapping(t) {let result = t.Content;return result;}function _buildOutput(t) {let outputResult = Object.assign({}, t.Properties);if (typeof outputResult.Value !== 'string') {let stripped = _json(outputResult.Value);outputResult = _extends({}, outputResult, { Value: stripped });}if (outputResult.Export && outputResult.Export.Name && typeof outputResult.Export.Name !== 'string') {let stripped = _json(outputResult.Export.Name);outputResult = _extends({}, outputResult, { Export: { Name: stripped } });}return outputResult;}function _json(t) {switch (t.kind) {case 'Ref':return { Ref: t.Ref };case 'FnGetAtt':return { 'Fn::GetAtt': t.FnGetAtt };case 'FnJoin':return _buildFnJoin(t);case 'FnEquals':return { 'Fn::Equals': t.FnEquals };case 'FnSub':return { 'Fn::Sub': t.FnSub };case 'CreationPolicy':return _buildCreationPolicy(t);case 'ResourceMetadata':return _buildResourceMetadata(t);case 'Condition':return _buildCondition(t);case 'Mapping':return _buildMapping(t);case 'Parameter':return _strip(t).Properties;case 'Output':return _buildOutput(t);case 'Resource':return _buildResource(t);default:throw new SyntaxError(`Can't call _json on ${JSON.stringify(t)}`);}}function _addDescription(t, e) {let result = _extends({}, t);let desc = { Description: e.Content };result = _extends({}, t, desc);return result;
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
  if (inputTemplate.Description) {
    t = t.add((0, _description.Description)(inputTemplate.Description));
  }
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
      if (split[0] === 'AWS') {
        let service = (0, _service.Service)(cat);
        t = t.add(service[resType](r, inputTemplate.Resources[r].Properties));
      } else if (split[0] === 'Custom') {
        t = t.add((0, _resource.CustomResource)(r, inputTemplate.Resources[r].Properties));
      }
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
      t = t.add((0, _condition.Condition)(c, inputTemplate.Conditions[c]));
    });
  }
  return t;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uIiwiQ29uZGl0aW9ucyIsIk1hcHBpbmdzIiwiT3V0cHV0cyIsIlBhcmFtZXRlcnMiLCJSZXNvdXJjZXMiLCJhZGQiLCJlIiwib3B0aW9ucyIsIl90IiwiY2xvbmVEZWVwIiwia2luZCIsIl9hZGRDcmVhdGlvblBvbGljeSIsIl9hZGRSZXNvdXJjZU1ldGFkYXRhIiwiX2FkZENvbmRpdGlvbiIsIl9hZGRNYXBwaW5nIiwiX2FkZFBhcmFtZXRlciIsIl9hZGRPdXRwdXQiLCJuZXdUIiwiZiIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJtYXAiLCJwIiwicGFyYW1OYW1lIiwiTmFtZSIsIlByb3BlcnRpZXMiLCJfYWRkUmVzb3VyY2UiLCJPdXRwdXQiLCJWYWx1ZSIsIkV4cG9ydCIsIkFXU19TVEFDS19OQU1FIiwiX2FkZERlc2NyaXB0aW9uIiwiU3ludGF4RXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGQiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYyIsIm0iLCJvIiwiciIsIkRlc2NyaXB0aW9uIiwicmVtb3ZlIiwiZWxlbWVudCIsInBhcmFtZXRlciIsIm91dHB1dCIsIm1hcHBpbmciLCJfcmVtb3ZlUGFyYW1ldGVyIiwiX3JlbW92ZU91dHB1dCIsIl9yZW1vdmVNYXBwaW5nIiwicmVtb3ZlRGVzY3JpcHRpb24iLCJyZW1haW5pbmciLCJtZXJnZSIsInQiLCJjb21iaW5lZCIsImJsb2NrIiwiaW1wb3J0IiwiaW5wdXRUZW1wbGF0ZSIsIl9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUiLCJfdmFsaWRhdGVSZWYiLCJyZWYiLCJSZWYiLCJfdmFsaWRhdGVGbkdldEF0dCIsImF0dCIsIkZuR2V0QXR0IiwiX3N0cmlwIiwicmVzdCIsIl9zdHJpcEtpbmQiLCJ0YXJnZXQiLCJfY2xlYW5PYmplY3QiLCJvYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiX2J1aWxkUmVzb3VyY2UiLCJDcmVhdGlvblBvbGljeSIsIk1ldGFkYXRhIiwibmV3UHJvcHMiLCJfYnVpbGRDb25kaXRpb24iLCJDb25kaXRpb24iLCJrIiwiX2J1aWxkQ3JlYXRpb25Qb2xpY3kiLCJDb250ZW50IiwiX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSIsIl9idWlsZEZuSm9pbiIsIlZhbHVlcyIsIkRlbGltaXRlciIsIl9idWlsZE1hcHBpbmciLCJfYnVpbGRPdXRwdXQiLCJvdXRwdXRSZXN1bHQiLCJhc3NpZ24iLCJzdHJpcHBlZCIsIkZuRXF1YWxzIiwiRm5TdWIiLCJkZXNjIiwiUmVzb3VyY2UiLCJyZXNvdXJjZSIsImUwIiwib3V0IiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiY2F0IiwicmVzVHlwZSIsInNlcnZpY2UiLCJtMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FZ0JBLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdVQUMsSyxHQUFBQSxLLENBMVloQixnQywrQ0FDQSxpREFDQSxxREFFQSw2Q0FD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QXZCLENBQVosRUFBdUNwQixHQUF2QyxDQUEyQ3VGLE1BQU07QUFDL0NwRCxZQUFJQSxFQUFFdkQsR0FBRixDQUFNLHNCQUFRd0MsQ0FBUixFQUFXbUUsRUFBWCxFQUFlaEQsY0FBYy9ELFFBQWQsQ0FBdUI0QyxDQUF2QixFQUEwQm1FLEVBQTFCLENBQWYsQ0FBTixDQUFKO0FBQ0QsT0FGRDtBQUdELEtBSkQ7QUFLRDtBQUNELE1BQUloRCxjQUFjaEUsVUFBbEIsRUFBOEI7QUFDNUJ5QyxXQUFPQyxJQUFQLENBQVlzQixjQUFjaEUsVUFBMUIsRUFBc0N5QixHQUF0QyxDQUEwQ21CLEtBQUs7QUFDN0NnQixVQUFJQSxFQUFFdkQsR0FBRixDQUFNLDBCQUFVdUMsQ0FBVixFQUFhb0IsY0FBY2hFLFVBQWQsQ0FBeUI0QyxDQUF6QixDQUFiLENBQU4sQ0FBSjtBQUNELEtBRkQ7QUFHRDtBQUNELFNBQU9nQixDQUFQO0FBQ0QiLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElQYXJhbWV0ZXIsIFBhcmFtZXRlciB9IGZyb20gJy4vZWxlbWVudHMvcGFyYW1ldGVyJztcbmltcG9ydCB7IElEZXNjcmlwdGlvbiwgRGVzY3JpcHRpb24gfSBmcm9tICcuL2VsZW1lbnRzL2Rlc2NyaXB0aW9uJztcbi8vIGltcG9ydCB7IElNZXRhZGF0YSB9IGZyb20gJy4vZWxlbWVudHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSU1hcHBpbmcgfSBmcm9tICcuL2VsZW1lbnRzL21hcHBpbmcnO1xuaW1wb3J0IHsgSUNvbmRpdGlvbiwgQ29uZGl0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgSVJlc291cmNlLCBDdXN0b21SZXNvdXJjZSB9IGZyb20gJy4vZWxlbWVudHMvcmVzb3VyY2UnO1xuaW1wb3J0IHsgSU91dHB1dCwgT3V0cHV0IH0gZnJvbSAnLi9lbGVtZW50cy9vdXRwdXQnO1xuaW1wb3J0IHR5cGUgeyBJRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvZWxlbWVudCc7XG5pbXBvcnQgeyBNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmltcG9ydCB7IElDcmVhdGlvblBvbGljeSB9IGZyb20gJy4vYXR0cmlidXRlcy9jcmVhdGlvbnBvbGljeSc7XG5pbXBvcnQgeyBJUmVzb3VyY2VNZXRhZGF0YSB9IGZyb20gJy4vYXR0cmlidXRlcy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBSZWYsIEZuU3ViLCBGbkdldEF0dCB9IGZyb20gJy4vaW50cmluc2ljJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuaW1wb3J0IHsgUHNldWRvIH0gZnJvbSAnLi9wc2V1ZG8nO1xuaW1wb3J0IHR5cGUge1xuICBJUmVmLFxuICBJRm5HZXRBdHQsXG4gIElGbkpvaW4sXG4gIENvbmRpdGlvbmFsLFxuICBJSW50cmluc2ljLFxuICBJRm5BbmQsXG4gIElGbkVxdWFscyxcbiAgSUZuSWYsXG4gIElGbk5vdCxcbiAgSUZuT3Jcbn0gZnJvbSAnLi9pbnRyaW5zaWMnO1xuXG4vKiogQG1vZHVsZSBUZW1wbGF0ZSAqL1xuXG4vKipcbiAqIFRlbXBsYXRlIEludGVyZmFjZVxuICogQG1lbWJlciBUZW1wbGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZSB7XG4gICtraW5kOiAnVGVtcGxhdGUnLFxuICArQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uOiBzdHJpbmcsXG4gICtEZXNjcmlwdGlvbj86IHZvaWQgfCBzdHJpbmcsXG4gICtQYXJhbWV0ZXJzOiB7ICtbczogc3RyaW5nXTogSVBhcmFtZXRlciB9LFxuICAvLyArTWV0YWRhdGE6IHsgK1tzOiBzdHJpbmddOiBJTWV0YWRhdGEgfTtcbiAgK01hcHBpbmdzOiB7ICtbczogc3RyaW5nXTogSU1hcHBpbmcgfSxcbiAgK0NvbmRpdGlvbnM6IHsgK1tzOiBzdHJpbmddOiBJQ29uZGl0aW9uIH0sXG4gICtSZXNvdXJjZXM6IHsgK1tzOiBzdHJpbmddOiBJUmVzb3VyY2UgfSxcbiAgK091dHB1dHM6IHsgK1tzOiBzdHJpbmddOiBJT3V0cHV0IH0sXG4gICthZGQ6IEZ1bmN0aW9uLFxuICArcmVtb3ZlOiBGdW5jdGlvbixcbiAgK3JlbW92ZURlc2NyaXB0aW9uOiBGdW5jdGlvbixcbiAgK2J1aWxkOiBGdW5jdGlvbixcbiAgK21lcmdlOiBGdW5jdGlvbixcbiAgK2ltcG9ydDogRnVuY3Rpb25cbn1cblxuLyoqXG4gKiBJQWRkT3B0aW9ucyBJbnRlcmZhY2VcbiAqIEBtZW1iZXIgVGVtcGxhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWRkT3B0aW9ucyB7XG4gIE91dHB1dDogYm9vbGVhbixcbiAgUGFyYW1ldGVyczogQXJyYXk8c3RyaW5nPlxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVGVtcGxhdGUgb2JqZWN0LlxuICogQG1lbWJlciBUZW1wbGF0ZVxuICogQHJldHVybnMgSVRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUZW1wbGF0ZSgpOiBJVGVtcGxhdGUge1xuICByZXR1cm4ge1xuICAgIEFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogJzIwMTAtMDktMDknLFxuICAgIENvbmRpdGlvbnM6IHt9LFxuICAgIE1hcHBpbmdzOiB7fSxcbiAgICBPdXRwdXRzOiB7fSxcbiAgICBQYXJhbWV0ZXJzOiB7fSxcbiAgICBSZXNvdXJjZXM6IHt9LFxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBQYXJhbWV0ZXIsIERlc2NyaXB0aW9uLCBPdXRwdXQsIFJlc291cmNlLCBDb25kaXRpb24sIG9yIE1hcHBpbmcgdG8gdGhlIHRlbXBsYXRlLiBSZXR1cm5zIGEgbmV3IFRlbXBsYXRlIHdpdGggdGhlIGVsZW1lbnQgYWRkZWQuIERvZXMgbm90IG11dGF0ZSB0aGUgb3JpZ2luYWwgVGVtcGxhdGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgdCA9IFRlbXBsYXRlKCkuYWRkKFMzLkJ1Y2tldCgnQnVja2V0JyksIHsgT3V0cHV0OiB0cnVlIH0pO1xuICAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24oZTogSUVsZW1lbnQsIG9wdGlvbnM/OiBJQWRkT3B0aW9ucyk6IElUZW1wbGF0ZSB7XG4gICAgICBjb25zdCBfdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgc3dpdGNoIChlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnQ3JlYXRpb25Qb2xpY3knOlxuICAgICAgICAgIHJldHVybiBfYWRkQ3JlYXRpb25Qb2xpY3koX3QsIGUpO1xuICAgICAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgICAgICByZXR1cm4gX2FkZFJlc291cmNlTWV0YWRhdGEoX3QsIGUpO1xuICAgICAgICBjYXNlICdDb25kaXRpb24nOlxuICAgICAgICAgIHJldHVybiBfYWRkQ29uZGl0aW9uKF90LCBlKTtcbiAgICAgICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRNYXBwaW5nKF90LCBlKTtcbiAgICAgICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgICAgICByZXR1cm4gX2FkZFBhcmFtZXRlcihfdCwgZSk7XG4gICAgICAgIGNhc2UgJ091dHB1dCc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRPdXRwdXQoX3QsIGUpO1xuICAgICAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICAgICAgbGV0IG5ld1QgPSBfdDtcbiAgICAgICAgICBsZXQgZiA9IF8uY2xvbmVEZWVwKGUpO1xuICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lU3BsaXQgPSBmLlR5cGUuc3BsaXQoJzo6Jykuc3BsaWNlKDEpO1xuICAgICAgICAgICAgY29uc3Qgc2hvcnROYW1lID0gbmFtZVNwbGl0LmpvaW4oJycpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuUGFyYW1ldGVycykge1xuICAgICAgICAgICAgICBvcHRpb25zLlBhcmFtZXRlcnMubWFwKHAgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IGAke2YuTmFtZX0ke3Nob3J0TmFtZX1QYXJhbWA7XG4gICAgICAgICAgICAgICAgaWYgKCFmLlByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgIGYuUHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmLlByb3BlcnRpZXNbcF0gPSBSZWYocGFyYW1OYW1lKTtcbiAgICAgICAgICAgICAgICBuZXdUID0gX2FkZFBhcmFtZXRlcihcbiAgICAgICAgICAgICAgICAgIG5ld1QsXG4gICAgICAgICAgICAgICAgICBQYXJhbWV0ZXIocGFyYW1OYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIFR5cGU6ICdTdHJpbmcnXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VCA9IF9hZGRSZXNvdXJjZShfdCwgZik7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5PdXRwdXQpIHtcbiAgICAgICAgICAgICAgbmV3VCA9IF9hZGRPdXRwdXQoXG4gICAgICAgICAgICAgICAgbmV3VCxcbiAgICAgICAgICAgICAgICBPdXRwdXQoYCR7Zi5OYW1lfSR7c2hvcnROYW1lfU91dHB1dGAsIHtcbiAgICAgICAgICAgICAgICAgIFZhbHVlOiBSZWYoZi5OYW1lKSxcbiAgICAgICAgICAgICAgICAgIEV4cG9ydDoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBGblN1YihcbiAgICAgICAgICAgICAgICAgICAgICBgXFwkXFx7JHtQc2V1ZG8uQVdTX1NUQUNLX05BTUV9XFx9LSR7bmFtZVNwbGl0WzBdfS0ke25hbWVTcGxpdFsxXX0tJHtmLk5hbWV9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VCA9IF9hZGRSZXNvdXJjZShfdCwgZik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdUO1xuICAgICAgICBjYXNlICdEZXNjcmlwdGlvbic6XG4gICAgICAgICAgcmV0dXJuIF9hZGREZXNjcmlwdGlvbihfdCwgZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoZSl9IGlzIG5vdCBhIHZhbGlkIHR5cGUsIGNvdWxkIG5vdCBiZSBhZGRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmaW5pc2hlZCBDbG91ZEZvcm1hdGlvbiB0ZW1wbGF0ZSBvYmplY3QuIFRoaXMgY2FuIHRoZW4gYmUgY29udmVydGVkIGludG8gSlNPTiBvciBZQU1MLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgdCA9IFRlbXBsYXRlKCk7XG4gICAgICogSlNPTi5zdHJpbmdpZnkodC5idWlsZCgpLCBudWxsLCAyKVxuICAgICAqL1xuICAgIGJ1aWxkOiBmdW5jdGlvbigpOiBtaXhlZCB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7XG4gICAgICAgIEFXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogJzIwMTAtMDktMDknLFxuICAgICAgICBSZXNvdXJjZXM6IHt9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuQ29uZGl0aW9ucykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuQ29uZGl0aW9ucyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLkNvbmRpdGlvbnMpLm1hcChjID0+IHtcbiAgICAgICAgICByZXN1bHQuQ29uZGl0aW9uc1tjXSA9IF9qc29uKHRoaXMuQ29uZGl0aW9uc1tjXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUGFyYW1ldGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuUGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLlBhcmFtZXRlcnMpLm1hcChwID0+IHtcbiAgICAgICAgICByZXN1bHQuUGFyYW1ldGVyc1twXSA9IF9qc29uKHRoaXMuUGFyYW1ldGVyc1twXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuTWFwcGluZ3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0Lk1hcHBpbmdzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuTWFwcGluZ3MpLm1hcChtID0+IHtcbiAgICAgICAgICByZXN1bHQuTWFwcGluZ3NbbV0gPSBfanNvbih0aGlzLk1hcHBpbmdzW21dKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5PdXRwdXRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5PdXRwdXRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuT3V0cHV0cykubWFwKG8gPT4ge1xuICAgICAgICAgIHJlc3VsdC5PdXRwdXRzW29dID0gX2pzb24odGhpcy5PdXRwdXRzW29dKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5SZXNvdXJjZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LlJlc291cmNlcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLlJlc291cmNlcykubWFwKHIgPT4ge1xuICAgICAgICAgIHJlc3VsdC5SZXNvdXJjZXNbcl0gPSBfanNvbih0aGlzLlJlc291cmNlc1tyXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuRGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmVzdWx0LkRlc2NyaXB0aW9uID0gdGhpcy5EZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBraW5kOiAnVGVtcGxhdGUnLFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIFBhcmFtZXRlciwgRGVzY3JpcHRpb24sIE91dHB1dCwgUmVzb3VyY2UsIENvbmRpdGlvbiwgb3IgTWFwcGluZyBmcm9tIHRoZSB0ZW1wbGF0ZS4gUmV0dXJucyBhIG5ldyBUZW1wbGF0ZSB3aXRoIHRoZSBlbGVtZW50IHJlbW92ZWQuIERvZXMgbm90IG11dGF0ZSB0aGUgb3JpZ2luYWwgVGVtcGxhdGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbGV0IHQgPSBUZW1wbGF0ZSgpO1xuICAgICAqIGxldCBwID0gUGFyYW1ldGVyKCdOZXdQYXJhbScsIHsgVHlwZTogJ1N0cmluZycgfSk7XG4gICAgICogdC5hZGQocCkucmVtb3ZlKHApO1xuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZTogSUVsZW1lbnQgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICAgICAgbGV0IHJlc3VsdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgbGV0IGVsZW1lbnQ6IElFbGVtZW50O1xuICAgICAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgcGFyYW1ldGVyOiBJUGFyYW1ldGVyIHwgdm9pZCA9IHJlc3VsdC5QYXJhbWV0ZXJzW2VdO1xuICAgICAgICBpZiAocGFyYW1ldGVyKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHBhcmFtZXRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgb3V0cHV0OiBJT3V0cHV0IHwgdm9pZCA9IHJlc3VsdC5PdXRwdXRzW2VdO1xuICAgICAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvdXRwdXQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtYXBwaW5nOiBJTWFwcGluZyB8IHZvaWQgPSByZXN1bHQuTWFwcGluZ3NbZV07XG4gICAgICAgICAgICBpZiAobWFwcGluZykge1xuICAgICAgICAgICAgICBlbGVtZW50ID0gbWFwcGluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBlO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChlbGVtZW50LmtpbmQpIHtcbiAgICAgICAgLypjYXNlICdDb25kaXRpb24nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlbW92ZUNvbmRpdGlvbih0aGlzLCBlKTsqL1xuICAgICAgICBjYXNlICdQYXJhbWV0ZXInOlxuICAgICAgICAgIHJldHVybiBfcmVtb3ZlUGFyYW1ldGVyKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgICAgIHJldHVybiBfcmVtb3ZlT3V0cHV0KHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICAvKmNhc2UgJ1Jlc291cmNlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZW1vdmVSZXNvdXJjZSh0aGlzLCBlKTsqL1xuICAgICAgICBjYXNlICdNYXBwaW5nJzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZU1hcHBpbmcodGhpcywgZWxlbWVudCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoZSl9IGlzIG5vdCBhIHZhbGlkIHR5cGUsIGNvdWxkIG5vdCBiZSBhZGRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIERlc2NyaXB0aW9uIGZyb20gdGhlIFRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlbW92ZURlc2NyaXB0aW9uOiBmdW5jdGlvbigpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgeyBEZXNjcmlwdGlvbiwgLi4ucmVtYWluaW5nIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhbm90aGVyIFRlbXBsYXRlIG9iamVjdCBpbnRvIGFub3RoZXIuIFRoZSBvcmlnaW5hbCBUZW1wbGF0ZSBvYmplY3RzIGFyZSBub3QgbXV0YXRlZC4gUmV0dXJucyBhIG5ldyBUZW1wbGF0ZSBvYmplY3QgdGhhdCBpcyB0aGUgcHJvZHVjdCBvZiB0aGUgdHdvIG9yaWdpbmFsIFRlbXBsYXRlIG9iamVjdHMuXG4gICAgICovXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHQ6IElUZW1wbGF0ZSk6IElUZW1wbGF0ZSB7XG4gICAgICBjb25zdCBfdCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgICAgY29uc3QgY29tYmluZWQgPSB7fTtcbiAgICAgIFtcbiAgICAgICAgJ0NvbmRpdGlvbnMnLFxuICAgICAgICAnTWFwcGluZycsXG4gICAgICAgICdPdXRwdXRzJyxcbiAgICAgICAgJ1BhcmFtZXRlcnMnLFxuICAgICAgICAnUmVzb3VyY2VzJyxcbiAgICAgICAgJ0Rlc2NyaXB0aW9uJ1xuICAgICAgXS5tYXAoYmxvY2sgPT4ge1xuICAgICAgICBpZiAodFtibG9ja10pIHtcbiAgICAgICAgICBjb21iaW5lZFtibG9ja10gPSB7IC4uLl90W2Jsb2NrXSwgLi4udFtibG9ja10gfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5fdCxcbiAgICAgICAgLi4uY29tYmluZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBJbXBvcnQgYW4gZXhpc3RpbmcgQ2xvdWRGb3JtYXRpb24gSlNPTiB0ZW1wbGF0ZSBhbmQgY29udmVydCBpdCBpbnRvIGEgV29sa2Vua3JhdHplciBUZW1wbGF0ZSBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBjb25zdCB0ZW1wbGF0ZUpzb24gPSByZXF1aXJlKCd0ZW1wbGF0ZS5qc29uJyk7XG4gICAgICogY29uc3QgdCA9IFRlbXBsYXRlKCkuaW1wb3J0KHRlbXBsYXRlSnNvbik7XG4gICAgICovXG4gICAgaW1wb3J0OiBmdW5jdGlvbihpbnB1dFRlbXBsYXRlOiBtaXhlZCk6IElUZW1wbGF0ZSB7XG4gICAgICBsZXQgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIHJldHVybiBfY2FsY0Zyb21FeGlzdGluZ1RlbXBsYXRlKF90LCBpbnB1dFRlbXBsYXRlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVJlZih0OiBJVGVtcGxhdGUsIHJlZjogSVJlZik6IHZvaWQgfCBTeW50YXhFcnJvciB7XG4gIGlmIChyZWYuUmVmKSB7XG4gICAgaWYgKCEodC5QYXJhbWV0ZXJzW3JlZi5SZWZdIHx8IHQuUmVzb3VyY2VzW3JlZi5SZWZdKSkge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KHJlZil9YCk7XG4gICAgfVxuICB9XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gX3ZhbGlkYXRlRm5HZXRBdHQodDogSVRlbXBsYXRlLCBhdHQ6IElGbkdldEF0dCk6IHZvaWQgfCBTeW50YXhFcnJvciB7XG4gIGlmIChhdHQuRm5HZXRBdHQgJiYgIXQuUmVzb3VyY2VzW2F0dC5GbkdldEF0dFswXV0pIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoYXR0KX1gKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIF9zdHJpcCh0OiBJUGFyYW1ldGVyIHwgSU91dHB1dCB8IElSZXNvdXJjZSB8IElDb25kaXRpb24pOiBhbnkge1xuICBsZXQgeyBraW5kLCBOYW1lLCAuLi5yZXN0IH0gPSB0O1xuICByZXR1cm4gcmVzdDtcbn1cblxuZnVuY3Rpb24gX3N0cmlwS2luZCh0YXJnZXQ6IGFueSk6IG1peGVkIHtcbiAgbGV0IHsga2luZCwgLi4ucmVzdCB9ID0gdGFyZ2V0O1xuICByZXR1cm4gcmVzdDtcbn1cblxuZnVuY3Rpb24gX2NsZWFuT2JqZWN0KG9iamVjdDogYW55KTogbWl4ZWQge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgZm9yIChsZXQgdiA9IDA7IHYgPCBvYmplY3QubGVuZ3RoOyB2KyspIHtcbiAgICAgIG9iamVjdFt2XSA9IF9jbGVhbk9iamVjdChvYmplY3Rbdl0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAob2JqZWN0LmtpbmQpIHtcbiAgICAgIG9iamVjdCA9IF9qc29uKG9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IG8gaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3Rbb10gIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdFtvXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBvYmplY3Rbb10gPSBfY2xlYW5PYmplY3Qob2JqZWN0W29dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRSZXNvdXJjZSh0OiBJUmVzb3VyY2UpOiBtaXhlZCB7XG4gIGxldCB7IFR5cGUsIFByb3BlcnRpZXMsIENyZWF0aW9uUG9saWN5LCBNZXRhZGF0YSB9ID0gdDtcbiAgbGV0IG5ld1Byb3BzOiBtaXhlZCA9IHt9O1xuICBpZiAoUHJvcGVydGllcykge1xuICAgIE9iamVjdC5rZXlzKFByb3BlcnRpZXMpLm1hcChwID0+IHtcbiAgICAgIGlmIChQcm9wZXJ0aWVzW3BdLmtpbmQpIHtcbiAgICAgICAgbmV3UHJvcHNbcF0gPSBfanNvbihQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2NsZWFuT2JqZWN0KFByb3BlcnRpZXNbcF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCByZXN1bHQgPSB7IFR5cGUsIFByb3BlcnRpZXM6IG5ld1Byb3BzIH07XG4gIGlmIChDcmVhdGlvblBvbGljeSkge1xuICAgIHJlc3VsdC5DcmVhdGlvblBvbGljeSA9IF9qc29uKENyZWF0aW9uUG9saWN5KTtcbiAgfVxuICBpZiAoTWV0YWRhdGEpIHtcbiAgICByZXN1bHQuTWV0YWRhdGEgPSBfanNvbihNZXRhZGF0YSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkQ29uZGl0aW9uKHQ6IElDb25kaXRpb24pOiBzdHJpbmcge1xuICBsZXQgeyBDb25kaXRpb24gfSA9IHQ7XG4gIGxldCByZXN1bHQgPSBfanNvbihDb25kaXRpb24pO1xuICBPYmplY3Qua2V5cyhyZXN1bHQpLm1hcChrID0+IHtcbiAgICByZXN1bHRba11bMF0gPSBfanNvbihyZXN1bHRba11bMF0pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkQ3JlYXRpb25Qb2xpY3kodDogSUNyZWF0aW9uUG9saWN5KTogbWl4ZWQge1xuICBsZXQgeyBDb250ZW50IH0gPSB0O1xuICByZXR1cm4gQ29udGVudDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSh0OiBJUmVzb3VyY2VNZXRhZGF0YSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZEZuSm9pbih0OiBJRm5Kb2luKTogbWl4ZWQge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0LlZhbHVlcykpIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIHQuVmFsdWVzXSB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7ICdGbjo6Sm9pbic6IFt0LkRlbGltaXRlciwgX2pzb24odC5WYWx1ZXMpXSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF9idWlsZE1hcHBpbmcodDogSU1hcHBpbmcpOiBzdHJpbmcge1xuICBsZXQgcmVzdWx0ID0gdC5Db250ZW50O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRPdXRwdXQodDogSU91dHB1dCk6IHN0cmluZyB7XG4gIGxldCBvdXRwdXRSZXN1bHQ6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHQuUHJvcGVydGllcyk7XG4gIGlmICh0eXBlb2Ygb3V0cHV0UmVzdWx0LlZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5WYWx1ZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIFZhbHVlOiBzdHJpcHBlZCB9O1xuICB9XG4gIGlmIChcbiAgICBvdXRwdXRSZXN1bHQuRXhwb3J0ICYmXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydC5OYW1lICYmXG4gICAgdHlwZW9mIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgbGV0IHN0cmlwcGVkID0gX2pzb24ob3V0cHV0UmVzdWx0LkV4cG9ydC5OYW1lKTtcbiAgICBvdXRwdXRSZXN1bHQgPSB7IC4uLm91dHB1dFJlc3VsdCwgRXhwb3J0OiB7IE5hbWU6IHN0cmlwcGVkIH0gfTtcbiAgfVxuICByZXR1cm4gb3V0cHV0UmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2pzb24oXG4gIHQ6IElFbGVtZW50IHwgSVJlZiB8IElGbkdldEF0dCB8IElGbkpvaW4gfCBGblN1YiB8IElDcmVhdGlvblBvbGljeVxuKTogbWl4ZWQge1xuICBzd2l0Y2ggKHQua2luZCkge1xuICAgIGNhc2UgJ1JlZic6XG4gICAgICByZXR1cm4geyBSZWY6IHQuUmVmIH07XG4gICAgY2FzZSAnRm5HZXRBdHQnOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpHZXRBdHQnOiB0LkZuR2V0QXR0IH07XG4gICAgY2FzZSAnRm5Kb2luJzpcbiAgICAgIHJldHVybiBfYnVpbGRGbkpvaW4odCk7XG4gICAgY2FzZSAnRm5FcXVhbHMnOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpFcXVhbHMnOiB0LkZuRXF1YWxzIH07XG4gICAgY2FzZSAnRm5TdWInOlxuICAgICAgcmV0dXJuIHsgJ0ZuOjpTdWInOiB0LkZuU3ViIH07XG4gICAgY2FzZSAnQ3JlYXRpb25Qb2xpY3knOlxuICAgICAgcmV0dXJuIF9idWlsZENyZWF0aW9uUG9saWN5KHQpO1xuICAgIGNhc2UgJ1Jlc291cmNlTWV0YWRhdGEnOlxuICAgICAgcmV0dXJuIF9idWlsZFJlc291cmNlTWV0YWRhdGEodCk7XG4gICAgY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgIHJldHVybiBfYnVpbGRDb25kaXRpb24odCk7XG4gICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICByZXR1cm4gX2J1aWxkTWFwcGluZyh0KTtcbiAgICBjYXNlICdQYXJhbWV0ZXInOlxuICAgICAgcmV0dXJuIF9zdHJpcCh0KS5Qcm9wZXJ0aWVzO1xuICAgIGNhc2UgJ091dHB1dCc6XG4gICAgICByZXR1cm4gX2J1aWxkT3V0cHV0KHQpO1xuICAgIGNhc2UgJ1Jlc291cmNlJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZSh0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDYW4ndCBjYWxsIF9qc29uIG9uICR7SlNPTi5zdHJpbmdpZnkodCl9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FkZERlc2NyaXB0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSURlc2NyaXB0aW9uKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgZGVzYyA9IHsgRGVzY3JpcHRpb246IGUuQ29udGVudCB9O1xuICByZXN1bHQgPSB7IC4uLnQsIC4uLmRlc2MgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZENyZWF0aW9uUG9saWN5KHQ6IElUZW1wbGF0ZSwgZTogSUNyZWF0aW9uUG9saWN5KTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBpZiAoIXJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0pIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAnQ2Fubm90IGFkZCBDcmVhdGlvblBvbGljeSB0byBhIFJlc291cmNlIHRoYXQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRlbXBsYXRlLidcbiAgICApO1xuICB9XG4gIGxldCByZXNvdXJjZSA9IHsgLi4ucmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSB9O1xuICByZXNvdXJjZS5DcmVhdGlvblBvbGljeSA9IGU7XG4gIHJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gPSByZXNvdXJjZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFJlc291cmNlTWV0YWRhdGEodDogSVRlbXBsYXRlLCBlOiBJUmVzb3VyY2VNZXRhZGF0YSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgTWV0YWRhdGEgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuTWV0YWRhdGEgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDb25kaXRpb24odDogSVRlbXBsYXRlLCBlOiBJQ29uZGl0aW9uKTogSVRlbXBsYXRlIHtcbiAgLy8gVE9ETzogVmFsaWRhdGUgaW50cmluc2ljc1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5Db25kaXRpb25zW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkT3V0cHV0KHQ6IElUZW1wbGF0ZSwgZTogSU91dHB1dCk6IElUZW1wbGF0ZSB7XG4gIGxldCBlMCA9IF8uY2xvbmVEZWVwKGUpO1xuICBpZiAodHlwZW9mIGUwLlByb3BlcnRpZXMuVmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGUwLlByb3BlcnRpZXMuVmFsdWUuUmVmKSB7XG4gICAgICBfdmFsaWRhdGVSZWYodCwgZTAuUHJvcGVydGllcy5WYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHR5cGVvZiBlMC5Qcm9wZXJ0aWVzLlZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZVsnRm46OkdldEF0dCddXG4gICAgKSB7XG4gICAgICBlMC5Qcm9wZXJ0aWVzLlZhbHVlID0gRm5HZXRBdHQoXG4gICAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVswXSxcbiAgICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZVsnRm46OkdldEF0dCddWzFdXG4gICAgICApO1xuICAgICAgX3ZhbGlkYXRlRm5HZXRBdHQodCwgZTAuUHJvcGVydGllcy5WYWx1ZSk7XG4gICAgfVxuICB9XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0Lk91dHB1dHNbZTAuTmFtZV0gPSBlMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFBhcmFtZXRlcih0OiBJVGVtcGxhdGUsIGU6IElQYXJhbWV0ZXIpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5QYXJhbWV0ZXJzW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkTWFwcGluZyh0OiBJVGVtcGxhdGUsIGU6IElNYXBwaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBpZiAocmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0pIHtcbiAgICByZXN1bHQuTWFwcGluZ3NbZS5OYW1lXSA9IHtcbiAgICAgIC4uLmUsXG4gICAgICBDb250ZW50OiB7IC4uLnJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdLkNvbnRlbnQsIC4uLmUuQ29udGVudCB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQuTWFwcGluZ3NbZS5OYW1lXSA9IGU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZFJlc291cmNlKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuUmVzb3VyY2VzW2UuTmFtZV0gPSBlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTWFwcGluZyh0OiBJVGVtcGxhdGUsIGU6IElNYXBwaW5nIHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgbWFwcGluZzogSU1hcHBpbmc7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0Lk1hcHBpbmdzW2VdKSB7XG4gICAgICBtYXBwaW5nID0gcmVzdWx0Lk1hcHBpbmdzW2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcHBpbmcgPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuTWFwcGluZ3NbbWFwcGluZy5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuTWFwcGluZ3NbbWFwcGluZy5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkobWFwcGluZyl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZU91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGxldCBvdXQ6IElPdXRwdXQ7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0Lk91dHB1dHNbZV0pIHtcbiAgICAgIG91dCA9IHJlc3VsdC5PdXRwdXRzW2VdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG91dCA9IGU7XG4gIH1cbiAgaWYgKHJlc3VsdC5PdXRwdXRzW291dC5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuT3V0cHV0c1tvdXQuTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KG91dCl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZVBhcmFtZXRlcih0OiBJVGVtcGxhdGUsIGU6IElQYXJhbWV0ZXIgfCBzdHJpbmcpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGxldCBwYXJhbTogSVBhcmFtZXRlcjtcbiAgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChyZXN1bHQuUGFyYW1ldGVyc1tlXSkge1xuICAgICAgcGFyYW0gPSByZXN1bHQuUGFyYW1ldGVyc1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJhbSA9IGU7XG4gIH1cbiAgaWYgKHJlc3VsdC5QYXJhbWV0ZXJzW3BhcmFtLk5hbWVdKSB7XG4gICAgZGVsZXRlIHJlc3VsdC5QYXJhbWV0ZXJzW3BhcmFtLk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShwYXJhbSl9YCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2NhbGNGcm9tRXhpc3RpbmdUZW1wbGF0ZSh0OiBJVGVtcGxhdGUsIGlucHV0VGVtcGxhdGU6IG1peGVkKSB7XG4gIGlmIChpbnB1dFRlbXBsYXRlLkRlc2NyaXB0aW9uKSB7XG4gICAgdCA9IHQuYWRkKERlc2NyaXB0aW9uKGlucHV0VGVtcGxhdGUuRGVzY3JpcHRpb24pKTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICB0ID0gdC5hZGQoUGFyYW1ldGVyKHAsIGlucHV0VGVtcGxhdGUuUGFyYW1ldGVyc1twXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLlJlc291cmNlcykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncicpO1xuICAgICAgY29uc29sZS5sb2coaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0pO1xuICAgICAgbGV0IHNwbGl0ID0gaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uVHlwZS5zcGxpdCgnOjonKTtcbiAgICAgIGxldCBjYXQgPSBzcGxpdFsxXTtcbiAgICAgIGxldCByZXNUeXBlID0gc3BsaXRbMl07XG4gICAgICBpZiAoc3BsaXRbMF0gPT09ICdBV1MnKSB7XG4gICAgICAgIGxldCBzZXJ2aWNlID0gU2VydmljZShjYXQpO1xuICAgICAgICB0ID0gdC5hZGQoc2VydmljZVtyZXNUeXBlXShyLCBpbnB1dFRlbXBsYXRlLlJlc291cmNlc1tyXS5Qcm9wZXJ0aWVzKSk7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0WzBdID09PSAnQ3VzdG9tJykge1xuICAgICAgICB0ID0gdC5hZGQoQ3VzdG9tUmVzb3VyY2UociwgaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uUHJvcGVydGllcykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk91dHB1dHMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdvJyk7XG4gICAgICB0ID0gdC5hZGQoT3V0cHV0KG8sIGlucHV0VGVtcGxhdGUuT3V0cHV0c1tvXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk1hcHBpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykubWFwKG0gPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5nc1ttXSkubWFwKG0wID0+IHtcbiAgICAgICAgdCA9IHQuYWRkKE1hcHBpbmcobSwgbTAsIGlucHV0VGVtcGxhdGUuTWFwcGluZ3NbbV1bbTBdKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICB0ID0gdC5hZGQoQ29uZGl0aW9uKGMsIGlucHV0VGVtcGxhdGUuQ29uZGl0aW9uc1tjXSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0O1xufVxuIl19