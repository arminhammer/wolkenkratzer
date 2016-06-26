'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Queue extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SQS::Queue'
    let properties = {
      DelaySeconds: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MaximumMessageSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MessageRetentionPeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      QueueName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ReceiveMessageWaitTimeSeconds: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RedrivePolicy: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonSQSRedrivePolicy, 'No', null),
      VisibilityTimeout: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class QueuePolicy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SQS::QueuePolicy'
    let properties = {
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      Queues: new wolkenkratzer.ResourceArray(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Queue: Queue,
  QueuePolicy: QueuePolicy
}