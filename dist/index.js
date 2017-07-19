(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('cfn-doc-json-stubs')) :
	typeof define === 'function' && define.amd ? define(['exports', 'lodash', 'cfn-doc-json-stubs'], factory) :
	(factory((global.wolkenkratzer = {}),global.lodash,global.stubs));
}(this, (function (exports,lodash,stubs) { 'use strict';

var stubs__default = 'default' in stubs ? stubs['default'] : stubs;

//      
/**
 * Create a Parameter object
 * @param {*} name 
 * @param {*} properties 
 */function Parameter(name,properties){if(!name||!properties||!properties.Type){throw new SyntaxError('New Parameter with '+JSON.stringify({name:name,properties:properties})+' parameters is invalid. Name and Type are required.');}return{kind:'Parameter',Name:name,Properties:properties};}

//      
/**
 * Set the Description of a template
 * @param {*} content 
 */function Description(content){if(!content){throw new SyntaxError('New Description must have content.');}return{kind:'Description',Content:content};}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

//      
/**
 * Create a Mapping object
 * @param {*} name 
 * @param {*} subName 
 * @param {*} body 
 */function Mapping(name,subName,body){if(!name||!subName||!body){throw new SyntaxError('New Mapping with '+JSON.stringify({name:name,subName:subName,body:body})+' parameters is invalid. name, subName, and body are required.');}return{kind:'Mapping',Name:name,Content:defineProperty({},subName,body)};}

//      
function CreationPolicy(resource,content){if(!resource||!content||!content.AutoScalingCreationPolicy&&!content.ResourceSignal){throw new SyntaxError('New CreationPolicy must have content, '+JSON.stringify(content)+' is invalid.');}return{kind:'CreationPolicy',Resource:resource,Content:content};}

//      
function Resource(name,properties,options){if(!name){throw new SyntaxError('New Resource is invalid. A Name is required.');}if(properties){_validateProperties(properties,this.name,this.json);}var result={kind:'Resource',Name:name,Type:this.json.Resources[this.name].Name,Properties:properties};if(options&&options.Condition){result.Condition=options.Condition;}return result;}function CustomResource(name,properties){if(!name){throw new SyntaxError('New Resource is invalid. A Name is required.');}return{kind:'Resource',Name:name,Type:'Custom::'+name,Properties:properties};}function _validateProperties(properties,rType,model){//Check if keys other than the defined ones are present
Object.keys(properties).map(function(p){if(!model.Resources[rType].Properties[p]){throw new SyntaxError(p+' is not a valid attribute of '+rType);}});// Check if all of the required keys are present
Object.keys(model.Resources[rType].Properties).map(function(p){if(model.Resources[rType].Properties[p].Required==='Yes'){if(!properties[p]){throw new SyntaxError(p+' is required but is not present in '+rType);}}if(model.Resources[rType].Properties[p].Array){if(properties[p]&&!Array.isArray(properties[p])){if(!properties[p].kind&&properties[p].kind!=='FnGetAtt'&&!properties[p]['Fn::GetAtt']){throw new SyntaxError(p+' must be an array in '+rType);}}}else{if(properties[p]&&Array.isArray(properties[p])){throw new SyntaxError(p+' cannot be an array in '+rType);}}});}

//      
function Ref(target){if(typeof target==='string'){return{kind:'Ref',Ref:target};}else{return{kind:'Ref',Ref:target.Name};}}/**
 * Returns an Fn::GetAtt object that references another element in the template
 * @param {*} target 
 * @param {*} attr 
 */function FnGetAtt(target,attr){if(typeof target==='string'){return{kind:'FnGetAtt',FnGetAtt:[target,attr]};}else{return{kind:'FnGetAtt',FnGetAtt:[target.Name,attr]};}}/**
 * Returns an Fn::Join object
 */function FnJoin(delimiter,values){var newValues=values;if(Array.isArray(values)){newValues=values.map(function(v){return buildIntrinsic(v);});}return{kind:'FnJoin',Delimiter:delimiter,Values:newValues};}/**
 * Returns an Fn::And object
 * @param {*} one 
 * @param {*} two 
 */function FnAnd(one,two){return{kind:'FnAnd',FnAnd:[buildIntrinsic(one),buildIntrinsic(two)]};}/**
 * Returns an Fn::Equals object
 * @param {*} one 
 * @param {*} two 
 */function FnEquals(one,two){return{kind:'FnEquals',FnEquals:[one,two]};}// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
/**
 * Returns an Fn::Sub object
 * @param {*} input 
 */function FnSub(input){return{kind:'FnSub',FnSub:input};}/**
 * Returns an Fn::Base64 object
 * @param {*} input 
 *//**
 * Returns an Fn::FindInMap object
 * @param {*} mapName 
 * @param {*} topLevelKey 
 * @param {*} secondLevelKey 
 */function FnFindInMap(mapName,topLevelKey,secondLevelKey){return{kind:'FnFindInMap',FnFindInMap:[mapName,topLevelKey,secondLevelKey]};}/**
 * Returns an Fn::GetAZs object
 * @param {*} region 
 *//**
 * Returns an Fn::Select object
 * @param {*} index 
 * @param {*} list 
 */function buildIntrinsic(input){if(input['Fn::Equals']){return FnEquals(buildIntrinsic(input['Fn::Equals'][0]),buildIntrinsic(input['Fn::Equals'][1]));}else if(input.Ref){return Ref(input.Ref);}else if(input['Fn::GetAtt']){return FnGetAtt(buildIntrinsic(input['Fn::GetAtt'][0]),buildIntrinsic(input['Fn::GetAtt'][1]));}else{return input;}}

//      
function Condition(name,conditionFn){var newCondFn=lodash.cloneDeep(conditionFn);if((typeof newCondFn==='undefined'?'undefined':_typeof(newCondFn))==='object'&&!newCondFn.kind){newCondFn=buildIntrinsic(newCondFn);}return{kind:'Condition',Name:name,Condition:newCondFn};}

//      
function Output(name,properties){if(!name||!properties||!properties.Value){throw new SyntaxError('New Output with '+JSON.stringify({name:name,properties:properties})+' parameters is invalid. Name and Value are required.');}var newProps=lodash.cloneDeep(properties);// If Value is a Ref object, create a Ref object
if(_typeof(newProps.Value)==='object'&&!newProps.Value.kind){if(newProps.Value.Ref){newProps.Value=Ref(newProps.Value.Ref);}else if(newProps.Value['Fn::Join']){newProps.Value=FnJoin(newProps.Value['Fn::Join'][0],newProps.Value['Fn::Join'][1]);}}// If Export Name is Intrinsic, create an Intrinsic object
if(newProps.Export&&newProps.Export.Name&&_typeof(newProps.Export.Name)==='object'&&newProps.Export.Name['Fn::Sub']&&!newProps.Export.Name.kind){newProps.Export.Name=FnSub(newProps.Export.Name['Fn::Sub']);}return{kind:'Output',Name:name,Properties:newProps};}

//      
function ResourceMetadata(resource,content){if(!resource||!content){throw new SyntaxError('New Metadata must have content, '+JSON.stringify(content)+' is invalid.');}return{kind:'ResourceMetadata',Resource:resource,Content:content};}

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version


// path.normalize(path)
// posix version


// posix version


// posix version



// path.relative(from, to)
// posix version











function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ?
    function (str, start, len) { return str.substr(start, len) } :
    function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    };

//      
function Service(json){var service={json:json};Object.keys(json.Resources).map(function(r){service[r]=Resource.bind({json:json,name:r});});return service;}

/**
 * Strings constants that map to CloudFormation pseudoparameter
 * Pseudo.AWS_ACCOUNT_ID
 * Pseudo.AWS_NOTIFICATION_ARNS
 * Pseudo.AWS_NO_VALUE
 * Pseudo.AWS_REGION
 * Pseudo.AWS_STACK_ID
 * Pseudo.AWS_STACK_NAME
 */var Pseudo={AWS_ACCOUNT_ID:'AWS::AccountId',AWS_NOTIFICATION_ARNS:'AWS::NotificationARNs',AWS_NO_VALUE:'AWS::NoValue',AWS_REGION:'AWS::Region',AWS_STACK_ID:'AWS::StackId',AWS_STACK_NAME:'AWS::StackName'};

//      
/**
 * IAddOptions Interface
 * @member Template
 *//**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */function Template(){return{AWSTemplateFormatVersion:'2010-09-09',Conditions:{},Mappings:{},Outputs:{},Parameters:{},Resources:{},/**
     * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
     * @example
     * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
     */add:function add(e,options){var _t=lodash.cloneDeep(this);switch(e.kind){case'CreationPolicy':return _addCreationPolicy(_t,e);case'ResourceMetadata':return _addResourceMetadata(_t,e);case'Condition':return _addCondition(_t,e);case'Mapping':return _addMapping(_t,e);case'Parameter':return _addParameter(_t,e);case'Output':return _addOutput(_t,e);case'Resource':var newT=_t;var f=lodash.cloneDeep(e);if(options){var nameSplit=f.Type.split('::').splice(1);var shortName=nameSplit.join('');if(options.Parameters){options.Parameters.map(function(p){var paramName=''+f.Name+shortName+'Param';if(!f.Properties){f.Properties={};}f.Properties[p]=Ref(paramName);newT=_addParameter(newT,Parameter(paramName,{Type:'String'}));});}newT=_addResource(_t,f);if(options.Output){newT=_addOutput(newT,Output(''+f.Name+shortName+'Output',{Value:Ref(f.Name),Condition:f.Condition,Export:{Name:FnSub('${'+Pseudo.AWS_STACK_NAME+'}-'+nameSplit[0]+'-'+nameSplit[1]+'-'+f.Name)}}));}}else{newT=_addResource(_t,f);}return newT;case'Description':return _addDescription(_t,e);default:throw new SyntaxError(JSON.stringify(e)+' is not a valid type, could not be added.');}},/**
     * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
     * @example
     * const t = Template();
     * JSON.stringify(t.build(), null, 2)
     */build:function build(){var _this=this;var result={AWSTemplateFormatVersion:'2010-09-09',Resources:{}};if(Object.keys(this.Conditions).length>0){result.Conditions={};Object.keys(this.Conditions).map(function(c){result.Conditions[c]=_json(_this.Conditions[c]);});}if(Object.keys(this.Parameters).length>0){result.Parameters={};Object.keys(this.Parameters).map(function(p){result.Parameters[p]=_json(_this.Parameters[p]);});}if(Object.keys(this.Mappings).length>0){result.Mappings={};Object.keys(this.Mappings).map(function(m){result.Mappings[m]=_json(_this.Mappings[m]);});}if(Object.keys(this.Outputs).length>0){result.Outputs={};Object.keys(this.Outputs).map(function(o){result.Outputs[o]=_json(_this.Outputs[o]);});}if(Object.keys(this.Resources).length>0){result.Resources={};Object.keys(this.Resources).map(function(r){result.Resources[r]=_json(_this.Resources[r]);});}if(this.Description){result.Description=this.Description;}return result;},kind:'Template',/**
     * Add elements to the Template in a functional way.
     */map:function map(iterable,mapFn){var result=lodash.cloneDeep(this);iterable.map(function(i){result=result.add(mapFn(i));});return result;},/**
     * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
     * @example
     * let t = Template();
     * let p = Parameter('NewParam', { Type: 'String' });
     * t.add(p).remove(p);
     */remove:function remove(e){var result=lodash.cloneDeep(this);var element=void 0;if(typeof e==='string'){var parameter=result.Parameters[e];if(parameter){element=parameter;}else{var output=result.Outputs[e];if(output){element=output;}else{var mapping=result.Mappings[e];if(mapping){element=mapping;}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}}}else{element=e;}switch(element.kind){/*case 'Condition':
                    return _removeCondition(this, e);*/case'Parameter':return _removeParameter(this,element);case'Output':return _removeOutput(this,element);/*case 'Resource':
                    return _removeResource(this, e);*/case'Mapping':return _removeMapping(this,element);default:throw new SyntaxError(JSON.stringify(e)+' is not a valid type, could not be added.');}},/**
     * Removes the Description from the Template.
     */removeDescription:function removeDescription(){var Description$$1=this.Description,remaining=objectWithoutProperties(this,['Description']);return remaining;},/**
     * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
     */merge:function merge$$1(t){var _t=lodash.cloneDeep(this);var combined={};['Conditions','Mapping','Outputs','Parameters','Resources','Description'].map(function(block){if(t[block]){combined[block]=_extends({},_t[block],t[block]);}});return _extends({},_t,combined);},/**
     * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
     * @example
     * const templateJson = require('template.json');
     * const t = Template().import(templateJson);
     */import:function _import(inputTemplate){var _t=lodash.cloneDeep(this);return _calcFromExistingTemplate(_t,inputTemplate);}};}function _validateRef(t,ref){if(ref.Ref){if(!(t.Parameters[ref.Ref]||t.Resources[ref.Ref])){throw new SyntaxError('Could not find '+JSON.stringify(ref));}}return;}function _validateFnGetAtt(t,att){if(att.FnGetAtt&&!t.Resources[att.FnGetAtt[0]]){throw new SyntaxError('Could not find '+JSON.stringify(att));}return;}function _strip(t){var kind=t.kind,Name=t.Name,rest=objectWithoutProperties(t,['kind','Name']);return rest;}function _cleanObject(object){if(Array.isArray(object)){for(var v=0;v<object.length;v++){object[v]=_cleanObject(object[v]);}}else{if(object.kind){object=_json(object);}else{for(var o in object){if(object[o]!==null&&_typeof(object[o])==='object'){object[o]=_cleanObject(object[o]);}}}}return object;}function _buildResource(t){var Type=t.Type,Properties=t.Properties,CreationPolicy$$1=t.CreationPolicy,Metadata=t.Metadata,Condition$$1=t.Condition;var newProps={};if(Properties){Object.keys(Properties).map(function(p){// Ignore empty arrays
if(!(Array.isArray(Properties[p])&&Properties[p].length===0)){if(Properties[p].kind){newProps[p]=_json(Properties[p]);}else{newProps[p]=_cleanObject(Properties[p]);}}});}var result={Type:Type,Properties:newProps};if(CreationPolicy$$1){result.CreationPolicy=_json(CreationPolicy$$1);}if(Metadata){result.Metadata=_json(Metadata);}if(Condition$$1){result.Condition=Condition$$1;}return result;}function _buildCondition(t){var Condition$$1=t.Condition;var result=_json(Condition$$1);Object.keys(result).map(function(k){if(result[k][0].kind){result[k][0]=_json(result[k][0]);}});return result;}function _buildCreationPolicy(t){var Content=t.Content;return Content;}function _buildResourceMetadata(t){var Content=t.Content;return Content;}function _buildFnJoin(t){if(Array.isArray(t.Values)){var jsonValues=t.Values.map(function(x){if(typeof x==='string'){return x;}else{return _json(x);}});return{'Fn::Join':[t.Delimiter,jsonValues]};}else{return{'Fn::Join':[t.Delimiter,_json(t.Values)]};}}function _buildFnFindInMap(t){return t.FnFindInMap.map(function(x){if(typeof x==='string'){return x;}else{return _json(x);}});}function _buildFnAnd(t){return t.FnAnd.map(function(x){if(typeof x==='string'){return x;}else{if(x.kind){return _json(x);}return x;}});}function _buildFnEquals(t){return t.FnEquals.map(function(x){if(typeof x==='string'){return x;}else{if(x.kind){return _json(x);}return x;}});}function _buildMapping(t){var result=t.Content;return result;}function _buildOutput(t){var outputResult=lodash.cloneDeep(t.Properties);if(typeof outputResult.Value!=='string'){var stripped=_json(outputResult.Value);outputResult=_extends({},outputResult,{Value:stripped});}if(outputResult.Export&&outputResult.Export.Name&&typeof outputResult.Export.Name!=='string'){var _stripped=_json(outputResult.Export.Name);outputResult=_extends({},outputResult,{Export:{Name:_stripped}});}return outputResult;}function _json(t){switch(t.kind){case'Ref':return{Ref:t.Ref};case'FnGetAtt':return{'Fn::GetAtt':t.FnGetAtt};case'FnJoin':return _buildFnJoin(t);case'FnAnd':return{'Fn::And':_buildFnAnd(t)};case'FnFindInMap':return{'Fn::FindInMap':_buildFnFindInMap(t)};case'FnEquals':return{'Fn::Equals':_buildFnEquals(t)};case'FnSub':return{'Fn::Sub':t.FnSub};case'CreationPolicy':return _buildCreationPolicy(t);case'ResourceMetadata':return _buildResourceMetadata(t);case'Condition':return _buildCondition(t);case'Mapping':return _buildMapping(t);case'Parameter':return _strip(t).Properties;case'Output':return _buildOutput(t);case'Resource':return _buildResource(t);default:throw new SyntaxError('Can\'t call _json on '+JSON.stringify(t));}}function _addDescription(t,e){var result=_extends({},t);var desc={Description:e.Content};result=_extends({},t,desc);return result;}function _addCreationPolicy(t,e){var result=_extends({},t);if(!result.Resources[e.Resource]){throw new SyntaxError('Cannot add CreationPolicy to a Resource that does not exist in the template.');}var resource=_extends({},result.Resources[e.Resource]);resource.CreationPolicy=e;result.Resources[e.Resource]=resource;return result;}function _addResourceMetadata(t,e){var result=_extends({},t);if(!result.Resources[e.Resource]){throw new SyntaxError('Cannot add Metadata to a Resource that does not exist in the template.');}var resource=_extends({},result.Resources[e.Resource]);resource.Metadata=e;result.Resources[e.Resource]=resource;return result;}function _addCondition(t,e){// TODO: Validate intrinsics
var result=_extends({},t);result.Conditions[e.Name]=e;return result;}function _addOutput(t,e){var e0=lodash.cloneDeep(e);if(typeof e0.Properties.Value!=='string'){if(e0.Properties.Value.Ref){_validateRef(t,e0.Properties.Value);}else if(typeof e0.Properties.Value!=='string'&&e0.Properties.Value['Fn::GetAtt']){e0.Properties.Value=FnGetAtt(e0.Properties.Value['Fn::GetAtt'][0],e0.Properties.Value['Fn::GetAtt'][1]);_validateFnGetAtt(t,e0.Properties.Value);}}var result=_extends({},t);result.Outputs[e0.Name]=e0;return result;}function _addParameter(t,e){var result=_extends({},t);result.Parameters[e.Name]=e;return result;}function _addMapping(t,e){var result=_extends({},t);if(result.Mappings[e.Name]){result.Mappings[e.Name]=_extends({},e,{Content:_extends({},result.Mappings[e.Name].Content,e.Content)});}else{result.Mappings[e.Name]=e;}return result;}function _addResource(t,e){var result=_extends({},t);result.Resources[e.Name]=e;return result;}function _removeMapping(t,e){var result=_extends({},t);var mapping=void 0;if(typeof e==='string'){if(result.Mappings[e]){mapping=result.Mappings[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{mapping=e;}if(result.Mappings[mapping.Name]){delete result.Mappings[mapping.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(mapping));}return result;}function _removeOutput(t,e){var result=_extends({},t);var out=void 0;if(typeof e==='string'){if(result.Outputs[e]){out=result.Outputs[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{out=e;}if(result.Outputs[out.Name]){delete result.Outputs[out.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(out));}return result;}function _removeParameter(t,e){var result=_extends({},t);var param=void 0;if(typeof e==='string'){if(result.Parameters[e]){param=result.Parameters[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{param=e;}if(result.Parameters[param.Name]){delete result.Parameters[param.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(param));}return result;}function _calcFromExistingTemplate(t,inputTemplate){if(inputTemplate.Description){t=t.add(Description(inputTemplate.Description));}if(inputTemplate.Parameters){Object.keys(inputTemplate.Parameters).map(function(p){t=t.add(Parameter(p,inputTemplate.Parameters[p]));});}if(inputTemplate.Resources){Object.keys(inputTemplate.Resources).map(function(r){var split=inputTemplate.Resources[r].Type.split('::');var cat=split[1];var resType=split[2];if(split[0]==='AWS'){var service=Service(stubs__default[cat]);t=t.add(service[resType](r,inputTemplate.Resources[r].Properties));}else if(split[0]==='Custom'){t=t.add(CustomResource(r,inputTemplate.Resources[r].Properties));}});}if(inputTemplate.Outputs){Object.keys(inputTemplate.Outputs).map(function(o){t=t.add(Output(o,inputTemplate.Outputs[o]));});}if(inputTemplate.Mappings){Object.keys(inputTemplate.Mappings).map(function(m){Object.keys(inputTemplate.Mappings[m]).map(function(m0){t=t.add(Mapping(m,m0,inputTemplate.Mappings[m][m0]));});});}if(inputTemplate.Conditions){Object.keys(inputTemplate.Conditions).map(function(c){t=t.add(Condition(c,inputTemplate.Conditions[c]));});}return t;}

//      
var s3Service=Service(stubs.S3);function S3BucketTransform(bucketName,logicalName,awsObj){var s3Client=new awsObj.S3();return new Promise(function(resolve$$1,reject){//let bucket = new s3Resource.Bucket(newName);
var bucket={};return s3Client.getBucketVersioning({Bucket:bucketName}).promise().then(function(versionData){if(Object.keys(versionData)){bucket.VersioningConfiguration=versionData;}// return s3Client.getBucketAcl({ Bucket: bucketName }).promise()
return s3Client.getBucketCors({Bucket:bucketName}).promise();})/* .then(function (aclData) {
      bucket.AccessControl = aclData
    })*/.then(function(corsData){bucket.CorsConfiguration=corsData;return s3Client.getBucketLifecycleConfiguration({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchCORSConfiguration
return s3Client.getBucketLifecycleConfiguration({Bucket:bucketName}).promise();}).then(function(lifeData){bucket.LifecycleConfiguration=lifeData;return s3Client.getBucketLogging({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchLifecycleConfiguration
return s3Client.getBucketLogging({Bucket:bucketName}).promise();}).then(function(loggingData){bucket.LoggingConfiguration={DestinationBucketName:loggingData.LoggingEnabled.TargetBucket,LogFilePrefix:loggingData.LoggingEnabled.TargetPrefix};return s3Client.getBucketNotification({Bucket:bucketName}).promise();}).then(function(notificationData){if(Object.keys(notificationData).length>0){bucket.NotificationConfiguration=notificationData;}return s3Client.getBucketReplication({Bucket:bucketName}).promise();}).then(function(replData){bucket.ReplicationConfiguration=replData;return s3Client.getBucketTagging({Bucket:bucketName}).promise();}).then(function(tagsData){tagsData.TagSet.forEach(function(tag){bucket.Tags.add(tag);});return s3Client.getBucketWebsite({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchTagSet
return s3Client.getBucketWebsite({Bucket:bucketName}).promise();}).then(function(websiteData){bucket.WebsiteConfiguration=new websiteData();}).catch(function(e){// Silently catch the NoSuchWebsiteConfiguration
return;}).then(function(){resolve$$1(s3Service.Bucket(logicalName,bucket));}).catch(function(e){// Silently catch the NoSuchWebsiteConfiguration
reject(e);});});}

var instanceTypes = [{"instance_type":"m1.small","linux_virtualization_types":["PV"],"arch":["i386","x86_64"]},{"instance_type":"m1.medium","linux_virtualization_types":["PV"],"arch":["i386","x86_64"]},{"instance_type":"m1.large","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"m1.xlarge","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"c1.medium","linux_virtualization_types":["PV"],"arch":["i386","x86_64"]},{"instance_type":"c1.xlarge","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"cc2.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"cg1.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m2.xlarge","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"m2.2xlarge","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"m2.4xlarge","linux_virtualization_types":["PV"],"arch":["x86_64"]},{"instance_type":"cr1.8xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i2.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"i2.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"i2.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"i2.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"hi1.4xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"hs1.8xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"t1.micro","linux_virtualization_types":["PV"],"arch":["i386","x86_64"]},{"instance_type":"t2.nano","linux_virtualization_types":["HVM"],"arch":["x86_64","i386"]},{"instance_type":"t2.micro","linux_virtualization_types":["HVM"],"arch":["x86_64","i386"]},{"instance_type":"t2.small","linux_virtualization_types":["HVM"],"arch":["x86_64","i386"]},{"instance_type":"t2.medium","linux_virtualization_types":["HVM"],"arch":["x86_64","i386"]},{"instance_type":"t2.large","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"t2.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"t2.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.large","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.10xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m4.16xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"m3.medium","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"m3.large","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"m3.xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"m3.2xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"c4.large","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"c4.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"c4.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"c4.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"c4.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"c3.large","linux_virtualization_types":["HVM","PV"],"arch":["x86_64","i386"]},{"instance_type":"c3.xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"c3.2xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"c3.4xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"c3.8xlarge","linux_virtualization_types":["HVM","PV"],"arch":["x86_64"]},{"instance_type":"p2.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"p2.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"p2.16xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"g2.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"g2.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"x1.16xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"x1.32xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.large","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r4.16xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r3.large","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r3.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r3.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r3.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"r3.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"i3.large","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i3.xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i3.2xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i3.4xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i3.8xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"i3.16xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"d2.xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"d2.2xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"d2.4xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"d2.8xlarge","linux_virtualization_types":["HVM"],"arch":["x86_64"]},{"instance_type":"f1.2xlarge","linux_virtualization_types":[],"arch":["x86_64"]},{"instance_type":"f1.16xlarge","linux_virtualization_types":[],"arch":["x86_64"]}];

//      
var Promise$1=require('bluebird');/**
 * Returns an array of all instance types and details.
 * @memberof module:Macro
 * @returns {Array}
 */function getInstanceTypeList(){return instanceTypes;}/**
 * Returns an array of just the instance type names available in AWS.
 * @memberof module:Macro
 * @returns {Array}
 */function getInstanceTypeNameList(){var results=[];instanceTypes.forEach(function(instanceType){results.push(instanceType.instance_type);});return results;}/**
 * Returns a map of all instance types and details.
 * @memberof module:Macro
 * @returns {{}}
 *//**
 * Returns an array of the names of all regions in AWS.
 * @memberof module:Macro
 * @returns {string[]}
 *//**
 * Returns an AMI Map that can be added to a Mapping.
 * @memberof module:Macro
 * @param filters
 * @param regions
 * @returns {Promise.<TResult>}
 */

var fs=require('fs-extra');var path$1=require('path');var bluebird=require('bluebird');var jszip=require('jszip');var klaw=require('klaw');var Lambda$1=Service(stubs.Lambda);var defaultConfig={FunctionName:'MyFunction',MemorySize:128,Timeout:30,Runtime:'nodejs6.10',//env: {},
Role:'BlankRole',//kms: '',
Handler:'index.handler',Tags:[]};function _createInlineTemplate(_ref){var inputPath=_ref.path,name=_ref.name,options=_ref.options,parameters=_ref.parameters;return new Promise(function(resolve,reject){fs.readFile(inputPath).then(function(functionCode){var t=Template();if(parameters&&parameters.length>0){parameters.map(function(p){t=t.add(Parameter(''+name+p,{Type:'String'}));});}t=t.add(Lambda$1.Function(name,{FunctionName:options.FunctionName,Handler:options.Handler,MemorySize:options.MemorySize,Role:parameters&&parameters.includes('Role')?Ref(name+'Role'):options.Role,Runtime:options.Runtime,Timeout:options.Timeout,Code:{ZipFile:{'Fn::Join':['\n',functionCode.toString().split('\n')]}//Tags: options.Tags ? options.Tags.length > 0 : null
}}),{Output:true});resolve(t);}).catch(function(e){reject(e);});});}/**
 * Create a Lambda function from a folder or source file
 * @param {} param0 
 */function buildLambda(_ref2){var inputPath=_ref2.path,name=_ref2.name,options=_ref2.options,parameters=_ref2.parameters,output=_ref2.output;name=name?name:defaultConfig.FunctionName;options=options?lodash.merge({},defaultConfig,options):defaultConfig;inputPath=path$1.resolve(inputPath);return new Promise(function(resolve,reject){fs.stat(inputPath).then(function(stat){if(stat.isFile()){_createInlineTemplate({path:inputPath,name:name,options:options,parameters:parameters}).then(function(t){resolve({Template:t.build()});}).catch(function(e){reject(e);});}else if(stat.isDirectory()){var zip=new jszip();var files=[];klaw(inputPath).on('data',function(_ref3){var location=_ref3.path,stats=_ref3.stats;if(stats.isFile()){files.push(location);}}).on('end',function(){if(files.length===1&&path$1.relative(inputPath,files[0])==='index.js'){_createInlineTemplate({path:files[0],name:name,options:options,parameters:parameters}).then(function(t){resolve({Template:t.build()});}).catch(function(e){reject(e);});}else{bluebird.map(files,function(file){return fs.readFile(file).then(function(contents){var relPath=path$1.relative(inputPath,file);zip.file(relPath,contents);});}).then(function(results){zip.generateAsync({type:'nodebuffer'}).then(function(blob){//fs.writeFileSync('final.zip', blob);
var t=Template().add(Parameter(name+'S3BucketParam',{Type:'String'})).add(Parameter(name+'S3KeyParam',{Type:'String'}));if(parameters&&parameters.length>0){parameters.map(function(p){t=t.add(Parameter(''+name+p,{Type:'String'}));});}t=t.add(Lambda$1.Function(name,{FunctionName:options.FunctionName,Handler:options.Handler,MemorySize:options.MemorySize,Role:parameters&&parameters.includes('Role')?Ref(name+'Role'):options.Role,Runtime:options.Runtime,Timeout:options.Timeout,Code:{S3Bucket:Ref('MyGreatFunctionS3BucketParam'),S3Key:Ref('MyGreatFunctionS3KeyParam')//Tags: options.Tags ? options.Tags.length > 0 : null
}}),{Output:true});resolve({Template:t.build(),Zip:blob});});});}});}}).catch(function(e){reject(e);});});}

//      
stubs__default.resourceList.map(function(r){exports[r]=Service(stubs__default[r]);});/*
import ApiGateway from './stubs/json/ApiGateway.json';
exports['ApiGateway'] = Service(ApiGateway);

import ApplicationAutoScaling from './stubs/json/ApplicationAutoScaling.json';
exports['ApplicationAutoScaling'] = Service(ApplicationAutoScaling);

import AutoScaling from './stubs/json/AutoScaling.json';
exports['AutoScaling'] = Service(AutoScaling);

import CertificateManager from './stubs/json/CertificateManager.json';
exports['CertificateManager'] = Service(CertificateManager);

import CloudFormation from './stubs/json/CloudFormation.json';
exports['CloudFormation'] = Service(CloudFormation);

import CloudFront from './stubs/json/CloudFront.json';
exports['CloudFront'] = Service(CloudFront);

import CloudTrail from './stubs/json/CloudTrail.json';
exports['CloudTrail'] = Service(CloudTrail);

import CloudWatch from './stubs/json/CloudWatch.json';
exports['CloudWatch'] = Service(CloudWatch);

import CodeBuild from './stubs/json/CodeBuild.json';
exports['CodeBuild'] = Service(CodeBuild);

import CodeCommit from './stubs/json/CodeCommit.json';
exports['CodeCommit'] = Service(CodeCommit);

import CodeDeploy from './stubs/json/CodeDeploy.json';
exports['CodeDeploy'] = Service(CodeDeploy);

import CodePipeline from './stubs/json/CodePipeline.json';
exports['CodePipeline'] = Service(CodePipeline);

import Cognito from './stubs/json/Cognito.json';
exports['Cognito'] = Service(Cognito);

import Config from './stubs/json/Config.json';
exports['Config'] = Service(Config);

import DataPipeline from './stubs/json/DataPipeline.json';
exports['DataPipeline'] = Service(DataPipeline);

import DirectoryService from './stubs/json/DirectoryService.json';
exports['DirectoryService'] = Service(DirectoryService);

import DynamoDB from './stubs/json/DynamoDB.json';
exports['DynamoDB'] = Service(DynamoDB);

import EC2 from './stubs/json/EC2.json';
exports['EC2'] = Service(EC2);

import ECR from './stubs/json/ECR.json';
exports['ECR'] = Service(ECR);

import ECS from './stubs/json/ECS.json';
exports['ECS'] = Service(ECS);

import EFS from './stubs/json/EFS.json';
exports['EFS'] = Service(EFS);

import EMR from './stubs/json/EMR.json';
exports['EMR'] = Service(EMR);

import ElastiCache from './stubs/json/ElastiCache.json';
exports['ElastiCache'] = Service(ElastiCache);

import ElasticBeanstalk from './stubs/json/ElasticBeanstalk.json';
exports['ElasticBeanstalk'] = Service(ElasticBeanstalk);

import ElasticLoadBalancing from './stubs/json/ElasticLoadBalancing.json';
exports['ElasticLoadBalancing'] = Service(ElasticLoadBalancing);

import ElasticLoadBalancingV2 from './stubs/json/ElasticLoadBalancingV2.json';
exports['ElasticLoadBalancingV2'] = Service(ElasticLoadBalancingV2);

import Elasticsearch from './stubs/json/Elasticsearch.json';
exports['Elasticsearch'] = Service(Elasticsearch);

import Events from './stubs/json/Events.json';
exports['Events'] = Service(Events);

import GameLift from './stubs/json/GameLift.json';
exports['GameLift'] = Service(GameLift);

import IAM from './stubs/json/IAM.json';
exports['IAM'] = Service(IAM);

import IoT from './stubs/json/IoT.json';
exports['IoT'] = Service(IoT);

import KMS from './stubs/json/KMS.json';
exports['KMS'] = Service(KMS);

import Kinesis from './stubs/json/Kinesis.json';
exports['Kinesis'] = Service(Kinesis);

import KinesisFirehose from './stubs/json/KinesisFirehose.json';
exports['KinesisFirehose'] = Service(KinesisFirehose);

import Lambda from './stubs/json/Lambda.json';
exports['Lambda'] = Service(Lambda);

import Logs from './stubs/json/Logs.json';
exports['Logs'] = Service(Logs);

import OpsWorks from './stubs/json/OpsWorks.json';
exports['OpsWorks'] = Service(OpsWorks);

import RDS from './stubs/json/RDS.json';
exports['RDS'] = Service(RDS);

import Redshift from './stubs/json/Redshift.json';
exports['Redshift'] = Service(Redshift);

import Route53 from './stubs/json/Route53.json';
exports['Route53'] = Service(Route53);

import S3 from './stubs/json/S3.json';
exports['S3'] = Service(S3);

import SDB from './stubs/json/SDB.json';
exports['SDB'] = Service(SDB);

import SNS from './stubs/json/SNS.json';
exports['SNS'] = Service(SNS);

import SQS from './stubs/json/SQS.json';
exports['SQS'] = Service(SQS);

import SSM from './stubs/json/SSM.json';
exports['SSM'] = Service(SSM);

import StepFunctions from './stubs/json/StepFunctions.json';
exports['StepFunctions'] = Service(StepFunctions);

import WAF from './stubs/json/WAF.json';
exports['WAF'] = Service(WAF);

import WAFRegional from './stubs/json/WAFRegional.json';
exports['WAFRegional'] = Service(WAFRegional);

import WorkSpaces from './stubs/json/WorkSpaces.json';
exports['WorkSpaces'] = Service(WorkSpaces);
*/

exports.Template = Template;
exports.Parameter = Parameter;
exports.Description = Description;
exports.Output = Output;
exports.Mapping = Mapping;
exports.Resource = Resource;
exports.CustomResource = CustomResource;
exports.Condition = Condition;
exports.Ref = Ref;
exports.FnGetAtt = FnGetAtt;
exports.FnEquals = FnEquals;
exports.FnJoin = FnJoin;
exports.FnFindInMap = FnFindInMap;
exports.FnSub = FnSub;
exports.FnAnd = FnAnd;
exports.CreationPolicy = CreationPolicy;
exports.ResourceMetadata = ResourceMetadata;
exports.S3BucketTransform = S3BucketTransform;
exports.getInstanceTypeList = getInstanceTypeList;
exports.getInstanceTypeNameList = getInstanceTypeNameList;
exports.buildLambda = buildLambda;
exports.Pseudo = Pseudo;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
