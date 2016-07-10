'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Domain extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Elasticsearch::Domain'
    let properties = {
      AccessPolicies: new ResourceAttribute('AccessPolicies', Object, 'No', null),
      AdvancedOptions: new ResourceAttribute('AdvancedOptions', Object, 'No', null),
      DomainName: new ResourceAttribute('DomainName', String, 'No', null),
      EBSOptions: new ResourceAttribute('EBSOptions', types.AmazonElasticsearchServiceDomainEBSOptions, 'No', null),
      ElasticsearchClusterConfig: new ResourceAttribute('ElasticsearchClusterConfig', types.AmazonElasticsearchServiceDomainElasticsearchClusterConfig, 'No', null),
      SnapshotOptions: new ResourceAttribute('SnapshotOptions', types.AmazonElasticsearchServiceDomainSnapshotOptions, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Domain: Domain
}
