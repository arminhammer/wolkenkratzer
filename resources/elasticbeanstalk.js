'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Application extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Application'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApplicationVersion extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ApplicationVersion'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SourceBundle: new wolkenkratzer.ResourceProperty(propertyTypes.SourceBundle, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationTemplate extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ConfigurationTemplate'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EnvironmentId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      OptionSettings: new wolkenkratzer.ResourceArray(propertyTypes.OptionSettings, 'No', null),
      SolutionStackName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SourceConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticBeanstalkSourceConfigurationPropertyType, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Environment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Environment'
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CNAMEPrefix: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EnvironmentName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      OptionSettings: new wolkenkratzer.ResourceArray(propertyTypes.OptionSettings, 'No', null),
      SolutionStackName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      TemplateName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tier: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticBeanstalkEnvironmentTierPropertyType, 'No', null),
      VersionLabel: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Application: Application,
  ApplicationVersion: ApplicationVersion,
  ConfigurationTemplate: ConfigurationTemplate,
  Environment: Environment
}