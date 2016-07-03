'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class AutoScalingGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::AutoScalingGroup'
    let properties = {
      AvailabilityZones: new resource.ResourceArray(String, 'Conditional', null),
      Cooldown: new resource.ResourceProperty(String, 'No', null),
      DesiredCapacity: new resource.ResourceProperty(String, 'No', null),
      HealthCheckGracePeriod: new resource.ResourceProperty(Number, 'No', null),
      HealthCheckType: new resource.ResourceProperty(String, 'No', null),
      InstanceId: new resource.ResourceProperty(String, 'Conditional', null),
      LaunchConfigurationName: new resource.ResourceProperty(String, 'Conditional', null),
      LoadBalancerNames: new resource.ResourceArray(String, 'No', null),
      MaxSize: new resource.ResourceProperty(String, 'Yes', null),
      MetricsCollection: new resource.ResourceArray(types.AutoScalingMetricsCollection, 'No', null),
      MinSize: new resource.ResourceProperty(String, 'Yes', null),
      NotificationConfigurations: new resource.ResourceArray(types.AutoScalingNotificationConfigurations, 'No', null),
      PlacementGroup: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      TerminationPolicies: new resource.ResourceArray(String, 'No', null),
      VPCZoneIdentifier: new resource.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LaunchConfiguration extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LaunchConfiguration'
    let properties = {
      AssociatePublicIpAddress: new resource.ResourceProperty(Boolean, 'No', null),
      BlockDeviceMappings: new resource.ResourceArray(types.BlockDeviceMappings, 'No', null),
      ClassicLinkVPCId: new resource.ResourceProperty(String, 'No', null),
      ClassicLinkVPCSecurityGroups: new resource.ResourceArray(String, 'Conditional', null),
      EbsOptimized: new resource.ResourceProperty(Boolean, 'Conditional', null),
      IamInstanceProfile: new resource.ResourceProperty(String, 'No', null),
      ImageId: new resource.ResourceProperty(String, 'Yes', null),
      InstanceId: new resource.ResourceProperty(String, 'No', null),
      InstanceMonitoring: new resource.ResourceProperty(Boolean, 'No', null),
      InstanceType: new resource.ResourceProperty(String, 'Yes', null),
      KernelId: new resource.ResourceProperty(String, 'No', null),
      KeyName: new resource.ResourceProperty(String, 'No', null),
      PlacementTenancy: new resource.ResourceProperty(String, 'No', null),
      RamDiskId: new resource.ResourceProperty(String, 'No', null),
      SecurityGroups: new resource.ResourceArray(types.EC2securitygroups, 'No', null),
      SpotPrice: new resource.ResourceProperty(String, 'No', null),
      UserData: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LifecycleHook extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LifecycleHook'
    let properties = {
      AutoScalingGroupName: new resource.ResourceProperty(String, 'Yes', null),
      DefaultResult: new resource.ResourceProperty(String, 'No', null),
      HeartbeatTimeout: new resource.ResourceProperty(Number, 'No', null),
      LifecycleTransition: new resource.ResourceProperty(String, 'Yes', null),
      NotificationMetadata: new resource.ResourceProperty(String, 'No', null),
      NotificationTargetARN: new resource.ResourceProperty(String, 'Yes', null),
      RoleARN: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScalingPolicy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScalingPolicy'
    let properties = {
      AdjustmentType: new resource.ResourceProperty(String, 'Yes', null),
      AutoScalingGroupName: new resource.ResourceProperty(String, 'Yes', null),
      Cooldown: new resource.ResourceProperty(String, 'No', null),
      EstimatedInstanceWarmup: new resource.ResourceProperty(Number, 'No', null),
      MetricAggregationType: new resource.ResourceProperty(String, 'No', null),
      MinAdjustmentMagnitude: new resource.ResourceProperty(Number, 'No', null),
      PolicyType: new resource.ResourceProperty(String, 'No', null),
      ScalingAdjustment: new resource.ResourceProperty(Number, 'Conditional', null),
      StepAdjustments: new resource.ResourceArray(types.AutoScalingScalingPolicyStepAdjustments, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScheduledAction extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScheduledAction'
    let properties = {
      AutoScalingGroupName: new resource.ResourceProperty(String, 'Yes', null),
      DesiredCapacity: new resource.ResourceProperty(Number, 'No', null),
      EndTime: new resource.ResourceProperty(Date, 'No', null),
      MaxSize: new resource.ResourceProperty(Number, 'No', null),
      MinSize: new resource.ResourceProperty(Number, 'No', null),
      Recurrence: new resource.ResourceProperty(String, 'No', null),
      StartTime: new resource.ResourceProperty(Date, 'No', null)
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