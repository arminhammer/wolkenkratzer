'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Key extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Enabled: new resource.ResourceProperty('Enabled', Boolean, 'No', null),
      EnableKeyRotation: new resource.ResourceProperty('EnableKeyRotation', Boolean, 'No', null),
      KeyPolicy: new resource.ResourceProperty('KeyPolicy', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}
