/**
 * Created by arming on 6/3/16.
 */
'use strict'

const cloudpotato = require('./../index')
const ConditionNotMetException = require('../exceptions').ConditionNotMetException

/*
 AWS::EC2::CustomerGateway
 AWS::EC2::DHCPOptions
 */

class EIP extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new cloudpotato.ResourceProperty(String, false, null),
      Domain: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/* AWS::EC2::EIPAssociation
 AWS::EC2::Host
 */

class AmazonElasticBlockStoreBlockDeviceProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new cloudpotato.ResourceProperty(Boolean, false, null),
      Encrypted: new cloudpotato.ResourceProperty(Boolean, false, null),
      Iops: new cloudpotato.ResourceProperty(Number, false, null),
      SnapshotId: new cloudpotato.ResourceProperty(String, false, null),
      VolumeSize: new cloudpotato.ResourceProperty(String, false, null),
      VolumeType: new cloudpotato.ResourceProperty(String, false, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new cloudpotato.ResourceProperty(String, true, null),
      Ebs: new cloudpotato.ResourceProperty(AmazonElasticBlockStoreBlockDeviceProperty, false, null),
      NoDevice: new cloudpotato.ResourceProperty(Object, false, null),
      VirtualName: new cloudpotato.ResourceProperty(String, false, null),
    }
    super(properties, propertiesObject)
  }
}

class Instance extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new cloudpotato.ResourceProperty(String, false, null),
      AvailabilityZone: new cloudpotato.ResourceProperty(String, false, null),
      BlockDeviceMappings: new cloudpotato.ResourceArray(AmazonEC2BlockDeviceMappingProperty, false, null),
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
      SecurityGroupIds: new cloudpotato.ResourceArray(String, false, null),
      SecurityGroups: new cloudpotato.ResourceArray(String, false, null),
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

class NatGateway extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new cloudpotato.ResourceProperty(String, true, null),
      SubnetId: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::NetworkAcl
 AWS::EC2::NetworkAclEntry
 AWS::EC2::NetworkInterface
 AWS::EC2::NetworkInterfaceAttachment
 AWS::EC2::PlacementGroup
 */

class Route extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new cloudpotato.ResourceProperty(String, true, null),
      GatewayId: new cloudpotato.ResourceProperty(String, false, null),
      InstanceId: new cloudpotato.ResourceProperty(String, false, null),
      NatGatewayId: new cloudpotato.ResourceProperty(String, false, null),
      NetworkInterfaceId: new cloudpotato.ResourceProperty(String, false, null),
      RouteTableId: new cloudpotato.ResourceProperty(String, true, null),
      VpcPeeringConnectionId: new cloudpotato.ResourceProperty(String, false, null),
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new cloudpotato.ResourceProperty(String, true, null),
      Tags: new cloudpotato.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::SecurityGroup
 AWS::EC2::SecurityGroupEgress
 AWS::EC2::SecurityGroupIngress
 AWS::EC2::SpotFleet
 */

class Subnet extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new cloudpotato.ResourceProperty(String, false, null),
      CidrBlock: new cloudpotato.ResourceProperty(String, true, null),
      MapPublicIpOnLaunch: new cloudpotato.ResourceProperty(Boolean, false, null),
      Tags: new cloudpotato.TagSet(),
      VpcId: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::Subnet
 AWS::EC2::SubnetNetworkAclAssociation
 */

class SubnetRouteTableAssociation extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new cloudpotato.ResourceProperty(String, true, null),
      SubnetId: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/* AWS::EC2::Volume
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
  constructor (name, propertiesObject, vpcGatewayAttachmentConditional) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      'InternetGatewayId': new cloudpotato.ResourceProperty(String, false, null),
      'VpcId': new cloudpotato.ResourceProperty(String, true, null),
      'VpnGatewayId': new cloudpotato.ResourceProperty(String, false, null)
    }
    let conditional = (properties) => {
      if((properties.InternetGatewayId.val !== null) && (properties.VpnGatewayId.val !== null)) {
        throw new ConditionNotMetException('You must specify either InternetGatewayId or VpnGatewayId, but not both.')
      }
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

/* AWS::EC2::VPCPeeringConnection
 AWS::EC2::VPNConnection
 AWS::EC2::VPNConnectionRoute
 */

class VPNGateway extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new cloudpotato.ResourceProperty(String, true, null),
      Tags: new cloudpotato.TagSet()
    }
    let conditional = (properties) => {
      if(properties.Type.val !== 'ipsec.1') {
        throw new ConditionNotMetException('The only valid value for Type is "ipsec.1"')
      }
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}


/*AWS::EC2::VPNGatewayRoutePropagation
 */

module.exports = {
  AmazonElasticBlockStoreBlockDeviceProperty: AmazonElasticBlockStoreBlockDeviceProperty,
  AmazonEC2BlockDeviceMappingProperty: AmazonEC2BlockDeviceMappingProperty,
  EIP: EIP,
  Instance: Instance,
  InternetGateway: InternetGateway,
  NatGateway: NatGateway,
  Route: Route,
  RouteTable: RouteTable,
  Subnet: Subnet,
  SubnetRouteTableAssociation: SubnetRouteTableAssociation,
  VPC: VPC,
  VPCGatewayAttachment: VPCGatewayAttachment,
  VPNGateway: VPNGateway
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
