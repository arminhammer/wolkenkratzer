'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Topic extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SNS::Topic'
    let properties = {
      DisplayName: new resource.ResourceProperty('DisplayName', String, 'No', null),
      Subscription: new resource.ResourceArray('Subscription', types.SNSSubscriptions, 'No', null),
      TopicName: new resource.ResourceProperty('TopicName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class TopicPolicy extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SNS::TopicPolicy'
    let properties = {
      PolicyDocument: new resource.ResourceProperty('PolicyDocument', Object, 'Yes', null),
      Topics: new resource.ResourceArray('Topics', types.AmazonSNStopicsARNs, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Topic: Topic,
  TopicPolicy: TopicPolicy
}
