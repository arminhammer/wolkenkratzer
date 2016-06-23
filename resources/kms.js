/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class Key extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      EnableKeyRotation: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      KeyPolicy: new wolkenkratzer.ResourceProperty(Object, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}