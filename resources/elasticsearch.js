'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Domain extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Elasticsearch::Domain'
    let properties = {
      AccessPolicies: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      AdvancedOptions: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      DomainName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EBSOptions: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticsearchServiceDomainEBSOptions, 'No', null),
      ElasticsearchClusterConfig: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticsearchServiceDomainElasticsearchClusterConfig, 'No', null),
      SnapshotOptions: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticsearchServiceDomainSnapshotOptions, 'No', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}