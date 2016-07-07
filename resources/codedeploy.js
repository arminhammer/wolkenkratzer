'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Application extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::Application'
    let properties = {
      ApplicationName: new resource.ResourceProperty('ApplicationName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentConfig extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentConfig'
    let properties = {
      DeploymentConfigName: new resource.ResourceProperty('DeploymentConfigName', String, 'No', null),
      MinimumHealthyHosts: new resource.ResourceProperty('MinimumHealthyHosts', types.AWSCodeDeployDeploymentConfigMinimumHealthyHosts, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentGroup'
    let properties = {
      ApplicationName: new resource.ResourceProperty('ApplicationName', String, 'Yes', null),
      AutoScalingGroups: new resource.ResourceArray('AutoScalingGroups', String, 'No', null),
      Deployment: new resource.ResourceProperty('Deployment', types.AWSCodeDeployDeploymentGroupDeployment, 'No', null),
      DeploymentConfigName: new resource.ResourceProperty('DeploymentConfigName', String, 'No', null),
      DeploymentGroupName: new resource.ResourceProperty('DeploymentGroupName', String, 'No', null),
      Ec2TagFilters: new resource.ResourceProperty('Ec2TagFilters', types.AWSCodeDeployDeploymentGroupEc2TagFilters, 'No', null),
      OnPremisesInstanceTagFilters: new resource.ResourceProperty('OnPremisesInstanceTagFilters', types.AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters, 'No', null),
      ServiceRoleArn: new resource.ResourceProperty('ServiceRoleArn', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Application: Application,
  DeploymentConfig: DeploymentConfig,
  DeploymentGroup: DeploymentGroup
}