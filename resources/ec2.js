'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class CustomerGateway extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::CustomerGateway'
    let properties = {
      BgpAsn: new ResourceAttribute('BgpAsn', types.NumberBgpAsnisalwaysanintegervalue, 'Yes', null),
      IpAddress: new ResourceAttribute('IpAddress', String, 'Yes', null),
      Tags: new tag.TagSet(),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DHCPOptions extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::DHCPOptions'
    let properties = {
      DomainName: new ResourceAttribute('DomainName', String, 'Conditional', null),
      DomainNameServers: new ResourceAttributeArray('DomainNameServers', String, 'Conditional', null),
      NetbiosNameServers: new ResourceAttributeArray('NetbiosNameServers', String, 'Conditional', null),
      NetbiosNodeType: new ResourceAttributeArray('NetbiosNodeType', types.numbers, 'Conditional', null),
      NtpServers: new ResourceAttributeArray('NtpServers', String, 'Conditional', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIP extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new ResourceAttribute('InstanceId', String, 'No', null),
      Domain: new ResourceAttribute('Domain', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIPAssociation extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIPAssociation'
    let properties = {
      AllocationId: new ResourceAttribute('AllocationId', String, 'Conditional', null),
      EIP: new ResourceAttribute('EIP', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'No', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class FlowLog extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::FlowLog'
    let properties = {
      DeliverLogsPermissionArn: new ResourceAttribute('DeliverLogsPermissionArn', String, 'Yes', null),
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Yes', null),
      ResourceId: new ResourceAttribute('ResourceId', String, 'Yes', null),
      ResourceType: new ResourceAttribute('ResourceType', String, 'Yes', null),
      TrafficType: new ResourceAttribute('TrafficType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Host extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Host'
    let properties = {
      AutoPlacement: new ResourceAttribute('AutoPlacement', String, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new ResourceAttribute('Affinity', String, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Conditional', null),
      BlockDeviceMappings: new ResourceAttributeArray('BlockDeviceMappings', types.AmazonEC2BlockDeviceMappingProperty, 'No', null),
      DisableApiTermination: new ResourceAttribute('DisableApiTermination', Boolean, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'Conditional', null),
      HostId: new ResourceAttribute('HostId', String, 'No', null),
      IamInstanceProfile: new ResourceAttribute('IamInstanceProfile', String, 'No', null),
      ImageId: new ResourceAttribute('ImageId', String, 'Yes', null),
      InstanceInitiatedShutdownBehavior: new ResourceAttribute('InstanceInitiatedShutdownBehavior', String, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'No', null),
      KernelId: new ResourceAttribute('KernelId', String, 'No', null),
      KeyName: new ResourceAttribute('KeyName', String, 'No', null),
      Monitoring: new ResourceAttribute('Monitoring', Boolean, 'No', null),
      NetworkInterfaces: new ResourceAttributeArray('NetworkInterfaces', types.EC2NetworkInterfaceEmbeddedPropertyType, 'No', null),
      PlacementGroupName: new ResourceAttribute('PlacementGroupName', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null),
      RamdiskId: new ResourceAttribute('RamdiskId', String, 'No', null),
      SecurityGroupIds: new ResourceAttributeArray('SecurityGroupIds', String, 'Conditional', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', String, 'No', null),
      SourceDestCheck: new ResourceAttribute('SourceDestCheck', Boolean, 'No', null),
      SsmAssociations: new ResourceAttributeArray('SsmAssociations', types.AmazonEC2InstanceSsmAssociations, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'No', null),
      Tags: new tag.TagSet(),
      Tenancy: new ResourceAttribute('Tenancy', String, 'No', null),
      UserData: new ResourceAttribute('UserData', String, 'No', null),
      Volumes: new ResourceAttributeArray('Volumes', types.EC2MountPoints, 'No', null),
      AdditionalInfo: new ResourceAttribute('AdditionalInfo', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InternetGateway extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NatGateway extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new ResourceAttribute('AllocationId', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAcl extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAcl'
    let properties = {
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAclEntry extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAclEntry'
    let properties = {
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      Egress: new ResourceAttribute('Egress', Boolean, 'No', null),
      Icmp: new ResourceAttribute('Icmp', types.EC2ICMPPropertyType, 'Conditional', null),
      NetworkAclId: new ResourceAttribute('NetworkAclId', String, 'Yes', null),
      PortRange: new ResourceAttribute('PortRange', types.EC2PortRangePropertyType, 'Conditional', null),
      Protocol: new ResourceAttribute('Protocol', Number, 'Yes', null),
      RuleAction: new ResourceAttribute('RuleAction', String, 'Yes', null),
      RuleNumber: new ResourceAttribute('RuleNumber', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterface extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterface'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      GroupSet: new ResourceAttributeArray('GroupSet', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null),
      PrivateIpAddresses: new ResourceAttributeArray('PrivateIpAddresses', types.EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceAttribute('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SourceDestCheck: new ResourceAttribute('SourceDestCheck', Boolean, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterfaceAttachment extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterfaceAttachment'
    let properties = {
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      DeviceIndex: new ResourceAttribute('DeviceIndex', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Conditional', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class PlacementGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::PlacementGroup'
    let properties = {
      Strategy: new ResourceAttribute('Strategy', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Route extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new ResourceAttribute('DestinationCidrBlock', String, 'Yes', null),
      GatewayId: new ResourceAttribute('GatewayId', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Conditional', null),
      NatGatewayId: new ResourceAttribute('NatGatewayId', String, 'Conditional', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'Conditional', null),
      RouteTableId: new ResourceAttribute('RouteTableId', String, 'Yes', null),
      VpcPeeringConnectionId: new ResourceAttribute('VpcPeeringConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroup'
    let properties = {
      GroupDescription: new ResourceAttribute('GroupDescription', String, 'Yes', null),
      SecurityGroupEgress: new ResourceAttributeArray('SecurityGroupEgress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      SecurityGroupIngress: new ResourceAttributeArray('SecurityGroupIngress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupEgress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupEgress'
    let properties = {
      CidrIp: new ResourceAttribute('CidrIp', String, 'Conditional', null),
      DestinationSecurityGroupId: new ResourceAttribute('DestinationSecurityGroupId', String, 'Conditional', null),
      FromPort: new ResourceAttribute('FromPort', Number, 'Yes', null),
      GroupId: new ResourceAttribute('GroupId', String, 'Yes', null),
      IpProtocol: new ResourceAttribute('IpProtocol', String, 'Yes', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupIngress'
    let properties = {
      CidrIp: new ResourceAttribute('CidrIp', String, 'Conditional', null),
      FromPort: new ResourceAttribute('FromPort', Number, 'Conditional', null),
      GroupId: new ResourceAttribute('GroupId', String, 'Conditional', null),
      GroupName: new ResourceAttribute('GroupName', String, 'Conditional', null),
      IpProtocol: new ResourceAttribute('IpProtocol', String, 'Yes', null),
      SourceSecurityGroupId: new ResourceAttribute('SourceSecurityGroupId', String, 'Conditional', null),
      SourceSecurityGroupName: new ResourceAttribute('SourceSecurityGroupName', String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new ResourceAttribute('SourceSecurityGroupOwnerId', String, 'Conditional', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SpotFleet extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SpotFleet'
    let properties = {
      SpotFleetRequestConfigData: new ResourceAttribute('SpotFleetRequestConfigData', types.AmazonEC2SpotFleetSpotFleetRequestConfigData, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Subnet extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      MapPublicIpOnLaunch: new ResourceAttribute('MapPublicIpOnLaunch', Boolean, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', types.RefID, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetNetworkAclAssociation extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetNetworkAclAssociation'
    let properties = {
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null),
      NetworkAclId: new ResourceAttribute('NetworkAclId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetRouteTableAssociation extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new ResourceAttribute('RouteTableId', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Volume extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Volume'
    let properties = {
      AutoEnableIO: new ResourceAttribute('AutoEnableIO', Boolean, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'Conditional', null),
      Iops: new ResourceAttribute('Iops', Number, 'Conditional', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, 'No', null),
      Size: new ResourceAttribute('Size', String, 'Conditional', null),
      SnapshotId: new ResourceAttribute('SnapshotId', String, 'No', null),
      Tags: new tag.TagSet(),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VolumeAttachment extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VolumeAttachment'
    let properties = {
      Device: new ResourceAttribute('Device', String, 'Yes', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Yes', null),
      VolumeId: new ResourceAttribute('VolumeId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPC extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      EnableDnsSupport: new ResourceAttribute('EnableDnsSupport', Boolean, 'No', null),
      EnableDnsHostnames: new ResourceAttribute('EnableDnsHostnames', Boolean, 'No', null),
      InstanceTenancy: new ResourceAttribute('InstanceTenancy', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCDHCPOptionsAssociation extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCDHCPOptionsAssociation'
    let properties = {
      DhcpOptionsId: new ResourceAttribute('DhcpOptionsId', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCEndpoint extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCEndpoint'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'No', null),
      RouteTableIds: new ResourceAttributeArray('RouteTableIds', String, 'No', null),
      ServiceName: new ResourceAttribute('ServiceName', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCGatewayAttachment extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      InternetGatewayId: new ResourceAttribute('InternetGatewayId', String, 'Conditional', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCPeeringConnection extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCPeeringConnection'
    let properties = {
      PeerVpcId: new ResourceAttribute('PeerVpcId', String, 'Yes', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnection extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnection'
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      CustomerGatewayId: new ResourceAttribute('CustomerGatewayId', String, 'Yes', null),
      StaticRoutesOnly: new ResourceAttribute('StaticRoutesOnly', Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnectionRoute extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnectionRoute'
    let properties = {
      DestinationCidrBlock: new ResourceAttribute('DestinationCidrBlock', String, 'Conditional', null),
      VpnConnectionId: new ResourceAttribute('VpnConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGateway extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGatewayRoutePropagation extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGatewayRoutePropagation'
    let properties = {
      RouteTableIds: new ResourceAttributeArray('RouteTableIds', types.routetableIDs, 'Yes', null),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Yes', null)
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
