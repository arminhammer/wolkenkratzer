'use strict'

const wolkenkratzer = require('./../index')

class AmazonAPIGatewayApiKeyStageKey extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StageName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescription extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheClusterEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheClusterSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CacheDataEncrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      CachingEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ClientCertificateId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DataTraceEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LoggingLevel: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MethodSettings: new wolkenkratzer.ResourceProperty(AmazonAPIGatewayDeploymentStageDescriptionMethodSetting, 'No', null),
      MetricsEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      StageName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ThrottlingBurstLimit: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      Variables: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescriptionMethodSetting extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheDataEncrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      CachingEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DataTraceEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      HttpMethod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LoggingLevel: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MetricsEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ResourcePath: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ThrottlingBurstLimit: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new wolkenkratzer.ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheKeyParameters: new wolkenkratzer.ResourceArray(String, 'No', null),
      CacheNamespace: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Credentials: new wolkenkratzer.ResourceProperty(String, 'No', null),
      IntegrationHttpMethod: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      IntegrationResponses: new wolkenkratzer.ResourceArray(AmazonAPIGatewayMethodIntegrationIntegrationResponse, 'No', null),
      RequestParameters: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      RequestTemplates: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Uri: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegrationIntegrationResponse extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ResponseParameters: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ResponseTemplates: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SelectionPattern: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StatusCode: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodMethodResponse extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ResponseModels: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ResponseParameters: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      StatusCode: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayRestApiS3Location extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ETag: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Key: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayStageMethodSetting extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheDataEncrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      CachingEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DataTraceEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      HttpMethod: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LoggingLevel: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MetricsEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ResourcePath: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ThrottlingBurstLimit: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new wolkenkratzer.ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Ebs: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      NoDevice: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      VirtualName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingEBSBlockDevicePropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Iops: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SnapshotId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VolumeSize: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingMetricsCollection extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Granularity: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Metrics: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingNotificationConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      NotificationTypes: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      TopicARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingScalingPolicyStepAdjustments extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MetricIntervalLowerBound: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      MetricIntervalUpperBound: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      ScalingAdjustment: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingTagsPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PropagateAtLaunch: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFormationStackParametersPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceLabel extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      default: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterGroup extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Label: new wolkenkratzer.ResourceProperty(AWSCloudFormationInterfaceLabel, 'No', null),
      Parameters: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterLabel extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ParameterLogicalID: new wolkenkratzer.ResourceProperty(AWSCloudFormationInterfaceLabel, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Aliases: new wolkenkratzer.ResourceArray(String, 'No', null),
      CacheBehaviors: new wolkenkratzer.ResourceArray(Map, 'No', null),
      Comment: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CustomErrorResponses: new wolkenkratzer.ResourceProperty(undefined, 'No', null),
      DefaultCacheBehavior: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      DefaultRootObject: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Logging: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Origins: new wolkenkratzer.ResourceArray(Map, 'Yes', null),
      PriceClass: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Restrictions: new wolkenkratzer.ResourceProperty(CloudFrontDistributionConfigurationRestrictions, 'No', null),
      ViewerCertificate: new wolkenkratzer.ResourceProperty(CloudFrontDistributionConfigurationViewerCertificate, 'No', null),
      WebACLId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCacheBehavior extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedMethods: new wolkenkratzer.ResourceArray(String, 'No', null),
      CachedMethods: new wolkenkratzer.ResourceArray(String, 'No', null),
      Compress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DefaultTTL: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      ForwardedValues: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      MaxTTL: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      MinTTL: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      PathPattern: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SmoothStreaming: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      TargetOriginId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TrustedSigners: new wolkenkratzer.ResourceArray(String, 'No', null),
      ViewerProtocolPolicy: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCustomErrorResponse extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorCachingMinTTL: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ErrorCode: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      ResponseCode: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      ResponsePagePath: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDefaultCacheBehavior extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedMethods: new wolkenkratzer.ResourceArray(String, 'No', null),
      CachedMethods: new wolkenkratzer.ResourceArray(String, 'No', null),
      Compress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DefaultTTL: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      ForwardedValues: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      MaxTTL: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      MinTTL: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SmoothStreaming: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      TargetOriginId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TrustedSigners: new wolkenkratzer.ResourceArray(String, 'No', null),
      ViewerProtocolPolicy: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontLogging extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IncludeCookies: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Prefix: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOrigin extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CustomOriginConfig: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      DomainName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OriginPath: new wolkenkratzer.ResourceProperty(String, 'No', null),
      S3OriginConfig: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginCustomOrigin extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HTTPPort: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HTTPSPort: new wolkenkratzer.ResourceProperty(String, 'No', null),
      OriginProtocolPolicy: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginS3Origin extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      OriginAccessIdentity: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationRestrictions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GeoRestriction: new wolkenkratzer.ResourceProperty(CloudFrontDistributionConfigRestrictionsGeoRestriction, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigRestrictionsGeoRestriction extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Locations: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      RestrictionType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      blacklist: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      whitelist: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      none: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationViewerCertificate extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CloudFrontDefaultCertificate: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      IamCertificateId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      MinimumProtocolVersion: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SslSupportMethod: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontForwardedValues extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Cookies: new wolkenkratzer.ResourceProperty(CloudFrontForwardedValuesCookies, 'No', null),
      Headers: new wolkenkratzer.ResourceArray(String, 'No', null),
      QueryString: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontForwardedValuesCookies extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Forward: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      WhitelistedNames: new wolkenkratzer.ResourceArray(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudWatchMetricDimensionPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonCloudWatchEventsRuleTarget extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Arn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Input: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      InputPath: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudWatchLogsMetricFilterMetricTransformationProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MetricName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MetricNamespace: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MetricValue: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentConfigMinimumHealthyHosts extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeployment extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      IgnoreApplicationStopFailures: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Revision: new wolkenkratzer.ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevision, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevision extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GitHubLocation: new wolkenkratzer.ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation, 'No', null),
      RevisionType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      S3Location: new wolkenkratzer.ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CommitId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Repository: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      BundleType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ETag: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupEc2TagFilters extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeArtifactDetails extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MaximumCount: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      MinimumCount: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeConfigurationProperties extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Key: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Queryable: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Required: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Secret: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeSettings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EntityUrlTemplate: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ExecutionUrlTemplate: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RevisionUrlTemplate: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ThirdPartyConfigurationUrl: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStore extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EncryptionKey: new wolkenkratzer.ResourceProperty(AWSCodePipelinePipelineArtifactStoreEncryptionKey, 'No', null),
      Location: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStoreEncryptionKey extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineDisableInboundStageTransitions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Reason: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StageName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStages extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Actions: new wolkenkratzer.ResourceArray(AWSCodePipelinePipelineStagesActions, 'Yes', null),
      Blockers: new wolkenkratzer.ResourceArray(AWSCodePipelinePipelineStagesBlockers, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ActionTypeId: new wolkenkratzer.ResourceProperty(AWSCodePipelinePipelineStagesActionsActionTypeId, 'Yes', null),
      Configuration: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      InputArtifacts: new wolkenkratzer.ResourceArray(AWSCodePipelinePipelineStagesActionsInputArtifacts, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OutputArtifacts: new wolkenkratzer.ResourceArray(AWSCodePipelinePipelineStagesActionsOutputArtifacts, 'No', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RunOrder: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsActionTypeId extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Category: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Owner: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Provider: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsInputArtifacts extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsOutputArtifacts extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesBlockers extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleScope extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ComplianceResourceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ComplianceResourceTypes: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      TagKey: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TagValue: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSource extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Owner: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceDetails: new wolkenkratzer.ResourceArray(AWSConfigConfigRuleSourceSourceDetails, 'No', null),
      SourceIdentifier: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSourceSourceDetails extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EventSource: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MessageType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigurationRecorderRecordingGroup extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllSupported: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      IncludeGlobalResourceTypes: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ResourceTypes: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeliveryFrequency: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterObjects extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Attributes: new wolkenkratzer.ResourceProperty(AWSDataPipelineParameterObjectsAttributes, 'Yes', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelineParameterObjectsAttributes extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StringValue: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterValues extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StringValue: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineObjects extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Fields: new wolkenkratzer.ResourceProperty(AWSDataPipelineDataPipelineObjectFields, 'Yes', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelineDataPipelineObjectFields extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RefValue: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      StringValue: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelinePipelineTags extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDirectoryServiceMicrosoftADVpcSettings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SubnetIds: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDirectoryServiceSimpleADVpcSettings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SubnetIds: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      VpcId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBAttributeDefinitions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttributeName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      AttributeType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBGlobalSecondaryIndexes extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IndexName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      KeySchema: new wolkenkratzer.ResourceProperty(DynamoDBKeySchema, 'Yes', null),
      Projection: new wolkenkratzer.ResourceProperty(DynamoDBProjectionObject, 'Yes', null),
      ProvisionedThroughput: new wolkenkratzer.ResourceProperty(DynamoDBProvisionedThroughput, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBKeySchema extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttributeName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      KeyType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBLocalSecondaryIndexes extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IndexName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      KeySchema: new wolkenkratzer.ResourceProperty(DynamoDBKeySchema, 'Yes', null),
      Projection: new wolkenkratzer.ResourceProperty(DynamoDBProjectionObject, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBProjectionObject extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      NonKeyAttributes: new wolkenkratzer.ResourceArray(String, 'No', null),
      ProjectionType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KEYS_ONLY: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      INCLUDE: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      ALL: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBProvisionedThroughput extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ReadCapacityUnits: new wolkenkratzer.ResourceProperty(Number, 'Yes', null),
      WriteCapacityUnits: new wolkenkratzer.ResourceProperty(Number, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBTableStreamSpecification extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StreamViewType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Ebs: new wolkenkratzer.ResourceProperty(AmazonElasticBlockStoreBlockDeviceProperty, 'Conditional', null),
      NoDevice: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      VirtualName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticBlockStoreBlockDeviceProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Iops: new wolkenkratzer.ResourceProperty(Number, 'Conditional', null),
      SnapshotId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VolumeSize: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2ICMPPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociationParameters: new wolkenkratzer.ResourceArray(AmazonEC2InstanceSsmAssociationsAssociationParameters, 'No', null),
      DocumentName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceArray(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Device: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VolumeId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DeviceIndex: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      GroupSet: new wolkenkratzer.ResourceArray(String, 'No', null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new wolkenkratzer.ResourceArray(Map, 'No', null),
      SecondaryPrivateIpAddressCount: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAssociation extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttachmentID: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceID: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PublicIp: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IpOwnerId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAttachment extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttachmentID: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceID: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceGroupItem extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfacePrivateIPSpecification extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Primary: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2PortRangePropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class EC2SecurityGroupRulePropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CidrIp: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      DestinationSecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      FromPort: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      IpProtocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceSecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      ToPort: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigData extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllocationStrategy: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ExcessCapacityTerminationPolicy: new wolkenkratzer.ResourceProperty(String, 'No', null),
      IamFleetRole: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LaunchSpecifications: new wolkenkratzer.ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications, 'Yes', null),
      SpotPrice: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TargetCapacity: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      TerminateInstancesWithExpiration: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ValidFrom: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ValidUntil: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BlockDeviceMappings: new wolkenkratzer.ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings, 'No', null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      IamInstanceProfile: new wolkenkratzer.ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile, 'No', null),
      ImageId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      KernelId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Monitoring: new wolkenkratzer.ResourceProperty(AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring, 'No', null),
      NetworkInterfaces: new wolkenkratzer.ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces, 'No', null),
      Placement: new wolkenkratzer.ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement, 'No', null),
      RamdiskId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SecurityGroups: new wolkenkratzer.ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups, 'No', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      UserData: new wolkenkratzer.ResourceProperty(String, 'No', null),
      WeightedCapacity: new wolkenkratzer.ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Ebs: new wolkenkratzer.ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs, 'Conditional', null),
      NoDevice: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      VirtualName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Iops: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SnapshotId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VolumeSize: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Arn: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DeleteOnTermination: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DeviceIndex: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      Groups: new wolkenkratzer.ResourceArray(String, 'No', null),
      NetworkInterfaceId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new wolkenkratzer.ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses, 'No', null),
      SecondaryPrivateIpAddressCount: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SubnetId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Primary: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      PrivateIpAddress: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      GroupName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GroupId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceDeploymentConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MaximumPercent: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      MinimumHealthyPercent: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceLoadBalancers extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ContainerPort: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      LoadBalancerName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Command: new wolkenkratzer.ResourceArray(String, 'No', null),
      Cpu: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      DisableNetworking: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DnsSearchDomains: new wolkenkratzer.ResourceArray(String, 'No', null),
      DnsServers: new wolkenkratzer.ResourceArray(String, 'No', null),
      DockerLabels: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      DockerSecurityOptions: new wolkenkratzer.ResourceArray(String, 'No', null),
      EntryPoint: new wolkenkratzer.ResourceArray(String, 'No', null),
      Environment: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment, 'No', null),
      Essential: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ExtraHosts: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry, 'No', null),
      Hostname: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Image: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Links: new wolkenkratzer.ResourceArray(String, 'No', null),
      LogConfiguration: new wolkenkratzer.ResourceProperty(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration, 'No', null),
      Memory: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      MountPoints: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PortMappings: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings, 'No', null),
      Privileged: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ReadonlyRootFilesystem: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Ulimits: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit, 'No', null),
      User: new wolkenkratzer.ResourceProperty(String, 'No', null),
      VolumesFrom: new wolkenkratzer.ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom, 'No', null),
      WorkingDirectory: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Hostname: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IpAddress: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LogDriver: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Options: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerPath: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceVolume: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ReadOnly: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerPort: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      HostPort: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HardLimit: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SoftLimit: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SourceContainer: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ReadOnly: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumes extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Host: new wolkenkratzer.ResourceProperty(AmazonEC2ContainerServiceTaskDefinitionVolumesHost, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumesHost extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SourcePath: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticFileSystemFileSystemFileSystemTags extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkEnvironmentTierPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkOptionSettingsPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Namespace: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OptionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceBundlePropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceConfigurationPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ApplicationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TemplateName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingAccessLoggingPolicy extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EmitInterval: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      S3BucketName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3BucketPrefix: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingAppCookieStickinessPolicyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CookieName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionDrainingPolicy extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Timeout: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionSettings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IdleTimeout: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingHealthCheckType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HealthyThreshold: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Interval: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Target: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Timeout: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      UnhealthyThreshold: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingLBCookieStickinessPolicyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CookieExpirationPeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PolicyName: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingListenerPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      InstancePort: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceProtocol: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LoadBalancerPort: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PolicyNames: new wolkenkratzer.ResourceArray(String, 'No', null),
      Protocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SSLCertificateId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingPolicyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Attributes: new wolkenkratzer.ResourceArray(Object, 'Yes', null),
      InstancePorts: new wolkenkratzer.ResourceArray(String, 'No', null),
      LoadBalancerPorts: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PolicyType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainEBSOptions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EBSEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Iops: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      VolumeSize: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainElasticsearchClusterConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DedicatedMasterCount: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      DedicatedMasterEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      DedicatedMasterType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      InstanceCount: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ZoneAwarenessEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainSnapshotOptions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AutomatedSnapshotStartHour: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterApplication extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AdditionalInfo: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Args: new wolkenkratzer.ResourceArray(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ScriptBootstrapAction: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Args: new wolkenkratzer.ResourceArray(String, 'No', null),
      Path: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Classification: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ConfigurationProperties: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Configurations: new wolkenkratzer.ResourceArray(AmazonElasticMapReduceClusterConfiguration, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AdditionalMasterSecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      AdditionalSlaveSecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      CoreInstanceGroup: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Ec2KeyName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Ec2SubnetId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EmrManagedMasterSecurityGroup: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EmrManagedSlaveSecurityGroup: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HadoopVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MasterInstanceGroup: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Placement: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType, 'No', null),
      ServiceAccessSecurityGroup: new wolkenkratzer.ResourceProperty(String, 'No', null),
      TerminationProtected: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BidPrice: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Configurations: new wolkenkratzer.ResourceArray(AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Market: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EbsBlockDeviceConfigs: new wolkenkratzer.ResourceArray(AmazonElasticMapReduceEbsConfiguration, 'No', null),
      EbsOptimized: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      VolumeSpecification: new wolkenkratzer.ResourceProperty(AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, 'Yes', null),
      VolumesPerInstance: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Iops: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      SizeInGB: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Args: new wolkenkratzer.ResourceArray(String, 'No', null),
      Jar: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MainClass: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StepProperties: new wolkenkratzer.ResourceArray(AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftAliasRoutingStrategy extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FleetId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Message: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftBuildStorageLocation extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftFleetEC2InboundPermission extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FromPort: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      IpRange: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Protocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ToPort: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class IAMPolicies extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PasswordResetRequired: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      LogGroupName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      LogStreamName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BufferingHints: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      DomainARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IndexName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IndexRotationPeriod: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RetryOptions: new wolkenkratzer.ResourceProperty(String, 'undefined', null),
      RoleARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3BackupMode: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3Configuration: new wolkenkratzer.ResourceProperty(String, 'undefined', null),
      TypeName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IntervalInSeconds: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      SizeInMBs: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DurationInSeconds: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CloudWatchLoggingOptions: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      ClusterJDBCURL: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CopyCommand: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand, 'Yes', null),
      Password: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3Configuration: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Yes', null),
      Username: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CopyOptions: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DataTableColumns: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DataTableName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BucketARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      BufferingHints: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      CompressionFormat: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EncryptionConfiguration: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration, 'No', null),
      Prefix: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IntervalInSeconds: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      SizeInMBs: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AWSKMSKeyARN: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      KMSEncryptionConfig: new wolkenkratzer.ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig, 'No', null),
      NoEncryptionConfig: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      S3Key: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      S3ObjectVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ZipFile: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      event: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      context: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      responseStatus: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      responseData: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null),
      physicalResourceId: new wolkenkratzer.ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      SubnetIds: new wolkenkratzer.ResourceArray(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class NameType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksAutoScalingThresholdsType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CpuThreshold: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      IgnoreMetricsTime: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      InstanceCount: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      LoadThreshold: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      MemoryThreshold: new wolkenkratzer.ResourceProperty(Number, 'No', null),
      ThresholdsWaitTime: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksChefConfigurationType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BerkshelfVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ManageBerkshelf: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ShutdownEventConfiguration: new wolkenkratzer.ResourceProperty(AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DelayUntilElbConnectionsDrained: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      ExecutionTimeout: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLoadBasedAutoScalingType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DownScaling: new wolkenkratzer.ResourceProperty(AWSOpsWorksAutoScalingThresholdsType, 'No', null),
      Enable: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      UpScaling: new wolkenkratzer.ResourceProperty(AWSOpsWorksAutoScalingThresholdsType, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksRecipesType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Configure: new wolkenkratzer.ResourceArray(String, 'No', null),
      Deploy: new wolkenkratzer.ResourceArray(String, 'No', null),
      Setup: new wolkenkratzer.ResourceArray(String, 'No', null),
      Shutdown: new wolkenkratzer.ResourceArray(String, 'No', null),
      Undeploy: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksSourceType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Revision: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SshKey: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Url: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Username: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksAppEnvironment extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Secure: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksSslConfigurationType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Certificate: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Chain: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PrivateKey: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksStackConfigurationManagerType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksTimeBasedAutoScalingType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Friday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Monday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Saturday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Sunday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Thursday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Tuesday: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Wednesday: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksVolumeConfigurationType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Iops: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      MountPoint: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NumberOfDisks: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      RaidLevel: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      Size: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      VolumeType: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRedshiftParameterType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ParameterName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ParameterValue: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationResourceTagsType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DBSecurityGroupMemberships: new wolkenkratzer.ResourceArray(String, 'No', null),
      OptionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OptionSettings: new wolkenkratzer.ResourceProperty(AmazonRDSOptionGroupOptionConfigurationsOptionSettings, 'No', null),
      Port: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      VpcSecurityGroupMemberships: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurationsOptionSettings extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSSecurityGroupRule extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CIDRIP: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class Route53AliasTargetProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DNSName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EvaluateTargetHealth: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      HostedZoneId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53RecordSetGeoLocationProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContinentCode: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      CountryCode: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      SubdivisionCode: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FailureThreshold: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      FullyQualifiedDomainName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      IPAddress: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Port: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      RequestInterval: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ResourcePath: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SearchString: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckTags extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneConfigProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Comment: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneTags extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneVPCs extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      VPCId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VPCRegion: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CorsRules: new wolkenkratzer.ResourceProperty(AmazonS3CorsConfigurationRule, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfigurationRule extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedHeaders: new wolkenkratzer.ResourceArray(String, 'No', null),
      AllowedMethods: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      AllowedOrigins: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      ExposedHeaders: new wolkenkratzer.ResourceArray(String, 'No', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MaxAge: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new wolkenkratzer.ResourceProperty(AmazonS3LifecycleRule, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ExpirationDate: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      ExpirationInDays: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NoncurrentVersionExpirationInDays: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null),
      NoncurrentVersionTransition: new wolkenkratzer.ResourceProperty(AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      NoncurrentVersionTransitions: new wolkenkratzer.ResourceArray(AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      Prefix: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Status: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Transition: new wolkenkratzer.ResourceProperty(AmazonS3LifecycleRuleTransition, 'Conditional', null),
      Transitions: new wolkenkratzer.ResourceArray(AmazonS3LifecycleRuleTransition, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TransitionInDays: new wolkenkratzer.ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TransitionDate: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TransitionInDays: new wolkenkratzer.ResourceProperty(Map, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DestinationBucketName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LogFilePrefix: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LambdaConfigurations: new wolkenkratzer.ResourceProperty(AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, 'No', null),
      QueueConfigurations: new wolkenkratzer.ResourceProperty(AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, 'No', null),
      TopicConfigurations: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationTopicConfigurations, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Key: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilterS3Key, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new wolkenkratzer.ResourceArray(AmazonS3NotificationConfigurationConfigFilterS3KeyRules, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Function: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Queue: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Topic: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Role: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Rules: new wolkenkratzer.ResourceArray(AmazonS3ReplicationConfigurationRules, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Destination: new wolkenkratzer.ResourceProperty(AmazonS3ReplicationConfigurationRulesDestination, 'Yes', null),
      Id: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Prefix: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Status: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRulesDestination extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StorageClass: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Status: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorDocument: new wolkenkratzer.ResourceProperty(String, 'No', null),
      IndexDocument: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RedirectAllRequestsTo: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, 'No', null),
      RoutingRules: new wolkenkratzer.ResourceArray(AmazonS3WebsiteConfigurationRoutingRulesProperty, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Protocol: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RedirectRule: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, 'Yes', null),
      RoutingRuleCondition: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HttpRedirectCode: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Protocol: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ReplaceKeyPrefixWith: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ReplaceKeyWith: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      KeyPrefixEquals: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSNSSubscriptionPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Endpoint: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Protocol: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSQSRedrivePolicy extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      deadLetterTargetArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      maxReceiveCount: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuples extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new wolkenkratzer.ResourceProperty(AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      PositionalConstraint: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TargetString: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TargetStringBase64: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TextTransformation: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuplesFieldToMatch extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFIPSetIPSetDescriptors extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Value: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFRulePredicates extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DataId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Negated: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraint extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ComparisonOperator: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      FieldToMatch: new wolkenkratzer.ResourceProperty(AWSWAFSizeConstraintSetSizeConstraintFieldToMatch, 'Yes', null),
      Size: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      TextTransformation: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraintFieldToMatch extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new wolkenkratzer.ResourceProperty(AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      TextTransformation: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTuple extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new wolkenkratzer.ResourceProperty(AWSWAFXssMatchSetXssMatchTupleFieldToMatch, 'Yes', null),
      TextTransformation: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTupleFieldToMatch extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFWebACLAction extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFWebACLRules extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Action: new wolkenkratzer.ResourceProperty(AWSWAFWebACLAction, 'Yes', null),
      Priority: new wolkenkratzer.ResourceProperty(Map, 'Yes', null),
      RuleId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
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