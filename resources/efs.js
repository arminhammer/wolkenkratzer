'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class FileSystem extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EFS::FileSystem'
    let properties = {
      FileSystemTags: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticFileSystemFileSystemFileSystemTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class MountTarget extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EFS::MountTarget'
    let properties = {
      FileSystemId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IpAddress: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SecurityGroups: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  FileSystem: FileSystem,
  MountTarget: MountTarget
}