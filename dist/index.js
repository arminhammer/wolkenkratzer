'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.Pseudo = exports.getInstanceTypeNameList = exports.getInstanceTypeList = exports.S3BucketTransform = exports.ResourceMetadata = exports.CreationPolicy = exports.FnJoin = exports.FnEquals = exports.FnGetAtt = exports.Ref = exports.Condition = exports.CustomResource = exports.Resource = exports.Mapping = exports.Output = exports.Description = exports.Parameter = exports.Template = undefined;var _template = require('./template');Object.defineProperty(exports, 'Template', { enumerable: true, get: function () {return _template.

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

//const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));
const files = [
'ApiGateway.json',
'CloudWatch.json',
'DataPipeline.json',
'EMR.json',
'GameLift.json',
'Logs.json',
'SNS.json',
'ApplicationAutoScaling.json',
'CodeBuild.json',
'DirectoryService.json',
'ElastiCache.json',
'IAM.json',
'OpsWorks.json',
'SQS.json',
'AutoScaling.json',
'CodeCommit.json',
'DynamoDB.json',
'ElasticBeanstalk.json',
'IoT.json',
'RDS.json',
'SSM.json',
'CertificateManager.json',
'CodeDeploy.json',
'EC2.json',
'ElasticLoadBalancing.json',
'KMS.json',
'Redshift.json',
'StepFunctions.json',
'CloudFormation.json',
'CodePipeline.json',
'ECR.json',
'ElasticLoadBalancingV2.json',
'Kinesis.json',
'Route53.json',
'WAF.json',
'CloudFront.json',
'Cognito.json',
'ECS.json',
'Elasticsearch.json',
'KinesisFirehose.json',
'S3.json',
'WAFRegional.json',
'CloudTrail.json',
'Config.json',
'EFS.json',
'Events.json',
'Lambda.json',
'SDB.json',
'WorkSpaces.json']; //import * as fs from 'fs';

files.map(file => {
  if (file !== 'json') {
    const service = file.replace('.json', '');
    exports[service] = (0, _service.Service)(service);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIlBhcmFtZXRlciIsIkRlc2NyaXB0aW9uIiwiT3V0cHV0IiwiTWFwcGluZyIsIlJlc291cmNlIiwiQ3VzdG9tUmVzb3VyY2UiLCJDb25kaXRpb24iLCJSZWYiLCJGbkdldEF0dCIsIkZuRXF1YWxzIiwiRm5Kb2luIiwiQ3JlYXRpb25Qb2xpY3kiLCJSZXNvdXJjZU1ldGFkYXRhIiwiUzNCdWNrZXRUcmFuc2Zvcm0iLCJnZXRJbnN0YW5jZVR5cGVMaXN0IiwiZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3QiLCJQc2V1ZG8iLCJwYXRoIiwiZmlsZXMiLCJtYXAiLCJmaWxlIiwic2VydmljZSIsInJlcGxhY2UiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUVTQSxZO0FBQ0FDLGE7QUFDQUMsZTtBQUNBQyxVO0FBQ0FDLFc7QUFDQUMsWSw4R0FBVUMsYztBQUNWQyxhO0FBQ0FDLE8seUdBQUtDLFEseUdBQVVDLFEsdUdBQVVDLE07O0FBRXpCQyxrQjtBQUNBQyxvQjtBQUNBQyxxQjs7QUFFUEMsdUI7QUFDQUMsMkI7O0FBRU9DLFUsTUFSVDs7O0FBV0EsNEIsSUFBWUMsSTs7QUFFWjtBQUNBLE1BQU1DLFFBQVE7QUFDWixpQkFEWTtBQUVaLGlCQUZZO0FBR1osbUJBSFk7QUFJWixVQUpZO0FBS1osZUFMWTtBQU1aLFdBTlk7QUFPWixVQVBZO0FBUVosNkJBUlk7QUFTWixnQkFUWTtBQVVaLHVCQVZZO0FBV1osa0JBWFk7QUFZWixVQVpZO0FBYVosZUFiWTtBQWNaLFVBZFk7QUFlWixrQkFmWTtBQWdCWixpQkFoQlk7QUFpQlosZUFqQlk7QUFrQlosdUJBbEJZO0FBbUJaLFVBbkJZO0FBb0JaLFVBcEJZO0FBcUJaLFVBckJZO0FBc0JaLHlCQXRCWTtBQXVCWixpQkF2Qlk7QUF3QlosVUF4Qlk7QUF5QlosMkJBekJZO0FBMEJaLFVBMUJZO0FBMkJaLGVBM0JZO0FBNEJaLG9CQTVCWTtBQTZCWixxQkE3Qlk7QUE4QlosbUJBOUJZO0FBK0JaLFVBL0JZO0FBZ0NaLDZCQWhDWTtBQWlDWixjQWpDWTtBQWtDWixjQWxDWTtBQW1DWixVQW5DWTtBQW9DWixpQkFwQ1k7QUFxQ1osY0FyQ1k7QUFzQ1osVUF0Q1k7QUF1Q1osb0JBdkNZO0FBd0NaLHNCQXhDWTtBQXlDWixTQXpDWTtBQTBDWixrQkExQ1k7QUEyQ1osaUJBM0NZO0FBNENaLGFBNUNZO0FBNkNaLFVBN0NZO0FBOENaLGFBOUNZO0FBK0NaLGFBL0NZO0FBZ0RaLFVBaERZO0FBaURaLGlCQWpEWSxDQUFkLEMsQ0FKQTs7QUF1REFBLE1BQU1DLEdBQU4sQ0FBVUMsUUFBUTtBQUNoQixNQUFJQSxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsVUFBTUMsVUFBVUQsS0FBS0UsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBaEI7QUFDQUMsWUFBUUYsT0FBUixJQUFtQixzQkFBUUEsT0FBUixDQUFuQjtBQUNEO0FBQ0YsQ0FMRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmV4cG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5leHBvcnQgeyBQYXJhbWV0ZXIgfSBmcm9tICcuL2VsZW1lbnRzL3BhcmFtZXRlcic7XG5leHBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvZGVzY3JpcHRpb24nO1xuZXhwb3J0IHsgT3V0cHV0IH0gZnJvbSAnLi9lbGVtZW50cy9vdXRwdXQnO1xuZXhwb3J0IHsgTWFwcGluZyB9IGZyb20gJy4vZWxlbWVudHMvbWFwcGluZyc7XG5leHBvcnQgeyBSZXNvdXJjZSwgQ3VzdG9tUmVzb3VyY2UgfSBmcm9tICcuL2VsZW1lbnRzL3Jlc291cmNlJztcbmV4cG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJy4vZWxlbWVudHMvY29uZGl0aW9uJztcbmV4cG9ydCB7IFJlZiwgRm5HZXRBdHQsIEZuRXF1YWxzLCBGbkpvaW4gfSBmcm9tICcuL2ludHJpbnNpYyc7XG5pbXBvcnQgeyBTZXJ2aWNlLCBJU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5leHBvcnQgeyBDcmVhdGlvblBvbGljeSB9IGZyb20gJy4vYXR0cmlidXRlcy9jcmVhdGlvbnBvbGljeSc7XG5leHBvcnQgeyBSZXNvdXJjZU1ldGFkYXRhIH0gZnJvbSAnLi9hdHRyaWJ1dGVzL21ldGFkYXRhJztcbmV4cG9ydCB7IFMzQnVja2V0VHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm0vczMnO1xuZXhwb3J0IHtcbiAgZ2V0SW5zdGFuY2VUeXBlTGlzdCxcbiAgZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3Rcbn0gZnJvbSAnLi9tYWNyb3MvZWMybWV0YS5tYWNybyc7XG5leHBvcnQgeyBQc2V1ZG8gfSBmcm9tICcuL3BzZXVkbyc7XG5cbi8vaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuLy9jb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3N0dWJzL2pzb24nKSk7XG5jb25zdCBmaWxlcyA9IFtcbiAgJ0FwaUdhdGV3YXkuanNvbicsXG4gICdDbG91ZFdhdGNoLmpzb24nLFxuICAnRGF0YVBpcGVsaW5lLmpzb24nLFxuICAnRU1SLmpzb24nLFxuICAnR2FtZUxpZnQuanNvbicsXG4gICdMb2dzLmpzb24nLFxuICAnU05TLmpzb24nLFxuICAnQXBwbGljYXRpb25BdXRvU2NhbGluZy5qc29uJyxcbiAgJ0NvZGVCdWlsZC5qc29uJyxcbiAgJ0RpcmVjdG9yeVNlcnZpY2UuanNvbicsXG4gICdFbGFzdGlDYWNoZS5qc29uJyxcbiAgJ0lBTS5qc29uJyxcbiAgJ09wc1dvcmtzLmpzb24nLFxuICAnU1FTLmpzb24nLFxuICAnQXV0b1NjYWxpbmcuanNvbicsXG4gICdDb2RlQ29tbWl0Lmpzb24nLFxuICAnRHluYW1vREIuanNvbicsXG4gICdFbGFzdGljQmVhbnN0YWxrLmpzb24nLFxuICAnSW9ULmpzb24nLFxuICAnUkRTLmpzb24nLFxuICAnU1NNLmpzb24nLFxuICAnQ2VydGlmaWNhdGVNYW5hZ2VyLmpzb24nLFxuICAnQ29kZURlcGxveS5qc29uJyxcbiAgJ0VDMi5qc29uJyxcbiAgJ0VsYXN0aWNMb2FkQmFsYW5jaW5nLmpzb24nLFxuICAnS01TLmpzb24nLFxuICAnUmVkc2hpZnQuanNvbicsXG4gICdTdGVwRnVuY3Rpb25zLmpzb24nLFxuICAnQ2xvdWRGb3JtYXRpb24uanNvbicsXG4gICdDb2RlUGlwZWxpbmUuanNvbicsXG4gICdFQ1IuanNvbicsXG4gICdFbGFzdGljTG9hZEJhbGFuY2luZ1YyLmpzb24nLFxuICAnS2luZXNpcy5qc29uJyxcbiAgJ1JvdXRlNTMuanNvbicsXG4gICdXQUYuanNvbicsXG4gICdDbG91ZEZyb250Lmpzb24nLFxuICAnQ29nbml0by5qc29uJyxcbiAgJ0VDUy5qc29uJyxcbiAgJ0VsYXN0aWNzZWFyY2guanNvbicsXG4gICdLaW5lc2lzRmlyZWhvc2UuanNvbicsXG4gICdTMy5qc29uJyxcbiAgJ1dBRlJlZ2lvbmFsLmpzb24nLFxuICAnQ2xvdWRUcmFpbC5qc29uJyxcbiAgJ0NvbmZpZy5qc29uJyxcbiAgJ0VGUy5qc29uJyxcbiAgJ0V2ZW50cy5qc29uJyxcbiAgJ0xhbWJkYS5qc29uJyxcbiAgJ1NEQi5qc29uJyxcbiAgJ1dvcmtTcGFjZXMuanNvbidcbl07XG5maWxlcy5tYXAoZmlsZSA9PiB7XG4gIGlmIChmaWxlICE9PSAnanNvbicpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZmlsZS5yZXBsYWNlKCcuanNvbicsICcnKTtcbiAgICBleHBvcnRzW3NlcnZpY2VdID0gU2VydmljZShzZXJ2aWNlKTtcbiAgfVxufSk7XG4iXX0=