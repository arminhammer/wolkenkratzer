/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Rule extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new cloudpotato.ResourceProperty(String, false, null),
      EventPattern: new cloudpotato.ResourceProperty(Object, false, null),
      Name: new cloudpotato.ResourceProperty(String, false, null),
      RoleArn: new cloudpotato.ResourceProperty(String, false, null),
      ScheduleExpression: new cloudpotato.ResourceProperty(String, false, null),
      State: new cloudpotato.ResourceProperty(String, false, null),
      Targets: new cloudpotato.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}