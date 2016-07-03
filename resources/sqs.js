'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Queue extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SQS::Queue'
    let properties = {
      DelaySeconds: new resource.ResourceProperty(Number, 'No', null),
      MaximumMessageSize: new resource.ResourceProperty(Number, 'No', null),
      MessageRetentionPeriod: new resource.ResourceProperty(Number, 'No', null),
      QueueName: new resource.ResourceProperty(String, 'No', null),
      ReceiveMessageWaitTimeSeconds: new resource.ResourceProperty(Number, 'No', null),
      RedrivePolicy: new resource.ResourceProperty(types.AmazonSQSRedrivePolicy, 'No', null),
      VisibilityTimeout: new resource.ResourceProperty(Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class QueuePolicy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SQS::QueuePolicy'
    let properties = {
      PolicyDocument: new resource.ResourceProperty(Object, 'Yes', null),
      Queues: new resource.ResourceArray(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Queue: Queue,
  QueuePolicy: QueuePolicy
}