/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class Repository extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECR::Repository'
    let properties = {
      RepositoryName: new wolkenkratzer.ResourceProperty(String, false, null),
      RepositoryPolicyText: new wolkenkratzer.ResourceProperty(Object, false, null),
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Repository: Repository
}