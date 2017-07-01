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
        const serviceJson = require(`./stubs/json/${cat}.json`);
        let service = (0, _service.Service)(serviceJson);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIl9qc29uIiwiQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uIiwiQ29uZGl0aW9ucyIsIk1hcHBpbmdzIiwiT3V0cHV0cyIsIlBhcmFtZXRlcnMiLCJSZXNvdXJjZXMiLCJhZGQiLCJlIiwib3B0aW9ucyIsIl90IiwiY2xvbmVEZWVwIiwia2luZCIsIl9hZGRDcmVhdGlvblBvbGljeSIsIl9hZGRSZXNvdXJjZU1ldGFkYXRhIiwiX2FkZENvbmRpdGlvbiIsIl9hZGRNYXBwaW5nIiwiX2FkZFBhcmFtZXRlciIsIl9hZGRPdXRwdXQiLCJuZXdUIiwiZiIsIm5hbWVTcGxpdCIsIlR5cGUiLCJzcGxpdCIsInNwbGljZSIsInNob3J0TmFtZSIsImpvaW4iLCJtYXAiLCJwIiwicGFyYW1OYW1lIiwiTmFtZSIsIlByb3BlcnRpZXMiLCJfYWRkUmVzb3VyY2UiLCJPdXRwdXQiLCJWYWx1ZSIsIkV4cG9ydCIsIkFXU19TVEFDS19OQU1FIiwiX2FkZERlc2NyaXB0aW9uIiwiU3ludGF4RXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYnVpbGQiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYyIsIm0iLCJvIiwiciIsIkRlc2NyaXB0aW9uIiwicmVtb3ZlIiwiZWxlbWVudCIsInBhcmFtZXRlciIsIm91dHB1dCIsIm1hcHBpbmciLCJfcmVtb3ZlUGFyYW1ldGVyIiwiX3JlbW92ZU91dHB1dCIsIl9yZW1vdmVNYXBwaW5nIiwicmVtb3ZlRGVzY3JpcHRpb24iLCJyZW1haW5pbmciLCJtZXJnZSIsInQiLCJjb21iaW5lZCIsImJsb2NrIiwiaW1wb3J0IiwiaW5wdXRUZW1wbGF0ZSIsIl9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUiLCJfdmFsaWRhdGVSZWYiLCJyZWYiLCJSZWYiLCJfdmFsaWRhdGVGbkdldEF0dCIsImF0dCIsIkZuR2V0QXR0IiwiX3N0cmlwIiwicmVzdCIsIl9zdHJpcEtpbmQiLCJ0YXJnZXQiLCJfY2xlYW5PYmplY3QiLCJvYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiX2J1aWxkUmVzb3VyY2UiLCJDcmVhdGlvblBvbGljeSIsIk1ldGFkYXRhIiwibmV3UHJvcHMiLCJfYnVpbGRDb25kaXRpb24iLCJDb25kaXRpb24iLCJrIiwiX2J1aWxkQ3JlYXRpb25Qb2xpY3kiLCJDb250ZW50IiwiX2J1aWxkUmVzb3VyY2VNZXRhZGF0YSIsIl9idWlsZEZuSm9pbiIsIlZhbHVlcyIsIkRlbGltaXRlciIsIl9idWlsZE1hcHBpbmciLCJfYnVpbGRPdXRwdXQiLCJvdXRwdXRSZXN1bHQiLCJhc3NpZ24iLCJzdHJpcHBlZCIsIkZuRXF1YWxzIiwiRm5TdWIiLCJkZXNjIiwiUmVzb3VyY2UiLCJyZXNvdXJjZSIsImUwIiwib3V0IiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiY2F0IiwicmVzVHlwZSIsInNlcnZpY2VKc29uIiwicmVxdWlyZSIsInNlcnZpY2UiLCJtMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FZ0JBLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdVQUMsSyxHQUFBQSxLLENBMVloQixn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Q3dCLEdBQXBDLENBQXdDb0IsS0FBSztBQUMzQ0osYUFBT0MsSUFBUCxDQUFZc0IsY0FBYy9ELFFBQWQsQ0FBdUI0QyxDQUF2QixDQUFaLEVBQXVDcEIsR0FBdkMsQ0FBMkN5RixNQUFNO0FBQy9DdEQsWUFBSUEsRUFBRXZELEdBQUYsQ0FBTSxzQkFBUXdDLENBQVIsRUFBV3FFLEVBQVgsRUFBZWxELGNBQWMvRCxRQUFkLENBQXVCNEMsQ0FBdkIsRUFBMEJxRSxFQUExQixDQUFmLENBQU4sQ0FBSjtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0Q7QUFDRCxNQUFJbEQsY0FBY2hFLFVBQWxCLEVBQThCO0FBQzVCeUMsV0FBT0MsSUFBUCxDQUFZc0IsY0FBY2hFLFVBQTFCLEVBQXNDeUIsR0FBdEMsQ0FBMENtQixLQUFLO0FBQzdDZ0IsVUFBSUEsRUFBRXZELEdBQUYsQ0FBTSwwQkFBVXVDLENBQVYsRUFBYW9CLGNBQWNoRSxVQUFkLENBQXlCNEMsQ0FBekIsQ0FBYixDQUFOLENBQUo7QUFDRCxLQUZEO0FBR0Q7QUFDRCxTQUFPZ0IsQ0FBUDtBQUNEIiwiZmlsZSI6InRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBJUGFyYW1ldGVyLCBQYXJhbWV0ZXIgfSBmcm9tICcuL2VsZW1lbnRzL3BhcmFtZXRlcic7XG5pbXBvcnQgeyBJRGVzY3JpcHRpb24sIERlc2NyaXB0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9kZXNjcmlwdGlvbic7XG4vLyBpbXBvcnQgeyBJTWV0YWRhdGEgfSBmcm9tICcuL2VsZW1lbnRzL21ldGFkYXRhJztcbmltcG9ydCB7IElNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmltcG9ydCB7IElDb25kaXRpb24sIENvbmRpdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvY29uZGl0aW9uJztcbmltcG9ydCB7IElSZXNvdXJjZSwgQ3VzdG9tUmVzb3VyY2UgfSBmcm9tICcuL2VsZW1lbnRzL3Jlc291cmNlJztcbmltcG9ydCB7IElPdXRwdXQsIE91dHB1dCB9IGZyb20gJy4vZWxlbWVudHMvb3V0cHV0JztcbmltcG9ydCB0eXBlIHsgSUVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTWFwcGluZyB9IGZyb20gJy4vZWxlbWVudHMvbWFwcGluZyc7XG5pbXBvcnQgeyBJQ3JlYXRpb25Qb2xpY3kgfSBmcm9tICcuL2F0dHJpYnV0ZXMvY3JlYXRpb25wb2xpY3knO1xuaW1wb3J0IHsgSVJlc291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2F0dHJpYnV0ZXMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgUmVmLCBGblN1YiwgRm5HZXRBdHQgfSBmcm9tICcuL2ludHJpbnNpYyc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmltcG9ydCB7IFBzZXVkbyB9IGZyb20gJy4vcHNldWRvJztcbmltcG9ydCB0eXBlIHtcbiAgSVJlZixcbiAgSUZuR2V0QXR0LFxuICBJRm5Kb2luLFxuICBDb25kaXRpb25hbCxcbiAgSUludHJpbnNpYyxcbiAgSUZuQW5kLFxuICBJRm5FcXVhbHMsXG4gIElGbklmLFxuICBJRm5Ob3QsXG4gIElGbk9yXG59IGZyb20gJy4vaW50cmluc2ljJztcblxuLyoqIEBtb2R1bGUgVGVtcGxhdGUgKi9cblxuLyoqXG4gKiBUZW1wbGF0ZSBJbnRlcmZhY2VcbiAqIEBtZW1iZXIgVGVtcGxhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGUge1xuICAra2luZDogJ1RlbXBsYXRlJyxcbiAgK0FXU1RlbXBsYXRlRm9ybWF0VmVyc2lvbjogc3RyaW5nLFxuICArRGVzY3JpcHRpb24/OiB2b2lkIHwgc3RyaW5nLFxuICArUGFyYW1ldGVyczogeyArW3M6IHN0cmluZ106IElQYXJhbWV0ZXIgfSxcbiAgLy8gK01ldGFkYXRhOiB7ICtbczogc3RyaW5nXTogSU1ldGFkYXRhIH07XG4gICtNYXBwaW5nczogeyArW3M6IHN0cmluZ106IElNYXBwaW5nIH0sXG4gICtDb25kaXRpb25zOiB7ICtbczogc3RyaW5nXTogSUNvbmRpdGlvbiB9LFxuICArUmVzb3VyY2VzOiB7ICtbczogc3RyaW5nXTogSVJlc291cmNlIH0sXG4gICtPdXRwdXRzOiB7ICtbczogc3RyaW5nXTogSU91dHB1dCB9LFxuICArYWRkOiBGdW5jdGlvbixcbiAgK3JlbW92ZTogRnVuY3Rpb24sXG4gICtyZW1vdmVEZXNjcmlwdGlvbjogRnVuY3Rpb24sXG4gICtidWlsZDogRnVuY3Rpb24sXG4gICttZXJnZTogRnVuY3Rpb24sXG4gICtpbXBvcnQ6IEZ1bmN0aW9uXG59XG5cbi8qKlxuICogSUFkZE9wdGlvbnMgSW50ZXJmYWNlXG4gKiBAbWVtYmVyIFRlbXBsYXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZE9wdGlvbnMge1xuICBPdXRwdXQ6IGJvb2xlYW4sXG4gIFBhcmFtZXRlcnM6IEFycmF5PHN0cmluZz5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IFRlbXBsYXRlIG9iamVjdC5cbiAqIEBtZW1iZXIgVGVtcGxhdGVcbiAqIEByZXR1cm5zIElUZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gVGVtcGxhdGUoKTogSVRlbXBsYXRlIHtcbiAgcmV0dXJuIHtcbiAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICBDb25kaXRpb25zOiB7fSxcbiAgICBNYXBwaW5nczoge30sXG4gICAgT3V0cHV0czoge30sXG4gICAgUGFyYW1ldGVyczoge30sXG4gICAgUmVzb3VyY2VzOiB7fSxcbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgUGFyYW1ldGVyLCBEZXNjcmlwdGlvbiwgT3V0cHV0LCBSZXNvdXJjZSwgQ29uZGl0aW9uLCBvciBNYXBwaW5nIHRvIHRoZSB0ZW1wbGF0ZS4gUmV0dXJucyBhIG5ldyBUZW1wbGF0ZSB3aXRoIHRoZSBlbGVtZW50IGFkZGVkLiBEb2VzIG5vdCBtdXRhdGUgdGhlIG9yaWdpbmFsIFRlbXBsYXRlIG9iamVjdC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IHQgPSBUZW1wbGF0ZSgpLmFkZChTMy5CdWNrZXQoJ0J1Y2tldCcpLCB7IE91dHB1dDogdHJ1ZSB9KTtcbiAgICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uKGU6IElFbGVtZW50LCBvcHRpb25zPzogSUFkZE9wdGlvbnMpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIHN3aXRjaCAoZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgICAgICByZXR1cm4gX2FkZENyZWF0aW9uUG9saWN5KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2VNZXRhZGF0YSc6XG4gICAgICAgICAgcmV0dXJuIF9hZGRSZXNvdXJjZU1ldGFkYXRhKF90LCBlKTtcbiAgICAgICAgY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICByZXR1cm4gX2FkZENvbmRpdGlvbihfdCwgZSk7XG4gICAgICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgICAgIHJldHVybiBfYWRkTWFwcGluZyhfdCwgZSk7XG4gICAgICAgIGNhc2UgJ1BhcmFtZXRlcic6XG4gICAgICAgICAgcmV0dXJuIF9hZGRQYXJhbWV0ZXIoX3QsIGUpO1xuICAgICAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgICAgIHJldHVybiBfYWRkT3V0cHV0KF90LCBlKTtcbiAgICAgICAgY2FzZSAnUmVzb3VyY2UnOlxuICAgICAgICAgIGxldCBuZXdUID0gX3Q7XG4gICAgICAgICAgbGV0IGYgPSBfLmNsb25lRGVlcChlKTtcbiAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbmFtZVNwbGl0ID0gZi5UeXBlLnNwbGl0KCc6OicpLnNwbGljZSgxKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0TmFtZSA9IG5hbWVTcGxpdC5qb2luKCcnKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLlBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5QYXJhbWV0ZXJzLm1hcChwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBgJHtmLk5hbWV9JHtzaG9ydE5hbWV9UGFyYW1gO1xuICAgICAgICAgICAgICAgIGlmICghZi5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICBmLlByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZi5Qcm9wZXJ0aWVzW3BdID0gUmVmKHBhcmFtTmFtZSk7XG4gICAgICAgICAgICAgICAgbmV3VCA9IF9hZGRQYXJhbWV0ZXIoXG4gICAgICAgICAgICAgICAgICBuZXdULFxuICAgICAgICAgICAgICAgICAgUGFyYW1ldGVyKHBhcmFtTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBUeXBlOiAnU3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1QgPSBfYWRkUmVzb3VyY2UoX3QsIGYpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuT3V0cHV0KSB7XG4gICAgICAgICAgICAgIG5ld1QgPSBfYWRkT3V0cHV0KFxuICAgICAgICAgICAgICAgIG5ld1QsXG4gICAgICAgICAgICAgICAgT3V0cHV0KGAke2YuTmFtZX0ke3Nob3J0TmFtZX1PdXRwdXRgLCB7XG4gICAgICAgICAgICAgICAgICBWYWx1ZTogUmVmKGYuTmFtZSksXG4gICAgICAgICAgICAgICAgICBFeHBvcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogRm5TdWIoXG4gICAgICAgICAgICAgICAgICAgICAgYFxcJFxceyR7UHNldWRvLkFXU19TVEFDS19OQU1FfVxcfS0ke25hbWVTcGxpdFswXX0tJHtuYW1lU3BsaXRbMV19LSR7Zi5OYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1QgPSBfYWRkUmVzb3VyY2UoX3QsIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3VDtcbiAgICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxuICAgICAgICAgIHJldHVybiBfYWRkRGVzY3JpcHRpb24oX3QsIGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmluaXNoZWQgQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGUgb2JqZWN0LiBUaGlzIGNhbiB0aGVuIGJlIGNvbnZlcnRlZCBpbnRvIEpTT04gb3IgWUFNTC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IHQgPSBUZW1wbGF0ZSgpO1xuICAgICAqIEpTT04uc3RyaW5naWZ5KHQuYnVpbGQoKSwgbnVsbCwgMilcbiAgICAgKi9cbiAgICBidWlsZDogZnVuY3Rpb24oKTogbWl4ZWQge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge1xuICAgICAgICBBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb246ICcyMDEwLTA5LTA5JyxcbiAgICAgICAgUmVzb3VyY2VzOiB7fVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLkNvbmRpdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICAgICAgcmVzdWx0LkNvbmRpdGlvbnNbY10gPSBfanNvbih0aGlzLkNvbmRpdGlvbnNbY10pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLlBhcmFtZXRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5QYXJhbWV0ZXJzKS5tYXAocCA9PiB7XG4gICAgICAgICAgcmVzdWx0LlBhcmFtZXRlcnNbcF0gPSBfanNvbih0aGlzLlBhcmFtZXRlcnNbcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5NYXBwaW5ncyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk1hcHBpbmdzKS5tYXAobSA9PiB7XG4gICAgICAgICAgcmVzdWx0Lk1hcHBpbmdzW21dID0gX2pzb24odGhpcy5NYXBwaW5nc1ttXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuT3V0cHV0cykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHQuT3V0cHV0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgICAgICByZXN1bHQuT3V0cHV0c1tvXSA9IF9qc29uKHRoaXMuT3V0cHV0c1tvXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuUmVzb3VyY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5SZXNvdXJjZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5SZXNvdXJjZXMpLm1hcChyID0+IHtcbiAgICAgICAgICByZXN1bHQuUmVzb3VyY2VzW3JdID0gX2pzb24odGhpcy5SZXNvdXJjZXNbcl0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLkRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5EZXNjcmlwdGlvbiA9IHRoaXMuRGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAga2luZDogJ1RlbXBsYXRlJyxcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBQYXJhbWV0ZXIsIERlc2NyaXB0aW9uLCBPdXRwdXQsIFJlc291cmNlLCBDb25kaXRpb24sIG9yIE1hcHBpbmcgZnJvbSB0aGUgdGVtcGxhdGUuIFJldHVybnMgYSBuZXcgVGVtcGxhdGUgd2l0aCB0aGUgZWxlbWVudCByZW1vdmVkLiBEb2VzIG5vdCBtdXRhdGUgdGhlIG9yaWdpbmFsIFRlbXBsYXRlIG9iamVjdC5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGxldCB0ID0gVGVtcGxhdGUoKTtcbiAgICAgKiBsZXQgcCA9IFBhcmFtZXRlcignTmV3UGFyYW0nLCB7IFR5cGU6ICdTdHJpbmcnIH0pO1xuICAgICAqIHQuYWRkKHApLnJlbW92ZShwKTtcbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKGU6IElFbGVtZW50IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgICAgIGxldCByZXN1bHQgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIGxldCBlbGVtZW50OiBJRWxlbWVudDtcbiAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcjogSVBhcmFtZXRlciB8IHZvaWQgPSByZXN1bHQuUGFyYW1ldGVyc1tlXTtcbiAgICAgICAgaWYgKHBhcmFtZXRlcikge1xuICAgICAgICAgIGVsZW1lbnQgPSBwYXJhbWV0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG91dHB1dDogSU91dHB1dCB8IHZvaWQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gb3V0cHV0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWFwcGluZzogSU1hcHBpbmcgfCB2b2lkID0gcmVzdWx0Lk1hcHBpbmdzW2VdO1xuICAgICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgZWxlbWVudCA9IG1hcHBpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50ID0gZTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZWxlbWVudC5raW5kKSB7XG4gICAgICAgIC8qY2FzZSAnQ29uZGl0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZW1vdmVDb25kaXRpb24odGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZVBhcmFtZXRlcih0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgY2FzZSAnT3V0cHV0JzpcbiAgICAgICAgICByZXR1cm4gX3JlbW92ZU91dHB1dCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgLypjYXNlICdSZXNvdXJjZSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVtb3ZlUmVzb3VyY2UodGhpcywgZSk7Ki9cbiAgICAgICAgY2FzZSAnTWFwcGluZyc6XG4gICAgICAgICAgcmV0dXJuIF9yZW1vdmVNYXBwaW5nKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGUpfSBpcyBub3QgYSB2YWxpZCB0eXBlLCBjb3VsZCBub3QgYmUgYWRkZWQuYFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBEZXNjcmlwdGlvbiBmcm9tIHRoZSBUZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZW1vdmVEZXNjcmlwdGlvbjogZnVuY3Rpb24oKTogSVRlbXBsYXRlIHtcbiAgICAgIGNvbnN0IHsgRGVzY3JpcHRpb24sIC4uLnJlbWFpbmluZyB9ID0gdGhpcztcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgYW5vdGhlciBUZW1wbGF0ZSBvYmplY3QgaW50byBhbm90aGVyLiBUaGUgb3JpZ2luYWwgVGVtcGxhdGUgb2JqZWN0cyBhcmUgbm90IG11dGF0ZWQuIFJldHVybnMgYSBuZXcgVGVtcGxhdGUgb2JqZWN0IHRoYXQgaXMgdGhlIHByb2R1Y3Qgb2YgdGhlIHR3byBvcmlnaW5hbCBUZW1wbGF0ZSBvYmplY3RzLlxuICAgICAqL1xuICAgIG1lcmdlOiBmdW5jdGlvbih0OiBJVGVtcGxhdGUpOiBJVGVtcGxhdGUge1xuICAgICAgY29uc3QgX3QgPSBfLmNsb25lRGVlcCh0aGlzKTtcbiAgICAgIGNvbnN0IGNvbWJpbmVkID0ge307XG4gICAgICBbXG4gICAgICAgICdDb25kaXRpb25zJyxcbiAgICAgICAgJ01hcHBpbmcnLFxuICAgICAgICAnT3V0cHV0cycsXG4gICAgICAgICdQYXJhbWV0ZXJzJyxcbiAgICAgICAgJ1Jlc291cmNlcycsXG4gICAgICAgICdEZXNjcmlwdGlvbidcbiAgICAgIF0ubWFwKGJsb2NrID0+IHtcbiAgICAgICAgaWYgKHRbYmxvY2tdKSB7XG4gICAgICAgICAgY29tYmluZWRbYmxvY2tdID0geyAuLi5fdFtibG9ja10sIC4uLnRbYmxvY2tdIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uX3QsXG4gICAgICAgIC4uLmNvbWJpbmVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW1wb3J0IGFuIGV4aXN0aW5nIENsb3VkRm9ybWF0aW9uIEpTT04gdGVtcGxhdGUgYW5kIGNvbnZlcnQgaXQgaW50byBhIFdvbGtlbmtyYXR6ZXIgVGVtcGxhdGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgdGVtcGxhdGVKc29uID0gcmVxdWlyZSgndGVtcGxhdGUuanNvbicpO1xuICAgICAqIGNvbnN0IHQgPSBUZW1wbGF0ZSgpLmltcG9ydCh0ZW1wbGF0ZUpzb24pO1xuICAgICAqL1xuICAgIGltcG9ydDogZnVuY3Rpb24oaW5wdXRUZW1wbGF0ZTogbWl4ZWQpOiBJVGVtcGxhdGUge1xuICAgICAgbGV0IF90ID0gXy5jbG9uZURlZXAodGhpcyk7XG4gICAgICByZXR1cm4gX2NhbGNGcm9tRXhpc3RpbmdUZW1wbGF0ZShfdCwgaW5wdXRUZW1wbGF0ZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBfdmFsaWRhdGVSZWYodDogSVRlbXBsYXRlLCByZWY6IElSZWYpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAocmVmLlJlZikge1xuICAgIGlmICghKHQuUGFyYW1ldGVyc1tyZWYuUmVmXSB8fCB0LlJlc291cmNlc1tyZWYuUmVmXSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShyZWYpfWApO1xuICAgIH1cbiAgfVxuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZUZuR2V0QXR0KHQ6IElUZW1wbGF0ZSwgYXR0OiBJRm5HZXRBdHQpOiB2b2lkIHwgU3ludGF4RXJyb3Ige1xuICBpZiAoYXR0LkZuR2V0QXR0ICYmICF0LlJlc291cmNlc1thdHQuRm5HZXRBdHRbMF1dKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGF0dCl9YCk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBfc3RyaXAodDogSVBhcmFtZXRlciB8IElPdXRwdXQgfCBJUmVzb3VyY2UgfCBJQ29uZGl0aW9uKTogYW55IHtcbiAgbGV0IHsga2luZCwgTmFtZSwgLi4ucmVzdCB9ID0gdDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9zdHJpcEtpbmQodGFyZ2V0OiBhbnkpOiBtaXhlZCB7XG4gIGxldCB7IGtpbmQsIC4uLnJlc3QgfSA9IHRhcmdldDtcbiAgcmV0dXJuIHJlc3Q7XG59XG5cbmZ1bmN0aW9uIF9jbGVhbk9iamVjdChvYmplY3Q6IGFueSk6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgb2JqZWN0Lmxlbmd0aDsgdisrKSB7XG4gICAgICBvYmplY3Rbdl0gPSBfY2xlYW5PYmplY3Qob2JqZWN0W3ZdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdC5raW5kKSB7XG4gICAgICBvYmplY3QgPSBfanNvbihvYmplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBvIGluIG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0W29dICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3Rbb10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb2JqZWN0W29dID0gX2NsZWFuT2JqZWN0KG9iamVjdFtvXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkUmVzb3VyY2UodDogSVJlc291cmNlKTogbWl4ZWQge1xuICBsZXQgeyBUeXBlLCBQcm9wZXJ0aWVzLCBDcmVhdGlvblBvbGljeSwgTWV0YWRhdGEgfSA9IHQ7XG4gIGxldCBuZXdQcm9wczogbWl4ZWQgPSB7fTtcbiAgaWYgKFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3Qua2V5cyhQcm9wZXJ0aWVzKS5tYXAocCA9PiB7XG4gICAgICBpZiAoUHJvcGVydGllc1twXS5raW5kKSB7XG4gICAgICAgIG5ld1Byb3BzW3BdID0gX2pzb24oUHJvcGVydGllc1twXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQcm9wc1twXSA9IF9jbGVhbk9iamVjdChQcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXQgcmVzdWx0ID0geyBUeXBlLCBQcm9wZXJ0aWVzOiBuZXdQcm9wcyB9O1xuICBpZiAoQ3JlYXRpb25Qb2xpY3kpIHtcbiAgICByZXN1bHQuQ3JlYXRpb25Qb2xpY3kgPSBfanNvbihDcmVhdGlvblBvbGljeSk7XG4gIH1cbiAgaWYgKE1ldGFkYXRhKSB7XG4gICAgcmVzdWx0Lk1ldGFkYXRhID0gX2pzb24oTWV0YWRhdGEpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENvbmRpdGlvbih0OiBJQ29uZGl0aW9uKTogc3RyaW5nIHtcbiAgbGV0IHsgQ29uZGl0aW9uIH0gPSB0O1xuICBsZXQgcmVzdWx0ID0gX2pzb24oQ29uZGl0aW9uKTtcbiAgT2JqZWN0LmtleXMocmVzdWx0KS5tYXAoayA9PiB7XG4gICAgcmVzdWx0W2tdWzBdID0gX2pzb24ocmVzdWx0W2tdWzBdKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZENyZWF0aW9uUG9saWN5KHQ6IElDcmVhdGlvblBvbGljeSk6IG1peGVkIHtcbiAgbGV0IHsgQ29udGVudCB9ID0gdDtcbiAgcmV0dXJuIENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIF9idWlsZFJlc291cmNlTWV0YWRhdGEodDogSVJlc291cmNlTWV0YWRhdGEpOiBtaXhlZCB7XG4gIGxldCB7IENvbnRlbnQgfSA9IHQ7XG4gIHJldHVybiBDb250ZW50O1xufVxuXG5mdW5jdGlvbiBfYnVpbGRGbkpvaW4odDogSUZuSm9pbik6IG1peGVkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodC5WYWx1ZXMpKSB7XG4gICAgcmV0dXJuIHsgJ0ZuOjpKb2luJzogW3QuRGVsaW1pdGVyLCB0LlZhbHVlc10gfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyAnRm46OkpvaW4nOiBbdC5EZWxpbWl0ZXIsIF9qc29uKHQuVmFsdWVzKV0gfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYnVpbGRNYXBwaW5nKHQ6IElNYXBwaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IHQuQ29udGVudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2J1aWxkT3V0cHV0KHQ6IElPdXRwdXQpOiBzdHJpbmcge1xuICBsZXQgb3V0cHV0UmVzdWx0OiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCB0LlByb3BlcnRpZXMpO1xuICBpZiAodHlwZW9mIG91dHB1dFJlc3VsdC5WYWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICBsZXQgc3RyaXBwZWQgPSBfanNvbihvdXRwdXRSZXN1bHQuVmFsdWUpO1xuICAgIG91dHB1dFJlc3VsdCA9IHsgLi4ub3V0cHV0UmVzdWx0LCBWYWx1ZTogc3RyaXBwZWQgfTtcbiAgfVxuICBpZiAoXG4gICAgb3V0cHV0UmVzdWx0LkV4cG9ydCAmJlxuICAgIG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSAmJlxuICAgIHR5cGVvZiBvdXRwdXRSZXN1bHQuRXhwb3J0Lk5hbWUgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIGxldCBzdHJpcHBlZCA9IF9qc29uKG91dHB1dFJlc3VsdC5FeHBvcnQuTmFtZSk7XG4gICAgb3V0cHV0UmVzdWx0ID0geyAuLi5vdXRwdXRSZXN1bHQsIEV4cG9ydDogeyBOYW1lOiBzdHJpcHBlZCB9IH07XG4gIH1cbiAgcmV0dXJuIG91dHB1dFJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9qc29uKFxuICB0OiBJRWxlbWVudCB8IElSZWYgfCBJRm5HZXRBdHQgfCBJRm5Kb2luIHwgRm5TdWIgfCBJQ3JlYXRpb25Qb2xpY3lcbik6IG1peGVkIHtcbiAgc3dpdGNoICh0LmtpbmQpIHtcbiAgICBjYXNlICdSZWYnOlxuICAgICAgcmV0dXJuIHsgUmVmOiB0LlJlZiB9O1xuICAgIGNhc2UgJ0ZuR2V0QXR0JzpcbiAgICAgIHJldHVybiB7ICdGbjo6R2V0QXR0JzogdC5GbkdldEF0dCB9O1xuICAgIGNhc2UgJ0ZuSm9pbic6XG4gICAgICByZXR1cm4gX2J1aWxkRm5Kb2luKHQpO1xuICAgIGNhc2UgJ0ZuRXF1YWxzJzpcbiAgICAgIHJldHVybiB7ICdGbjo6RXF1YWxzJzogdC5GbkVxdWFscyB9O1xuICAgIGNhc2UgJ0ZuU3ViJzpcbiAgICAgIHJldHVybiB7ICdGbjo6U3ViJzogdC5GblN1YiB9O1xuICAgIGNhc2UgJ0NyZWF0aW9uUG9saWN5JzpcbiAgICAgIHJldHVybiBfYnVpbGRDcmVhdGlvblBvbGljeSh0KTtcbiAgICBjYXNlICdSZXNvdXJjZU1ldGFkYXRhJzpcbiAgICAgIHJldHVybiBfYnVpbGRSZXNvdXJjZU1ldGFkYXRhKHQpO1xuICAgIGNhc2UgJ0NvbmRpdGlvbic6XG4gICAgICByZXR1cm4gX2J1aWxkQ29uZGl0aW9uKHQpO1xuICAgIGNhc2UgJ01hcHBpbmcnOlxuICAgICAgcmV0dXJuIF9idWlsZE1hcHBpbmcodCk7XG4gICAgY2FzZSAnUGFyYW1ldGVyJzpcbiAgICAgIHJldHVybiBfc3RyaXAodCkuUHJvcGVydGllcztcbiAgICBjYXNlICdPdXRwdXQnOlxuICAgICAgcmV0dXJuIF9idWlsZE91dHB1dCh0KTtcbiAgICBjYXNlICdSZXNvdXJjZSc6XG4gICAgICByZXR1cm4gX2J1aWxkUmVzb3VyY2UodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ2FuJ3QgY2FsbCBfanNvbiBvbiAke0pTT04uc3RyaW5naWZ5KHQpfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hZGREZXNjcmlwdGlvbih0OiBJVGVtcGxhdGUsIGU6IElEZXNjcmlwdGlvbik6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IGRlc2MgPSB7IERlc2NyaXB0aW9uOiBlLkNvbnRlbnQgfTtcbiAgcmVzdWx0ID0geyAuLi50LCAuLi5kZXNjIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRDcmVhdGlvblBvbGljeSh0OiBJVGVtcGxhdGUsIGU6IElDcmVhdGlvblBvbGljeSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKCFyZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgJ0Nhbm5vdCBhZGQgQ3JlYXRpb25Qb2xpY3kgdG8gYSBSZXNvdXJjZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSB0ZW1wbGF0ZS4nXG4gICAgKTtcbiAgfVxuICBsZXQgcmVzb3VyY2UgPSB7IC4uLnJlc3VsdC5SZXNvdXJjZXNbZS5SZXNvdXJjZV0gfTtcbiAgcmVzb3VyY2UuQ3JlYXRpb25Qb2xpY3kgPSBlO1xuICByZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdID0gcmVzb3VyY2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZU1ldGFkYXRhKHQ6IElUZW1wbGF0ZSwgZTogSVJlc291cmNlTWV0YWRhdGEpOiBJVGVtcGxhdGUge1xuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIGlmICghcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcbiAgICAgICdDYW5ub3QgYWRkIE1ldGFkYXRhIHRvIGEgUmVzb3VyY2UgdGhhdCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdGVtcGxhdGUuJ1xuICAgICk7XG4gIH1cbiAgbGV0IHJlc291cmNlID0geyAuLi5yZXN1bHQuUmVzb3VyY2VzW2UuUmVzb3VyY2VdIH07XG4gIHJlc291cmNlLk1ldGFkYXRhID0gZTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLlJlc291cmNlXSA9IHJlc291cmNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfYWRkQ29uZGl0aW9uKHQ6IElUZW1wbGF0ZSwgZTogSUNvbmRpdGlvbik6IElUZW1wbGF0ZSB7XG4gIC8vIFRPRE86IFZhbGlkYXRlIGludHJpbnNpY3NcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuQ29uZGl0aW9uc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE91dHB1dCh0OiBJVGVtcGxhdGUsIGU6IElPdXRwdXQpOiBJVGVtcGxhdGUge1xuICBsZXQgZTAgPSBfLmNsb25lRGVlcChlKTtcbiAgaWYgKHR5cGVvZiBlMC5Qcm9wZXJ0aWVzLlZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGlmIChlMC5Qcm9wZXJ0aWVzLlZhbHVlLlJlZikge1xuICAgICAgX3ZhbGlkYXRlUmVmKHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgZTAuUHJvcGVydGllcy5WYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVxuICAgICkge1xuICAgICAgZTAuUHJvcGVydGllcy5WYWx1ZSA9IEZuR2V0QXR0KFxuICAgICAgICBlMC5Qcm9wZXJ0aWVzLlZhbHVlWydGbjo6R2V0QXR0J11bMF0sXG4gICAgICAgIGUwLlByb3BlcnRpZXMuVmFsdWVbJ0ZuOjpHZXRBdHQnXVsxXVxuICAgICAgKTtcbiAgICAgIF92YWxpZGF0ZUZuR2V0QXR0KHQsIGUwLlByb3BlcnRpZXMuVmFsdWUpO1xuICAgIH1cbiAgfVxuICBsZXQgcmVzdWx0ID0geyAuLi50IH07XG4gIHJlc3VsdC5PdXRwdXRzW2UwLk5hbWVdID0gZTA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICByZXN1bHQuUGFyYW1ldGVyc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2FkZE1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlLk5hbWVdKSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSB7XG4gICAgICAuLi5lLFxuICAgICAgQ29udGVudDogeyAuLi5yZXN1bHQuTWFwcGluZ3NbZS5OYW1lXS5Db250ZW50LCAuLi5lLkNvbnRlbnQgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0Lk1hcHBpbmdzW2UuTmFtZV0gPSBlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9hZGRSZXNvdXJjZSh0OiBJVGVtcGxhdGUsIGU6IElSZXNvdXJjZSk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgcmVzdWx0LlJlc291cmNlc1tlLk5hbWVdID0gZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZU1hcHBpbmcodDogSVRlbXBsYXRlLCBlOiBJTWFwcGluZyB8IHN0cmluZyk6IElUZW1wbGF0ZSB7XG4gIGxldCByZXN1bHQgPSB7IC4uLnQgfTtcbiAgbGV0IG1hcHBpbmc6IElNYXBwaW5nO1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5NYXBwaW5nc1tlXSkge1xuICAgICAgbWFwcGluZyA9IHJlc3VsdC5NYXBwaW5nc1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXBwaW5nID0gZTtcbiAgfVxuICBpZiAocmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk1hcHBpbmdzW21hcHBpbmcuTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KG1hcHBpbmcpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVPdXRwdXQodDogSVRlbXBsYXRlLCBlOiBJT3V0cHV0IHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgb3V0OiBJT3V0cHV0O1xuICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHJlc3VsdC5PdXRwdXRzW2VdKSB7XG4gICAgICBvdXQgPSByZXN1bHQuT3V0cHV0c1tlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBDb3VsZCBub3QgZmluZCAke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvdXQgPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuT3V0cHV0c1tvdXQuTmFtZV0pIHtcbiAgICBkZWxldGUgcmVzdWx0Lk91dHB1dHNbb3V0Lk5hbWVdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShvdXQpfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVQYXJhbWV0ZXIodDogSVRlbXBsYXRlLCBlOiBJUGFyYW1ldGVyIHwgc3RyaW5nKTogSVRlbXBsYXRlIHtcbiAgbGV0IHJlc3VsdCA9IHsgLi4udCB9O1xuICBsZXQgcGFyYW06IElQYXJhbWV0ZXI7XG4gIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAocmVzdWx0LlBhcmFtZXRlcnNbZV0pIHtcbiAgICAgIHBhcmFtID0gcmVzdWx0LlBhcmFtZXRlcnNbZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgQ291bGQgbm90IGZpbmQgJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyYW0gPSBlO1xuICB9XG4gIGlmIChyZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXSkge1xuICAgIGRlbGV0ZSByZXN1bHQuUGFyYW1ldGVyc1twYXJhbS5OYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYENvdWxkIG5vdCBmaW5kICR7SlNPTi5zdHJpbmdpZnkocGFyYW0pfWApO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9jYWxjRnJvbUV4aXN0aW5nVGVtcGxhdGUodDogSVRlbXBsYXRlLCBpbnB1dFRlbXBsYXRlOiBtaXhlZCkge1xuICBpZiAoaW5wdXRUZW1wbGF0ZS5EZXNjcmlwdGlvbikge1xuICAgIHQgPSB0LmFkZChEZXNjcmlwdGlvbihpbnB1dFRlbXBsYXRlLkRlc2NyaXB0aW9uKSk7XG4gIH1cbiAgaWYgKGlucHV0VGVtcGxhdGUuUGFyYW1ldGVycykge1xuICAgIE9iamVjdC5rZXlzKGlucHV0VGVtcGxhdGUuUGFyYW1ldGVycykubWFwKHAgPT4ge1xuICAgICAgdCA9IHQuYWRkKFBhcmFtZXRlcihwLCBpbnB1dFRlbXBsYXRlLlBhcmFtZXRlcnNbcF0pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLlJlc291cmNlcykubWFwKHIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3InKTtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzW3JdKTtcbiAgICAgIGxldCBzcGxpdCA9IGlucHV0VGVtcGxhdGUuUmVzb3VyY2VzW3JdLlR5cGUuc3BsaXQoJzo6Jyk7XG4gICAgICBsZXQgY2F0ID0gc3BsaXRbMV07XG4gICAgICBsZXQgcmVzVHlwZSA9IHNwbGl0WzJdO1xuICAgICAgaWYgKHNwbGl0WzBdID09PSAnQVdTJykge1xuICAgICAgICBjb25zdCBzZXJ2aWNlSnNvbiA9IHJlcXVpcmUoYC4vc3R1YnMvanNvbi8ke2NhdH0uanNvbmApO1xuICAgICAgICBsZXQgc2VydmljZSA9IFNlcnZpY2Uoc2VydmljZUpzb24pO1xuICAgICAgICB0ID0gdC5hZGQoc2VydmljZVtyZXNUeXBlXShyLCBpbnB1dFRlbXBsYXRlLlJlc291cmNlc1tyXS5Qcm9wZXJ0aWVzKSk7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0WzBdID09PSAnQ3VzdG9tJykge1xuICAgICAgICB0ID0gdC5hZGQoQ3VzdG9tUmVzb3VyY2UociwgaW5wdXRUZW1wbGF0ZS5SZXNvdXJjZXNbcl0uUHJvcGVydGllcykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk91dHB1dHMpIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dFRlbXBsYXRlLk91dHB1dHMpLm1hcChvID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdvJyk7XG4gICAgICB0ID0gdC5hZGQoT3V0cHV0KG8sIGlucHV0VGVtcGxhdGUuT3V0cHV0c1tvXSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChpbnB1dFRlbXBsYXRlLk1hcHBpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5ncykubWFwKG0gPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5NYXBwaW5nc1ttXSkubWFwKG0wID0+IHtcbiAgICAgICAgdCA9IHQuYWRkKE1hcHBpbmcobSwgbTAsIGlucHV0VGVtcGxhdGUuTWFwcGluZ3NbbV1bbTBdKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRUZW1wbGF0ZS5Db25kaXRpb25zKS5tYXAoYyA9PiB7XG4gICAgICB0ID0gdC5hZGQoQ29uZGl0aW9uKGMsIGlucHV0VGVtcGxhdGUuQ29uZGl0aW9uc1tjXSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0O1xufVxuIl19