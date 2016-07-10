'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Application extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Application'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApplicationVersion extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ApplicationVersion'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      SourceBundle: new ResourceAttribute('SourceBundle', types.SourceBundle, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ConfigurationTemplate extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::ConfigurationTemplate'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      EnvironmentId: new ResourceAttribute('EnvironmentId', String, 'Conditional', null),
      OptionSettings: new ResourceAttributeArray('OptionSettings', types.OptionSettings, 'No', null),
      SolutionStackName: new ResourceAttribute('SolutionStackName', String, 'Conditional', null),
      SourceConfiguration: new ResourceAttribute('SourceConfiguration', types.ElasticBeanstalkSourceConfigurationPropertyType, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Environment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticBeanstalk::Environment'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      CNAMEPrefix: new ResourceAttribute('CNAMEPrefix', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      EnvironmentName: new ResourceAttribute('EnvironmentName', String, 'No', null),
      OptionSettings: new ResourceAttributeArray('OptionSettings', types.OptionSettings, 'No', null),
      SolutionStackName: new ResourceAttribute('SolutionStackName', String, 'No', null),
      Tags: new tag.TagSet(),
      TemplateName: new ResourceAttribute('TemplateName', String, 'No', null),
      Tier: new ResourceAttribute('Tier', types.ElasticBeanstalkEnvironmentTierPropertyType, 'No', null),
      VersionLabel: new ResourceAttribute('VersionLabel', String, 'No', null)
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
