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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIlBhcmFtZXRlciIsIkRlc2NyaXB0aW9uIiwiT3V0cHV0IiwiTWFwcGluZyIsIlJlc291cmNlIiwiQ3VzdG9tUmVzb3VyY2UiLCJDb25kaXRpb24iLCJSZWYiLCJGbkdldEF0dCIsIkZuRXF1YWxzIiwiRm5Kb2luIiwiQ3JlYXRpb25Qb2xpY3kiLCJSZXNvdXJjZU1ldGFkYXRhIiwiUzNCdWNrZXRUcmFuc2Zvcm0iLCJnZXRJbnN0YW5jZVR5cGVMaXN0IiwiZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3QiLCJQc2V1ZG8iLCJwYXRoIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7O0FBRVNBLFk7QUFDQUMsYTtBQUNBQyxlO0FBQ0FDLFU7QUFDQUMsVztBQUNBQyxZLDhHQUFVQyxjO0FBQ1ZDLGE7QUFDQUMsTyx5R0FBS0MsUSx5R0FBVUMsUSx1R0FBVUMsTTs7QUFFekJDLGtCO0FBQ0FDLG9CO0FBQ0FDLHFCOztBQUVQQyx1QjtBQUNBQywyQjs7QUFFT0MsVSxNQVJUOzs7QUFXQSw0QixJQUFZQyxJOztBQUVaOzs7Ozs7Ozs7QUFTQUMsUUFBUSxZQUFSLElBQXdCLHNCQUFRQyxRQUFRLDhCQUFSLENBQVIsQ0FBeEIsQyxDQVpBO0FBYUFELFFBQVEsd0JBQVIsSUFBb0M7QUFDbENDLFFBQVEsMENBQVIsQ0FEa0MsQ0FBcEM7O0FBR0FELFFBQVEsYUFBUixJQUF5QixzQkFBUUMsUUFBUSwrQkFBUixDQUFSLENBQXpCO0FBQ0FELFFBQVEsb0JBQVIsSUFBZ0M7QUFDOUJDLFFBQVEsc0NBQVIsQ0FEOEIsQ0FBaEM7O0FBR0FELFFBQVEsZ0JBQVIsSUFBNEI7QUFDMUJDLFFBQVEsa0NBQVIsQ0FEMEIsQ0FBNUI7O0FBR0FELFFBQVEsWUFBUixJQUF3QixzQkFBUUMsUUFBUSw4QkFBUixDQUFSLENBQXhCO0FBQ0FELFFBQVEsWUFBUixJQUF3QixzQkFBUUMsUUFBUSw4QkFBUixDQUFS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LENBQWpCO0FBQ0FELFFBQVEsS0FBUixJQUFpQixzQkFBUUMsUUFBUSx1QkFBUixDQUFSLENBQWpCO0FBQ0FELFFBQVEsS0FBUixJQUFpQixzQkFBUUMsUUFBUSx1QkFBUixDQUFSLENBQWpCO0FBQ0FELFFBQVEsS0FBUixJQUFpQixzQkFBUUMsUUFBUSx1QkFBUixDQUFSLENBQWpCO0FBQ0FELFFBQVEsZUFBUixJQUEyQixzQkFBUUMsUUFBUSxpQ0FBUixDQUFSLENBQTNCO0FBQ0FELFFBQVEsS0FBUixJQUFpQixzQkFBUUMsUUFBUSx1QkFBUixDQUFSLENBQWpCO0FBQ0FELFFBQVEsYUFBUixJQUF5QixzQkFBUUMsUUFBUSwrQkFBUixDQUFSLENBQXpCO0FBQ0FELFFBQVEsWUFBUixJQUF3QixzQkFBUUMsUUFBUSw4QkFBUixDQUFSLENBQXhCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuZXhwb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmV4cG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vZWxlbWVudHMvcGFyYW1ldGVyJztcbmV4cG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9kZXNjcmlwdGlvbic7XG5leHBvcnQgeyBPdXRwdXQgfSBmcm9tICcuL2VsZW1lbnRzL291dHB1dCc7XG5leHBvcnQgeyBNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmV4cG9ydCB7IFJlc291cmNlLCBDdXN0b21SZXNvdXJjZSB9IGZyb20gJy4vZWxlbWVudHMvcmVzb3VyY2UnO1xuZXhwb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9jb25kaXRpb24nO1xuZXhwb3J0IHsgUmVmLCBGbkdldEF0dCwgRm5FcXVhbHMsIEZuSm9pbiB9IGZyb20gJy4vaW50cmluc2ljJztcbmltcG9ydCB7IFNlcnZpY2UsIElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCB7IENyZWF0aW9uUG9saWN5IH0gZnJvbSAnLi9hdHRyaWJ1dGVzL2NyZWF0aW9ucG9saWN5JztcbmV4cG9ydCB7IFJlc291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2F0dHJpYnV0ZXMvbWV0YWRhdGEnO1xuZXhwb3J0IHsgUzNCdWNrZXRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybS9zMyc7XG5leHBvcnQge1xuICBnZXRJbnN0YW5jZVR5cGVMaXN0LFxuICBnZXRJbnN0YW5jZVR5cGVOYW1lTGlzdFxufSBmcm9tICcuL21hY3Jvcy9lYzJtZXRhLm1hY3JvJztcbmV4cG9ydCB7IFBzZXVkbyB9IGZyb20gJy4vcHNldWRvJztcblxuLy9pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vKmNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3R1YnMvanNvbicpKTtcblxuZmlsZXMubWFwKGZpbGUgPT4ge1xuICBpZiAoZmlsZSAhPT0gJ2pzb24nICYmIGZpbGUgIT09ICdTMy5qc29uJykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBmaWxlLnJlcGxhY2UoJy5qc29uJywgJycpO1xuICAgIGV4cG9ydHNbc2VydmljZV0gPSBTZXJ2aWNlKHNlcnZpY2UpO1xuICB9XG59KTsqL1xuXG5leHBvcnRzWydBcGlHYXRld2F5J10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9BcGlHYXRld2F5Lmpzb24nKSk7XG5leHBvcnRzWydBcHBsaWNhdGlvbkF1dG9TY2FsaW5nJ10gPSBTZXJ2aWNlKFxuICByZXF1aXJlKCcuL3N0dWJzL2pzb24vQXBwbGljYXRpb25BdXRvU2NhbGluZy5qc29uJylcbik7XG5leHBvcnRzWydBdXRvU2NhbGluZyddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vQXV0b1NjYWxpbmcuanNvbicpKTtcbmV4cG9ydHNbJ0NlcnRpZmljYXRlTWFuYWdlciddID0gU2VydmljZShcbiAgcmVxdWlyZSgnLi9zdHVicy9qc29uL0NlcnRpZmljYXRlTWFuYWdlci5qc29uJylcbik7XG5leHBvcnRzWydDbG91ZEZvcm1hdGlvbiddID0gU2VydmljZShcbiAgcmVxdWlyZSgnLi9zdHVicy9qc29uL0Nsb3VkRm9ybWF0aW9uLmpzb24nKVxuKTtcbmV4cG9ydHNbJ0Nsb3VkRnJvbnQnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0Nsb3VkRnJvbnQuanNvbicpKTtcbmV4cG9ydHNbJ0Nsb3VkVHJhaWwnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0Nsb3VkVHJhaWwuanNvbicpKTtcbmV4cG9ydHNbJ0Nsb3VkV2F0Y2gnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0Nsb3VkV2F0Y2guanNvbicpKTtcbmV4cG9ydHNbJ0NvZGVCdWlsZCddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vQ29kZUJ1aWxkLmpzb24nKSk7XG5leHBvcnRzWydDb2RlQ29tbWl0J10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9Db2RlQ29tbWl0Lmpzb24nKSk7XG5leHBvcnRzWydDb2RlRGVwbG95J10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9Db2RlRGVwbG95Lmpzb24nKSk7XG5leHBvcnRzWydDb2RlUGlwZWxpbmUnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0NvZGVQaXBlbGluZS5qc29uJykpO1xuZXhwb3J0c1snQ29nbml0byddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vQ29nbml0by5qc29uJykpO1xuZXhwb3J0c1snQ29uZmlnJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9Db25maWcuanNvbicpKTtcbmV4cG9ydHNbJ0RhdGFQaXBlbGluZSddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vRGF0YVBpcGVsaW5lLmpzb24nKSk7XG5leHBvcnRzWydEaXJlY3RvcnlTZXJ2aWNlJ10gPSBTZXJ2aWNlKFxuICByZXF1aXJlKCcuL3N0dWJzL2pzb24vRGlyZWN0b3J5U2VydmljZS5qc29uJylcbik7XG5leHBvcnRzWydEeW5hbW9EQiddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vRHluYW1vREIuanNvbicpKTtcbmV4cG9ydHNbJ0VDMiddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vRUMyLmpzb24nKSk7XG5leHBvcnRzWydFQ1InXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0VDUi5qc29uJykpO1xuZXhwb3J0c1snRUNTJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9FQ1MuanNvbicpKTtcbmV4cG9ydHNbJ0VGUyddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vRUZTLmpzb24nKSk7XG5leHBvcnRzWydFTVInXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0VNUi5qc29uJykpO1xuZXhwb3J0c1snRWxhc3RpQ2FjaGUnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0VsYXN0aUNhY2hlLmpzb24nKSk7XG5leHBvcnRzWydFbGFzdGljQmVhbnN0YWxrJ10gPSBTZXJ2aWNlKFxuICByZXF1aXJlKCcuL3N0dWJzL2pzb24vRWxhc3RpY0JlYW5zdGFsay5qc29uJylcbik7XG5leHBvcnRzWydFbGFzdGljTG9hZEJhbGFuY2luZyddID0gU2VydmljZShcbiAgcmVxdWlyZSgnLi9zdHVicy9qc29uL0VsYXN0aWNMb2FkQmFsYW5jaW5nLmpzb24nKVxuKTtcbmV4cG9ydHNbJ0VsYXN0aWNMb2FkQmFsYW5jaW5nVjInXSA9IFNlcnZpY2UoXG4gIHJlcXVpcmUoJy4vc3R1YnMvanNvbi9FbGFzdGljTG9hZEJhbGFuY2luZ1YyLmpzb24nKVxuKTtcbmV4cG9ydHNbJ0VsYXN0aWNzZWFyY2gnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0VsYXN0aWNzZWFyY2guanNvbicpKTtcbmV4cG9ydHNbJ0V2ZW50cyddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vRXZlbnRzLmpzb24nKSk7XG5leHBvcnRzWydHYW1lTGlmdCddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vR2FtZUxpZnQuanNvbicpKTtcbmV4cG9ydHNbJ0lBTSddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vSUFNLmpzb24nKSk7XG5leHBvcnRzWydJb1QnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0lvVC5qc29uJykpO1xuZXhwb3J0c1snS01TJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9LTVMuanNvbicpKTtcbmV4cG9ydHNbJ0tpbmVzaXMnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0tpbmVzaXMuanNvbicpKTtcbmV4cG9ydHNbJ0tpbmVzaXNGaXJlaG9zZSddID0gU2VydmljZShcbiAgcmVxdWlyZSgnLi9zdHVicy9qc29uL0tpbmVzaXNGaXJlaG9zZS5qc29uJylcbik7XG5leHBvcnRzWydMYW1iZGEnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL0xhbWJkYS5qc29uJykpO1xuZXhwb3J0c1snTG9ncyddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vTG9ncy5qc29uJykpO1xuZXhwb3J0c1snT3BzV29ya3MnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL09wc1dvcmtzLmpzb24nKSk7XG5leHBvcnRzWydSRFMnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL1JEUy5qc29uJykpO1xuZXhwb3J0c1snUmVkc2hpZnQnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL1JlZHNoaWZ0Lmpzb24nKSk7XG5leHBvcnRzWydSb3V0ZTUzJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9Sb3V0ZTUzLmpzb24nKSk7XG5leHBvcnRzWydTMyddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vUzMuanNvbicpKTtcbmV4cG9ydHNbJ1NEQiddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vU0RCLmpzb24nKSk7XG5leHBvcnRzWydTTlMnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL1NOUy5qc29uJykpO1xuZXhwb3J0c1snU1FTJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9TUVMuanNvbicpKTtcbmV4cG9ydHNbJ1NTTSddID0gU2VydmljZShyZXF1aXJlKCcuL3N0dWJzL2pzb24vU1NNLmpzb24nKSk7XG5leHBvcnRzWydTdGVwRnVuY3Rpb25zJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9TdGVwRnVuY3Rpb25zLmpzb24nKSk7XG5leHBvcnRzWydXQUYnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL1dBRi5qc29uJykpO1xuZXhwb3J0c1snV0FGUmVnaW9uYWwnXSA9IFNlcnZpY2UocmVxdWlyZSgnLi9zdHVicy9qc29uL1dBRlJlZ2lvbmFsLmpzb24nKSk7XG5leHBvcnRzWydXb3JrU3BhY2VzJ10gPSBTZXJ2aWNlKHJlcXVpcmUoJy4vc3R1YnMvanNvbi9Xb3JrU3BhY2VzLmpzb24nKSk7XG4iXX0=