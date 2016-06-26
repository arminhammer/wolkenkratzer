'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Distribution extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFront::Distribution'
    let properties = {
      DistributionConfig: new wolkenkratzer.ResourceProperty(propertyTypes.DistributionConfigtype, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Distribution: Distribution
}