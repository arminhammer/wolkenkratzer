'use strict';

//Components
const Template = require('./src/template').Template;
const Tag = require('./src/tag').Tag;
const TagSet = require('./src/tag').TagSet;
const Intrinsic = require('./src/intrinsic');
const Ref = require('./src/intrinsic').Ref;
const FnGetAtt = require('./src/intrinsic').FnGetAtt;
const Parameter = require('./src/parameter').Parameter;
const WKResource = require('./src/resource').WKResource;
const ResourceProperty = require('./src/resource').ResourceProperty;
const ResourceAttribute = require('./src/resourceattribute').ResourceAttribute;
const ResourceAttributeArray = require(
  './src/resourceattribute'
).ResourceAttributeArray;
const TypeException = require('./src/exceptions').TypeException;
const RequiredPropertyException = require(
  './src/exceptions'
).RequiredPropertyException;
const ValueException = require('./src/exceptions').ValueException;
const Types = require('./src/types')();
const Output = require('./src/output').Output;
const Init = require('./src/init');
const Policy = require('./src/policy');
const Mapping = require('./src/mapping').Mapping;
const Macro = require('./src/macro');
const Service = require('./src/service');

// Services
const ApiGateway = Service('ApiGateway');
const ApplicationAutoScaling = Service('ApplicationAutoScaling');
const AutoScaling = Service('AutoScaling');
const CertificateManager = Service('CertificateManager');
const CloudFormation = Service('CloudFormation');
const CloudFront = Service('CloudFront');
const CloudTrail = Service('CloudTrail');
const CloudWatch = Service('CloudWatch');
const CodeBuild = Service('CodeBuild');
const CodeCommit = Service('CodeCommit');
const CodeDeploy = Service('CodeDeploy');
const CodePipeline = Service('CodePipeline');
const Config = Service('Config');
const DataPipeline = Service('DataPipeline');
const DirectoryService = Service('DirectoryService');
const DynamoDB = Service('DynamoDB');
const EC2 = Service('EC2');
const ECR = Service('ECR');
const ECS = Service('ECS');
const EFS = Service('EFS');
const ElastiCache = Service('ElastiCache');
const ElasticBeanstalk = Service('ElasticBeanstalk');
const ElasticLoadBalancing = Service('ElasticLoadBalancing');
const ElasticLoadBalancingV2 = Service('ElasticLoadBalancingV2');
const Elasticsearch = Service('Elasticsearch');
const EMR = Service('EMR');
const Events = Service('Events');
const GameLift = Service('GameLift');
const IAM = Service('IAM');
const IoT = Service('IoT');
const Kinesis = Service('Kinesis');
const KinesisFirehose = Service('KinesisFirehose');
const KMS = Service('KMS');
const Lambda = Service('Lambda');
const Logs = Service('Logs');
const OpsWorks = Service('OpsWorks');
const RDS = Service('RDS');
const Redshift = Service('Redshift');
const Route53 = Service('Route53');
const S3 = Service('S3');
const SDB = Service('SDB');
const SNS = Service('SNS');
const SQS = Service('SQS');
const SSM = Service('SSM');
const StepFunctions = Service('StepFunctions');
const WAF = Service('WAF');
const WorkSpaces = Service('WorkSpaces');

// Pseudo-Parameters
const Pseudo = {
  AWS_ACCOUNT_ID: 'AWS::AccountId',
  AWS_NOTIFICATION_ARNS: 'AWS::NotificationARNs',
  AWS_NO_VALUE: 'AWS::NoValue',
  AWS_REGION: 'AWS::Region',
  AWS_STACK_ID: 'AWS::StackId',
  AWS_STACK_NAME: 'AWS::StackName'
};

//Exports
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
