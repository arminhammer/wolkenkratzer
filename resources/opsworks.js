'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module OpsWorks */

/** @memberof module:OpsWorks
*   @extends WKResource
* @property {AWSOpsWorksSourceType} AppSource Required: No. Contains the information required to retrieve an app from a repository.Update requires: No interruption
* @property {Map} Attributes Required: No. One or more user-defined key-value pairs to be added to the stack attributes
                  bag.Update requires: No interruption
* @property {String} Description Required: No. A description of the app.Update requires: No interruption
* @property {String} Domains Required: No. The app virtual host settings, with multiple domains separated by commas. For
                  example, 'www.example.com, example.com'.Update requires: No interruption
* @property {Boolean} EnableSsl Required: No. Whether to enable SSL for this app.Update requires: No interruption
* @property {AWSOpsWorksAppEnvironment} Environment Required: No. The environment variables to associate with the AWS OpsWorks app.Update requires: No interruption
* @property {String} Name Required: Yes. The AWS OpsWorks app name.Update requires: No interruption
* @property {String} Shortname Required: No. The app short name, which is used internally by AWS OpsWorks and by Chef
                  recipes.Update requires: Replacement
* @property {AWSOpsWorksSslConfigurationType} SslConfiguration Required: No. The SSL configurationUpdate requires: No interruption
* @property {String} StackId Required: Yes. The AWS OpsWorks stack ID that this app will be associated with.Update requires: Replacement
* @property {String} Type Required: Yes. The app type. Each supported type is associated with a particular layer. For
                  more information, see CreateApp in the AWS OpsWorks API Reference.Update requires: No interruption
*/
class App extends WKResource {
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

/** @memberof module:OpsWorks
*   @extends WKResource
* @property {String} ElasticLoadBalancerName Required: Yes. Elastic Load Balancing load balancer name.Update requires: No interruption
* @property {String} LayerId Required: Yes. The AWS OpsWorks layer ID that the Elastic Load Balancing load balancer will be attached to.Update requires: No interruption
*/
class ElasticLoadBalancerAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::OpsWorks::ElasticLoadBalancerAttachment'
    let properties = {
      ElasticLoadBalancerName: new ResourceAttribute('ElasticLoadBalancerName', String, 'Yes', null),
      LayerId: new ResourceAttribute('LayerId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:OpsWorks
*   @extends WKResource
* @property {String} AmiId Required: No. The ID of the custom Amazon Machine Image (AMI) to be used to create the
                  instance. For more information about custom AMIs, see Using Custom AMIs in the
                  AWS OpsWorks User Guide.
                  NoteIf you specify this property, you must set the Os property
                        to Custom.
               Update requires: Updates are not supported.
* @property {String} Architecture Required: No. The instance architecture.Update requires: Some interruptions
* @property {String} AutoScalingType Required: No. For scaling instances, the type of scaling. If you specify load-based scaling,
                  do not specify a time-based scaling configuration. For valid values, see CreateInstance in the
                     AWS OpsWorks API Reference.Update requires: Replacement
* @property {String} AvailabilityZone Required: No. The instance Availability Zone.Update requires: Replacement
* @property {Boolean} EbsOptimized Required: No. Whether the instance is optimized for Amazon Elastic Block Store (Amazon EBS) I/O. If you specify an
                  Amazon EBS-optimized instance type, AWS OpsWorks enables EBS optimization by default. For more
                  information, see Amazon EBS–Optimized
                     Instances in the Amazon EC2 User Guide for Linux Instances.Update requires: Replacement
* @property {Boolean} InstallUpdatesOnBoot Required: No. Whether to install operating system and package updates when the instance
                  boots.Update requires: Some interruptions
* @property {String} InstanceType Required: Yes. The instance type, which must be supported by AWS OpsWorks. For more information, see
                     CreateInstance in the
                     AWS OpsWorks API Reference.If you specify an Amazon EBS-optimized instance type, AWS OpsWorks enables EBS optimization
                  by default. For more information about Amazon EBS-optimized instance types, see Amazon EBS–Optimized Instances in the
                     Amazon EC2 User Guide for Linux Instances.Update requires: Some interruptions
* @property {String} LayerIds Required: Yes. The IDs of the AWS OpsWorks layers to associate with this instance.Update requires: Some interruptions
* @property {String} Os Required: No. The instance operating system. For more information, see CreateInstance in the
                     AWS OpsWorks API Reference.Update requires: Replacement
* @property {String} RootDeviceType Required: No. The root device type of the instance.Update requires: Replacement
* @property {String} SshKeyName Required: No. The SSH key name of the instance.Update requires: Some interruptions
* @property {String} StackId Required: Yes. The ID of the AWS OpsWorks stack that this instance will be associated with.Update requires: Replacement
* @property {String} SubnetId Required: No. The ID of the instance's subnet. If the stack is running in a VPC, you can use
                  this parameter to override the stack's default subnet ID value and direct AWS OpsWorks to
                  launch the instance in a different subnet. Update requires: Replacement
* @property {AWSOpsWorksTimeBasedAutoScalingType} TimeBasedAutoScaling Required: No. The time-based scaling configuration for the instance.Update requires: Replacement
*/
class Instance extends WKResource {
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

/** @memberof module:OpsWorks
*   @extends WKResource
* @property {Map} Attributes Required: No. One or more user-defined key-value pairs to be added to the stack attributes
                  bag.Update requires: No interruption
* @property {Boolean} AutoAssignElasticIps Required: Yes. Whether to automatically assign an Elastic IP address to Amazon EC2 instances in
                  this layer.Update requires: No interruption
* @property {Boolean} AutoAssignPublicIps Required: Yes. For AWS OpsWorks stacks that are running in a VPC, whether to automatically assign a
                  public IP address to Amazon EC2 instances in this layer.Update requires: No interruption
* @property {String} CustomInstanceProfileArn Required: No. The Amazon Resource Name (ARN) of an IAM instance profile that is to be used
                  for the Amazon EC2 instances in this layer.Update requires: No interruption
* @property {AWSOpsWorksRecipesType} CustomRecipes Required: No. Custom event recipes for this layer.Update requires: No interruption
* @property {String} CustomSecurityGroupIds Required: No. Custom security group IDs for this layer.Update requires: No interruption
* @property {Boolean} EnableAutoHealing Required: Yes. Whether to automatically heal Amazon EC2 instances that have become disconnected or
                  timed out.Update requires: No interruption
* @property {Boolean} InstallUpdatesOnBoot Required: No. Whether to install operating system and package updates when the instance
                  boots.Update requires: No interruption
* @property {AWSOpsWorksLayerLifeCycleConfiguration} LifecycleEventConfiguration Required: No. The lifecycle events for the AWS OpsWorks layer.Update requires: No interruption
* @property {AWSOpsWorksLoadBasedAutoScalingType} LoadBasedAutoScaling Required: No. The load-based scaling configuration for the AWS OpsWorks layer.Update requires: No interruption
* @property {String} Name Required: Yes. The AWS OpsWorks layer name.Update requires: No interruption
* @property {String} Packages Required: No. The packages for this layer.Update requires: No interruption
* @property {String} Shortname Required: Yes. The layer short name, which is used internally by AWS OpsWorks and by Chef recipes.
                  The short name is also used as the name for the directory where your app files are
                  installed. The name can have a maximum of 200 characters, which are limited to the
                  alphanumeric characters, '-', '_', and '.'.ImportantIf you update a property that requires the layer to be replaced, you must specify a new short name. You cannot have multiple layers with the same short name.Update requires: No interruption
* @property {String} StackId Required: Yes. The ID of the AWS OpsWorks stack that this layer will be associated with.Update requires: Replacement
* @property {String} Type Required: Yes. The layer type. A stack cannot have more than one layer of the same type,
                  except for the custom type. You can have any number of
                     custom types. For more information, see CreateLayer in the
                     AWS OpsWorks API Reference.ImportantIf you update a property that requires the layer to be replaced, you must
                     specify a new type unless you have a custom type. You can have any
                     number of custom types.Update requires: Replacement
* @property {AWSOpsWorksVolumeConfigurationType} VolumeConfigurations Required: No. Describes the Amazon EBS volumes for this layer.Update requires: Replacement
*/
class Layer extends WKResource {
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

/** @memberof module:OpsWorks
*   @extends WKResource
* @property {String} AgentVersion Required: No. The AWS OpsWorks agent version that you want to use. The agent communicates with the
                  service and handles tasks such as initiating Chef runs in response to lifecycle
                  events. For valid values, see the AgentVersion parameter for the CreateStack action in the
                     AWS OpsWorks API Reference.Update requires: No interruption
* @property {Map} Attributes Required: No. One or more user-defined key-value pairs to be added to the stack attributes
                  bag.Update requires: No interruption
* @property {AWSOpsWorksChefConfigurationType} ChefConfiguration Required: No. Describes the Chef configuration. For more information, see the CreateStack ChefConfiguration parameter in the
                     AWS OpsWorks API Reference.NoteTo enable Berkshelf, you must select a Chef version in the
                        ConfigurationManager property that supports Berkshelf.Update requires: No interruption
* @property {AWSOpsWorksStackConfigurationManagerType} ConfigurationManager Required: No. Describes the configuration manager. When you create a stack, you use the
                  configuration manager to specify the Chef version. For supported Chef versions,
                  see the CreateStack ConfigurationManager parameter in the
                     AWS OpsWorks API Reference.Update requires: No interruption
* @property {AWSOpsWorksSourceType} CustomCookbooksSource Required: No. Contains the information required to retrieve a cookbook from a
                  repository.Update requires: No interruption
* @property {Object} CustomJson Required: No. A user-defined custom JSON object. The custom JSON is used to override the
                  corresponding default stack configuration JSON values. For more information, see
                     CreateStack in the
                     AWS OpsWorks API Reference.ImportantAWS CloudFormation submits all JSON attributes as strings, including any Boolean or
                     number attributes. If you have recipes that expect booleans or numbers, you
                     must modify the recipes to accept strings and to interpret those strings as
                     booleans or numbers.Update requires: No interruption
* @property {String} DefaultAvailabilityZone Required: No. The stack's default Availability Zone, which must be in the specified
                  region.Update requires: No interruption
* @property {String} DefaultInstanceProfileArn Required: Yes. The Amazon Resource Name (ARN) of an IAM instance profile that is the default
                  profile for all of the stack's Amazon EC2 instances.Update requires: No interruption
* @property {String} DefaultOs Required: No. The stack's default operating system. For more information, see CreateStack in the
                     AWS OpsWorks API Reference.Update requires: No interruption
* @property {String} DefaultRootDeviceType Required: No. The default root device type. This value is used by default for all instances
                  in the stack, but you can override it when you create an instance. For more
                  information, see CreateStack in the AWS OpsWorks API Reference.Update requires: No interruption
* @property {String} DefaultSshKeyName Required: No. A default SSH key for the stack instances. You can override this value when you
                  create or update an instance.Update requires: No interruption
* @property {String} DefaultSubnetId Required: Conditional. The stack's default subnet ID. All instances are launched into this subnet
                  unless you specify another subnet ID when you create the instance.Update requires: No interruption
* @property {String} HostnameTheme Required: No. The stack's host name theme, with spaces replaced by underscores. The theme is
                  used to generate host names for the stack's instances. For more information, see
                     CreateStack in the
                     AWS OpsWorks API Reference.Update requires: No interruption
* @property {String} Name Required: Yes. The name of the AWS OpsWorks stack.Update requires: No interruption
* @property {String} ServiceRoleArn Required: Yes. The AWS Identity and Access Management (IAM) role that AWS OpsWorks uses to work with AWS resources on your
                  behalf. You must specify an Amazon Resource Name (ARN) for an existing IAM
                  role.Update requires: Replacement
* @property {Boolean} UseCustomCookbooks Required: No. Whether the stack uses custom cookbooks.Update requires: No interruption
* @property {Boolean} UseOpsworksSecurityGroups Required: No. Whether to associate the AWS OpsWorks built-in security groups with the stack's
                  layers.Update requires: No interruption
* @property {String} VpcId Required: No. The ID of the VPC that the stack is to be launched into, which must be in the
                  specified region. All instances are launched into this VPC. If you specify this
                  property, you must specify the DefaultSubnetId property.Update requires: Replacement
*/
class Stack extends WKResource {
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

module.exports = {  App: App,
  ElasticLoadBalancerAttachment: ElasticLoadBalancerAttachment,
  Instance: Instance,
  Layer: Layer,
  Stack: Stack
}
