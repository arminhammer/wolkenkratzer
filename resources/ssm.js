'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Document extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SSM::Document'
    let properties = {
      Content: new ResourceAttribute('Content', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Document: Document
}
