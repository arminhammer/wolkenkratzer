/**
 * Created by arming on 6/2/16.
 */
'use strict'

const Template = require('./template').Template
const Tag = require('./tag').Tag
const TagSet = require('./tag').TagSet
const Intrinsic = require('./intrinsic')
const Ref = require('./intrinsic').Ref
const FnGetAtt = require('./intrinsic').FnGetAtt
const Parameter = require('./parameter').Parameter
const WKResource = require('./resource').WKResource
const ResourceProperty = require('./resource').ResourceProperty
const ResourceAttribute = require('./resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./resourceattribute').ResourceAttributeArray
const TypeException = require('./exceptions').TypeException
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const ValueException = require('./exceptions').ValueException
const Types = require('./types')()
// const Types = require('./types.old')()
const Output = require('./output').Output
const Init = require('./init')
const Policy = require('./policy')
const Mapping = require('./mapping').Mapping
const Macro = require('./macro')
const Service = require('./service')

const ApiGateway = Service('ApiGateway')
const ApplicationAutoScaling = Service('ApplicationAutoScaling')
const AutoScaling = Service('AutoScaling')
const CertificateManager = Service('CertificateManager')
const CloudFormation = Service('CloudFormation')
const CloudFront = Service('CloudFront')
const CloudTrail = Service('CloudTrail')
const CloudWatch = Service('CloudWatch')
const CodeDeploy = Service('CodeDeploy')
const CodePipeline = Service('CodePipeline')
const Config = Service('Config')
const DataPipeline = Service('DataPipeline')
const DirectoryService = Service('DirectoryService')
const DynamoDB = Service('DynamoDB')
const EC2 = Service('EC2')
const ECR = Service('ECR')
const ECS = Service('ECS')
const EFS = Service('EFS')
const ElastiCache = Service('ElastiCache')
const ElasticBeanstalk = Service('ElasticBeanstalk')
const ElasticLoadBalancing = Service('ElasticLoadBalancing')
const ElasticLoadBalancingV2 = Service('ElasticLoadBalancingV2')
const Elasticsearch = Service('Elasticsearch')
const EMR = Service('EMR')
const Events = Service('Events')
const GameLift = Service('GameLift')
const IAM = Service('IAM')
const IoT = Service('IOT')
const Kinesis = Service('Kinesis')
const KMS = Service('KMS')
const Lambda = Service('Lambda')
const Logs = Service('Logs')
const OpsWorks = Service('OpsWorks')
const RDS = Service('RDS')
const Redshift = Service('Redshift')
const Route53 = Service('Route53')
const S3 = Service('S3')
const SDB = Service('SDB')
const SNS = Service('SNS')
const SQS = Service('SQS')
const SSM = Service('SSM')
const WAF = Service('WAF')
const WorkSpaces = Service('WorkSpaces')

// Pseudo Parameters
const Pseudo = {
  AWS_ACCOUNT_ID: 'AWS::AccountId',
  AWS_NOTIFICATION_ARNS: 'AWS::NotificationARNs',
  AWS_NO_VALUE: 'AWS::NoValue',
  AWS_REGION: 'AWS::Region',
  AWS_STACK_ID: 'AWS::StackId',
  AWS_STACK_NAME: 'AWS::StackName'
}

module.exports = {
  ApiGateway: ApiGateway,
  ApplicationAutoScaling: ApplicationAutoScaling,
  AutoScaling: AutoScaling,
  CertificateManager: CertificateManager,
  CloudFormation: CloudFormation,
  CloudFront: CloudFront,
  CloudTrail: CloudTrail,
  CloudWatch: CloudWatch,
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
}
