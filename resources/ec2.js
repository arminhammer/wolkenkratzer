/**
 * Created by arming on 6/3/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Instance extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resource_type = "AWS::EC2::Instance"
    let properties = {
      AvailabilityZone: new cloudpotato.ResourceProperty(String, false, null),
      InstanceType: new cloudpotato.ResourceProperty(String, false, null),
      ImageId: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resource_type, properties, propertiesObject)
  }
}

/*
props = {
  'Affinity': (basestring, False),
  'AvailabilityZone': (basestring, False),
  'BlockDeviceMappings': (list, False),
  'DisableApiTermination': (boolean, False),
  'EbsOptimized': (boolean, False),
  'HostId': (basestring, False),
  'IamInstanceProfile': (basestring, False),
  'ImageId': (basestring, True),
  'InstanceInitiatedShutdownBehavior': (basestring, False),
  'InstanceType': (basestring, False),
  'KernelId': (basestring, False),
  'KeyName': (basestring, False),
  'Monitoring': (boolean, False),
  'NetworkInterfaces': ([NetworkInterfaceProperty], False),
  'PlacementGroupName': (basestring, False),
  'PrivateIpAddress': (basestring, False),
  'RamdiskId': (basestring, False),
  'SecurityGroupIds': (list, False),
  'SecurityGroups': (list, False),
  'SsmAssociations': ([SsmAssociations], False),
  'SourceDestCheck': (boolean, False),
  'SubnetId': (basestring, False),
  'Tags': (list, False),
  'Tenancy': (basestring, False),
  'UserData': (basestring, False),
  'Volumes': (list, False),
}
*/

class VPC extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resource_type = "AWS::EC2::VPC"
    let properties = {
      CidrBlock: new cloudpotato.ResourceProperty(String, true, null),
      EnableDnsSupport: new cloudpotato.ResourceProperty(Boolean, false, null),
      EnableDnsHostnames: new cloudpotato.ResourceProperty(Boolean, false, null),
      InstanceTenancy: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet()
    }
    super(name, resource_type, properties, propertiesObject)
  }
}

module.exports = {
  Instance: Instance,
  VPC: VPC
}