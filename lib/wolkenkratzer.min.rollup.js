(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", { value: true });exports.Pseudo = exports.getInstanceTypeNameList = exports.getInstanceTypeList = exports.S3BucketTransform = exports.ResourceMetadata = exports.CreationPolicy = exports.FnJoin = exports.FnEquals = exports.FnGetAtt = exports.Ref = exports.Condition = exports.CustomResource = exports.Resource = exports.Mapping = exports.Output = exports.Description = exports.Parameter = exports.Template = undefined;var _template = require('./template');Object.defineProperty(exports, 'Template', { enumerable: true, get: function () {return _template.

    Template;} });var _parameter = require('./elements/parameter');Object.defineProperty(exports, 'Parameter', { enumerable: true, get: function () {return _parameter.
    Parameter;} });var _description = require('./elements/description');Object.defineProperty(exports, 'Description', { enumerable: true, get: function () {return _description.
    Description;} });var _output = require('./elements/output');Object.defineProperty(exports, 'Output', { enumerable: true, get: function () {return _output.
    Output;} });var _mapping = require('./elements/mapping');Object.defineProperty(exports, 'Mapping', { enumerable: true, get: function () {return _mapping.
    Mapping;} });var _resource = require('./elements/resource');Object.defineProperty(exports, 'Resource', { enumerable: true, get: function () {return _resource.
    Resource;} });Object.defineProperty(exports, 'CustomResource', { enumerable: true, get: function () {return _resource.CustomResource;} });var _condition = require('./elements/condition');Object.defineProperty(exports, 'Condition', { enumerable: true, get: function () {return _condition.
    Condition;} });var _intrinsic = require('./intrinsic');Object.defineProperty(exports, 'Ref', { enumerable: true, get: function () {return _intrinsic.
    Ref;} });Object.defineProperty(exports, 'FnGetAtt', { enumerable: true, get: function () {return _intrinsic.FnGetAtt;} });Object.defineProperty(exports, 'FnEquals', { enumerable: true, get: function () {return _intrinsic.FnEquals;} });Object.defineProperty(exports, 'FnJoin', { enumerable: true, get: function () {return _intrinsic.FnJoin;} });var _creationpolicy = require('./attributes/creationpolicy');Object.defineProperty(exports, 'CreationPolicy', { enumerable: true, get: function () {return _creationpolicy.

    CreationPolicy;} });var _metadata = require('./attributes/metadata');Object.defineProperty(exports, 'ResourceMetadata', { enumerable: true, get: function () {return _metadata.
    ResourceMetadata;} });var _s = require('./transform/s3');Object.defineProperty(exports, 'S3BucketTransform', { enumerable: true, get: function () {return _s.
    S3BucketTransform;} });var _ec2meta = require('./macros/ec2meta.macro');Object.defineProperty(exports, 'getInstanceTypeList', { enumerable: true, get: function () {return _ec2meta.

    getInstanceTypeList;} });Object.defineProperty(exports, 'getInstanceTypeNameList', { enumerable: true, get: function () {return _ec2meta.
    getInstanceTypeNameList;} });var _pseudo = require('./pseudo');Object.defineProperty(exports, 'Pseudo', { enumerable: true, get: function () {return _pseudo.

    Pseudo;} });var _service = require('./service');


var _path = require('path');var path = _interopRequireWildcard(_path);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

/*const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));
                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                       files.map(file => {
                                                                                                                                                                                                                                                                                                                                         if (file !== 'json' && file !== 'S3.json') {
                                                                                                                                                                                                                                                                                                                                           const service = file.replace('.json', '');
                                                                                                                                                                                                                                                                                                                                           exports[service] = Service(service);
                                                                                                                                                                                                                                                                                                                                         }
                                                                                                                                                                                                                                                                                                                                       });*/

exports['ApiGateway'] = (0, _service.Service)(require('./stubs/json/ApiGateway.json')); //import * as fs from 'fs';
exports['ApplicationAutoScaling'] = (0, _service.Service)(
require('./stubs/json/ApplicationAutoScaling.json'));

exports['AutoScaling'] = (0, _service.Service)(require('./stubs/json/AutoScaling.json'));
exports['CertificateManager'] = (0, _service.Service)(
require('./stubs/json/CertificateManager.json'));

exports['CloudFormation'] = (0, _service.Service)(
require('./stubs/json/CloudFormation.json'));

exports['CloudFront'] = (0, _service.Service)(require('./stubs/json/CloudFront.json'));
exports['CloudTrail'] = (0, _service.Service)(require('./stubs/json/CloudTrail.json'));
exports['CloudWatch'] = (0, _service.Service)(require('./stubs/json/CloudWatch.json'));
exports['CodeBuild'] = (0, _service.Service)(require('./stubs/json/CodeBuild.json'));
exports['CodeCommit'] = (0, _service.Service)(require('./stubs/json/CodeCommit.json'));
exports['CodeDeploy'] = (0, _service.Service)(require('./stubs/json/CodeDeploy.json'));
exports['CodePipeline'] = (0, _service.Service)(require('./stubs/json/CodePipeline.json'));
exports['Cognito'] = (0, _service.Service)(require('./stubs/json/Cognito.json'));
exports['Config'] = (0, _service.Service)(require('./stubs/json/Config.json'));
exports['DataPipeline'] = (0, _service.Service)(require('./stubs/json/DataPipeline.json'));
exports['DirectoryService'] = (0, _service.Service)(
require('./stubs/json/DirectoryService.json'));

exports['DynamoDB'] = (0, _service.Service)(require('./stubs/json/DynamoDB.json'));
exports['EC2'] = (0, _service.Service)(require('./stubs/json/EC2.json'));
exports['ECR'] = (0, _service.Service)(require('./stubs/json/ECR.json'));
exports['ECS'] = (0, _service.Service)(require('./stubs/json/ECS.json'));
exports['EFS'] = (0, _service.Service)(require('./stubs/json/EFS.json'));
exports['EMR'] = (0, _service.Service)(require('./stubs/json/EMR.json'));
exports['ElastiCache'] = (0, _service.Service)(require('./stubs/json/ElastiCache.json'));
exports['ElasticBeanstalk'] = (0, _service.Service)(
require('./stubs/json/ElasticBeanstalk.json'));

exports['ElasticLoadBalancing'] = (0, _service.Service)(
require('./stubs/json/ElasticLoadBalancing.json'));

exports['ElasticLoadBalancingV2'] = (0, _service.Service)(
require('./stubs/json/ElasticLoadBalancingV2.json'));

exports['Elasticsearch'] = (0, _service.Service)(require('./stubs/json/Elasticsearch.json'));
exports['Events'] = (0, _service.Service)(require('./stubs/json/Events.json'));
exports['GameLift'] = (0, _service.Service)(require('./stubs/json/GameLift.json'));
exports['IAM'] = (0, _service.Service)(require('./stubs/json/IAM.json'));
exports['IoT'] = (0, _service.Service)(require('./stubs/json/IoT.json'));
exports['KMS'] = (0, _service.Service)(require('./stubs/json/KMS.json'));
exports['Kinesis'] = (0, _service.Service)(require('./stubs/json/Kinesis.json'));
exports['KinesisFirehose'] = (0, _service.Service)(
require('./stubs/json/KinesisFirehose.json'));

exports['Lambda'] = (0, _service.Service)(require('./stubs/json/Lambda.json'));
exports['Logs'] = (0, _service.Service)(require('./stubs/json/Logs.json'));
exports['OpsWorks'] = (0, _service.Service)(require('./stubs/json/OpsWorks.json'));
exports['RDS'] = (0, _service.Service)(require('./stubs/json/RDS.json'));
exports['Redshift'] = (0, _service.Service)(require('./stubs/json/Redshift.json'));
exports['Route53'] = (0, _service.Service)(require('./stubs/json/Route53.json'));
exports['S3'] = (0, _service.Service)(require('./stubs/json/S3.json'));
exports['SDB'] = (0, _service.Service)(require('./stubs/json/SDB.json'));
exports['SNS'] = (0, _service.Service)(require('./stubs/json/SNS.json'));
exports['SQS'] = (0, _service.Service)(require('./stubs/json/SQS.json'));
exports['SSM'] = (0, _service.Service)(require('./stubs/json/SSM.json'));
exports['StepFunctions'] = (0, _service.Service)(require('./stubs/json/StepFunctions.json'));
exports['WAF'] = (0, _service.Service)(require('./stubs/json/WAF.json'));
exports['WAFRegional'] = (0, _service.Service)(require('./stubs/json/WAFRegional.json'));
exports['WorkSpaces'] = (0, _service.Service)(require('./stubs/json/WorkSpaces.json'));

})));
