/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Key extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: String,new cloudpotato.ResourceProperty(String, false, null),
      Enabled: new cloudpotato.ResourceProperty(Boolean, false, null),
      EnableKeyRotation: new cloudpotato.ResourceProperty(Boolean, false, null),
      KeyPolicy: new cloudpotato.ResourceProperty(Object, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}