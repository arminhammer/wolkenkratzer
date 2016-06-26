'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Cluster extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::Cluster'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Service extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::Service'
    let properties = {
      Cluster: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DeploymentConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonEC2ContainerServiceServiceDeploymentConfiguration, 'No', null),
      DesiredCount: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LoadBalancers: new wolkenkratzer.ResourceArray(propertyTypes.AmazonEC2ContainerServiceServiceLoadBalancers, 'No', null),
      Role: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TaskDefinition: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class TaskDefinition extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::TaskDefinition'
    let properties = {
      ContainerDefinitions: new wolkenkratzer.ResourceArray(propertyTypes.AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions, 'Yes', null),
      Volumes: new wolkenkratzer.ResourceArray(propertyTypes.AmazonEC2ContainerServiceTaskDefinitionVolumes, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  Service: Service,
  TaskDefinition: TaskDefinition
}