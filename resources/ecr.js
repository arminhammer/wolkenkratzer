'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Repository extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECR::Repository'
    let properties = {
      RepositoryName: new ResourceAttribute('RepositoryName', String, 'No', null),
      RepositoryPolicyText: new ResourceAttribute('RepositoryPolicyText', Object, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Repository: Repository
}
