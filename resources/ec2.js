'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CustomerGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::CustomerGateway'
    let properties = {
      BgpAsn: new resource.ResourceProperty('BgpAsn', types.NumberBgpAsnisalwaysanintegervalue, 'Yes', null),
      IpAddress: new resource.ResourceProperty('IpAddress', String, 'Yes', null),
      Tags: new tag.TagSet(),
      Type: new resource.ResourceProperty('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DHCPOptions extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::DHCPOptions'
    let properties = {
      DomainName: new resource.ResourceProperty('DomainName', String, 'Conditional', null),
      DomainNameServers: new resource.ResourceArray('DomainNameServers', String, 'Conditional', null),
      NetbiosNameServers: new resource.ResourceArray('NetbiosNameServers', String, 'Conditional', null),
      NetbiosNodeType: new resource.ResourceArray('NetbiosNodeType', types.numbers, 'Conditional', null),
      NtpServers: new resource.ResourceArray('NtpServers', String, 'Conditional', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIP extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'No', null),
      Domain: new resource.ResourceProperty('Domain', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EIPAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIPAssociation'
    let properties = {
      AllocationId: new resource.ResourceProperty('AllocationId', String, 'Conditional', null),
      EIP: new resource.ResourceProperty('EIP', String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'No', null),
      NetworkInterfaceId: new resource.ResourceProperty('NetworkInterfaceId', String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty('PrivateIpAddress', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class FlowLog extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::FlowLog'
    let properties = {
      DeliverLogsPermissionArn: new resource.ResourceProperty('DeliverLogsPermissionArn', String, 'Yes', null),
      LogGroupName: new resource.ResourceProperty('LogGroupName', String, 'Yes', null),
      ResourceId: new resource.ResourceProperty('ResourceId', String, 'Yes', null),
      ResourceType: new resource.ResourceProperty('ResourceType', String, 'Yes', null),
      TrafficType: new resource.ResourceProperty('TrafficType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Host extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Host'
    let properties = {
      AutoPlacement: new resource.ResourceProperty('AutoPlacement', String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'Yes', null),
      InstanceType: new resource.ResourceProperty('InstanceType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new resource.ResourceProperty('Affinity', String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'Conditional', null),
      BlockDeviceMappings: new resource.ResourceArray('BlockDeviceMappings', types.AmazonEC2BlockDeviceMappingProperty, 'No', null),
      DisableApiTermination: new resource.ResourceProperty('DisableApiTermination', Boolean, 'No', null),
      EbsOptimized: new resource.ResourceProperty('EbsOptimized', Boolean, 'Conditional', null),
      HostId: new resource.ResourceProperty('HostId', String, 'No', null),
      IamInstanceProfile: new resource.ResourceProperty('IamInstanceProfile', String, 'No', null),
      ImageId: new resource.ResourceProperty('ImageId', String, 'Yes', null),
      InstanceInitiatedShutdownBehavior: new resource.ResourceProperty('InstanceInitiatedShutdownBehavior', String, 'No', null),
      InstanceType: new resource.ResourceProperty('InstanceType', String, 'No', null),
      KernelId: new resource.ResourceProperty('KernelId', String, 'No', null),
      KeyName: new resource.ResourceProperty('KeyName', String, 'No', null),
      Monitoring: new resource.ResourceProperty('Monitoring', Boolean, 'No', null),
      NetworkInterfaces: new resource.ResourceArray('NetworkInterfaces', types.EC2NetworkInterfaceEmbeddedPropertyType, 'No', null),
      PlacementGroupName: new resource.ResourceProperty('PlacementGroupName', String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty('PrivateIpAddress', String, 'No', null),
      RamdiskId: new resource.ResourceProperty('RamdiskId', String, 'No', null),
      SecurityGroupIds: new resource.ResourceArray('SecurityGroupIds', String, 'Conditional', null),
      SecurityGroups: new resource.ResourceArray('SecurityGroups', String, 'No', null),
      SourceDestCheck: new resource.ResourceProperty('SourceDestCheck', Boolean, 'No', null),
      SsmAssociations: new resource.ResourceArray('SsmAssociations', types.AmazonEC2InstanceSsmAssociations, 'No', null),
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'No', null),
      Tags: new tag.TagSet(),
      Tenancy: new resource.ResourceProperty('Tenancy', String, 'No', null),
      UserData: new resource.ResourceProperty('UserData', String, 'No', null),
      Volumes: new resource.ResourceArray('Volumes', types.EC2MountPoints, 'No', null),
      AdditionalInfo: new resource.ResourceProperty('AdditionalInfo', String, 'No', null)
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
      AllocationId: new resource.ResourceProperty('AllocationId', String, 'Yes', null),
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAcl extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAcl'
    let properties = {
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkAclEntry extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAclEntry'
    let properties = {
      CidrBlock: new resource.ResourceProperty('CidrBlock', String, 'Yes', null),
      Egress: new resource.ResourceProperty('Egress', Boolean, 'No', null),
      Icmp: new resource.ResourceProperty('Icmp', types.EC2ICMPPropertyType, 'Conditional', null),
      NetworkAclId: new resource.ResourceProperty('NetworkAclId', String, 'Yes', null),
      PortRange: new resource.ResourceProperty('PortRange', types.EC2PortRangePropertyType, 'Conditional', null),
      Protocol: new resource.ResourceProperty('Protocol', Number, 'Yes', null),
      RuleAction: new resource.ResourceProperty('RuleAction', String, 'Yes', null),
      RuleNumber: new resource.ResourceProperty('RuleNumber', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterface extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterface'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      GroupSet: new resource.ResourceArray('GroupSet', String, 'No', null),
      PrivateIpAddress: new resource.ResourceProperty('PrivateIpAddress', String, 'No', null),
      PrivateIpAddresses: new resource.ResourceArray('PrivateIpAddresses', types.EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new resource.ResourceProperty('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SourceDestCheck: new resource.ResourceProperty('SourceDestCheck', Boolean, 'No', null),
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NetworkInterfaceAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterfaceAttachment'
    let properties = {
      DeleteOnTermination: new resource.ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      DeviceIndex: new resource.ResourceProperty('DeviceIndex', String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'Conditional', null),
      NetworkInterfaceId: new resource.ResourceProperty('NetworkInterfaceId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class PlacementGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::PlacementGroup'
    let properties = {
      Strategy: new resource.ResourceProperty('Strategy', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Route extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new resource.ResourceProperty('DestinationCidrBlock', String, 'Yes', null),
      GatewayId: new resource.ResourceProperty('GatewayId', String, 'Conditional', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'Conditional', null),
      NatGatewayId: new resource.ResourceProperty('NatGatewayId', String, 'Conditional', null),
      NetworkInterfaceId: new resource.ResourceProperty('NetworkInterfaceId', String, 'Conditional', null),
      RouteTableId: new resource.ResourceProperty('RouteTableId', String, 'Yes', null),
      VpcPeeringConnectionId: new resource.ResourceProperty('VpcPeeringConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroup'
    let properties = {
      GroupDescription: new resource.ResourceProperty('GroupDescription', String, 'Yes', null),
      SecurityGroupEgress: new resource.ResourceArray('SecurityGroupEgress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      SecurityGroupIngress: new resource.ResourceArray('SecurityGroupIngress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupEgress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupEgress'
    let properties = {
      CidrIp: new resource.ResourceProperty('CidrIp', String, 'Conditional', null),
      DestinationSecurityGroupId: new resource.ResourceProperty('DestinationSecurityGroupId', String, 'Conditional', null),
      FromPort: new resource.ResourceProperty('FromPort', Number, 'Yes', null),
      GroupId: new resource.ResourceProperty('GroupId', String, 'Yes', null),
      IpProtocol: new resource.ResourceProperty('IpProtocol', String, 'Yes', null),
      ToPort: new resource.ResourceProperty('ToPort', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupIngress'
    let properties = {
      CidrIp: new resource.ResourceProperty('CidrIp', String, 'Conditional', null),
      FromPort: new resource.ResourceProperty('FromPort', Number, 'Conditional', null),
      GroupId: new resource.ResourceProperty('GroupId', String, 'Conditional', null),
      GroupName: new resource.ResourceProperty('GroupName', String, 'Conditional', null),
      IpProtocol: new resource.ResourceProperty('IpProtocol', String, 'Yes', null),
      SourceSecurityGroupId: new resource.ResourceProperty('SourceSecurityGroupId', String, 'Conditional', null),
      SourceSecurityGroupName: new resource.ResourceProperty('SourceSecurityGroupName', String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new resource.ResourceProperty('SourceSecurityGroupOwnerId', String, 'Conditional', null),
      ToPort: new resource.ResourceProperty('ToPort', Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SpotFleet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SpotFleet'
    let properties = {
      SpotFleetRequestConfigData: new resource.ResourceProperty('SpotFleetRequestConfigData', types.AmazonEC2SpotFleetSpotFleetRequestConfigData, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Subnet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'No', null),
      CidrBlock: new resource.ResourceProperty('CidrBlock', String, 'Yes', null),
      MapPublicIpOnLaunch: new resource.ResourceProperty('MapPublicIpOnLaunch', Boolean, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty('VpcId', types.RefID, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetNetworkAclAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetNetworkAclAssociation'
    let properties = {
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'Yes', null),
      NetworkAclId: new resource.ResourceProperty('NetworkAclId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetRouteTableAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new resource.ResourceProperty('RouteTableId', String, 'Yes', null),
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Volume extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::Volume'
    let properties = {
      AutoEnableIO: new resource.ResourceProperty('AutoEnableIO', Boolean, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'Yes', null),
      Encrypted: new resource.ResourceProperty('Encrypted', Boolean, 'Conditional', null),
      Iops: new resource.ResourceProperty('Iops', Number, 'Conditional', null),
      KmsKeyId: new resource.ResourceProperty('KmsKeyId', String, 'No', null),
      Size: new resource.ResourceProperty('Size', String, 'Conditional', null),
      SnapshotId: new resource.ResourceProperty('SnapshotId', String, 'No', null),
      Tags: new tag.TagSet(),
      VolumeType: new resource.ResourceProperty('VolumeType', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VolumeAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VolumeAttachment'
    let properties = {
      Device: new resource.ResourceProperty('Device', String, 'Yes', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'Yes', null),
      VolumeId: new resource.ResourceProperty('VolumeId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPC extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new resource.ResourceProperty('CidrBlock', String, 'Yes', null),
      EnableDnsSupport: new resource.ResourceProperty('EnableDnsSupport', Boolean, 'No', null),
      EnableDnsHostnames: new resource.ResourceProperty('EnableDnsHostnames', Boolean, 'No', null),
      InstanceTenancy: new resource.ResourceProperty('InstanceTenancy', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCDHCPOptionsAssociation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCDHCPOptionsAssociation'
    let properties = {
      DhcpOptionsId: new resource.ResourceProperty('DhcpOptionsId', String, 'Yes', null),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCEndpoint extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCEndpoint'
    let properties = {
      PolicyDocument: new resource.ResourceProperty('PolicyDocument', Object, 'No', null),
      RouteTableIds: new resource.ResourceArray('RouteTableIds', String, 'No', null),
      ServiceName: new resource.ResourceProperty('ServiceName', String, 'Yes', null),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCGatewayAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      InternetGatewayId: new resource.ResourceProperty('InternetGatewayId', String, 'Conditional', null),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null),
      VpnGatewayId: new resource.ResourceProperty('VpnGatewayId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPCPeeringConnection extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCPeeringConnection'
    let properties = {
      PeerVpcId: new resource.ResourceProperty('PeerVpcId', String, 'Yes', null),
      Tags: new tag.TagSet(),
      VpcId: new resource.ResourceProperty('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnection extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnection'
    let properties = {
      Type: new resource.ResourceProperty('Type', String, 'Yes', null),
      CustomerGatewayId: new resource.ResourceProperty('CustomerGatewayId', String, 'Yes', null),
      StaticRoutesOnly: new resource.ResourceProperty('StaticRoutesOnly', Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpnGatewayId: new resource.ResourceProperty('VpnGatewayId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNConnectionRoute extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnectionRoute'
    let properties = {
      DestinationCidrBlock: new resource.ResourceProperty('DestinationCidrBlock', String, 'Conditional', null),
      VpnConnectionId: new resource.ResourceProperty('VpnConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGateway extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new resource.ResourceProperty('Type', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class VPNGatewayRoutePropagation extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGatewayRoutePropagation'
    let properties = {
      RouteTableIds: new resource.ResourceArray('RouteTableIds', types.routetableIDs, 'Yes', null),
      VpnGatewayId: new resource.ResourceProperty('VpnGatewayId', String, 'Yes', null)
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