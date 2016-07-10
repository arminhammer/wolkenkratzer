'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ElasticBeanstalk */

/** @memberof module:ElasticBeanstalk
*   @extends WKResource
* @property {String} ApplicationName Required: No. A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates
                  a unique physical ID and uses that ID for the application name. For more
                  information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} Description Required: No. An optional description of this application.Update requires: No interruption
*/
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

/** @memberof module:ElasticBeanstalk
*   @extends WKResource
* @property {String} ApplicationName Required: Yes. Name of the Elastic Beanstalk application that is associated with this application
                  version.Update requires: Replacement
* @property {String} Description Required: No. A description of this application version.Update requires: Some interruptions
* @property {SourceBundle} SourceBundle Required: Yes. The location of the source bundle for this version.Update requires: Replacement
*/
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

/** @memberof module:ElasticBeanstalk
*   @extends WKResource
* @property {String} ApplicationName Required: Yes. Name of the Elastic Beanstalk application that is associated with this configuration
                  template.Update requires: Replacement
* @property {String} Description Required: No. An optional description for this configuration.Update requires: Some interruptions
* @property {String} EnvironmentId Required: Conditional. An environment whose settings you want to use to create the configuration
                  template. You must specify this property if you don't specify the
                     SolutionStackName or SourceConfiguration
                  properties.Update requires: Replacement
* @property {OptionSettings} OptionSettings Required: No. A list of 
                     OptionSettings for this Elastic Beanstalk configuration. For a complete
                  list of Elastic Beanstalk configuration options, see  Option
                     Values, in the AWS Elastic Beanstalk Developer
                     Guide.Update requires: Some interruptions
* @property {String} SolutionStackName Required: Conditional. The name of an Elastic Beanstalk solution stack that this configuration will use. A
                  solution stack specifies the operating system, architecture, and application
                  server for a configuration template, such as 64bit Amazon Linux 2013.09
                     running Tomcat 7 Java 7. For more information, see Supported Platforms in the
                     AWS Elastic Beanstalk Developer Guide.You must specify this property if you don't specify the
                     EnvironmentId or SourceConfiguration
                  properties.Update requires: Replacement
* @property {ElasticBeanstalkSourceConfigurationPropertyType} SourceConfiguration Required: Conditional. A configuration template that is associated with another Elastic Beanstalk application. If
                  you specify the SolutionStackName property and the
                     SourceConfiguration property, the solution stack in the source
                  configuration template must match the value that you specified for the
                     SolutionStackName property.You must specify this property if you don't specify the
                     EnvironmentId or SolutionStackName properties.Update requires: Replacement
*/
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

/** @memberof module:ElasticBeanstalk
*   @extends WKResource
* @property {String} ApplicationName Required: Yes. The name of the application that is associated with this environment.Update requires: Replacement
* @property {String} CNAMEPrefix Required: No. A prefix for your Elastic Beanstalk environment URL.Update requires: Replacement
* @property {String} Description Required: No. A description that helps you identify this environment.Update requires: No interruption
* @property {String} EnvironmentName Required: No. A name for the Elastic Beanstalk environment. If you don't specify a name, AWS CloudFormation generates
                  a unique physical ID and uses that ID for the environment name. For more
                  information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {OptionSettings} OptionSettings Required: No. Key-value pairs defining configuration options for this environment. These
                  options override the values that are defined in the solution stack or the
                  configuration template. If you remove any options during a stack update, the
                  removed options revert to default values.Update requires: Some interruptions
* @property {String} SolutionStackName Required: No. The name of an Elastic Beanstalk solution stack that this configuration will use. For more
                  information, see Supported
                     Platforms in the AWS Elastic Beanstalk Developer Guide. You must
                  specify either this parameter or an Elastic Beanstalk configuration template name.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this environment.Update requires: You can update tags only if you update another
                  property that requires that the environment be replaced, such as the
                     ApplicationName property.
* @property {String} TemplateName Required: No. The name of the Elastic Beanstalk configuration template to use with the environment. You
                  must specify either this parameter or a solution stack name.Update requires: Some interruptions
* @property {ElasticBeanstalkEnvironmentTierPropertyType} Tier Required: No. Specifies the tier to use in creating this environment. The environment tier
                  that you choose determines whether Elastic Beanstalk provisions resources to support a web
                  application that handles HTTP(S) requests or a web application that handles
                  background-processing tasks.Update requires: See Elastic Beanstalk Environment Tier Property
      Type
* @property {String} VersionLabel Required: No. The version to associate with the environment.Update requires: Some interruptions
*/
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

module.exports = {  Application: Application,
  ApplicationVersion: ApplicationVersion,
  ConfigurationTemplate: ConfigurationTemplate,
  Environment: Environment
}
