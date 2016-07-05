/**
 * Created by arming on 6/2/16.
 */
'use strict'
const path = require('path')
const Template = require('./template').Template
const Tag = require('./tag').Tag
const TagSet = require('./tag').TagSet
const Intrinsic = require('./intrinsic')
const Ref = require('./intrinsic').Ref
const FnGetAtt = require('./intrinsic').FnGetAtt
const Parameter = require('./parameter').Parameter
// const BaseAWSObject = require('./baseawsobject').BaseAWSObject
const SubPropertyObject = require('./baseawsobject').SubPropertyObject
const ResourceProperty = require('./resourceproperty').ResourceProperty
const ResourceArray = require('./resourceproperty').ResourceArray
const TypeException = require('./exceptions').TypeException
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const ValueException = require('./exceptions').ValueException
const Types = require('./types')
const Output = require('./output').Output
const Init = require('./init')
const Policy = require('./policy')

const ApiGateway = require(path.join(__dirname, 'resources/apigateway'))
const AutoScaling = require(path.join(__dirname, 'resources/autoscaling'))
const CloudFormation = require(path.join(__dirname, 'resources/cloudformation'))

const CloudFront = require(path.join(__dirname, 'resources/cloudfront'))
const CloudTrail = require(path.join(__dirname, 'resources/cloudtrail'))
const CloudWatch = require(path.join(__dirname, 'resources/cloudwatch'))
const CodeDeploy = require(path.join(__dirname, 'resources/codedeploy'))
const CodePipeline = require(path.join(__dirname, 'resources/codepipeline'))
const Config = require(path.join(__dirname, 'resources/config'))
const DataPipeline = require(path.join(__dirname, 'resources/datapipeline'))
const DirectoryService = require(path.join(__dirname, 'resources/directoryservice'))
const DynamoDB = require(path.join(__dirname, 'resources/dynamodb'))
const EC2 = require('./resources/ec2')
const ECR = require(path.join(__dirname, 'resources/ecr'))
const ECS = require(path.join(__dirname, 'resources/ecs'))
const EFS = require(path.join(__dirname, 'resources/efs'))
const ElastiCache = require(path.join(__dirname, 'resources/elasticache'))
const ElasticBeanstalk = require(path.join(__dirname, 'resources/elasticbeanstalk'))
const ElasticLoadbalancing = require(path.join(__dirname, 'resources/elasticloadbalancing'))
const ElasticSearch = require(path.join(__dirname, 'resources/elasticsearch'))
const EMR = require(path.join(__dirname, 'resources/emr'))
const Events = require(path.join(__dirname, 'resources/events'))
const GameLift = require(path.join(__dirname, 'resources/gamelift'))
const IAM = require(path.join(__dirname, 'resources/iam'))
const Kinesis = require(path.join(__dirname, 'resources/kinesis'))
const KMS = require(path.join(__dirname, 'resources/kms'))
/*const lambda = require(path.join(__dirname, 'resources/lambda'))*/
const Logs = require(path.join(__dirname, 'resources/logs'))
const OpsWorks = require(path.join(__dirname, 'resources/opsworks'))
const RDS = require(path.join(__dirname, 'resources/rds'))
const Redshift = require(path.join(__dirname, 'resources/redshift'))
const Route53 = require(path.join(__dirname, 'resources/route53'))
const S3 = require('./resources/s3')
const SDB = require(path.join(__dirname, 'resources/sdb'))
const SNS = require(path.join(__dirname, 'resources/sns'))
const SQS = require(path.join(__dirname, 'resources/sqs'))
const SSM = require(path.join(__dirname, 'resources/ssm'))
const WAF = require(path.join(__dirname, 'resources/waf'))
const WorkSpaces = require(path.join(__dirname, 'resources/workspaces'))

// constants for DeletionPolicy
/* const Delete = 'Delete'
const Retain = 'Retain'
const Snapshot = 'Snapshot'*/

// Pseudo Parameters
/* const AWS_ACCOUNT_ID = 'AWS::AccountId'
const AWS_NOTIFICATION_ARNS = 'AWS::NotificationARNs'
const AWS_NO_VALUE = 'AWS::NoValue'
const AWS_REGION = 'AWS::Region'
const AWS_STACK_ID = 'AWS::StackId'
const AWS_STACK_NAME = 'AWS::StackName'*/

module.exports = {
  ApiGateway: ApiGateway,
  AutoScaling: AutoScaling,
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
  ECR:ECR,
  ECS:ECS,
  EFS:EFS,
  ElastiCache:ElastiCache,
  ElasticBeanstalk:ElasticBeanstalk,
  ElasticLoadbalancing:ElasticLoadbalancing,
  ElasticSearch:ElasticSearch,
  EMR:EMR,
  Events:Events,
  GameLift:GameLift,
  IAM:IAM,
  Kinesis:Kinesis,
  KMS:KMS,
  /*const lambda:lambda,*/
  Logs:Logs,
  OpsWorks:OpsWorks,
  RDS:RDS,
  Redshift:Redshift,
  Route53:Route53,
  S3: S3,
  SDB:SDB,
  SNS:SNS,
  SQS:SQS,
  SSM:SSM,
  WAF:WAF,
  WorkSpaces:WorkSpaces,
  Template: Template,
  SubPropertyObject: SubPropertyObject,
  Parameter: Parameter,
  Types: Types,
  ResourceProperty: ResourceProperty,
  ResourceArray: ResourceArray,
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
  FnGetAtt: FnGetAtt
}
