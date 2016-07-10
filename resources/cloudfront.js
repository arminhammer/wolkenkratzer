'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Distribution extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFront::Distribution'
    let properties = {
      DistributionConfig: new ResourceAttribute('DistributionConfig', types.CloudFrontDistributionConfig, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Distribution: Distribution
}
