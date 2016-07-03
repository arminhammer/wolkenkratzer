'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class App extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::App'
    let properties = {
      AppSource: new resource.ResourceProperty(types.AWSOpsWorksSourceType, 'No', null),
      Attributes: new resource.ResourceArray(Map, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      Domains: new resource.ResourceArray(String, 'No', null),
      EnableSsl: new resource.ResourceProperty(Boolean, 'No', null),
      Environment: new resource.ResourceArray(types.AWSOpsWorksAppEnvironment, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      Shortname: new resource.ResourceProperty(String, 'No', null),
      SslConfiguration: new resource.ResourceProperty(types.AWSOpsWorksSslConfigurationType, 'No', null),
      StackId: new resource.ResourceProperty(String, 'Yes', null),
      Type: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ElasticLoadBalancerAttachment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::ElasticLoadBalancerAttachment'
    let properties = {
      ElasticLoadBalancerName: new resource.ResourceProperty(String, 'Yes', null),
      LayerId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Instance'
    let properties = {
      AmiId: new resource.ResourceProperty(String, 'No', null),
      Architecture: new resource.ResourceProperty(String, 'No', null),
      AutoScalingType: new resource.ResourceProperty(String, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      EbsOptimized: new resource.ResourceProperty(Boolean, 'No', null),
      InstallUpdatesOnBoot: new resource.ResourceProperty(Boolean, 'No', null),
      InstanceType: new resource.ResourceProperty(String, 'Yes', null),
      LayerIds: new resource.ResourceArray(String, 'Yes', null),
      Os: new resource.ResourceProperty(String, 'No', null),
      RootDeviceType: new resource.ResourceProperty(String, 'No', null),
      SshKeyName: new resource.ResourceProperty(String, 'No', null),
      StackId: new resource.ResourceProperty(String, 'Yes', null),
      SubnetId: new resource.ResourceProperty(String, 'No', null),
      TimeBasedAutoScaling: new resource.ResourceProperty(types.AWSOpsWorksTimeBasedAutoScalingType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Layer extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Layer'
    let properties = {
      Attributes: new resource.ResourceArray(Map, 'No', null),
      AutoAssignElasticIps: new resource.ResourceProperty(Boolean, 'Yes', null),
      AutoAssignPublicIps: new resource.ResourceProperty(Boolean, 'Yes', null),
      CustomInstanceProfileArn: new resource.ResourceProperty(String, 'No', null),
      CustomRecipes: new resource.ResourceProperty(types.AWSOpsWorksRecipesType, 'No', null),
      CustomSecurityGroupIds: new resource.ResourceArray(String, 'No', null),
      EnableAutoHealing: new resource.ResourceProperty(Boolean, 'Yes', null),
      InstallUpdatesOnBoot: new resource.ResourceProperty(Boolean, 'No', null),
      LifecycleEventConfiguration: new resource.ResourceProperty(types.AWSOpsWorksLayerLifeCycleConfiguration, 'No', null),
      LoadBasedAutoScaling: new resource.ResourceProperty(types.AWSOpsWorksLoadBasedAutoScalingType, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      Packages: new resource.ResourceArray(String, 'No', null),
      Shortname: new resource.ResourceProperty(String, 'Yes', null),
      StackId: new resource.ResourceProperty(String, 'Yes', null),
      Type: new resource.ResourceProperty(String, 'Yes', null),
      VolumeConfigurations: new resource.ResourceArray(types.AWSOpsWorksVolumeConfigurationType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Stack'
    let properties = {
      AgentVersion: new resource.ResourceProperty(String, 'No', null),
      Attributes: new resource.ResourceArray(Map, 'No', null),
      ChefConfiguration: new resource.ResourceProperty(types.AWSOpsWorksChefConfigurationType, 'No', null),
      ConfigurationManager: new resource.ResourceProperty(types.AWSOpsWorksStackConfigurationManagerType, 'No', null),
      CustomCookbooksSource: new resource.ResourceProperty(types.AWSOpsWorksSourceType, 'No', null),
      CustomJson: new resource.ResourceProperty(Object, 'No', null),
      DefaultAvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      DefaultInstanceProfileArn: new resource.ResourceProperty(String, 'Yes', null),
      DefaultOs: new resource.ResourceProperty(String, 'No', null),
      DefaultRootDeviceType: new resource.ResourceProperty(String, 'No', null),
      DefaultSshKeyName: new resource.ResourceProperty(String, 'No', null),
      DefaultSubnetId: new resource.ResourceProperty(String, 'Conditional', null),
      HostnameTheme: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      ServiceRoleArn: new resource.ResourceProperty(String, 'Yes', null),
      UseCustomCookbooks: new resource.ResourceProperty(Boolean, 'No', null),
      UseOpsworksSecurityGroups: new resource.ResourceProperty(Boolean, 'No', null),
      VpcId: new resource.ResourceProperty(String, 'No', null)
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