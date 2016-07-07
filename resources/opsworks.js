'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class App extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::App'
    let properties = {
      AppSource: new resource.ResourceProperty('AppSource', types.AWSOpsWorksSourceType, 'No', null),
      Attributes: new resource.ResourceArray('Attributes', Map, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Domains: new resource.ResourceArray('Domains', String, 'No', null),
      EnableSsl: new resource.ResourceProperty('EnableSsl', Boolean, 'No', null),
      Environment: new resource.ResourceArray('Environment', types.AWSOpsWorksAppEnvironment, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Shortname: new resource.ResourceProperty('Shortname', String, 'No', null),
      SslConfiguration: new resource.ResourceProperty('SslConfiguration', types.AWSOpsWorksSslConfigurationType, 'No', null),
      StackId: new resource.ResourceProperty('StackId', String, 'Yes', null),
      Type: new resource.ResourceProperty('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ElasticLoadBalancerAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::ElasticLoadBalancerAttachment'
    let properties = {
      ElasticLoadBalancerName: new resource.ResourceProperty('ElasticLoadBalancerName', String, 'Yes', null),
      LayerId: new resource.ResourceProperty('LayerId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Instance'
    let properties = {
      AmiId: new resource.ResourceProperty('AmiId', String, 'No', null),
      Architecture: new resource.ResourceProperty('Architecture', String, 'No', null),
      AutoScalingType: new resource.ResourceProperty('AutoScalingType', String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'No', null),
      EbsOptimized: new resource.ResourceProperty('EbsOptimized', Boolean, 'No', null),
      InstallUpdatesOnBoot: new resource.ResourceProperty('InstallUpdatesOnBoot', Boolean, 'No', null),
      InstanceType: new resource.ResourceProperty('InstanceType', String, 'Yes', null),
      LayerIds: new resource.ResourceArray('LayerIds', String, 'Yes', null),
      Os: new resource.ResourceProperty('Os', String, 'No', null),
      RootDeviceType: new resource.ResourceProperty('RootDeviceType', String, 'No', null),
      SshKeyName: new resource.ResourceProperty('SshKeyName', String, 'No', null),
      StackId: new resource.ResourceProperty('StackId', String, 'Yes', null),
      SubnetId: new resource.ResourceProperty('SubnetId', String, 'No', null),
      TimeBasedAutoScaling: new resource.ResourceProperty('TimeBasedAutoScaling', types.AWSOpsWorksTimeBasedAutoScalingType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Layer extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Layer'
    let properties = {
      Attributes: new resource.ResourceArray('Attributes', Map, 'No', null),
      AutoAssignElasticIps: new resource.ResourceProperty('AutoAssignElasticIps', Boolean, 'Yes', null),
      AutoAssignPublicIps: new resource.ResourceProperty('AutoAssignPublicIps', Boolean, 'Yes', null),
      CustomInstanceProfileArn: new resource.ResourceProperty('CustomInstanceProfileArn', String, 'No', null),
      CustomRecipes: new resource.ResourceProperty('CustomRecipes', types.AWSOpsWorksRecipesType, 'No', null),
      CustomSecurityGroupIds: new resource.ResourceArray('CustomSecurityGroupIds', String, 'No', null),
      EnableAutoHealing: new resource.ResourceProperty('EnableAutoHealing', Boolean, 'Yes', null),
      InstallUpdatesOnBoot: new resource.ResourceProperty('InstallUpdatesOnBoot', Boolean, 'No', null),
      LifecycleEventConfiguration: new resource.ResourceProperty('LifecycleEventConfiguration', types.AWSOpsWorksLayerLifeCycleConfiguration, 'No', null),
      LoadBasedAutoScaling: new resource.ResourceProperty('LoadBasedAutoScaling', types.AWSOpsWorksLoadBasedAutoScalingType, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Packages: new resource.ResourceArray('Packages', String, 'No', null),
      Shortname: new resource.ResourceProperty('Shortname', String, 'Yes', null),
      StackId: new resource.ResourceProperty('StackId', String, 'Yes', null),
      Type: new resource.ResourceProperty('Type', String, 'Yes', null),
      VolumeConfigurations: new resource.ResourceArray('VolumeConfigurations', types.AWSOpsWorksVolumeConfigurationType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Stack'
    let properties = {
      AgentVersion: new resource.ResourceProperty('AgentVersion', String, 'No', null),
      Attributes: new resource.ResourceArray('Attributes', Map, 'No', null),
      ChefConfiguration: new resource.ResourceProperty('ChefConfiguration', types.AWSOpsWorksChefConfigurationType, 'No', null),
      ConfigurationManager: new resource.ResourceProperty('ConfigurationManager', types.AWSOpsWorksStackConfigurationManagerType, 'No', null),
      CustomCookbooksSource: new resource.ResourceProperty('CustomCookbooksSource', types.AWSOpsWorksSourceType, 'No', null),
      CustomJson: new resource.ResourceProperty('CustomJson', Object, 'No', null),
      DefaultAvailabilityZone: new resource.ResourceProperty('DefaultAvailabilityZone', String, 'No', null),
      DefaultInstanceProfileArn: new resource.ResourceProperty('DefaultInstanceProfileArn', String, 'Yes', null),
      DefaultOs: new resource.ResourceProperty('DefaultOs', String, 'No', null),
      DefaultRootDeviceType: new resource.ResourceProperty('DefaultRootDeviceType', String, 'No', null),
      DefaultSshKeyName: new resource.ResourceProperty('DefaultSshKeyName', String, 'No', null),
      DefaultSubnetId: new resource.ResourceProperty('DefaultSubnetId', String, 'Conditional', null),
      HostnameTheme: new resource.ResourceProperty('HostnameTheme', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      ServiceRoleArn: new resource.ResourceProperty('ServiceRoleArn', String, 'Yes', null),
      UseCustomCookbooks: new resource.ResourceProperty('UseCustomCookbooks', Boolean, 'No', null),
      UseOpsworksSecurityGroups: new resource.ResourceProperty('UseOpsworksSecurityGroups', Boolean, 'No', null),
      VpcId: new resource.ResourceProperty('VpcId', String, 'No', null)
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