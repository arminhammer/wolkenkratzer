'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Workspace extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WorkSpaces::Workspace'
    let properties = {
      BundleId: new ResourceAttribute('BundleId', String, 'Yes', null),
      DirectoryId: new ResourceAttribute('DirectoryId', String, 'Yes', null),
      UserName: new ResourceAttribute('UserName', String, 'Yes', null),
      RootVolumeEncryptionEnabled: new ResourceAttribute('RootVolumeEncryptionEnabled', Boolean, 'No', null),
      UserVolumeEncryptionEnabled: new ResourceAttribute('UserVolumeEncryptionEnabled', Boolean, 'No', null),
      VolumeEncryptionKey: new ResourceAttribute('VolumeEncryptionKey', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Workspace: Workspace
}
