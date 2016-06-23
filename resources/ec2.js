/**
 * Created by arming on 6/3/16.
 */
'use strict'

const wolkenkratzer = require('./../index')
const ConditionNotMetException = require('../exceptions').ConditionNotMetException

/*
 AWS::EC2::CustomerGateway
 AWS::EC2::DHCPOptions
 */

class EIP extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new wolkenkratzer.ResourceProperty(String, false, null),
      Domain: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/* AWS::EC2::EIPAssociation
 AWS::EC2::Host
 */

class AmazonElasticBlockStoreBlockDeviceProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      Iops: new wolkenkratzer.ResourceProperty(Number, false, null),
      SnapshotId: new wolkenkratzer.ResourceProperty(String, false, null),
      VolumeSize: new wolkenkratzer.ResourceProperty(String, false, null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, false, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new wolkenkratzer.ResourceProperty(String, true, null),
      Ebs: new wolkenkratzer.ResourceProperty(AmazonElasticBlockStoreBlockDeviceProperty, false, null),
      NoDevice: new wolkenkratzer.ResourceProperty(Object, false, null),
      VirtualName: new wolkenkratzer.ResourceProperty(String, false, null),
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfacePrivateIPSpecification extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, true, null),
      Primary: new wolkenkratzer.ResourceProperty(Boolean, true, null),
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      DeviceIndex: new wolkenkratzer.ResourceProperty(String, true, null),
      GroupSet: new wolkenkratzer.ResourceArray(String, false, null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, false, null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, false, null),
      PrivateIpAddresses: new wolkenkratzer.ResourceArray(EC2NetworkInterfacePrivateIPSpecification, false, null),
      SecondaryPrivateIpAddressCount: new wolkenkratzer.ResourceProperty(Number, false, null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, true, null),
      Value: new wolkenkratzer.ResourceArray(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociationParameters: new wolkenkratzer.ResourceArray(AmazonEC2InstanceSsmAssociationsAssociationParameters, false, null),
      DocumentName: new wolkenkratzer.ResourceProperty(String, true, null)
      }
    super(properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Device: new wolkenkratzer.ResourceProperty(String, true, null),
      VolumeId: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class Instance extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new wolkenkratzer.ResourceProperty(String, false, null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, false, null),
      BlockDeviceMappings: new wolkenkratzer.ResourceArray(AmazonEC2BlockDeviceMappingProperty, false, null),
      DisableApiTermination: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      HostId: new wolkenkratzer.ResourceProperty(String, false, null),
      IamInstanceProfile: new wolkenkratzer.ResourceProperty(String, false, null),
      ImageId: new wolkenkratzer.ResourceProperty(String, true, null),
      InstanceInitiatedShutdownBehavior: new wolkenkratzer.ResourceProperty(String, false, null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, false, null),
      KernelId: new wolkenkratzer.ResourceProperty(String, false, null),
      KeyName: new wolkenkratzer.ResourceProperty(String, false, null),
      Monitoring: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      NetworkInterfaces: new wolkenkratzer.ResourceArray(EC2NetworkInterfaceEmbeddedPropertyType, false, null),
      PlacementGroupName: new wolkenkratzer.ResourceProperty(String, false, null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, false, null),
      RamdiskId: new wolkenkratzer.ResourceProperty(String, false, null),
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, false, null),
      SecurityGroups: new wolkenkratzer.ResourceArray(String, false, null),
      SourceDestCheck: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      SsmAssociations: new wolkenkratzer.ResourceArray(AmazonEC2InstanceSsmAssociations, false, null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, false, null),
      Tags: new wolkenkratzer.TagSet(),
      Tenancy: new wolkenkratzer.ResourceProperty(String, false, null),
      UserData: new wolkenkratzer.ResourceProperty(String, false, null),
      Volumes: new wolkenkratzer.ResourceArray(EC2MountPointPropertyType, false, null),
      AdditionalInfo: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InternetGateway extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class NatGateway extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new wolkenkratzer.ResourceProperty(String, true, null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, true, null)
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

class Route extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new wolkenkratzer.ResourceProperty(String, true, null),
      GatewayId: new wolkenkratzer.ResourceProperty(String, false, null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, false, null),
      NatGatewayId: new wolkenkratzer.ResourceProperty(String, false, null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, false, null),
      RouteTableId: new wolkenkratzer.ResourceProperty(String, true, null),
      VpcPeeringConnectionId: new wolkenkratzer.ResourceProperty(String, false, null),
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RouteTable extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new wolkenkratzer.ResourceProperty(String, true, null),
      Tags: new wolkenkratzer.TagSet()
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

class Subnet extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, false, null),
      CidrBlock: new wolkenkratzer.ResourceProperty(String, true, null),
      MapPublicIpOnLaunch: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      Tags: new wolkenkratzer.TagSet(),
      VpcId: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::Subnet
 AWS::EC2::SubnetNetworkAclAssociation
 */

class SubnetRouteTableAssociation extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new wolkenkratzer.ResourceProperty(String, true, null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/* AWS::EC2::Volume
 AWS::EC2::VolumeAttachment
 */

class VPC extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new wolkenkratzer.ResourceProperty(String, true, null),
      EnableDnsSupport: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      EnableDnsHostnames: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      InstanceTenancy: new wolkenkratzer.ResourceProperty(String, false, null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/*
 AWS::EC2::VPCDHCPOptionsAssociation
 AWS::EC2::VPCEndpoint
 */

class VPCGatewayAttachment extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject, vpcGatewayAttachmentConditional) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      'InternetGatewayId': new wolkenkratzer.ResourceProperty(String, false, null),
      'VpcId': new wolkenkratzer.ResourceProperty(String, true, null),
      'VpnGatewayId': new wolkenkratzer.ResourceProperty(String, false, null)
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

class VPNGateway extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, true, null),
      Tags: new wolkenkratzer.TagSet()
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
  EC2NetworkInterfacePrivateIPSpecification: EC2NetworkInterfacePrivateIPSpecification,
  EC2NetworkInterfaceEmbeddedPropertyType: EC2NetworkInterfaceEmbeddedPropertyType,
  AmazonEC2InstanceSsmAssociationsAssociationParameters: AmazonEC2InstanceSsmAssociationsAssociationParameters,
  AmazonEC2InstanceSsmAssociations: AmazonEC2InstanceSsmAssociations,
  EC2MountPointPropertyType: EC2MountPointPropertyType,
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

