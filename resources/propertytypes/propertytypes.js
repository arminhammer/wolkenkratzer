'use strict'

const SubPropertyObject = require('./../../baseawsobject').SubPropertyObject
const ResourceArray = require('./../../resourceproperty').ResourceArray
const ResourceProperty = require('./../../resourceproperty').ResourceProperty

class AmazonAPIGatewayApiKeyStageKey extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RestApiId: new ResourceProperty(String, 'No', null),
      StageName: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescription extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheClusterEnabled: new ResourceProperty(Boolean, 'No', null),
      CacheClusterSize: new ResourceProperty(String, 'No', null),
      CacheDataEncrypted: new ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty(Map, 'No', null),
      CachingEnabled: new ResourceProperty(Boolean, 'No', null),
      ClientCertificateId: new ResourceProperty(String, 'No', null),
      DataTraceEnabled: new ResourceProperty(Boolean, 'No', null),
      Description: new ResourceProperty(String, 'No', null),
      LoggingLevel: new ResourceProperty(String, 'No', null),
      MethodSettings: new ResourceProperty(AmazonAPIGatewayDeploymentStageDescriptionMethodSetting, 'No', null),
      MetricsEnabled: new ResourceProperty(Boolean, 'No', null),
      StageName: new ResourceProperty(String, 'No', null),
      ThrottlingBurstLimit: new ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new ResourceProperty(Number, 'No', null),
      Variables: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayDeploymentStageDescriptionMethodSetting extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty(Map, 'No', null),
      CachingEnabled: new ResourceProperty(Boolean, 'No', null),
      DataTraceEnabled: new ResourceProperty(Boolean, 'No', null),
      HttpMethod: new ResourceProperty(String, 'No', null),
      LoggingLevel: new ResourceProperty(String, 'No', null),
      MetricsEnabled: new ResourceProperty(Boolean, 'No', null),
      ResourcePath: new ResourceProperty(String, 'No', null),
      ThrottlingBurstLimit: new ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheKeyParameters: new ResourceArray(String, 'No', null),
      CacheNamespace: new ResourceProperty(String, 'No', null),
      Credentials: new ResourceProperty(String, 'No', null),
      IntegrationHttpMethod: new ResourceProperty(String, 'Conditional', null),
      IntegrationResponses: new ResourceArray(AmazonAPIGatewayMethodIntegrationIntegrationResponse, 'No', null),
      RequestParameters: new ResourceProperty(Map, 'No', null),
      RequestTemplates: new ResourceProperty(Map, 'No', null),
      Type: new ResourceProperty(String, 'Yes', null),
      Uri: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodIntegrationIntegrationResponse extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ResponseParameters: new ResourceProperty(Map, 'No', null),
      ResponseTemplates: new ResourceProperty(Map, 'No', null),
      SelectionPattern: new ResourceProperty(String, 'No', null),
      StatusCode: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayMethodMethodResponse extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ResponseModels: new ResourceProperty(Map, 'No', null),
      ResponseParameters: new ResourceProperty(Map, 'No', null),
      StatusCode: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayRestApiS3Location extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty(String, 'No', null),
      ETag: new ResourceProperty(String, 'No', null),
      Key: new ResourceProperty(String, 'No', null),
      Version: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonAPIGatewayStageMethodSetting extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CacheDataEncrypted: new ResourceProperty(Boolean, 'No', null),
      CacheTtlInSeconds: new ResourceProperty(Map, 'No', null),
      CachingEnabled: new ResourceProperty(Boolean, 'No', null),
      DataTraceEnabled: new ResourceProperty(Boolean, 'No', null),
      HttpMethod: new ResourceProperty(String, 'Yes', null),
      LoggingLevel: new ResourceProperty(String, 'No', null),
      MetricsEnabled: new ResourceProperty(Boolean, 'No', null),
      ResourcePath: new ResourceProperty(String, 'Yes', null),
      ThrottlingBurstLimit: new ResourceProperty(Map, 'No', null),
      ThrottlingRateLimit: new ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty(String, 'Yes', null),
      Ebs: new ResourceProperty(Map, 'Conditional', null),
      NoDevice: new ResourceProperty(Boolean, 'No', null),
      VirtualName: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationAutoScalingEBSBlockDevicePropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty(Boolean, 'No', null),
      Encrypted: new ResourceProperty(Boolean, 'No', null),
      Iops: new ResourceProperty(Map, 'No', null),
      SnapshotId: new ResourceProperty(String, 'Conditional', null),
      VolumeSize: new ResourceProperty(Map, 'Conditional', null),
      VolumeType: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingMetricsCollection extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Granularity: new ResourceProperty(String, 'Yes', null),
      Metrics: new ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingNotificationConfigurations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      NotificationTypes: new ResourceArray(String, 'Yes', null),
      TopicARN: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingScalingPolicyStepAdjustments extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MetricIntervalLowerBound: new ResourceProperty(Number, 'No', null),
      MetricIntervalUpperBound: new ResourceProperty(Number, 'No', null),
      ScalingAdjustment: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AutoScalingTagsPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null),
      PropagateAtLaunch: new ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFormationStackParametersPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceLabel extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      default: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterGroup extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Label: new ResourceProperty(AWSCloudFormationInterfaceLabel, 'No', null),
      Parameters: new ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterLabel extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ParameterLogicalID: new ResourceProperty(AWSCloudFormationInterfaceLabel, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Aliases: new ResourceArray(String, 'No', null),
      CacheBehaviors: new ResourceArray(Map, 'No', null),
      Comment: new ResourceProperty(String, 'No', null),
      CustomErrorResponses: new ResourceProperty(undefined, 'No', null),
      DefaultCacheBehavior: new ResourceProperty(Map, 'Yes', null),
      DefaultRootObject: new ResourceProperty(String, 'No', null),
      Enabled: new ResourceProperty(Boolean, 'Yes', null),
      Logging: new ResourceProperty(Map, 'No', null),
      Origins: new ResourceArray(Map, 'Yes', null),
      PriceClass: new ResourceProperty(String, 'No', null),
      Restrictions: new ResourceProperty(CloudFrontDistributionConfigurationRestrictions, 'No', null),
      ViewerCertificate: new ResourceProperty(CloudFrontDistributionConfigurationViewerCertificate, 'No', null),
      WebACLId: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCacheBehavior extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceArray(String, 'No', null),
      CachedMethods: new ResourceArray(String, 'No', null),
      Compress: new ResourceProperty(Boolean, 'No', null),
      DefaultTTL: new ResourceProperty(Number, 'No', null),
      ForwardedValues: new ResourceProperty(Map, 'Yes', null),
      MaxTTL: new ResourceProperty(Number, 'No', null),
      MinTTL: new ResourceProperty(Number, 'No', null),
      PathPattern: new ResourceProperty(String, 'Yes', null),
      SmoothStreaming: new ResourceProperty(Boolean, 'No', null),
      TargetOriginId: new ResourceProperty(String, 'Yes', null),
      TrustedSigners: new ResourceArray(String, 'No', null),
      ViewerProtocolPolicy: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigCustomErrorResponse extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorCachingMinTTL: new ResourceProperty(Map, 'No', null),
      ErrorCode: new ResourceProperty(Map, 'Yes', null),
      ResponseCode: new ResourceProperty(Map, 'Conditional', null),
      ResponsePagePath: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDefaultCacheBehavior extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedMethods: new ResourceArray(String, 'No', null),
      CachedMethods: new ResourceArray(String, 'No', null),
      Compress: new ResourceProperty(Boolean, 'No', null),
      DefaultTTL: new ResourceProperty(Number, 'No', null),
      ForwardedValues: new ResourceProperty(Map, 'Yes', null),
      MaxTTL: new ResourceProperty(Number, 'No', null),
      MinTTL: new ResourceProperty(String, 'No', null),
      SmoothStreaming: new ResourceProperty(Boolean, 'No', null),
      TargetOriginId: new ResourceProperty(String, 'Yes', null),
      TrustedSigners: new ResourceArray(String, 'No', null),
      ViewerProtocolPolicy: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontLogging extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty(String, 'Yes', null),
      IncludeCookies: new ResourceProperty(Boolean, 'No', null),
      Prefix: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOrigin extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CustomOriginConfig: new ResourceProperty(Map, 'Conditional', null),
      DomainName: new ResourceProperty(String, 'Yes', null),
      Id: new ResourceProperty(String, 'Yes', null),
      OriginPath: new ResourceProperty(String, 'No', null),
      S3OriginConfig: new ResourceProperty(Map, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginCustomOrigin extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HTTPPort: new ResourceProperty(String, 'No', null),
      HTTPSPort: new ResourceProperty(String, 'No', null),
      OriginProtocolPolicy: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigOriginS3Origin extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      OriginAccessIdentity: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationRestrictions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GeoRestriction: new ResourceProperty(CloudFrontDistributionConfigRestrictionsGeoRestriction, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigRestrictionsGeoRestriction extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Locations: new ResourceArray(String, 'Conditional', null),
      RestrictionType: new ResourceProperty(String, 'Yes', null),
      blacklist: new ResourceProperty(undefined, 'undefined', null),
      whitelist: new ResourceProperty(undefined, 'undefined', null),
      none: new ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontDistributionConfigurationViewerCertificate extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CloudFrontDefaultCertificate: new ResourceProperty(Boolean, 'Conditional', null),
      IamCertificateId: new ResourceProperty(String, 'Conditional', null),
      MinimumProtocolVersion: new ResourceProperty(String, 'Conditional', null),
      SslSupportMethod: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontForwardedValues extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Cookies: new ResourceProperty(CloudFrontForwardedValuesCookies, 'No', null),
      Headers: new ResourceArray(String, 'No', null),
      QueryString: new ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudFrontForwardedValuesCookies extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Forward: new ResourceProperty(String, 'Yes', null),
      WhitelistedNames: new ResourceArray(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudWatchMetricDimensionPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonCloudWatchEventsRuleTarget extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Arn: new ResourceProperty(String, 'Yes', null),
      Id: new ResourceProperty(String, 'Yes', null),
      Input: new ResourceProperty(String, 'Conditional', null),
      InputPath: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class CloudWatchLogsMetricFilterMetricTransformationProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MetricName: new ResourceProperty(String, 'Yes', null),
      MetricNamespace: new ResourceProperty(String, 'Yes', null),
      MetricValue: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentConfigMinimumHealthyHosts extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new ResourceProperty(String, 'No', null),
      Value: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeployment extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Description: new ResourceProperty(String, 'No', null),
      IgnoreApplicationStopFailures: new ResourceProperty(Boolean, 'No', null),
      Revision: new ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevision, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevision extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GitHubLocation: new ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation, 'No', null),
      RevisionType: new ResourceProperty(String, 'No', null),
      S3Location: new ResourceProperty(AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CommitId: new ResourceProperty(String, 'Yes', null),
      Repository: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty(String, 'Yes', null),
      BundleType: new ResourceProperty(String, 'Yes', null),
      ETag: new ResourceProperty(String, 'No', null),
      Key: new ResourceProperty(String, 'Yes', null),
      Version: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupEc2TagFilters extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'No', null),
      Type: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'No', null),
      Type: new ResourceProperty(String, 'No', null),
      Value: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeArtifactDetails extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MaximumCount: new ResourceProperty(Map, 'Yes', null),
      MinimumCount: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeConfigurationProperties extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Description: new ResourceProperty(String, 'No', null),
      Key: new ResourceProperty(Boolean, 'Yes', null),
      Name: new ResourceProperty(String, 'Yes', null),
      Queryable: new ResourceProperty(Boolean, 'No', null),
      Required: new ResourceProperty(Boolean, 'Yes', null),
      Secret: new ResourceProperty(Boolean, 'Yes', null),
      Type: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelineCustomActionTypeSettings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EntityUrlTemplate: new ResourceProperty(String, 'No', null),
      ExecutionUrlTemplate: new ResourceProperty(String, 'No', null),
      RevisionUrlTemplate: new ResourceProperty(String, 'No', null),
      ThirdPartyConfigurationUrl: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStore extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EncryptionKey: new ResourceProperty(AWSCodePipelinePipelineArtifactStoreEncryptionKey, 'No', null),
      Location: new ResourceProperty(String, 'Yes', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineArtifactStoreEncryptionKey extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Id: new ResourceProperty(String, 'Yes', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineDisableInboundStageTransitions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Reason: new ResourceProperty(String, 'Yes', null),
      StageName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStages extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Actions: new ResourceArray(AWSCodePipelinePipelineStagesActions, 'Yes', null),
      Blockers: new ResourceArray(AWSCodePipelinePipelineStagesBlockers, 'No', null),
      Name: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ActionTypeId: new ResourceProperty(AWSCodePipelinePipelineStagesActionsActionTypeId, 'Yes', null),
      Configuration: new ResourceProperty(Object, 'No', null),
      InputArtifacts: new ResourceArray(AWSCodePipelinePipelineStagesActionsInputArtifacts, 'No', null),
      Name: new ResourceProperty(String, 'Yes', null),
      OutputArtifacts: new ResourceArray(AWSCodePipelinePipelineStagesActionsOutputArtifacts, 'No', null),
      RoleArn: new ResourceProperty(String, 'No', null),
      RunOrder: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsActionTypeId extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Category: new ResourceProperty(String, 'Yes', null),
      Owner: new ResourceProperty(String, 'Yes', null),
      Provider: new ResourceProperty(String, 'Yes', null),
      Version: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsInputArtifacts extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesActionsOutputArtifacts extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCodePipelinePipelineStagesBlockers extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleScope extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ComplianceResourceId: new ResourceProperty(String, 'No', null),
      ComplianceResourceTypes: new ResourceArray(String, 'Conditional', null),
      TagKey: new ResourceProperty(String, 'Conditional', null),
      TagValue: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSource extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Owner: new ResourceProperty(String, 'Yes', null),
      SourceDetails: new ResourceArray(AWSConfigConfigRuleSourceSourceDetails, 'No', null),
      SourceIdentifier: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigRuleSourceSourceDetails extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EventSource: new ResourceProperty(String, 'Yes', null),
      MessageType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigConfigurationRecorderRecordingGroup extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllSupported: new ResourceProperty(Boolean, 'No', null),
      IncludeGlobalResourceTypes: new ResourceProperty(Boolean, 'No', null),
      ResourceTypes: new ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeliveryFrequency: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterObjects extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Attributes: new ResourceProperty(AWSDataPipelineParameterObjectsAttributes, 'Yes', null),
      Id: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelineParameterObjectsAttributes extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      StringValue: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineParameterValues extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Id: new ResourceProperty(String, 'Yes', null),
      StringValue: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelineObjects extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Fields: new ResourceProperty(AWSDataPipelineDataPipelineObjectFields, 'Yes', null),
      Id: new ResourceProperty(String, 'Yes', null),
      Name: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelineDataPipelineObjectFields extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      RefValue: new ResourceProperty(String, 'Conditional', null),
      StringValue: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDataPipelinePipelinePipelineTags extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDirectoryServiceMicrosoftADVpcSettings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SubnetIds: new ResourceArray(String, 'Yes', null),
      VpcId: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSDirectoryServiceSimpleADVpcSettings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SubnetIds: new ResourceArray(String, 'Yes', null),
      VpcId: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBAttributeDefinitions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttributeName: new ResourceProperty(String, 'Yes', null),
      AttributeType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBGlobalSecondaryIndexes extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IndexName: new ResourceProperty(String, 'Yes', null),
      KeySchema: new ResourceProperty(DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceProperty(DynamoDBProjectionObject, 'Yes', null),
      ProvisionedThroughput: new ResourceProperty(DynamoDBProvisionedThroughput, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBKeySchema extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttributeName: new ResourceProperty(String, 'Yes', null),
      KeyType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBLocalSecondaryIndexes extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IndexName: new ResourceProperty(String, 'Yes', null),
      KeySchema: new ResourceProperty(DynamoDBKeySchema, 'Yes', null),
      Projection: new ResourceProperty(DynamoDBProjectionObject, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBProjectionObject extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      NonKeyAttributes: new ResourceArray(String, 'No', null),
      ProjectionType: new ResourceProperty(String, 'No', null),
      KEYS_ONLY: new ResourceProperty(undefined, 'undefined', null),
      INCLUDE: new ResourceProperty(undefined, 'undefined', null),
      ALL: new ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBProvisionedThroughput extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ReadCapacityUnits: new ResourceProperty(Number, 'Yes', null),
      WriteCapacityUnits: new ResourceProperty(Number, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class DynamoDBTableStreamSpecification extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StreamViewType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2BlockDeviceMappingProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty(String, 'Yes', null),
      Ebs: new ResourceProperty(AmazonElasticBlockStoreBlockDeviceProperty, 'Conditional', null),
      NoDevice: new ResourceProperty(Map, 'No', null),
      VirtualName: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticBlockStoreBlockDeviceProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty(Boolean, 'No', null),
      Encrypted: new ResourceProperty(Boolean, 'No', null),
      Iops: new ResourceProperty(Number, 'Conditional', null),
      SnapshotId: new ResourceProperty(String, 'Conditional', null),
      VolumeSize: new ResourceProperty(String, 'Conditional', null),
      VolumeType: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2ICMPPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociationParameters: new ResourceArray(AmazonEC2InstanceSsmAssociationsAssociationParameters, 'No', null),
      DocumentName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2InstanceSsmAssociationsAssociationParameters extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceArray(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2MountPointPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Device: new ResourceProperty(String, 'Yes', null),
      VolumeId: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceEmbeddedPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceProperty(Boolean, 'No', null),
      DeleteOnTermination: new ResourceProperty(Boolean, 'No', null),
      Description: new ResourceProperty(String, 'No', null),
      DeviceIndex: new ResourceProperty(String, 'Yes', null),
      GroupSet: new ResourceArray(String, 'No', null),
      NetworkInterfaceId: new ResourceProperty(String, 'Conditional', null),
      PrivateIpAddress: new ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new ResourceArray(Map, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceProperty(Map, 'No', null),
      SubnetId: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAssociation extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttachmentID: new ResourceProperty(String, 'Yes', null),
      InstanceID: new ResourceProperty(String, 'Yes', null),
      PublicIp: new ResourceProperty(String, 'Yes', null),
      IpOwnerId: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceAttachment extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AttachmentID: new ResourceProperty(String, 'Yes', null),
      InstanceID: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfaceGroupItem extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2NetworkInterfacePrivateIPSpecification extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PrivateIpAddress: new ResourceProperty(String, 'Yes', null),
      Primary: new ResourceProperty(Boolean, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class EC2PortRangePropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class EC2SecurityGroupRulePropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CidrIp: new ResourceProperty(String, 'Conditional', null),
      DestinationSecurityGroupId: new ResourceProperty(String, 'Conditional', null),
      FromPort: new ResourceProperty(Map, 'No', null),
      IpProtocol: new ResourceProperty(String, 'Yes', null),
      SourceSecurityGroupId: new ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupName: new ResourceProperty(String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new ResourceProperty(String, 'Conditional', null),
      ToPort: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigData extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllocationStrategy: new ResourceProperty(String, 'No', null),
      ExcessCapacityTerminationPolicy: new ResourceProperty(String, 'No', null),
      IamFleetRole: new ResourceProperty(String, 'Yes', null),
      LaunchSpecifications: new ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications, 'Yes', null),
      SpotPrice: new ResourceProperty(String, 'Yes', null),
      TargetCapacity: new ResourceProperty(Map, 'Yes', null),
      TerminateInstancesWithExpiration: new ResourceProperty(Boolean, 'No', null),
      ValidFrom: new ResourceProperty(String, 'No', null),
      ValidUntil: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BlockDeviceMappings: new ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings, 'No', null),
      EbsOptimized: new ResourceProperty(Boolean, 'No', null),
      IamInstanceProfile: new ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile, 'No', null),
      ImageId: new ResourceProperty(String, 'Yes', null),
      InstanceType: new ResourceProperty(String, 'Yes', null),
      KernelId: new ResourceProperty(String, 'No', null),
      KeyName: new ResourceProperty(String, 'No', null),
      Monitoring: new ResourceProperty(AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring, 'No', null),
      NetworkInterfaces: new ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces, 'No', null),
      Placement: new ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement, 'No', null),
      RamdiskId: new ResourceProperty(String, 'No', null),
      SecurityGroups: new ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups, 'No', null),
      SubnetId: new ResourceProperty(String, 'No', null),
      UserData: new ResourceProperty(String, 'No', null),
      WeightedCapacity: new ResourceProperty(Number, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeviceName: new ResourceProperty(String, 'Yes', null),
      Ebs: new ResourceProperty(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs, 'Conditional', null),
      NoDevice: new ResourceProperty(Boolean, 'No', null),
      VirtualName: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DeleteOnTermination: new ResourceProperty(Boolean, 'No', null),
      Encrypted: new ResourceProperty(Boolean, 'No', null),
      Iops: new ResourceProperty(Map, 'No', null),
      SnapshotId: new ResourceProperty(String, 'Conditional', null),
      VolumeSize: new ResourceProperty(Map, 'Conditional', null),
      VolumeType: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Arn: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AssociatePublicIpAddress: new ResourceProperty(Boolean, 'No', null),
      DeleteOnTermination: new ResourceProperty(Boolean, 'No', null),
      Description: new ResourceProperty(String, 'No', null),
      DeviceIndex: new ResourceProperty(Map, 'Yes', null),
      Groups: new ResourceArray(String, 'No', null),
      NetworkInterfaceId: new ResourceProperty(String, 'No', null),
      PrivateIpAddresses: new ResourceArray(AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceProperty(Map, 'No', null),
      SubnetId: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Primary: new ResourceProperty(Boolean, 'No', null),
      PrivateIpAddress: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceProperty(String, 'No', null),
      GroupName: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      GroupId: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceDeploymentConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      MaximumPercent: new ResourceProperty(Map, 'No', null),
      MinimumHealthyPercent: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceServiceLoadBalancers extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerName: new ResourceProperty(String, 'No', null),
      ContainerPort: new ResourceProperty(Map, 'Yes', null),
      LoadBalancerName: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Command: new ResourceArray(String, 'No', null),
      Cpu: new ResourceProperty(Map, 'No', null),
      DisableNetworking: new ResourceProperty(Boolean, 'No', null),
      DnsSearchDomains: new ResourceArray(String, 'No', null),
      DnsServers: new ResourceArray(String, 'No', null),
      DockerLabels: new ResourceProperty(Map, 'No', null),
      DockerSecurityOptions: new ResourceArray(String, 'No', null),
      EntryPoint: new ResourceArray(String, 'No', null),
      Environment: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment, 'No', null),
      Essential: new ResourceProperty(Boolean, 'No', null),
      ExtraHosts: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry, 'No', null),
      Hostname: new ResourceProperty(String, 'No', null),
      Image: new ResourceProperty(String, 'Yes', null),
      Links: new ResourceArray(String, 'No', null),
      LogConfiguration: new ResourceProperty(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration, 'No', null),
      Memory: new ResourceProperty(Map, 'Yes', null),
      MountPoints: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints, 'No', null),
      Name: new ResourceProperty(String, 'Yes', null),
      PortMappings: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings, 'No', null),
      Privileged: new ResourceProperty(Boolean, 'No', null),
      ReadonlyRootFilesystem: new ResourceProperty(Boolean, 'No', null),
      Ulimits: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit, 'No', null),
      User: new ResourceProperty(String, 'No', null),
      VolumesFrom: new ResourceArray(AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom, 'No', null),
      WorkingDirectory: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Hostname: new ResourceProperty(String, 'Yes', null),
      IpAddress: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LogDriver: new ResourceProperty(String, 'Yes', null),
      Options: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerPath: new ResourceProperty(String, 'Yes', null),
      SourceVolume: new ResourceProperty(String, 'Yes', null),
      ReadOnly: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContainerPort: new ResourceProperty(Map, 'Yes', null),
      HostPort: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HardLimit: new ResourceProperty(Map, 'Yes', null),
      Name: new ResourceProperty(String, 'No', null),
      SoftLimit: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SourceContainer: new ResourceProperty(String, 'Yes', null),
      ReadOnly: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumes extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      Host: new ResourceProperty(AmazonEC2ContainerServiceTaskDefinitionVolumesHost, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonEC2ContainerServiceTaskDefinitionVolumesHost extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SourcePath: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticFileSystemFileSystemFileSystemTags extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'No', null),
      Value: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkEnvironmentTierPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'No', null),
      Type: new ResourceProperty(String, 'No', null),
      Version: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkOptionSettingsPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Namespace: new ResourceProperty(String, 'Yes', null),
      OptionName: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceBundlePropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new ResourceProperty(String, 'Yes', null),
      S3Key: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticBeanstalkSourceConfigurationPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ApplicationName: new ResourceProperty(String, 'Yes', null),
      TemplateName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingAccessLoggingPolicy extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EmitInterval: new ResourceProperty(Map, 'No', null),
      Enabled: new ResourceProperty(Boolean, 'Yes', null),
      S3BucketName: new ResourceProperty(String, 'Yes', null),
      S3BucketPrefix: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingAppCookieStickinessPolicyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CookieName: new ResourceProperty(String, 'Yes', null),
      PolicyName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionDrainingPolicy extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty(Boolean, 'Yes', null),
      Timeout: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingConnectionSettings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IdleTimeout: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingHealthCheckType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HealthyThreshold: new ResourceProperty(String, 'Yes', null),
      Interval: new ResourceProperty(String, 'Yes', null),
      Target: new ResourceProperty(String, 'Yes', null),
      Timeout: new ResourceProperty(String, 'Yes', null),
      UnhealthyThreshold: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingLBCookieStickinessPolicyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CookieExpirationPeriod: new ResourceProperty(String, 'No', null),
      PolicyName: new ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingListenerPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      InstancePort: new ResourceProperty(String, 'Yes', null),
      InstanceProtocol: new ResourceProperty(String, 'No', null),
      LoadBalancerPort: new ResourceProperty(String, 'Yes', null),
      PolicyNames: new ResourceArray(String, 'No', null),
      Protocol: new ResourceProperty(String, 'Yes', null),
      SSLCertificateId: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class ElasticLoadBalancingPolicyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Attributes: new ResourceArray(Object, 'Yes', null),
      InstancePorts: new ResourceArray(String, 'No', null),
      LoadBalancerPorts: new ResourceArray(String, 'Conditional', null),
      PolicyName: new ResourceProperty(String, 'Yes', null),
      PolicyType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainEBSOptions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EBSEnabled: new ResourceProperty(Boolean, 'No', null),
      Iops: new ResourceProperty(Map, 'No', null),
      VolumeSize: new ResourceProperty(Map, 'No', null),
      VolumeType: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainElasticsearchClusterConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DedicatedMasterCount: new ResourceProperty(Map, 'No', null),
      DedicatedMasterEnabled: new ResourceProperty(Boolean, 'No', null),
      DedicatedMasterType: new ResourceProperty(String, 'No', null),
      InstanceCount: new ResourceProperty(Map, 'No', null),
      InstanceType: new ResourceProperty(String, 'No', null),
      ZoneAwarenessEnabled: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticsearchServiceDomainSnapshotOptions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AutomatedSnapshotStartHour: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterApplication extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AdditionalInfo: new ResourceProperty(Map, 'No', null),
      Args: new ResourceArray(String, 'No', null),
      Name: new ResourceProperty(String, 'No', null),
      Version: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      ScriptBootstrapAction: new ResourceProperty(AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Args: new ResourceArray(String, 'No', null),
      Path: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Classification: new ResourceProperty(String, 'No', null),
      ConfigurationProperties: new ResourceProperty(Map, 'No', null),
      Configurations: new ResourceArray(AmazonElasticMapReduceClusterConfiguration, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AdditionalMasterSecurityGroups: new ResourceArray(String, 'No', null),
      AdditionalSlaveSecurityGroups: new ResourceArray(String, 'No', null),
      CoreInstanceGroup: new ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Ec2KeyName: new ResourceProperty(String, 'No', null),
      Ec2SubnetId: new ResourceProperty(String, 'No', null),
      EmrManagedMasterSecurityGroup: new ResourceProperty(String, 'No', null),
      EmrManagedSlaveSecurityGroup: new ResourceProperty(String, 'No', null),
      HadoopVersion: new ResourceProperty(String, 'No', null),
      MasterInstanceGroup: new ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig, 'Yes', null),
      Placement: new ResourceProperty(AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType, 'No', null),
      ServiceAccessSecurityGroup: new ResourceProperty(String, 'No', null),
      TerminationProtected: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BidPrice: new ResourceProperty(String, 'No', null),
      Configurations: new ResourceArray(AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new ResourceProperty(AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new ResourceProperty(Map, 'Yes', null),
      InstanceType: new ResourceProperty(String, 'Yes', null),
      Market: new ResourceProperty(String, 'No', null),
      Name: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      EbsBlockDeviceConfigs: new ResourceArray(AmazonElasticMapReduceEbsConfiguration, 'No', null),
      EbsOptimized: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      VolumeSpecification: new ResourceProperty(AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, 'Yes', null),
      VolumesPerInstance: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Iops: new ResourceProperty(Map, 'No', null),
      SizeInGB: new ResourceProperty(Map, 'Yes', null),
      VolumeType: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Args: new ResourceArray(String, 'No', null),
      Jar: new ResourceProperty(String, 'Yes', null),
      MainClass: new ResourceProperty(String, 'No', null),
      StepProperties: new ResourceArray(AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'No', null),
      Value: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftAliasRoutingStrategy extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FleetId: new ResourceProperty(String, 'Conditional', null),
      Message: new ResourceProperty(String, 'Conditional', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftBuildStorageLocation extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty(String, 'Yes', null),
      Key: new ResourceProperty(String, 'Yes', null),
      RoleArn: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonGameLiftFleetEC2InboundPermission extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FromPort: new ResourceProperty(Map, 'Yes', null),
      IpRange: new ResourceProperty(String, 'Yes', null),
      Protocol: new ResourceProperty(String, 'Yes', null),
      ToPort: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class IAMPolicies extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PolicyDocument: new ResourceProperty(Object, 'Yes', null),
      PolicyName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new ResourceProperty(String, 'Yes', null),
      PasswordResetRequired: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Enabled: new ResourceProperty(Boolean, 'No', null),
      LogGroupName: new ResourceProperty(String, 'Conditional', null),
      LogStreamName: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BufferingHints: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      DomainARN: new ResourceProperty(String, 'Yes', null),
      IndexName: new ResourceProperty(String, 'Yes', null),
      IndexRotationPeriod: new ResourceProperty(String, 'Yes', null),
      RetryOptions: new ResourceProperty(String, 'undefined', null),
      RoleARN: new ResourceProperty(String, 'Yes', null),
      S3BackupMode: new ResourceProperty(String, 'Yes', null),
      S3Configuration: new ResourceProperty(String, 'undefined', null),
      TypeName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceProperty(Map, 'Yes', null),
      SizeInMBs: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DurationInSeconds: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CloudWatchLoggingOptions: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      ClusterJDBCURL: new ResourceProperty(String, 'Yes', null),
      CopyCommand: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand, 'Yes', null),
      Password: new ResourceProperty(String, 'Yes', null),
      RoleARN: new ResourceProperty(String, 'Yes', null),
      S3Configuration: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Yes', null),
      Username: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CopyOptions: new ResourceProperty(String, 'No', null),
      DataTableColumns: new ResourceProperty(String, 'No', null),
      DataTableName: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BucketARN: new ResourceProperty(String, 'Yes', null),
      BufferingHints: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints, 'Yes', null),
      CloudWatchLoggingOptions: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions, 'No', null),
      CompressionFormat: new ResourceProperty(String, 'Yes', null),
      EncryptionConfiguration: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration, 'No', null),
      Prefix: new ResourceProperty(String, 'Yes', null),
      RoleARN: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceProperty(Map, 'Yes', null),
      SizeInMBs: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AWSKMSKeyARN: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      KMSEncryptionConfig: new ResourceProperty(AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig, 'No', null),
      NoEncryptionConfig: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new ResourceProperty(String, 'Conditional', null),
      S3Key: new ResourceProperty(String, 'Conditional', null),
      S3ObjectVersion: new ResourceProperty(String, 'No', null),
      ZipFile: new ResourceProperty(String, 'Conditional', null),
      event: new ResourceProperty(undefined, 'undefined', null),
      context: new ResourceProperty(undefined, 'undefined', null),
      responseStatus: new ResourceProperty(undefined, 'undefined', null),
      responseData: new ResourceProperty(undefined, 'undefined', null),
      physicalResourceId: new ResourceProperty(undefined, 'undefined', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SecurityGroupIds: new ResourceArray(String, 'Yes', null),
      SubnetIds: new ResourceArray(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class NameType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksAutoScalingThresholdsType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CpuThreshold: new ResourceProperty(Number, 'No', null),
      IgnoreMetricsTime: new ResourceProperty(Map, 'No', null),
      InstanceCount: new ResourceProperty(Map, 'No', null),
      LoadThreshold: new ResourceProperty(Number, 'No', null),
      MemoryThreshold: new ResourceProperty(Number, 'No', null),
      ThresholdsWaitTime: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksChefConfigurationType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      BerkshelfVersion: new ResourceProperty(String, 'No', null),
      ManageBerkshelf: new ResourceProperty(Boolean, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ShutdownEventConfiguration: new ResourceProperty(AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DelayUntilElbConnectionsDrained: new ResourceProperty(Boolean, 'No', null),
      ExecutionTimeout: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksLoadBasedAutoScalingType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DownScaling: new ResourceProperty(AWSOpsWorksAutoScalingThresholdsType, 'No', null),
      Enable: new ResourceProperty(Boolean, 'No', null),
      UpScaling: new ResourceProperty(AWSOpsWorksAutoScalingThresholdsType, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksRecipesType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Configure: new ResourceArray(String, 'No', null),
      Deploy: new ResourceArray(String, 'No', null),
      Setup: new ResourceArray(String, 'No', null),
      Shutdown: new ResourceArray(String, 'No', null),
      Undeploy: new ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksSourceType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new ResourceProperty(String, 'No', null),
      Revision: new ResourceProperty(String, 'No', null),
      SshKey: new ResourceProperty(String, 'No', null),
      Type: new ResourceProperty(String, 'No', null),
      Url: new ResourceProperty(String, 'No', null),
      Username: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksAppEnvironment extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Secure: new ResourceProperty(Boolean, 'No', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksSslConfigurationType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Certificate: new ResourceProperty(String, 'Yes', null),
      Chain: new ResourceProperty(String, 'No', null),
      PrivateKey: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksStackConfigurationManagerType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'No', null),
      Version: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksTimeBasedAutoScalingType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Friday: new ResourceProperty(Map, 'No', null),
      Monday: new ResourceProperty(Map, 'No', null),
      Saturday: new ResourceProperty(Map, 'No', null),
      Sunday: new ResourceProperty(Map, 'No', null),
      Thursday: new ResourceProperty(Map, 'No', null),
      Tuesday: new ResourceProperty(Map, 'No', null),
      Wednesday: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSOpsWorksVolumeConfigurationType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Iops: new ResourceProperty(Map, 'Conditional', null),
      MountPoint: new ResourceProperty(String, 'Yes', null),
      NumberOfDisks: new ResourceProperty(Map, 'Yes', null),
      RaidLevel: new ResourceProperty(Map, 'No', null),
      Size: new ResourceProperty(Map, 'Yes', null),
      VolumeType: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRedshiftParameterType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ParameterName: new ResourceProperty(String, 'Yes', null),
      ParameterValue: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationResourceTagsType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DBSecurityGroupMemberships: new ResourceArray(String, 'No', null),
      OptionName: new ResourceProperty(String, 'Yes', null),
      OptionSettings: new ResourceProperty(AmazonRDSOptionGroupOptionConfigurationsOptionSettings, 'No', null),
      Port: new ResourceProperty(Map, 'No', null),
      VpcSecurityGroupMemberships: new ResourceArray(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSOptionGroupOptionConfigurationsOptionSettings extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'No', null),
      Value: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRDSSecurityGroupRule extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CIDRIP: new ResourceProperty(String, 'No', null),
      EC2SecurityGroupId: new ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class Route53AliasTargetProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DNSName: new ResourceProperty(String, 'Yes', null),
      EvaluateTargetHealth: new ResourceProperty(Boolean, 'No', null),
      HostedZoneId: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53RecordSetGeoLocationProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ContinentCode: new ResourceProperty(String, 'Conditional', null),
      CountryCode: new ResourceProperty(String, 'Conditional', null),
      SubdivisionCode: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckConfig extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FailureThreshold: new ResourceProperty(Map, 'No', null),
      FullyQualifiedDomainName: new ResourceProperty(String, 'Conditional', null),
      IPAddress: new ResourceProperty(String, 'No', null),
      Port: new ResourceProperty(Map, 'Conditional', null),
      RequestInterval: new ResourceProperty(Map, 'No', null),
      ResourcePath: new ResourceProperty(String, 'No', null),
      SearchString: new ResourceProperty(String, 'No', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HealthCheckTags extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneConfigProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Comment: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneTags extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Key: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonRoute53HostedZoneVPCs extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      VPCId: new ResourceProperty(String, 'Yes', null),
      VPCRegion: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CorsRules: new ResourceProperty(AmazonS3CorsConfigurationRule, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfigurationRule extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedHeaders: new ResourceArray(String, 'No', null),
      AllowedMethods: new ResourceArray(String, 'Yes', null),
      AllowedOrigins: new ResourceArray(String, 'Yes', null),
      ExposedHeaders: new ResourceArray(String, 'No', null),
      Id: new ResourceProperty(String, 'No', null),
      MaxAge: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new ResourceProperty(AmazonS3LifecycleRule, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ExpirationDate: new ResourceProperty(String, 'Conditional', null),
      ExpirationInDays: new ResourceProperty(Map, 'Conditional', null),
      Id: new ResourceProperty(String, 'No', null),
      NoncurrentVersionExpirationInDays: new ResourceProperty(Map, 'Conditional', null),
      NoncurrentVersionTransition: new ResourceProperty(AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      NoncurrentVersionTransitions: new ResourceArray(AmazonS3LifecycleRuleNoncurrentVersionTransition, 'Conditional', null),
      Prefix: new ResourceProperty(String, 'No', null),
      Status: new ResourceProperty(String, 'Yes', null),
      Transition: new ResourceProperty(AmazonS3LifecycleRuleTransition, 'Conditional', null),
      Transitions: new ResourceArray(AmazonS3LifecycleRuleTransition, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new ResourceProperty(String, 'Yes', null),
      TransitionInDays: new ResourceProperty(Map, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new ResourceProperty(String, 'Yes', null),
      TransitionDate: new ResourceProperty(String, 'Conditional', null),
      TransitionInDays: new ResourceProperty(Map, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DestinationBucketName: new ResourceProperty(String, 'No', null),
      LogFilePrefix: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LambdaConfigurations: new ResourceProperty(AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, 'No', null),
      QueueConfigurations: new ResourceProperty(AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, 'No', null),
      TopicConfigurations: new ResourceProperty(AmazonS3NotificationConfigurationTopicConfigurations, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Key: new ResourceProperty(AmazonS3NotificationConfigurationConfigFilterS3Key, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new ResourceArray(AmazonS3NotificationConfigurationConfigFilterS3KeyRules, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new ResourceProperty(String, 'Yes', null),
      Filter: new ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Function: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new ResourceProperty(String, 'Yes', null),
      Filter: new ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Queue: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new ResourceProperty(String, 'Yes', null),
      Filter: new ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, 'No', null),
      Topic: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Role: new ResourceProperty(String, 'Yes', null),
      Rules: new ResourceArray(AmazonS3ReplicationConfigurationRules, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Destination: new ResourceProperty(AmazonS3ReplicationConfigurationRulesDestination, 'Yes', null),
      Id: new ResourceProperty(String, 'No', null),
      Prefix: new ResourceProperty(String, 'Yes', null),
      Status: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRulesDestination extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Bucket: new ResourceProperty(String, 'Yes', null),
      StorageClass: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Status: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorDocument: new ResourceProperty(String, 'No', null),
      IndexDocument: new ResourceProperty(String, 'Yes', null),
      RedirectAllRequestsTo: new ResourceProperty(AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, 'No', null),
      RoutingRules: new ResourceArray(AmazonS3WebsiteConfigurationRoutingRulesProperty, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new ResourceProperty(String, 'Yes', null),
      Protocol: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RedirectRule: new ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, 'Yes', null),
      RoutingRuleCondition: new ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new ResourceProperty(String, 'No', null),
      HttpRedirectCode: new ResourceProperty(String, 'No', null),
      Protocol: new ResourceProperty(String, 'No', null),
      ReplaceKeyPrefixWith: new ResourceProperty(String, 'No', null),
      ReplaceKeyWith: new ResourceProperty(String, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new ResourceProperty(String, 'Conditional', null),
      KeyPrefixEquals: new ResourceProperty(String, 'Conditional', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSNSSubscriptionPropertyType extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Endpoint: new ResourceProperty(String, 'Yes', null),
      Protocol: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSQSRedrivePolicy extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      deadLetterTargetArn: new ResourceProperty(String, 'No', null),
      maxReceiveCount: new ResourceProperty(Map, 'No', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuples extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty(AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      PositionalConstraint: new ResourceProperty(String, 'Yes', null),
      TargetString: new ResourceProperty(String, 'Conditional', null),
      TargetStringBase64: new ResourceProperty(String, 'Conditional', null),
      TextTransformation: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFByteMatchSetByteMatchTuplesFieldToMatch extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new ResourceProperty(String, 'Conditional', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFIPSetIPSetDescriptors extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new ResourceProperty(String, 'Yes', null),
      Value: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFRulePredicates extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DataId: new ResourceProperty(String, 'Yes', null),
      Negated: new ResourceProperty(Boolean, 'Yes', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraint extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ComparisonOperator: new ResourceProperty(String, 'Yes', null),
      FieldToMatch: new ResourceProperty(AWSWAFSizeConstraintSetSizeConstraintFieldToMatch, 'Yes', null),
      Size: new ResourceProperty(Map, 'Yes', null),
      TextTransformation: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSizeConstraintSetSizeConstraintFieldToMatch extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new ResourceProperty(String, 'Conditional', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty(AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new ResourceProperty(String, 'Conditional', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTuple extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceProperty(AWSWAFXssMatchSetXssMatchTupleFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFXssMatchSetXssMatchTupleFieldToMatch extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Data: new ResourceProperty(String, 'Conditional', null),
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFWebACLAction extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Type: new ResourceProperty(String, 'Yes', null)
    }
    super(properties, propertiesObject)
  }
}

class AWSWAFWebACLRules extends SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Action: new ResourceProperty(AWSWAFWebACLAction, 'Yes', null),
      Priority: new ResourceProperty(Map, 'Yes', null),
      RuleId: new ResourceProperty(String, 'Yes', null)
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