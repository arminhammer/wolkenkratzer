'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module SNS */

/** @memberof module:SNS
*   @extends WKResource
* @property {String} DisplayName Required: No. A developer-defined string that can be used to identify this SNS topic.Update requires: No interruption
* @property {AmazonSNSSubscriptionPropertyType} Subscription Required: No. The SNS subscriptions (endpoints) for this topic.Update requires: No interruption
* @property {String} TopicName Required: No. A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique
                  physical ID and uses that ID for the topic name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
*/
function Topic (name, propertiesObject) {
    let resourceType = 'AWS::SNS::Topic'
    let properties = {
      DisplayName: new ResourceAttribute('DisplayName', String, 'No', null),
      Subscription: new ResourceAttributeArray('Subscription', types.AmazonSNSSubscriptionPropertyType, 'No', null),
      TopicName: new ResourceAttribute('TopicName', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Topic.prototype = Object.create(WKResource.prototype)

/** @memberof module:SNS
*   @extends WKResource
* @property {Object} PolicyDocument Required: Yes. A policy document that contains permissions to add to the specified SNS
            topics.Update requires: No interruption
* @property {String} Topics Required: Yes. The Amazon Resource Names (ARN) of the topics to which you want to add the policy.
            You can use the Ref function to
            specify an AWS::SNS::Topic
            resource.Update requires: No interruption
*/
function TopicPolicy (name, propertiesObject) {
    let resourceType = 'AWS::SNS::TopicPolicy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Topics: new ResourceAttributeArray('Topics', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
TopicPolicy.prototype = Object.create(WKResource.prototype)

module.exports = {  Topic: Topic,
  TopicPolicy: TopicPolicy
}
