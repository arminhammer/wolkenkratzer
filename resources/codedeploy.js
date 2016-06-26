'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Application extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::Application'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentConfig extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentConfig'
    let properties = {
      DeploymentConfigName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MinimumHealthyHosts: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodeDeployDeploymentConfigMinimumHealthyHosts, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeploymentGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentGroup'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      AutoScalingGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      Deployment: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodeDeployDeploymentGroupDeployment, 'No', null),
      DeploymentConfigName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DeploymentGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Ec2TagFilters: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodeDeployDeploymentGroupEc2TagFilters, 'No', null),
      OnPremisesInstanceTagFilters: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters, 'No', null),
      ServiceRoleArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Application: Application,
  DeploymentConfig: DeploymentConfig,
  DeploymentGroup: DeploymentGroup
}