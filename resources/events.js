'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Rule extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      EventPattern: new resource.ResourceProperty(Object, 'Conditional', null),
      Name: new resource.ResourceProperty(String, 'No', null),
      RoleArn: new resource.ResourceProperty(String, 'No', null),
      State: new resource.ResourceProperty(String, 'No', null),
      Targets: new resource.ResourceArray(types.AmazonCloudWatchEventsRuleTarget, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}