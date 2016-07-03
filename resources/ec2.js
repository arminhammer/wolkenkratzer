'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CustomerGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::CustomerGateway'
    let properties = {
      BgpAsn: new resource.ResourceProperty(types.NumberBgpAsnisalwaysanintegervalue, 'Yes', null),
      IpAddress: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet(),
      Type: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DHCPOptions extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::DHCPOptions'
    let properties = {
      DomainName: new resource.ResourceProperty(String, 'Conditional', null),
      DomainNameServers: new resource.ResourceArray(String, 'Conditional', null),
      NetbiosNameServers: new resource.ResourceArray(String, 'Conditional', null),
      NetbiosNodeType: new resource.ResourceArray(types.numbers, 'Conditional', null),
      NtpServers: new resource.ResourceArray(String, 'Conditional', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIP extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new resource.ResourceProperty(String, 'No', null),
      Domain: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIPAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIPAssociation'
    let properties = {
      AllocationId: new resource.ResourceProperty(String, 'Conditional', null),
      EIP: new resource.ResourceProperty(String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty(String, 'No', null),
      NetworkInterfaceId: new resource.ResourceProperty(String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class FlowLog extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::FlowLog'
    let properties = {
      DeliverLogsPermissionArn: new resource.ResourceProperty(String, 'Yes', null),
      LogGroupName: new resource.ResourceProperty(String, 'Yes', null),
      ResourceId: new resource.ResourceProperty(String, 'Yes', null),
      ResourceType: new resource.ResourceProperty(String, 'Yes', null),
      TrafficType: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Host extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Host'
    let properties = {
      AutoPlacement: new resource.ResourceProperty(String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'Yes', null),
      InstanceType: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new resource.ResourceProperty(String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'Conditional', null),
      BlockDeviceMappings: new resource.ResourceArray(types.AmazonEC2BlockDeviceMappingProperty, 'No', null),
      DisableApiTermination: new resource.ResourceProperty(Boolean, 'No', null),
      EbsOptimized: new resource.ResourceProperty(Boolean, 'Conditional', null),
      HostId: new resource.ResourceProperty(String, 'No', null),
      IamInstanceProfile: new resource.ResourceProperty(String, 'No', null),
      ImageId: new resource.ResourceProperty(String, 'Yes', null),
      InstanceInitiatedShutdownBehavior: new resource.ResourceProperty(String, 'No', null),
      InstanceType: new resource.ResourceProperty(String, 'No', null),
      KernelId: new resource.ResourceProperty(String, 'No', null),
      KeyName: new resource.ResourceProperty(String, 'No', null),
      Monitoring: new resource.ResourceProperty(Boolean, 'No', null),
      NetworkInterfaces: new resource.ResourceArray(types.EC2NetworkInterfaceEmbeddedPropertyType, 'No', null),
      PlacementGroupName: new resource.ResourceProperty(String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty(String, 'No', null),
      RamdiskId: new resource.ResourceProperty(String, 'No', null),
      SecurityGroupIds: new resource.ResourceArray(String, 'Conditional', null),
      SecurityGroups: new resource.ResourceArray(String, 'No', null),
      SourceDestCheck: new resource.ResourceProperty(Boolean, 'No', null),
      SsmAssociations: new resource.ResourceArray(types.AmazonEC2InstanceSsmAssociations, 'No', null),
      SubnetId: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      Tenancy: new resource.ResourceProperty(String, 'No', null),
      UserData: new resource.ResourceProperty(String, 'No', null),
      Volumes: new resource.ResourceArray(types.EC2MountPoints, 'No', null),
      AdditionalInfo: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InternetGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NatGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new resource.ResourceProperty(String, 'Yes', null),
      SubnetId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAcl extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAcl'
    let properties = {
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAclEntry extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAclEntry'
    let properties = {
      CidrBlock: new resource.ResourceProperty(String, 'Yes', null),
      Egress: new resource.ResourceProperty(Boolean, 'No', null),
      Icmp: new resource.ResourceProperty(types.EC2ICMPPropertyType, 'Conditional', null),
      NetworkAclId: new resource.ResourceProperty(String, 'Yes', null),
      PortRange: new resource.ResourceProperty(types.EC2PortRangePropertyType, 'Conditional', null),
      Protocol: new resource.ResourceProperty(Number, 'Yes', null),
      RuleAction: new resource.ResourceProperty(String, 'Yes', null),
      RuleNumber: new resource.ResourceProperty(Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterface extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterface'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      GroupSet: new resource.ResourceArray(String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new resource.ResourceArray(types.EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new resource.ResourceProperty(Number, 'No', null),
      SourceDestCheck: new resource.ResourceProperty(Boolean, 'No', null),
      SubnetId: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterfaceAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterfaceAttachment'
    let properties = {
      DeleteOnTermination: new resource.ResourceProperty(Boolean, 'No', null),
      DeviceIndex: new resource.ResourceProperty(String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty(String, 'Conditional', null),
      NetworkInterfaceId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class PlacementGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::PlacementGroup'
    let properties = {
      Strategy: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Route extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new resource.ResourceProperty(String, 'Yes', null),
      GatewayId: new resource.ResourceProperty(String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty(String, 'Conditional', null),
      NatGatewayId: new resource.ResourceProperty(String, 'Conditional', null),
      NetworkInterfaceId: new resource.ResourceProperty(String, 'Conditional', null),
      RouteTableId: new resource.ResourceProperty(String, 'Yes', null),
      VpcPeeringConnectionId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroup'
    let properties = {
      GroupDescription: new resource.ResourceProperty(String, 'Yes', null),
      SecurityGroupEgress: new resource.ResourceArray(types.EC2SecurityGroupRule, 'No', null),
      SecurityGroupIngress: new resource.ResourceArray(types.EC2SecurityGroupRule, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupEgress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupEgress'
    let properties = {
      CidrIp: new resource.ResourceProperty(String, 'Conditional', null),
      DestinationSecurityGroupId: new resource.ResourceProperty(String, 'Conditional', null),
      FromPort: new resource.ResourceProperty(Number, 'Yes', null),
      GroupId: new resource.ResourceProperty(String, 'Yes', null),
      IpProtocol: new resource.ResourceProperty(String, 'Yes', null),
      ToPort: new resource.ResourceProperty(Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupIngress'
    let properties = {
      CidrIp: new resource.ResourceProperty(String, 'Conditional', null),
      FromPort: new resource.ResourceProperty(Number, 'Conditional', null),
      GroupId: new resource.ResourceProperty(String, 'Conditional', null),
      GroupName: new resource.ResourceProperty(String, 'Conditional', null),
      IpProtocol: new resource.ResourceProperty(String, 'Yes', null),
      SourceSecurityGroupId: new resource.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupName: new resource.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new resource.ResourceProperty(String, 'Conditional', null),
      ToPort: new resource.ResourceProperty(Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SpotFleet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SpotFleet'
    let properties = {
      SpotFleetRequestConfigData: new resource.ResourceProperty(types.AmazonEC2SpotFleetSpotFleetRequestConfigData, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Subnet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      CidrBlock: new resource.ResourceProperty(String, 'Yes', null),
      MapPublicIpOnLaunch: new resource.ResourceProperty(Boolean, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty(types.RefID, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetNetworkAclAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetNetworkAclAssociation'
    let properties = {
      SubnetId: new resource.ResourceProperty(String, 'Yes', null),
      NetworkAclId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetRouteTableAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new resource.ResourceProperty(String, 'Yes', null),
      SubnetId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Volume extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Volume'
    let properties = {
      AutoEnableIO: new resource.ResourceProperty(Boolean, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'Yes', null),
      Encrypted: new resource.ResourceProperty(Boolean, 'Conditional', null),
      Iops: new resource.ResourceProperty(Number, 'Conditional', null),
      KmsKeyId: new resource.ResourceProperty(String, 'No', null),
      Size: new resource.ResourceProperty(String, 'Conditional', null),
      SnapshotId: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      VolumeType: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VolumeAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VolumeAttachment'
    let properties = {
      Device: new resource.ResourceProperty(String, 'Yes', null),
      InstanceId: new resource.ResourceProperty(String, 'Yes', null),
      VolumeId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPC extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new resource.ResourceProperty(String, 'Yes', null),
      EnableDnsSupport: new resource.ResourceProperty(Boolean, 'No', null),
      EnableDnsHostnames: new resource.ResourceProperty(Boolean, 'No', null),
      InstanceTenancy: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCDHCPOptionsAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCDHCPOptionsAssociation'
    let properties = {
      DhcpOptionsId: new resource.ResourceProperty(String, 'Yes', null),
      VpcId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCEndpoint extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCEndpoint'
    let properties = {
      PolicyDocument: new resource.ResourceProperty(Object, 'No', null),
      RouteTableIds: new resource.ResourceArray(String, 'No', null),
      ServiceName: new resource.ResourceProperty(String, 'Yes', null),
      VpcId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCGatewayAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      InternetGatewayId: new resource.ResourceProperty(String, 'Conditional', null),
      VpcId: new resource.ResourceProperty(String, 'Yes', null),
      VpnGatewayId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCPeeringConnection extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCPeeringConnection'
    let properties = {
      PeerVpcId: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnection extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnection'
    let properties = {
      Type: new resource.ResourceProperty(String, 'Yes', null),
      CustomerGatewayId: new resource.ResourceProperty(String, 'Yes', null),
      StaticRoutesOnly: new resource.ResourceProperty(Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpnGatewayId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnectionRoute extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnectionRoute'
    let properties = {
      DestinationCidrBlock: new resource.ResourceProperty(String, 'Conditional', null),
      VpnConnectionId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGatewayRoutePropagation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGatewayRoutePropagation'
    let properties = {
      RouteTableIds: new resource.ResourceArray(types.routetableIDs, 'Yes', null),
      VpnGatewayId: new resource.ResourceProperty(String, 'Yes', null)
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