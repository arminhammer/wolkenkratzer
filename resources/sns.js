'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Topic extends baseawsobject.BaseAWSObject {
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

class TopicPolicy extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SNS::TopicPolicy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Topics: new ResourceAttributeArray('Topics', types.AmazonSNStopicsARNs, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Topic: Topic,
  TopicPolicy: TopicPolicy
}
