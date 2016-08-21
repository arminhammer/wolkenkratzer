'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ECS */

/** @memberof module:ECS
*   @extends WKResource
*/
function Cluster (name, propertiesObject) {
    let resourceType = 'AWS::ECS::Cluster'
    let properties = {
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Cluster.prototype = Object.create(WKResource.prototype)

/** @memberof module:ECS
*   @extends WKResource
* @property {String} Cluster Required: No. The name or Amazon Resource Name (ARN) of the cluster that you want to run your
                  service on. If you do not specify a cluster, Amazon ECS uses the default
                  cluster.Update requires: Replacement
* @property {AmazonEC2ContainerServiceServiceDeploymentConfiguration} DeploymentConfiguration Required: No. Configures how many tasks run during a deployment.Update requires: No interruption
* @property {String} DesiredCount Required: Yes. The number of simultaneous tasks, which you specify by using the
                     TaskDefinition property, that you want to run on the
                  cluster.Update requires: No interruption
* @property {AmazonEC2ContainerServiceServiceLoadBalancers} LoadBalancers Required: No. A list of load balancer objects to associate with the cluster. For information about the number of load balancers you can specify per service, see Service Load Balancing in the Amazon EC2 Container Service Developer Guide.Update requires: Replacement
* @property {String} Role Required: Conditional. The name or ARN of an AWS Identity and Access Management (IAM) role that allows your Amazon ECS container
                  agent to make calls to your load balancer.NoteIn some cases, you might need to add a dependency on the service role's
                     policy. For more information, see IAM role policy in DependsOn Attribute.Update requires: Replacement
* @property {String} TaskDefinition Required: Yes. The ARN of the task definition that you want to run on the cluster.Update requires: Some interruptions
*/
function Service (name, propertiesObject) {
    let resourceType = 'AWS::ECS::Service'
    let properties = {
      Cluster: new ResourceAttribute('Cluster', String, 'No', null),
      DeploymentConfiguration: new ResourceAttribute('DeploymentConfiguration', types.AmazonEC2ContainerServiceServiceDeploymentConfiguration, 'No', null),
      DesiredCount: new ResourceAttribute('DesiredCount', String, 'Yes', null),
      LoadBalancers: new ResourceAttributeArray('LoadBalancers', types.AmazonEC2ContainerServiceServiceLoadBalancers, 'No', null),
      Role: new ResourceAttribute('Role', String, 'Conditional', null),
      TaskDefinition: new ResourceAttribute('TaskDefinition', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Service.prototype = Object.create(WKResource.prototype)

/** @memberof module:ECS
*   @extends WKResource
* @property {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions} ContainerDefinitions Required: Yes. A list of container definitions in JSON format that describe the containers
            that make up your task.Update requires: Replacement
* @property {AmazonEC2ContainerServiceTaskDefinitionVolumes} Volumes Required: Yes. A list of volume definitions in JSON format for volumes that you can use in
            your container definitions.Update requires: Replacement
*/
function TaskDefinition (name, propertiesObject) {
    let resourceType = 'AWS::ECS::TaskDefinition'
    let properties = {
      ContainerDefinitions: new ResourceAttributeArray('ContainerDefinitions', types.AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions, 'Yes', null),
      Volumes: new ResourceAttributeArray('Volumes', types.AmazonEC2ContainerServiceTaskDefinitionVolumes, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
TaskDefinition.prototype = Object.create(WKResource.prototype)

module.exports = {  Cluster: Cluster,
  Service: Service,
  TaskDefinition: TaskDefinition
}
