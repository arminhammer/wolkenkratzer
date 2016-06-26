'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Key extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EnableKeyRotation: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      KeyPolicy: new wolkenkratzer.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}