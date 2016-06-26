'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Repository extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECR::Repository'
    let properties = {
      RepositoryName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RepositoryPolicyText: new wolkenkratzer.ResourceProperty(Object, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Repository: Repository
}