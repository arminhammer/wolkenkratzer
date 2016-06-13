/**
 * Created by arming on 6/3/16.
 */
'use strict'

const cloudpotato = require('./../index')

/*
 AWS::EC2::CustomerGateway
 AWS::EC2::DHCPOptions
 AWS::EC2::EIP
 AWS::EC2::EIPAssociation
 AWS::EC2::Host
 */

class Instance extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new cloudpotato.ResourceProperty(String, false, null),
      AvailabilityZone: new cloudpotato.ResourceProperty(String, false, null),
      // BlockDeviceMappings: new cloudpotato.ResourceProperty(String, false, null),[ EC2 Block Device Mapping, ... ],
      DisableApiTermination: new cloudpotato.ResourceProperty(Boolean, false, null),
      EbsOptimized: new cloudpotato.ResourceProperty(Boolean, false, null),
      HostId: new cloudpotato.ResourceProperty(String, false, null),
      IamInstanceProfile: new cloudpotato.ResourceProperty(String, false, null),
      ImageId: new cloudpotato.ResourceProperty(String, true, null),
      InstanceInitiatedShutdownBehavior: new cloudpotato.ResourceProperty(String, false, null),
      InstanceType: new cloudpotato.ResourceProperty(String, false, null),
      KernelId: new cloudpotato.ResourceProperty(String, false, null),
      KeyName: new cloudpotato.ResourceProperty(String, false, null),
      Monitoring: new cloudpotato.ResourceProperty(Boolean, false, null),
      // NetworkInterfaces: new cloudpotato.ResourceProperty(String, false, null),[ EC2 Network Interface, ... ],
      PlacementGroupName: new cloudpotato.ResourceProperty(String, false, null),
      PrivateIpAddress: new cloudpotato.ResourceProperty(String, false, null),
      RamdiskId: new cloudpotato.ResourceProperty(String, false, null),
      // SecurityGroupIds: new cloudpotato.ResourceProperty(String, false, null),[ String, ... ],
      // SecurityGroups: new cloudpotato.ResourceProperty(String, false, null),[ String, ... ],
      SourceDestCheck: new cloudpotato.ResourceProperty(Boolean, false, null),
      // SsmAssociations: new cloudpotato.ResourceProperty(String, false, null),[ SSMAssociation, ... ]
      SubnetId: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet(),
      Tenancy: new cloudpotato.ResourceProperty(String, false, null),
      UserData: new cloudpotato.ResourceProperty(String, false, null),
      // Volumes: new cloudpotato.ResourceProperty(String, false, null),[ EC2 MountPoint, ... ],
      AdditionalInfo: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InternetGateway extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new cloudpotato.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::NatGateway
 AWS::EC2::NetworkAcl
 AWS::EC2::NetworkAclEntry
 AWS::EC2::NetworkInterface
 AWS::EC2::NetworkInterfaceAttachment
 AWS::EC2::PlacementGroup
 AWS::EC2::Route
 AWS::EC2::RouteTable
 AWS::EC2::SecurityGroup
 AWS::EC2::SecurityGroupEgress
 AWS::EC2::SecurityGroupIngress
 AWS::EC2::SpotFleet
 AWS::EC2::Subnet
 AWS::EC2::SubnetNetworkAclAssociation
 AWS::EC2::SubnetRouteTableAssociation
 AWS::EC2::Volume
 AWS::EC2::VolumeAttachment
 */

class VPC extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new cloudpotato.ResourceProperty(String, true, null),
      EnableDnsSupport: new cloudpotato.ResourceProperty(Boolean, false, null),
      EnableDnsHostnames: new cloudpotato.ResourceProperty(Boolean, false, null),
      InstanceTenancy: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::VPCDHCPOptionsAssociation
 AWS::EC2::VPCEndpoint
 */

class VPCGatewayAttachment extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      'InternetGatewayId': new cloudpotato.ResourceProperty(String, false, null),
      'VpcId': new cloudpotato.ResourceProperty(String, true, null),
      'VpnGatewayId': new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/* AWS::EC2::VPCPeeringConnection
 AWS::EC2::VPNConnection
 AWS::EC2::VPNConnectionRoute
 AWS::EC2::VPNGateway
 AWS::EC2::VPNGatewayRoutePropagation
 */

module.exports = {
  Instance: Instance,
  InternetGateway: InternetGateway,
  VPC: VPC,
  VPCGatewayAttachment: VPCGatewayAttachment
}

/*
 AWS::ApiGateway::Account
 AWS::ApiGateway::ApiKey
 AWS::ApiGateway::Authorizer
 AWS::ApiGateway::BasePathMapping
 AWS::ApiGateway::ClientCertificate
 AWS::ApiGateway::Deployment
 AWS::ApiGateway::Method
 AWS::ApiGateway::Model
 AWS::ApiGateway::Resource
 AWS::ApiGateway::RestApi
 AWS::ApiGateway::Stage
 AWS::AutoScaling::AutoScalingGroup
 AWS::AutoScaling::LaunchConfiguration
 AWS::AutoScaling::LifecycleHook
 AWS::AutoScaling::ScalingPolicy
 AWS::AutoScaling::ScheduledAction
 AWS::CloudFormation::Authentication
 AWS::CloudFormation::CustomResource
 AWS::CloudFormation::Init
 AWS::CloudFormation::Interface
 AWS::CloudFormation::Stack
 AWS::CloudFormation::WaitCondition
 AWS::CloudFormation::WaitConditionHandle
 AWS::CloudFront::Distribution
 AWS::CloudTrail::Trail
 AWS::CloudWatch::Alarm
 AWS::CodeDeploy::Application
 AWS::CodeDeploy::DeploymentConfig
 AWS::CodeDeploy::DeploymentGroup
 AWS::CodePipeline::CustomActionType
 AWS::CodePipeline::Pipeline
 AWS::Config::ConfigRule
 AWS::Config::ConfigurationRecorder
 AWS::Config::DeliveryChannel
 AWS::DataPipeline::Pipeline
 AWS::DirectoryService::MicrosoftAD
 AWS::DirectoryService::SimpleAD
 AWS::DynamoDB::Table
 AWS::ECR::Repository
 AWS::ECS::Cluster
 AWS::ECS::Service
 AWS::ECS::TaskDefinition
 AWS::EFS::FileSystem
 AWS::EFS::MountTarget
 AWS::ElastiCache::CacheCluster
 AWS::ElastiCache::ParameterGroup
 AWS::ElastiCache::ReplicationGroup
 AWS::ElastiCache::SecurityGroup
 AWS::ElastiCache::SecurityGroupIngress
 AWS::ElastiCache::SubnetGroup
 AWS::ElasticBeanstalk::Application
 AWS::ElasticBeanstalk::ApplicationVersion
 AWS::ElasticBeanstalk::ConfigurationTemplate
 AWS::ElasticBeanstalk::Environment
 AWS::ElasticLoadBalancing::LoadBalancer
 AWS::Elasticsearch::Domain
 AWS::EMR::Cluster
 AWS::EMR::InstanceGroupConfig
 AWS::EMR::Step
 AWS::Events::Rule
 AWS::GameLift::Alias
 AWS::GameLift::Build
 AWS::GameLift::Fleet
 AWS::IAM::AccessKey
 AWS::IAM::Group
 AWS::IAM::InstanceProfile
 AWS::IAM::ManagedPolicy
 AWS::IAM::Policy
 AWS::IAM::Role
 AWS::IAM::User
 AWS::IAM::UserToGroupAddition
 AWS::Kinesis::Stream
 AWS::KMS::Key
 AWS::Lambda::EventSourceMapping
 AWS::Lambda::Alias
 AWS::Lambda::Function
 AWS::Lambda::Permission
 AWS::Lambda::Version
 AWS::Logs::Destination
 AWS::Logs::LogGroup
 AWS::Logs::LogStream
 AWS::Logs::MetricFilter
 AWS::Logs::SubscriptionFilter
 AWS::OpsWorks::App
 AWS::OpsWorks::ElasticLoadBalancerAttachment
 AWS::OpsWorks::Instance
 AWS::OpsWorks::Layer
 AWS::OpsWorks::Stack
 AWS::RDS::DBCluster
 AWS::RDS::DBClusterParameterGroup
 AWS::RDS::DBInstance
 AWS::RDS::DBParameterGroup
 AWS::RDS::DBSecurityGroup
 AWS::RDS::DBSecurityGroupIngress
 AWS::RDS::DBSubnetGroup
 AWS::RDS::EventSubscription
 AWS::RDS::OptionGroup
 AWS::Redshift::Cluster
 AWS::Redshift::ClusterParameterGroup
 AWS::Redshift::ClusterSecurityGroup
 AWS::Redshift::ClusterSecurityGroupIngress
 AWS::Redshift::ClusterSubnetGroup
 AWS::Route53::HealthCheck
 AWS::Route53::HostedZone
 AWS::Route53::RecordSet
 AWS::Route53::RecordSetGroup
 AWS::S3::Bucket
 AWS::S3::BucketPolicy
 AWS::SDB::Domain
 AWS::SNS::Topic
 AWS::SNS::TopicPolicy
 AWS::SQS::Queue
 AWS::SQS::QueuePolicy
 AWS::SSM::Document
 AWS::WAF::ByteMatchSet
 AWS::WAF::IPSet
 AWS::WAF::Rule
 AWS::WAF::SizeConstraintSet
 AWS::WAF::SqlInjectionMatchSet
 AWS::WAF::WebACL
 AWS::WAF::XssMatchSet
 AWS::WorkSpaces::Workspace
 */
