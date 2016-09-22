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
const Types = require('./types')
const Output = require('./output').Output
const Init = require('./init')
const Policy = require('./policy')
const Mapping = require('./mapping').Mapping
const Macro = require('./macro')

const ApiGateway = require('./resources/apigateway')
const ApplicationAutoScaling = require('./resources/applicationautoscaling')
const AutoScaling = require('./resources/autoscaling')
const CertificateManager = require('./resources/certificatemanager')
const CloudFormation = require('./resources/cloudformation')
const CloudFront = require('./resources/cloudfront')
const CloudTrail = require('./resources/cloudtrail')
const CloudWatch = require('./resources/cloudwatch')
const CodeDeploy = require('./resources/codedeploy')
const CodePipeline = require('./resources/codepipeline')
const Config = require('./resources/config')
const DataPipeline = require('./resources/datapipeline')
const DirectoryService = require('./resources/directoryservice')
const DynamoDB = require('./resources/dynamodb')
const EC2 = require('./resources/ec2')
const ECR = require('./resources/ecr')
const ECS = require('./resources/ecs')
const EFS = require('./resources/efs')
const ElastiCache = require('./resources/elasticache')
const ElasticBeanstalk = require('./resources/elasticbeanstalk')
const ElasticLoadBalancing = require('./resources/elasticloadbalancing')
const ElasticLoadBalancingV2 = require('./resources/elasticloadbalancingv2')
const ElasticSearch = require('./resources/elasticsearch')
const EMR = require('./resources/emr')
const Events = require('./resources/events')
const GameLift = require('./resources/gamelift')
const IAM = require('./resources/iam')
const IoT = require('./resources/iot')
const Kinesis = require('./resources/kinesis')
const KMS = require('./resources/kms')
const Lambda = require('./resources/lambda')
const Logs = require('./resources/logs')
const OpsWorks = require('./resources/opsworks')
const RDS = require('./resources/rds')
const Redshift = require('./resources/redshift')
const Route53 = require('./resources/route53')
const S3 = require('./resources/s3')
const SDB = require('./resources/sdb')
const SNS = require('./resources/sns')
const SQS = require('./resources/sqs')
const SSM = require('./resources/ssm')
const WAF = require('./resources/waf')
const WorkSpaces = require('./resources/workspaces')

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
  ElasticSearch: ElasticSearch,
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
