'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Application extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Application'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApplicationVersion extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ApplicationVersion'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      SourceBundle: new resource.ResourceProperty(types.SourceBundle, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationTemplate extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ConfigurationTemplate'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      EnvironmentId: new resource.ResourceProperty(String, 'Conditional', null),
      OptionSettings: new resource.ResourceArray(types.OptionSettings, 'No', null),
      SolutionStackName: new resource.ResourceProperty(String, 'Conditional', null),
      SourceConfiguration: new resource.ResourceProperty(types.ElasticBeanstalkSourceConfigurationPropertyType, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Environment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Environment'
    let properties = {
      ApplicationName: new resource.ResourceProperty(String, 'Yes', null),
      CNAMEPrefix: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      EnvironmentName: new resource.ResourceProperty(String, 'No', null),
      OptionSettings: new resource.ResourceArray(types.OptionSettings, 'No', null),
      SolutionStackName: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      TemplateName: new resource.ResourceProperty(String, 'No', null),
      Tier: new resource.ResourceProperty(types.ElasticBeanstalkEnvironmentTierPropertyType, 'No', null),
      VersionLabel: new resource.ResourceProperty(String, 'No', null)
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