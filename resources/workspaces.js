'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Workspace extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WorkSpaces::Workspace'
    let properties = {
      BundleId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DirectoryId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      UserName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RootVolumeEncryptionEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      UserVolumeEncryptionEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      VolumeEncryptionKey: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Workspace: Workspace
}