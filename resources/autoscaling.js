'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class AutoScalingGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::AutoScalingGroup'
    let properties = {
      AvailabilityZones: new ResourceAttributeArray('AvailabilityZones', String, 'Conditional', null),
      Cooldown: new ResourceAttribute('Cooldown', String, 'No', null),
      DesiredCapacity: new ResourceAttribute('DesiredCapacity', String, 'No', null),
      HealthCheckGracePeriod: new ResourceAttribute('HealthCheckGracePeriod', Number, 'No', null),
      HealthCheckType: new ResourceAttribute('HealthCheckType', String, 'No', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Conditional', null),
      LaunchConfigurationName: new ResourceAttribute('LaunchConfigurationName', String, 'Conditional', null),
      LoadBalancerNames: new ResourceAttributeArray('LoadBalancerNames', String, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', String, 'Yes', null),
      MetricsCollection: new ResourceAttributeArray('MetricsCollection', types.AutoScalingMetricsCollection, 'No', null),
      MinSize: new ResourceAttribute('MinSize', String, 'Yes', null),
      NotificationConfigurations: new ResourceAttributeArray('NotificationConfigurations', types.AutoScalingNotificationConfigurations, 'No', null),
      PlacementGroup: new ResourceAttribute('PlacementGroup', String, 'No', null),
      Tags: new tag.TagSet(),
      TerminationPolicies: new ResourceAttributeArray('TerminationPolicies', String, 'No', null),
      VPCZoneIdentifier: new ResourceAttributeArray('VPCZoneIdentifier', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LaunchConfiguration extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LaunchConfiguration'
    let properties = {
      AssociatePublicIpAddress: new ResourceAttribute('AssociatePublicIpAddress', Boolean, 'No', null),
      BlockDeviceMappings: new ResourceAttributeArray('BlockDeviceMappings', types.BlockDeviceMappings, 'No', null),
      ClassicLinkVPCId: new ResourceAttribute('ClassicLinkVPCId', String, 'No', null),
      ClassicLinkVPCSecurityGroups: new ResourceAttributeArray('ClassicLinkVPCSecurityGroups', String, 'Conditional', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'Conditional', null),
      IamInstanceProfile: new ResourceAttribute('IamInstanceProfile', String, 'No', null),
      ImageId: new ResourceAttribute('ImageId', String, 'Yes', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'No', null),
      InstanceMonitoring: new ResourceAttribute('InstanceMonitoring', Boolean, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null),
      KernelId: new ResourceAttribute('KernelId', String, 'No', null),
      KeyName: new ResourceAttribute('KeyName', String, 'No', null),
      PlacementTenancy: new ResourceAttribute('PlacementTenancy', String, 'No', null),
      RamDiskId: new ResourceAttribute('RamDiskId', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', types.EC2securitygroups, 'No', null),
      SpotPrice: new ResourceAttribute('SpotPrice', String, 'No', null),
      UserData: new ResourceAttribute('UserData', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LifecycleHook extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LifecycleHook'
    let properties = {
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, 'Yes', null),
      DefaultResult: new ResourceAttribute('DefaultResult', String, 'No', null),
      HeartbeatTimeout: new ResourceAttribute('HeartbeatTimeout', Number, 'No', null),
      LifecycleTransition: new ResourceAttribute('LifecycleTransition', String, 'Yes', null),
      NotificationMetadata: new ResourceAttribute('NotificationMetadata', String, 'No', null),
      NotificationTargetARN: new ResourceAttribute('NotificationTargetARN', String, 'Yes', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScalingPolicy extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScalingPolicy'
    let properties = {
      AdjustmentType: new ResourceAttribute('AdjustmentType', String, 'Yes', null),
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, 'Yes', null),
      Cooldown: new ResourceAttribute('Cooldown', String, 'No', null),
      EstimatedInstanceWarmup: new ResourceAttribute('EstimatedInstanceWarmup', Number, 'No', null),
      MetricAggregationType: new ResourceAttribute('MetricAggregationType', String, 'No', null),
      MinAdjustmentMagnitude: new ResourceAttribute('MinAdjustmentMagnitude', Number, 'No', null),
      PolicyType: new ResourceAttribute('PolicyType', String, 'No', null),
      ScalingAdjustment: new ResourceAttribute('ScalingAdjustment', Number, 'Conditional', null),
      StepAdjustments: new ResourceAttributeArray('StepAdjustments', types.AutoScalingScalingPolicyStepAdjustments, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScheduledAction extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScheduledAction'
    let properties = {
      AutoScalingGroupName: new ResourceAttribute('AutoScalingGroupName', String, 'Yes', null),
      DesiredCapacity: new ResourceAttribute('DesiredCapacity', Number, 'No', null),
      EndTime: new ResourceAttribute('EndTime', Date, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', Number, 'No', null),
      MinSize: new ResourceAttribute('MinSize', Number, 'No', null),
      Recurrence: new ResourceAttribute('Recurrence', String, 'No', null),
      StartTime: new ResourceAttribute('StartTime', Date, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  AutoScalingGroup: AutoScalingGroup,
  LaunchConfiguration: LaunchConfiguration,
  LifecycleHook: LifecycleHook,
  ScalingPolicy: ScalingPolicy,
  ScheduledAction: ScheduledAction
}
