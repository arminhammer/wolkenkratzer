'use strict'

const ResourceProperty = require('./resource').ResourceProperty
const ResourceAttributeArray = require('./resourceattribute').ResourceAttributeArray
const ResourceAttribute = require('./resourceattribute').ResourceAttribute

class AmazonAPIGatewayApiKeyStageKey extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      RestApiId: new ResourceAttribute('RestApiId', String, 'No', null),
      StageName: new ResourceAttribute('StageName', String, 'No', null)
    }
    super('AmazonAPIGatewayApiKeyStageKey', properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescription extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CacheClusterEnabled: new ResourceAttribute('CacheClusterEnabled', Boolean, 'No', null),
      CacheClusterSize: new ResourceAttribute('CacheClusterSize', String, 'No', null),
      CacheDataEncrypted: new ResourceAttribute('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceAttribute('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceAttribute('CachingEnabled', Boolean, 'No', null),
      ClientCertificateId: new ResourceAttribute('ClientCertificateId', String, 'No', null),
      DataTraceEnabled: new ResourceAttribute('DataTraceEnabled', Boolean, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      LoggingLevel: new ResourceAttribute('LoggingLevel', String, 'No', null),
      MethodSettings: new ResourceAttribute('MethodSettings', AmazonAPIGatewayDeploymentStageDescriptionMethodSetting, 'No', null),
      MetricsEnabled: new ResourceAttribute('MetricsEnabled', Boolean, 'No', null),
      StageName: new ResourceAttribute('StageName', String, 'No', null),
      ThrottlingBurstLimit: new ResourceAttribute('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceAttribute('ThrottlingRateLimit', Number, 'No', null),
      Variables: new ResourceAttribute('Variables', Map, 'No', null)
    }
    super('AmazonAPIGatewayDeploymentStageDescription', properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescriptionMethodSetting extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceAttribute('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceAttribute('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceAttribute('CachingEnabled', Boolean, 'No', null),
      DataTraceEnabled: new ResourceAttribute('DataTraceEnabled', Boolean, 'No', null),
      HttpMethod: new ResourceAttribute('HttpMethod', String, 'No', null),
      LoggingLevel: new ResourceAttribute('LoggingLevel', String, 'No', null),
      MetricsEnabled: new ResourceAttribute('MetricsEnabled', Boolean, 'No', null),
      ResourcePath: new ResourceAttribute('ResourcePath', String, 'No', null),
      ThrottlingBurstLimit: new ResourceAttribute('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceAttribute('ThrottlingRateLimit', Number, 'No', null)
    }
    super('AmazonAPIGatewayDeploymentStageDescriptionMethodSetting', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CacheKeyParameters: new ResourceAttributeArray('CacheKeyParameters', String, 'No', null),
      CacheNamespace: new ResourceAttribute('CacheNamespace', String, 'No', null),
      Credentials: new ResourceAttribute('Credentials', String, 'No', null),
      IntegrationHttpMethod: new ResourceAttribute('IntegrationHttpMethod', String, 'Conditional', null),
      IntegrationResponses: new ResourceAttributeArray('IntegrationResponses', AmazonAPIGatewayMethodIntegrationIntegrationResponse, 'No', null),
      RequestParameters: new ResourceAttribute('RequestParameters', Map, 'No', null),
      RequestTemplates: new ResourceAttribute('RequestTemplates', Map, 'No', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Uri: new ResourceAttribute('Uri', String, 'Conditional', null)
    }
    super('AmazonAPIGatewayMethodIntegration', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegrationIntegrationResponse extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ResponseParameters: new ResourceAttribute('ResponseParameters', Map, 'No', null),
      ResponseTemplates: new ResourceAttribute('ResponseTemplates', Map, 'No', null),
      SelectionPattern: new ResourceAttribute('SelectionPattern', String, 'No', null),
      StatusCode: new ResourceAttribute('StatusCode', String, 'No', null)
    }
    super('AmazonAPIGatewayMethodIntegrationIntegrationResponse', properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodMethodResponse extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ResponseModels: new ResourceAttribute('ResponseModels', Map, 'No', null),
      ResponseParameters: new ResourceAttribute('ResponseParameters', Map, 'No', null),
      StatusCode: new ResourceAttribute('StatusCode', String, 'Yes', null)
    }
    super('AmazonAPIGatewayMethodMethodResponse', properties, propertiesObject)
  }
}

class AmazonAPIGatewayRestApiS3Location extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'No', null),
      ETag: new ResourceAttribute('ETag', String, 'No', null),
      Key: new ResourceAttribute('Key', String, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('AmazonAPIGatewayRestApiS3Location', properties, propertiesObject)
  }
}

class AmazonAPIGatewayStageMethodSetting extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceAttribute('CacheDataEncrypted', Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceAttribute('CacheTtlInSeconds', Number, 'No', null),
      CachingEnabled: new ResourceAttribute('CachingEnabled', Boolean, 'No', null),
      DataTraceEnabled: new ResourceAttribute('DataTraceEnabled', Boolean, 'No', null),
      HttpMethod: new ResourceAttribute('HttpMethod', String, 'Yes', null),
      LoggingLevel: new ResourceAttribute('LoggingLevel', String, 'No', null),
      MetricsEnabled: new ResourceAttribute('MetricsEnabled', Boolean, 'No', null),
      ResourcePath: new ResourceAttribute('ResourcePath', String, 'Yes', null),
      ThrottlingBurstLimit: new ResourceAttribute('ThrottlingBurstLimit', Number, 'No', null),
      ThrottlingRateLimit: new ResourceAttribute('ThrottlingRateLimit', Number, 'No', null)
    }
    super('AmazonAPIGatewayStageMethodSetting', properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceAttribute('DeviceName', String, 'Yes', null),
      Ebs: new ResourceAttribute('Ebs', AWSCloudFormationAutoScalingEBSBlockDevicePropertyType, 'Conditional', null),
      NoDevice: new ResourceAttribute('NoDevice', Boolean, 'No', null),
      VirtualName: new ResourceAttribute('VirtualName', String, 'Conditional', null)
    }
    super('AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType', properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingEBSBlockDevicePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, 'No', null),
      SnapshotId: new ResourceAttribute('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceAttribute('VolumeSize', Number, 'Conditional', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super('AWSCloudFormationAutoScalingEBSBlockDevicePropertyType', properties, propertiesObject)
  }
}

class AutoScalingMetricsCollection extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Granularity: new ResourceAttribute('Granularity', String, 'Yes', null),
      Metrics: new ResourceAttributeArray('Metrics', String, 'No', null)
    }
    super('AutoScalingMetricsCollection', properties, propertiesObject)
  }
}

class AutoScalingNotificationConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      NotificationTypes: new ResourceAttributeArray('NotificationTypes', String, 'Yes', null),
      TopicARN: new ResourceAttribute('TopicARN', String, 'Yes', null)
    }
    super('AutoScalingNotificationConfigurations', properties, propertiesObject)
  }
}

class AutoScalingScalingPolicyStepAdjustments extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MetricIntervalLowerBound: new ResourceAttribute('MetricIntervalLowerBound', Number, 'No', null),
      MetricIntervalUpperBound: new ResourceAttribute('MetricIntervalUpperBound', Number, 'No', null),
      ScalingAdjustment: new ResourceAttribute('ScalingAdjustment', Number, 'Yes', null)
    }
    super('AutoScalingScalingPolicyStepAdjustments', properties, propertiesObject)
  }
}

class AutoScalingTagsPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null),
      PropagateAtLaunch: new ResourceAttribute('PropagateAtLaunch', Boolean, 'Yes', null)
    }
    super('AutoScalingTagsPropertyType', properties, propertiesObject)
  }
}

class CloudFormationStackParametersPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('CloudFormationStackParametersPropertyType', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceLabel extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      default: new ResourceAttribute('default', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceLabel', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterGroup extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Label: new ResourceAttribute('Label', AWSCloudFormationInterfaceLabel, 'No', null),
      Parameters: new ResourceAttributeArray('Parameters', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterGroup', properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterLabel extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ParameterLogicalID: new ResourceAttribute('ParameterLogicalID', AWSCloudFormationInterfaceLabel, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterLabel', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Aliases: new ResourceAttributeArray('Aliases', String, 'No', null),
      CacheBehaviors: new ResourceAttributeArray('CacheBehaviors', CloudFrontDistributionConfigCacheBehavior, 'No', null),
      Comment: new ResourceAttribute('Comment', String, 'No', null),
      CustomErrorResponses: new ResourceAttributeArray('CustomErrorResponses', CloudFrontDistributionConfigCustomErrorResponse, 'No', null),
      DefaultCacheBehavior: new ResourceAttribute('DefaultCacheBehavior', CloudFrontDefaultCacheBehavior, 'Yes', null),
      DefaultRootObject: new ResourceAttribute('DefaultRootObject', String, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'Yes', null),
      Logging: new ResourceAttribute('Logging', CloudFrontLogging, 'No', null),
      Origins: new ResourceAttributeArray('Origins', CloudFrontDistributionConfigOrigin, 'Yes', null),
      PriceClass: new ResourceAttribute('PriceClass', String, 'No', null),
      Restrictions: new ResourceAttribute('Restrictions', CloudFrontDistributionConfigurationRestrictions, 'No', null),
      ViewerCertificate: new ResourceAttribute('ViewerCertificate', CloudFrontDistributionConfigurationViewerCertificate, 'No', null),
      WebACLId: new ResourceAttribute('WebACLId', String, 'No', null)
    }
    super('CloudFrontDistributionConfig', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCacheBehavior extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceAttributeArray('AllowedMethods', String, 'No', null),
      CachedMethods: new ResourceAttributeArray('CachedMethods', String, 'No', null),
      Compress: new ResourceAttribute('Compress', Boolean, 'No', null),
      DefaultTTL: new ResourceAttribute('DefaultTTL', Number, 'No', null),
      ForwardedValues: new ResourceAttribute('ForwardedValues', CloudFrontForwardedValues, 'Yes', null),
      MaxTTL: new ResourceAttribute('MaxTTL', Number, 'No', null),
      MinTTL: new ResourceAttribute('MinTTL', Number, 'No', null),
      PathPattern: new ResourceAttribute('PathPattern', String, 'Yes', null),
      SmoothStreaming: new ResourceAttribute('SmoothStreaming', Boolean, 'No', null),
      TargetOriginId: new ResourceAttribute('TargetOriginId', String, 'Yes', null),
      TrustedSigners: new ResourceAttributeArray('TrustedSigners', String, 'No', null),
      ViewerProtocolPolicy: new ResourceAttribute('ViewerProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDistributionConfigCacheBehavior', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCustomErrorResponse extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ErrorCachingMinTTL: new ResourceAttribute('ErrorCachingMinTTL', Number, 'No', null),
      ErrorCode: new ResourceAttribute('ErrorCode', Number, 'Yes', null),
      ResponseCode: new ResourceAttribute('ResponseCode', Number, 'Conditional', null),
      ResponsePagePath: new ResourceAttribute('ResponsePagePath', String, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigCustomErrorResponse', properties, propertiesObject)
  }
}

class CloudFrontDefaultCacheBehavior extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceAttributeArray('AllowedMethods', String, 'No', null),
      CachedMethods: new ResourceAttributeArray('CachedMethods', String, 'No', null),
      Compress: new ResourceAttribute('Compress', Boolean, 'No', null),
      DefaultTTL: new ResourceAttribute('DefaultTTL', Number, 'No', null),
      ForwardedValues: new ResourceAttribute('ForwardedValues', CloudFrontForwardedValues, 'Yes', null),
      MaxTTL: new ResourceAttribute('MaxTTL', Number, 'No', null),
      MinTTL: new ResourceAttribute('MinTTL', String, 'No', null),
      SmoothStreaming: new ResourceAttribute('SmoothStreaming', Boolean, 'No', null),
      TargetOriginId: new ResourceAttribute('TargetOriginId', String, 'Yes', null),
      TrustedSigners: new ResourceAttributeArray('TrustedSigners', String, 'No', null),
      ViewerProtocolPolicy: new ResourceAttribute('ViewerProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDefaultCacheBehavior', properties, propertiesObject)
  }
}

class CloudFrontLogging extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      IncludeCookies: new ResourceAttribute('IncludeCookies', Boolean, 'No', null),
      Prefix: new ResourceAttribute('Prefix', String, 'No', null)
    }
    super('CloudFrontLogging', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOrigin extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CustomOriginConfig: new ResourceAttribute('CustomOriginConfig', CloudFrontDistributionConfigOriginCustomOrigin, 'Conditional', null),
      DomainName: new ResourceAttribute('DomainName', String, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      OriginPath: new ResourceAttribute('OriginPath', String, 'No', null),
      S3OriginConfig: new ResourceAttribute('S3OriginConfig', CloudFrontDistributionConfigOriginS3Origin, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigOrigin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginCustomOrigin extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HTTPPort: new ResourceAttribute('HTTPPort', String, 'No', null),
      HTTPSPort: new ResourceAttribute('HTTPSPort', String, 'No', null),
      OriginProtocolPolicy: new ResourceAttribute('OriginProtocolPolicy', String, 'Yes', null)
    }
    super('CloudFrontDistributionConfigOriginCustomOrigin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginS3Origin extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      OriginAccessIdentity: new ResourceAttribute('OriginAccessIdentity', String, 'No', null)
    }
    super('CloudFrontDistributionConfigOriginS3Origin', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationRestrictions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      GeoRestriction: new ResourceAttribute('GeoRestriction', CloudFrontDistributionConfigRestrictionsGeoRestriction, 'Yes', null)
    }
    super('CloudFrontDistributionConfigurationRestrictions', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigRestrictionsGeoRestriction extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Locations: new ResourceAttributeArray('Locations', String, 'Conditional', null),
      RestrictionType: new ResourceAttribute('RestrictionType', String, 'Yes', null),
      blacklist: new ResourceAttribute('blacklist', undefined, 'undefined', null),
      whitelist: new ResourceAttribute('whitelist', undefined, 'undefined', null),
      none: new ResourceAttribute('none', undefined, 'undefined', null)
    }
    super('CloudFrontDistributionConfigRestrictionsGeoRestriction', properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationViewerCertificate extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CloudFrontDefaultCertificate: new ResourceAttribute('CloudFrontDefaultCertificate', Boolean, 'Conditional', null),
      IamCertificateId: new ResourceAttribute('IamCertificateId', String, 'Conditional', null),
      MinimumProtocolVersion: new ResourceAttribute('MinimumProtocolVersion', String, 'Conditional', null),
      SslSupportMethod: new ResourceAttribute('SslSupportMethod', String, 'Conditional', null)
    }
    super('CloudFrontDistributionConfigurationViewerCertificate', properties, propertiesObject)
  }
}

class CloudFrontForwardedValues extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Cookies: new ResourceAttribute('Cookies', CloudFrontForwardedValuesCookies, 'No', null),
      Headers: new ResourceAttributeArray('Headers', String, 'No', null),
      QueryString: new ResourceAttribute('QueryString', Boolean, 'Yes', null)
    }
    super('CloudFrontForwardedValues', properties, propertiesObject)
  }
}

class CloudFrontForwardedValuesCookies extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Forward: new ResourceAttribute('Forward', String, 'Yes', null),
      WhitelistedNames: new ResourceAttributeArray('WhitelistedNames', String, 'Conditional', null)
    }
    super('CloudFrontForwardedValuesCookies', properties, propertiesObject)
  }
}

class CloudWatchMetricDimensionPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('CloudWatchMetricDimensionPropertyType', properties, propertiesObject)
  }
}

class AmazonCloudWatchEventsRuleTarget extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Arn: new ResourceAttribute('Arn', String, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      Input: new ResourceAttribute('Input', String, 'Conditional', null),
      InputPath: new ResourceAttribute('InputPath', String, 'Conditional', null)
    }
    super('AmazonCloudWatchEventsRuleTarget', properties, propertiesObject)
  }
}

class CloudWatchLogsMetricFilterMetricTransformationProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      MetricNamespace: new ResourceAttribute('MetricNamespace', String, 'Yes', null),
      MetricValue: new ResourceAttribute('MetricValue', String, 'Yes', null)
    }
    super('CloudWatchLogsMetricFilterMetricTransformationProperty', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentConfigMinimumHealthyHosts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'No', null),
      Value: new ResourceAttribute('Value', Number, 'No', null)
    }
    super('AWSCodeDeployDeploymentConfigMinimumHealthyHosts', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeployment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      IgnoreApplicationStopFailures: new ResourceAttribute('IgnoreApplicationStopFailures', Boolean, 'No', null),
      Revision: new ResourceAttribute('Revision', AWSCodeDeployDeploymentGroupDeploymentRevision, 'Yes', null)
    }
    super('AWSCodeDeployDeploymentGroupDeployment', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevision extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      GitHubLocation: new ResourceAttribute('GitHubLocation', AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation, 'No', null),
      RevisionType: new ResourceAttribute('RevisionType', String, 'No', null),
      S3Location: new ResourceAttribute('S3Location', AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevision', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CommitId: new ResourceAttribute('CommitId', String, 'Yes', null),
      Repository: new ResourceAttribute('Repository', String, 'Yes', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      BundleType: new ResourceAttribute('BundleType', String, 'Yes', null),
      ETag: new ResourceAttribute('ETag', String, 'No', null),
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupEc2TagFilters extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupEc2TagFilters', properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeArtifactDetails extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MaximumCount: new ResourceAttribute('MaximumCount', Number, 'Yes', null),
      MinimumCount: new ResourceAttribute('MinimumCount', Number, 'Yes', null)
    }
    super('AWSCodePipelineCustomActionTypeArtifactDetails', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeConfigurationProperties extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Key: new ResourceAttribute('Key', Boolean, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Queryable: new ResourceAttribute('Queryable', Boolean, 'No', null),
      Required: new ResourceAttribute('Required', Boolean, 'Yes', null),
      Secret: new ResourceAttribute('Secret', Boolean, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'No', null)
    }
    super('AWSCodePipelineCustomActionTypeConfigurationProperties', properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EntityUrlTemplate: new ResourceAttribute('EntityUrlTemplate', String, 'No', null),
      ExecutionUrlTemplate: new ResourceAttribute('ExecutionUrlTemplate', String, 'No', null),
      RevisionUrlTemplate: new ResourceAttribute('RevisionUrlTemplate', String, 'No', null),
      ThirdPartyConfigurationUrl: new ResourceAttribute('ThirdPartyConfigurationUrl', String, 'No', null)
    }
    super('AWSCodePipelineCustomActionTypeSettings', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStore extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EncryptionKey: new ResourceAttribute('EncryptionKey', AWSCodePipelinePipelineArtifactStoreEncryptionKey, 'No', null),
      Location: new ResourceAttribute('Location', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineArtifactStore', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStoreEncryptionKey extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineArtifactStoreEncryptionKey', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineDisableInboundStageTransitions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Reason: new ResourceAttribute('Reason', String, 'Yes', null),
      StageName: new ResourceAttribute('StageName', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineDisableInboundStageTransitions', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStages extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Actions: new ResourceAttributeArray('Actions', AWSCodePipelinePipelineStagesActions, 'Yes', null),
      Blockers: new ResourceAttributeArray('Blockers', AWSCodePipelinePipelineStagesBlockers, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStages', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ActionTypeId: new ResourceAttribute('ActionTypeId', AWSCodePipelinePipelineStagesActionsActionTypeId, 'Yes', null),
      Configuration: new ResourceAttribute('Configuration', Object, 'No', null),
      InputArtifacts: new ResourceAttributeArray('InputArtifacts', AWSCodePipelinePipelineStagesActionsInputArtifacts, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      OutputArtifacts: new ResourceAttributeArray('OutputArtifacts', AWSCodePipelinePipelineStagesActionsOutputArtifacts, 'No', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'No', null),
      RunOrder: new ResourceAttribute('RunOrder', Number, 'No', null)
    }
    super('AWSCodePipelinePipelineStagesActions', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsActionTypeId extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Category: new ResourceAttribute('Category', String, 'Yes', null),
      Owner: new ResourceAttribute('Owner', String, 'Yes', null),
      Provider: new ResourceAttribute('Provider', String, 'Yes', null),
      Version: new ResourceAttribute('Version', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsActionTypeId', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsInputArtifacts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsInputArtifacts', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsOutputArtifacts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsOutputArtifacts', properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesBlockers extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesBlockers', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleScope extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ComplianceResourceId: new ResourceAttribute('ComplianceResourceId', String, 'No', null),
      ComplianceResourceTypes: new ResourceAttributeArray('ComplianceResourceTypes', String, 'Conditional', null),
      TagKey: new ResourceAttribute('TagKey', String, 'Conditional', null),
      TagValue: new ResourceAttribute('TagValue', String, 'Conditional', null)
    }
    super('AWSConfigConfigRuleScope', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSource extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Owner: new ResourceAttribute('Owner', String, 'Yes', null),
      SourceDetails: new ResourceAttributeArray('SourceDetails', AWSConfigConfigRuleSourceSourceDetails, 'No', null),
      SourceIdentifier: new ResourceAttribute('SourceIdentifier', String, 'Yes', null)
    }
    super('AWSConfigConfigRuleSource', properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSourceSourceDetails extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EventSource: new ResourceAttribute('EventSource', String, 'Yes', null),
      MessageType: new ResourceAttribute('MessageType', String, 'Yes', null)
    }
    super('AWSConfigConfigRuleSourceSourceDetails', properties, propertiesObject)
  }
}

class AWSConfigConfigurationRecorderRecordingGroup extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AllSupported: new ResourceAttribute('AllSupported', Boolean, 'No', null),
      IncludeGlobalResourceTypes: new ResourceAttribute('IncludeGlobalResourceTypes', Boolean, 'No', null),
      ResourceTypes: new ResourceAttributeArray('ResourceTypes', String, 'No', null)
    }
    super('AWSConfigConfigurationRecorderRecordingGroup', properties, propertiesObject)
  }
}

class AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeliveryFrequency: new ResourceAttribute('DeliveryFrequency', String, 'No', null)
    }
    super('AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterObjects extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Attributes: new ResourceAttribute('Attributes', AWSDataPipelineParameterObjectsAttributes, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterObjects', properties, propertiesObject)
  }
}

class AWSDataPipelineParameterObjectsAttributes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      StringValue: new ResourceAttribute('StringValue', String, 'Conditional', null)
    }
    super('AWSDataPipelineParameterObjectsAttributes', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterValues extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      StringValue: new ResourceAttribute('StringValue', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterValues', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineObjects extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Fields: new ResourceAttribute('Fields', AWSDataPipelineDataPipelineObjectFields, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineObjects', properties, propertiesObject)
  }
}

class AWSDataPipelineDataPipelineObjectFields extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      RefValue: new ResourceAttribute('RefValue', String, 'Conditional', null),
      StringValue: new ResourceAttribute('StringValue', String, 'Conditional', null)
    }
    super('AWSDataPipelineDataPipelineObjectFields', properties, propertiesObject)
  }
}

class AWSDataPipelinePipelinePipelineTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelinePipelineTags', properties, propertiesObject)
  }
}

class AWSDirectoryServiceMicrosoftADVpcSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceMicrosoftADVpcSettings', properties, propertiesObject)
  }
}

class AWSDirectoryServiceSimpleADVpcSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceSimpleADVpcSettings', properties, propertiesObject)
  }
}

class DynamoDBAttributeDefinitions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceAttribute('AttributeName', String, 'Yes', null),
      AttributeType: new ResourceAttribute('AttributeType', String, 'Yes', null)
    }
    super('DynamoDBAttributeDefinitions', properties, propertiesObject)
  }
}

class DynamoDBGlobalSecondaryIndexes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IndexName: new ResourceAttribute('IndexName', String, 'Yes', null),
      KeySchema: new ResourceAttribute('KeySchema', DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceAttribute('Projection', DynamoDBProjectionObject, 'Yes', null),
      ProvisionedThroughput: new ResourceAttribute('ProvisionedThroughput', DynamoDBProvisionedThroughput, 'Yes', null)
    }
    super('DynamoDBGlobalSecondaryIndexes', properties, propertiesObject)
  }
}

class DynamoDBKeySchema extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceAttribute('AttributeName', String, 'Yes', null),
      KeyType: new ResourceAttribute('KeyType', String, 'Yes', null)
    }
    super('DynamoDBKeySchema', properties, propertiesObject)
  }
}

class DynamoDBLocalSecondaryIndexes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IndexName: new ResourceAttribute('IndexName', String, 'Yes', null),
      KeySchema: new ResourceAttribute('KeySchema', DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceAttribute('Projection', DynamoDBProjectionObject, 'Yes', null)
    }
    super('DynamoDBLocalSecondaryIndexes', properties, propertiesObject)
  }
}

class DynamoDBProjectionObject extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      NonKeyAttributes: new ResourceAttributeArray('NonKeyAttributes', String, 'No', null),
      ProjectionType: new ResourceAttribute('ProjectionType', String, 'No', null),
      KEYS_ONLY: new ResourceAttribute('KEYS_ONLY', undefined, 'undefined', null),
      INCLUDE: new ResourceAttribute('INCLUDE', undefined, 'undefined', null),
      ALL: new ResourceAttribute('ALL', undefined, 'undefined', null)
    }
    super('DynamoDBProjectionObject', properties, propertiesObject)
  }
}

class DynamoDBProvisionedThroughput extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ReadCapacityUnits: new ResourceAttribute('ReadCapacityUnits', Number, 'Yes', null),
      WriteCapacityUnits: new ResourceAttribute('WriteCapacityUnits', Number, 'Yes', null)
    }
    super('DynamoDBProvisionedThroughput', properties, propertiesObject)
  }
}

class DynamoDBTableStreamSpecification extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      StreamViewType: new ResourceAttribute('StreamViewType', String, 'Yes', null)
    }
    super('DynamoDBTableStreamSpecification', properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceAttribute('DeviceName', String, 'Yes', null),
      Ebs: new ResourceAttribute('Ebs', AmazonElasticBlockStoreBlockDeviceProperty, 'Conditional', null),
      NoDevice: new ResourceAttribute('NoDevice', Map, 'No', null),
      VirtualName: new ResourceAttribute('VirtualName', String, 'Conditional', null)
    }
    super('AmazonEC2BlockDeviceMappingProperty', properties, propertiesObject)
  }
}

class AmazonElasticBlockStoreBlockDeviceProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, 'Conditional', null),
      SnapshotId: new ResourceAttribute('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceAttribute('VolumeSize', String, 'Conditional', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super('AmazonElasticBlockStoreBlockDeviceProperty', properties, propertiesObject)
  }
}

class EC2ICMPPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2ICMPPropertyType', properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AssociationParameters: new ResourceAttributeArray('AssociationParameters', AmazonEC2InstanceSsmAssociationsAssociationParameters, 'No', null),
      DocumentName: new ResourceAttribute('DocumentName', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociations', properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttributeArray('Value', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociationsAssociationParameters', properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Device: new ResourceAttribute('Device', String, 'Yes', null),
      VolumeId: new ResourceAttribute('VolumeId', String, 'Yes', null)
    }
    super('EC2MountPointPropertyType', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceAttribute('AssociatePublicIpAddress', Boolean, 'No', null),
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      DeviceIndex: new ResourceAttribute('DeviceIndex', String, 'Yes', null),
      GroupSet: new ResourceAttributeArray('GroupSet', String, 'No', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'Conditional', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null),
      PrivateIpAddresses: new ResourceAttributeArray('PrivateIpAddresses', EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceAttribute('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Conditional', null)
    }
    super('EC2NetworkInterfaceEmbeddedPropertyType', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAssociation extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttachmentID: new ResourceAttribute('AttachmentID', String, 'Yes', null),
      InstanceID: new ResourceAttribute('InstanceID', String, 'Yes', null),
      PublicIp: new ResourceAttribute('PublicIp', String, 'Yes', null),
      IpOwnerId: new ResourceAttribute('IpOwnerId', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceAssociation', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAttachment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttachmentID: new ResourceAttribute('AttachmentID', String, 'Yes', null),
      InstanceID: new ResourceAttribute('InstanceID', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceAttachment', properties, propertiesObject)
  }
}

class EC2NetworkInterfaceGroupItem extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceGroupItem', properties, propertiesObject)
  }
}

class EC2NetworkInterfacePrivateIPSpecification extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'Yes', null),
      Primary: new ResourceAttribute('Primary', Boolean, 'Yes', null)
    }
    super('EC2NetworkInterfacePrivateIPSpecification', properties, propertiesObject)
  }
}

class EC2PortRangePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2PortRangePropertyType', properties, propertiesObject)
  }
}

class EC2SecurityGroupRulePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CidrIp: new ResourceAttribute('CidrIp', String, 'Conditional', null),
      DestinationSecurityGroupId: new ResourceAttribute('DestinationSecurityGroupId', String, 'Conditional', null),
      FromPort: new ResourceAttribute('FromPort', Number, 'No', null),
      IpProtocol: new ResourceAttribute('IpProtocol', String, 'Yes', null),
      SourceSecurityGroupId: new ResourceAttribute('SourceSecurityGroupId', String, 'Conditional', null),
      SourceSecurityGroupName: new ResourceAttribute('SourceSecurityGroupName', String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new ResourceAttribute('SourceSecurityGroupOwnerId', String, 'Conditional', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'No', null)
    }
    super('EC2SecurityGroupRulePropertyType', properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigData extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AllocationStrategy: new ResourceAttribute('AllocationStrategy', String, 'No', null),
      ExcessCapacityTerminationPolicy: new ResourceAttribute('ExcessCapacityTerminationPolicy', String, 'No', null),
      IamFleetRole: new ResourceAttribute('IamFleetRole', String, 'Yes', null),
      LaunchSpecifications: new ResourceAttributeArray('LaunchSpecifications', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications, 'Yes', null),
      SpotPrice: new ResourceAttribute('SpotPrice', String, 'Yes', null),
      TargetCapacity: new ResourceAttribute('TargetCapacity', Number, 'Yes', null),
      TerminateInstancesWithExpiration: new ResourceAttribute('TerminateInstancesWithExpiration', Boolean, 'No', null),
      ValidFrom: new ResourceAttribute('ValidFrom', String, 'No', null),
      ValidUntil: new ResourceAttribute('ValidUntil', String, 'No', null)
    }
    super('AmazonEC2SpotFleetSpotFleetRequestConfigData', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BlockDeviceMappings: new ResourceAttributeArray('BlockDeviceMappings', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'No', null),
      IamInstanceProfile: new ResourceAttribute('IamInstanceProfile', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile, 'No', null),
      ImageId: new ResourceAttribute('ImageId', String, 'Yes', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null),
      KernelId: new ResourceAttribute('KernelId', String, 'No', null),
      KeyName: new ResourceAttribute('KeyName', String, 'No', null),
      Monitoring: new ResourceAttribute('Monitoring', AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring, 'No', null),
      NetworkInterfaces: new ResourceAttributeArray('NetworkInterfaces', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces, 'No', null),
      Placement: new ResourceAttribute('Placement', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement, 'No', null),
      RamdiskId: new ResourceAttribute('RamdiskId', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'No', null),
      UserData: new ResourceAttribute('UserData', String, 'No', null),
      WeightedCapacity: new ResourceAttribute('WeightedCapacity', Number, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeviceName: new ResourceAttribute('DeviceName', String, 'Yes', null),
      Ebs: new ResourceAttribute('Ebs', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs, 'Conditional', null),
      NoDevice: new ResourceAttribute('NoDevice', Boolean, 'No', null),
      VirtualName: new ResourceAttribute('VirtualName', String, 'Conditional', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, 'No', null),
      SnapshotId: new ResourceAttribute('SnapshotId', String, 'Conditional', null),
      VolumeSize: new ResourceAttribute('VolumeSize', Number, 'Conditional', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Arn: new ResourceAttribute('Arn', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile', properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null)
    }
    super('AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceAttribute('AssociatePublicIpAddress', Boolean, 'No', null),
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      DeviceIndex: new ResourceAttribute('DeviceIndex', Number, 'Yes', null),
      Groups: new ResourceAttributeArray('Groups', String, 'No', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'No', null),
      PrivateIpAddresses: new ResourceAttributeArray('PrivateIpAddresses', AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceAttribute('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Conditional', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Primary: new ResourceAttribute('Primary', Boolean, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'Yes', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      GroupName: new ResourceAttribute('GroupName', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement', properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      GroupId: new ResourceAttribute('GroupId', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceDeploymentConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MaximumPercent: new ResourceAttribute('MaximumPercent', Number, 'No', null),
      MinimumHealthyPercent: new ResourceAttribute('MinimumHealthyPercent', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceServiceDeploymentConfiguration', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceLoadBalancers extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ContainerName: new ResourceAttribute('ContainerName', String, 'No', null),
      ContainerPort: new ResourceAttribute('ContainerPort', Number, 'Yes', null),
      LoadBalancerName: new ResourceAttribute('LoadBalancerName', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceServiceLoadBalancers', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Command: new ResourceAttributeArray('Command', String, 'No', null),
      Cpu: new ResourceAttribute('Cpu', Number, 'No', null),
      DisableNetworking: new ResourceAttribute('DisableNetworking', Boolean, 'No', null),
      DnsSearchDomains: new ResourceAttributeArray('DnsSearchDomains', String, 'No', null),
      DnsServers: new ResourceAttributeArray('DnsServers', String, 'No', null),
      DockerLabels: new ResourceAttribute('DockerLabels', Map, 'No', null),
      DockerSecurityOptions: new ResourceAttributeArray('DockerSecurityOptions', String, 'No', null),
      EntryPoint: new ResourceAttributeArray('EntryPoint', String, 'No', null),
      Environment: new ResourceAttributeArray('Environment', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment, 'No', null),
      Essential: new ResourceAttribute('Essential', Boolean, 'No', null),
      ExtraHosts: new ResourceAttributeArray('ExtraHosts', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry, 'No', null),
      Hostname: new ResourceAttribute('Hostname', String, 'No', null),
      Image: new ResourceAttribute('Image', String, 'Yes', null),
      Links: new ResourceAttributeArray('Links', String, 'No', null),
      LogConfiguration: new ResourceAttribute('LogConfiguration', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration, 'No', null),
      Memory: new ResourceAttribute('Memory', Number, 'Yes', null),
      MountPoints: new ResourceAttributeArray('MountPoints', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      PortMappings: new ResourceAttributeArray('PortMappings', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings, 'No', null),
      Privileged: new ResourceAttribute('Privileged', Boolean, 'No', null),
      ReadonlyRootFilesystem: new ResourceAttribute('ReadonlyRootFilesystem', Boolean, 'No', null),
      Ulimits: new ResourceAttributeArray('Ulimits', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit, 'No', null),
      User: new ResourceAttribute('User', String, 'No', null),
      VolumesFrom: new ResourceAttributeArray('VolumesFrom', AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom, 'No', null),
      WorkingDirectory: new ResourceAttribute('WorkingDirectory', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Hostname: new ResourceAttribute('Hostname', String, 'Yes', null),
      IpAddress: new ResourceAttribute('IpAddress', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      LogDriver: new ResourceAttribute('LogDriver', String, 'Yes', null),
      Options: new ResourceAttribute('Options', Map, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ContainerPath: new ResourceAttribute('ContainerPath', String, 'Yes', null),
      SourceVolume: new ResourceAttribute('SourceVolume', String, 'Yes', null),
      ReadOnly: new ResourceAttribute('ReadOnly', Boolean, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ContainerPort: new ResourceAttribute('ContainerPort', Number, 'Yes', null),
      HostPort: new ResourceAttribute('HostPort', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HardLimit: new ResourceAttribute('HardLimit', Number, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      SoftLimit: new ResourceAttribute('SoftLimit', Number, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SourceContainer: new ResourceAttribute('SourceContainer', String, 'Yes', null),
      ReadOnly: new ResourceAttribute('ReadOnly', Boolean, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Host: new ResourceAttribute('Host', AmazonEC2ContainerServiceTaskDefinitionVolumesHost, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumes', properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumesHost extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SourcePath: new ResourceAttribute('SourcePath', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumesHost', properties, propertiesObject)
  }
}

class AmazonElasticFileSystemFileSystemFileSystemTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonElasticFileSystemFileSystemFileSystemTags', properties, propertiesObject)
  }
}

class ElasticBeanstalkEnvironmentTierPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('ElasticBeanstalkEnvironmentTierPropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkOptionSettingsPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Namespace: new ResourceAttribute('Namespace', String, 'Yes', null),
      OptionName: new ResourceAttribute('OptionName', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('ElasticBeanstalkOptionSettingsPropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceBundlePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      S3Bucket: new ResourceAttribute('S3Bucket', String, 'Yes', null),
      S3Key: new ResourceAttribute('S3Key', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceBundlePropertyType', properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceConfigurationPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      TemplateName: new ResourceAttribute('TemplateName', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceConfigurationPropertyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingAccessLoggingPolicy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EmitInterval: new ResourceAttribute('EmitInterval', Number, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'Yes', null),
      S3BucketName: new ResourceAttribute('S3BucketName', String, 'Yes', null),
      S3BucketPrefix: new ResourceAttribute('S3BucketPrefix', String, 'No', null)
    }
    super('ElasticLoadBalancingAccessLoggingPolicy', properties, propertiesObject)
  }
}

class ElasticLoadBalancingAppCookieStickinessPolicyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CookieName: new ResourceAttribute('CookieName', String, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null)
    }
    super('ElasticLoadBalancingAppCookieStickinessPolicyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionDrainingPolicy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', Number, 'No', null)
    }
    super('ElasticLoadBalancingConnectionDrainingPolicy', properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IdleTimeout: new ResourceAttribute('IdleTimeout', Number, 'Yes', null)
    }
    super('ElasticLoadBalancingConnectionSettings', properties, propertiesObject)
  }
}

class ElasticLoadBalancingHealthCheckType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HealthyThreshold: new ResourceAttribute('HealthyThreshold', String, 'Yes', null),
      Interval: new ResourceAttribute('Interval', String, 'Yes', null),
      Target: new ResourceAttribute('Target', String, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', String, 'Yes', null),
      UnhealthyThreshold: new ResourceAttribute('UnhealthyThreshold', String, 'Yes', null)
    }
    super('ElasticLoadBalancingHealthCheckType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingLBCookieStickinessPolicyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CookieExpirationPeriod: new ResourceAttribute('CookieExpirationPeriod', String, 'No', null),
      PolicyName: new ResourceAttribute('PolicyName', undefined, 'undefined', null)
    }
    super('ElasticLoadBalancingLBCookieStickinessPolicyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingListenerPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      InstancePort: new ResourceAttribute('InstancePort', String, 'Yes', null),
      InstanceProtocol: new ResourceAttribute('InstanceProtocol', String, 'No', null),
      LoadBalancerPort: new ResourceAttribute('LoadBalancerPort', String, 'Yes', null),
      PolicyNames: new ResourceAttributeArray('PolicyNames', String, 'No', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null),
      SSLCertificateId: new ResourceAttribute('SSLCertificateId', String, 'No', null)
    }
    super('ElasticLoadBalancingListenerPropertyType', properties, propertiesObject)
  }
}

class ElasticLoadBalancingPolicyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Attributes: new ResourceAttributeArray('Attributes', Object, 'Yes', null),
      InstancePorts: new ResourceAttributeArray('InstancePorts', String, 'No', null),
      LoadBalancerPorts: new ResourceAttributeArray('LoadBalancerPorts', String, 'Conditional', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null),
      PolicyType: new ResourceAttribute('PolicyType', String, 'Yes', null)
    }
    super('ElasticLoadBalancingPolicyType', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainEBSOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EBSEnabled: new ResourceAttribute('EBSEnabled', Boolean, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, 'No', null),
      VolumeSize: new ResourceAttribute('VolumeSize', Number, 'No', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainEBSOptions', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainElasticsearchClusterConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DedicatedMasterCount: new ResourceAttribute('DedicatedMasterCount', Number, 'No', null),
      DedicatedMasterEnabled: new ResourceAttribute('DedicatedMasterEnabled', Boolean, 'No', null),
      DedicatedMasterType: new ResourceAttribute('DedicatedMasterType', String, 'No', null),
      InstanceCount: new ResourceAttribute('InstanceCount', Number, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'No', null),
      ZoneAwarenessEnabled: new ResourceAttribute('ZoneAwarenessEnabled', Boolean, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainElasticsearchClusterConfig', properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainSnapshotOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AutomatedSnapshotStartHour: new ResourceAttribute('AutomatedSnapshotStartHour', Number, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainSnapshotOptions', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterApplication extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AdditionalInfo: new ResourceAttribute('AdditionalInfo', Map, 'No', null),
      Args: new ResourceAttributeArray('Args', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('AmazonElasticMapReduceClusterApplication', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ScriptBootstrapAction: new ResourceAttribute('ScriptBootstrapAction', AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Args: new ResourceAttributeArray('Args', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Classification: new ResourceAttribute('Classification', String, 'No', null),
      ConfigurationProperties: new ResourceAttribute('ConfigurationProperties', Map, 'No', null),
      Configurations: new ResourceAttributeArray('Configurations', AmazonElasticMapReduceClusterConfiguration, 'No', null)
    }
    super('AmazonElasticMapReduceClusterConfiguration', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AdditionalMasterSecurityGroups: new ResourceAttributeArray('AdditionalMasterSecurityGroups', String, 'No', null),
      AdditionalSlaveSecurityGroups: new ResourceAttributeArray('AdditionalSlaveSecurityGroups', String, 'No', null),
      CoreInstanceGroup: new ResourceAttribute('CoreInstanceGroup', AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Ec2KeyName: new ResourceAttribute('Ec2KeyName', String, 'No', null),
      Ec2SubnetId: new ResourceAttribute('Ec2SubnetId', String, 'No', null),
      EmrManagedMasterSecurityGroup: new ResourceAttribute('EmrManagedMasterSecurityGroup', String, 'No', null),
      EmrManagedSlaveSecurityGroup: new ResourceAttribute('EmrManagedSlaveSecurityGroup', String, 'No', null),
      HadoopVersion: new ResourceAttribute('HadoopVersion', String, 'No', null),
      MasterInstanceGroup: new ResourceAttribute('MasterInstanceGroup', AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Placement: new ResourceAttribute('Placement', AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType, 'No', null),
      ServiceAccessSecurityGroup: new ResourceAttribute('ServiceAccessSecurityGroup', String, 'No', null),
      TerminationProtected: new ResourceAttribute('TerminationProtected', Boolean, 'No', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BidPrice: new ResourceAttribute('BidPrice', String, 'No', null),
      Configurations: new ResourceAttributeArray('Configurations', AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new ResourceAttribute('EbsConfiguration', AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new ResourceAttribute('InstanceCount', Number, 'Yes', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null),
      Market: new ResourceAttribute('Market', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EbsBlockDeviceConfigs: new ResourceAttributeArray('EbsBlockDeviceConfigs', AmazonElasticMapReduceEbsConfiguration, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfiguration', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      VolumeSpecification: new ResourceAttribute('VolumeSpecification', AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, 'Yes', null),
      VolumesPerInstance: new ResourceAttribute('VolumesPerInstance', Number, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Iops: new ResourceAttribute('Iops', Number, 'No', null),
      SizeInGB: new ResourceAttribute('SizeInGB', Number, 'Yes', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Args: new ResourceAttributeArray('Args', String, 'No', null),
      Jar: new ResourceAttribute('Jar', String, 'Yes', null),
      MainClass: new ResourceAttribute('MainClass', String, 'No', null),
      StepProperties: new ResourceAttributeArray('StepProperties', AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue, 'No', null)
    }
    super('AmazonElasticMapReduceStepHadoopJarStepConfig', properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue', properties, propertiesObject)
  }
}

class AmazonGameLiftAliasRoutingStrategy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FleetId: new ResourceAttribute('FleetId', String, 'Conditional', null),
      Message: new ResourceAttribute('Message', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AmazonGameLiftAliasRoutingStrategy', properties, propertiesObject)
  }
}

class AmazonGameLiftBuildStorageLocation extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'Yes', null)
    }
    super('AmazonGameLiftBuildStorageLocation', properties, propertiesObject)
  }
}

class AmazonGameLiftFleetEC2InboundPermission extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FromPort: new ResourceAttribute('FromPort', Number, 'Yes', null),
      IpRange: new ResourceAttribute('IpRange', String, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'Yes', null)
    }
    super('AmazonGameLiftFleetEC2InboundPermission', properties, propertiesObject)
  }
}

class IAMPolicies extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null)
    }
    super('IAMPolicies', properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      PasswordResetRequired: new ResourceAttribute('PasswordResetRequired', Boolean, 'No', null)
    }
    super('IAMUserLoginProfile', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Conditional', null),
      LogStreamName: new ResourceAttribute('LogStreamName', String, 'Conditional', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BufferingHints: new ResourceAttribute('BufferingHints', AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceAttribute('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      DomainARN: new ResourceAttribute('DomainARN', String, 'Yes', null),
      IndexName: new ResourceAttribute('IndexName', String, 'Yes', null),
      IndexRotationPeriod: new ResourceAttribute('IndexRotationPeriod', String, 'Yes', null),
      RetryOptions: new ResourceAttribute('RetryOptions', String, 'undefined', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null),
      S3BackupMode: new ResourceAttribute('S3BackupMode', String, 'Yes', null),
      S3Configuration: new ResourceAttribute('S3Configuration', String, 'undefined', null),
      TypeName: new ResourceAttribute('TypeName', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceAttribute('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceAttribute('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DurationInSeconds: new ResourceAttribute('DurationInSeconds', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CloudWatchLoggingOptions: new ResourceAttribute('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      ClusterJDBCURL: new ResourceAttribute('ClusterJDBCURL', String, 'Yes', null),
      CopyCommand: new ResourceAttribute('CopyCommand', AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand, 'Yes', null),
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null),
      S3Configuration: new ResourceAttribute('S3Configuration', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Yes', null),
      Username: new ResourceAttribute('Username', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CopyOptions: new ResourceAttribute('CopyOptions', String, 'No', null),
      DataTableColumns: new ResourceAttribute('DataTableColumns', String, 'No', null),
      DataTableName: new ResourceAttribute('DataTableName', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BucketARN: new ResourceAttribute('BucketARN', String, 'Yes', null),
      BufferingHints: new ResourceAttribute('BufferingHints', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceAttribute('CloudWatchLoggingOptions', AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      CompressionFormat: new ResourceAttribute('CompressionFormat', String, 'Yes', null),
      EncryptionConfiguration: new ResourceAttribute('EncryptionConfiguration', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration, 'No', null),
      Prefix: new ResourceAttribute('Prefix', String, 'Yes', null),
      RoleARN: new ResourceAttribute('RoleARN', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceAttribute('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceAttribute('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AWSKMSKeyARN: new ResourceAttribute('AWSKMSKeyARN', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig', properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      KMSEncryptionConfig: new ResourceAttribute('KMSEncryptionConfig', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig, 'No', null),
      NoEncryptionConfig: new ResourceAttribute('NoEncryptionConfig', String, 'No', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration', properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      S3Bucket: new ResourceAttribute('S3Bucket', String, 'Conditional', null),
      S3Key: new ResourceAttribute('S3Key', String, 'Conditional', null),
      S3ObjectVersion: new ResourceAttribute('S3ObjectVersion', String, 'No', null),
      ZipFile: new ResourceAttribute('ZipFile', String, 'Conditional', null),
      event: new ResourceAttribute('event', undefined, 'undefined', null),
      context: new ResourceAttribute('context', undefined, 'undefined', null),
      responseStatus: new ResourceAttribute('responseStatus', undefined, 'undefined', null),
      responseData: new ResourceAttribute('responseData', undefined, 'undefined', null),
      physicalResourceId: new ResourceAttribute('physicalResourceId', undefined, 'undefined', null)
    }
    super('AWSLambdaFunctionCode', properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SecurityGroupIds: new ResourceAttributeArray('SecurityGroupIds', String, 'Yes', null),
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null)
    }
    super('AWSLambdaFunctionVPCConfig', properties, propertiesObject)
  }
}

class NameType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('NameType', properties, propertiesObject)
  }
}

class AWSOpsWorksAutoScalingThresholdsType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CpuThreshold: new ResourceAttribute('CpuThreshold', Number, 'No', null),
      IgnoreMetricsTime: new ResourceAttribute('IgnoreMetricsTime', Number, 'No', null),
      InstanceCount: new ResourceAttribute('InstanceCount', Number, 'No', null),
      LoadThreshold: new ResourceAttribute('LoadThreshold', Number, 'No', null),
      MemoryThreshold: new ResourceAttribute('MemoryThreshold', Number, 'No', null),
      ThresholdsWaitTime: new ResourceAttribute('ThresholdsWaitTime', Number, 'No', null)
    }
    super('AWSOpsWorksAutoScalingThresholdsType', properties, propertiesObject)
  }
}

class AWSOpsWorksChefConfigurationType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BerkshelfVersion: new ResourceAttribute('BerkshelfVersion', String, 'No', null),
      ManageBerkshelf: new ResourceAttribute('ManageBerkshelf', Boolean, 'No', null)
    }
    super('AWSOpsWorksChefConfigurationType', properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ShutdownEventConfiguration: new ResourceAttribute('ShutdownEventConfiguration', AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfiguration', properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DelayUntilElbConnectionsDrained: new ResourceAttribute('DelayUntilElbConnectionsDrained', Boolean, 'No', null),
      ExecutionTimeout: new ResourceAttribute('ExecutionTimeout', Number, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration', properties, propertiesObject)
  }
}

class AWSOpsWorksLoadBasedAutoScalingType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DownScaling: new ResourceAttribute('DownScaling', AWSOpsWorksAutoScalingThresholdsType, 'No', null),
      Enable: new ResourceAttribute('Enable', Boolean, 'No', null),
      UpScaling: new ResourceAttribute('UpScaling', AWSOpsWorksAutoScalingThresholdsType, 'No', null)
    }
    super('AWSOpsWorksLoadBasedAutoScalingType', properties, propertiesObject)
  }
}

class AWSOpsWorksRecipesType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Configure: new ResourceAttributeArray('Configure', String, 'No', null),
      Deploy: new ResourceAttributeArray('Deploy', String, 'No', null),
      Setup: new ResourceAttributeArray('Setup', String, 'No', null),
      Shutdown: new ResourceAttributeArray('Shutdown', String, 'No', null),
      Undeploy: new ResourceAttributeArray('Undeploy', String, 'No', null)
    }
    super('AWSOpsWorksRecipesType', properties, propertiesObject)
  }
}

class AWSOpsWorksSourceType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Password: new ResourceAttribute('Password', String, 'No', null),
      Revision: new ResourceAttribute('Revision', String, 'No', null),
      SshKey: new ResourceAttribute('SshKey', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'No', null),
      Url: new ResourceAttribute('Url', String, 'No', null),
      Username: new ResourceAttribute('Username', String, 'No', null)
    }
    super('AWSOpsWorksSourceType', properties, propertiesObject)
  }
}

class AWSOpsWorksAppEnvironment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Secure: new ResourceAttribute('Secure', Boolean, 'No', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSOpsWorksAppEnvironment', properties, propertiesObject)
  }
}

class AWSOpsWorksSslConfigurationType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Certificate: new ResourceAttribute('Certificate', String, 'Yes', null),
      Chain: new ResourceAttribute('Chain', String, 'No', null),
      PrivateKey: new ResourceAttribute('PrivateKey', String, 'Yes', null)
    }
    super('AWSOpsWorksSslConfigurationType', properties, propertiesObject)
  }
}

class AWSOpsWorksStackConfigurationManagerType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('AWSOpsWorksStackConfigurationManagerType', properties, propertiesObject)
  }
}

class AWSOpsWorksTimeBasedAutoScalingType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Friday: new ResourceAttribute('Friday', Map, 'No', null),
      Monday: new ResourceAttribute('Monday', Map, 'No', null),
      Saturday: new ResourceAttribute('Saturday', Map, 'No', null),
      Sunday: new ResourceAttribute('Sunday', Map, 'No', null),
      Thursday: new ResourceAttribute('Thursday', Map, 'No', null),
      Tuesday: new ResourceAttribute('Tuesday', Map, 'No', null),
      Wednesday: new ResourceAttribute('Wednesday', Map, 'No', null)
    }
    super('AWSOpsWorksTimeBasedAutoScalingType', properties, propertiesObject)
  }
}

class AWSOpsWorksVolumeConfigurationType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Iops: new ResourceAttribute('Iops', Number, 'Conditional', null),
      MountPoint: new ResourceAttribute('MountPoint', String, 'Yes', null),
      NumberOfDisks: new ResourceAttribute('NumberOfDisks', Number, 'Yes', null),
      RaidLevel: new ResourceAttribute('RaidLevel', Number, 'No', null),
      Size: new ResourceAttribute('Size', Number, 'Yes', null),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super('AWSOpsWorksVolumeConfigurationType', properties, propertiesObject)
  }
}

class AmazonRedshiftParameterType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ParameterName: new ResourceAttribute('ParameterName', String, 'Yes', null),
      ParameterValue: new ResourceAttribute('ParameterValue', String, 'Yes', null)
    }
    super('AmazonRedshiftParameterType', properties, propertiesObject)
  }
}

class AWSCloudFormationResourceTagsType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSCloudFormationResourceTagsType', properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DBSecurityGroupMemberships: new ResourceAttributeArray('DBSecurityGroupMemberships', String, 'No', null),
      OptionName: new ResourceAttribute('OptionName', String, 'Yes', null),
      OptionSettings: new ResourceAttribute('OptionSettings', AmazonRDSOptionGroupOptionConfigurationsOptionSettings, 'No', null),
      Port: new ResourceAttribute('Port', Number, 'No', null),
      VpcSecurityGroupMemberships: new ResourceAttributeArray('VpcSecurityGroupMemberships', String, 'No', null)
    }
    super('AmazonRDSOptionGroupOptionConfigurations', properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurationsOptionSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonRDSOptionGroupOptionConfigurationsOptionSettings', properties, propertiesObject)
  }
}

class AmazonRDSSecurityGroupRule extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CIDRIP: new ResourceAttribute('CIDRIP', String, 'No', null),
      EC2SecurityGroupId: new ResourceAttribute('EC2SecurityGroupId', String, 'No', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super('AmazonRDSSecurityGroupRule', properties, propertiesObject)
  }
}

class Route53AliasTargetProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DNSName: new ResourceAttribute('DNSName', String, 'Yes', null),
      EvaluateTargetHealth: new ResourceAttribute('EvaluateTargetHealth', Boolean, 'No', null),
      HostedZoneId: new ResourceAttribute('HostedZoneId', String, 'Yes', null)
    }
    super('Route53AliasTargetProperty', properties, propertiesObject)
  }
}

class AmazonRoute53RecordSetGeoLocationProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ContinentCode: new ResourceAttribute('ContinentCode', String, 'Conditional', null),
      CountryCode: new ResourceAttribute('CountryCode', String, 'Conditional', null),
      SubdivisionCode: new ResourceAttribute('SubdivisionCode', String, 'No', null)
    }
    super('AmazonRoute53RecordSetGeoLocationProperty', properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FailureThreshold: new ResourceAttribute('FailureThreshold', Number, 'No', null),
      FullyQualifiedDomainName: new ResourceAttribute('FullyQualifiedDomainName', String, 'Conditional', null),
      IPAddress: new ResourceAttribute('IPAddress', String, 'No', null),
      Port: new ResourceAttribute('Port', Number, 'Conditional', null),
      RequestInterval: new ResourceAttribute('RequestInterval', Number, 'No', null),
      ResourcePath: new ResourceAttribute('ResourcePath', String, 'No', null),
      SearchString: new ResourceAttribute('SearchString', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AmazonRoute53HealthCheckConfig', properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HealthCheckTags', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneConfigProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Comment: new ResourceAttribute('Comment', String, 'No', null)
    }
    super('AmazonRoute53HostedZoneConfigProperty', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneTags', properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneVPCs extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      VPCId: new ResourceAttribute('VPCId', String, 'Yes', null),
      VPCRegion: new ResourceAttribute('VPCRegion', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneVPCs', properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CorsRules: new ResourceAttribute('CorsRules', AmazonS3CorsConfigurationRule, 'Yes', null)
    }
    super('AmazonS3CorsConfiguration', properties, propertiesObject)
  }
}

class AmazonS3CorsConfigurationRule extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AllowedHeaders: new ResourceAttributeArray('AllowedHeaders', String, 'No', null),
      AllowedMethods: new ResourceAttributeArray('AllowedMethods', String, 'Yes', null),
      AllowedOrigins: new ResourceAttributeArray('AllowedOrigins', String, 'Yes', null),
      ExposedHeaders: new ResourceAttributeArray('ExposedHeaders', String, 'No', null),
      Id: new ResourceAttribute('Id', String, 'No', null),
      MaxAge: new ResourceAttribute('MaxAge', Number, 'No', null)
    }
    super('AmazonS3CorsConfigurationRule', properties, propertiesObject)
  }
}

class AmazonS3LifecycleConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceAttribute('Rules', AmazonS3LifecycleRule, 'Yes', null)
    }
    super('AmazonS3LifecycleConfiguration', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ExpirationDate: new ResourceAttribute('ExpirationDate', String, 'Conditional', null),
      ExpirationInDays: new ResourceAttribute('ExpirationInDays', Number, 'Conditional', null),
      Id: new ResourceAttribute('Id', String, 'No', null),
      NoncurrentVersionExpirationInDays: new ResourceAttribute('NoncurrentVersionExpirationInDays', Number, 'Conditional', null),
      NoncurrentVersionTransition: new ResourceAttribute('NoncurrentVersionTransition', AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      NoncurrentVersionTransitions: new ResourceAttributeArray('NoncurrentVersionTransitions', AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      Prefix: new ResourceAttribute('Prefix', String, 'No', null),
      Status: new ResourceAttribute('Status', String, 'Yes', null),
      Transition: new ResourceAttribute('Transition', AmazonS3LifecycleRuleTransition, 'Conditional', null),
      Transitions: new ResourceAttributeArray('Transitions', AmazonS3LifecycleRuleTransition, 'Conditional', null)
    }
    super('AmazonS3LifecycleRule', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      StorageClass: new ResourceAttribute('StorageClass', String, 'Yes', null),
      TransitionInDays: new ResourceAttribute('TransitionInDays', Number, 'Yes', null)
    }
    super('AmazonS3LifecycleRuleNoncurrentVersionTransition', properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      StorageClass: new ResourceAttribute('StorageClass', String, 'Yes', null),
      TransitionDate: new ResourceAttribute('TransitionDate', String, 'Conditional', null),
      TransitionInDays: new ResourceAttribute('TransitionInDays', Number, 'Conditional', null)
    }
    super('AmazonS3LifecycleRuleTransition', properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DestinationBucketName: new ResourceAttribute('DestinationBucketName', String, 'No', null),
      LogFilePrefix: new ResourceAttribute('LogFilePrefix', String, 'No', null)
    }
    super('AmazonS3LoggingConfiguration', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      LambdaConfigurations: new ResourceAttribute('LambdaConfigurations', AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, 'No', null),
      QueueConfigurations: new ResourceAttribute('QueueConfigurations', AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, 'No', null),
      TopicConfigurations: new ResourceAttribute('TopicConfigurations', AmazonS3NotificationConfigurationTopicConfigurations, 'No', null)
    }
    super('AmazonS3NotificationConfiguration', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      S3Key: new ResourceAttribute('S3Key', AmazonS3NotificationConfigurationConfigFilterS3Key, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilter', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceAttributeArray('Rules', AmazonS3NotificationConfigurationConfigFilterS3KeyRules, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3Key', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3KeyRules', properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceAttribute('Event', String, 'Yes', null),
      Filter: new ResourceAttribute('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Function: new ResourceAttribute('Function', String, 'Yes', null)
    }
    super('AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations', properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceAttribute('Event', String, 'Yes', null),
      Filter: new ResourceAttribute('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Queue: new ResourceAttribute('Queue', String, 'Yes', null)
    }
    super('AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations', properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Event: new ResourceAttribute('Event', String, 'Yes', null),
      Filter: new ResourceAttribute('Filter', AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Topic: new ResourceAttribute('Topic', String, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationTopicConfigurations', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Role: new ResourceAttribute('Role', String, 'Yes', null),
      Rules: new ResourceAttributeArray('Rules', AmazonS3ReplicationConfigurationRules, 'Yes', null)
    }
    super('AmazonS3ReplicationConfiguration', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Destination: new ResourceAttribute('Destination', AmazonS3ReplicationConfigurationRulesDestination, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'No', null),
      Prefix: new ResourceAttribute('Prefix', String, 'Yes', null),
      Status: new ResourceAttribute('Status', String, 'Yes', null)
    }
    super('AmazonS3ReplicationConfigurationRules', properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRulesDestination extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      StorageClass: new ResourceAttribute('StorageClass', String, 'No', null)
    }
    super('AmazonS3ReplicationConfigurationRulesDestination', properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Status: new ResourceAttribute('Status', String, 'Yes', null)
    }
    super('AmazonS3VersioningConfiguration', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ErrorDocument: new ResourceAttribute('ErrorDocument', String, 'No', null),
      IndexDocument: new ResourceAttribute('IndexDocument', String, 'Yes', null),
      RedirectAllRequestsTo: new ResourceAttribute('RedirectAllRequestsTo', AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, 'No', null),
      RoutingRules: new ResourceAttributeArray('RoutingRules', AmazonS3WebsiteConfigurationRoutingRulesProperty, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HostName: new ResourceAttribute('HostName', String, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      RedirectRule: new ResourceAttribute('RedirectRule', AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, 'Yes', null),
      RoutingRuleCondition: new ResourceAttribute('RoutingRuleCondition', AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HostName: new ResourceAttribute('HostName', String, 'No', null),
      HttpRedirectCode: new ResourceAttribute('HttpRedirectCode', String, 'No', null),
      Protocol: new ResourceAttribute('Protocol', String, 'No', null),
      ReplaceKeyPrefixWith: new ResourceAttribute('ReplaceKeyPrefixWith', String, 'No', null),
      ReplaceKeyWith: new ResourceAttribute('ReplaceKeyWith', String, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty', properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new ResourceAttribute('HttpErrorCodeReturnedEquals', String, 'Conditional', null),
      KeyPrefixEquals: new ResourceAttribute('KeyPrefixEquals', String, 'Conditional', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty', properties, propertiesObject)
  }
}

class AmazonSNSSubscriptionPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Endpoint: new ResourceAttribute('Endpoint', String, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null)
    }
    super('AmazonSNSSubscriptionPropertyType', properties, propertiesObject)
  }
}

class AmazonSQSRedrivePolicy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      deadLetterTargetArn: new ResourceAttribute('deadLetterTargetArn', String, 'No', null),
      maxReceiveCount: new ResourceAttribute('maxReceiveCount', Number, 'No', null)
    }
    super('AmazonSQSRedrivePolicy', properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuples extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      PositionalConstraint: new ResourceAttribute('PositionalConstraint', String, 'Yes', null),
      TargetString: new ResourceAttribute('TargetString', String, 'Conditional', null),
      TargetStringBase64: new ResourceAttribute('TargetStringBase64', String, 'Conditional', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFByteMatchSetByteMatchTuples', properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuplesFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFByteMatchSetByteMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFIPSetIPSetDescriptors extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSWAFIPSetIPSetDescriptors', properties, propertiesObject)
  }
}

class AWSWAFRulePredicates extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DataId: new ResourceAttribute('DataId', String, 'Yes', null),
      Negated: new ResourceAttribute('Negated', Boolean, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFRulePredicates', properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraint extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ComparisonOperator: new ResourceAttribute('ComparisonOperator', String, 'Yes', null),
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFSizeConstraintSetSizeConstraintFieldToMatch, 'Yes', null),
      Size: new ResourceAttribute('Size', Number, 'Yes', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFSizeConstraintSetSizeConstraint', properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraintFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFSizeConstraintSetSizeConstraintFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples', properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTuple extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFXssMatchSetXssMatchTupleFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTuple', properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTupleFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTupleFieldToMatch', properties, propertiesObject)
  }
}

class AWSWAFWebACLAction extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFWebACLAction', properties, propertiesObject)
  }
}

class AWSWAFWebACLRules extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Action: new ResourceAttribute('Action', AWSWAFWebACLAction, 'Yes', null),
      Priority: new ResourceAttribute('Priority', Number, 'Yes', null),
      RuleId: new ResourceAttribute('RuleId', String, 'Yes', null)
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
