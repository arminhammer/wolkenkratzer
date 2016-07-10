'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class FileSystem extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EFS::FileSystem'
    let properties = {
      FileSystemTags: new ResourceAttribute('FileSystemTags', types.AmazonElasticFileSystemFileSystemFileSystemTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class MountTarget extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EFS::MountTarget'
    let properties = {
      FileSystemId: new ResourceAttribute('FileSystemId', String, 'Yes', null),
      IpAddress: new ResourceAttribute('IpAddress', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  FileSystem: FileSystem,
  MountTarget: MountTarget
}
