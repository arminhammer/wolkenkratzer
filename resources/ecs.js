'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::Cluster'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Service extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::Service'
    let properties = {
      Cluster: new resource.ResourceProperty('Cluster', String, 'No', null),
      DeploymentConfiguration: new resource.ResourceProperty('DeploymentConfiguration', types.AmazonEC2ContainerServiceServiceDeploymentConfiguration, 'No', null),
      DesiredCount: new resource.ResourceProperty('DesiredCount', String, 'Yes', null),
      LoadBalancers: new resource.ResourceArray('LoadBalancers', types.AmazonEC2ContainerServiceServiceLoadBalancers, 'No', null),
      Role: new resource.ResourceProperty('Role', String, 'Conditional', null),
      TaskDefinition: new resource.ResourceProperty('TaskDefinition', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class TaskDefinition extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ECS::TaskDefinition'
    let properties = {
      ContainerDefinitions: new resource.ResourceArray('ContainerDefinitions', types.AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions, 'Yes', null),
      Volumes: new resource.ResourceArray('Volumes', types.AmazonEC2ContainerServiceTaskDefinitionVolumes, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  Service: Service,
  TaskDefinition: TaskDefinition
}