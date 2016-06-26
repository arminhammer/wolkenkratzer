'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Rule extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EventPattern: new wolkenkratzer.ResourceProperty(Object, 'Conditional', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      State: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Targets: new wolkenkratzer.ResourceArray(propertyTypes.AmazonCloudWatchEventsRuleTarget, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}