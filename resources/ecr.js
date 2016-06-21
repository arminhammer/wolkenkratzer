/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Repository extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECR::Repository'
    let properties = {
      RepositoryName: new cloudpotato.ResourceProperty(String, false, null),
      RepositoryPolicyText: new cloudpotato.ResourceProperty(Object, false, null),
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Repository: Repository
}