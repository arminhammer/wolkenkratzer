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
* @property {SNSSubscriptions} Subscription Required: No. The SNS subscriptions (endpoints) for this topic.Update requires: No interruption
* @property {String} TopicName Required: No. A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique
                  physical ID and uses that ID for the topic name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
*/
class Topic extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SNS::Topic'
    let properties = {
      DisplayName: new ResourceAttribute('DisplayName', String, 'No', null),
      Subscription: new ResourceAttributeArray('Subscription', types.SNSSubscriptions, 'No', null),
      TopicName: new ResourceAttribute('TopicName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:SNS
*   @extends WKResource
* @property {Object} PolicyDocument Required: Yes. A policy document that contains permissions to add to the specified SNS
            topics.Update requires: No interruption
* @property {AmazonSNStopicsARNs} Topics Required: Yes. The Amazon Resource Names (ARN) of the topics to which you want to add the policy.
            You can use the Ref function to
            specify an AWS::SNS::Topic
            resource.Update requires: No interruption
*/
class TopicPolicy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SNS::TopicPolicy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Topics: new ResourceAttributeArray('Topics', types.AmazonSNStopicsARNs, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Topic: Topic,
  TopicPolicy: TopicPolicy
}
