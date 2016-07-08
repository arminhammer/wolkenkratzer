'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class ConfigRule extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigRule'
    let properties = {
      ConfigRuleName: new resource.ResourceProperty('ConfigRuleName', String, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      InputParameters: new resource.ResourceProperty('InputParameters', Object, 'No', null),
      MaximumExecutionFrequency: new resource.ResourceProperty('MaximumExecutionFrequency', String, 'No', null),
      Scope: new resource.ResourceProperty('Scope', types.AWSConfigConfigRuleScope, 'No', null),
      Source: new resource.ResourceProperty('Source', types.AWSConfigConfigRuleSource, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationRecorder extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigurationRecorder'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      RecordingGroup: new resource.ResourceProperty('RecordingGroup', types.AWSConfigConfigurationRecorderRecordingGroup, 'No', null),
      RoleARN: new resource.ResourceProperty('RoleARN', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeliveryChannel extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Config::DeliveryChannel'
    let properties = {
      ConfigSnapshotDeliveryProperties: new resource.ResourceProperty('ConfigSnapshotDeliveryProperties', types.AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      S3BucketName: new resource.ResourceProperty('S3BucketName', String, 'Yes', null),
      S3KeyPrefix: new resource.ResourceProperty('S3KeyPrefix', String, 'No', null),
      SnsTopicARN: new resource.ResourceProperty('SnsTopicARN', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  ConfigRule: ConfigRule,
  ConfigurationRecorder: ConfigurationRecorder,
  DeliveryChannel: DeliveryChannel
}
