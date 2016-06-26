'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class AutoScalingGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::AutoScalingGroup'
    let properties = {
      AvailabilityZones: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      Cooldown: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DesiredCapacity: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HealthCheckGracePeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HealthCheckType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      LaunchConfigurationName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      LoadBalancerNames: new wolkenkratzer.ResourceArray(String, 'No', null),
      MaxSize: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MetricsCollection: new wolkenkratzer.ResourceArray(propertyTypes.AutoScalingMetricsCollection, 'No', null),
      MinSize: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NotificationConfigurations: new wolkenkratzer.ResourceArray(propertyTypes.AutoScalingNotificationConfigurations, 'No', null),
      PlacementGroup: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      TerminationPolicies: new wolkenkratzer.ResourceArray(String, 'No', null),
      VPCZoneIdentifier: new wolkenkratzer.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LaunchConfiguration extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LaunchConfiguration'
    let properties = {
      AssociatePublicIpAddress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      BlockDeviceMappings: new wolkenkratzer.ResourceArray(propertyTypes.BlockDeviceMappings, 'No', null),
      ClassicLinkVPCId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ClassicLinkVPCSecurityGroups: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      IamInstanceProfile: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ImageId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      InstanceMonitoring: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      KernelId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PlacementTenancy: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RamDiskId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SecurityGroups: new wolkenkratzer.ResourceArray(propertyTypes.EC2securitygroups, 'No', null),
      SpotPrice: new wolkenkratzer.ResourceProperty(String, 'No', null),
      UserData: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LifecycleHook extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::LifecycleHook'
    let properties = {
      AutoScalingGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DefaultResult: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HeartbeatTimeout: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LifecycleTransition: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NotificationMetadata: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NotificationTargetARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScalingPolicy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScalingPolicy'
    let properties = {
      AdjustmentType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      AutoScalingGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Cooldown: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EstimatedInstanceWarmup: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MetricAggregationType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MinAdjustmentMagnitude: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PolicyType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ScalingAdjustment: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      StepAdjustments: new wolkenkratzer.ResourceArray(propertyTypes.AutoScalingScalingPolicyStepAdjustments, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ScheduledAction extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::AutoScaling::ScheduledAction'
    let properties = {
      AutoScalingGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DesiredCapacity: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EndTime: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MaxSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MinSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Recurrence: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StartTime: new wolkenkratzer.ResourceProperty(String, 'No', null)
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