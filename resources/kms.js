'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Key extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::KMS::Key'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      EnableKeyRotation: new ResourceAttribute('EnableKeyRotation', Boolean, 'No', null),
      KeyPolicy: new ResourceAttribute('KeyPolicy', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Key: Key
}
