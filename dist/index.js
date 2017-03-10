'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// Components
const template_1 = require("./src/template");
const tag_1 = require("./src/tag");
const Intrinsic = require("./src/intrinsic");
const intrinsic_1 = require("./src/intrinsic");
const Parameter = require('./src/parameter').Parameter;
const resource_1 = require("./src/resource");
const ResourceProperty = require('./src/resourceproperty').ResourceProperty;
const ResourceAttribute = require('./src/resourceattribute').ResourceAttribute;
const ResourceAttributeArray = require('./src/resourceattribute').ResourceAttributeArray;
const exceptions_1 = require("./src/exceptions");
const Types = require('./src/types')();
const Output = require('./src/output').Output;
const Init = require('./src/init');
const Policy = require('./src/policy');
const Mapping = require('./src/mapping').Mapping;
const Macro = require('./src/macro');
const service_1 = require("./src/service");
// Services
const ApiGateway = new service_1.Service('ApiGateway');
const ApplicationAutoScaling = new service_1.Service('ApplicationAutoScaling');
const AutoScaling = new service_1.Service('AutoScaling');
const CertificateManager = new service_1.Service('CertificateManager');
const CloudFormation = new service_1.Service('CloudFormation');
const CloudFront = new service_1.Service('CloudFront');
const CloudTrail = new service_1.Service('CloudTrail');
const CloudWatch = new service_1.Service('CloudWatch');
const CodeBuild = new service_1.Service('CodeBuild');
const CodeCommit = new service_1.Service('CodeCommit');
const CodeDeploy = new service_1.Service('CodeDeploy');
const CodePipeline = new service_1.Service('CodePipeline');
const Config = new service_1.Service('Config');
const DataPipeline = new service_1.Service('DataPipeline');
const DirectoryService = new service_1.Service('DirectoryService');
const DynamoDB = new service_1.Service('DynamoDB');
const EC2 = new service_1.Service('EC2');
const ECR = new service_1.Service('ECR');
const ECS = new service_1.Service('ECS');
const EFS = new service_1.Service('EFS');
const ElastiCache = new service_1.Service('ElastiCache');
const ElasticBeanstalk = new service_1.Service('ElasticBeanstalk');
const ElasticLoadBalancing = new service_1.Service('ElasticLoadBalancing');
const ElasticLoadBalancingV2 = new service_1.Service('ElasticLoadBalancingV2');
const Elasticsearch = new service_1.Service('Elasticsearch');
const EMR = new service_1.Service('EMR');
const Events = new service_1.Service('Events');
const GameLift = new service_1.Service('GameLift');
const IAM = new service_1.Service('IAM');
const IoT = new service_1.Service('IoT');
const Kinesis = new service_1.Service('Kinesis');
const KinesisFirehose = new service_1.Service('KinesisFirehose');
const KMS = new service_1.Service('KMS');
const Lambda = new service_1.Service('Lambda');
const Logs = new service_1.Service('Logs');
const OpsWorks = new service_1.Service('OpsWorks');
const RDS = new service_1.Service('RDS');
const Redshift = new service_1.Service('Redshift');
const Route53 = new service_1.Service('Route53');
const S3 = new service_1.Service('S3');
const SDB = new service_1.Service('SDB');
const SNS = new service_1.Service('SNS');
const SQS = new service_1.Service('SQS');
const SSM = new service_1.Service('SSM');
const StepFunctions = new service_1.Service('StepFunctions');
const WAF = new service_1.Service('WAF');
const WorkSpaces = new service_1.Service('WorkSpaces');
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
    Template: template_1.Template,
    WKResource: resource_1.WKResource,
    ResourceProperty: ResourceProperty,
    Parameter: Parameter,
    Types: Types,
    ResourceAttribute: ResourceAttribute,
    ResourceAttributeArray: ResourceAttributeArray,
    TagSet: tag_1.TagSet,
    Tag: tag_1.Tag,
    Ref: intrinsic_1.Ref,
    Init: Init,
    Intrinsic: Intrinsic,
    Output: Output,
    Policy: Policy,
    TypeException: exceptions_1.TypeException,
    RequiredPropertyException: exceptions_1.RequiredPropertyException,
    ValueException: exceptions_1.ValueException,
    FnGetAtt: intrinsic_1.FnGetAtt,
    Mapping: Mapping,
    Pseudo: Pseudo
};
