'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECS::Cluster'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Service extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECS::Service'
    let properties = {
      Cluster: new ResourceAttribute('Cluster', String, 'No', null),
      DeploymentConfiguration: new ResourceAttribute('DeploymentConfiguration', types.AmazonEC2ContainerServiceServiceDeploymentConfiguration, 'No', null),
      DesiredCount: new ResourceAttribute('DesiredCount', String, 'Yes', null),
      LoadBalancers: new ResourceAttributeArray('LoadBalancers', types.AmazonEC2ContainerServiceServiceLoadBalancers, 'No', null),
      Role: new ResourceAttribute('Role', String, 'Conditional', null),
      TaskDefinition: new ResourceAttribute('TaskDefinition', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class TaskDefinition extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ECS::TaskDefinition'
    let properties = {
      ContainerDefinitions: new ResourceAttributeArray('ContainerDefinitions', types.AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions, 'Yes', null),
      Volumes: new ResourceAttributeArray('Volumes', types.AmazonEC2ContainerServiceTaskDefinitionVolumes, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  Service: Service,
  TaskDefinition: TaskDefinition
}
