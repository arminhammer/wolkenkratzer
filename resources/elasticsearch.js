'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Domain extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Elasticsearch::Domain'
    let properties = {
      AccessPolicies: new resource.ResourceProperty('AccessPolicies', Object, 'No', null),
      AdvancedOptions: new resource.ResourceProperty('AdvancedOptions', Object, 'No', null),
      DomainName: new resource.ResourceProperty('DomainName', String, 'No', null),
      EBSOptions: new resource.ResourceProperty('EBSOptions', types.AmazonElasticsearchServiceDomainEBSOptions, 'No', null),
      ElasticsearchClusterConfig: new resource.ResourceProperty('ElasticsearchClusterConfig', types.AmazonElasticsearchServiceDomainElasticsearchClusterConfig, 'No', null),
      SnapshotOptions: new resource.ResourceProperty('SnapshotOptions', types.AmazonElasticsearchServiceDomainSnapshotOptions, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}
