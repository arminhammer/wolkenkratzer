'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Application extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::Application'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentConfig extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentConfig'
    let properties = {
      DeploymentConfigName: new resource.ResourceProperty(String, 'No', null),
      MinimumHealthyHosts: new resource.ResourceProperty(types.AWSCodeDeployDeploymentConfigMinimumHealthyHosts, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentGroup'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'Yes', null),
      AutoScalingGroups: new resource.ResourceArray(String, 'No', null),
      Deployment: new resource.ResourceProperty(types.AWSCodeDeployDeploymentGroupDeployment, 'No', null),
      DeploymentConfigName: new resource.ResourceProperty(String, 'No', null),
      DeploymentGroupName: new resource.ResourceProperty(String, 'No', null),
      Ec2TagFilters: new resource.ResourceProperty(types.AWSCodeDeployDeploymentGroupEc2TagFilters, 'No', null),
      OnPremisesInstanceTagFilters: new resource.ResourceProperty(types.AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters, 'No', null),
      ServiceRoleArn: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Application: Application,
  DeploymentConfig: DeploymentConfig,
  DeploymentGroup: DeploymentGroup
}