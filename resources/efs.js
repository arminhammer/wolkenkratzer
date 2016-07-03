'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class FileSystem extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EFS::FileSystem'
    let properties = {
      FileSystemTags: new resource.ResourceProperty(types.AmazonElasticFileSystemFileSystemFileSystemTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class MountTarget extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EFS::MountTarget'
    let properties = {
      FileSystemId: new resource.ResourceProperty(String, 'Yes', null),
      IpAddress: new resource.ResourceProperty(String, 'No', null),
      SecurityGroups: new resource.ResourceArray(String, 'Yes', null),
      SubnetId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  FileSystem: FileSystem,
  MountTarget: MountTarget
}