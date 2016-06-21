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

class EC2NetworkInterfacePrivateIPSpecification extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PrivateIpAddress: new cloudpotato.ResourceProperty(String, true, null),
      Primary: new cloudpotato.ResourceProperty(Boolean, true, null),
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new cloudpotato.ResourceProperty(Boolean, false, null),
      DeleteOnTermination: new cloudpotato.ResourceProperty(Boolean, false, null),
      Description: new cloudpotato.ResourceProperty(String, false, null),
      DeviceIndex: new cloudpotato.ResourceProperty(String, true, null),
      GroupSet: new cloudpotato.ResourceArray(String, false, null),
      NetworkInterfaceId: new cloudpotato.ResourceProperty(String, false, null),
      PrivateIpAddress: new cloudpotato.ResourceProperty(String, false, null),
      PrivateIpAddresses: new cloudpotato.ResourceArray(EC2NetworkInterfacePrivateIPSpecification, false, null),
      SecondaryPrivateIpAddressCount: new cloudpotato.ResourceProperty(Number, false, null),
      SubnetId: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new cloudpotato.ResourceProperty(String, true, null),
      Value: new cloudpotato.ResourceArray(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociationParameters: new cloudpotato.ResourceArray(AmazonEC2InstanceSsmAssociationsAssociationParameters, false, null),
      DocumentName: new cloudpotato.ResourceProperty(String, true, null)
      }
    super(properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Device: new cloudpotato.ResourceProperty(String, true, null),
      VolumeId: new cloudpotato.ResourceProperty(String, true, null)
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
      NetworkInterfaces: new cloudpotato.ResourceArray(EC2NetworkInterfaceEmbeddedPropertyType, false, null),
      PlacementGroupName: new cloudpotato.ResourceProperty(String, false, null),
      PrivateIpAddress: new cloudpotato.ResourceProperty(String, false, null),
      RamdiskId: new cloudpotato.ResourceProperty(String, false, null),
      SecurityGroupIds: new cloudpotato.ResourceArray(String, false, null),
      SecurityGroups: new cloudpotato.ResourceArray(String, false, null),
      SourceDestCheck: new cloudpotato.ResourceProperty(Boolean, false, null),
      SsmAssociations: new cloudpotato.ResourceArray(AmazonEC2InstanceSsmAssociations, false, null),
      SubnetId: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet(),
      Tenancy: new cloudpotato.ResourceProperty(String, false, null),
      UserData: new cloudpotato.ResourceProperty(String, false, null),
      Volumes: new cloudpotato.ResourceArray(EC2MountPointPropertyType, false, null),
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

