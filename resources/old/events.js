/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class Rule extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      EventPattern: new wolkenkratzer.ResourceProperty(Object, false, null),
      Name: new wolkenkratzer.ResourceProperty(String, false, null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, false, null),
      ScheduleExpression: new wolkenkratzer.ResourceProperty(String, false, null),
      State: new wolkenkratzer.ResourceProperty(String, false, null),
      Targets: new wolkenkratzer.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}