'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Domain extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Elasticsearch::Domain'
    let properties = {
      AccessPolicies: new resource.ResourceProperty(Object, 'No', null),
      AdvancedOptions: new resource.ResourceProperty(Object, 'No', null),
      DomainName: new resource.ResourceProperty(String, 'No', null),
      EBSOptions: new resource.ResourceProperty(types.AmazonElasticsearchServiceDomainEBSOptions, 'No', null),
      ElasticsearchClusterConfig: new resource.ResourceProperty(types.AmazonElasticsearchServiceDomainElasticsearchClusterConfig, 'No', null),
      SnapshotOptions: new resource.ResourceProperty(types.AmazonElasticsearchServiceDomainSnapshotOptions, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}