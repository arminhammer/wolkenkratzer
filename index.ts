'use strict';

// Components
export { Template } from './src/template';
export { Tag } from './src/tag';
export { TagSet } from './src/tagset';
export { Intrinsic } from './src/intrinsic';
export { Parameter } from './src/parameter';
export { WKResource } from './src/resource';
export { TypeException, RequiredPropertyException, ValueException } from './src/exceptions';
export { Output } from './src/output';
export { Mapping } from './src/mapping';
import { Service } from './src/service';
export { Service } from './src/service';
export { Macro } from './src/macro';
export { Policy } from './src/policy';
export { ResourceProperty } from './src/resourceproperty';
export { ResourceAttribute } from './src/resourceattribute';

export const Init = require('./src/init');
export const Types = require('./src/types')();

// Services
export const ApiGateway = new Service('ApiGateway');
export const ApplicationAutoScaling = new Service('ApplicationAutoScaling');
export const AutoScaling = new Service('AutoScaling');
export const CertificateManager = new Service('CertificateManager');
export const CloudFormation = new Service('CloudFormation');
export const CloudFront = new Service('CloudFront');
export const CloudTrail = new Service('CloudTrail');
export const CloudWatch = new Service('CloudWatch');
export const CodeBuild = new Service('CodeBuild');
export const CodeCommit = new Service('CodeCommit');
export const CodeDeploy = new Service('CodeDeploy');
export const CodePipeline = new Service('CodePipeline');
export const Config = new Service('Config');
export const DataPipeline = new Service('DataPipeline');
export const DirectoryService = new Service('DirectoryService');
export const DynamoDB = new Service('DynamoDB');
export const EC2 = new Service('EC2');
export const ECR = new Service('ECR');
export const ECS = new Service('ECS');
export const EFS = new Service('EFS');
export const ElastiCache = new Service('ElastiCache');
export const ElasticBeanstalk = new Service('ElasticBeanstalk');
export const ElasticLoadBalancing = new Service('ElasticLoadBalancing');
export const ElasticLoadBalancingV2 = new Service('ElasticLoadBalancingV2');
export const Elasticsearch = new Service('Elasticsearch');
export const EMR = new Service('EMR');
export const Events = new Service('Events');
export const GameLift = new Service('GameLift');
export const IAM = new Service('IAM');
export const IoT = new Service('IoT');
export const Kinesis = new Service('Kinesis');
export const KinesisFirehose = new Service('KinesisFirehose');
export const KMS = new Service('KMS');
export const Lambda = new Service('Lambda');
export const Logs = new Service('Logs');
export const OpsWorks = new Service('OpsWorks');
export const RDS = new Service('RDS');
export const Redshift = new Service('Redshift');
export const Route53 = new Service('Route53');
export const S3 = new Service('S3');
export const SDB = new Service('SDB');
export const SNS = new Service('SNS');
export const SQS = new Service('SQS');
export const SSM = new Service('SSM');
export const StepFunctions = new Service('StepFunctions');
export const WAF = new Service('WAF');
export const WorkSpaces = new Service('WorkSpaces');

// Pseudo-Parameters
export const Pseudo = {
  AWS_ACCOUNT_ID: 'AWS::AccountId',
  AWS_NOTIFICATION_ARNS: 'AWS::NotificationARNs',
  AWS_NO_VALUE: 'AWS::NoValue',
  AWS_REGION: 'AWS::Region',
  AWS_STACK_ID: 'AWS::StackId',
  AWS_STACK_NAME: 'AWS::StackName'
};
