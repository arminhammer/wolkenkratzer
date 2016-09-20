'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module AutoScaling */

/** @memberof module:AutoScaling
*   @extends WKResource
* @property {String} AvailabilityZones Required: Conditional. Contains a list of availability zones for the group.Update requires: No interruption
* @property {String} Cooldown Required: No. The number of seconds after a scaling activity is completed before any further
                  scaling activities can start.Update requires: No interruption
* @property {String} DesiredCapacity Required: No. Specifies the desired capacity for the Auto Scaling group.If SpotPrice is not set in the AWS::AutoScaling::LaunchConfiguration for this Auto Scaling group, then Auto Scaling
                  will begin to bring instances online based on
                     DesiredCapacity. CloudFormation will not mark the Auto Scaling
                  group as successful (by setting its status to CREATE_COMPLETE) until the desired
                  capacity is reached.If SpotPrice
                  is set, then DesiredCapacity will not
                  be used as a criteria for success, since instances will only be started when the
                  spot price has been matched. After the spot price has been matched, however, Auto Scaling
                  uses DesiredCapacity as the target capacity for the
                  group.Update requires: No interruption
* @property {Number} HealthCheckGracePeriod Required: No. The length of time in seconds after a new EC2 instance comes into service that
                  Auto Scaling starts checking its health.Update requires: No interruption
* @property {String} HealthCheckType Required: No. The service you want the health status from, Amazon EC2 or Elastic Load
                  Balancer. Valid values are EC2 or ELB.Update requires: No interruption
* @property {String} InstanceId Required: Conditional. The ID of the Amazon EC2 instance you want to use to create the Auto Scaling group. Use this
                  property if you want to create an Auto Scaling group that uses an existing Amazon EC2 instance
                  instead of a launch configuration.When you use an Amazon EC2 instance to create an Auto Scaling group, a new launch
                  configuration is first created and then associated with the Auto Scaling group. The new
                  launch configuration derives all its properties from the instance, with the
                  exception of BlockDeviceMapping and
                     AssociatePublicIpAddress.Update requires: Replacement
* @property {String} LaunchConfigurationName Required: Conditional. Specifies the name of the associated AWS::AutoScaling::LaunchConfiguration.NoteIf this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the
DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,
see DependsOn Attribute.Update requires: No interruptionImportantWhen you update the LaunchConfigurationName, existing Amazon EC2
                     instances continue to run with the configuration that they were originally
                     launched with. To update existing instances, specify an update policy attribute
                     for this Auto Scaling group. For more information, see UpdatePolicy.
* @property {String} LoadBalancerNames Required: No. A list of Classic load balancers associated with this Auto Scaling group. To specify Application load balancers, use TargetGroupARNs.Update requires: ReplacementImportant When you update LoadBalancerNames, the entire Auto Scaling group is replaced. 
* @property {String} MaxSize Required: Yes. The maximum size of the Auto Scaling group.Update requires: No interruption
* @property {AutoScalingMetricsCollection} MetricsCollection Required: No. Enables the monitoring of group metrics of an Auto Scaling group.Update requires: No interruption
* @property {String} MinSize Required: Yes. The minimum size of the Auto Scaling group.Update requires: No interruption
* @property {AutoScalingNotificationConfigurations} NotificationConfigurations Required: No. An embedded property that configures an Auto Scaling group to send notifications when
                  specified events take place.Update requires: No interruption
* @property {String} PlacementGroup Required: No. The name of an existing cluster placement group into which you want to launch
                  your instances. A placement group is a logical grouping of instances within a
                  single Availability Zone. You cannot specify multiple Availability Zones and a
                  placement group.Update requires: No interruption
* @property {AutoScalingTags} Tags Required: No. The tags you want to attach to this resource.For more information about tags, go to  Tagging
                     Auto Scaling Groups and Amazon EC2 Instances in the
                  Auto Scaling User Guide.Update requires: No interruption
* @property {String} TargetGroupARNs Required: No. A list of Amazon Resource Names (ARN) of target groups to associate with the Auto Scaling group.Update requires: No interruption
* @property {String} TerminationPolicies Required: No. A policy or a list of policies that are used to select the instances to
                  terminate. The policies are executed in the order that you list them. For more information on configuring a termination policy for your Auto Scaling group, see Instance Termination Policy for Your Auto Scaling Group in the Auto Scaling User Guide. Update requires: No interruption
* @property {String} VPCZoneIdentifier Required: Conditional. A list of subnet identifiers of Amazon Virtual Private Cloud (Amazon VPCs).If you specify the AvailabilityZones property, the
                  subnets that you specify for this property must reside in those Availability
                  Zones.For more information, go to Using EC2 Dedicated Instances Within Your VPC in the
                     Auto Scaling User Guide.Update requires: Some interruptionsNoteWhen you update VPCZoneIdentifier, the instances are replaced, but not the
                     Auto Scaling group.
*/
function AutoScalingGroup (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::AutoScalingGroup'
    let properties = {
      AvailabilityZones: new ResourceAttribute('AvailabilityZones', String, true, 'Conditional', null),
      Cooldown: new ResourceAttribute('Cooldown', String, false, 'No', null),
      DesiredCapacity: new ResourceAttribute('DesiredCapacity', String, false, 'No', null),
      HealthCheckGracePeriod: new ResourceAttribute('HealthCheckGracePeriod', Number, false, 'No', null),
      HealthCheckType: new ResourceAttribute('HealthCheckType', String, false, 'No', null),
      InstanceId: new ResourceAttribute('InstanceId', String, false, 'Conditional', null),
      LaunchConfigurationName: new ResourceAttribute('LaunchConfigurationName', String, false, 'Conditional', null),
      LoadBalancerNames: new ResourceAttribute('LoadBalancerNames', String, true, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', String, false, 'Yes', null),
      MetricsCollection: new ResourceAttribute('MetricsCollection', types.AutoScalingMetricsCollection, true, 'No', null),
      MinSize: new ResourceAttribute('MinSize', String, false, 'Yes', null),
      NotificationConfigurations: new ResourceAttribute('NotificationConfigurations', types.AutoScalingNotificationConfigurations, true, 'No', null),
      PlacementGroup: new ResourceAttribute('PlacementGroup', String, false, 'No', null),
      Tags: new tag.TagSet(),
      TargetGroupARNs: new ResourceAttribute('TargetGroupARNs', String, true, 'No', null),
      TerminationPolicies: new ResourceAttribute('TerminationPolicies', String, true, 'No', null),
      VPCZoneIdentifier: new ResourceAttribute('VPCZoneIdentifier', String, true, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
AutoScalingGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:AutoScaling
*   @extends WKResource
* @property {Boolean} AssociatePublicIpAddress Required: No. For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group
                  receive public IP addresses. If you specify true, each instance in
                  the Auto Scaling receives a unique public IP address.NoteIf this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the
DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,
see DependsOn Attribute.Update requires: Replacement
* @property {AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType} BlockDeviceMappings Required: No. Specifies how block devices are exposed to the instance. You can specify
                  virtual devices and EBS volumes.Update requires: Replacement
* @property {String} ClassicLinkVPCId Required: No. The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. You
                  can specify this property only for EC2-Classic instances. For more information,
                  see ClassicLink in the
                     Amazon Elastic Compute Cloud User
                  Guide.Update requires: Replacement
* @property {String} ClassicLinkVPCSecurityGroups Required: Conditional. The IDs of one or more security groups for the VPC that you specified in the
                     ClassicLinkVPCId property.Update requires: Replacement
* @property {Boolean} EbsOptimized Required: Conditional. Specifies whether the launch configuration is optimized for EBS I/O. This
                  optimization provides dedicated throughput to Amazon EBS and an optimized
                  configuration stack to provide optimal EBS I/O performance.Additional fees are incurred when using EBS-optimized instances. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.Update requires: Replacement
* @property {String} IamInstanceProfile Required: No. Provides the name or the Amazon Resource Name (ARN) of the instance profile
                  associated with the IAM role for the instance. The instance profile contains the
                  IAM role.Update requires: Replacement
* @property {String} ImageId Required: Yes. Provides the unique ID of the Amazon Machine Image (AMI) that was assigned
                  during registration.Update requires: Replacement
* @property {String} InstanceId Required: No. The ID of the Amazon EC2 instance you want to use to create the launch
                  configuration. Use this property if you want the launch configuration to use
                  settings from an existing Amazon EC2 instance.When you use an instance to create a launch configuration, all properties are
                  derived from the instance with the exception of BlockDeviceMapping
                  and AssociatePublicIpAddress. You can override any properties from
                  the instance by specifying them in the launch configuration.Update requires: Replacement
* @property {Boolean} InstanceMonitoring Required: No. Indicates whether detailed instance monitoring is enabled for the Auto Scaling group.
                  By default, this property is set to true (enabled).When detailed monitoring is enabled, Amazon CloudWatch (CloudWatch) generates metrics every
                  minute and your account is charged a fee. When you disable detailed monitoring,
                  CloudWatch generates metrics every 5 minutes. For more information, see Monitor Your Auto Scaling
                     Instances in the Auto Scaling Developer
                  Guide.Update requires: Replacement
* @property {String} InstanceType Required: Yes. Specifies the instance type of the EC2 instance.Update requires: Replacement
* @property {String} KernelId Required: No. Provides the ID of the kernel associated with the EC2 AMI.Update requires: Replacement
* @property {String} KeyName Required: No. Provides the name of the EC2 key pair.Update requires: Replacement
* @property {String} PlacementTenancy Required: No. The tenancy of the instance. An instance with a tenancy of
                     dedicated runs on single-tenant hardware and can only be launched
                  in a VPC. You must set the value of this parameter to dedicated if
                  want to launch dedicated instances in a shared tenancy VPC (a VPC with the
                  instance placement tenancy attribute set to default). For more information, see
                     CreateLaunchConfiguration in the
                  Auto Scaling API Reference.If you specify this property, you must specify at least one subnet in the
                  VPCZoneIdentifier property of the AWS::AutoScaling::AutoScalingGroup resource.Update requires: Replacement
* @property {String} RamDiskId Required: No. The ID of the RAM disk to select. Some kernels require additional drivers at
                  launch. Check the kernel requirements for information about whether you need to
                  specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center
                  and search for the kernel ID.Update requires: Replacement
* @property {String} SecurityGroups Required: No. A list that contains the EC2 security groups to assign to the Amazon EC2
                  instances in the Auto Scaling group. The list can contain the name of existing EC2
                  security groups or references to AWS::EC2::SecurityGroup resources
                  created in the template. If your instances are launched within VPC, specify Amazon VPC
                  security group IDs.Update requires: Replacement
* @property {String} SpotPrice Required: No. The spot price for this autoscaling group. If a spot price is set, then the
                  autoscaling group will launch when the current spot price is less than the amount
                  specified in the template.When you have specified a spot price for an auto scaling group, the group will
                  only launch when the spot price has been met, regardless of the setting in the
                  autoscaling group's DesiredCapacity.For more information about configuring a spot price for an autoscaling group,
                  see Using Auto Scaling to Launch Spot Instances in the
                     AutoScaling Developer Guide.Update requires: ReplacementNoteWhen you change your bid price by creating a new launch configuration,
                     running instances will continue to run as long as the bid price for those
                     running instances is higher than the current Spot price.
* @property {String} UserData Required: No. The user data available to the launched EC2 instances.Update requires: Replacement
*/
function LaunchConfiguration (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LaunchConfiguration'
    let properties = {
      AssociatePublicIpAddress: new ResourceAttribute('AssociatePublicIpAddress', Boolean, false, 'No', null),
      BlockDeviceMappings: new ResourceAttribute('BlockDeviceMappings', types.AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType, true, 'No', null),
      ClassicLinkVPCId: new ResourceAttribute('ClassicLinkVPCId', String, false, 'No', null),
      ClassicLinkVPCSecurityGroups: new ResourceAttribute('ClassicLinkVPCSecurityGroups', String, true, 'Conditional', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, false, 'Conditional', null),
      IamInstanceProfile: new ResourceAttribute('IamInstanceProfile', String, false, 'No', null),
      ImageId: new ResourceAttribute('ImageId', String, false, 'Yes', null),
      InstanceId: new ResourceAttribute('InstanceId', String, false, 'No', null),
      InstanceMonitoring: new ResourceAttribute('InstanceMonitoring', Boolean, false, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, false, 'Yes', null),
      KernelId: new ResourceAttribute('KernelId', String, false, 'No', null),
      KeyName: new ResourceAttribute('KeyName', String, false, 'No', null),
      PlacementTenancy: new ResourceAttribute('PlacementTenancy', String, false, 'No', null),
      RamDiskId: new ResourceAttribute('RamDiskId', String, false, 'No', null),
      SecurityGroups: new ResourceAttribute('SecurityGroups', String, true, 'No', null),
      SpotPrice: new ResourceAttribute('SpotPrice', String, false, 'No', null),
      UserData: new ResourceAttribute('UserData', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
LaunchConfiguration.prototype = Object.create(WKResource.prototype)

/** @memberof module:AutoScaling
*   @extends WKResource
* @property {String} AutoScalingGroupName Required: Yes. The name of the Auto Scaling group for the lifecycle hook.Update requires: Replacement
* @property {String} DefaultResult Required: No. The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if
                  an unexpected failure occurs.Update requires: No interruption
* @property {Number} HeartbeatTimeout Required: No. The amount of time that can elapse before the lifecycle hook times out. When
                  the lifecycle hook times out, Auto Scaling performs the action that you specified in the
                  DefaultResult property.Update requires: No interruption
* @property {String} LifecycleTransition Required: Yes. The state of the Amazon EC2 instance to which you want to attach the lifecycle
                  hook.Update requires: No interruption
* @property {String} NotificationMetadata Required: No. Additional information that you want to include when Auto Scaling sends a message to
                  the notification target.Update requires: No interruption
* @property {String} NotificationTargetARN Required: Yes. The Amazon resource name (ARN) of the notification target that Auto Scaling uses to
                  notify you when an instance is in the transition state for the lifecycle hook. You
                  can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes
                  the following information: lifecycle action token, user account ID, Auto Scaling group
                  name, lifecycle hook name, instance ID, lifecycle transition, and notification
                  metadata.Update requires: No interruption
* @property {String} RoleARN Required: Yes. The ARN of the IAM role that allows the Auto Scaling group to publish to the
                  specified notification target. The role requires permissions to Amazon SNS and
                  Amazon SQS.Update requires: No interruption
*/
function LifecycleHook (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LifecycleHook'
    let properties = {
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, false, 'Yes', null),
      DefaultResult: new ResourceAttribute('DefaultResult', String, false, 'No', null),
      HeartbeatTimeout: new ResourceAttribute('HeartbeatTimeout', Number, false, 'No', null),
      LifecycleTransition: new ResourceAttribute('LifecycleTransition', String, false, 'Yes', null),
      NotificationMetadata: new ResourceAttribute('NotificationMetadata', String, false, 'No', null),
      NotificationTargetARN: new ResourceAttribute('NotificationTargetARN', String, false, 'Yes', null),
      RoleARN: new ResourceAttribute('RoleARN', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
LifecycleHook.prototype = Object.create(WKResource.prototype)

/** @memberof module:AutoScaling
*   @extends WKResource
* @property {String} AdjustmentType Required: Yes. Specifies whether the ScalingAdjustment is an
                  absolute number or a percentage of the current capacity. Valid values are
                     ChangeInCapacity, ExactCapacity,
                  and PercentChangeInCapacity.Update requires: No interruption
* @property {String} AutoScalingGroupName Required: Yes. The name or Amazon Resource Name (ARN) of the Auto Scaling Group that you
                  want to attach the policy to.Update requires: No interruption
* @property {String} Cooldown Required: No. The amount of time, in seconds, after a scaling activity completes before
                  any further trigger-related scaling activities can start.Do not specify this property if you are using the StepScaling
                  policy type.Update requires: No interruption
* @property {Number} EstimatedInstanceWarmup Required: No. The estimated time, in seconds, until a newly launched instance can send
                  metrics to CloudWatch. By default, Auto Scaling uses the cooldown period, as specified in the
                     Cooldown property.Do not specify this property if you are using the SimpleScaling
                  policy type.Update requires: No interruption
* @property {String} MetricAggregationType Required: No. The aggregation type for the CloudWatch metrics. You can specify
                  Minimum, Maximum, or Average. By default,
                  AWS CloudFormation specifies Average.Do not specify this property if you are using the SimpleScaling
                  policy type.Update requires: No interruption
* @property {Number} MinAdjustmentMagnitude Required: No. For the PercentChangeInCapacity adjustment type, the minimum
                  number of instances to scale. The scaling policy changes the desired capacity of
                  the Auto Scaling group by a minimum of this many instances. This property replaces the
                     MinAdjustmentStep property.Update requires: No interruption
* @property {String} PolicyType Required: No. An Auto Scaling policy type. You can specify SimpleScaling or
                     StepScaling. By default, AWS CloudFormation specifies
                     SimpleScaling. For more information, see Scaling Policy
                     Types in the Auto Scaling User Guide.Update requires: No interruption
* @property {Number} ScalingAdjustment Required: Conditional. The number of instances by which to scale. The AdjustmentType property determines if AWS CloudFormation interprets this number as an absolute number (when the ExactCapacity value is specified), increase or decrease capacity by a specified number (when the ChangeInCapacity value is specified), or increase or decrease capacity as a percentage of the existing Auto Scaling group size (when the PercentChangeInCapacity value is
                  specified). A positive value adds to the current capacity and a negative value subtracts from the current capacity. For exact capacity, you must specify a positive value.Update requires: No interruption
* @property {AutoScalingScalingPolicyStepAdjustments} StepAdjustments Required: Conditional. A set of adjustments that enable you to scale based on the size of the alarm
                  breach.Update requires: No interruption
*/
function ScalingPolicy (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScalingPolicy'
    let properties = {
      AdjustmentType: new ResourceAttribute('AdjustmentType', String, false, 'Yes', null),
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, false, 'Yes', null),
      Cooldown: new ResourceAttribute('Cooldown', String, false, 'No', null),
      EstimatedInstanceWarmup: new ResourceAttribute('EstimatedInstanceWarmup', Number, false, 'No', null),
      MetricAggregationType: new ResourceAttribute('MetricAggregationType', String, false, 'No', null),
      MinAdjustmentMagnitude: new ResourceAttribute('MinAdjustmentMagnitude', Number, false, 'No', null),
      PolicyType: new ResourceAttribute('PolicyType', String, false, 'No', null),
      ScalingAdjustment: new ResourceAttribute('ScalingAdjustment', Number, false, 'Conditional', null),
      StepAdjustments: new ResourceAttribute('StepAdjustments', types.AutoScalingScalingPolicyStepAdjustments, true, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ScalingPolicy.prototype = Object.create(WKResource.prototype)

/** @memberof module:AutoScaling
*   @extends WKResource
* @property {String} AutoScalingGroupName Required: Yes. The name or ARN of the Auto Scaling group.Update requires: Replacement
* @property {Number} DesiredCapacity Required: No. The number of Amazon EC2 instances that should be running in the Auto Scaling group.Update requires: No interruption
* @property {Date} EndTime Required: No. The time in UTC for this schedule to end. For example,
                     2010-06-01T00:00:00Z.Update requires: No interruption
* @property {Number} MaxSize Required: No. The maximum number of Amazon EC2 instances in the Auto Scaling group.Update requires: No interruption
* @property {Number} MinSize Required: No. The minimum number of Amazon EC2 instances in the Auto Scaling group.Update requires: No interruption
* @property {String} Recurrence Required: No. The time in UTC when recurring future actions will start. You specify the start
                  time by following the Unix cron syntax format. For more information about cron
                  syntax, go to http://en.wikipedia.org/wiki/Cron.Specifying the StartTime and EndTime properties with
                     Recurrence property forms the start and stop boundaries of the
                  recurring action.Update requires: No interruption
* @property {Date} StartTime Required: No. The time in UTC for this schedule to start. For example,
                     2010-06-01T00:00:00Z.Update requires: No interruption
*/
function ScheduledAction (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScheduledAction'
    let properties = {
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, false, 'Yes', null),
      DesiredCapacity: new ResourceAttribute('DesiredCapacity', Number, false, 'No', null),
      EndTime: new ResourceAttribute('EndTime', Date, false, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', Number, false, 'No', null),
      MinSize: new ResourceAttribute('MinSize', Number, false, 'No', null),
      Recurrence: new ResourceAttribute('Recurrence', String, false, 'No', null),
      StartTime: new ResourceAttribute('StartTime', Date, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ScheduledAction.prototype = Object.create(WKResource.prototype)

module.exports = {  AutoScalingGroup: AutoScalingGroup,
  LaunchConfiguration: LaunchConfiguration,
  LifecycleHook: LifecycleHook,
  ScalingPolicy: ScalingPolicy,
  ScheduledAction: ScheduledAction
}
