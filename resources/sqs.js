'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

module.exports = {
  Queue: Queue,
  QueuePolicy: QueuePolicy
}
