/**
 * Created by arming on 6/3/16.
 */
const cloudpotato = require('./../index')

class Instance extends cloudpotato.BaseAWSObject {
  constructor(name, properties) {
    super(name)
    this.resource_type = "AWS::EC2::Instance"
    this.properties = {
      InstanceType: new cloudpotato.ResourceProperty(String, false, null),
      ImageId: new cloudpotato.ResourceProperty(String, true, null)
    }
    if(properties) {
      Object.keys(properties).forEach((prop) => {
        this.properties[prop] = properties[prop]
      })
    }
  }
  set ImageId (value) { this.properties.ImageId.set(value) }
  get ImageId () { return this.properties.ImageId }
  set InstanceType (value) { this.properties.InstanceType.set(value) }
  get InstanceType () { return this.properties.InstanceType }
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

module.exports = {
  Instance: Instance
}