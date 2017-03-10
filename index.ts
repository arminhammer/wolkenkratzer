'use strict';

// Components
import { Template } from './src/template';
import { Tag, TagSet } from './src/tag';
import * as Intrinsic from './src/intrinsic';
import { FnGetAtt, Ref } from './src/intrinsic';
const Parameter = require('./src/parameter').Parameter;
import { WKResource } from './src/resource';
const ResourceProperty = require('./src/resourceproperty').ResourceProperty;
const ResourceAttribute = require('./src/resourceattribute').ResourceAttribute;
const ResourceAttributeArray = require('./src/resourceattribute').ResourceAttributeArray;
import { TypeException, RequiredPropertyException, ValueException } from './src/exceptions';
const Types = require('./src/types')();
const Output = require('./src/output').Output;
const Init = require('./src/init');
const Policy = require('./src/policy');
const Mapping = require('./src/mapping').Mapping;
const Macro = require('./src/macro');
import { Service } from './src/service';

// Services
const ApiGateway = new Service('ApiGateway');
const ApplicationAutoScaling = new Service('ApplicationAutoScaling');
const AutoScaling = new Service('AutoScaling');
const CertificateManager = new Service('CertificateManager');
const CloudFormation = new Service('CloudFormation');
const CloudFront = new Service('CloudFront');
const CloudTrail = new Service('CloudTrail');
const CloudWatch = new Service('CloudWatch');
const CodeBuild = new Service('CodeBuild');
const CodeCommit = new Service('CodeCommit');
const CodeDeploy = new Service('CodeDeploy');
const CodePipeline = new Service('CodePipeline');
const Config = new Service('Config');
const DataPipeline = new Service('DataPipeline');
const DirectoryService = new Service('DirectoryService');
const DynamoDB = new Service('DynamoDB');
const EC2 = new Service('EC2');
const ECR = new Service('ECR');
const ECS = new Service('ECS');
const EFS = new Service('EFS');
const ElastiCache = new Service('ElastiCache');
const ElasticBeanstalk = new Service('ElasticBeanstalk');
const ElasticLoadBalancing = new Service('ElasticLoadBalancing');
const ElasticLoadBalancingV2 = new Service('ElasticLoadBalancingV2');
const Elasticsearch = new Service('Elasticsearch');
const EMR = new Service('EMR');
const Events = new Service('Events');
const GameLift = new Service('GameLift');
const IAM = new Service('IAM');
const IoT = new Service('IoT');
const Kinesis = new Service('Kinesis');
const KinesisFirehose = new Service('KinesisFirehose');
const KMS = new Service('KMS');
const Lambda = new Service('Lambda');
const Logs = new Service('Logs');
const OpsWorks = new Service('OpsWorks');
const RDS = new Service('RDS');
const Redshift = new Service('Redshift');
const Route53 = new Service('Route53');
const S3 = new Service('S3');
const SDB = new Service('SDB');
const SNS = new Service('SNS');
const SQS = new Service('SQS');
const SSM = new Service('SSM');
const StepFunctions = new Service('StepFunctions');
const WAF = new Service('WAF');
const WorkSpaces = new Service('WorkSpaces');

// Pseudo-Parameters
const Pseudo = {
  AWS_ACCOUNT_ID: 'AWS::AccountId',
  AWS_NOTIFICATION_ARNS: 'AWS::NotificationARNs',
  AWS_NO_VALUE: 'AWS::NoValue',
  AWS_REGION: 'AWS::Region',
  AWS_STACK_ID: 'AWS::StackId',
  AWS_STACK_NAME: 'AWS::StackName'
};

// Exports
module.exports = {
  ApiGateway: ApiGateway,
  ApplicationAutoScaling: ApplicationAutoScaling,
  AutoScaling: AutoScaling,
  CertificateManager: CertificateManager,
  CloudFormation: CloudFormation,
  CloudFront: CloudFront,
  CloudTrail: CloudTrail,
  CloudWatch: CloudWatch,
  CodeBuild: CodeBuild,
  CodeCommit: CodeCommit,
  CodeDeploy: CodeDeploy,
  CodePipeline: CodePipeline,
  Config: Config,
  DataPipeline: DataPipeline,
  DirectoryService: DirectoryService,
  DynamoDB: DynamoDB,
  EC2: EC2,
  ECR: ECR,
  ECS: ECS,
  EFS: EFS,
  ElastiCache: ElastiCache,
  ElasticBeanstalk: ElasticBeanstalk,
  ElasticLoadBalancing: ElasticLoadBalancing,
  ElasticLoadBalancingV2: ElasticLoadBalancingV2,
  Elasticsearch: Elasticsearch,
  EMR: EMR,
  Events: Events,
  GameLift: GameLift,
  IAM: IAM,
  IoT: IoT,
  Kinesis: Kinesis,
  KinesisFirehose: KinesisFirehose,
  KMS: KMS,
  Lambda: Lambda,
  Logs: Logs,
  Macro: Macro,
  OpsWorks: OpsWorks,
  RDS: RDS,
  Redshift: Redshift,
  Route53: Route53,
  S3: S3,
  SDB: SDB,
  SNS: SNS,
  SQS: SQS,
  SSM: SSM,
  StepFunctions: StepFunctions,
  WAF: WAF,
  WorkSpaces: WorkSpaces,
  Template: Template,
  WKResource: WKResource,
  ResourceProperty: ResourceProperty,
  Parameter: Parameter,
  Types: Types,
  ResourceAttribute: ResourceAttribute,
  ResourceAttributeArray: ResourceAttributeArray,
  TagSet: TagSet,
  Tag: Tag,
  Ref: Ref,
  Init: Init,
  Intrinsic: Intrinsic,
  Output: Output,
  Policy: Policy,
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException,
  FnGetAtt: FnGetAtt,
  Mapping: Mapping,
  Pseudo: Pseudo
};
