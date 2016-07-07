'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class AutoScalingGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::AutoScalingGroup'
    let properties = {
      AvailabilityZones: new resource.ResourceArray('AvailabilityZones', String, 'Conditional', null),
      Cooldown: new resource.ResourceProperty('Cooldown', String, 'No', null),
      DesiredCapacity: new resource.ResourceProperty('DesiredCapacity', String, 'No', null),
      HealthCheckGracePeriod: new resource.ResourceProperty('HealthCheckGracePeriod', Number, 'No', null),
      HealthCheckType: new resource.ResourceProperty('HealthCheckType', String, 'No', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'Conditional', null),
      LaunchConfigurationName: new resource.ResourceProperty('LaunchConfigurationName', String, 'Conditional', null),
      LoadBalancerNames: new resource.ResourceArray('LoadBalancerNames', String, 'No', null),
      MaxSize: new resource.ResourceProperty('MaxSize', String, 'Yes', null),
      MetricsCollection: new resource.ResourceArray('MetricsCollection', types.AutoScalingMetricsCollection, 'No', null),
      MinSize: new resource.ResourceProperty('MinSize', String, 'Yes', null),
      NotificationConfigurations: new resource.ResourceArray('NotificationConfigurations', types.AutoScalingNotificationConfigurations, 'No', null),
      PlacementGroup: new resource.ResourceProperty('PlacementGroup', String, 'No', null),
      Tags: new tag.TagSet(),
      TerminationPolicies: new resource.ResourceArray('TerminationPolicies', String, 'No', null),
      VPCZoneIdentifier: new resource.ResourceArray('VPCZoneIdentifier', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LaunchConfiguration extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LaunchConfiguration'
    let properties = {
      AssociatePublicIpAddress: new resource.ResourceProperty('AssociatePublicIpAddress', Boolean, 'No', null),
      BlockDeviceMappings: new resource.ResourceArray('BlockDeviceMappings', types.BlockDeviceMappings, 'No', null),
      ClassicLinkVPCId: new resource.ResourceProperty('ClassicLinkVPCId', String, 'No', null),
      ClassicLinkVPCSecurityGroups: new resource.ResourceArray('ClassicLinkVPCSecurityGroups', String, 'Conditional', null),
      EbsOptimized: new resource.ResourceProperty('EbsOptimized', Boolean, 'Conditional', null),
      IamInstanceProfile: new resource.ResourceProperty('IamInstanceProfile', String, 'No', null),
      ImageId: new resource.ResourceProperty('ImageId', String, 'Yes', null),
      InstanceId: new resource.ResourceProperty('InstanceId', String, 'No', null),
      InstanceMonitoring: new resource.ResourceProperty('InstanceMonitoring', Boolean, 'No', null),
      InstanceType: new resource.ResourceProperty('InstanceType', String, 'Yes', null),
      KernelId: new resource.ResourceProperty('KernelId', String, 'No', null),
      KeyName: new resource.ResourceProperty('KeyName', String, 'No', null),
      PlacementTenancy: new resource.ResourceProperty('PlacementTenancy', String, 'No', null),
      RamDiskId: new resource.ResourceProperty('RamDiskId', String, 'No', null),
      SecurityGroups: new resource.ResourceArray('SecurityGroups', types.EC2securitygroups, 'No', null),
      SpotPrice: new resource.ResourceProperty('SpotPrice', String, 'No', null),
      UserData: new resource.ResourceProperty('UserData', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LifecycleHook extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LifecycleHook'
    let properties = {
      AutoScalingGroupName: new resource.ResourceProperty('AutoScalingGroupName', String, 'Yes', null),
      DefaultResult: new resource.ResourceProperty('DefaultResult', String, 'No', null),
      HeartbeatTimeout: new resource.ResourceProperty('HeartbeatTimeout', Number, 'No', null),
      LifecycleTransition: new resource.ResourceProperty('LifecycleTransition', String, 'Yes', null),
      NotificationMetadata: new resource.ResourceProperty('NotificationMetadata', String, 'No', null),
      NotificationTargetARN: new resource.ResourceProperty('NotificationTargetARN', String, 'Yes', null),
      RoleARN: new resource.ResourceProperty('RoleARN', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScalingPolicy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScalingPolicy'
    let properties = {
      AdjustmentType: new resource.ResourceProperty('AdjustmentType', String, 'Yes', null),
      AutoScalingGroupName: new resource.ResourceProperty('AutoScalingGroupName', String, 'Yes', null),
      Cooldown: new resource.ResourceProperty('Cooldown', String, 'No', null),
      EstimatedInstanceWarmup: new resource.ResourceProperty('EstimatedInstanceWarmup', Number, 'No', null),
      MetricAggregationType: new resource.ResourceProperty('MetricAggregationType', String, 'No', null),
      MinAdjustmentMagnitude: new resource.ResourceProperty('MinAdjustmentMagnitude', Number, 'No', null),
      PolicyType: new resource.ResourceProperty('PolicyType', String, 'No', null),
      ScalingAdjustment: new resource.ResourceProperty('ScalingAdjustment', Number, 'Conditional', null),
      StepAdjustments: new resource.ResourceArray('StepAdjustments', types.AutoScalingScalingPolicyStepAdjustments, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScheduledAction extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScheduledAction'
    let properties = {
      AutoScalingGroupName: new resource.ResourceProperty('AutoScalingGroupName', String, 'Yes', null),
      DesiredCapacity: new resource.ResourceProperty('DesiredCapacity', Number, 'No', null),
      EndTime: new resource.ResourceProperty('EndTime', Date, 'No', null),
      MaxSize: new resource.ResourceProperty('MaxSize', Number, 'No', null),
      MinSize: new resource.ResourceProperty('MinSize', Number, 'No', null),
      Recurrence: new resource.ResourceProperty('Recurrence', String, 'No', null),
      StartTime: new resource.ResourceProperty('StartTime', Date, 'No', null)
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