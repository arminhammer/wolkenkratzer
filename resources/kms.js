'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Key extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      Enabled: new resource.ResourceProperty(Boolean, 'No', null),
      EnableKeyRotation: new resource.ResourceProperty(Boolean, 'No', null),
      KeyPolicy: new resource.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}