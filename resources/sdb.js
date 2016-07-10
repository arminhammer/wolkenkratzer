'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Domain extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SDB::Domain'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}
