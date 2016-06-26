'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Domain extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SDB::Domain'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}