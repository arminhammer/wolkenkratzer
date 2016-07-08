'use strict'

const SubPropertyObject = require('./baseawsobject').SubPropertyObject
const ResourceArray = require('./resourceproperty').ResourceArray
const ResourceProperty = require('./resourceproperty').ResourceProperty

class AmazonAPIGatewayApiKeyStageKey extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      RestApiId: new ResourceProperty('RestApiId', String, 'No', null),
      StageName: new ResourceProperty('StageName', String, 'No', null)
    }
    super('AmazonAPIGatewayApiKeyStageKey', properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescription extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CacheClusterEnabled: new ResourceProperty('CacheClusterEnabled', Boolean, 'No', null),
      CacheClusterSize: new ResourceProperty('CacheClusterSize', String, 'No', null),
      CacheDataEncrypted: new ResourceProperty('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceProperty('CachingEnabled', Boolean, 'No', null),
      ClientCertificateId: new ResourceProperty('ClientCertificateId', String, 'No', null),
      DataTraceEnabled: new ResourceProperty('DataTraceEnabled', Boolean, 'No', null),
      Description: new ResourceProperty('Description', String, 'No', null),
      LoggingLevel: new ResourceProperty('LoggingLevel', String, 'No', null),
      MethodSettings: new ResourceProperty('MethodSettings', AmazonAPIGatewayDeploymentStageDescriptionMethodSetting, 'No', null),
      MetricsEnabled: new ResourceProperty('MetricsEnabled', Boolean, 'No', null),
      StageName: new ResourceProperty('StageName', String, 'No', null),
      ThrottlingBurstLimit: new ResourceProperty('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceProperty('ThrottlingRateLimit', Number, 'No', null),
      Variables: new ResourceProperty('Variables', Map, 'No', null)
    }
    super('AmazonAPIGatewayDeploymentStageDescription', properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescriptionMethodSetting extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceProperty('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceProperty('CachingEnabled', Boolean, 'No', null),
      DataTraceEnabled: new ResourceProperty('DataTraceEnabled', Boolean, 'No', null),
      HttpMethod: new ResourceProperty('HttpMethod', String, 'No', null),
      LoggingLevel: new ResourceProperty('LoggingLevel', String, 'No', null),
      MetricsEnabled: new ResourceProperty('MetricsEnabled', Boolean, 'No', null),
      ResourcePath: new ResourceProperty('ResourcePath', String, 'No', null),
      ThrottlingBurstLimit: new ResourceProperty('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceProperty('ThrottlingRateLimit', Number, 'No', null)
    }
    super('AmazonAPIGatewayDeploymentStageDescriptionMethodSetting', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CacheKeyParameters: new ResourceArray('CacheKeyParameters', String, 'No', null),
      CacheNamespace: new ResourceProperty('CacheNamespace', String, 'No', null),
      Credentials: new ResourceProperty('Credentials', String, 'No', null),
      IntegrationHttpMethod: new ResourceProperty('IntegrationHttpMethod', String, 'Conditional', null),
      IntegrationResponses: new ResourceArray('IntegrationResponses', AmazonAPIGatewayMethodIntegrationIntegrationResponse, 'No', null),
      RequestParameters: new ResourceProperty('RequestParameters', Map, 'No', null),
      RequestTemplates: new ResourceProperty('RequestTemplates', Map, 'No', null),
      Type: new ResourceProperty('Type', String, 'Yes', null),
      Uri: new ResourceProperty('Uri', String, 'Conditional', null)
    }
    super('AmazonAPIGatewayMethodIntegration', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegrationIntegrationResponse extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ResponseParameters: new ResourceProperty('ResponseParameters', Map, 'No', null),
      ResponseTemplates: new ResourceProperty('ResponseTemplates', Map, 'No', null),
      SelectionPattern: new ResourceProperty('SelectionPattern', String, 'No', null),
      StatusCode: new ResourceProperty('StatusCode', String, 'No', null)
    }
    super('AmazonAPIGatewayMethodIntegrationIntegrationResponse', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodMethodResponse extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ResponseModels: new ResourceProperty('ResponseModels', Map, 'No', null),
      ResponseParameters: new ResourceProperty('ResponseParameters', Map, 'No', null),
      StatusCode: new ResourceProperty('StatusCode', String, 'Yes', null)
    }
    super('AmazonAPIGatewayMethodMethodResponse', properties, propertiesObject)
  }
}

class AmazonAPIGatewayRestApiS3Location extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty('Bucket', String, 'No', null),
      ETag: new ResourceProperty('ETag', String, 'No', null),
      Key: new ResourceProperty('Key', String, 'No', null),
      Version: new ResourceProperty('Version', String, 'No', null)
    }
    super('AmazonAPIGatewayRestApiS3Location', properties, propertiesObject)
  }
}

class AmazonAPIGatewayStageMethodSetting extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceProperty('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceProperty('CachingEnabled', Boolean, 'No', null),
      DataTraceEnabled: new ResourceProperty('DataTraceEnabled', Boolean, 'No', null),
      HttpMethod: new ResourceProperty('HttpMethod', String, 'Yes', null),
      LoggingLevel: new ResourceProperty('LoggingLevel', String, 'No', null),
      MetricsEnabled: new ResourceProperty('MetricsEnabled', Boolean, 'No', null),
      ResourcePath: new ResourceProperty('ResourcePath', String, 'Yes', null),
      ThrottlingBurstLimit: new ResourceProperty('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceProperty('ThrottlingRateLimit', Number, 'No', null)
    }
    super('AmazonAPIGatewayStageMethodSetting', properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty('DeviceName', String, 'Yes', null),
      Ebs: new ResourceProperty('Ebs', AWSCloudFormationAutoScalingEBSBlockDevicePropertyType, 'Conditional', null),
      NoDevice: new ResourceProperty('NoDevice', Boolean, 'No', null),
      VirtualName: new ResourceProperty('VirtualName', String, 'Conditional', null)
    }
    super('AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType', properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingEBSBlockDevicePropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceProperty('Encrypted', Boolean, 'No', null),
      Iops: new ResourceProperty('Iops', Number, 'No', null),
      SnapshotId: new ResourceProperty('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceProperty('VolumeSize', Number, 'Conditional', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'No', null)
    }
    super('AWSCloudFormationAutoScalingEBSBlockDevicePropertyType', properties, propertiesObject)
  }
}

class AutoScalingMetricsCollection extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Granularity: new ResourceProperty('Granularity', String, 'Yes', null),
      Metrics: new ResourceArray('Metrics', String, 'No', null)
    }
    super('AutoScalingMetricsCollection', properties, propertiesObject)
  }
}

class AutoScalingNotificationConfigurations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      NotificationTypes: new ResourceArray('NotificationTypes', String, 'Yes', null),
      TopicARN: new ResourceProperty('TopicARN', String, 'Yes', null)
    }
    super('AutoScalingNotificationConfigurations', properties, propertiesObject)
  }
}

class AutoScalingScalingPolicyStepAdjustments extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      MetricIntervalLowerBound: new ResourceProperty('MetricIntervalLowerBound', Number, 'No', null),
      MetricIntervalUpperBound: new ResourceProperty('MetricIntervalUpperBound', Number, 'No', null),
      ScalingAdjustment: new ResourceProperty('ScalingAdjustment', Number, 'Yes', null)
    }
    super('AutoScalingScalingPolicyStepAdjustments', properties, propertiesObject)
  }
}

class AutoScalingTagsPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null),
      PropagateAtLaunch: new ResourceProperty('PropagateAtLaunch', Boolean, 'Yes', null)
    }
    super('AutoScalingTagsPropertyType', properties, propertiesObject)
  }
}

class CloudFormationStackParametersPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
    }
    super('CloudFormationStackParametersPropertyType', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceLabel extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      default: new ResourceProperty('default', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceLabel', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterGroup extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Label: new ResourceProperty('Label', AWSCloudFormationInterfaceLabel, 'No', null),
      Parameters: new ResourceArray('Parameters', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterGroup', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterLabel extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ParameterLogicalID: new ResourceProperty('ParameterLogicalID', AWSCloudFormationInterfaceLabel, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterLabel', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Aliases: new ResourceArray('Aliases', String, 'No', null),
      CacheBehaviors: new ResourceArray('CacheBehaviors', CloudFrontDistributionConfigCacheBehavior, 'No', null),
      Comment: new ResourceProperty('Comment', String, 'No', null),
      CustomErrorResponses: new ResourceArray('CustomErrorResponses', CloudFrontDistributionConfigCustomErrorResponse, 'No', null),
      DefaultCacheBehavior: new ResourceProperty('DefaultCacheBehavior', CloudFrontDefaultCacheBehavior, 'Yes', null),
      DefaultRootObject: new ResourceProperty('DefaultRootObject', String, 'No', null),
      Enabled: new ResourceProperty('Enabled', Boolean, 'Yes', null),
      Logging: new ResourceProperty('Logging', CloudFrontLogging, 'No', null),
      Origins: new ResourceArray('Origins', CloudFrontDistributionConfigOrigin, 'Yes', null),
      PriceClass: new ResourceProperty('PriceClass', String, 'No', null),
      Restrictions: new ResourceProperty('Restrictions', CloudFrontDistributionConfigurationRestrictions, 'No', null),
      ViewerCertificate: new ResourceProperty('ViewerCertificate', CloudFrontDistributionConfigurationViewerCertificate, 'No', null),
      WebACLId: new ResourceProperty('WebACLId', String, 'No', null)
    }
    super('CloudFrontDistributionConfig', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCacheBehavior extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceArray('AllowedMethods', String, 'No', null),
      CachedMethods: new ResourceArray('CachedMethods', String, 'No', null),
      Compress: new ResourceProperty('Compress', Boolean, 'No', null),
      DefaultTTL: new ResourceProperty('DefaultTTL', Number, 'No', null),
      ForwardedValues: new ResourceProperty('ForwardedValues', CloudFrontForwardedValues, 'Yes', null),
      MaxTTL: new ResourceProperty('MaxTTL', Number, 'No', null),
      MinTTL: new ResourceProperty('MinTTL', Number, 'No', null),
      PathPattern: new ResourceProperty('PathPattern', String, 'Yes', null),
      SmoothStreaming: new ResourceProperty('SmoothStreaming', Boolean, 'No', null),
      TargetOriginId: new ResourceProperty('TargetOriginId', String, 'Yes', null),
      TrustedSigners: new ResourceArray('TrustedSigners', String, 'No', null),
      ViewerProtocolPolicy: new ResourceProperty('ViewerProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDistributionConfigCacheBehavior', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCustomErrorResponse extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ErrorCachingMinTTL: new ResourceProperty('ErrorCachingMinTTL', Number, 'No', null),
      ErrorCode: new ResourceProperty('ErrorCode', Number, 'Yes', null),
      ResponseCode: new ResourceProperty('ResponseCode', Number, 'Conditional', null),
      ResponsePagePath: new ResourceProperty('ResponsePagePath', String, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigCustomErrorResponse', properties, propertiesObject)
  }
}

class CloudFrontDefaultCacheBehavior extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceArray('AllowedMethods', String, 'No', null),
      CachedMethods: new ResourceArray('CachedMethods', String, 'No', null),
      Compress: new ResourceProperty('Compress', Boolean, 'No', null),
      DefaultTTL: new ResourceProperty('DefaultTTL', Number, 'No', null),
      ForwardedValues: new ResourceProperty('ForwardedValues', CloudFrontForwardedValues, 'Yes', null),
      MaxTTL: new ResourceProperty('MaxTTL', Number, 'No', null),
      MinTTL: new ResourceProperty('MinTTL', String, 'No', null),
      SmoothStreaming: new ResourceProperty('SmoothStreaming', Boolean, 'No', null),
      TargetOriginId: new ResourceProperty('TargetOriginId', String, 'Yes', null),
      TrustedSigners: new ResourceArray('TrustedSigners', String, 'No', null),
      ViewerProtocolPolicy: new ResourceProperty('ViewerProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDefaultCacheBehavior', properties, propertiesObject)
  }
}

class CloudFrontLogging extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty('Bucket', String, 'Yes', null),
      IncludeCookies: new ResourceProperty('IncludeCookies', Boolean, 'No', null),
      Prefix: new ResourceProperty('Prefix', String, 'No', null)
    }
    super('CloudFrontLogging', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOrigin extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CustomOriginConfig: new ResourceProperty('CustomOriginConfig', CloudFrontDistributionConfigOriginCustomOrigin, 'Conditional', null),
      DomainName: new ResourceProperty('DomainName', String, 'Yes', null),
      Id: new ResourceProperty('Id', String, 'Yes', null),
      OriginPath: new ResourceProperty('OriginPath', String, 'No', null),
      S3OriginConfig: new ResourceProperty('S3OriginConfig', CloudFrontDistributionConfigOriginS3Origin, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigOrigin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginCustomOrigin extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HTTPPort: new ResourceProperty('HTTPPort', String, 'No', null),
      HTTPSPort: new ResourceProperty('HTTPSPort', String, 'No', null),
      OriginProtocolPolicy: new ResourceProperty('OriginProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDistributionConfigOriginCustomOrigin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginS3Origin extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      OriginAccessIdentity: new ResourceProperty('OriginAccessIdentity', String, 'No', null)
    }
    super('CloudFrontDistributionConfigOriginS3Origin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationRestrictions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      GeoRestriction: new ResourceProperty('GeoRestriction', CloudFrontDistributionConfigRestrictionsGeoRestriction, 'Yes', null)
    }
    super('CloudFrontDistributionConfigurationRestrictions', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigRestrictionsGeoRestriction extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Locations: new ResourceArray('Locations', String, 'Conditional', null),
      RestrictionType: new ResourceProperty('RestrictionType', String, 'Yes', null),
      blacklist: new ResourceProperty('blacklist', undefined, 'undefined', null),
      whitelist: new ResourceProperty('whitelist', undefined, 'undefined', null),
      none: new ResourceProperty('none', undefined, 'undefined', null)
    }
    super('CloudFrontDistributionConfigRestrictionsGeoRestriction', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationViewerCertificate extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CloudFrontDefaultCertificate: new ResourceProperty('CloudFrontDefaultCertificate', Boolean, 'Conditional', null),
      IamCertificateId: new ResourceProperty('IamCertificateId', String, 'Conditional', null),
      MinimumProtocolVersion: new ResourceProperty('MinimumProtocolVersion', String, 'Conditional', null),
      SslSupportMethod: new ResourceProperty('SslSupportMethod', String, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigurationViewerCertificate', properties, propertiesObject)
  }
}

class CloudFrontForwardedValues extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Cookies: new ResourceProperty('Cookies', CloudFrontForwardedValuesCookies, 'No', null),
      Headers: new ResourceArray('Headers', String, 'No', null),
      QueryString: new ResourceProperty('QueryString', Boolean, 'Yes', null)
    }
    super('CloudFrontForwardedValues', properties, propertiesObject)
  }
}

class CloudFrontForwardedValuesCookies extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Forward: new ResourceProperty('Forward', String, 'Yes', null),
      WhitelistedNames: new ResourceArray('WhitelistedNames', String, 'Conditional', null)
    }
    super('CloudFrontForwardedValuesCookies', properties, propertiesObject)
  }
}

class CloudWatchMetricDimensionPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('CloudWatchMetricDimensionPropertyType', properties, propertiesObject)
  }
}

class AmazonCloudWatchEventsRuleTarget extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Arn: new ResourceProperty('Arn', String, 'Yes', null),
      Id: new ResourceProperty('Id', String, 'Yes', null),
      Input: new ResourceProperty('Input', String, 'Conditional', null),
      InputPath: new ResourceProperty('InputPath', String, 'Conditional', null)
    }
    super('AmazonCloudWatchEventsRuleTarget', properties, propertiesObject)
  }
}

class CloudWatchLogsMetricFilterMetricTransformationProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      MetricName: new ResourceProperty('MetricName', String, 'Yes', null),
      MetricNamespace: new ResourceProperty('MetricNamespace', String, 'Yes', null),
      MetricValue: new ResourceProperty('MetricValue', String, 'Yes', null)
    }
    super('CloudWatchLogsMetricFilterMetricTransformationProperty', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentConfigMinimumHealthyHosts extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceProperty('Type', String, 'No', null),
      Value: new ResourceProperty('Value', Number, 'No', null)
    }
    super('AWSCodeDeployDeploymentConfigMinimumHealthyHosts', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeployment extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Description: new ResourceProperty('Description', String, 'No', null),
      IgnoreApplicationStopFailures: new ResourceProperty('IgnoreApplicationStopFailures', Boolean, 'No', null),
      Revision: new ResourceProperty('Revision', AWSCodeDeployDeploymentGroupDeploymentRevision, 'Yes', null)
    }
    super('AWSCodeDeployDeploymentGroupDeployment', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevision extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      GitHubLocation: new ResourceProperty('GitHubLocation', AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation, 'No', null),
      RevisionType: new ResourceProperty('RevisionType', String, 'No', null),
      S3Location: new ResourceProperty('S3Location', AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevision', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CommitId: new ResourceProperty('CommitId', String, 'Yes', null),
      Repository: new ResourceProperty('Repository', String, 'Yes', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty('Bucket', String, 'Yes', null),
      BundleType: new ResourceProperty('BundleType', String, 'Yes', null),
      ETag: new ResourceProperty('ETag', String, 'No', null),
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Version: new ResourceProperty('Version', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupEc2TagFilters extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'No', null),
      Type: new ResourceProperty('Type', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupEc2TagFilters', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'No', null),
      Type: new ResourceProperty('Type', String, 'No', null),
      Value: new ResourceProperty('Value', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeArtifactDetails extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      MaximumCount: new ResourceProperty('MaximumCount', Number, 'Yes', null),
      MinimumCount: new ResourceProperty('MinimumCount', Number, 'Yes', null)
    }
    super('AWSCodePipelineCustomActionTypeArtifactDetails', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeConfigurationProperties extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Description: new ResourceProperty('Description', String, 'No', null),
      Key: new ResourceProperty('Key', Boolean, 'Yes', null),
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Queryable: new ResourceProperty('Queryable', Boolean, 'No', null),
      Required: new ResourceProperty('Required', Boolean, 'Yes', null),
      Secret: new ResourceProperty('Secret', Boolean, 'Yes', null),
      Type: new ResourceProperty('Type', String, 'No', null)
    }
    super('AWSCodePipelineCustomActionTypeConfigurationProperties', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeSettings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EntityUrlTemplate: new ResourceProperty('EntityUrlTemplate', String, 'No', null),
      ExecutionUrlTemplate: new ResourceProperty('ExecutionUrlTemplate', String, 'No', null),
      RevisionUrlTemplate: new ResourceProperty('RevisionUrlTemplate', String, 'No', null),
      ThirdPartyConfigurationUrl: new ResourceProperty('ThirdPartyConfigurationUrl', String, 'No', null)
    }
    super('AWSCodePipelineCustomActionTypeSettings', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStore extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EncryptionKey: new ResourceProperty('EncryptionKey', AWSCodePipelinePipelineArtifactStoreEncryptionKey, 'No', null),
      Location: new ResourceProperty('Location', String, 'Yes', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineArtifactStore', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStoreEncryptionKey extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceProperty('Id', String, 'Yes', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineArtifactStoreEncryptionKey', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineDisableInboundStageTransitions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Reason: new ResourceProperty('Reason', String, 'Yes', null),
      StageName: new ResourceProperty('StageName', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineDisableInboundStageTransitions', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStages extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Actions: new ResourceArray('Actions', AWSCodePipelinePipelineStagesActions, 'Yes', null),
      Blockers: new ResourceArray('Blockers', AWSCodePipelinePipelineStagesBlockers, 'No', null),
      Name: new ResourceProperty('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStages', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ActionTypeId: new ResourceProperty('ActionTypeId', AWSCodePipelinePipelineStagesActionsActionTypeId, 'Yes', null),
      Configuration: new ResourceProperty('Configuration', Object, 'No', null),
      InputArtifacts: new ResourceArray('InputArtifacts', AWSCodePipelinePipelineStagesActionsInputArtifacts, 'No', null),
      Name: new ResourceProperty('Name', String, 'Yes', null),
      OutputArtifacts: new ResourceArray('OutputArtifacts', AWSCodePipelinePipelineStagesActionsOutputArtifacts, 'No', null),
      RoleArn: new ResourceProperty('RoleArn', String, 'No', null),
      RunOrder: new ResourceProperty('RunOrder', Number, 'No', null)
    }
    super('AWSCodePipelinePipelineStagesActions', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsActionTypeId extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Category: new ResourceProperty('Category', String, 'Yes', null),
      Owner: new ResourceProperty('Owner', String, 'Yes', null),
      Provider: new ResourceProperty('Provider', String, 'Yes', null),
      Version: new ResourceProperty('Version', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsActionTypeId', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsInputArtifacts extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsInputArtifacts', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsOutputArtifacts extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsOutputArtifacts', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesBlockers extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesBlockers', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleScope extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ComplianceResourceId: new ResourceProperty('ComplianceResourceId', String, 'No', null),
      ComplianceResourceTypes: new ResourceArray('ComplianceResourceTypes', String, 'Conditional', null),
      TagKey: new ResourceProperty('TagKey', String, 'Conditional', null),
      TagValue: new ResourceProperty('TagValue', String, 'Conditional', null)
    }
    super('AWSConfigConfigRuleScope', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSource extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Owner: new ResourceProperty('Owner', String, 'Yes', null),
      SourceDetails: new ResourceArray('SourceDetails', AWSConfigConfigRuleSourceSourceDetails, 'No', null),
      SourceIdentifier: new ResourceProperty('SourceIdentifier', String, 'Yes', null)
    }
    super('AWSConfigConfigRuleSource', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSourceSourceDetails extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EventSource: new ResourceProperty('EventSource', String, 'Yes', null),
      MessageType: new ResourceProperty('MessageType', String, 'Yes', null)
    }
    super('AWSConfigConfigRuleSourceSourceDetails', properties, propertiesObject)
  }
}

class AWSConfigConfigurationRecorderRecordingGroup extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AllSupported: new ResourceProperty('AllSupported', Boolean, 'No', null),
      IncludeGlobalResourceTypes: new ResourceProperty('IncludeGlobalResourceTypes', Boolean, 'No', null),
      ResourceTypes: new ResourceArray('ResourceTypes', String, 'No', null)
    }
    super('AWSConfigConfigurationRecorderRecordingGroup', properties, propertiesObject)
  }
}

class AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeliveryFrequency: new ResourceProperty('DeliveryFrequency', String, 'No', null)
    }
    super('AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterObjects extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Attributes: new ResourceProperty('Attributes', AWSDataPipelineParameterObjectsAttributes, 'Yes', null),
      Id: new ResourceProperty('Id', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterObjects', properties, propertiesObject)
  }
}

class AWSDataPipelineParameterObjectsAttributes extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      StringValue: new ResourceProperty('StringValue', String, 'Conditional', null)
    }
    super('AWSDataPipelineParameterObjectsAttributes', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterValues extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceProperty('Id', String, 'Yes', null),
      StringValue: new ResourceProperty('StringValue', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterValues', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineObjects extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Fields: new ResourceProperty('Fields', AWSDataPipelineDataPipelineObjectFields, 'Yes', null),
      Id: new ResourceProperty('Id', String, 'Yes', null),
      Name: new ResourceProperty('Name', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineObjects', properties, propertiesObject)
  }
}

class AWSDataPipelineDataPipelineObjectFields extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      RefValue: new ResourceProperty('RefValue', String, 'Conditional', null),
      StringValue: new ResourceProperty('StringValue', String, 'Conditional', null)
    }
    super('AWSDataPipelineDataPipelineObjectFields', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelinePipelineTags extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelinePipelineTags', properties, propertiesObject)
  }
}

class AWSDirectoryServiceMicrosoftADVpcSettings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceProperty('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceMicrosoftADVpcSettings', properties, propertiesObject)
  }
}

class AWSDirectoryServiceSimpleADVpcSettings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceProperty('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceSimpleADVpcSettings', properties, propertiesObject)
  }
}

class DynamoDBAttributeDefinitions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceProperty('AttributeName', String, 'Yes', null),
      AttributeType: new ResourceProperty('AttributeType', String, 'Yes', null)
    }
    super('DynamoDBAttributeDefinitions', properties, propertiesObject)
  }
}

class DynamoDBGlobalSecondaryIndexes extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      IndexName: new ResourceProperty('IndexName', String, 'Yes', null),
      KeySchema: new ResourceProperty('KeySchema', DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceProperty('Projection', DynamoDBProjectionObject, 'Yes', null),
      ProvisionedThroughput: new ResourceProperty('ProvisionedThroughput', DynamoDBProvisionedThroughput, 'Yes', null)
    }
    super('DynamoDBGlobalSecondaryIndexes', properties, propertiesObject)
  }
}

class DynamoDBKeySchema extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceProperty('AttributeName', String, 'Yes', null),
      KeyType: new ResourceProperty('KeyType', String, 'Yes', null)
    }
    super('DynamoDBKeySchema', properties, propertiesObject)
  }
}

class DynamoDBLocalSecondaryIndexes extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      IndexName: new ResourceProperty('IndexName', String, 'Yes', null),
      KeySchema: new ResourceProperty('KeySchema', DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceProperty('Projection', DynamoDBProjectionObject, 'Yes', null)
    }
    super('DynamoDBLocalSecondaryIndexes', properties, propertiesObject)
  }
}

class DynamoDBProjectionObject extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      NonKeyAttributes: new ResourceArray('NonKeyAttributes', String, 'No', null),
      ProjectionType: new ResourceProperty('ProjectionType', String, 'No', null),
      KEYS_ONLY: new ResourceProperty('KEYS_ONLY', undefined, 'undefined', null),
      INCLUDE: new ResourceProperty('INCLUDE', undefined, 'undefined', null),
      ALL: new ResourceProperty('ALL', undefined, 'undefined', null)
    }
    super('DynamoDBProjectionObject', properties, propertiesObject)
  }
}

class DynamoDBProvisionedThroughput extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ReadCapacityUnits: new ResourceProperty('ReadCapacityUnits', Number, 'Yes', null),
      WriteCapacityUnits: new ResourceProperty('WriteCapacityUnits', Number, 'Yes', null)
    }
    super('DynamoDBProvisionedThroughput', properties, propertiesObject)
  }
}

class DynamoDBTableStreamSpecification extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      StreamViewType: new ResourceProperty('StreamViewType', String, 'Yes', null)
    }
    super('DynamoDBTableStreamSpecification', properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty('DeviceName', String, 'Yes', null),
      Ebs: new ResourceProperty('Ebs', AmazonElasticBlockStoreBlockDeviceProperty, 'Conditional', null),
      NoDevice: new ResourceProperty('NoDevice', Map, 'No', null),
      VirtualName: new ResourceProperty('VirtualName', String, 'Conditional', null)
    }
    super('AmazonEC2BlockDeviceMappingProperty', properties, propertiesObject)
  }
}

class AmazonElasticBlockStoreBlockDeviceProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceProperty('Encrypted', Boolean, 'No', null),
      Iops: new ResourceProperty('Iops', Number, 'Conditional', null),
      SnapshotId: new ResourceProperty('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceProperty('VolumeSize', String, 'Conditional', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'No', null)
    }
    super('AmazonElasticBlockStoreBlockDeviceProperty', properties, propertiesObject)
  }
}

class EC2ICMPPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2ICMPPropertyType', properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AssociationParameters: new ResourceArray('AssociationParameters', AmazonEC2InstanceSsmAssociationsAssociationParameters, 'No', null),
      DocumentName: new ResourceProperty('DocumentName', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociations', properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceArray('Value', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociationsAssociationParameters', properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Device: new ResourceProperty('Device', String, 'Yes', null),
      VolumeId: new ResourceProperty('VolumeId', String, 'Yes', null)
    }
    super('EC2MountPointPropertyType', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceProperty('AssociatePublicIpAddress', Boolean, 'No', null),
      DeleteOnTermination: new ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      Description: new ResourceProperty('Description', String, 'No', null),
      DeviceIndex: new ResourceProperty('DeviceIndex', String, 'Yes', null),
      GroupSet: new ResourceArray('GroupSet', String, 'No', null),
      NetworkInterfaceId: new ResourceProperty('NetworkInterfaceId', String, 'Conditional', null),
      PrivateIpAddress: new ResourceProperty('PrivateIpAddress', String, 'No', null),
      PrivateIpAddresses: new ResourceArray('PrivateIpAddresses', EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceProperty('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SubnetId: new ResourceProperty('SubnetId', String, 'Conditional', null)
    }
    super('EC2NetworkInterfaceEmbeddedPropertyType', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAssociation extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AttachmentID: new ResourceProperty('AttachmentID', String, 'Yes', null),
      InstanceID: new ResourceProperty('InstanceID', String, 'Yes', null),
      PublicIp: new ResourceProperty('PublicIp', String, 'Yes', null),
      IpOwnerId: new ResourceProperty('IpOwnerId', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceAssociation', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAttachment extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AttachmentID: new ResourceProperty('AttachmentID', String, 'Yes', null),
      InstanceID: new ResourceProperty('InstanceID', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceAttachment', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceGroupItem extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceGroupItem', properties, propertiesObject)
  }
}

class EC2NetworkInterfacePrivateIPSpecification extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      PrivateIpAddress: new ResourceProperty('PrivateIpAddress', String, 'Yes', null),
      Primary: new ResourceProperty('Primary', Boolean, 'Yes', null)
    }
    super('EC2NetworkInterfacePrivateIPSpecification', properties, propertiesObject)
  }
}

class EC2PortRangePropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2PortRangePropertyType', properties, propertiesObject)
  }
}

class EC2SecurityGroupRulePropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CidrIp: new ResourceProperty('CidrIp', String, 'Conditional', null),
      DestinationSecurityGroupId: new ResourceProperty('DestinationSecurityGroupId', String, 'Conditional', null),
      FromPort: new ResourceProperty('FromPort', Number, 'No', null),
      IpProtocol: new ResourceProperty('IpProtocol', String, 'Yes', null),
      SourceSecurityGroupId: new ResourceProperty('SourceSecurityGroupId', String, 'Conditional', null),
      SourceSecurityGroupName: new ResourceProperty('SourceSecurityGroupName', String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new ResourceProperty('SourceSecurityGroupOwnerId', String, 'Conditional', null),
      ToPort: new ResourceProperty('ToPort', Number, 'No', null)
    }
    super('EC2SecurityGroupRulePropertyType', properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigData extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AllocationStrategy: new ResourceProperty('AllocationStrategy', String, 'No', null),
      ExcessCapacityTerminationPolicy: new ResourceProperty('ExcessCapacityTerminationPolicy', String, 'No', null),
      IamFleetRole: new ResourceProperty('IamFleetRole', String, 'Yes', null),
      LaunchSpecifications: new ResourceArray('LaunchSpecifications', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications, 'Yes', null),
      SpotPrice: new ResourceProperty('SpotPrice', String, 'Yes', null),
      TargetCapacity: new ResourceProperty('TargetCapacity', Number, 'Yes', null),
      TerminateInstancesWithExpiration: new ResourceProperty('TerminateInstancesWithExpiration', Boolean, 'No', null),
      ValidFrom: new ResourceProperty('ValidFrom', String, 'No', null),
      ValidUntil: new ResourceProperty('ValidUntil', String, 'No', null)
    }
    super('AmazonEC2SpotFleetSpotFleetRequestConfigData', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      BlockDeviceMappings: new ResourceArray('BlockDeviceMappings', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings, 'No', null),
      EbsOptimized: new ResourceProperty('EbsOptimized', Boolean, 'No', null),
      IamInstanceProfile: new ResourceProperty('IamInstanceProfile', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile, 'No', null),
      ImageId: new ResourceProperty('ImageId', String, 'Yes', null),
      InstanceType: new ResourceProperty('InstanceType', String, 'Yes', null),
      KernelId: new ResourceProperty('KernelId', String, 'No', null),
      KeyName: new ResourceProperty('KeyName', String, 'No', null),
      Monitoring: new ResourceProperty('Monitoring', AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring, 'No', null),
      NetworkInterfaces: new ResourceArray('NetworkInterfaces', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces, 'No', null),
      Placement: new ResourceProperty('Placement', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement, 'No', null),
      RamdiskId: new ResourceProperty('RamdiskId', String, 'No', null),
      SecurityGroups: new ResourceArray('SecurityGroups', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups, 'No', null),
      SubnetId: new ResourceProperty('SubnetId', String, 'No', null),
      UserData: new ResourceProperty('UserData', String, 'No', null),
      WeightedCapacity: new ResourceProperty('WeightedCapacity', Number, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty('DeviceName', String, 'Yes', null),
      Ebs: new ResourceProperty('Ebs', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs, 'Conditional', null),
      NoDevice: new ResourceProperty('NoDevice', Boolean, 'No', null),
      VirtualName: new ResourceProperty('VirtualName', String, 'Conditional', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceProperty('Encrypted', Boolean, 'No', null),
      Iops: new ResourceProperty('Iops', Number, 'No', null),
      SnapshotId: new ResourceProperty('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceProperty('VolumeSize', Number, 'Conditional', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Arn: new ResourceProperty('Arn', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile', properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty('Enabled', Boolean, 'No', null)
    }
    super('AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceProperty('AssociatePublicIpAddress', Boolean, 'No', null),
      DeleteOnTermination: new ResourceProperty('DeleteOnTermination', Boolean, 'No', null),
      Description: new ResourceProperty('Description', String, 'No', null),
      DeviceIndex: new ResourceProperty('DeviceIndex', Number, 'Yes', null),
      Groups: new ResourceArray('Groups', String, 'No', null),
      NetworkInterfaceId: new ResourceProperty('NetworkInterfaceId', String, 'No', null),
      PrivateIpAddresses: new ResourceArray('PrivateIpAddresses', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceProperty('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SubnetId: new ResourceProperty('SubnetId', String, 'Conditional', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Primary: new ResourceProperty('Primary', Boolean, 'No', null),
      PrivateIpAddress: new ResourceProperty('PrivateIpAddress', String, 'Yes', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceProperty('AvailabilityZone', String, 'No', null),
      GroupName: new ResourceProperty('GroupName', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      GroupId: new ResourceProperty('GroupId', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceDeploymentConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      MaximumPercent: new ResourceProperty('MaximumPercent', Number, 'No', null),
      MinimumHealthyPercent: new ResourceProperty('MinimumHealthyPercent', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceServiceDeploymentConfiguration', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceLoadBalancers extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ContainerName: new ResourceProperty('ContainerName', String, 'No', null),
      ContainerPort: new ResourceProperty('ContainerPort', Number, 'Yes', null),
      LoadBalancerName: new ResourceProperty('LoadBalancerName', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceServiceLoadBalancers', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Command: new ResourceArray('Command', String, 'No', null),
      Cpu: new ResourceProperty('Cpu', Number, 'No', null),
      DisableNetworking: new ResourceProperty('DisableNetworking', Boolean, 'No', null),
      DnsSearchDomains: new ResourceArray('DnsSearchDomains', String, 'No', null),
      DnsServers: new ResourceArray('DnsServers', String, 'No', null),
      DockerLabels: new ResourceProperty('DockerLabels', Map, 'No', null),
      DockerSecurityOptions: new ResourceArray('DockerSecurityOptions', String, 'No', null),
      EntryPoint: new ResourceArray('EntryPoint', String, 'No', null),
      Environment: new ResourceArray('Environment', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment, 'No', null),
      Essential: new ResourceProperty('Essential', Boolean, 'No', null),
      ExtraHosts: new ResourceArray('ExtraHosts', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry, 'No', null),
      Hostname: new ResourceProperty('Hostname', String, 'No', null),
      Image: new ResourceProperty('Image', String, 'Yes', null),
      Links: new ResourceArray('Links', String, 'No', null),
      LogConfiguration: new ResourceProperty('LogConfiguration', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration, 'No', null),
      Memory: new ResourceProperty('Memory', Number, 'Yes', null),
      MountPoints: new ResourceArray('MountPoints', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints, 'No', null),
      Name: new ResourceProperty('Name', String, 'Yes', null),
      PortMappings: new ResourceArray('PortMappings', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings, 'No', null),
      Privileged: new ResourceProperty('Privileged', Boolean, 'No', null),
      ReadonlyRootFilesystem: new ResourceProperty('ReadonlyRootFilesystem', Boolean, 'No', null),
      Ulimits: new ResourceArray('Ulimits', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit, 'No', null),
      User: new ResourceProperty('User', String, 'No', null),
      VolumesFrom: new ResourceArray('VolumesFrom', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom, 'No', null),
      WorkingDirectory: new ResourceProperty('WorkingDirectory', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Hostname: new ResourceProperty('Hostname', String, 'Yes', null),
      IpAddress: new ResourceProperty('IpAddress', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      LogDriver: new ResourceProperty('LogDriver', String, 'Yes', null),
      Options: new ResourceProperty('Options', Map, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ContainerPath: new ResourceProperty('ContainerPath', String, 'Yes', null),
      SourceVolume: new ResourceProperty('SourceVolume', String, 'Yes', null),
      ReadOnly: new ResourceProperty('ReadOnly', Boolean, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ContainerPort: new ResourceProperty('ContainerPort', Number, 'Yes', null),
      HostPort: new ResourceProperty('HostPort', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HardLimit: new ResourceProperty('HardLimit', Number, 'Yes', null),
      Name: new ResourceProperty('Name', String, 'No', null),
      SoftLimit: new ResourceProperty('SoftLimit', Number, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      SourceContainer: new ResourceProperty('SourceContainer', String, 'Yes', null),
      ReadOnly: new ResourceProperty('ReadOnly', Boolean, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumes extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Host: new ResourceProperty('Host', AmazonEC2ContainerServiceTaskDefinitionVolumesHost, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumes', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumesHost extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      SourcePath: new ResourceProperty('SourcePath', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumesHost', properties, propertiesObject)
  }
}

class AmazonElasticFileSystemFileSystemFileSystemTags extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'No', null),
      Value: new ResourceProperty('Value', String, 'No', null)
    }
    super('AmazonElasticFileSystemFileSystemFileSystemTags', properties, propertiesObject)
  }
}

class ElasticBeanstalkEnvironmentTierPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'No', null),
      Type: new ResourceProperty('Type', String, 'No', null),
      Version: new ResourceProperty('Version', String, 'No', null)
    }
    super('ElasticBeanstalkEnvironmentTierPropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkOptionSettingsPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Namespace: new ResourceProperty('Namespace', String, 'Yes', null),
      OptionName: new ResourceProperty('OptionName', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('ElasticBeanstalkOptionSettingsPropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceBundlePropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      S3Bucket: new ResourceProperty('S3Bucket', String, 'Yes', null),
      S3Key: new ResourceProperty('S3Key', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceBundlePropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceConfigurationPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ApplicationName: new ResourceProperty('ApplicationName', String, 'Yes', null),
      TemplateName: new ResourceProperty('TemplateName', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceConfigurationPropertyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingAccessLoggingPolicy extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EmitInterval: new ResourceProperty('EmitInterval', Number, 'No', null),
      Enabled: new ResourceProperty('Enabled', Boolean, 'Yes', null),
      S3BucketName: new ResourceProperty('S3BucketName', String, 'Yes', null),
      S3BucketPrefix: new ResourceProperty('S3BucketPrefix', String, 'No', null)
    }
    super('ElasticLoadBalancingAccessLoggingPolicy', properties, propertiesObject)
  }
}

class ElasticLoadBalancingAppCookieStickinessPolicyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CookieName: new ResourceProperty('CookieName', String, 'Yes', null),
      PolicyName: new ResourceProperty('PolicyName', String, 'Yes', null)
    }
    super('ElasticLoadBalancingAppCookieStickinessPolicyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionDrainingPolicy extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty('Enabled', Boolean, 'Yes', null),
      Timeout: new ResourceProperty('Timeout', Number, 'No', null)
    }
    super('ElasticLoadBalancingConnectionDrainingPolicy', properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionSettings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      IdleTimeout: new ResourceProperty('IdleTimeout', Number, 'Yes', null)
    }
    super('ElasticLoadBalancingConnectionSettings', properties, propertiesObject)
  }
}

class ElasticLoadBalancingHealthCheckType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HealthyThreshold: new ResourceProperty('HealthyThreshold', String, 'Yes', null),
      Interval: new ResourceProperty('Interval', String, 'Yes', null),
      Target: new ResourceProperty('Target', String, 'Yes', null),
      Timeout: new ResourceProperty('Timeout', String, 'Yes', null),
      UnhealthyThreshold: new ResourceProperty('UnhealthyThreshold', String, 'Yes', null)
    }
    super('ElasticLoadBalancingHealthCheckType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingLBCookieStickinessPolicyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CookieExpirationPeriod: new ResourceProperty('CookieExpirationPeriod', String, 'No', null),
      PolicyName: new ResourceProperty('PolicyName', undefined, 'undefined', null)
    }
    super('ElasticLoadBalancingLBCookieStickinessPolicyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingListenerPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      InstancePort: new ResourceProperty('InstancePort', String, 'Yes', null),
      InstanceProtocol: new ResourceProperty('InstanceProtocol', String, 'No', null),
      LoadBalancerPort: new ResourceProperty('LoadBalancerPort', String, 'Yes', null),
      PolicyNames: new ResourceArray('PolicyNames', String, 'No', null),
      Protocol: new ResourceProperty('Protocol', String, 'Yes', null),
      SSLCertificateId: new ResourceProperty('SSLCertificateId', String, 'No', null)
    }
    super('ElasticLoadBalancingListenerPropertyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingPolicyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Attributes: new ResourceArray('Attributes', Object, 'Yes', null),
      InstancePorts: new ResourceArray('InstancePorts', String, 'No', null),
      LoadBalancerPorts: new ResourceArray('LoadBalancerPorts', String, 'Conditional', null),
      PolicyName: new ResourceProperty('PolicyName', String, 'Yes', null),
      PolicyType: new ResourceProperty('PolicyType', String, 'Yes', null)
    }
    super('ElasticLoadBalancingPolicyType', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainEBSOptions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EBSEnabled: new ResourceProperty('EBSEnabled', Boolean, 'No', null),
      Iops: new ResourceProperty('Iops', Number, 'No', null),
      VolumeSize: new ResourceProperty('VolumeSize', Number, 'No', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainEBSOptions', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainElasticsearchClusterConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DedicatedMasterCount: new ResourceProperty('DedicatedMasterCount', Number, 'No', null),
      DedicatedMasterEnabled: new ResourceProperty('DedicatedMasterEnabled', Boolean, 'No', null),
      DedicatedMasterType: new ResourceProperty('DedicatedMasterType', String, 'No', null),
      InstanceCount: new ResourceProperty('InstanceCount', Number, 'No', null),
      InstanceType: new ResourceProperty('InstanceType', String, 'No', null),
      ZoneAwarenessEnabled: new ResourceProperty('ZoneAwarenessEnabled', Boolean, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainElasticsearchClusterConfig', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainSnapshotOptions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AutomatedSnapshotStartHour: new ResourceProperty('AutomatedSnapshotStartHour', Number, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainSnapshotOptions', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterApplication extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AdditionalInfo: new ResourceProperty('AdditionalInfo', Map, 'No', null),
      Args: new ResourceArray('Args', String, 'No', null),
      Name: new ResourceProperty('Name', String, 'No', null),
      Version: new ResourceProperty('Version', String, 'No', null)
    }
    super('AmazonElasticMapReduceClusterApplication', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      ScriptBootstrapAction: new ResourceProperty('ScriptBootstrapAction', AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Args: new ResourceArray('Args', String, 'No', null),
      Path: new ResourceProperty('Path', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Classification: new ResourceProperty('Classification', String, 'No', null),
      ConfigurationProperties: new ResourceProperty('ConfigurationProperties', Map, 'No', null),
      Configurations: new ResourceArray('Configurations', AmazonElasticMapReduceClusterConfiguration, 'No', null)
    }
    super('AmazonElasticMapReduceClusterConfiguration', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AdditionalMasterSecurityGroups: new ResourceArray('AdditionalMasterSecurityGroups', String, 'No', null),
      AdditionalSlaveSecurityGroups: new ResourceArray('AdditionalSlaveSecurityGroups', String, 'No', null),
      CoreInstanceGroup: new ResourceProperty('CoreInstanceGroup', AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Ec2KeyName: new ResourceProperty('Ec2KeyName', String, 'No', null),
      Ec2SubnetId: new ResourceProperty('Ec2SubnetId', String, 'No', null),
      EmrManagedMasterSecurityGroup: new ResourceProperty('EmrManagedMasterSecurityGroup', String, 'No', null),
      EmrManagedSlaveSecurityGroup: new ResourceProperty('EmrManagedSlaveSecurityGroup', String, 'No', null),
      HadoopVersion: new ResourceProperty('HadoopVersion', String, 'No', null),
      MasterInstanceGroup: new ResourceProperty('MasterInstanceGroup', AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Placement: new ResourceProperty('Placement', AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType, 'No', null),
      ServiceAccessSecurityGroup: new ResourceProperty('ServiceAccessSecurityGroup', String, 'No', null),
      TerminationProtected: new ResourceProperty('TerminationProtected', Boolean, 'No', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      BidPrice: new ResourceProperty('BidPrice', String, 'No', null),
      Configurations: new ResourceArray('Configurations', AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new ResourceProperty('EbsConfiguration', AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new ResourceProperty('InstanceCount', Number, 'Yes', null),
      InstanceType: new ResourceProperty('InstanceType', String, 'Yes', null),
      Market: new ResourceProperty('Market', String, 'No', null),
      Name: new ResourceProperty('Name', String, 'No', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceProperty('AvailabilityZone', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      EbsBlockDeviceConfigs: new ResourceArray('EbsBlockDeviceConfigs', AmazonElasticMapReduceEbsConfiguration, 'No', null),
      EbsOptimized: new ResourceProperty('EbsOptimized', Boolean, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfiguration', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      VolumeSpecification: new ResourceProperty('VolumeSpecification', AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, 'Yes', null),
      VolumesPerInstance: new ResourceProperty('VolumesPerInstance', Number, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Iops: new ResourceProperty('Iops', Number, 'No', null),
      SizeInGB: new ResourceProperty('SizeInGB', Number, 'Yes', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Args: new ResourceArray('Args', String, 'No', null),
      Jar: new ResourceProperty('Jar', String, 'Yes', null),
      MainClass: new ResourceProperty('MainClass', String, 'No', null),
      StepProperties: new ResourceArray('StepProperties', AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue, 'No', null)
    }
    super('AmazonElasticMapReduceStepHadoopJarStepConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'No', null),
      Value: new ResourceProperty('Value', String, 'No', null)
    }
    super('AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue', properties, propertiesObject)
  }
}

class AmazonGameLiftAliasRoutingStrategy extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FleetId: new ResourceProperty('FleetId', String, 'Conditional', null),
      Message: new ResourceProperty('Message', String, 'Conditional', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AmazonGameLiftAliasRoutingStrategy', properties, propertiesObject)
  }
}

class AmazonGameLiftBuildStorageLocation extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty('Bucket', String, 'Yes', null),
      Key: new ResourceProperty('Key', String, 'Yes', null),
      RoleArn: new ResourceProperty('RoleArn', String, 'Yes', null)
    }
    super('AmazonGameLiftBuildStorageLocation', properties, propertiesObject)
  }
}

class AmazonGameLiftFleetEC2InboundPermission extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FromPort: new ResourceProperty('FromPort', Number, 'Yes', null),
      IpRange: new ResourceProperty('IpRange', String, 'Yes', null),
      Protocol: new ResourceProperty('Protocol', String, 'Yes', null),
      ToPort: new ResourceProperty('ToPort', Number, 'Yes', null)
    }
    super('AmazonGameLiftFleetEC2InboundPermission', properties, propertiesObject)
  }
}

class IAMPolicies extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      PolicyDocument: new ResourceProperty('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceProperty('PolicyName', String, 'Yes', null)
    }
    super('IAMPolicies', properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Password: new ResourceProperty('Password', String, 'Yes', null),
      PasswordResetRequired: new ResourceProperty('PasswordResetRequired', Boolean, 'No', null)
    }
    super('IAMUserLoginProfile', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty('Enabled', Boolean, 'No', null),
      LogGroupName: new ResourceProperty('LogGroupName', String, 'Conditional', null),
      LogStreamName: new ResourceProperty('LogStreamName', String, 'Conditional', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      BufferingHints: new ResourceProperty('BufferingHints', AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceProperty('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      DomainARN: new ResourceProperty('DomainARN', String, 'Yes', null),
      IndexName: new ResourceProperty('IndexName', String, 'Yes', null),
      IndexRotationPeriod: new ResourceProperty('IndexRotationPeriod', String, 'Yes', null),
      RetryOptions: new ResourceProperty('RetryOptions', String, 'undefined', null),
      RoleARN: new ResourceProperty('RoleARN', String, 'Yes', null),
      S3BackupMode: new ResourceProperty('S3BackupMode', String, 'Yes', null),
      S3Configuration: new ResourceProperty('S3Configuration', String, 'undefined', null),
      TypeName: new ResourceProperty('TypeName', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceProperty('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceProperty('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DurationInSeconds: new ResourceProperty('DurationInSeconds', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CloudWatchLoggingOptions: new ResourceProperty('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      ClusterJDBCURL: new ResourceProperty('ClusterJDBCURL', String, 'Yes', null),
      CopyCommand: new ResourceProperty('CopyCommand', AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand, 'Yes', null),
      Password: new ResourceProperty('Password', String, 'Yes', null),
      RoleARN: new ResourceProperty('RoleARN', String, 'Yes', null),
      S3Configuration: new ResourceProperty('S3Configuration', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Yes', null),
      Username: new ResourceProperty('Username', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CopyOptions: new ResourceProperty('CopyOptions', String, 'No', null),
      DataTableColumns: new ResourceProperty('DataTableColumns', String, 'No', null),
      DataTableName: new ResourceProperty('DataTableName', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      BucketARN: new ResourceProperty('BucketARN', String, 'Yes', null),
      BufferingHints: new ResourceProperty('BufferingHints', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceProperty('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      CompressionFormat: new ResourceProperty('CompressionFormat', String, 'Yes', null),
      EncryptionConfiguration: new ResourceProperty('EncryptionConfiguration', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration, 'No', null),
      Prefix: new ResourceProperty('Prefix', String, 'Yes', null),
      RoleARN: new ResourceProperty('RoleARN', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceProperty('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceProperty('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AWSKMSKeyARN: new ResourceProperty('AWSKMSKeyARN', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      KMSEncryptionConfig: new ResourceProperty('KMSEncryptionConfig', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig, 'No', null),
      NoEncryptionConfig: new ResourceProperty('NoEncryptionConfig', String, 'No', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration', properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      S3Bucket: new ResourceProperty('S3Bucket', String, 'Conditional', null),
      S3Key: new ResourceProperty('S3Key', String, 'Conditional', null),
      S3ObjectVersion: new ResourceProperty('S3ObjectVersion', String, 'No', null),
      ZipFile: new ResourceProperty('ZipFile', String, 'Conditional', null),
      event: new ResourceProperty('event', undefined, 'undefined', null),
      context: new ResourceProperty('context', undefined, 'undefined', null),
      responseStatus: new ResourceProperty('responseStatus', undefined, 'undefined', null),
      responseData: new ResourceProperty('responseData', undefined, 'undefined', null),
      physicalResourceId: new ResourceProperty('physicalResourceId', undefined, 'undefined', null)
    }
    super('AWSLambdaFunctionCode', properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      SecurityGroupIds: new ResourceArray('SecurityGroupIds', String, 'Yes', null),
      SubnetIds: new ResourceArray('SubnetIds', String, 'Yes', null)
    }
    super('AWSLambdaFunctionVPCConfig', properties, propertiesObject)
  }
}

class NameType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
    }
    super('NameType', properties, propertiesObject)
  }
}

class AWSOpsWorksAutoScalingThresholdsType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CpuThreshold: new ResourceProperty('CpuThreshold', Number, 'No', null),
      IgnoreMetricsTime: new ResourceProperty('IgnoreMetricsTime', Number, 'No', null),
      InstanceCount: new ResourceProperty('InstanceCount', Number, 'No', null),
      LoadThreshold: new ResourceProperty('LoadThreshold', Number, 'No', null),
      MemoryThreshold: new ResourceProperty('MemoryThreshold', Number, 'No', null),
      ThresholdsWaitTime: new ResourceProperty('ThresholdsWaitTime', Number, 'No', null)
    }
    super('AWSOpsWorksAutoScalingThresholdsType', properties, propertiesObject)
  }
}

class AWSOpsWorksChefConfigurationType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      BerkshelfVersion: new ResourceProperty('BerkshelfVersion', String, 'No', null),
      ManageBerkshelf: new ResourceProperty('ManageBerkshelf', Boolean, 'No', null)
    }
    super('AWSOpsWorksChefConfigurationType', properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ShutdownEventConfiguration: new ResourceProperty('ShutdownEventConfiguration', AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfiguration', properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DelayUntilElbConnectionsDrained: new ResourceProperty('DelayUntilElbConnectionsDrained', Boolean, 'No', null),
      ExecutionTimeout: new ResourceProperty('ExecutionTimeout', Number, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration', properties, propertiesObject)
  }
}

class AWSOpsWorksLoadBasedAutoScalingType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DownScaling: new ResourceProperty('DownScaling', AWSOpsWorksAutoScalingThresholdsType, 'No', null),
      Enable: new ResourceProperty('Enable', Boolean, 'No', null),
      UpScaling: new ResourceProperty('UpScaling', AWSOpsWorksAutoScalingThresholdsType, 'No', null)
    }
    super('AWSOpsWorksLoadBasedAutoScalingType', properties, propertiesObject)
  }
}

class AWSOpsWorksRecipesType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Configure: new ResourceArray('Configure', String, 'No', null),
      Deploy: new ResourceArray('Deploy', String, 'No', null),
      Setup: new ResourceArray('Setup', String, 'No', null),
      Shutdown: new ResourceArray('Shutdown', String, 'No', null),
      Undeploy: new ResourceArray('Undeploy', String, 'No', null)
    }
    super('AWSOpsWorksRecipesType', properties, propertiesObject)
  }
}

class AWSOpsWorksSourceType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Password: new ResourceProperty('Password', String, 'No', null),
      Revision: new ResourceProperty('Revision', String, 'No', null),
      SshKey: new ResourceProperty('SshKey', String, 'No', null),
      Type: new ResourceProperty('Type', String, 'No', null),
      Url: new ResourceProperty('Url', String, 'No', null),
      Username: new ResourceProperty('Username', String, 'No', null)
    }
    super('AWSOpsWorksSourceType', properties, propertiesObject)
  }
}

class AWSOpsWorksAppEnvironment extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Secure: new ResourceProperty('Secure', Boolean, 'No', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AWSOpsWorksAppEnvironment', properties, propertiesObject)
  }
}

class AWSOpsWorksSslConfigurationType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Certificate: new ResourceProperty('Certificate', String, 'Yes', null),
      Chain: new ResourceProperty('Chain', String, 'No', null),
      PrivateKey: new ResourceProperty('PrivateKey', String, 'Yes', null)
    }
    super('AWSOpsWorksSslConfigurationType', properties, propertiesObject)
  }
}

class AWSOpsWorksStackConfigurationManagerType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'No', null),
      Version: new ResourceProperty('Version', String, 'No', null)
    }
    super('AWSOpsWorksStackConfigurationManagerType', properties, propertiesObject)
  }
}

class AWSOpsWorksTimeBasedAutoScalingType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Friday: new ResourceProperty('Friday', Map, 'No', null),
      Monday: new ResourceProperty('Monday', Map, 'No', null),
      Saturday: new ResourceProperty('Saturday', Map, 'No', null),
      Sunday: new ResourceProperty('Sunday', Map, 'No', null),
      Thursday: new ResourceProperty('Thursday', Map, 'No', null),
      Tuesday: new ResourceProperty('Tuesday', Map, 'No', null),
      Wednesday: new ResourceProperty('Wednesday', Map, 'No', null)
    }
    super('AWSOpsWorksTimeBasedAutoScalingType', properties, propertiesObject)
  }
}

class AWSOpsWorksVolumeConfigurationType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Iops: new ResourceProperty('Iops', Number, 'Conditional', null),
      MountPoint: new ResourceProperty('MountPoint', String, 'Yes', null),
      NumberOfDisks: new ResourceProperty('NumberOfDisks', Number, 'Yes', null),
      RaidLevel: new ResourceProperty('RaidLevel', Number, 'No', null),
      Size: new ResourceProperty('Size', Number, 'Yes', null),
      VolumeType: new ResourceProperty('VolumeType', String, 'No', null)
    }
    super('AWSOpsWorksVolumeConfigurationType', properties, propertiesObject)
  }
}

class AmazonRedshiftParameterType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ParameterName: new ResourceProperty('ParameterName', String, 'Yes', null),
      ParameterValue: new ResourceProperty('ParameterValue', String, 'Yes', null)
    }
    super('AmazonRedshiftParameterType', properties, propertiesObject)
  }
}

class AWSCloudFormationResourceTagsType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AWSCloudFormationResourceTagsType', properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DBSecurityGroupMemberships: new ResourceArray('DBSecurityGroupMemberships', String, 'No', null),
      OptionName: new ResourceProperty('OptionName', String, 'Yes', null),
      OptionSettings: new ResourceProperty('OptionSettings', AmazonRDSOptionGroupOptionConfigurationsOptionSettings, 'No', null),
      Port: new ResourceProperty('Port', Number, 'No', null),
      VpcSecurityGroupMemberships: new ResourceArray('VpcSecurityGroupMemberships', String, 'No', null)
    }
    super('AmazonRDSOptionGroupOptionConfigurations', properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurationsOptionSettings extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'No', null),
      Value: new ResourceProperty('Value', String, 'No', null)
    }
    super('AmazonRDSOptionGroupOptionConfigurationsOptionSettings', properties, propertiesObject)
  }
}

class AmazonRDSSecurityGroupRule extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CIDRIP: new ResourceProperty('CIDRIP', String, 'No', null),
      EC2SecurityGroupId: new ResourceProperty('EC2SecurityGroupId', String, 'No', null),
      EC2SecurityGroupName: new ResourceProperty('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceProperty('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super('AmazonRDSSecurityGroupRule', properties, propertiesObject)
  }
}

class Route53AliasTargetProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DNSName: new ResourceProperty('DNSName', String, 'Yes', null),
      EvaluateTargetHealth: new ResourceProperty('EvaluateTargetHealth', Boolean, 'No', null),
      HostedZoneId: new ResourceProperty('HostedZoneId', String, 'Yes', null)
    }
    super('Route53AliasTargetProperty', properties, propertiesObject)
  }
}

class AmazonRoute53RecordSetGeoLocationProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ContinentCode: new ResourceProperty('ContinentCode', String, 'Conditional', null),
      CountryCode: new ResourceProperty('CountryCode', String, 'Conditional', null),
      SubdivisionCode: new ResourceProperty('SubdivisionCode', String, 'No', null)
    }
    super('AmazonRoute53RecordSetGeoLocationProperty', properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckConfig extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FailureThreshold: new ResourceProperty('FailureThreshold', Number, 'No', null),
      FullyQualifiedDomainName: new ResourceProperty('FullyQualifiedDomainName', String, 'Conditional', null),
      IPAddress: new ResourceProperty('IPAddress', String, 'No', null),
      Port: new ResourceProperty('Port', Number, 'Conditional', null),
      RequestInterval: new ResourceProperty('RequestInterval', Number, 'No', null),
      ResourcePath: new ResourceProperty('ResourcePath', String, 'No', null),
      SearchString: new ResourceProperty('SearchString', String, 'No', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AmazonRoute53HealthCheckConfig', properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckTags extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HealthCheckTags', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneConfigProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Comment: new ResourceProperty('Comment', String, 'No', null)
    }
    super('AmazonRoute53HostedZoneConfigProperty', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneTags extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceProperty('Key', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneTags', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneVPCs extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      VPCId: new ResourceProperty('VPCId', String, 'Yes', null),
      VPCRegion: new ResourceProperty('VPCRegion', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneVPCs', properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      CorsRules: new ResourceProperty('CorsRules', AmazonS3CorsConfigurationRule, 'Yes', null)
    }
    super('AmazonS3CorsConfiguration', properties, propertiesObject)
  }
}

class AmazonS3CorsConfigurationRule extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      AllowedHeaders: new ResourceArray('AllowedHeaders', String, 'No', null),
      AllowedMethods: new ResourceArray('AllowedMethods', String, 'Yes', null),
      AllowedOrigins: new ResourceArray('AllowedOrigins', String, 'Yes', null),
      ExposedHeaders: new ResourceArray('ExposedHeaders', String, 'No', null),
      Id: new ResourceProperty('Id', String, 'No', null),
      MaxAge: new ResourceProperty('MaxAge', Number, 'No', null)
    }
    super('AmazonS3CorsConfigurationRule', properties, propertiesObject)
  }
}

class AmazonS3LifecycleConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceProperty('Rules', AmazonS3LifecycleRule, 'Yes', null)
    }
    super('AmazonS3LifecycleConfiguration', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ExpirationDate: new ResourceProperty('ExpirationDate', String, 'Conditional', null),
      ExpirationInDays: new ResourceProperty('ExpirationInDays', Number, 'Conditional', null),
      Id: new ResourceProperty('Id', String, 'No', null),
      NoncurrentVersionExpirationInDays: new ResourceProperty('NoncurrentVersionExpirationInDays', Number, 'Conditional', null),
      NoncurrentVersionTransition: new ResourceProperty('NoncurrentVersionTransition', AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      NoncurrentVersionTransitions: new ResourceArray('NoncurrentVersionTransitions', AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      Prefix: new ResourceProperty('Prefix', String, 'No', null),
      Status: new ResourceProperty('Status', String, 'Yes', null),
      Transition: new ResourceProperty('Transition', AmazonS3LifecycleRuleTransition, 'Conditional', null),
      Transitions: new ResourceArray('Transitions', AmazonS3LifecycleRuleTransition, 'Conditional', null)
    }
    super('AmazonS3LifecycleRule', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      StorageClass: new ResourceProperty('StorageClass', String, 'Yes', null),
      TransitionInDays: new ResourceProperty('TransitionInDays', Number, 'Yes', null)
    }
    super('AmazonS3LifecycleRuleNoncurrentVersionTransition', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      StorageClass: new ResourceProperty('StorageClass', String, 'Yes', null),
      TransitionDate: new ResourceProperty('TransitionDate', String, 'Conditional', null),
      TransitionInDays: new ResourceProperty('TransitionInDays', Number, 'Conditional', null)
    }
    super('AmazonS3LifecycleRuleTransition', properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DestinationBucketName: new ResourceProperty('DestinationBucketName', String, 'No', null),
      LogFilePrefix: new ResourceProperty('LogFilePrefix', String, 'No', null)
    }
    super('AmazonS3LoggingConfiguration', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      LambdaConfigurations: new ResourceProperty('LambdaConfigurations', AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, 'No', null),
      QueueConfigurations: new ResourceProperty('QueueConfigurations', AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, 'No', null),
      TopicConfigurations: new ResourceProperty('TopicConfigurations', AmazonS3NotificationConfigurationTopicConfigurations, 'No', null)
    }
    super('AmazonS3NotificationConfiguration', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      S3Key: new ResourceProperty('S3Key', AmazonS3NotificationConfigurationConfigFilterS3Key, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilter', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceArray('Rules', AmazonS3NotificationConfigurationConfigFilterS3KeyRules, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3Key', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceProperty('Name', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3KeyRules', properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceProperty('Event', String, 'Yes', null),
      Filter: new ResourceProperty('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Function: new ResourceProperty('Function', String, 'Yes', null)
    }
    super('AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations', properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceProperty('Event', String, 'Yes', null),
      Filter: new ResourceProperty('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Queue: new ResourceProperty('Queue', String, 'Yes', null)
    }
    super('AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceProperty('Event', String, 'Yes', null),
      Filter: new ResourceProperty('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Topic: new ResourceProperty('Topic', String, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationTopicConfigurations', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Role: new ResourceProperty('Role', String, 'Yes', null),
      Rules: new ResourceArray('Rules', AmazonS3ReplicationConfigurationRules, 'Yes', null)
    }
    super('AmazonS3ReplicationConfiguration', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Destination: new ResourceProperty('Destination', AmazonS3ReplicationConfigurationRulesDestination, 'Yes', null),
      Id: new ResourceProperty('Id', String, 'No', null),
      Prefix: new ResourceProperty('Prefix', String, 'Yes', null),
      Status: new ResourceProperty('Status', String, 'Yes', null)
    }
    super('AmazonS3ReplicationConfigurationRules', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRulesDestination extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty('Bucket', String, 'Yes', null),
      StorageClass: new ResourceProperty('StorageClass', String, 'No', null)
    }
    super('AmazonS3ReplicationConfigurationRulesDestination', properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Status: new ResourceProperty('Status', String, 'Yes', null)
    }
    super('AmazonS3VersioningConfiguration', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ErrorDocument: new ResourceProperty('ErrorDocument', String, 'No', null),
      IndexDocument: new ResourceProperty('IndexDocument', String, 'Yes', null),
      RedirectAllRequestsTo: new ResourceProperty('RedirectAllRequestsTo', AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, 'No', null),
      RoutingRules: new ResourceArray('RoutingRules', AmazonS3WebsiteConfigurationRoutingRulesProperty, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HostName: new ResourceProperty('HostName', String, 'Yes', null),
      Protocol: new ResourceProperty('Protocol', String, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      RedirectRule: new ResourceProperty('RedirectRule', AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, 'Yes', null),
      RoutingRuleCondition: new ResourceProperty('RoutingRuleCondition', AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HostName: new ResourceProperty('HostName', String, 'No', null),
      HttpRedirectCode: new ResourceProperty('HttpRedirectCode', String, 'No', null),
      Protocol: new ResourceProperty('Protocol', String, 'No', null),
      ReplaceKeyPrefixWith: new ResourceProperty('ReplaceKeyPrefixWith', String, 'No', null),
      ReplaceKeyWith: new ResourceProperty('ReplaceKeyWith', String, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new ResourceProperty('HttpErrorCodeReturnedEquals', String, 'Conditional', null),
      KeyPrefixEquals: new ResourceProperty('KeyPrefixEquals', String, 'Conditional', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty', properties, propertiesObject)
  }
}

class AmazonSNSSubscriptionPropertyType extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Endpoint: new ResourceProperty('Endpoint', String, 'Yes', null),
      Protocol: new ResourceProperty('Protocol', String, 'Yes', null)
    }
    super('AmazonSNSSubscriptionPropertyType', properties, propertiesObject)
  }
}

class AmazonSQSRedrivePolicy extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      deadLetterTargetArn: new ResourceProperty('deadLetterTargetArn', String, 'No', null),
      maxReceiveCount: new ResourceProperty('maxReceiveCount', Number, 'No', null)
    }
    super('AmazonSQSRedrivePolicy', properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuples extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty('FieldToMatch', AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      PositionalConstraint: new ResourceProperty('PositionalConstraint', String, 'Yes', null),
      TargetString: new ResourceProperty('TargetString', String, 'Conditional', null),
      TargetStringBase64: new ResourceProperty('TargetStringBase64', String, 'Conditional', null),
      TextTransformation: new ResourceProperty('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFByteMatchSetByteMatchTuples', properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuplesFieldToMatch extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceProperty('Data', String, 'Conditional', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFByteMatchSetByteMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFIPSetIPSetDescriptors extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceProperty('Type', String, 'Yes', null),
      Value: new ResourceProperty('Value', String, 'Yes', null)
    }
    super('AWSWAFIPSetIPSetDescriptors', properties, propertiesObject)
  }
}

class AWSWAFRulePredicates extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      DataId: new ResourceProperty('DataId', String, 'Yes', null),
      Negated: new ResourceProperty('Negated', Boolean, 'Yes', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFRulePredicates', properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraint extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      ComparisonOperator: new ResourceProperty('ComparisonOperator', String, 'Yes', null),
      FieldToMatch: new ResourceProperty('FieldToMatch', AWSWAFSizeConstraintSetSizeConstraintFieldToMatch, 'Yes', null),
      Size: new ResourceProperty('Size', Number, 'Yes', null),
      TextTransformation: new ResourceProperty('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFSizeConstraintSetSizeConstraint', properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraintFieldToMatch extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceProperty('Data', String, 'Conditional', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFSizeConstraintSetSizeConstraintFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty('FieldToMatch', AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceProperty('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples', properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceProperty('Data', String, 'Conditional', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTuple extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty('FieldToMatch', AWSWAFXssMatchSetXssMatchTupleFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceProperty('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTuple', properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTupleFieldToMatch extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceProperty('Data', String, 'Conditional', null),
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTupleFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFWebACLAction extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceProperty('Type', String, 'Yes', null)
    }
    super('AWSWAFWebACLAction', properties, propertiesObject)
  }
}

class AWSWAFWebACLRules extends SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Action: new ResourceProperty('Action', AWSWAFWebACLAction, 'Yes', null),
      Priority: new ResourceProperty('Priority', Number, 'Yes', null),
      RuleId: new ResourceProperty('RuleId', String, 'Yes', null)
    }
    super('AWSWAFWebACLRules', properties, propertiesObject)
  }
}

module.exports = {
  AmazonAPIGatewayApiKeyStageKey: AmazonAPIGatewayApiKeyStageKey,
  AmazonAPIGatewayDeploymentStageDescription: AmazonAPIGatewayDeploymentStageDescription,
  AmazonAPIGatewayDeploymentStageDescriptionMethodSetting: AmazonAPIGatewayDeploymentStageDescriptionMethodSetting,
  AmazonAPIGatewayMethodIntegration: AmazonAPIGatewayMethodIntegration,
  AmazonAPIGatewayMethodIntegrationIntegrationResponse: AmazonAPIGatewayMethodIntegrationIntegrationResponse,
  AmazonAPIGatewayMethodMethodResponse: AmazonAPIGatewayMethodMethodResponse,
  AmazonAPIGatewayRestApiS3Location: AmazonAPIGatewayRestApiS3Location,
  AmazonAPIGatewayStageMethodSetting: AmazonAPIGatewayStageMethodSetting,
  AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType: AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType,
  AWSCloudFormationAutoScalingEBSBlockDevicePropertyType: AWSCloudFormationAutoScalingEBSBlockDevicePropertyType,
  AutoScalingMetricsCollection: AutoScalingMetricsCollection,
  AutoScalingNotificationConfigurations: AutoScalingNotificationConfigurations,
  AutoScalingScalingPolicyStepAdjustments: AutoScalingScalingPolicyStepAdjustments,
  AutoScalingTagsPropertyType: AutoScalingTagsPropertyType,
  CloudFormationStackParametersPropertyType: CloudFormationStackParametersPropertyType,
  AWSCloudFormationInterfaceLabel: AWSCloudFormationInterfaceLabel,
  AWSCloudFormationInterfaceParameterGroup: AWSCloudFormationInterfaceParameterGroup,
  AWSCloudFormationInterfaceParameterLabel: AWSCloudFormationInterfaceParameterLabel,
  CloudFrontDistributionConfig: CloudFrontDistributionConfig,
  CloudFrontDistributionConfigCacheBehavior: CloudFrontDistributionConfigCacheBehavior,
  CloudFrontDistributionConfigCustomErrorResponse: CloudFrontDistributionConfigCustomErrorResponse,
  CloudFrontDefaultCacheBehavior: CloudFrontDefaultCacheBehavior,
  CloudFrontLogging: CloudFrontLogging,
  CloudFrontDistributionConfigOrigin: CloudFrontDistributionConfigOrigin,
  CloudFrontDistributionConfigOriginCustomOrigin: CloudFrontDistributionConfigOriginCustomOrigin,
  CloudFrontDistributionConfigOriginS3Origin: CloudFrontDistributionConfigOriginS3Origin,
  CloudFrontDistributionConfigurationRestrictions: CloudFrontDistributionConfigurationRestrictions,
  CloudFrontDistributionConfigRestrictionsGeoRestriction: CloudFrontDistributionConfigRestrictionsGeoRestriction,
  CloudFrontDistributionConfigurationViewerCertificate: CloudFrontDistributionConfigurationViewerCertificate,
  CloudFrontForwardedValues: CloudFrontForwardedValues,
  CloudFrontForwardedValuesCookies: CloudFrontForwardedValuesCookies,
  CloudWatchMetricDimensionPropertyType: CloudWatchMetricDimensionPropertyType,
  AmazonCloudWatchEventsRuleTarget: AmazonCloudWatchEventsRuleTarget,
  CloudWatchLogsMetricFilterMetricTransformationProperty: CloudWatchLogsMetricFilterMetricTransformationProperty,
  AWSCodeDeployDeploymentConfigMinimumHealthyHosts: AWSCodeDeployDeploymentConfigMinimumHealthyHosts,
  AWSCodeDeployDeploymentGroupDeployment: AWSCodeDeployDeploymentGroupDeployment,
  AWSCodeDeployDeploymentGroupDeploymentRevision: AWSCodeDeployDeploymentGroupDeploymentRevision,
  AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation: AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation,
  AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location: AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location,
  AWSCodeDeployDeploymentGroupEc2TagFilters: AWSCodeDeployDeploymentGroupEc2TagFilters,
  AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters: AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters,
  AWSCodePipelineCustomActionTypeArtifactDetails: AWSCodePipelineCustomActionTypeArtifactDetails,
  AWSCodePipelineCustomActionTypeConfigurationProperties: AWSCodePipelineCustomActionTypeConfigurationProperties,
  AWSCodePipelineCustomActionTypeSettings: AWSCodePipelineCustomActionTypeSettings,
  AWSCodePipelinePipelineArtifactStore: AWSCodePipelinePipelineArtifactStore,
  AWSCodePipelinePipelineArtifactStoreEncryptionKey: AWSCodePipelinePipelineArtifactStoreEncryptionKey,
  AWSCodePipelinePipelineDisableInboundStageTransitions: AWSCodePipelinePipelineDisableInboundStageTransitions,
  AWSCodePipelinePipelineStages: AWSCodePipelinePipelineStages,
  AWSCodePipelinePipelineStagesActions: AWSCodePipelinePipelineStagesActions,
  AWSCodePipelinePipelineStagesActionsActionTypeId: AWSCodePipelinePipelineStagesActionsActionTypeId,
  AWSCodePipelinePipelineStagesActionsInputArtifacts: AWSCodePipelinePipelineStagesActionsInputArtifacts,
  AWSCodePipelinePipelineStagesActionsOutputArtifacts: AWSCodePipelinePipelineStagesActionsOutputArtifacts,
  AWSCodePipelinePipelineStagesBlockers: AWSCodePipelinePipelineStagesBlockers,
  AWSConfigConfigRuleScope: AWSConfigConfigRuleScope,
  AWSConfigConfigRuleSource: AWSConfigConfigRuleSource,
  AWSConfigConfigRuleSourceSourceDetails: AWSConfigConfigRuleSourceSourceDetails,
  AWSConfigConfigurationRecorderRecordingGroup: AWSConfigConfigurationRecorderRecordingGroup,
  AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties: AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties,
  AWSDataPipelinePipelineParameterObjects: AWSDataPipelinePipelineParameterObjects,
  AWSDataPipelineParameterObjectsAttributes: AWSDataPipelineParameterObjectsAttributes,
  AWSDataPipelinePipelineParameterValues: AWSDataPipelinePipelineParameterValues,
  AWSDataPipelinePipelineObjects: AWSDataPipelinePipelineObjects,
  AWSDataPipelineDataPipelineObjectFields: AWSDataPipelineDataPipelineObjectFields,
  AWSDataPipelinePipelinePipelineTags: AWSDataPipelinePipelinePipelineTags,
  AWSDirectoryServiceMicrosoftADVpcSettings: AWSDirectoryServiceMicrosoftADVpcSettings,
  AWSDirectoryServiceSimpleADVpcSettings: AWSDirectoryServiceSimpleADVpcSettings,
  DynamoDBAttributeDefinitions: DynamoDBAttributeDefinitions,
  DynamoDBGlobalSecondaryIndexes: DynamoDBGlobalSecondaryIndexes,
  DynamoDBKeySchema: DynamoDBKeySchema,
  DynamoDBLocalSecondaryIndexes: DynamoDBLocalSecondaryIndexes,
  DynamoDBProjectionObject: DynamoDBProjectionObject,
  DynamoDBProvisionedThroughput: DynamoDBProvisionedThroughput,
  DynamoDBTableStreamSpecification: DynamoDBTableStreamSpecification,
  AmazonEC2BlockDeviceMappingProperty: AmazonEC2BlockDeviceMappingProperty,
  AmazonElasticBlockStoreBlockDeviceProperty: AmazonElasticBlockStoreBlockDeviceProperty,
  EC2ICMPPropertyType: EC2ICMPPropertyType,
  AmazonEC2InstanceSsmAssociations: AmazonEC2InstanceSsmAssociations,
  AmazonEC2InstanceSsmAssociationsAssociationParameters: AmazonEC2InstanceSsmAssociationsAssociationParameters,
  EC2MountPointPropertyType: EC2MountPointPropertyType,
  EC2NetworkInterfaceEmbeddedPropertyType: EC2NetworkInterfaceEmbeddedPropertyType,
  EC2NetworkInterfaceAssociation: EC2NetworkInterfaceAssociation,
  EC2NetworkInterfaceAttachment: EC2NetworkInterfaceAttachment,
  EC2NetworkInterfaceGroupItem: EC2NetworkInterfaceGroupItem,
  EC2NetworkInterfacePrivateIPSpecification: EC2NetworkInterfacePrivateIPSpecification,
  EC2PortRangePropertyType: EC2PortRangePropertyType,
  EC2SecurityGroupRulePropertyType: EC2SecurityGroupRulePropertyType,
  AmazonEC2SpotFleetSpotFleetRequestConfigData: AmazonEC2SpotFleetSpotFleetRequestConfigData,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile,
  AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring: AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement,
  AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups: AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups,
  AmazonEC2ContainerServiceServiceDeploymentConfiguration: AmazonEC2ContainerServiceServiceDeploymentConfiguration,
  AmazonEC2ContainerServiceServiceLoadBalancers: AmazonEC2ContainerServiceServiceLoadBalancers,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit,
  AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom: AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom,
  AmazonEC2ContainerServiceTaskDefinitionVolumes: AmazonEC2ContainerServiceTaskDefinitionVolumes,
  AmazonEC2ContainerServiceTaskDefinitionVolumesHost: AmazonEC2ContainerServiceTaskDefinitionVolumesHost,
  AmazonElasticFileSystemFileSystemFileSystemTags: AmazonElasticFileSystemFileSystemFileSystemTags,
  ElasticBeanstalkEnvironmentTierPropertyType: ElasticBeanstalkEnvironmentTierPropertyType,
  ElasticBeanstalkOptionSettingsPropertyType: ElasticBeanstalkOptionSettingsPropertyType,
  ElasticBeanstalkSourceBundlePropertyType: ElasticBeanstalkSourceBundlePropertyType,
  ElasticBeanstalkSourceConfigurationPropertyType: ElasticBeanstalkSourceConfigurationPropertyType,
  ElasticLoadBalancingAccessLoggingPolicy: ElasticLoadBalancingAccessLoggingPolicy,
  ElasticLoadBalancingAppCookieStickinessPolicyType: ElasticLoadBalancingAppCookieStickinessPolicyType,
  ElasticLoadBalancingConnectionDrainingPolicy: ElasticLoadBalancingConnectionDrainingPolicy,
  ElasticLoadBalancingConnectionSettings: ElasticLoadBalancingConnectionSettings,
  ElasticLoadBalancingHealthCheckType: ElasticLoadBalancingHealthCheckType,
  ElasticLoadBalancingLBCookieStickinessPolicyType: ElasticLoadBalancingLBCookieStickinessPolicyType,
  ElasticLoadBalancingListenerPropertyType: ElasticLoadBalancingListenerPropertyType,
  ElasticLoadBalancingPolicyType: ElasticLoadBalancingPolicyType,
  AmazonElasticsearchServiceDomainEBSOptions: AmazonElasticsearchServiceDomainEBSOptions,
  AmazonElasticsearchServiceDomainElasticsearchClusterConfig: AmazonElasticsearchServiceDomainElasticsearchClusterConfig,
  AmazonElasticsearchServiceDomainSnapshotOptions: AmazonElasticsearchServiceDomainSnapshotOptions,
  AmazonElasticMapReduceClusterApplication: AmazonElasticMapReduceClusterApplication,
  AmazonElasticMapReduceClusterBootstrapActionConfig: AmazonElasticMapReduceClusterBootstrapActionConfig,
  AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig: AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig,
  AmazonElasticMapReduceClusterConfiguration: AmazonElasticMapReduceClusterConfiguration,
  AmazonElasticMapReduceClusterJobFlowInstancesConfig: AmazonElasticMapReduceClusterJobFlowInstancesConfig,
  AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig: AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig,
  AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType: AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType,
  AmazonElasticMapReduceEbsConfiguration: AmazonElasticMapReduceEbsConfiguration,
  AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs: AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs,
  AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification: AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification,
  AmazonElasticMapReduceStepHadoopJarStepConfig: AmazonElasticMapReduceStepHadoopJarStepConfig,
  AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue: AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue,
  AmazonGameLiftAliasRoutingStrategy: AmazonGameLiftAliasRoutingStrategy,
  AmazonGameLiftBuildStorageLocation: AmazonGameLiftBuildStorageLocation,
  AmazonGameLiftFleetEC2InboundPermission: AmazonGameLiftFleetEC2InboundPermission,
  IAMPolicies: IAMPolicies,
  IAMUserLoginProfile: IAMUserLoginProfile,
  AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions: AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions,
  AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration: AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration,
  AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints: AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints,
  AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions: AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions,
  AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration: AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration,
  AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand: AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand,
  AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration: AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration,
  AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints: AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints,
  AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig: AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig,
  AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration: AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration,
  AWSLambdaFunctionCode: AWSLambdaFunctionCode,
  AWSLambdaFunctionVPCConfig: AWSLambdaFunctionVPCConfig,
  NameType: NameType,
  AWSOpsWorksAutoScalingThresholdsType: AWSOpsWorksAutoScalingThresholdsType,
  AWSOpsWorksChefConfigurationType: AWSOpsWorksChefConfigurationType,
  AWSOpsWorksLayerLifeCycleConfiguration: AWSOpsWorksLayerLifeCycleConfiguration,
  AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration: AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration,
  AWSOpsWorksLoadBasedAutoScalingType: AWSOpsWorksLoadBasedAutoScalingType,
  AWSOpsWorksRecipesType: AWSOpsWorksRecipesType,
  AWSOpsWorksSourceType: AWSOpsWorksSourceType,
  AWSOpsWorksAppEnvironment: AWSOpsWorksAppEnvironment,
  AWSOpsWorksSslConfigurationType: AWSOpsWorksSslConfigurationType,
  AWSOpsWorksStackConfigurationManagerType: AWSOpsWorksStackConfigurationManagerType,
  AWSOpsWorksTimeBasedAutoScalingType: AWSOpsWorksTimeBasedAutoScalingType,
  AWSOpsWorksVolumeConfigurationType: AWSOpsWorksVolumeConfigurationType,
  AmazonRedshiftParameterType: AmazonRedshiftParameterType,
  AWSCloudFormationResourceTagsType: AWSCloudFormationResourceTagsType,
  AmazonRDSOptionGroupOptionConfigurations: AmazonRDSOptionGroupOptionConfigurations,
  AmazonRDSOptionGroupOptionConfigurationsOptionSettings: AmazonRDSOptionGroupOptionConfigurationsOptionSettings,
  AmazonRDSSecurityGroupRule: AmazonRDSSecurityGroupRule,
  Route53AliasTargetProperty: Route53AliasTargetProperty,
  AmazonRoute53RecordSetGeoLocationProperty: AmazonRoute53RecordSetGeoLocationProperty,
  AmazonRoute53HealthCheckConfig: AmazonRoute53HealthCheckConfig,
  AmazonRoute53HealthCheckTags: AmazonRoute53HealthCheckTags,
  AmazonRoute53HostedZoneConfigProperty: AmazonRoute53HostedZoneConfigProperty,
  AmazonRoute53HostedZoneTags: AmazonRoute53HostedZoneTags,
  AmazonRoute53HostedZoneVPCs: AmazonRoute53HostedZoneVPCs,
  AmazonS3CorsConfiguration: AmazonS3CorsConfiguration,
  AmazonS3CorsConfigurationRule: AmazonS3CorsConfigurationRule,
  AmazonS3LifecycleConfiguration: AmazonS3LifecycleConfiguration,
  AmazonS3LifecycleRule: AmazonS3LifecycleRule,
  AmazonS3LifecycleRuleNoncurrentVersionTransition: AmazonS3LifecycleRuleNoncurrentVersionTransition,
  AmazonS3LifecycleRuleTransition: AmazonS3LifecycleRuleTransition,
  AmazonS3LoggingConfiguration: AmazonS3LoggingConfiguration,
  AmazonS3NotificationConfiguration: AmazonS3NotificationConfiguration,
  AmazonS3NotificationConfigurationConfigFilter: AmazonS3NotificationConfigurationConfigFilter,
  AmazonS3NotificationConfigurationConfigFilterS3Key: AmazonS3NotificationConfigurationConfigFilterS3Key,
  AmazonS3NotificationConfigurationConfigFilterS3KeyRules: AmazonS3NotificationConfigurationConfigFilterS3KeyRules,
  AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations: AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations,
  AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations: AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations,
  AmazonS3NotificationConfigurationTopicConfigurations: AmazonS3NotificationConfigurationTopicConfigurations,
  AmazonS3ReplicationConfiguration: AmazonS3ReplicationConfiguration,
  AmazonS3ReplicationConfigurationRules: AmazonS3ReplicationConfigurationRules,
  AmazonS3ReplicationConfigurationRulesDestination: AmazonS3ReplicationConfigurationRulesDestination,
  AmazonS3VersioningConfiguration: AmazonS3VersioningConfiguration,
  AmazonS3WebsiteConfigurationProperty: AmazonS3WebsiteConfigurationProperty,
  AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty: AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty,
  AmazonS3WebsiteConfigurationRoutingRulesProperty: AmazonS3WebsiteConfigurationRoutingRulesProperty,
  AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty: AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty,
  AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty: AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty,
  AmazonSNSSubscriptionPropertyType: AmazonSNSSubscriptionPropertyType,
  AmazonSQSRedrivePolicy: AmazonSQSRedrivePolicy,
  AWSWAFByteMatchSetByteMatchTuples: AWSWAFByteMatchSetByteMatchTuples,
  AWSWAFByteMatchSetByteMatchTuplesFieldToMatch: AWSWAFByteMatchSetByteMatchTuplesFieldToMatch,
  AWSWAFIPSetIPSetDescriptors: AWSWAFIPSetIPSetDescriptors,
  AWSWAFRulePredicates: AWSWAFRulePredicates,
  AWSWAFSizeConstraintSetSizeConstraint: AWSWAFSizeConstraintSetSizeConstraint,
  AWSWAFSizeConstraintSetSizeConstraintFieldToMatch: AWSWAFSizeConstraintSetSizeConstraintFieldToMatch,
  AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples: AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples,
  AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch: AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch,
  AWSWAFXssMatchSetXssMatchTuple: AWSWAFXssMatchSetXssMatchTuple,
  AWSWAFXssMatchSetXssMatchTupleFieldToMatch: AWSWAFXssMatchSetXssMatchTupleFieldToMatch,
  AWSWAFWebACLAction: AWSWAFWebACLAction,
  AWSWAFWebACLRules: AWSWAFWebACLRules
}
