'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class App extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::App'
    let properties = {
      AppSource: new ResourceAttribute('AppSource', types.AWSOpsWorksSourceType, 'No', null),
      Attributes: new ResourceAttributeArray('Attributes', Map, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      Domains: new ResourceAttributeArray('Domains', String, 'No', null),
      EnableSsl: new ResourceAttribute('EnableSsl', Boolean, 'No', null),
      Environment: new ResourceAttributeArray('Environment', types.AWSOpsWorksAppEnvironment, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Shortname: new ResourceAttribute('Shortname', String, 'No', null),
      SslConfiguration: new ResourceAttribute('SslConfiguration', types.AWSOpsWorksSslConfigurationType, 'No', null),
      StackId: new ResourceAttribute('StackId', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ElasticLoadBalancerAttachment extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::ElasticLoadBalancerAttachment'
    let properties = {
      ElasticLoadBalancerName: new ResourceAttribute('ElasticLoadBalancerName', String, 'Yes', null),
      LayerId: new ResourceAttribute('LayerId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Instance'
    let properties = {
      AmiId: new ResourceAttribute('AmiId', String, 'No', null),
      Architecture: new ResourceAttribute('Architecture', String, 'No', null),
      AutoScalingType: new ResourceAttribute('AutoScalingType', String, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'No', null),
      InstallUpdatesOnBoot: new ResourceAttribute('InstallUpdatesOnBoot', Boolean, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null),
      LayerIds: new ResourceAttributeArray('LayerIds', String, 'Yes', null),
      Os: new ResourceAttribute('Os', String, 'No', null),
      RootDeviceType: new ResourceAttribute('RootDeviceType', String, 'No', null),
      SshKeyName: new ResourceAttribute('SshKeyName', String, 'No', null),
      StackId: new ResourceAttribute('StackId', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'No', null),
      TimeBasedAutoScaling: new ResourceAttribute('TimeBasedAutoScaling', types.AWSOpsWorksTimeBasedAutoScalingType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Layer extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Layer'
    let properties = {
      Attributes: new ResourceAttributeArray('Attributes', Map, 'No', null),
      AutoAssignElasticIps: new ResourceAttribute('AutoAssignElasticIps', Boolean, 'Yes', null),
      AutoAssignPublicIps: new ResourceAttribute('AutoAssignPublicIps', Boolean, 'Yes', null),
      CustomInstanceProfileArn: new ResourceAttribute('CustomInstanceProfileArn', String, 'No', null),
      CustomRecipes: new ResourceAttribute('CustomRecipes', types.AWSOpsWorksRecipesType, 'No', null),
      CustomSecurityGroupIds: new ResourceAttributeArray('CustomSecurityGroupIds', String, 'No', null),
      EnableAutoHealing: new ResourceAttribute('EnableAutoHealing', Boolean, 'Yes', null),
      InstallUpdatesOnBoot: new ResourceAttribute('InstallUpdatesOnBoot', Boolean, 'No', null),
      LifecycleEventConfiguration: new ResourceAttribute('LifecycleEventConfiguration', types.AWSOpsWorksLayerLifeCycleConfiguration, 'No', null),
      LoadBasedAutoScaling: new ResourceAttribute('LoadBasedAutoScaling', types.AWSOpsWorksLoadBasedAutoScalingType, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Packages: new ResourceAttributeArray('Packages', String, 'No', null),
      Shortname: new ResourceAttribute('Shortname', String, 'Yes', null),
      StackId: new ResourceAttribute('StackId', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      VolumeConfigurations: new ResourceAttributeArray('VolumeConfigurations', types.AWSOpsWorksVolumeConfigurationType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Stack'
    let properties = {
      AgentVersion: new ResourceAttribute('AgentVersion', String, 'No', null),
      Attributes: new ResourceAttributeArray('Attributes', Map, 'No', null),
      ChefConfiguration: new ResourceAttribute('ChefConfiguration', types.AWSOpsWorksChefConfigurationType, 'No', null),
      ConfigurationManager: new ResourceAttribute('ConfigurationManager', types.AWSOpsWorksStackConfigurationManagerType, 'No', null),
      CustomCookbooksSource: new ResourceAttribute('CustomCookbooksSource', types.AWSOpsWorksSourceType, 'No', null),
      CustomJson: new ResourceAttribute('CustomJson', Object, 'No', null),
      DefaultAvailabilityZone: new ResourceAttribute('DefaultAvailabilityZone', String, 'No', null),
      DefaultInstanceProfileArn: new ResourceAttribute('DefaultInstanceProfileArn', String, 'Yes', null),
      DefaultOs: new ResourceAttribute('DefaultOs', String, 'No', null),
      DefaultRootDeviceType: new ResourceAttribute('DefaultRootDeviceType', String, 'No', null),
      DefaultSshKeyName: new ResourceAttribute('DefaultSshKeyName', String, 'No', null),
      DefaultSubnetId: new ResourceAttribute('DefaultSubnetId', String, 'Conditional', null),
      HostnameTheme: new ResourceAttribute('HostnameTheme', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ServiceRoleArn: new ResourceAttribute('ServiceRoleArn', String, 'Yes', null),
      UseCustomCookbooks: new ResourceAttribute('UseCustomCookbooks', Boolean, 'No', null),
      UseOpsworksSecurityGroups: new ResourceAttribute('UseOpsworksSecurityGroups', Boolean, 'No', null),
      VpcId: new ResourceAttribute('VpcId', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  App: App,
  ElasticLoadBalancerAttachment: ElasticLoadBalancerAttachment,
  Instance: Instance,
  Layer: Layer,
  Stack: Stack
}
