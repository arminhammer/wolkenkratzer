'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module SQS */

/** @memberof module:SQS
*   @extends WKResource
* @property {Number} DelaySeconds Required: No. The time in seconds that the delivery of all messages in the queue will be delayed.
            You can specify an integer value of 0 to 900 (15 minutes). The
            default value is 0.Update requires: No interruption
* @property {Number} MaximumMessageSize Required: No. The limit of how many bytes a message can contain before Amazon SQS rejects it.  You can
            specify an integer value from 1024 bytes (1 KiB) to 262144
            bytes (256 KiB). The default value is 262144 (256 KiB).Update requires: No interruption
* @property {Number} MessageRetentionPeriod Required: No. The number of seconds Amazon SQS retains a message. You can specify an integer value from
              60 seconds (1 minute) to 1209600 seconds (14 days). The
            default value is 345600 seconds (4 days).Update requires: No interruption
* @property {String} QueueName Required: No. A name for the queue. If you don't specify a name, AWS CloudFormation generates a unique physical
            ID and uses that ID for the queue name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {Number} ReceiveMessageWaitTimeSeconds Required: No. Specifies the duration, in seconds, that the ReceiveMessage action call
            waits until a message is in the queue in order to include it in the response, as opposed
            to returning an empty response if a message is not yet available. You can specify an
            integer from 1 to 20. The short polling is used as the default
            or when you specify 0 for this property. For more information, see Amazon SQS Long Poll.Update requires: No interruption
* @property {AmazonSQSRedrivePolicy} RedrivePolicy Required: No. Specifies an existing dead letter queue to receive messages after the source queue
            (this queue) fails to process a message a specified number of times.Update requires: No interruption
* @property {Number} VisibilityTimeout Required: No. The length of time during which the queue will be unavailable once a message is delivered from the
                  queue. This blocks other components from receiving the same message and gives the initial component
                  time to process and delete the message from the queue.Values must be from 0 to 43200 seconds (12 hours). If no value is specified, the default value of
                  30 seconds will be used.For more information about SQS Queue visibility timeouts, see Visibility Timeout in the Amazon Simple Queue Service Developer
                     Guide.Update requires: No interruption
*/
class Queue extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SQS::Queue'
    let properties = {
      DelaySeconds: new ResourceAttribute('DelaySeconds', Number, 'No', null),
      MaximumMessageSize: new ResourceAttribute('MaximumMessageSize', Number, 'No', null),
      MessageRetentionPeriod: new ResourceAttribute('MessageRetentionPeriod', Number, 'No', null),
      QueueName: new ResourceAttribute('QueueName', String, 'No', null),
      ReceiveMessageWaitTimeSeconds: new ResourceAttribute('ReceiveMessageWaitTimeSeconds', Number, 'No', null),
      RedrivePolicy: new ResourceAttribute('RedrivePolicy', types.AmazonSQSRedrivePolicy, 'No', null),
      VisibilityTimeout: new ResourceAttribute('VisibilityTimeout', Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:SQS
*   @extends WKResource
* @property {Object} PolicyDocument Required: Yes. A policy document containing permissions to add to the specified SQS queues.Update requires: No interruption
* @property {String} Queues Required: Yes. The URLs of the queues to which you want to add the policy. You can use the Ref function to specify an AWS::SQS::Queue resource.Update requires: No interruption
*/
class QueuePolicy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SQS::QueuePolicy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Queues: new ResourceAttributeArray('Queues', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Queue: Queue,
  QueuePolicy: QueuePolicy
}
