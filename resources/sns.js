'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Topic extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SNS::Topic'
    let properties = {
      DisplayName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Subscription: new wolkenkratzer.ResourceArray(propertyTypes.SNSSubscriptions, 'No', null),
      TopicName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class TopicPolicy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::SNS::TopicPolicy'
    let properties = {
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      Topics: new wolkenkratzer.ResourceArray(propertyTypes.AmazonSNStopicsARNs, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Topic: Topic,
  TopicPolicy: TopicPolicy
}