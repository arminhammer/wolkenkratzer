'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Rule extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      EventPattern: new ResourceAttribute('EventPattern', Object, 'Conditional', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'No', null),
      State: new ResourceAttribute('State', String, 'No', null),
      Targets: new ResourceAttributeArray('Targets', types.AmazonCloudWatchEventsRuleTarget, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Rule: Rule
}
