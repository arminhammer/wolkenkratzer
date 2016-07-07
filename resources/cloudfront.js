'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Distribution extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFront::Distribution'
    let properties = {
      DistributionConfig: new resource.ResourceProperty('DistributionConfig', types.DistributionConfigtype, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Distribution: Distribution
}