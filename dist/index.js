'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// Components
var template_1 = require("./src/template");
exports.Template = template_1.Template;
var tag_1 = require("./src/tag");
exports.Tag = tag_1.Tag;
var tagset_1 = require("./src/tagset");
exports.TagSet = tagset_1.TagSet;
var intrinsic_1 = require("./src/intrinsic");
exports.Intrinsic = intrinsic_1.Intrinsic;
var parameter_1 = require("./src/parameter");
exports.Parameter = parameter_1.Parameter;
var resource_1 = require("./src/resource");
exports.WKResource = resource_1.WKResource;
var exceptions_1 = require("./src/exceptions");
exports.TypeException = exceptions_1.TypeException;
exports.RequiredPropertyException = exceptions_1.RequiredPropertyException;
exports.ValueException = exceptions_1.ValueException;
var output_1 = require("./src/output");
exports.Output = output_1.Output;
var mapping_1 = require("./src/mapping");
exports.Mapping = mapping_1.Mapping;
const service_1 = require("./src/service");
var service_2 = require("./src/service");
exports.Service = service_2.Service;
var macro_1 = require("./src/macro");
exports.Macro = macro_1.Macro;
var policy_1 = require("./src/policy");
exports.Policy = policy_1.Policy;
var resourceproperty_1 = require("./src/resourceproperty");
exports.ResourceProperty = resourceproperty_1.ResourceProperty;
var resourceattribute_1 = require("./src/resourceattribute");
exports.ResourceAttribute = resourceattribute_1.ResourceAttribute;
exports.Init = require('./src/init');
exports.Types = require('./src/types')();
// Services
exports.ApiGateway = new service_1.Service('ApiGateway');
exports.ApplicationAutoScaling = new service_1.Service('ApplicationAutoScaling');
exports.AutoScaling = new service_1.Service('AutoScaling');
exports.CertificateManager = new service_1.Service('CertificateManager');
exports.CloudFormation = new service_1.Service('CloudFormation');
exports.CloudFront = new service_1.Service('CloudFront');
exports.CloudTrail = new service_1.Service('CloudTrail');
exports.CloudWatch = new service_1.Service('CloudWatch');
exports.CodeBuild = new service_1.Service('CodeBuild');
exports.CodeCommit = new service_1.Service('CodeCommit');
exports.CodeDeploy = new service_1.Service('CodeDeploy');
exports.CodePipeline = new service_1.Service('CodePipeline');
exports.Config = new service_1.Service('Config');
exports.DataPipeline = new service_1.Service('DataPipeline');
exports.DirectoryService = new service_1.Service('DirectoryService');
exports.DynamoDB = new service_1.Service('DynamoDB');
exports.EC2 = new service_1.Service('EC2');
exports.ECR = new service_1.Service('ECR');
exports.ECS = new service_1.Service('ECS');
exports.EFS = new service_1.Service('EFS');
exports.ElastiCache = new service_1.Service('ElastiCache');
exports.ElasticBeanstalk = new service_1.Service('ElasticBeanstalk');
exports.ElasticLoadBalancing = new service_1.Service('ElasticLoadBalancing');
exports.ElasticLoadBalancingV2 = new service_1.Service('ElasticLoadBalancingV2');
exports.Elasticsearch = new service_1.Service('Elasticsearch');
exports.EMR = new service_1.Service('EMR');
exports.Events = new service_1.Service('Events');
exports.GameLift = new service_1.Service('GameLift');
exports.IAM = new service_1.Service('IAM');
exports.IoT = new service_1.Service('IoT');
exports.Kinesis = new service_1.Service('Kinesis');
exports.KinesisFirehose = new service_1.Service('KinesisFirehose');
exports.KMS = new service_1.Service('KMS');
exports.Lambda = new service_1.Service('Lambda');
exports.Logs = new service_1.Service('Logs');
exports.OpsWorks = new service_1.Service('OpsWorks');
exports.RDS = new service_1.Service('RDS');
exports.Redshift = new service_1.Service('Redshift');
exports.Route53 = new service_1.Service('Route53');
exports.S3 = new service_1.Service('S3');
exports.SDB = new service_1.Service('SDB');
exports.SNS = new service_1.Service('SNS');
exports.SQS = new service_1.Service('SQS');
exports.SSM = new service_1.Service('SSM');
exports.StepFunctions = new service_1.Service('StepFunctions');
exports.WAF = new service_1.Service('WAF');
exports.WorkSpaces = new service_1.Service('WorkSpaces');
// Pseudo-Parameters
exports.Pseudo = {
    AWS_ACCOUNT_ID: 'AWS::AccountId',
    AWS_NOTIFICATION_ARNS: 'AWS::NotificationARNs',
    AWS_NO_VALUE: 'AWS::NoValue',
    AWS_REGION: 'AWS::Region',
    AWS_STACK_ID: 'AWS::StackId',
    AWS_STACK_NAME: 'AWS::StackName'
};
