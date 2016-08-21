'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ApplicationAutoScaling */

/** @memberof module:ApplicationAutoScaling
*   @extends WKResource
* @property {Number} MaxCapacity Required: Yes. The maximum value that Application Auto Scaling can use to scale a target during a scaling activity.Update requires: No interruption
* @property {Number} MinCapacity Required: Yes. The minimum value that Application Auto Scaling can use to scale a target during a scaling activity.Update requires: No interruption
* @property {String} ResourceId Required: Yes. The unique resource identifier to associate with this scalable target. For more information, see the ResourceId parameter for the RegisterScalableTarget action in the Application Auto Scaling API Reference.Update requires: Replacement
* @property {String} RoleARN Required: Yes. The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that allows Application Auto Scaling to modify your scalable target.Update requires: No interruption
* @property {String} ScalableDimension Required: Yes. The scalable dimension associated with the scalable target. Specify the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon EC2 Container Service service. For valid values, see the ScalableDimension content for the ScalingPolicy data type in the Application Auto Scaling API Reference.Update requires: Replacement
* @property {String} ServiceNamespace Required: Yes. The AWS service namespace of the scalable target. For a list of service namespaces, see AWS Service Namespaces in the AWS General Reference.Update requires: Replacement
*/
function ScalableTarget (name, propertiesObject) {
    let resourceType = 'AWS::ApplicationAutoScaling::ScalableTarget'
    let properties = {
      MaxCapacity: new ResourceAttribute('MaxCapacity', Number, 'Yes', null),
      MinCapacity: new ResourceAttribute('MinCapacity', Number, 'Yes', null),
      ResourceId: new ResourceAttribute('ResourceId', String, 'Yes', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null),
      ScalableDimension: new ResourceAttribute('ScalableDimension', String, 'Yes', null),
      ServiceNamespace: new ResourceAttribute('ServiceNamespace', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ScalableTarget.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApplicationAutoScaling
*   @extends WKResource
* @property {String} PolicyName Required: Yes. A name for the scaling policy.Update requires: Replacement
* @property {String} PolicyType Required: No. An
             Application Auto Scaling policy type. For valid values, see the
              PolicyType parameter for the PutScalingPolicy action in the
              Application Auto Scaling API Reference.Update requires: No interruption
* @property {String} ResourceId Required: Conditional. The unique resource identifier for the scalable target that this scaling policy applies to. For more information, see the ResourceId parameter for the PutScalingPolicy action in the Application Auto Scaling API Reference.Update requires: Replacement
* @property {String} ScalableDimension Required: Conditional. The scalable dimension of the scalable target that this scaling policy applies to.
            The scalable dimension contains the service namespace, resource type, and scaling
            property, such as ecs:service:DesiredCount for the desired task count of an
            Amazon ECS
            service.Update requires: Replacement
* @property {String} ServiceNamespace Required: Conditional. The AWS service namespace of the scalable target that this scaling policy applies to. For a list of service namespaces, see AWS Service Namespaces in the AWS General Reference.Update requires: Replacement
* @property {String} ScalingTargetId Required: Conditional. The AWS CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about
            the ID, see the Return Value section of the AWS::ApplicationAutoScaling::ScalableTarget resource.Update requires: Replacement
* @property {ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration} StepScalingPolicyConfiguration Required: No. A step policy that configures when Application Auto Scaling scales resources up or down, and by how much.Update requires: No interruption
*/
function ScalingPolicy (name, propertiesObject) {
    let resourceType = 'AWS::ApplicationAutoScaling::ScalingPolicy'
    let properties = {
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null),
      PolicyType: new ResourceAttribute('PolicyType', String, 'No', null),
      ResourceId: new ResourceAttribute('ResourceId', String, 'Conditional', null),
      ScalableDimension: new ResourceAttribute('ScalableDimension', String, 'Conditional', null),
      ServiceNamespace: new ResourceAttribute('ServiceNamespace', String, 'Conditional', null),
      ScalingTargetId: new ResourceAttribute('ScalingTargetId', String, 'Conditional', null),
      StepScalingPolicyConfiguration: new ResourceAttribute('StepScalingPolicyConfiguration', types.ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ScalingPolicy.prototype = Object.create(WKResource.prototype)

module.exports = {  ScalableTarget: ScalableTarget,
  ScalingPolicy: ScalingPolicy
}
