'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class ConfigRule extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigRule'
    let properties = {
      ConfigRuleName: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      InputParameters: new resource.ResourceProperty(Object, 'No', null),
      MaximumExecutionFrequency: new resource.ResourceProperty(String, 'No', null),
      Scope: new resource.ResourceProperty(types.AWSConfigConfigRuleScope, 'No', null),
      Source: new resource.ResourceProperty(types.AWSConfigConfigRuleSource, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationRecorder extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigurationRecorder'
    let properties = {
      Name: new resource.ResourceProperty(String, 'No', null),
      RecordingGroup: new resource.ResourceProperty(types.AWSConfigConfigurationRecorderRecordingGroup, 'No', null),
      RoleARN: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeliveryChannel extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::DeliveryChannel'
    let properties = {
      ConfigSnapshotDeliveryProperties: new resource.ResourceProperty(types.AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties, 'No', null),
      Name: new resource.ResourceProperty(String, 'No', null),
      S3BucketName: new resource.ResourceProperty(String, 'Yes', null),
      S3KeyPrefix: new resource.ResourceProperty(String, 'No', null),
      SnsTopicARN: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  ConfigRule: ConfigRule,
  ConfigurationRecorder: ConfigurationRecorder,
  DeliveryChannel: DeliveryChannel
}