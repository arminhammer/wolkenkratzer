'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class ConfigRule extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigRule'
    let properties = {
      ConfigRuleName: new ResourceAttribute('ConfigRuleName', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      InputParameters: new ResourceAttribute('InputParameters', Object, 'No', null),
      MaximumExecutionFrequency: new ResourceAttribute('MaximumExecutionFrequency', String, 'No', null),
      Scope: new ResourceAttribute('Scope', types.AWSConfigConfigRuleScope, 'No', null),
      Source: new ResourceAttribute('Source', types.AWSConfigConfigRuleSource, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationRecorder extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigurationRecorder'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      RecordingGroup: new ResourceAttribute('RecordingGroup', types.AWSConfigConfigurationRecorderRecordingGroup, 'No', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeliveryChannel extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::DeliveryChannel'
    let properties = {
      ConfigSnapshotDeliveryProperties: new ResourceAttribute('ConfigSnapshotDeliveryProperties', types.AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      S3BucketName: new ResourceAttribute('S3BucketName', String, 'Yes', null),
      S3KeyPrefix: new ResourceAttribute('S3KeyPrefix', String, 'No', null),
      SnsTopicARN: new ResourceAttribute('SnsTopicARN', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  ConfigRule: ConfigRule,
  ConfigurationRecorder: ConfigurationRecorder,
  DeliveryChannel: DeliveryChannel
}
