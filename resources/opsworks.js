'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class App extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::App'
    let properties = {
      AppSource: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksSourceType, 'No', null),
      Attributes: new wolkenkratzer.ResourceArray(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Domains: new wolkenkratzer.ResourceArray(String, 'No', null),
      EnableSsl: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Environment: new wolkenkratzer.ResourceArray(propertyTypes.AWSOpsWorksAppEnvironment, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Shortname: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SslConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksSslConfigurationType, 'No', null),
      StackId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ElasticLoadBalancerAttachment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::ElasticLoadBalancerAttachment'
    let properties = {
      ElasticLoadBalancerName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LayerId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Instance extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Instance'
    let properties = {
      AmiId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Architecture: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AutoScalingType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      InstallUpdatesOnBoot: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LayerIds: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      Os: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RootDeviceType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SshKeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StackId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      TimeBasedAutoScaling: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksTimeBasedAutoScalingType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Layer extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Layer'
    let properties = {
      Attributes: new wolkenkratzer.ResourceArray(String, 'No', null),
      AutoAssignElasticIps: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      AutoAssignPublicIps: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      CustomInstanceProfileArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CustomRecipes: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksRecipesType, 'No', null),
      CustomSecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'No', null),
      EnableAutoHealing: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      InstallUpdatesOnBoot: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      LifecycleEventConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksLayerLifeCycleConfiguration, 'No', null),
      LoadBasedAutoScaling: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksLoadBasedAutoScalingType, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Packages: new wolkenkratzer.ResourceArray(String, 'No', null),
      Shortname: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StackId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VolumeConfigurations: new wolkenkratzer.ResourceArray(propertyTypes.AWSOpsWorksVolumeConfigurationType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::Stack'
    let properties = {
      AgentVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Attributes: new wolkenkratzer.ResourceArray(String, 'No', null),
      ChefConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksChefConfigurationType, 'No', null),
      ConfigurationManager: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksStackConfigurationManagerType, 'No', null),
      CustomCookbooksSource: new wolkenkratzer.ResourceProperty(propertyTypes.AWSOpsWorksSourceType, 'No', null),
      CustomJson: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      DefaultAvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DefaultInstanceProfileArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DefaultOs: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DefaultRootDeviceType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DefaultSshKeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DefaultSubnetId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      HostnameTheme: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ServiceRoleArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      UseCustomCookbooks: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      UseOpsworksSecurityGroups: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'No', null)
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