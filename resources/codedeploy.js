'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Application extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::Application'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentConfig extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentConfig'
    let properties = {
      DeploymentConfigName: new ResourceAttribute('DeploymentConfigName', String, 'No', null),
      MinimumHealthyHosts: new ResourceAttribute('MinimumHealthyHosts', types.AWSCodeDeployDeploymentConfigMinimumHealthyHosts, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentGroup'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      AutoScalingGroups: new ResourceAttributeArray('AutoScalingGroups', String, 'No', null),
      Deployment: new ResourceAttribute('Deployment', types.AWSCodeDeployDeploymentGroupDeployment, 'No', null),
      DeploymentConfigName: new ResourceAttribute('DeploymentConfigName', String, 'No', null),
      DeploymentGroupName: new ResourceAttribute('DeploymentGroupName', String, 'No', null),
      Ec2TagFilters: new ResourceAttribute('Ec2TagFilters', types.AWSCodeDeployDeploymentGroupEc2TagFilters, 'No', null),
      OnPremisesInstanceTagFilters: new ResourceAttribute('OnPremisesInstanceTagFilters', types.AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters, 'No', null),
      ServiceRoleArn: new ResourceAttribute('ServiceRoleArn', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Application: Application,
  DeploymentConfig: DeploymentConfig,
  DeploymentGroup: DeploymentGroup
}
