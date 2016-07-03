'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Workspace extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WorkSpaces::Workspace'
    let properties = {
      BundleId: new resource.ResourceProperty(String, 'Yes', null),
      DirectoryId: new resource.ResourceProperty(String, 'Yes', null),
      UserName: new resource.ResourceProperty(String, 'Yes', null),
      RootVolumeEncryptionEnabled: new resource.ResourceProperty(Boolean, 'No', null),
      UserVolumeEncryptionEnabled: new resource.ResourceProperty(Boolean, 'No', null),
      VolumeEncryptionKey: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Workspace: Workspace
}