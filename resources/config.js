'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class ConfigRule extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigRule'
    let properties = {
      ConfigRuleName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      InputParameters: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      MaximumExecutionFrequency: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Scope: new wolkenkratzer.ResourceProperty(propertyTypes.AWSConfigConfigRuleScope, 'No', null),
      Source: new wolkenkratzer.ResourceProperty(propertyTypes.AWSConfigConfigRuleSource, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationRecorder extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigurationRecorder'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RecordingGroup: new wolkenkratzer.ResourceProperty(propertyTypes.AWSConfigConfigurationRecorderRecordingGroup, 'No', null),
      RoleARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DeliveryChannel extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Config::DeliveryChannel'
    let properties = {
      ConfigSnapshotDeliveryProperties: new wolkenkratzer.ResourceProperty(propertyTypes.AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      S3BucketName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3KeyPrefix: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnsTopicARN: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  ConfigRule: ConfigRule,
  ConfigurationRecorder: ConfigurationRecorder,
  DeliveryChannel: DeliveryChannel
}