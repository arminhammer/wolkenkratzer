'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class CustomerGateway extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::CustomerGateway'
    let properties = {
      BgpAsn: new wolkenkratzer.ResourceProperty(propertyTypes.NumberBgpAsnisalwaysanintegervalue, 'Yes', null),
      IpAddress: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet(),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DHCPOptions extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::DHCPOptions'
    let properties = {
      DomainName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      DomainNameServers: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      NetbiosNameServers: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      NetbiosNodeType: new wolkenkratzer.ResourceArray(propertyTypes.numbers, 'Conditional', null),
      NtpServers: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIP extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Domain: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIPAssociation extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIPAssociation'
    let properties = {
      AllocationId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      EIP: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class FlowLog extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::FlowLog'
    let properties = {
      DeliverLogsPermissionArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LogGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ResourceId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ResourceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TrafficType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Host extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Host'
    let properties = {
      AutoPlacement: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      BlockDeviceMappings: new wolkenkratzer.ResourceArray(propertyTypes.AmazonEC2BlockDeviceMappingProperty, 'No', null),
      DisableApiTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      HostId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      IamInstanceProfile: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ImageId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceInitiatedShutdownBehavior: new wolkenkratzer.ResourceProperty(String, 'No', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KernelId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Monitoring: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      NetworkInterfaces: new wolkenkratzer.ResourceArray(propertyTypes.EC2NetworkInterfaceEmbeddedPropertyType, 'No', null),
      PlacementGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RamdiskId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      SecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      SourceDestCheck: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      SsmAssociations: new wolkenkratzer.ResourceArray(propertyTypes.AmazonEC2InstanceSsmAssociations, 'No', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      Tenancy: new wolkenkratzer.ResourceProperty(String, 'No', null),
      UserData: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Volumes: new wolkenkratzer.ResourceArray(propertyTypes.EC2MountPoints, 'No', null),
      AdditionalInfo: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InternetGateway extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NatGateway extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAcl extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAcl'
    let properties = {
      Tags: new wolkenkratzer.TagSet(),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAclEntry extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAclEntry'
    let properties = {
      CidrBlock: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Egress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Icmp: new wolkenkratzer.ResourceProperty(propertyTypes.EC2ICMPPropertyType, 'Conditional', null),
      NetworkAclId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PortRange: new wolkenkratzer.ResourceProperty(propertyTypes.EC2PortRangePropertyType, 'Conditional', null),
      Protocol: new wolkenkratzer.ResourceProperty(Number, 'Yes', null),
      RuleAction: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RuleNumber: new wolkenkratzer.ResourceProperty(Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterface extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterface'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      GroupSet: new wolkenkratzer.ResourceArray(String, 'No', null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new wolkenkratzer.ResourceArray(String, 'No', null),
      SecondaryPrivateIpAddressCount: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SourceDestCheck: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterfaceAttachment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterfaceAttachment'
    let properties = {
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DeviceIndex: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class PlacementGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::PlacementGroup'
    let properties = {
      Strategy: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Route extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      GatewayId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      NatGatewayId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      RouteTableId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VpcPeeringConnectionId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroup'
    let properties = {
      GroupDescription: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SecurityGroupEgress: new wolkenkratzer.ResourceArray(propertyTypes.EC2SecurityGroupRule, 'No', null),
      SecurityGroupIngress: new wolkenkratzer.ResourceArray(propertyTypes.EC2SecurityGroupRule, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupEgress extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupEgress'
    let properties = {
      CidrIp: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      DestinationSecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      FromPort: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      GroupId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IpProtocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ToPort: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupIngress'
    let properties = {
      CidrIp: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      FromPort: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      GroupId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      GroupName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      IpProtocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceSecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      ToPort: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SpotFleet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SpotFleet'
    let properties = {
      SpotFleetRequestConfigData: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonEC2SpotFleetSpotFleetRequestConfigData, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Subnet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CidrBlock: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MapPublicIpOnLaunch: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VpcId: new wolkenkratzer.ResourceProperty(propertyTypes.RefID, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetNetworkAclAssociation extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetNetworkAclAssociation'
    let properties = {
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NetworkAclId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetRouteTableAssociation extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Volume extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Volume'
    let properties = {
      AutoEnableIO: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      Iops: new wolkenkratzer.ResourceProperty(Number, 'Conditional', null),
      KmsKeyId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Size: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SnapshotId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VolumeAttachment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VolumeAttachment'
    let properties = {
      Device: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VolumeId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPC extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EnableDnsSupport: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EnableDnsHostnames: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      InstanceTenancy: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCDHCPOptionsAssociation extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCDHCPOptionsAssociation'
    let properties = {
      DhcpOptionsId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCEndpoint extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCEndpoint'
    let properties = {
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      RouteTableIds: new wolkenkratzer.ResourceArray(String, 'No', null),
      ServiceName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCGatewayAttachment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      InternetGatewayId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VpnGatewayId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCPeeringConnection extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCPeeringConnection'
    let properties = {
      PeerVpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet(),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnection extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnection'
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CustomerGatewayId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StaticRoutesOnly: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      Tags: new wolkenkratzer.TagSet(),
      VpnGatewayId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnectionRoute extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnectionRoute'
    let properties = {
      DestinationCidrBlock: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VpnConnectionId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGateway extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGatewayRoutePropagation extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGatewayRoutePropagation'
    let properties = {
      RouteTableIds: new wolkenkratzer.ResourceArray(propertyTypes.routetableIDs, 'Yes', null),
      VpnGatewayId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CustomerGateway: CustomerGateway,
  DHCPOptions: DHCPOptions,
  EIP: EIP,
  EIPAssociation: EIPAssociation,
  FlowLog: FlowLog,
  Host: Host,
  Instance: Instance,
  InternetGateway: InternetGateway,
  NatGateway: NatGateway,
  NetworkAcl: NetworkAcl,
  NetworkAclEntry: NetworkAclEntry,
  NetworkInterface: NetworkInterface,
  NetworkInterfaceAttachment: NetworkInterfaceAttachment,
  PlacementGroup: PlacementGroup,
  Route: Route,
  RouteTable: RouteTable,
  SecurityGroup: SecurityGroup,
  SecurityGroupEgress: SecurityGroupEgress,
  SecurityGroupIngress: SecurityGroupIngress,
  SpotFleet: SpotFleet,
  Subnet: Subnet,
  SubnetNetworkAclAssociation: SubnetNetworkAclAssociation,
  SubnetRouteTableAssociation: SubnetRouteTableAssociation,
  Volume: Volume,
  VolumeAttachment: VolumeAttachment,
  VPC: VPC,
  VPCDHCPOptionsAssociation: VPCDHCPOptionsAssociation,
  VPCEndpoint: VPCEndpoint,
  VPCGatewayAttachment: VPCGatewayAttachment,
  VPCPeeringConnection: VPCPeeringConnection,
  VPNConnection: VPNConnection,
  VPNConnectionRoute: VPNConnectionRoute,
  VPNGateway: VPNGateway,
  VPNGatewayRoutePropagation: VPNGatewayRoutePropagation
}