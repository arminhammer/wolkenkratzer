'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Rule extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      EventPattern: new resource.ResourceProperty('EventPattern', Object, 'Conditional', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      RoleArn: new resource.ResourceProperty('RoleArn', String, 'No', null),
      State: new resource.ResourceProperty('State', String, 'No', null),
      Targets: new resource.ResourceArray('Targets', types.AmazonCloudWatchEventsRuleTarget, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}