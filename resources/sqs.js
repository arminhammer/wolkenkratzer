'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Queue extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SQS::Queue'
    let properties = {
      DelaySeconds: new resource.ResourceProperty('DelaySeconds', Number, 'No', null),
      MaximumMessageSize: new resource.ResourceProperty('MaximumMessageSize', Number, 'No', null),
      MessageRetentionPeriod: new resource.ResourceProperty('MessageRetentionPeriod', Number, 'No', null),
      QueueName: new resource.ResourceProperty('QueueName', String, 'No', null),
      ReceiveMessageWaitTimeSeconds: new resource.ResourceProperty('ReceiveMessageWaitTimeSeconds', Number, 'No', null),
      RedrivePolicy: new resource.ResourceProperty('RedrivePolicy', types.AmazonSQSRedrivePolicy, 'No', null),
      VisibilityTimeout: new resource.ResourceProperty('VisibilityTimeout', Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class QueuePolicy extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SQS::QueuePolicy'
    let properties = {
      PolicyDocument: new resource.ResourceProperty('PolicyDocument', Object, 'Yes', null),
      Queues: new resource.ResourceArray('Queues', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Queue: Queue,
  QueuePolicy: QueuePolicy
}
