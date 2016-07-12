'use strict'

const ResourceProperty = require('./resource').ResourceProperty
const ResourceAttributeArray = require('./resourceattribute').ResourceAttributeArray
const ResourceAttribute = require('./resourceattribute').ResourceAttribute

/** @module Types */

/**
* @property RestApiId {String} Required: No. The ID of a RestApi resource that includes the stage with which you want to associate the API key.
* @property StageName {String} Required: No. The name of the stage with which to associate the API key. The stage must be included in the RestApi resource that you specified in the RestApiId property.
*/
class AmazonAPIGatewayApiKeyStageKey extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      RestApiId: new ResourceAttribute('RestApiId', String, 'No', null),
      StageName: new ResourceAttribute('StageName', String, 'No', null)
    }
    super('AmazonAPIGatewayApiKeyStageKey', properties, propertiesObject)
  }
}

/**
* @property CacheClusterEnabled {Boolean} Required: No. Indicates whether cache clustering is enabled for the stage.
* @property CacheClusterSize {String} Required: No. The size of the stage's cache cluster.
* @property CacheDataEncrypted {Boolean} Required: No. Indicates whether the cached responses are encrypted.
* @property CacheTtlInSeconds {Number} Required: No. The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
* @property CachingEnabled {Boolean} Required: No. Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see Enable API Gateway Caching in a Stage to Enhance API Performance in the API Gateway Developer Guide.
* @property ClientCertificateId {String} Required: No. The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
* @property DataTraceEnabled {Boolean} Required: No. Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
* @property Description {String} Required: No. A description of the purpose of the stage.
* @property LoggingLevel {String} Required: No. The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.
* @property MethodSettings {AmazonAPIGatewayDeploymentStageDescriptionMethodSetting} Required: No. Configures settings for all of the stage's methods.
* @property MetricsEnabled {Boolean} Required: No. Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
* @property StageName {String} Required: No. The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).
* @property ThrottlingBurstLimit {Number} Required: No. The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
* @property ThrottlingRateLimit {Number} Required: No. The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
* @property Variables {Map} Required: No. A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.
*/
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

/**
* @property CacheDataEncrypted {Boolean} Required: No. Indicates whether the cached responses are encrypted.
* @property CacheTtlInSeconds {Number} Required: No. The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
* @property CachingEnabled {Boolean} Required: No. Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see Enable API Gateway Caching in a Stage to Enhance API Performance in the API Gateway Developer Guide.
* @property DataTraceEnabled {Boolean} Required: No. Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
* @property HttpMethod {String} Required: No. The HTTP method.
* @property LoggingLevel {String} Required: No. The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.
* @property MetricsEnabled {Boolean} Required: No. Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
* @property ResourcePath {String} Required: No. The resource path for this method. Forward slashes (/) are encoded as ~1 and the initial slash must include a forward slash. For example, the path value /resource/subresource must be encoded as /~1resource~1subresource. To specify the root path, use only a slash (/).
* @property ThrottlingBurstLimit {Number} Required: No. The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
* @property ThrottlingRateLimit {Number} Required: No. The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
*/
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

/**
* @property CacheKeyParameters {String} Required: No. A list of request parameters whose values API Gateway will cache.
* @property CacheNamespace {String} Required: No. An API-specific tag group of related cached parameters.
* @property Credentials {String} Required: No. The credentials required for the integration. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::\*:user/\*.To use resource-based permissions on the AWS Lambda (Lambda) function, don't specify this property. Use the AWS::Lambda::Permission resource to permit API Gateway to call the function. For more information, see Example 2: Grant Amazon API Gateway Permissions to Invoke Your Lambda Function in the AWS Lambda Developer Guide.
* @property IntegrationHttpMethod {String} Required: Conditional. The integration's HTTP method type.
* @property IntegrationResponses {AmazonAPIGatewayMethodIntegrationIntegrationResponse} Required: No. The response that API Gateway provides after a method's back end completes processing a request. API Gateway intercepts the back end's response so that you can control how API Gateway surfaces back-end responses. For example, you can map the back-end status codes to codes that you define.
* @property RequestParameters {Map} Required: No. The request parameters that API Gateway sends with the back-end request. Specify request parameters as key-value pairs (string-to-string maps), with a destination as the key and a source as the value.Specify the destination using the following pattern integration.request.location.name, where location is  querystring, path, or header, and name is a valid, unique parameter name.The source must be an existing method request parameter or a static value. Static values must be enclosed in single quotation marks and pre-encoded based on their destination in the request.
* @property RequestTemplates {Map} Required: No. A map of Apache Velocity templates that are applied on the request payload. The template that API Gateway uses is based on the value of the Content-Type header sent by the client. The content type value is the key, and the template is the value (specified as a string), such as the following snippet:For more information about templates, see API Gateway API Request and Response Payload-Mapping Template Reference in the API Gateway Developer Guide.
* @property Type {String} Required: Yes. The type of back end your method is running, such as HTTP, AWS (for Lambda functions), or MOCK.
* @property Uri {String} Required: Conditional. The integration's Uniform Resource Identifier (URI).If you specify HTTP for the Type property, specify the API endpoint URL.If you specify MOCK for the Type property, don't specify this property.If you specify AWS for the Type property, specify an AWS service that follows the form: arn:aws:apigateway:region:subdomain.service|service:path|action/service_api. For example, a Lambda function URI follows the form:                 arn:aws:apigateway:region:lambda:path/path. The path is usually in the form /2015-03-31/functions/LambdaFunctionARN/invocations. For more information, see the uri property of the Integration resource in the Amazon API Gateway REST API Reference.
*/
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

/**
* @property ResponseParameters {Map} Required: No. The response parameters from the back-end response that API Gateway sends to the method response. Specify response parameters as key-value pairs (string-to-string maps), with a destination as the key and a source as the value. For more information, see API Gateway API Request and Response Parameter-Mapping Reference in the API Gateway Developer Guide.The destination must be an existing response parameter in the MethodResponse property.The source must be an existing method request parameter or a static value. Static values must be enclosed in single quotation marks and pre-encoded based on their destination in the request.
* @property ResponseTemplates {Map} Required: No. The templates used to transform the integration response body. Specify templates as key-value pairs (string-to-string maps), with a content type as the key and a template as the value. For more information, see API Gateway API Request and Response Payload-Mapping Template Reference in the API Gateway Developer Guide.
* @property SelectionPattern {String} Required: No. A regular expression that specifies which error strings or status codes from the back end map to the integration response.
* @property StatusCode {String} Required: No. The status code that API Gateway uses to map the integration response to a MethodResponse status code.
*/
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

/**
* @property ResponseModels {Map} Required: No. The resources used for the response's content type. Specify response models as key-value pairs (string-to-string maps), with a content type as the key and a Model resource name as the value.
* @property ResponseParameters {Map} Required: No. Response parameters that API Gateway sends to the client that called a method. Specify response parameters as key-value pairs (string-to-Boolean maps), with a destination as the key and a Boolean as the value. Specify the destination using the following pattern: method.response.header.name, where the name is a valid, unique header name. The Boolean specifies whether a parameter is required.
* @property StatusCode {String} Required: Yes. The method response's status code, which you map to an IntegrationResponse.
*/
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

/**
* @property Bucket {String} Required: No. The name of the S3 bucket where the Swagger file is stored.
* @property ETag {String} Required: No. The Amazon S3 ETag (a file checksum) of the Swagger file. If you don't specify a value, API Gateway skips ETag validation of your Swagger file.
* @property Key {String} Required: No. The file name of the Swagger file (Amazon S3 object name).
* @property Version {String} Required: No. For versioning-enabled buckets, a specific version of the Swagger file.
*/
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

/**
* @property CacheDataEncrypted {Boolean} Required: No. Indicates whether the cached responses are encrypted.
* @property CacheTtlInSeconds {Number} Required: No. The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
* @property CachingEnabled {Boolean} Required: No. Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses.
* @property DataTraceEnabled {Boolean} Required: No. Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
* @property HttpMethod {String} Required: Yes. The HTTP method.
* @property LoggingLevel {String} Required: No. The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.
* @property MetricsEnabled {Boolean} Required: No. Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
* @property ResourcePath {String} Required: Yes. The resource path for this method. Forward slashes (/) are encoded as ~1 and the initial slash must include a forward slash. For example, the path value /resource/subresource must be encoded as /~1resource~1subresource. To specify the root path, use only a slash (/).
* @property ThrottlingBurstLimit {Number} Required: No. The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
* @property ThrottlingRateLimit {Number} Required: No. The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
*/
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

/**
* @property DeviceName {String} Required: Yes. The name of the device within Amazon EC2.
* @property Ebs {AWSCloudFormationAutoScalingEBSBlockDevicePropertyType} Required: Conditional. The Amazon Elastic Block Store volume information.
* @property NoDevice {Boolean} Required: No. Suppresses the device mapping. If NoDevice is set to true for the                   root device, the instance might fail the Amazon EC2 health check. Auto Scaling launches a                   replacement instance if the instance fails the health check.
* @property VirtualName {String} Required: Conditional. The name of the virtual device. The name must be in the form                         ephemeralX                    where X is a number starting from zero (0), for                   example, ephemeral0.
*/
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

/**
* @property DeleteOnTermination {Boolean} Required: No. Indicates whether to delete the volume when the instance is terminated. By                   default, Auto Scaling uses true.
* @property Encrypted {Boolean} Required: No. Indicates whether the volume is encrypted. Encrypted EBS volumes must be                   attached to instances that support Amazon EBS encryption. Volumes that you create from                   encrypted snapshots are automatically encrypted. You cannot create an encrypted                   volume from an unencrypted snapshot or an unencrypted volume from an encrypted                   snapshot.
* @property Iops {Number} Required: No. The number of I/O operations per second (IOPS) that the volume supports. The                   maximum ratio of IOPS to volume size is 30.
* @property SnapshotId {String} Required: Conditional. The snapshot ID of the volume to use.
* @property VolumeSize {Number} Required: Conditional. The volume size, in Gibibytes (GiB). This can be a number from 1 – 1024.                   If the volume type is EBS optimized, the minimum value is 10. For more information                   about specifying the volume type, see EbsOptimized in AWS::AutoScaling::LaunchConfiguration.Update requires: Some interruptions
* @property VolumeType {String} Required: No. The volume type. By default, Auto Scaling uses the standard volume type.                   For more information, see Ebs in the Auto Scaling API Reference.
*/
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

/**
* @property Granularity {String} Required: Yes. The frequency at which Auto Scaling sends aggregated data to CloudWatch. For example, you can                   specify 1Minute to send aggregated data to CloudWatch every minute.
* @property Metrics {String} Required: No. The list of metrics to collect. If you don't specify any metrics, all metrics                   are enabled.
*/
class AutoScalingMetricsCollection extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Granularity: new ResourceAttribute('Granularity', String, 'Yes', null),
      Metrics: new ResourceAttributeArray('Metrics', String, 'No', null)
    }
    super('AutoScalingMetricsCollection', properties, propertiesObject)
  }
}

/**
* @property NotificationTypes {String} Required: Yes. A list of event types that trigger a notification. Event types can include any                   of the following types: autoscaling:EC2_INSTANCE_LAUNCH,                      autoscaling:EC2_INSTANCE_LAUNCH_ERROR,                      autoscaling:EC2_INSTANCE_TERMINATE,                      autoscaling:EC2_INSTANCE_TERMINATE_ERROR, and                      autoscaling:TEST_NOTIFICATION. For more information about event                   types, see DescribeAutoScalingNotificationTypes in the                      Auto Scaling API Reference.
* @property TopicARN {String} Required: Yes. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)                   topic.
*/
class AutoScalingNotificationConfigurations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      NotificationTypes: new ResourceAttributeArray('NotificationTypes', String, 'Yes', null),
      TopicARN: new ResourceAttribute('TopicARN', String, 'Yes', null)
    }
    super('AutoScalingNotificationConfigurations', properties, propertiesObject)
  }
}

/**
* @property MetricIntervalLowerBound {Number} Required: No. The lower bound for the difference between the breach threshold and the CloudWatch                   metric. If the metric value exceeds the breach threshold, the lower bound is                   inclusive (the metric must be greater than or equal to the threshold plus the                   lower bound). Otherwise, it is exclusive (the metric must be greater than the                   threshold plus the lower bound). A null value indicates negative infinity.
* @property MetricIntervalUpperBound {Number} Required: No. The upper bound for the difference between the breach threshold and the CloudWatch                   metric. If the metric value exceeds the breach threshold, the upper bound is                   exclusive (the metric must be less than the threshold plus the upper bound).                   Otherwise, it is inclusive (the metric must be less than or equal to the threshold                   plus the upper bound). A null value indicates positive infinity.
* @property ScalingAdjustment {Number} Required: Yes. The amount by which to scale, based on the value that you specified in the                      AdjustmentType property. A positive value adds to the current                   capacity and a negative number subtracts from the current capacity.
*/
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

/**
* @property Key {String} Required: Yes. The key name of the tag.
* @property Value {String} Required: Yes. The value for the tag.
* @property PropagateAtLaunch {Boolean} Required: Yes. Set to true if you want AWS CloudFormation to copy the tag to EC2 instances that are launched as                   part of the auto scaling group. Set to false if you want the tag attached only to the                   auto scaling group and not copied to any instances launched as part of the auto scaling                   group.
*/
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

/**
*/
class CloudFormationStackParametersPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('CloudFormationStackParametersPropertyType', properties, propertiesObject)
  }
}

/**
* @property default {String} Required: No. The default label that the AWS CloudFormation console uses to name a parameter group or                   parameter.
*/
class AWSCloudFormationInterfaceLabel extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      default: new ResourceAttribute('default', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceLabel', properties, propertiesObject)
  }
}

/**
* @property Label {AWSCloudFormationInterfaceLabel} Required: No. A name for the parameter group.
* @property Parameters {String} Required: No. A list of case-sensitive parameter logical IDs to include in the group.                   Parameters must already be defined in the Parameters section of the                   template. A parameter can be included in only one parameter group.The console lists the parameters that you don't associate with a parameter                   group  in alphabetical order in the Other parameters group.
*/
class AWSCloudFormationInterfaceParameterGroup extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Label: new ResourceAttribute('Label', AWSCloudFormationInterfaceLabel, 'No', null),
      Parameters: new ResourceAttributeArray('Parameters', String, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterGroup', properties, propertiesObject)
  }
}

/**
* @property ParameterLogicalID {AWSCloudFormationInterfaceLabel} Required: No. A label for a parameter. The label defines a friendly name or description that                   the AWS CloudFormation console shows on the Specify Parameters page when a                   stack is created or updated. The                         ParameterLogicalID key must be the                   case-sensitive logical ID of a valid parameter that has been declared in the                      Parameters section of the template.
*/
class AWSCloudFormationInterfaceParameterLabel extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ParameterLogicalID: new ResourceAttribute('ParameterLogicalID', AWSCloudFormationInterfaceLabel, 'No', null)
    }
    super('AWSCloudFormationInterfaceParameterLabel', properties, propertiesObject)
  }
}

/**
* @property Aliases {String} Required: No. CNAMEs (alternate domain names), if any, for the distribution.
* @property CacheBehaviors {CloudFrontDistributionConfigCacheBehavior} Required: No. A list of CacheBehavior types for the distribution.
* @property Comment {String} Required: No. Any comments that you want to include about the distribution.
* @property CustomErrorResponses {CloudFrontDistributionConfigCustomErrorResponse} Required: No. Whether CloudFront replaces HTTP status codes in the 4xx and                      5xx range with custom error messages before returning the response                   to the viewer.
* @property DefaultCacheBehavior {CloudFrontDefaultCacheBehavior} Required: Yes. The default cache behavior that is triggered if you do not specify the                      CacheBehavior property or if files don't match any of the values                   of PathPattern in the CacheBehavior property.
* @property DefaultRootObject {String} Required: No. The object (such as index.html) that you want CloudFront to request from                   your origin when the root URL for your distribution (such as                      http://example.com/) is requested.NoteSpecifying a default root object avoids exposing the contents of your distribution.
* @property Enabled {Boolean} Required: Yes. Controls whether the distribution is enabled to accept end user requests for content.
* @property Logging {CloudFrontLogging} Required: No. Controls whether access logs are written for the distribution. To turn on                   access logs, specify this property.
* @property Origins {CloudFrontDistributionConfigOrigin} Required: Yes. A list of origins for this CloudFront distribution. For each origin, you can specify                   whether it is an Amazon S3 or custom origin.
* @property PriceClass {String} Required: No. The price class that corresponds with the maximum price that you want to pay                   for the CloudFront service. For more information, see Choosing the Price Class in the                      Amazon CloudFront Developer Guide.For more information about the constraints and valid values, see the PriceClass element for the DistributionConfig Complex Type data type in the Amazon CloudFront API Reference.
* @property Restrictions {CloudFrontDistributionConfigurationRestrictions} Required: No. Specifies restrictions on who or how viewers can access your content.
* @property ViewerCertificate {CloudFrontDistributionConfigurationViewerCertificate} Required: No. The certificate to use when viewers use HTTPS to request objects.
* @property WebACLId {String} Required: No. The AWS WAF web ACL to associate                   with this distribution. AWS WAF is a web application firewall that enables you to                   monitor the HTTP and HTTPS requests that are forwarded to CloudFront and to control who                   can access your content. CloudFront permits or forbids requests based on conditions that                   you specify, such as the IP addresses from which requests originate or the values                   of query strings.
*/
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

/**
* @property AllowedMethods {String} Required: No. HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your                   custom origin. You can specify ["HEAD", "GET"], ["GET", "HEAD",                      "OPTIONS"], or ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH",                      "POST", "PUT"]. If you don't specify a value, AWS CloudFormation specifies                      ["HEAD", "GET"].
* @property CachedMethods {String} Required: No. HTTP methods for which CloudFront caches responses. You can specify ["HEAD",                      "GET"] or ["GET", "HEAD", "OPTIONS"]. If you don't specify                   a value, AWS CloudFormation specifies ["HEAD", "GET"].
* @property Compress {Boolean} Required: No. Indicates whether CloudFront automatically compresses certain files for this cache                   behavior. For more information, see Serving Compressed Files                   in the Amazon CloudFront Developer Guide.
* @property DefaultTTL {Number} Required: No. The default time in seconds that objects stay in CloudFront caches before CloudFront                   forwards another request to your custom origin to determine whether the object has                   been updated. This value applies only when your custom origin does not add HTTP                   headers, such as Cache-Control max-age, Cache-Control                      s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 86400 seconds (one day). If the value                   of the MinTTL property is greater than the default value, CloudFront uses                   the minimum Time to Live (TTL) value.
* @property ForwardedValues {CloudFrontForwardedValues} Required: Yes. Specifies how CloudFront handles query strings or cookies.
* @property MaxTTL {Number} Required: No. The maximum time in seconds that objects stay in CloudFront caches before CloudFront forwards                   another request to your custom origin to determine whether the object has been                   updated. This value applies only when your custom origin does not add HTTP                   headers, such as Cache-Control max-age, Cache-Control                      s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 31536000 seconds (one year). If the value             of the MinTTL or DefaultTTL property is greater than the             maximum value, CloudFront uses the default TTL value.
* @property MinTTL {Number} Required: No. The minimum amount of time that you want objects to stay in the cache before                   CloudFront queries your origin to see whether the object has been updated.
* @property PathPattern {String} Required: Yes. The pattern to which this cache behavior applies. For example, you can specify                      images/*.jpg.When CloudFront receives an end-user request, CloudFront compares the requested path with                   path patterns in the order in which cache behaviors are listed in the                   template.
* @property SmoothStreaming {Boolean} Required: No. Indicates whether to use the origin that is associated with this cache behavior                   to distribute media files in the Microsoft Smooth Streaming format. If you specify                      true, you can still use this cache behavior to distribute other                   content if the content matches the PathPattern value.
* @property TargetOriginId {String} Required: Yes. The ID value of the origin to which you want CloudFront to route requests when a                   request matches the value of the PathPattern property.
* @property TrustedSigners {String} Required: No. A list of AWS accounts that can create signed URLs in order to access private                   content.
* @property ViewerProtocolPolicy {String} Required: Yes. The protocol that users can use to access the files in the origin that you                   specified in the TargetOriginId property when a request matches the                   value of the PathPattern property. For more information about the                   valid values, see the ViewerProtocolPolicy elements in the DistributionConfig Complex Type topic in the                      Amazon CloudFront API Reference.
*/
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

/**
* @property ErrorCachingMinTTL {Number} Required: No. The minimum amount of time, in seconds, that Amazon CloudFront caches the HTTP status code                   that you specified in the ErrorCode property. The default value is                      300.
* @property ErrorCode {Number} Required: Yes. An HTTP status code for which you want to specify a custom error page. You can                   specify 400, 403, 404, 405,                      414, 500, 501, 502,                      503, or 504.
* @property ResponseCode {Number} Required: Conditional. The HTTP status code that CloudFront returns to viewer along with the custom error                   page. You can specify 200, 400, 403,                      404, 405, 414, 500,                      501, 502, 503, or                   504.
* @property ResponsePagePath {String} Required: Conditional. The path to the custom error page that CloudFront returns to a viewer when your                   origin returns the HTTP status code that you specified in the                      ErrorCode property. For example, you can specify                      /404-errors/403-forbidden.html.
*/
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

/**
* @property AllowedMethods {String} Required: No. HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your                   custom origin. In AWS CloudFormation templates, you can specify ["HEAD", "GET"],                      ["GET", "HEAD", "OPTIONS"], or ["DELETE", "GET", "HEAD",                      "OPTIONS", "PATCH", "POST", "PUT"]. If you don't specify a value, AWS CloudFormation                   specifies ["HEAD", "GET"].
* @property CachedMethods {String} Required: No. HTTP methods for which CloudFront caches responses. In AWS CloudFormation templates, you can                   specify ["HEAD", "GET"] or ["GET", "HEAD", "OPTIONS"].                   If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].
* @property Compress {Boolean} Required: No. Indicates whether CloudFront automatically compresses certain files for this cache                   behavior. For more information, see Serving Compressed Files                   in the Amazon CloudFront Developer Guide.
* @property DefaultTTL {Number} Required: No. The default time in seconds that objects stay in CloudFront caches before CloudFront                   forwards another request to your custom origin to determine whether the object has                   been updated. This value applies only when your custom origin does not add HTTP                   headers, such as Cache-Control max-age, Cache-Control                      s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 86400 seconds (one day). If the value                   of the MinTTL property is greater than the default value, CloudFront uses                   the minimum Time To Live (TTL) value.
* @property ForwardedValues {CloudFrontForwardedValues} Required: Yes. Specifies how CloudFront handles query strings or cookies.
* @property MaxTTL {Number} Required: No. The maximum time in seconds that objects stay in CloudFront caches before CloudFront                   forwards another request to your custom origin to determine whether the object has                   been updated. This value applies only when your custom origin does not add HTTP                   headers, such as Cache-Control max-age, Cache-Control                      s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 31536000 seconds (one year). If the                   value of the MinTTL or DefaultTTL property is greater                   than the maximum value, CloudFront uses the default TTL value.
* @property MinTTL {String} Required: No. The minimum amount of time that you want objects to stay in the cache before                   CloudFront queries your origin to see whether the object has been updated.
* @property SmoothStreaming {Boolean} Required: No. Indicates whether to use the origin that is associated with this cache behavior                   to distribute media files in the Microsoft Smooth Streaming format.
* @property TargetOriginId {String} Required: Yes. The value of ID for the origin that CloudFront routes requests to when the default                   cache behavior is applied to a request.
* @property TrustedSigners {String} Required: No. A list of AWS accounts that can create signed URLs in order to access private                   content.
* @property ViewerProtocolPolicy {String} Required: Yes. The protocol that users can use to access the files in the origin that you                   specified in the TargetOriginId property when the default cache                   behavior is applied to a request. For valid values, see the                      ViewerProtocolPolicy element of the DistributionConfig Complex Type in the                      Amazon CloudFront API Reference.
*/
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

/**
* @property Bucket {String} Required: Yes. The Amazon S3 bucket address where access logs are stored, for example,                      mybucket.s3.amazonaws.com.
* @property IncludeCookies {Boolean} Required: No. Indicates whether CloudFront includes cookies in access logs.
* @property Prefix {String} Required: No. A prefix for the access log file names for this distribution.
*/
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

/**
* @property CustomOriginConfig {CloudFrontDistributionConfigOriginCustomOrigin} Required: Conditional. Origin information to specify a custom origin.
* @property DomainName {String} Required: Yes. The DNS name of the Amazon Simple Storage Service (S3) bucket or the HTTP server from which you want                   CloudFront to get objects for this origin.
* @property Id {String} Required: Yes. An identifier for the origin. The value of Id must be unique                   within the distribution.
* @property OriginPath {String} Required: No. The path that CloudFront uses to request content from an S3 bucket or custom origin.                   The combination of the DomainName and OriginPath                   properties must resolve to a valid path. The value must start with a slash mark                      (/) and cannot end with a slash mark.
* @property S3OriginConfig {CloudFrontDistributionConfigOriginS3Origin} Required: Conditional. Origin information to specify an S3 origin.
*/
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

/**
* @property HTTPPort {String} Required: No. The HTTP port the custom origin listens on.
* @property HTTPSPort {String} Required: No. The HTTPS port the custom origin listens on.
* @property OriginProtocolPolicy {String} Required: Yes. The origin protocol policy to apply to your origin.
*/
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

/**
* @property OriginAccessIdentity {String} Required: No. The CloudFront origin access identity to associate with the origin. This is used to                   configure the origin so that end users can access objects in an Amazon S3 bucket                   through CloudFront only.
*/
class CloudFrontDistributionConfigOriginS3Origin extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      OriginAccessIdentity: new ResourceAttribute('OriginAccessIdentity', String, 'No', null)
    }
    super('CloudFrontDistributionConfigOriginS3Origin', properties, propertiesObject)
  }
}

/**
* @property GeoRestriction {CloudFrontDistributionConfigRestrictionsGeoRestriction} Required: Yes. The countries in which viewers are able to access your content.
*/
class CloudFrontDistributionConfigurationRestrictions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      GeoRestriction: new ResourceAttribute('GeoRestriction', CloudFrontDistributionConfigRestrictionsGeoRestriction, 'Yes', null)
    }
    super('CloudFrontDistributionConfigurationRestrictions', properties, propertiesObject)
  }
}

/**
* @property Locations {String} Required: Conditional. The two-letter, uppercase country code for a country that you want to include                   in your blacklist or whitelist.
* @property RestrictionType {String} Required: Yes. The method to restrict distribution of your content:Prevents viewers in the countries that you specified from accessing                               your content.Allows viewers in the countries that you specified to access your                               content.No distribution restrictions by country.
* @property blacklist {undefined} Required: undefined. Prevents viewers in the countries that you specified from accessing                               your content.
* @property whitelist {undefined} Required: undefined. Allows viewers in the countries that you specified to access your                               content.
* @property none {undefined} Required: undefined. No distribution restrictions by country.
*/
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

/**
* @property CloudFrontDefaultCertificate {Boolean} Required: Conditional. Indicates whether to use the default certificate for your CloudFront domain name when                   viewers use HTTPS to request your content.
* @property IamCertificateId {String} Required: Conditional. If you're using an alternate domain name, the ID of a server certificate. This ID is the ServerCertificateId value, which AWS Identity and Access Management (IAM) returns when you add the certificate to the IAM certificate store, such as ASCACKCEVSQ6CEXAMPLE1.
* @property MinimumProtocolVersion {String} Required: Conditional. The minimum version of the SSL protocol that you want CloudFront to use for HTTPS                   connections. CloudFront serves your objects only to browsers or devices that support at                   least the SSL version that you specify.If you specify the IamCertificateId property and specify SNI only                   for the SslSupportMethod property, you must use TLSv1                   for the minimum protocol version. If you don't specify a value, AWS CloudFormation specifies                      SSLv3.
* @property SslSupportMethod {String} Required: Conditional. Specifies how CloudFront serves HTTPS requests.
*/
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

/**
* @property Cookies {CloudFrontForwardedValuesCookies} Required: No. Forwards specified cookies to the origin of the cache behavior.
* @property Headers {String} Required: No. Specifies the headers that you want Amazon CloudFront to forward to the origin for this                   cache behavior (whitelisted headers). For the headers that you specify, Amazon CloudFront                   also caches separate versions of a specified object that is based on the header                   values in viewer requests.If you specify a single asterisk (["*"]), all headers are                   forwarded. If you don't specify a value, only the default headers are                   forwarded.
* @property QueryString {Boolean} Required: Yes. Indicates whether you want CloudFront to forward query strings to the origin that is                   associated with this cache behavior. If so, specify true; if not,                   specify false.
*/
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

/**
* @property Forward {String} Required: Yes. The cookies to forward to the origin of the cache behavior. You can specify                      none, all, or whitelist.
* @property WhitelistedNames {String} Required: Conditional. The names of cookies to forward to the origin for the cache behavior.
*/
class CloudFrontForwardedValuesCookies extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Forward: new ResourceAttribute('Forward', String, 'Yes', null),
      WhitelistedNames: new ResourceAttributeArray('WhitelistedNames', String, 'Conditional', null)
    }
    super('CloudFrontForwardedValuesCookies', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: Yes. The name of the dimension, from 1–255 characters in length.
* @property Value {String} Required: Yes. The value representing the dimension measurement, from 1–255 characters in length.
*/
class CloudWatchMetricDimensionPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('CloudWatchMetricDimensionPropertyType', properties, propertiesObject)
  }
}

/**
* @property Arn {String} Required: Yes. The Amazon Resource Name (ARN) of the target.
* @property Id {String} Required: Yes. A unique identifier for the target.
* @property Input {String} Required: Conditional. A JSON-formatted text string that is passed to the target. This value overrides the matched event.
* @property InputPath {String} Required: Conditional. When you don't want to pass the entire matched event, the JSONPath that describes which part of the event to pass to the target.
*/
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

/**
* @property MetricName {String} Required: Yes. The name of the CloudWatch metric to which the log information will be                   published.
* @property MetricNamespace {String} Required: Yes. The destination namespace of the CloudWatch metric. Namespaces are containers for                   metrics. For example, you can add related metrics in the same namespace.
* @property MetricValue {String} Required: Yes. The value that is published to the CloudWatch metric. For example, if you're counting                   the occurrences of a particular term like Error, specify                      1 for the metric value. If you're counting the number of bytes                   transferred, reference the value that is in the log event by using $                   followed by the name of the field that you specified in the filter pattern, such                   as $size.
*/
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

/**
* @property Type {String} Required: No. The type of count to use, such as an absolute value or a percentage of the                   total number of instances in the deployment. For valid values, see MinimumHealthyHosts in                   the AWS CodeDeploy API Reference.
* @property Value {Number} Required: No. The minimum number of healthy instances.
*/
class AWSCodeDeployDeploymentConfigMinimumHealthyHosts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'No', null),
      Value: new ResourceAttribute('Value', Number, 'No', null)
    }
    super('AWSCodeDeployDeploymentConfigMinimumHealthyHosts', properties, propertiesObject)
  }
}

/**
* @property Description {String} Required: No. A description about this deployment.
* @property IgnoreApplicationStopFailures {Boolean} Required: No. Whether to continue the deployment if the                      ApplicationStop deployment lifecycle event fails. If you                   want AWS CodeDeploy to continue the deployment lifecycle even if the                      ApplicationStop event fails on an instance, specify                      true. The deployment continues to the BeforeInstall                   deployment lifecycle event. If you want AWS CodeDeploy to stop deployment on the instance                   if the ApplicationStop event fails, specify false or do                   not specify a value.
* @property Revision {AWSCodeDeployDeploymentGroupDeploymentRevision} Required: Yes. The location of the application revision to deploy.
*/
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

/**
* @property GitHubLocation {AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation} Required: No. If your application revision is stored in GitHub, information about the                   location where it is stored.
* @property RevisionType {String} Required: No. The application revision's location, such as in an S3 bucket or GitHub                   repository. For valid values, see RevisionLocation in the                      AWS CodeDeploy API Reference.
* @property S3Location {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location} Required: No. If the application revision is stored in an S3 bucket, information about the                   location.
*/
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

/**
* @property CommitId {String} Required: Yes. The SHA1 commit ID of the GitHub commit to use as your application                   revision.
* @property Repository {String} Required: Yes. The GitHub account and repository name that includes the application revision.                   Specify the value as                         account/repository_name.
*/
class AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CommitId: new ResourceAttribute('CommitId', String, 'Yes', null),
      Repository: new ResourceAttribute('Repository', String, 'Yes', null)
    }
    super('AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation', properties, propertiesObject)
  }
}

/**
* @property Bucket {String} Required: Yes. The name of the S3 bucket where the application revision is stored.
* @property BundleType {String} Required: Yes. The file type of the application revision, such as tar,                      tgz, or zip. For valid values, see S3Location in the                      AWS CodeDeploy API Reference.
* @property ETag {String} Required: No. The Amazon S3 ETag (a file checksum) of the application revision. If you don't                   specify a value, AWS CodeDeploy skips the ETag validation of your application                   revision.
* @property Key {String} Required: Yes. The file name of the application revision (Amazon S3 object name).
* @property Version {String} Required: No. For versioning-enabled buckets, a specific version of the application                   revision.
*/
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

/**
* @property Key {String} Required: No. Filter instances with this key.
* @property Type {String} Required: Yes. The filter type. For example, you can filter instances by the key, tag value,                   or both. For valid values, see EC2TagFilter in the AWS CodeDeploy API Reference.
* @property Value {String} Required: No. Filter instances with this tag value.
*/
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

/**
* @property Key {String} Required: No. Filter on-premises instances with this key.
* @property Type {String} Required: No. The filter type. For example, you can filter on-premises instances by the key,                   tag value, or both. For valid values, see EC2TagFilter in the                      AWS CodeDeploy API Reference.
* @property Value {String} Required: No. Filter on-premises instances with this tag value.
*/
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

/**
* @property MaximumCount {Number} Required: Yes. The maximum number of artifacts allowed for the action type.
* @property MinimumCount {Number} Required: Yes. The minimum number of artifacts allowed for the action type.
*/
class AWSCodePipelineCustomActionTypeArtifactDetails extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MaximumCount: new ResourceAttribute('MaximumCount', Number, 'Yes', null),
      MinimumCount: new ResourceAttribute('MinimumCount', Number, 'Yes', null)
    }
    super('AWSCodePipelineCustomActionTypeArtifactDetails', properties, propertiesObject)
  }
}

/**
* @property Description {String} Required: No. A description of this configuration property that will be displayed to                   users.
* @property Key {Boolean} Required: Yes. Indicates whether the configuration property is a key.
* @property Name {String} Required: Yes. A name for this configuration property.
* @property Queryable {Boolean} Required: No. Indicates whether the configuration property will be used with the                      PollForJobs call. A custom action can have one queryable property.                   The queryable property must be required (see the Required property)                   and must not be secret (see the Secret property). For more                   information, see the queryable contents for the ActionConfigurationProperty data type in the                      AWS CodePipeline API Reference.
* @property Required {Boolean} Required: Yes. Indicates whether the configuration property is a required value.
* @property Secret {Boolean} Required: Yes. Indicates whether the configuration property is secret. Secret configuration                   properties are hidden from all AWS CodePipeline calls except for GetJobDetails,                      GetThirdPartyJobDetails, PollForJobs, and                      PollForThirdPartyJobs.
* @property Type {String} Required: No. The type of the configuration property, such as String,                      Number, or Boolean.
*/
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

/**
* @property EntityUrlTemplate {String} Required: No. The URL that is returned to the AWS CodePipeline console that links to the resources of                   the external system, such as the configuration page for an AWS CodeDeploy deployment                   group.
* @property ExecutionUrlTemplate {String} Required: No. The URL that is returned to the AWS CodePipeline console that links to the top-level                   landing page for the external system, such as the console page for AWS CodeDeploy.
* @property RevisionUrlTemplate {String} Required: No. The URL that is returned to the AWS CodePipeline console that links to the page where                   customers can update or change the configuration of the external action.
* @property ThirdPartyConfigurationUrl {String} Required: No. The URL of a sign-up page where users can sign up for an external service and                   specify the initial configurations for the service's action.
*/
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

/**
* @property EncryptionKey {AWSCodePipelinePipelineArtifactStoreEncryptionKey} Required: No. The encryption key AWS CodePipeline uses to encrypt the data in the artifact store, such                   as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default                   key for Amazon Simple Storage Service (Amazon S3).
* @property Location {String} Required: Yes. The location where AWS CodePipeline stores artifacts for a pipeline, such as an S3                   bucket.
* @property Type {String} Required: Yes. The type of the artifact store, such as Amazon S3. For valid values, see ArtifactStore in the                      AWS CodePipeline API Reference.
*/
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

/**
* @property Id {String} Required: Yes. The ID of the key. For an AWS KMS key, specify the key ID or key Amazon Resource                   Number (ARN).
* @property Type {String} Required: Yes. The type of encryption key, such as KMS. For valid values, see                      EncryptionKey in the                      AWS CodePipeline API Reference.
*/
class AWSCodePipelinePipelineArtifactStoreEncryptionKey extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineArtifactStoreEncryptionKey', properties, propertiesObject)
  }
}

/**
* @property Reason {String} Required: Yes. An explanation of why the transition between two stages of a pipeline was                   disabled.
* @property StageName {String} Required: Yes. The name of the stage to which transitions are disabled.
*/
class AWSCodePipelinePipelineDisableInboundStageTransitions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Reason: new ResourceAttribute('Reason', String, 'Yes', null),
      StageName: new ResourceAttribute('StageName', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineDisableInboundStageTransitions', properties, propertiesObject)
  }
}

/**
* @property Actions {AWSCodePipelinePipelineStagesActions} Required: Yes. The actions to include in this stage.
* @property Blockers {AWSCodePipelinePipelineStagesBlockers} Required: No. The gates included in a stage.
* @property Name {String} Required: Yes. A name for this stage.
*/
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

/**
* @property ActionTypeId {AWSCodePipelinePipelineStagesActionsActionTypeId} Required: Yes. Specifies the action type and the provider of the action.
* @property Configuration {Object} Required: No. The action's configuration. These are key-value pairs that specify input values                   for an action.
* @property InputArtifacts {AWSCodePipelinePipelineStagesActionsInputArtifacts} Required: No. The name or ID of the artifact that the action consumes, such as a test or                   build artifact.
* @property Name {String} Required: Yes. The action name.
* @property OutputArtifacts {AWSCodePipelinePipelineStagesActionsOutputArtifacts} Required: No. The artifact name or ID that is a result of the action, such as a test or build                   artifact.
* @property RoleArn {String} Required: No. The Amazon Resource Name (ARN) of a service role that the action uses. The                   pipeline's role assumes this role.
* @property RunOrder {Number} Required: No. The order in which AWS CodePipeline runs this action.
*/
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

/**
* @property Category {String} Required: Yes. A category that defines which action type the owner (the entitiy that performs                   the action) performs. The category that you select determine the providers that                   you can specify for the Provider property. For valid values, see                      ActionTypeId in the                      AWS CodePipeline API Reference.
* @property Owner {String} Required: Yes. The entity that performs the action. For valid values, see ActionTypeId in the                      AWS CodePipeline API Reference.
* @property Provider {String} Required: Yes. The service provider that the action calls. The providers that you can specify                   are determined by the category that you select. For example, a valid provider for                   the Deploy category is AWS CodeDeploy, which you would specify as                      CodeDeploy.
* @property Version {String} Required: Yes. A version identifier for this action.
*/
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

/**
* @property Name {String} Required: Yes. The name of the artifact that the AWS CodePipeline action works on, such as My                      App.The input artifact of an action must match the output artifact from                   any preceding action.
*/
class AWSCodePipelinePipelineStagesActionsInputArtifacts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsInputArtifacts', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: Yes. The name of the artifact that is the result of an AWS CodePipeline action, such as                      My App. Output artifact names must be unique within a                   pipeline.
*/
class AWSCodePipelinePipelineStagesActionsOutputArtifacts extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesActionsOutputArtifacts', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: Yes. The name of the gate declaration.
* @property Type {String} Required: Yes. The type of gate declaration. For valid values, see BlockerDeclaration in                   the AWS CodePipeline API Reference.
*/
class AWSCodePipelinePipelineStagesBlockers extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSCodePipelinePipelineStagesBlockers', properties, propertiesObject)
  }
}

/**
* @property ComplianceResourceId {String} Required: No. The ID of an AWS resource that you want AWS Config to evaluate against a rule. If you             specify an ID, you must also specify a resource type for the               ComplianceResourceTypes property.
* @property ComplianceResourceTypes {String} Required: Conditional. The types of AWS resources that you want AWS Config to evaluate against the rule. If you             specify the ComplianceResourceId property, specify only one resource             type.
* @property TagKey {String} Required: Conditional. The tag key that is applied to the AWS resources that you want AWS Config to evaluate             against the rule.
* @property TagValue {String} Required: Conditional. The tag value that is applied to the AWS resources that you want AWS Config to evaluate             against the rule.
*/
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

/**
* @property Owner {String} Required: Yes. Indicates who owns and manages the AWS Config rule. For valid values, see the Source data type in the               AWS Config API Reference.
* @property SourceDetails {AWSConfigConfigRuleSourceSourceDetails} Required: No. Provides the source and type of event that triggers AWS Config to evaluate your AWS             resources.
* @property SourceIdentifier {String} Required: Yes. For AWS managed rules, the identifier of the rule. For a list of identifiers, see               AWS Managed               Rules in the AWS Config Developer Guide.For customer managed rules, the Amazon Resource Name (ARN) of the rule's             Lambda function.
*/
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

/**
* @property EventSource {String} Required: Yes. The source, such as an AWS service, that generate events, triggering AWS Config to             evaluate your AWS resources. For valid values, see the SourceDetail data type in the               AWS Config API Reference.
* @property MessageType {String} Required: Yes. The type of Amazon Simple Notification Service (Amazon SNS) message that triggers AWS Config to run an             evaluation.To run an evaluation when AWS Config delivers a configuration item change notification,             specify ConfigurationItemChangeNotification.To run an evaluation when AWS Config delivers a configuration snapshot, specify               ConfigurationSnapshotDeliveryCompleted.
*/
class AWSConfigConfigRuleSourceSourceDetails extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EventSource: new ResourceAttribute('EventSource', String, 'Yes', null),
      MessageType: new ResourceAttribute('MessageType', String, 'Yes', null)
    }
    super('AWSConfigConfigRuleSourceSourceDetails', properties, propertiesObject)
  }
}

/**
* @property AllSupported {Boolean} Required: No. Indicates whether to record all supported resource types. If you specify this             property, do not specify the ResourceTypes property.
* @property IncludeGlobalResourceTypes {Boolean} Required: No. Indicates whether AWS Config records all supported global resource types. When AWS Config             supports new global resource types, AWS Config will automatically start recording them if you             enable this property.NoteIf you set this property to true, you must set the                 AllSupported property to               true.
* @property ResourceTypes {String} Required: No. A list of valid AWS resource types to include in this recording group, such as               AWS::EC2::Instance or               AWS::CloudTrail::Trail. If you specify this property, do not             specify the AllSupported property. For a list of supported resource types,             see Supported resource types in the AWS Config Developer Guide.
*/
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

/**
* @property DeliveryFrequency {String} Required: No. The frequency with which AWS Config delivers configuration snapshots. For valid             values, see ConfigSnapshotDeliveryProperties in the             AWS Config API Reference.
*/
class AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DeliveryFrequency: new ResourceAttribute('DeliveryFrequency', String, 'No', null)
    }
    super('AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties', properties, propertiesObject)
  }
}

/**
* @property Attributes {AWSDataPipelineParameterObjectsAttributes} Required: Yes. Key-value pairs that define the attributes of the parameter object.
* @property Id {String} Required: Yes. The identifier of the parameter object.
*/
class AWSDataPipelinePipelineParameterObjects extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Attributes: new ResourceAttribute('Attributes', AWSDataPipelineParameterObjectsAttributes, 'Yes', null),
      Id: new ResourceAttribute('Id', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterObjects', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: Yes. Specifies the name of a parameter attribute. To view parameter attributes, see                      Creating a Pipeline Using                      Parameterized Templates in the                   AWS Data Pipeline Developer Guide.
* @property StringValue {String} Required: Conditional. A parameter attribute value.
*/
class AWSDataPipelineParameterObjectsAttributes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      StringValue: new ResourceAttribute('StringValue', String, 'Conditional', null)
    }
    super('AWSDataPipelineParameterObjectsAttributes', properties, propertiesObject)
  }
}

/**
* @property Id {String} Required: Yes. The ID of a parameter object.
* @property StringValue {String} Required: Yes. A value to associate with the parameter object.
*/
class AWSDataPipelinePipelineParameterValues extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Id: new ResourceAttribute('Id', String, 'Yes', null),
      StringValue: new ResourceAttribute('StringValue', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelineParameterValues', properties, propertiesObject)
  }
}

/**
* @property Fields {AWSDataPipelineDataPipelineObjectFields} Required: Yes. Key-value pairs that define the properties of the object.
* @property Id {String} Required: Yes. Identifier of the object.
* @property Name {String} Required: Yes. Name of the object.
*/
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

/**
* @property Key {String} Required: Yes. Specifies the name of a field for a particular object. To view fields for a                   data pipeline object, see Pipeline Object Reference in the                      AWS Data Pipeline Developer Guide.
* @property RefValue {String} Required: Conditional. A field value that you specify as an identifier of another object in the same                   pipeline definition.NoteYou can specify the field value as either a string value                         (StringValue) or a reference to another object                         (RefValue), but not both.
* @property StringValue {String} Required: Conditional. A field value that you specify as a string. To view valid values for a                   particular field, see Pipeline                      Object Reference in the AWS Data Pipeline Developer Guide.NoteYou can specify the field value as either a string value                         (StringValue) or a reference to another object                         (RefValue), but not both.
*/
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

/**
* @property Key {String} Required: Yes. The key name of a tag.
* @property Value {String} Required: Yes. The value to associate with the key name.
*/
class AWSDataPipelinePipelinePipelineTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSDataPipelinePipelinePipelineTags', properties, propertiesObject)
  }
}

/**
* @property SubnetIds {String} Required: Yes. A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZs). AWS Directory Service creates a directory server and a DNS server in each subnet.
* @property VpcId {String} Required: Yes. The VPC ID in which to create the Microsoft Active Directory server.
*/
class AWSDirectoryServiceMicrosoftADVpcSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceMicrosoftADVpcSettings', properties, propertiesObject)
  }
}

/**
* @property SubnetIds {String} Required: Yes. A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZ). AWS Directory Service creates a directory server and a DNS server in each subnet.
* @property VpcId {String} Required: Yes. The VPC ID in which to create the Simple AD directory.
*/
class AWSDirectoryServiceSimpleADVpcSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super('AWSDirectoryServiceSimpleADVpcSettings', properties, propertiesObject)
  }
}

/**
* @property AttributeName {String} Required: Yes. The name of an attribute. Attribute names can be 1 – 255 characters long                   and have no character restrictions.
* @property AttributeType {String} Required: Yes. The data type for the attribute. You can specify S for string                   data, N for numeric data, or B for binary data.
*/
class DynamoDBAttributeDefinitions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceAttribute('AttributeName', String, 'Yes', null),
      AttributeType: new ResourceAttribute('AttributeType', String, 'Yes', null)
    }
    super('DynamoDBAttributeDefinitions', properties, propertiesObject)
  }
}

/**
* @property IndexName {String} Required: Yes. The name of the global secondary index. The index name can be 3 – 255                   characters long and have no character restrictions.
* @property KeySchema {DynamoDBKeySchema} Required: Yes. The complete index key schema for the global secondary index, which consists of                   one or more pairs of attribute names and key types.
* @property Projection {DynamoDBProjectionObject} Required: Yes. Attributes that are copied (projected) from the source table into the index.                   These attributes are in addition to the primary key attributes and index key                   attributes, which are automatically projected.
* @property ProvisionedThroughput {DynamoDBProvisionedThroughput} Required: Yes. The provisioned throughput settings for the index.
*/
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

/**
* @property AttributeName {String} Required: Yes. The attribute name that is used as the primary key for this table. Primary key                   element names can be 1 – 255 characters long and have no character                   restrictions.
* @property KeyType {String} Required: Yes. Represents the attribute data, consisting of the data type and the attribute                   value itself. You can specify HASH or RANGE.
*/
class DynamoDBKeySchema extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttributeName: new ResourceAttribute('AttributeName', String, 'Yes', null),
      KeyType: new ResourceAttribute('KeyType', String, 'Yes', null)
    }
    super('DynamoDBKeySchema', properties, propertiesObject)
  }
}

/**
* @property IndexName {String} Required: Yes. The name of the local secondary index. The index name can be 3 – 255                   characters long and have no character restrictions.
* @property KeySchema {DynamoDBKeySchema} Required: Yes. The complete index key schema for the local secondary index, which consists of                   one or more pairs of attribute names and key types. For local secondary indexes,                   the hash key must be the same as that of the source table.
* @property Projection {DynamoDBProjectionObject} Required: Yes. Attributes that are copied (projected) from the source table into the index.                   These attributes are additions to the primary key attributes and index key                   attributes, which are automatically projected.
*/
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

/**
* @property NonKeyAttributes {String} Required: No. The non-key attribute names that are projected into the index.For local secondary indexes, the total count of NonKeyAttributes                   summed across all of the local secondary indexes must not exceed 20. If you                   project the same attribute into two different indexes, this counts as two distinct                   attributes in determining the total.
* @property ProjectionType {String} Required: No. The set of attributes that are projected into the index:Only the index and primary keys are projected into the                               index.Only the specified table attributes are projected into the index.                               The list of projected attributes are in                               NonKeyAttributes.All of the table attributes are projected into the index.
* @property KEYS_ONLY {undefined} Required: undefined. Only the index and primary keys are projected into the                               index.
* @property INCLUDE {undefined} Required: undefined. Only the specified table attributes are projected into the index.                               The list of projected attributes are in                               NonKeyAttributes.
* @property ALL {undefined} Required: undefined. All of the table attributes are projected into the index.
*/
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

/**
* @property ReadCapacityUnits {Number} Required: Yes. Sets the desired minimum number of consistent reads of items (up to 1KB in                   size) per second for the specified table before Amazon DynamoDB balances the                   load.
* @property WriteCapacityUnits {Number} Required: Yes. Sets the desired minimum number of consistent writes of items (up to 1KB in                   size) per second for the specified table before Amazon DynamoDB balances the                   load.
*/
class DynamoDBProvisionedThroughput extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ReadCapacityUnits: new ResourceAttribute('ReadCapacityUnits', Number, 'Yes', null),
      WriteCapacityUnits: new ResourceAttribute('WriteCapacityUnits', Number, 'Yes', null)
    }
    super('DynamoDBProvisionedThroughput', properties, propertiesObject)
  }
}

/**
* @property StreamViewType {String} Required: Yes. Determines the information that the stream captures when an item in the table                   is modified. For valid values, see StreamSpecification in                   the Amazon DynamoDB API Reference.
*/
class DynamoDBTableStreamSpecification extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      StreamViewType: new ResourceAttribute('StreamViewType', String, 'Yes', null)
    }
    super('DynamoDBTableStreamSpecification', properties, propertiesObject)
  }
}

/**
* @property DeviceName {String} Required: Yes. The name of the device within Amazon EC2.
* @property Ebs {AmazonElasticBlockStoreBlockDeviceProperty} Required: Conditional.
* @property NoDevice {Map} Required: No. This property can be used to unmap a defined device.
* @property VirtualName {String} Required: Conditional. The name of the virtual device. The name must be in the form                         ephemeralX                    where X is a number starting from zero (0); for                   example, ephemeral0.
*/
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

/**
* @property DeleteOnTermination {Boolean} Required: No. Determines whether to delete the volume on instance termination. The default                   value is true.
* @property Encrypted {Boolean} Required: No. Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be                   attached to instance types that support Amazon EBS encryption. Volumes that are created                   from encrypted snapshots are automatically encrypted. You cannot create an                   encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses                   encrypted volumes, you can only launch the AMI on supported instance types. For                   more information, see Amazon EBS                      encryption in the Amazon EC2 User Guide for Linux Instances.
* @property Iops {Number} Required: Conditional. The number of I/O operations per second (IOPS) that the volume supports. This can be an integer                from 100 – 2000.
* @property SnapshotId {String} Required: Conditional. The snapshot ID of the volume to use to create a block device.
* @property VolumeSize {String} Required: Conditional. The volume size, in gibibytes (GiB). This can be a number from 1 – 1024.                   If the volume type is io1, the minimum value is 10.Update requires: Some interruptions
* @property VolumeType {String} Required: No. The volume type. You can specify standard, io1, or                      gp2. If you set the type to io1, you must also set                   the Iops property. For more information about these values                   and the default value, see CreateVolume in                   the Amazon EC2 API Reference.
*/
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

/**
*/
class EC2ICMPPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2ICMPPropertyType', properties, propertiesObject)
  }
}

/**
* @property AssociationParameters {AmazonEC2InstanceSsmAssociationsAssociationParameters} Required: No. The input parameter values to use with the associated SSM document.
* @property DocumentName {String} Required: Yes. The name of an SSM document to associate with the instance.
*/
class AmazonEC2InstanceSsmAssociations extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AssociationParameters: new ResourceAttributeArray('AssociationParameters', AmazonEC2InstanceSsmAssociationsAssociationParameters, 'No', null),
      DocumentName: new ResourceAttribute('DocumentName', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociations', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: Yes. The name of an input parameter that is in the associated SSM document.
* @property Value {String} Required: Yes. The value of an input parameter.
*/
class AmazonEC2InstanceSsmAssociationsAssociationParameters extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttributeArray('Value', String, 'Yes', null)
    }
    super('AmazonEC2InstanceSsmAssociationsAssociationParameters', properties, propertiesObject)
  }
}

/**
* @property Device {String} Required: Yes. How the device is exposed to the instance (such as /dev/sdh, or xvdh).
* @property VolumeId {String} Required: Yes. The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone                and the instance must be running.
*/
class EC2MountPointPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Device: new ResourceAttribute('Device', String, 'Yes', null),
      VolumeId: new ResourceAttribute('VolumeId', String, 'Yes', null)
    }
    super('EC2MountPointPropertyType', properties, propertiesObject)
  }
}

/**
* @property AssociatePublicIpAddress {Boolean} Required: No. Indicates whether the network interface receives a public IP address. You can                   associate a public IP address with a network interface only if it has a device                   index of eth0 and if it is a new network interface (not an existing                   one). In other words, if you specify true, don't specify a network interface ID.                   For more information, see Amazon EC2 Instance IP                      Addressing.
* @property DeleteOnTermination {Boolean} Required: No. Whether to delete the network interface when the instance terminates.
* @property Description {String} Required: No. The description of this network interface.
* @property DeviceIndex {String} Required: Yes. The network interface's position in the attachment order.
* @property GroupSet {String} Required: No. A list of security group IDs associated with this network interface.
* @property NetworkInterfaceId {String} Required: Conditional. An existing network interface ID.
* @property PrivateIpAddress {String} Required: No. Assigns a single private IP address to the network interface, which is used as                   the primary private IP address. If you want to specify multiple private IP                   address, use the PrivateIpAddresses property.
* @property PrivateIpAddresses {EC2NetworkInterfacePrivateIPSpecification} Required: No. Assigns a list of private IP addresses to the network interface. You can                   specify a primary private IP address by setting the value of the                      Primary property to true in the                      PrivateIpAddressSpecification property. If you want Amazon EC2 to                   automatically assign private IP addresses, use the                      SecondaryPrivateIpCount property and do not specify this                   property.For information about the maximum number of private IP addresses, see Private IP Addresses                      Per ENI Per Instance Type in the                      Amazon EC2 User Guide for Linux Instances.
* @property SecondaryPrivateIpAddressCount {Number} Required: No. The number of secondary private IP addresses that Amazon EC2 auto assigns to the                   network interface. Amazon EC2 uses the value of the PrivateIpAddress                   property as the primary private IP address. If you don't specify that property,                   Amazon EC2 auto assigns both the primary and secondary private IP addresses.If you want to specify your own list of private IP addresses, use the                      PrivateIpAddresses property and do not specify this                   property.For information about the maximum number of private IP addresses, see Private IP Addresses                      Per ENI Per Instance Type in the                      Amazon EC2 User Guide for Linux Instances.
* @property SubnetId {String} Required: Conditional. The ID of the subnet to associate with the network interface.
*/
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

/**
* @property AttachmentID {String} Required: Yes. The ID of the network interface attachment.
* @property InstanceID {String} Required: Yes. The ID of the instance attached to the network interface.
* @property PublicIp {String} Required: Yes. The address of the Elastic IP address bound to the network interface.
* @property IpOwnerId {String} Required: Yes. The ID of the Elastic IP address owner.
*/
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

/**
* @property AttachmentID {String} Required: Yes. The ID of the network interface attachment.
* @property InstanceID {String} Required: Yes. The ID of the instance attached to the network interface.
*/
class EC2NetworkInterfaceAttachment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AttachmentID: new ResourceAttribute('AttachmentID', String, 'Yes', null),
      InstanceID: new ResourceAttribute('InstanceID', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceAttachment', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: Yes. ID of the security group.
* @property Value {String} Required: Yes. Name of the security group.
*/
class EC2NetworkInterfaceGroupItem extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('EC2NetworkInterfaceGroupItem', properties, propertiesObject)
  }
}

/**
* @property PrivateIpAddress {String} Required: Yes. The private IP address of the network interface.
* @property Primary {Boolean} Required: Yes. Sets the private IP address as the primary private address. You can set only                   one primary private IP address. If you don't specify a primary private IP address,                   Amazon EC2 automatically assigns a primary private IP address.
*/
class EC2NetworkInterfacePrivateIPSpecification extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'Yes', null),
      Primary: new ResourceAttribute('Primary', Boolean, 'Yes', null)
    }
    super('EC2NetworkInterfacePrivateIPSpecification', properties, propertiesObject)
  }
}

/**
*/
class EC2PortRangePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('EC2PortRangePropertyType', properties, propertiesObject)
  }
}

/**
* @property CidrIp {String} Required: Conditional. Specifies a CIDR range.
* @property DestinationSecurityGroupId {String} Required: Conditional. Specifies the GroupId of the destination Amazon VPC security group.
* @property FromPort {Number} Required: No. The start of port range for the TCP and UDP protocols, or an ICMP type number.                   An ICMP type number of -1 indicates a wildcard (i.e., any ICMP type                   number).
* @property IpProtocol {String} Required: Yes. An IP protocol name or number. For valid values, go to the IpProtocol parameter                   in AuthorizeSecurityGroupIngress
* @property SourceSecurityGroupId {String} Required: Conditional. For VPC security groups only. Specifies the ID of the                   Amazon EC2 Security Group to allow access. You can use the                      Ref intrinsic function to refer to the logical ID of a                   security group defined in the same template.
* @property SourceSecurityGroupName {String} Required: Conditional. For non-VPC security groups only. Specifies the name of                   the Amazon EC2 Security Group to use for access. You can use the                      Ref intrinsic function to refer to the logical name of a                   security group that is defined in the same template.
* @property SourceSecurityGroupOwnerId {String} Required: Conditional. Specifies the AWS Account ID of the owner of the Amazon EC2 Security Group that                   is specified in the SourceSecurityGroupName property.
* @property ToPort {Number} Required: No. The end of port range for the TCP and UDP protocols, or an ICMP code. An ICMP                   code of -1 indicates a wildcard (i.e., any ICMP code).
*/
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

/**
* @property AllocationStrategy {String} Required: No. Indicates how to allocate the target capacity across the Spot pools that you                   specified in the Spot fleet request. For valid values, see SpotFleetRequestConfigData in the                      Amazon EC2 API Reference.
* @property ExcessCapacityTerminationPolicy {String} Required: No. Indicates whether running Spot instances are terminated if you decrease the                   target capacity of the Spot fleet request below the current size of the Spot                   fleet. For valid values, see SpotFleetRequestConfigData in the                      Amazon EC2 API Reference.
* @property IamFleetRole {String} Required: Yes. The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the                   Spot fleet the ability to bid on, launch, and terminate instances on your behalf.                   For more information, see Spot                      Fleet Prerequisites in the                   Amazon EC2 User Guide for Linux Instances.
* @property LaunchSpecifications {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications} Required: Yes. The launch specifications for the Spot fleet request.
* @property SpotPrice {String} Required: Yes. The bid price per unit hour. For more information, see How Spot Fleet Works in the                      Amazon EC2 User Guide for Linux Instances.
* @property TargetCapacity {Number} Required: Yes. The number of units to request for the spot fleet. You can choose to set the                   target capacity as the number of instances or as a performance characteristic that                   is important to your application workload, such as vCPUs, memory, or I/O. For more                   information, see How Spot Fleet                      Works in the Amazon EC2 User Guide for Linux Instances.
* @property TerminateInstancesWithExpiration {Boolean} Required: No. Indicates whether running Spot instances are terminated when the Spot fleet                   request expires.
* @property ValidFrom {String} Required: No. The start date and time of the request, in UTC format                      (YYYY-MM-DDTHH:MM:SSZ).                   By default, Amazon Elastic Compute Cloud (Amazon EC2 ) starts fulfilling the request immediately.
* @property ValidUntil {String} Required: No. The end date and time of the request, in UTC format                      (YYYY-MM-DDTHH:MM:SSZ).                   After the end date and time, Amazon EC2 doesn't request new Spot instances or enable                   them to fulfill the request.
*/
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

/**
* @property BlockDeviceMappings {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings} Required: No. Defines the block devices that are mapped to the Spot instances.
* @property EbsOptimized {Boolean} Required: No. Indicates whether the instances are optimized for Amazon Elastic Block Store (Amazon EBS) I/O. This                   optimization provides dedicated throughput to Amazon EBS and an optimized configuration                   stack to provide optimal EBS I/O performance. This optimization isn't available                   with all instance types. Additional usage charges apply when you use an                   Amazon EBS-optimized instance.
* @property IamInstanceProfile {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile} Required: No. Defines the AWS Identity and Access Management (IAM) instance profile to associate with the                   instances.
* @property ImageId {String} Required: Yes. The unique ID of the Amazon Machine Image (AMI) to launch on the                   instances.
* @property InstanceType {String} Required: Yes. Specifies the instance type of the EC2 instances.
* @property KernelId {String} Required: No. The ID of the kernel that is associated with the Amazon Elastic Compute Cloud (Amazon EC2) AMI.
* @property KeyName {String} Required: No. An Amazon EC2 key pair to associate with the instances.
* @property Monitoring {AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring} Required: No. Enable or disable monitoring for the instances.
* @property NetworkInterfaces {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces} Required: No. The network interfaces to associate with the instances.
* @property Placement {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement} Required: No. Defines a placement group, which is a logical grouping of instances within a                   single Availability Zone (AZ).
* @property RamdiskId {String} Required: No. The ID of the RAM disk to select. Some kernels require additional drivers at                   launch. Check the kernel requirements for information about whether you need to                   specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center                   and search for the kernel ID.
* @property SecurityGroups {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups} Required: No. One or more security group IDs to associate with the instances.
* @property SubnetId {String} Required: No. The ID of the subnet in which to launch the instances.
* @property UserData {String} Required: No. Base64-encoded MIME user data that instances use when starting up.
* @property WeightedCapacity {Number} Required: No. The number of units provided by the specified instance type. These units are                   the same units that you chose to set the target capacity in terms of instances or                   a performance characteristic, such as vCPUs, memory, or I/O. For more information,                   see How Spot Fleet Works in the                      Amazon EC2 User Guide for Linux Instances.If the target capacity divided by this value is not a whole number, Amazon EC2                   rounds the number of instances to the next whole number.
*/
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

/**
* @property DeviceName {String} Required: Yes. The name of the device within the EC2 instance, such as /dev/dsh                   or xvdh.
* @property Ebs {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs} Required: Conditional. The Amazon Elastic Block Store (Amazon EBS) volume information.
* @property NoDevice {Boolean} Required: No. Suppresses the specified device that is included in the block device mapping of                   the Amazon Machine Image (AMI).
* @property VirtualName {String} Required: Conditional. The name of the virtual device. The name must be in the form                         ephemeralX where                      X is a number equal to or greater than zero (0), for                   example, ephemeral0.
*/
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

/**
* @property DeleteOnTermination {Boolean} Required: No. Indicates whether to delete the volume when the instance is terminated.
* @property Encrypted {Boolean} Required: No. Indicates whether the EBS volume is encrypted. Encrypted Amazon EBS volumes can be                   attached only to instances that support Amazon EBS encryption.
* @property Iops {Number} Required: No. The number of I/O operations per second (IOPS) that the volume supports. For                   more information, see Iops for the EbsBlockDevice action in the                      Amazon EC2 API Reference.
* @property SnapshotId {String} Required: Conditional. The snapshot ID of the volume that you want to use.
* @property VolumeSize {Number} Required: Conditional. The volume size, in Gibibytes (GiB). For more information about specifying the             volume size, see VolumeSize             for the EbsBlockDevice action in the             Amazon EC2 API Reference.
* @property VolumeType {String} Required: No. The volume type. For more information about specifying the volume type, see                      VolumeType for the                      EbsBlockDevice action in the                      Amazon EC2 API Reference.
*/
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

/**
* @property Arn {String} Required: No. The Amazon Resource Name (ARN) of the instance profile to associate with the                   instances. The instance profile contains the IAM role that is associated with                   the instances.
*/
class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Arn: new ResourceAttribute('Arn', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile', properties, propertiesObject)
  }
}

/**
* @property Enabled {Boolean} Required: No. Indicates whether monitoring is enabled for the instances.
*/
class AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null)
    }
    super('AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring', properties, propertiesObject)
  }
}

/**
* @property AssociatePublicIpAddress {Boolean} Required: No. Indicates whether monitoring is enabled for the instances.
* @property DeleteOnTermination {Boolean} Required: No. Indicates whether to delete the network interface when the instance                   terminates.
* @property Description {String} Required: No. The description of this network interface.
* @property DeviceIndex {Number} Required: Yes. The network interface's position in the attachment order.
* @property Groups {String} Required: No. A list of security group IDs to associate with this network interface.
* @property NetworkInterfaceId {String} Required: No. A network interface ID.
* @property PrivateIpAddresses {AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses} Required: No. One or more private IP addresses to assign to the network interface. You can                   designate only one private IP address as primary.
* @property SecondaryPrivateIpAddressCount {Number} Required: No. The number of secondary private IP addresses that Amazon Elastic Compute Cloud (Amazon EC2)                   automatically assigns to the network interface.
* @property SubnetId {String} Required: Conditional. The ID of the subnet to associate with the network interface.
*/
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

/**
* @property Primary {Boolean} Required: No. Indicates whether the private IP address is the primary private IP address. You                   can designate only one IP address as primary.
* @property PrivateIpAddress {String} Required: Yes. The private IP address.
*/
class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Primary: new ResourceAttribute('Primary', Boolean, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'Yes', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses', properties, propertiesObject)
  }
}

/**
* @property AvailabilityZone {String} Required: No. The Availability Zone (AZ) of the placement group.
* @property GroupName {String} Required: No. The name of the placement group (for cluster instances).
*/
class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      GroupName: new ResourceAttribute('GroupName', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement', properties, propertiesObject)
  }
}

/**
* @property GroupId {String} Required: No. The ID of a security group.
*/
class AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      GroupId: new ResourceAttribute('GroupId', String, 'No', null)
    }
    super('AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups', properties, propertiesObject)
  }
}

/**
* @property MaximumPercent {Number} Required: No. The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. To calculate the maximum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MaximumPercent/100), rounded down to the nearest integer value.
* @property MinimumHealthyPercent {Number} Required: No. The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. To calculate the minimum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MinimumHealthyPercent/100), rounded up to the nearest integer value.
*/
class AmazonEC2ContainerServiceServiceDeploymentConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      MaximumPercent: new ResourceAttribute('MaximumPercent', Number, 'No', null),
      MinimumHealthyPercent: new ResourceAttribute('MinimumHealthyPercent', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceServiceDeploymentConfiguration', properties, propertiesObject)
  }
}

/**
* @property ContainerName {String} Required: No. The name of a container to use with the load balancer.
* @property ContainerPort {Number} Required: Yes. The port number on the container to direct load balancer traffic to. Your                   container instances must allow ingress traffic on this port.
* @property LoadBalancerName {String} Required: No. The name of the load balancer to associated with the Amazon ECS service.
*/
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

/**
* @property Command {String} Required: No. The CMD value to pass to the container. For more information                         about the Docker CMD parameter, see https://docs.docker.com/reference/builder/#cmd.
* @property Cpu {Number} Required: No. The minimum number of CPU units to reserve for the container. Containers share unallocated CPU units with other containers on the instance by using the same ratio as their allocated CPU units. For more information, see the cpu content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.
* @property DisableNetworking {Boolean} Required: No. Indicates whether networking is disabled within the container.
* @property DnsSearchDomains {String} Required: No. A list of DNS search domains that are provided to the container. The domain names that the DNS logic looks up when a process attempts to access a bare unqualified hostname.
* @property DnsServers {String} Required: No. A list of DNS servers that Amazon ECS provides to the container.
* @property DockerLabels {Map} Required: No. A key-value map of labels for the container.
* @property DockerSecurityOptions {String} Required: No. A list of custom labels for SELinux and AppArmor multi-level security systems. For more information, see the dockerSecurityOptions content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.
* @property EntryPoint {String} Required: No. The ENTRYPOINT value to pass to the container. For more                         information about the Docker ENTRYPOINT parameter, see https://docs.docker.com/reference/builder/#entrypoint.
* @property Environment {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment} Required: No. The environment variables to pass to the container.
* @property Essential {Boolean} Required: No. Indicates whether the task stops if this container fails. If you specify true and the container fails, all other containers in the task stop. If you specify false and the container fails, none of the other containers in the task is affected. This value is true by default.You must have at least one essential container in a task.
* @property ExtraHosts {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry} Required: No. A list of hostnames and IP address mappings to append to the /etc/hosts file on the container.
* @property Hostname {String} Required: No. The name that Docker will use for the container's hostname.
* @property Image {String} Required: Yes. The image to use for a container, which is passed directly to the Docker                         daemon. You can use images in the Docker Hub registry or specify other                         repositories                             (repository-url/image:tag).
* @property Links {String} Required: No. The name of another container to connect to. With links, containers can                         communicate with each other without using port mappings.
* @property LogConfiguration {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration} Required: No. Configures a custom log driver for the container. For more information, see the               logConfiguration content for the ContainerDefinition data type             in the Amazon EC2 Container Service API Reference.
* @property Memory {Number} Required: Yes. The number of MiB of memory to reserve for the container. If your container attempts to exceed the allocated memory, the container is terminated.
* @property MountPoints {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints} Required: No. The mount points for data volumes in the container.
* @property Name {String} Required: Yes. A name for the container.
* @property PortMappings {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings} Required: No. A mapping of the container port to a host port. Port mappings enable                         containers to access ports on the host container instance to send or receive                         traffic.
* @property Privileged {Boolean} Required: No. Indicates whether the container is given full access to the host container instance.
* @property ReadonlyRootFilesystem {Boolean} Required: No. Indicates whether the container's root file system is mounted as read only.
* @property Ulimits {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit} Required: No. A list of ulimits to set in the container. The ulimits set constraints on how much resources a container can consume so that it doesn't deplete all available resources on the host.
* @property User {String} Required: No. The user name to use inside the container.
* @property VolumesFrom {AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom} Required: No. The data volumes to mount from another container.
* @property WorkingDirectory {String} Required: No. The working directory in the container in which to run commands.
*/
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

/**
* @property Name {String} Required: Yes. The name of the environment variable.
* @property Value {String} Required: Yes. The value of the environment variable.
*/
class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment', properties, propertiesObject)
  }
}

/**
* @property Hostname {String} Required: Yes. The hostname to use in the /etc/hosts file.
* @property IpAddress {String} Required: Yes. The IP address to use in the /etc/hosts file.
*/
class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Hostname: new ResourceAttribute('Hostname', String, 'Yes', null),
      IpAddress: new ResourceAttribute('IpAddress', String, 'Yes', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry', properties, propertiesObject)
  }
}

/**
* @property LogDriver {String} Required: Yes. The log driver to use for the container. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater. For more information, see the logDriver content for the LogConfiguration data type in the Amazon EC2 Container Service API Reference.
* @property Options {Map} Required: No. The configuration options to send to the log driver. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater.
*/
class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      LogDriver: new ResourceAttribute('LogDriver', String, 'Yes', null),
      Options: new ResourceAttribute('Options', Map, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration', properties, propertiesObject)
  }
}

/**
* @property ContainerPath {String} Required: Yes. The path on the container that indicates where you want to mount the                   volume.
* @property SourceVolume {String} Required: Yes. The name of the volume to mount.
* @property ReadOnly {Boolean} Required: No. Indicates whether the container can write to the volume. If you specify                      true, the container has read-only access to the volume.                   If you specify false, the container can write to the                   volume. By default, the value is false.
*/
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

/**
* @property ContainerPort {Number} Required: Yes. The port number on the container that is bound to the host port.
* @property HostPort {Number} Required: No. The host port number on the container instance that you want to reserve for                   your container. You can specify a non-reserved host port for your container port                   mapping, or you can omit the host port (or set it to 0). If you                   specify a container port but no host port, your container port is automatically                   assigned a host port in the 49153 to 65535 port                   range.Do not specify a host port in the 49153 to 65535 port                   range; these ports are reserved for automatic assignment. Other reserved ports                   include 22 for SSH, the Docker ports 2375 and                      2376, and the Amazon EC2 Container Service container agent port 51678.                   In addition, do not specify a host port that is being used for a task; that port                   is reserved while the task is running.
*/
class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ContainerPort: new ResourceAttribute('ContainerPort', Number, 'Yes', null),
      HostPort: new ResourceAttribute('HostPort', Number, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings', properties, propertiesObject)
  }
}

/**
* @property HardLimit {Number} Required: Yes. The hard limit for the ulimit type.
* @property Name {String} Required: No. The type of ulimit. For valid values, see the name content for the               Ulimit data type in the               Amazon EC2 Container Service API Reference.
* @property SoftLimit {Number} Required: Yes. The soft limit for the ulimit type.
*/
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

/**
* @property SourceContainer {String} Required: Yes. The name of the container that has the volumes to mount.
* @property ReadOnly {Boolean} Required: No. Indicates whether the container can write to the volume. If you specify                      true, the container has read-only access to the volume.                   If you specify false, the container can write to the                   volume. By default, the value is false.
*/
class AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SourceContainer: new ResourceAttribute('SourceContainer', String, 'Yes', null),
      ReadOnly: new ResourceAttribute('ReadOnly', Boolean, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: Yes. The name of the volume. To specify mount points in your container definitions,                   use the value of this property.
* @property Host {AmazonEC2ContainerServiceTaskDefinitionVolumesHost} Required: No. Determines whether your data volume persists on the host container instance and                   at the location where it is stored.
*/
class AmazonEC2ContainerServiceTaskDefinitionVolumes extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Host: new ResourceAttribute('Host', AmazonEC2ContainerServiceTaskDefinitionVolumesHost, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumes', properties, propertiesObject)
  }
}

/**
* @property SourcePath {String} Required: No. The data volume path on the host container instance.If you don't specify this parameter, the Docker daemon assigns a path for you,                   but the data volume might not persist after the associated container stops                   running. If you do specify a path, the data volume persists at that location on                   the host container instance until you manually delete it.
*/
class AmazonEC2ContainerServiceTaskDefinitionVolumesHost extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SourcePath: new ResourceAttribute('SourcePath', String, 'No', null)
    }
    super('AmazonEC2ContainerServiceTaskDefinitionVolumesHost', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: No. The key name of the tag. You can specify a value that is from 1 to 128 Unicode                   characters in length, but you cannot use the prefix aws:.
* @property Value {String} Required: No. The value of the tag key. You can specify a value that is from 0 to 128 Unicode                   characters in length.
*/
class AmazonElasticFileSystemFileSystemFileSystemTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonElasticFileSystemFileSystemFileSystemTags', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: No. The name of the environment tier. You can specify WebServer or                      Worker.Update requires: Replacement
* @property Type {String} Required: No. The type of this environment tier. You can specify Standard for                   the WebServer tier or SQS/HTTP for the                      Worker tier.Update requires: Replacement
* @property Version {String} Required: No. The version of this environment tier.Update requires: No interruption
*/
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

/**
* @property Namespace {String} Required: Yes. A unique namespace identifying the option's associated AWS resource. For a list                   of namespaces that you can use, see Configuration Options in the AWS Elastic Beanstalk                      Developer Guide.
* @property OptionName {String} Required: Yes. The name of the configuration option. For a list of options that you can use,                   see Configuration Options in the AWS Elastic Beanstalk                      Developer Guide.
* @property Value {String} Required: Yes. The value of the setting.
*/
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

/**
* @property S3Bucket {String} Required: Yes. The Amazon S3 bucket where the data is located.
* @property S3Key {String} Required: Yes. The Amazon S3 key where the data is located.
*/
class ElasticBeanstalkSourceBundlePropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      S3Bucket: new ResourceAttribute('S3Bucket', String, 'Yes', null),
      S3Key: new ResourceAttribute('S3Key', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceBundlePropertyType', properties, propertiesObject)
  }
}

/**
* @property ApplicationName {String} Required: Yes. The name of the Elastic Beanstalk application that contains the configuration template that                   you want to use.
* @property TemplateName {String} Required: Yes. The name of the configuration template.
*/
class ElasticBeanstalkSourceConfigurationPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      TemplateName: new ResourceAttribute('TemplateName', String, 'Yes', null)
    }
    super('ElasticBeanstalkSourceConfigurationPropertyType', properties, propertiesObject)
  }
}

/**
* @property EmitInterval {Number} Required: No. The interval for publishing access logs in minutes. You can specify an interval                   of either 5 minutes or 60 minutes.
* @property Enabled {Boolean} Required: Yes. Whether logging is enabled for the load balancer.
* @property S3BucketName {String} Required: Yes. The name of an Amazon S3 bucket where access log files are stored.
* @property S3BucketPrefix {String} Required: No. A prefix for the all log object keys, such as                      my-load-balancer-logs/prod. If you store log files from multiple                   sources in a single bucket, you can use a prefix to distinguish each log file and                   its source.
*/
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

/**
* @property CookieName {String} Required: Yes. Name of the application cookie used for stickiness.
* @property PolicyName {String} Required: Yes. The name of the policy being created. The name must be unique within the set of                   policies for this Load Balancer.NoteTo associate this policy with a listener, include the policy name in the                         listener's PolicyNames property.
*/
class ElasticLoadBalancingAppCookieStickinessPolicyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CookieName: new ResourceAttribute('CookieName', String, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null)
    }
    super('ElasticLoadBalancingAppCookieStickinessPolicyType', properties, propertiesObject)
  }
}

/**
* @property Enabled {Boolean} Required: Yes. Whether or not connection draining is enabled for the load balancer.
* @property Timeout {Number} Required: No. The time in seconds after the load balancer closes all connections to a                   deregistered or unhealthy instance.
*/
class ElasticLoadBalancingConnectionDrainingPolicy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', Number, 'No', null)
    }
    super('ElasticLoadBalancingConnectionDrainingPolicy', properties, propertiesObject)
  }
}

/**
* @property IdleTimeout {Number} Required: Yes. The time (in seconds) that a connection to the load balancer can remain idle,                   which means no data is sent over the connection. After the specified time, the                   load balancer closes the connection.
*/
class ElasticLoadBalancingConnectionSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IdleTimeout: new ResourceAttribute('IdleTimeout', Number, 'Yes', null)
    }
    super('ElasticLoadBalancingConnectionSettings', properties, propertiesObject)
  }
}

/**
* @property HealthyThreshold {String} Required: Yes. Specifies the number of consecutive health probe successes required before moving the instance to                   the Healthy state.
* @property Interval {String} Required: Yes. Specifies the approximate interval, in seconds, between health checks of an individual                   instance.
* @property Target {String} Required: Yes. Specifies the instance's protocol and port to check. The protocol can be TCP,                   HTTP, HTTPS, or SSL. The range of valid ports is 1 through 65535.NoteFor TCP and SSL, you specify a port pair. For example, you can specify                         TCP:5000 or SSL:5000. The health check attempts to                      open a TCP or SSL connection to the instance on the port that you specify. If                      the health check fails to connect within the configured timeout period, the                      instance is considered unhealthy.For HTTP or HTTPS, you specify a port and a path to ping                            (HTTP or                            HTTPS:port/PathToPing).                      For example, you can specify HTTP:80/weather/us/wa/seattle. In                      this case, an HTTP GET request is issued to the instance on the given port and                      path. If the health check receives any response other than 200 OK                      within the configured timeout period, the instance is considered unhealthy. The                      total length of the HTTP or HTTPS ping target cannot be more than 1024 16-bit                      Unicode characters.
* @property Timeout {String} Required: Yes. Specifies the amount of time, in seconds, during which no response means a failed health probe.                   This value must be less than the value for Interval.
* @property UnhealthyThreshold {String} Required: Yes. Specifies the number of consecutive health probe failures required before moving the instance to                   the Unhealthy state.
*/
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

/**
* @property CookieExpirationPeriod {String} Required: No. The time period, in seconds, after which the cookie should be considered stale. If this parameter                   isn't specified, the sticky session will last for the duration of the browser session.
* @property PolicyName {undefined} Required: undefined. The name of the policy being created. The name must be unique within the set of                   policies for this load balancer.NoteTo associate this policy with a listener, include the policy name in the                      listener's PolicyNames                      property.
*/
class ElasticLoadBalancingLBCookieStickinessPolicyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CookieExpirationPeriod: new ResourceAttribute('CookieExpirationPeriod', String, 'No', null),
      PolicyName: new ResourceAttribute('PolicyName', undefined, 'undefined', null)
    }
    super('ElasticLoadBalancingLBCookieStickinessPolicyType', properties, propertiesObject)
  }
}

/**
* @property InstancePort {String} Required: Yes. Specifies the TCP port on which the instance server is listening. This property cannot be modified                   for the life of the load balancer.
* @property InstanceProtocol {String} Required: No. Specifies the protocol to use for routing traffic to back-end instances—HTTP, HTTPS, TCP, or                   SSL. This property cannot be modified for the life of the load balancer.NoteIf the front-end protocol is HTTP or HTTPS, InstanceProtocol has to                            be at the same protocol layer, i.e., HTTP or HTTPS. Likewise, if the front-end protocol is                            TCP or SSL, InstanceProtocol has to be TCP or SSL.If there is another listener with the same InstancePort whose                            InstanceProtocol is secure, i.e., HTTPS or SSL, the listener's                            InstanceProtocol has to be secure, i.e., HTTPS or SSL. If there is                            another listener with the same InstancePort whose InstanceProtocol is                            HTTP or TCP, the listener's InstanceProtocol must be either HTTP or                            TCP.
* @property LoadBalancerPort {String} Required: Yes. Specifies the external load balancer port number. This property cannot be modified for the life of                   the load balancer.
* @property PolicyNames {String} Required: No. A list of ElasticLoadBalancing policy names to associate with the listener. Specify only policies that are compatible with listeners. For more information, see DescribeLoadBalancerPolicyTypes in the Elastic Load Balancing API Reference.
* @property Protocol {String} Required: Yes. Specifies the load balancer transport protocol to use for routing — HTTP, HTTPS, TCP or SSL.                   This property cannot be modified for the life of the load balancer.
* @property SSLCertificateId {String} Required: No. The ARN of the SSL certificate to use. For more information about SSL certificates, see Managing                      Server Certificates in the AWS Identity and Access Management documentation.
*/
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

/**
* @property Attributes {Object} Required: Yes. A list of arbitrary attributes for this policy. If you don't need to specify                   any policy attributes, specify an empty list ([]).
* @property InstancePorts {String} Required: No. A list of instance ports for the policy. These are the ports associated with the back-end                   server.
* @property LoadBalancerPorts {String} Required: Conditional. A list of external load balancer ports for the policy.
* @property PolicyName {String} Required: Yes. A name for this policy that is unique to the load balancer.
* @property PolicyType {String} Required: Yes. The name of the policy type for this policy. This must be one of the types reported by the Elastic Load Balancing                      DescribeLoadBalancerPolicyTypes action.
*/
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

/**
* @property EBSEnabled {Boolean} Required: No. Specifies whether Amazon EBS volumes are attached to data nodes in the Amazon ES             domain.
* @property Iops {Number} Required: No. The number of I/O operations per second (IOPS) that the volume supports. This             property applies only to the Provisioned IOPS (SSD) EBS volume type.
* @property VolumeSize {Number} Required: No. The size of the EBS volume for each data node. The minimum and maximum size of an             EBS volume depends on the EBS volume type and the instance type to which it is attached.             For more information, see Configuring EBS-based Storage in the             Amazon Elasticsearch Service Developer Guide.
* @property VolumeType {String} Required: No. The EBS volume type to use with the Amazon ES domain, such as standard,               gp2, or io1. For more information about each type, see               Amazon EBS Volume Types in the Amazon EC2 User Guide for Linux Instances.
*/
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

/**
* @property DedicatedMasterCount {Number} Required: No. The number of instances to use for the master node.If you specify this property, you must specify true for the               DedicatedMasterEnabled property
* @property DedicatedMasterEnabled {Boolean} Required: No. Indicates whether to use a dedicated master node for the Amazon ES domain. A             dedicated master node is a cluster node that performs cluster management tasks, but             doesn't hold data or respond to data upload requests. Dedicated master nodes offload             cluster management tasks to increase the stability of your search clusters.
* @property DedicatedMasterType {String} Required: No. The hardware configuration of the computer that hosts the dedicated master node,             such as m3.medium.elasticsearch. For valid values, see Configuring Amazon ES Domains in the             Amazon Elasticsearch Service Developer Guide.If you specify this property, you must specify true for the               DedicatedMasterEnabled property
* @property InstanceCount {Number} Required: No. The number of data nodes (instances) to use in the Amazon ES domain.
* @property InstanceType {String} Required: No. The instance type for your data nodes, such as m3.medium.elasticsearch.             For valid values, see Configuring Amazon ES Domains in the             Amazon Elasticsearch Service Developer Guide.
* @property ZoneAwarenessEnabled {Boolean} Required: No. Indicates whether to enable zone awareness for the Amazon ES domain. When you enable             zone awareness, Amazon ES allocates the nodes and replica index shards that belong to a             cluster across two Availability Zones (AZs) in the same region to prevent data loss and             minimize downtime in the event of node or data center failure. Don't enable zone             awareness if your cluster has no replica index shards or is a single-node cluster. For             more information, see Enabling Zone               Awareness in the Amazon Elasticsearch Service Developer Guide.
*/
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

/**
* @property AutomatedSnapshotStartHour {Number} Required: No. The hour in UTC during which the service takes an automated daily snapshot of the             indices in the Amazon ES domain. For example, if you specify 0, Amazon ES             takes an automated snapshot everyday between midnight and 1 am. You can specify a value             between 0 and 23.
*/
class AmazonElasticsearchServiceDomainSnapshotOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AutomatedSnapshotStartHour: new ResourceAttribute('AutomatedSnapshotStartHour', Number, 'No', null)
    }
    super('AmazonElasticsearchServiceDomainSnapshotOptions', properties, propertiesObject)
  }
}

/**
* @property AdditionalInfo {Map} Required: No. Metadata about third-party applications that third-party vendors use for testing             purposes.
* @property Args {String} Required: No. Arguments that Amazon EMR passes to the application.
* @property Name {String} Required: No. The name of the application to add to your cluster, such as Hadoop or               Hive. For valid values, see the Applications parameter in the Amazon Elastic MapReduce API Reference.
* @property Version {String} Required: No. The version of the application.
*/
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

/**
* @property Name {String} Required: Yes. The name of the bootstrap action to add to your cluster.
* @property ScriptBootstrapAction {AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig} Required: Yes. The script that the bootstrap action runs.
*/
class AmazonElasticMapReduceClusterBootstrapActionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ScriptBootstrapAction: new ResourceAttribute('ScriptBootstrapAction', AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfig', properties, propertiesObject)
  }
}

/**
* @property Args {String} Required: No. A list of command line arguments to pass to the bootstrap action script.
* @property Path {String} Required: Yes. The location of the script that Amazon EMR runs during a bootstrap action. Specify a             location in an S3 bucket or your local file system.
*/
class AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Args: new ResourceAttributeArray('Args', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig', properties, propertiesObject)
  }
}

/**
* @property Classification {String} Required: No. The name of an application-specific configuration file. For more information see,               Configuring Applications in the Amazon Elastic MapReduce Release               Guide.
* @property ConfigurationProperties {Map} Required: No. The settings that you want to change in the application-specific configuration file.             For more information see, Configuring Applications in the Amazon Elastic MapReduce Release               Guide.
* @property Configurations {AmazonElasticMapReduceClusterConfiguration} Required: No. A list of configurations to apply to this configuration. You can nest configurations             so that a single configuration can have its own configurations. In other words, you can             configure a configuration. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release               Guide.
*/
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

/**
* @property AdditionalMasterSecurityGroups {String} Required: No. A list of additional EC2 security group IDs to assign to the master instance (master             node) in your Amazon EMR cluster. Use this property to supplement the rules specified by the             Amazon EMR managed master security group.
* @property AdditionalSlaveSecurityGroups {String} Required: No. A list of additional EC2 security group IDs to assign to the slave instances (slave             nodes) in your Amazon EMR cluster. Use this property to supplement the rules specified by the             Amazon EMR managed slave security group.
* @property CoreInstanceGroup {AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig} Required: Yes. The settings for the core instances in your Amazon EMR cluster.
* @property Ec2KeyName {String} Required: No. The name of an Amazon Elastic Compute Cloud (Amazon EC2) key pair, which you can use to access the instances             in your Amazon EMR cluster.
* @property Ec2SubnetId {String} Required: No. The ID of a subnet where you want to launch your instances.
* @property EmrManagedMasterSecurityGroup {String} Required: No. The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the master             instance (master node) in your Amazon EMR cluster.
* @property EmrManagedSlaveSecurityGroup {String} Required: No. The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the slave             instances (slave nodes) in your Amazon EMR cluster.
* @property HadoopVersion {String} Required: No. The Hadoop version for the job flow. For valid values, see the HadoopVersion parameter in             the Amazon Elastic MapReduce API Reference.
* @property MasterInstanceGroup {AmazonElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig} Required: Yes. The settings for the master instance (master node).
* @property Placement {AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType} Required: No. The Availability Zone (AZ) in which the job flow runs.
* @property ServiceAccessSecurityGroup {String} Required: No. The ID of an EC2 security group (managed by Amazon EMR) that services use to access             clusters in private subnets.
* @property TerminationProtected {Boolean} Required: No. Indicates whether to prevent the EC2 instances from being terminated by an API call             or user intervention. If you want to delete a stack with protected instances, update             this value to false before you delete the stack. By default, AWS CloudFormation sets             this property to false.
*/
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

/**
* @property BidPrice {String} Required: No. When launching instances as Spot Instances, the bid price in USD for each EC2 instance in the instance group.
* @property Configurations {AmazonElasticMapReduceClusterConfiguration} Required: No. A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon EMR Release Guide.
* @property EbsConfiguration {AmazonElasticMapReduceEbsConfiguration} Required: No. Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.Update requires: Replacement
* @property InstanceCount {Number} Required: Yes. The number of instances to launch in the instance group.
* @property InstanceType {String} Required: Yes. The EC2 instance type for all instances in the instance group. For more information,             see Instance Configurations in the Amazon EMR Management             Guide.
* @property Market {String} Required: No. The type of marketplace from which your instances are provisioned into this group,             either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing             Options.
* @property Name {String} Required: No. A name for the instance group.
*/
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

/**
* @property AvailabilityZone {String} Required: Yes. The Amazon Elastic Compute Cloud (Amazon EC2) AZ for the job flow. For more information, see http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html in the Amazon EC2 User Guide for Linux Instances.
*/
class AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null)
    }
    super('AmazonElasticMapReduceClusterJobFlowInstancesConfigPlacementType', properties, propertiesObject)
  }
}

/**
* @property EbsBlockDeviceConfigs {AmazonElasticMapReduceEbsConfiguration} Required: No. Configures the block storage devices that are associated with your EMR instances.
* @property EbsOptimized {Boolean} Required: No. Indicates whether the instances are optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.
*/
class AmazonElasticMapReduceEbsConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      EbsBlockDeviceConfigs: new ResourceAttributeArray('EbsBlockDeviceConfigs', AmazonElasticMapReduceEbsConfiguration, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfiguration', properties, propertiesObject)
  }
}

/**
* @property VolumeSpecification {AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification} Required: Yes. The settings for the Amazon EBS volumes.
* @property VolumesPerInstance {Number} Required: No. The number of Amazon EBS volumes that you want to create for each instance in the EMR cluster or instance group.
*/
class AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      VolumeSpecification: new ResourceAttribute('VolumeSpecification', AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, 'Yes', null),
      VolumesPerInstance: new ResourceAttribute('VolumesPerInstance', Number, 'No', null)
    }
    super('AmazonElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs', properties, propertiesObject)
  }
}

/**
* @property Iops {Number} Required: No. The number of I/O operations per second (IOPS) that the volume supports. For more information, see Iops for the EbsBlockDevice action in the Amazon EC2 API Reference.
* @property SizeInGB {Number} Required: Yes. The volume size, in Gibibytes (GiB). For more information about specifying the volume size, see VolumeSize for the EbsBlockDevice action in the Amazon EC2 API Reference.
* @property VolumeType {String} Required: Yes. The volume type, such as standard or io1. For more information about specifying the volume type, see VolumeType for the EbsBlockDevice action in the Amazon EC2 API Reference.
*/
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

/**
* @property Args {String} Required: No. A list of command line arguments passed to the JAR file's main function when the             function is executed.
* @property Jar {String} Required: Yes. A path to the JAR file that Amazon EMR runs for the job flow step.
* @property MainClass {String} Required: No. The name of the main class in the specified JAR file. If you don't specify a value,             you must specify a main class in the JAR file's manifest file.
* @property StepProperties {AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue} Required: No. A list of Java properties that are set when the job flow step runs. You can use             these properties to pass key-value pairs to your main function in the JAR file.
*/
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

/**
* @property Key {String} Required: No. The unique identifier of a key-value pair.
* @property Value {String} Required: No. The value part of the identified key.
*/
class AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonElasticMapReduceStepHadoopJarStepConfigKeyValue', properties, propertiesObject)
  }
}

/**
* @property FleetId {String} Required: Conditional. A unique identifier of a GameLift fleet to associate with the alias.
* @property Message {String} Required: Conditional. A text message that GameLift displays for the Terminal routing             type.
* @property Type {String} Required: Yes. The type of routing strategy. For the SIMPLE type, traffic is routed to             an active GameLift fleet. For the Terminal type, GameLift returns an exception             with the message that you specified in the Message property.
*/
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

/**
* @property Bucket {String} Required: Yes. The S3 bucket where the GameLift build package files are stored.
* @property Key {String} Required: Yes. The prefix (folder name) where the GameLift build package files are located.
* @property RoleArn {String} Required: Yes. An AWS Identity and Access Management (IAM) role Amazon Resource Name (ARN) that GameLift can assume to             retrieve the build package files from Amazon Simple Storage Service (Amazon S3).
*/
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

/**
* @property FromPort {Number} Required: Yes. The starting value for a range of allowed port numbers. This value must be lower             than the ToPort value.
* @property IpRange {String} Required: Yes. The range of allowed IP addresses in CIDR notation.
* @property Protocol {String} Required: Yes. The network communication protocol that is used by the fleet. For valid values, see             the IpPermission data type in the               Amazon GameLift API Reference.
* @property ToPort {Number} Required: Yes. The ending value for a range of allowed port numbers. This value must be higher than             the FromPort value.
*/
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

/**
* @property PolicyDocument {Object} Required: Yes. A policy document that describes what actions are allowed on which                   resources.Update requires: No interruption
* @property PolicyName {String} Required: Yes. The name of the policy.Update requires: No interruption
*/
class IAMPolicies extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null)
    }
    super('IAMPolicies', properties, propertiesObject)
  }
}

/**
* @property Password {String} Required: Yes. The password for the user.
* @property PasswordResetRequired {Boolean} Required: No. Specifies whether the user is required to set a new password the next time the                   user logs in to the AWS Management Console.
*/
class IAMUserLoginProfile extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      PasswordResetRequired: new ResourceAttribute('PasswordResetRequired', Boolean, 'No', null)
    }
    super('IAMUserLoginProfile', properties, propertiesObject)
  }
}

/**
* @property Enabled {Boolean} Required: No. Indicates whether CloudWatch Logs logging is enabled.
* @property LogGroupName {String} Required: Conditional. The name of the CloudWatch Logs log group that contains the log stream that Firehose will use.
* @property LogStreamName {String} Required: Conditional. The name of the CloudWatch Logs log stream that Firehose uses to send logs about data delivery.
*/
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

/**
* @property BufferingHints {AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints} Required: Yes. Configures how Firehose buffers incoming data while delivering it to the Amazon ES domain.
* @property CloudWatchLoggingOptions {AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} Required: No. The Amazon CloudWatch Logs logging options for the delivery stream.
* @property DomainARN {String} Required: Yes. The Amazon Resource Name (ARN) of the Amazon ES domain that Firehose delivers data to.
* @property IndexName {String} Required: Yes. The name of the Elasticsearch index to which Firehose adds data for indexing.
* @property IndexRotationPeriod {String} Required: Yes. The frequency of Elasticsearch index rotation. If you enable index rotation, Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see Index Rotation for the Amazon ES Destination in the Amazon Kinesis Firehose Developer Guide.
* @property RetryOptions {String} Required: undefined. The retry behavior when Firehose is unable to deliver data to Amazon ES.
* @property RoleARN {String} Required: Yes. The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket, AWS KMS (if you enable data encryption), and Amazon CloudWatch Logs (if you enable logging).For more information, see Grant Firehose Access to an Amazon Elasticsearch Service Destination  in the Amazon Kinesis Firehose Developer Guide.
* @property S3BackupMode {String} Required: Yes. The condition under which Firehose delivers data to Amazon Simple Storage Service (Amazon S3). You can send Amazon S3 all documents (all data) or only the documents that Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the S3BackupMode content for the ElasticsearchDestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.
* @property S3Configuration {String} Required: undefined. The S3 bucket where Firehose backs up incoming data.
* @property TypeName {String} Required: Yes. The Elasticsearch type name that Amazon ES adds to documents when indexing data.
*/
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

/**
* @property IntervalInSeconds {Number} Required: Yes. The length of time, in seconds, that Firehose buffers incoming data before delivering it to the destination. For valid values, see the IntervalInSeconds content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
* @property SizeInMBs {Number} Required: Yes. The size of the buffer, in MBs, that Firehose uses for incoming data before delivering it to the destination. For valid values, see the SizeInMBs content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
*/
class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceAttribute('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceAttribute('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

/**
* @property DurationInSeconds {Number} Required: Yes. After an initial failure to deliver to Amazon ES, the total amount of time during which Firehose re-attempts delivery (including the first attempt). If Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the DurationInSeconds content for the ElasticsearchRetryOptions data type in the Amazon Kinesis Firehose API Reference.
*/
class AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DurationInSeconds: new ResourceAttribute('DurationInSeconds', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions', properties, propertiesObject)
  }
}

/**
* @property CloudWatchLoggingOptions {AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} Required: No. The Amazon CloudWatch Logs logging options for the delivery stream.
* @property ClusterJDBCURL {String} Required: Yes. The connection string that Firehose uses to connect to the Amazon Redshift cluster.
* @property CopyCommand {AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand} Required: Yes. Configures the Amazon Redshift COPY command that Firehose uses to load data into the cluster from the S3 bucket.
* @property Password {String} Required: Yes. The password for the Amazon Redshift user that you specified in the Username property.
* @property RoleARN {String} Required: Yes. The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).For more information, see Grant Firehose Access to an Amazon Redshift Destination  in the Amazon Kinesis Firehose Developer Guide.
* @property S3Configuration {AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration} Required: Yes. The S3 bucket where Firehose first delivers data. After the data is in the bucket, Firehose uses the COPY command to load the data into the Amazon Redshift cluster. For the S3 bucket's compression format, don't specify SNAPPY or ZIP because the Amazon Redshift COPY command doesn't support them.
* @property Username {String} Required: Yes. The Amazon Redshift user that has permission to access the Amazon Redshift cluster. This user must have INSERT privileges for copying data from the S3 bucket to the cluster.
*/
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

/**
* @property CopyOptions {String} Required: No. Parameters to use with the Amazon Redshift COPY command. For examples, see the CopyOptions content for the CopyCommand data type in the Amazon Kinesis Firehose API Reference.
* @property DataTableColumns {String} Required: No. A comma-separated list of the column names in the table that Firehose copies data to.
* @property DataTableName {String} Required: Yes. The name of the table where Firehose adds the copied data.
*/
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

/**
* @property BucketARN {String} Required: Yes. The Amazon Resource Name (ARN) of the S3 bucket to send data to.
* @property BufferingHints {AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints} Required: Yes. Configures how Firehose buffers incoming data while delivering it to the S3 bucket.
* @property CloudWatchLoggingOptions {AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} Required: No. The Amazon CloudWatch Logs logging options for the delivery stream.
* @property CompressionFormat {String} Required: Yes. The type of compression that  Firehose uses to compress the data that it delivers to the S3 bucket. For valid values, see the CompressionFormat content for the S3DestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.
* @property EncryptionConfiguration {AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration} Required: No. Configures Amazon Simple Storage Service (Amazon S3) server-side encryption. Firehose uses AWS Key Management Service (AWS KMS) to encrypt the data that it delivers to your S3 bucket.
* @property Prefix {String} Required: Yes. A prefix that Firehose adds to the files that it delivers to the S3 bucket. The prefix helps you identify the files that Firehose delivered.
* @property RoleARN {String} Required: Yes. The ARN of an AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).For more information, see Grant Firehose Access to an Amazon S3 Destination in the Amazon Kinesis Firehose Developer Guide.
*/
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

/**
* @property IntervalInSeconds {Number} Required: Yes. The length of time, in seconds, that Firehose buffers incoming data before delivering it to the destination. For valid values, see the IntervalInSeconds content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
* @property SizeInMBs {Number} Required: Yes. The size of the buffer, in MBs, that Firehose uses for incoming data before delivering it to the destination. For valid values, see the SizeInMBs content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
*/
class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      IntervalInSeconds: new ResourceAttribute('IntervalInSeconds', Number, 'Yes', null),
      SizeInMBs: new ResourceAttribute('SizeInMBs', Number, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints', properties, propertiesObject)
  }
}

/**
* @property AWSKMSKeyARN {String} Required: Yes. The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Firehose stream. The key must belong to the same region as the destination S3 bucket.
*/
class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      AWSKMSKeyARN: new ResourceAttribute('AWSKMSKeyARN', String, 'Yes', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig', properties, propertiesObject)
  }
}

/**
* @property KMSEncryptionConfig {AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig} Required: No. The AWS Key Management Service (AWS KMS) encryption key that Amazon S3 uses to encrypt your data.
* @property NoEncryptionConfig {String} Required: No. Disables encryption. For valid values, see the NoEncryptionConfig content for the EncryptionConfiguration data type in the Amazon Kinesis Firehose API Reference.
*/
class AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      KMSEncryptionConfig: new ResourceAttribute('KMSEncryptionConfig', AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig, 'No', null),
      NoEncryptionConfig: new ResourceAttribute('NoEncryptionConfig', String, 'No', null)
    }
    super('AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration', properties, propertiesObject)
  }
}

/**
* @property S3Bucket {String} Required: Conditional. The name of the S3 bucket that contains the source code of your Lambda function. The S3 bucket must be in the same region as the stack.NoteThe cfn-response module isn't available for source code stored in S3 buckets. You must write your own functions to send responses.
* @property S3Key {String} Required: Conditional. The location and name of the .zip file that contains your source code. If you specify this property, you must also specify the S3Bucket property.
* @property S3ObjectVersion {String} Required: No. If you have S3 versioning enabled, the version ID of the.zip file that contains your source code. You can specify this property only if you specify the S3Bucket and S3Key properties.
* @property ZipFile {String} Required: Conditional. For nodejs, nodejs4.3, and python2.7 runtime environments, the source code of your Lambda function. You can't use this property with other runtime environments.You can specify up to 4096 characters. You must precede certain special characters in your source code, such as quotation marks ("), newlines (\n), and tabs (\t), with a backslash (\). For a list of special characters, see http://json.org/.If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module that simplifies sending responses. For more information, see cfn-response Module.
* @property event {undefined} Required: undefined. The fields in a custom resource request.
* @property context {undefined} Required: undefined. An object, specific to Lambda functions, that you can use to specify when the function and any callbacks have completed execution or to access information from within the Lambda execution environment. For more information, see Programming Model (Node.js) in the AWS Lambda Developer Guide.
* @property responseStatus {undefined} Required: undefined. Whether the function successfully completed. Use the cfnresponse module constants to specify the status: SUCCESS for successful executions and FAILED for failed executions.
* @property responseData {undefined} Required: undefined. The Data field of a custom resource response object. The data is a list of name-value pairs.
* @property physicalResourceId {undefined} Required: undefined. Optional. The unique identifier of the custom resource that invoked the function. By default, the module uses the name of the Amazon CloudWatch Logs log stream that is associated with the Lambda function.
*/
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

/**
* @property SecurityGroupIds {String} Required: Yes. A list of one or more security groups IDs in the VPC that includes the resources to which your Lambda function requires access.
* @property SubnetIds {String} Required: Yes. A list of one or more subnet IDs in the VPC that includes the resources to which your Lambda function requires access.
*/
class AWSLambdaFunctionVPCConfig extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      SecurityGroupIds: new ResourceAttributeArray('SecurityGroupIds', String, 'Yes', null),
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null)
    }
    super('AWSLambdaFunctionVPCConfig', properties, propertiesObject)
  }
}

/**
*/
class NameType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
    }
    super('NameType', properties, propertiesObject)
  }
}

/**
* @property CpuThreshold {Number} Required: No. The percentage of CPU utilization that triggers the starting or stopping of                   instances (scaling).
* @property IgnoreMetricsTime {Number} Required: No. The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks should                   ignore metrics and not start any additional scaling events.
* @property InstanceCount {Number} Required: No. The number of instances to add or remove when the load exceeds a                   threshold.
* @property LoadThreshold {Number} Required: No. The degree of system load that triggers the starting or stopping of instances                   (scaling). For more information about how load is computed, see Load                      (computing).
* @property MemoryThreshold {Number} Required: No. The percentage of memory consumption that triggers the starting or stopping of                   instances (scaling).
* @property ThresholdsWaitTime {Number} Required: No. The amount of time, in minutes, that the load must exceed a threshold before                   instances are added or removed.
*/
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

/**
* @property BerkshelfVersion {String} Required: No. The Berkshelf version.
* @property ManageBerkshelf {Boolean} Required: No. Whether to enable Berkshelf.
*/
class AWSOpsWorksChefConfigurationType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      BerkshelfVersion: new ResourceAttribute('BerkshelfVersion', String, 'No', null),
      ManageBerkshelf: new ResourceAttribute('ManageBerkshelf', Boolean, 'No', null)
    }
    super('AWSOpsWorksChefConfigurationType', properties, propertiesObject)
  }
}

/**
* @property ShutdownEventConfiguration {AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration} Required: No. Specifies the shutdown event configuration for a layer.
*/
class AWSOpsWorksLayerLifeCycleConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ShutdownEventConfiguration: new ResourceAttribute('ShutdownEventConfiguration', AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfiguration', properties, propertiesObject)
  }
}

/**
* @property DelayUntilElbConnectionsDrained {Boolean} Required: No. Indicates whether to wait for connections to drain from the Elastic Load Balancing load                   balancers.
* @property ExecutionTimeout {Number} Required: No. The time, in seconds, that AWS OpsWorks waits after a shutdown event has been                   triggered before shutting down an instance.
*/
class AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DelayUntilElbConnectionsDrained: new ResourceAttribute('DelayUntilElbConnectionsDrained', Boolean, 'No', null),
      ExecutionTimeout: new ResourceAttribute('ExecutionTimeout', Number, 'No', null)
    }
    super('AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration', properties, propertiesObject)
  }
}

/**
* @property DownScaling {AWSOpsWorksAutoScalingThresholdsType} Required: No. The threshold below which the instances are scaled down (stopped). If the load                   falls below this threshold for a specified amount of time, AWS OpsWorks stops a specified                   number of instances.
* @property Enable {Boolean} Required: No. Whether to enable automatic load-based scaling for the layer.
* @property UpScaling {AWSOpsWorksAutoScalingThresholdsType} Required: No. The threshold above which the instances are scaled up (added). If the load                   exceeds this thresholds for a specified amount of time, AWS OpsWorks starts a specified                   number of instances.
*/
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

/**
* @property Configure {String} Required: No. Custom recipe names to be run following a Configure event. The event occurs on                   all of the stack's instances when an instance enters or leaves the online                   state.
* @property Deploy {String} Required: No. Custom recipe names to be run following a Deploy event. The event occurs when                   you run a deploy command, typically to deploy an application to a set                   of application server instances.
* @property Setup {String} Required: No. Custom recipe names to be run following a Setup event. This event                   occurs on a new instance after it successfully boots.
* @property Shutdown {String} Required: No. Custom recipe names to be run following a Shutdown event. This                   event occurs after you direct AWS OpsWorks to shut an instance down before the associated                   Amazon EC2 instance is actually terminated.
* @property Undeploy {String} Required: No. Custom recipe names to be run following a Undeploy event. This                   event occurs when you delete an app or run an undeploy command to                   remove an app from a set of application server instances.
*/
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

/**
* @property Password {String} Required: No. This parameter depends on the repository type. For Amazon S3 bundles, set                      Password to the appropriate IAM secret access key. For HTTP                   bundles, Git repositories, and Subversion repositories, set Password                   to the appropriate password.
* @property Revision {String} Required: No. The application's version. With AWS OpsWorks, you can deploy new versions of an                   application. One of the simplest approaches is to have branches or revisions in                   your repository that represent different versions that can potentially be                   deployed.
* @property SshKey {String} Required: No. The repository's SSH key. For more information, see Using Git Repository SSH Keys in the AWS OpsWorks User Guide.To pass in an SSH key as a parameter, see the following                   example:
* @property Type {String} Required: No. The repository type.
* @property Url {String} Required: No. The source URL.
* @property Username {String} Required: No. This parameter depends on the repository type. For Amazon S3 bundles, set                      Username to the appropriate IAM access key ID. For HTTP bundles,                   Git repositories, and Subversion repositories, set Username to the                   appropriate user name.
*/
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

/**
* @property Key {String} Required: Yes. The name of the environment variable, which can consist of up to 64 characters.                   You can use upper and lowercase letters, numbers, and underscores (_), but the                   name must start with a letter or underscore.
* @property Secure {Boolean} Required: No. Indicates whether the value of the environment variable is concealed, such as                   with a DescribeApps                   response. To conceal an environment variable's value, set the value to                      true.
* @property Value {String} Required: Yes. The value of the environment variable, which can be empty. You can specify a                   value of up to 256 characters.
*/
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

/**
* @property Certificate {String} Required: Yes. The contents of the certificate's domain.crt file.
* @property Chain {String} Required: No. An intermediate certificate authority key or client authentication.
* @property PrivateKey {String} Required: Yes. The private key; the contents of the certificate's                      domain.kex file.
*/
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

/**
* @property Name {String} Required: No. The name of the configuration manager.
* @property Version {String} Required: No. The Chef version.
*/
class AWSOpsWorksStackConfigurationManagerType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super('AWSOpsWorksStackConfigurationManagerType', properties, propertiesObject)
  }
}

/**
* @property Friday {Map} Required: No. The schedule for Friday.
* @property Monday {Map} Required: No. The schedule for Monday.
* @property Saturday {Map} Required: No. The schedule for Saturday.
* @property Sunday {Map} Required: No. The schedule for Sunday.
* @property Thursday {Map} Required: No. The schedule for Thursday.
* @property Tuesday {Map} Required: No. The schedule for Tuesday.
* @property Wednesday {Map} Required: No. The schedule for Wednesday.
*/
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

/**
* @property Iops {Number} Required: Conditional. The number of I/O operations per second (IOPS) to provision for the                   volume.
* @property MountPoint {String} Required: Yes. The volume mount point, such as /dev/sdh.
* @property NumberOfDisks {Number} Required: Yes. The number of disks in the volume.
* @property RaidLevel {Number} Required: No. The volume RAID level.
* @property Size {Number} Required: Yes. The volume size.
* @property VolumeType {String} Required: No. The type of volume, such as magnetic or SSD. For valid values, see VolumeConfiguration in                   the AWS OpsWorks API Reference.
*/
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

/**
* @property ParameterName {String} Required: Yes. The name of the parameter.
* @property ParameterValue {String} Required: Yes. The value of the parameter.
*/
class AmazonRedshiftParameterType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      ParameterName: new ResourceAttribute('ParameterName', String, 'Yes', null),
      ParameterValue: new ResourceAttribute('ParameterValue', String, 'Yes', null)
    }
    super('AmazonRedshiftParameterType', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: Yes. The key name of the tag. You can specify a value that is 1 to 128 Unicode                   characters in length and cannot be prefixed with aws:. You can use                   any of the following characters: the set of Unicode letters, digits, whitespace,                      _, ., /, =, +,                   and -.
* @property Value {String} Required: Yes. The value for the tag. You can specify a value that is 1 to 128 Unicode                   characters in length and cannot be prefixed with aws:. You can use                   any of the following characters: the set of Unicode letters, digits, whitespace,                      _, ., /, =, +,                   and -.
*/
class AWSCloudFormationResourceTagsType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSCloudFormationResourceTagsType', properties, propertiesObject)
  }
}

/**
* @property DBSecurityGroupMemberships {String} Required: No. A list of database security group names for this option. If the option requires             access to a port, the security groups must allow access to that port. If you specify             this property, don't specify the VPCSecurityGroupMemberships             property.
* @property OptionName {String} Required: Yes. The name of the option. For more information about options, see Working with Option               Groups in the Amazon Relational Database Service User               Guide.
* @property OptionSettings {AmazonRDSOptionGroupOptionConfigurationsOptionSettings} Required: No. The settings for this option.
* @property Port {Number} Required: No. The port number that this option uses.
* @property VpcSecurityGroupMemberships {String} Required: No. A list of VPC security group IDs for this option. If the option requires access to a             port, the security groups must allow access to that port. If you specify this property,             don't specify the DBSecurityGroupMemberships property.
*/
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

/**
* @property Name {String} Required: No. The name of the option setting that you want to specify.
* @property Value {String} Required: No. The value of the option setting.
*/
class AmazonRDSOptionGroupOptionConfigurationsOptionSettings extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      Value: new ResourceAttribute('Value', String, 'No', null)
    }
    super('AmazonRDSOptionGroupOptionConfigurationsOptionSettings', properties, propertiesObject)
  }
}

/**
* @property CIDRIP {String} Required: No. The IP range to authorize.For an overview of CIDR ranges, go to the Wikipedia                   Tutorial.Update requires: Replacement
* @property EC2SecurityGroupId {String} Required: No. Id of the VPC or EC2 Security Group to authorize.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                   EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: Replacement
* @property EC2SecurityGroupName {String} Required: No. Name of the EC2 Security Group to authorize.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                   EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: Replacement
* @property EC2SecurityGroupOwnerId {String} Required: No. AWS Account Number of the owner of the EC2 Security Group specified in the EC2SecurityGroupName                   parameter. The AWS Access Key ID is not an acceptable value.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                   EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: Replacement
*/
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

/**
* @property DNSName {String} Required: Yes. The DNS name of the load balancer, the domain name of the CloudFront distribution, the website endpoint of the Amazon S3 bucket, or another record set in the same hosted zone that is the target of the alias.
* @property EvaluateTargetHealth {Boolean} Required: No. Whether Amazon Route 53 checks the health of the resource record sets in the alias target                   when responding to DNS queries. For more information about using this property,                   see EvaluateTargetHealth in the                   Amazon Route 53 API Reference.
* @property HostedZoneId {String} Required: Yes. The hosted zone ID. For load balancers, use the canonical hosted zone ID of the                   load balancer. For Amazon S3, use the hosted zone ID for your bucket's website                   endpoint. For CloudFront, use Z2FDTNDATAQYW2. For examples, see Example: Creating Alias Resource                      Record Sets in the Amazon Route 53 API Reference.
*/
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

/**
* @property ContinentCode {String} Required: Conditional. All DNS queries from the continent that you specified are routed to this                   resource record set. If you specify this property, omit the                      CountryCode and SubdivisionCode properties.For valid values, see the ContinentCode element in the                   Amazon Route 53 API Reference.
* @property CountryCode {String} Required: Conditional. All DNS queries from the country that you specified are routed to this resource                   record set. If you specify this property, omit the ContinentCode                   property.For valid values, see the CountryCode element in the                   Amazon Route 53 API Reference.
* @property SubdivisionCode {String} Required: No. If you specified US for the country code, you can specify a state                   in the United States. All DNS queries from the state that you specified are routed                   to this resource record set. If you specify this property, you must specify                      US for the CountryCode and omit the                      ContinentCode property.For valid values, see the SubdivisionCode element in the                   Amazon Route 53 API Reference.
*/
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

/**
* @property FailureThreshold {Number} Required: No. The number of consecutive health checks that an endpoint must pass or fail for                   Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or                   healthy to unhealthy.  For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the                      Amazon Route 53 Developer Guide.
* @property FullyQualifiedDomainName {String} Required: Conditional. If you specified the IPAddress property, the value that you want                   Amazon Route 53 to pass in the host header in all health checks except for TCP health                   checks. If you don't specify an IP address, the domain that Amazon Route 53 sends a DNS                   request to. Amazon Route 53 uses the IP address that the DNS returns to check the health of                   the endpoint.
* @property IPAddress {String} Required: No. The IPv4 IP address of the endpoint on which you want Amazon Route 53 to                   perform health checks. If you don't specify an IP address, Amazon Route 53 sends a DNS                   request to resolve the domain name that you specify in the                      FullyQualifiedDomainName property.
* @property Port {Number} Required: Conditional. The port on the endpoint on which you want Amazon Route 53 to perform health                   checks.
* @property RequestInterval {Number} Required: No. The number of seconds between the time that Amazon Route 53 gets a response from your                   endpoint and the time that it sends the next health-check request. Each Amazon Route 53                   health checker makes requests at this interval. For valid values, see the RequestInterval element in the                      Amazon Route 53 API Reference.
* @property ResourcePath {String} Required: No. The path that you want Amazon Route 53 to request when performing health checks. The path                   can be any value for which your endpoint returns an HTTP status code of                         2xx or                         3xx when the endpoint is healthy,                   such as /docs/route53-health-check.html.
* @property SearchString {String} Required: No. If the value of the Type property is HTTP_STR_MATCH                   or HTTPS_STR_MATCH, the string that you want Amazon Route 53 to search for in                   the response body from the specified resource. If the string appears in the                   response body, Amazon Route 53 considers the resource healthy.
* @property Type {String} Required: Yes. The type of health check that you want to create, which indicates how Amazon Route 53                   determines whether an endpoint is healthy. You can specify HTTP,                      HTTPS, HTTP_STR_MATCH,  HTTPS_STR_MATCH,                   or TCP. For information about the different types, see the Type element                   in the Amazon Route 53 API Reference.
*/
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

/**
* @property Key {String} Required: Yes. The key name of the tag.
* @property Value {String} Required: Yes. The value for the tag.
*/
class AmazonRoute53HealthCheckTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HealthCheckTags', properties, propertiesObject)
  }
}

/**
* @property Comment {String} Required: No. Any comments that you want to include about the hosted zone.
*/
class AmazonRoute53HostedZoneConfigProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Comment: new ResourceAttribute('Comment', String, 'No', null)
    }
    super('AmazonRoute53HostedZoneConfigProperty', properties, propertiesObject)
  }
}

/**
* @property Key {String} Required: Yes. The key name of the tag.
* @property Value {String} Required: Yes. The value for the tag.
*/
class AmazonRoute53HostedZoneTags extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Key: new ResourceAttribute('Key', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneTags', properties, propertiesObject)
  }
}

/**
* @property VPCId {String} Required: Yes. The ID of the Amazon VPC that you want to associate with the hosted zone.
* @property VPCRegion {String} Required: Yes. The region in which the Amazon VPC was created as specified in the                      VPCId property.
*/
class AmazonRoute53HostedZoneVPCs extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      VPCId: new ResourceAttribute('VPCId', String, 'Yes', null),
      VPCRegion: new ResourceAttribute('VPCRegion', String, 'Yes', null)
    }
    super('AmazonRoute53HostedZoneVPCs', properties, propertiesObject)
  }
}

/**
* @property CorsRules {AmazonS3CorsConfigurationRule} Required: Yes. A set of origins and methods that you allow.
*/
class AmazonS3CorsConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      CorsRules: new ResourceAttribute('CorsRules', AmazonS3CorsConfigurationRule, 'Yes', null)
    }
    super('AmazonS3CorsConfiguration', properties, propertiesObject)
  }
}

/**
* @property AllowedHeaders {String} Required: No. Headers that are specified in the Access-Control-Request-Headers                   header. These headers are allowed in a preflight OPTIONS request. In response to                   any preflight OPTIONS request, Amazon S3 returns any requested headers that are                   allowed.
* @property AllowedMethods {String} Required: Yes. An HTTP method that you allow the origin to execute. The valid values are                      GET, PUT, HEAD, POST, and                      DELETE.
* @property AllowedOrigins {String} Required: Yes. An origin that you allow to send cross-domain requests.
* @property ExposedHeaders {String} Required: No. One or more headers in the response that are accessible to client applications                   (for example, from a JavaScript XMLHttpRequest object).
* @property Id {String} Required: No. A unique identifier for this rule. The value cannot be more than 255                   characters.
* @property MaxAge {Number} Required: No. The time in seconds that your browser is to cache the preflight response for                   the specified resource.
*/
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

/**
* @property Rules {AmazonS3LifecycleRule} Required: Yes. A lifecycle rule for individual objects in an S3 bucket.
*/
class AmazonS3LifecycleConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceAttribute('Rules', AmazonS3LifecycleRule, 'Yes', null)
    }
    super('AmazonS3LifecycleConfiguration', properties, propertiesObject)
  }
}

/**
* @property ExpirationDate {String} Required: Conditional. Indicates when objects are deleted from Amazon S3 and Amazon Glacier. The date value must be                   in ISO 8601 format. The time is always midnight UTC. If you specify an expiration                   and transition time, you must use the same time unit for both properties (either                   in days or by date). The expiration time must also be later than the transition                   time.
* @property ExpirationInDays {Number} Required: Conditional. Indicates the number of days after creation when objects are deleted from Amazon S3                   and Amazon Glacier. If you specify an expiration and transition time, you must use the same                   time unit for both properties (either in days or by date). The expiration time                   must also be later than the transition time.
* @property Id {String} Required: No. A unique identifier for this rule. The value cannot be more than 255                   characters.
* @property NoncurrentVersionExpirationInDays {Number} Required: Conditional. For buckets with versioning enabled (or suspended), specifies the time, in                   days, between when a new version of the object is uploaded to the bucket and when                   old versions of the object expire. When object versions expire, Amazon S3 permanently                   deletes them. If you specify a transition and expiration time, the expiration time                   must be later than the transition time.
* @property NoncurrentVersionTransition {AmazonS3LifecycleRuleNoncurrentVersionTransition} Required: Conditional. For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransitions property.
* @property NoncurrentVersionTransitions {AmazonS3LifecycleRuleNoncurrentVersionTransition} Required: Conditional. For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransition property.
* @property Prefix {String} Required: No. Object key prefix that identifies one or more objects to which this rule                   applies.
* @property Status {String} Required: Yes. Specify either Enabled or Disabled. If you specify                      Enabled, Amazon S3 executes this rule as scheduled. If you specify                      Disabled, Amazon S3 ignores this rule.
* @property Transition {AmazonS3LifecycleRuleTransition} Required: Conditional. Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transitions property.
* @property Transitions {AmazonS3LifecycleRuleTransition} Required: Conditional. One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transition property.
*/
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

/**
* @property StorageClass {String} Required: Yes. The storage class to which you want the object to transition, such as                      GLACIER. For valid values, see the StorageClass                   request element of the PUT                      Bucket lifecycle action in the                   Amazon Simple Storage Service API Reference.
* @property TransitionInDays {Number} Required: Yes. The number of days between the time that a new version of the object is                   uploaded to the bucket and when old versions of the object are transitioned to the                   specified storage class.
*/
class AmazonS3LifecycleRuleNoncurrentVersionTransition extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      StorageClass: new ResourceAttribute('StorageClass', String, 'Yes', null),
      TransitionInDays: new ResourceAttribute('TransitionInDays', Number, 'Yes', null)
    }
    super('AmazonS3LifecycleRuleNoncurrentVersionTransition', properties, propertiesObject)
  }
}

/**
* @property StorageClass {String} Required: Yes. The storage class to which you want the object to transition, such as                      GLACIER. For valid values, see the StorageClass                   request element of the PUT                      Bucket lifecycle action in the                   Amazon Simple Storage Service API Reference.
* @property TransitionDate {String} Required: Conditional. Indicates when objects are transitioned to the specified storage class. The                   date value must be in ISO 8601 format. The time is always midnight UTC.
* @property TransitionInDays {Number} Required: Conditional. Indicates the number of days after creation when objects are transitioned to                   the specified storage class.
*/
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

/**
* @property DestinationBucketName {String} Required: No. The name of an Amazon S3 bucket where Amazon S3 store server access log files. You can                   store log files in any bucket that you own. By default, logs are stored in the                   bucket where the LoggingConfiguration property is defined.
* @property LogFilePrefix {String} Required: No. A prefix for the all log object keys. If you store log files from multiple Amazon S3                   buckets in a single bucket, you can use a prefix to distinguish which log files                   came from which bucket.
*/
class AmazonS3LoggingConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      DestinationBucketName: new ResourceAttribute('DestinationBucketName', String, 'No', null),
      LogFilePrefix: new ResourceAttribute('LogFilePrefix', String, 'No', null)
    }
    super('AmazonS3LoggingConfiguration', properties, propertiesObject)
  }
}

/**
* @property LambdaConfigurations {AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations} Required: No. The AWS Lambda functions to invoke and the events for which to invoke the                   functions.
* @property QueueConfigurations {AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations} Required: No. The Amazon Simple Queue Service queues to publish messages to and the events for which to publish                   messages.
* @property TopicConfigurations {AmazonS3NotificationConfigurationTopicConfigurations} Required: No. The topic to which notifications are sent and the events for which notification                   are generated.
*/
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

/**
* @property S3Key {AmazonS3NotificationConfigurationConfigFilterS3Key} Required: Yes. Amazon S3 filtering rules that describe for which object key names to send                   notifications.
*/
class AmazonS3NotificationConfigurationConfigFilter extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      S3Key: new ResourceAttribute('S3Key', AmazonS3NotificationConfigurationConfigFilterS3Key, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilter', properties, propertiesObject)
  }
}

/**
* @property Rules {AmazonS3NotificationConfigurationConfigFilterS3KeyRules} Required: Yes. The object key name to filter on and whether to filter on the suffix or prefix                   of the key name.
*/
class AmazonS3NotificationConfigurationConfigFilterS3Key extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Rules: new ResourceAttributeArray('Rules', AmazonS3NotificationConfigurationConfigFilterS3KeyRules, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3Key', properties, propertiesObject)
  }
}

/**
* @property Name {String} Required: Yes. Whether the filter matches the prefix or suffix of object key names. For valid                   values, see the Name request element of the PUT Bucket                      notification action in the                   Amazon Simple Storage Service API Reference.
* @property Value {String} Required: Yes. The value that the filter searches for in object key names.
*/
class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AmazonS3NotificationConfigurationConfigFilterS3KeyRules', properties, propertiesObject)
  }
}

/**
* @property Event {String} Required: Yes. The S3 bucket event for which to invoke the Lambda function.                   For more information, see Supported Event Types in the                   Amazon Simple Storage Service Developer Guide.
* @property Filter {AmazonS3NotificationConfigurationConfigFilter} Required: No. The filtering rules that determine which objects invoke the Lambda function. For                   example, you can create a filter so that only image files with a                      .jpg extension invoke the function when they are added to                   the S3 bucket.
* @property Function {String} Required: Yes. The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the                   specified event type occurs.
*/
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

/**
* @property Event {String} Required: Yes. The S3 bucket event about which you want to publish messages to Amazon Simple Queue Service (                   Amazon SQS). For more information, see Supported Event Types in the                   Amazon Simple Storage Service Developer Guide.
* @property Filter {AmazonS3NotificationConfigurationConfigFilter} Required: No. The filtering rules that determine for which objects to send notifications. For                   example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only                   when image files with a .jpg extension are added to the                   bucket.
* @property Queue {String} Required: Yes. The Amazon Resource Name (ARN) of the Amazon SQS queue that Amazon S3 publishes messages                   to when the specified event type occurs.
*/
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

/**
* @property Event {String} Required: Yes. The Amazon Simple Storage Service (Amazon S3) bucket event about which to send notifications. For more                   information, see Supported Event                      Types in the Amazon Simple Storage Service Developer Guide.
* @property Filter {AmazonS3NotificationConfigurationConfigFilter} Required: No. The filtering rules that determine for which objects to send notifications. For                   example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only                   when image files with a .jpg extension are added to the                   bucket.
* @property Topic {String} Required: Yes. The Amazon SNS topic Amazon Resource Name (ARN) to which Amazon S3 reports the specified                   events.
*/
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

/**
* @property Role {String} Required: Yes. The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that Amazon S3 assumes                   when replicating objects. For more information, see How to Set Up Cross-Region                      Replication in the Amazon Simple Storage Service Developer Guide.
* @property Rules {AmazonS3ReplicationConfigurationRules} Required: Yes. A replication rule that specifies which objects to replicate and where they are                   stored.
*/
class AmazonS3ReplicationConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Role: new ResourceAttribute('Role', String, 'Yes', null),
      Rules: new ResourceAttributeArray('Rules', AmazonS3ReplicationConfigurationRules, 'Yes', null)
    }
    super('AmazonS3ReplicationConfiguration', properties, propertiesObject)
  }
}

/**
* @property Destination {AmazonS3ReplicationConfigurationRulesDestination} Required: Yes. Defines the destination where Amazon S3 stores replicated objects.
* @property Id {String} Required: No. A unique identifier for the rule. If you don't specify a value, AWS CloudFormation generates                   a random ID.
* @property Prefix {String} Required: Yes. An object prefix. This rule applies to all Amazon S3 objects with this prefix. To                   specify all objects in an S3 bucket, specify an empty string.
* @property Status {String} Required: Yes. Whether the rule is enabled. For valid values, see the Status                   element of the PUT Bucket                      replication action in the Amazon Simple Storage Service API Reference.
*/
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

/**
* @property Bucket {String} Required: Yes. The Amazon resource name (ARN) of an S3 bucket where Amazon S3 stores replicated                   objects. This destination bucket must be in a different region than your source                   bucket.If you have multiple rules in your replication configuration, specify the same                   destination bucket for all of the rules.
* @property StorageClass {String} Required: No. The storage class to use when replicating objects, such as standard or reduced                   redundancy. By default, Amazon S3 uses the storage class of the source object to create                   object replica. For valid values, see the StorageClass element of the                      PUT Bucket                      replication action in the Amazon Simple Storage Service API Reference.
*/
class AmazonS3ReplicationConfigurationRulesDestination extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      StorageClass: new ResourceAttribute('StorageClass', String, 'No', null)
    }
    super('AmazonS3ReplicationConfigurationRulesDestination', properties, propertiesObject)
  }
}

/**
* @property Status {String} Required: Yes. The versioning state of an Amazon S3 bucket. If you enable versioning, you must                   suspend versioning to disable it.
*/
class AmazonS3VersioningConfiguration extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Status: new ResourceAttribute('Status', String, 'Yes', null)
    }
    super('AmazonS3VersioningConfiguration', properties, propertiesObject)
  }
}

/**
* @property ErrorDocument {String} Required: No. The name of the error document for the website.
* @property IndexDocument {String} Required: Yes. The name of the index document for the website.
* @property RedirectAllRequestsTo {AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty} Required: No. The redirect behavior for every request to this bucket's website endpoint.ImportantIf you specify this property, you cannot specify any other                         property.
* @property RoutingRules {AmazonS3WebsiteConfigurationRoutingRulesProperty} Required: No. Rules that define when a redirect is applied and the redirect behavior.
*/
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

/**
* @property HostName {String} Required: Yes. Name of the host where requests are redirected.
* @property Protocol {String} Required: No. Protocol to use (http or https) when redirecting                   requests. The default is the protocol that is used in the original request.
*/
class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HostName: new ResourceAttribute('HostName', String, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty', properties, propertiesObject)
  }
}

/**
* @property RedirectRule {AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty} Required: Yes. Redirect requests to another host, to another page, or with another                   protocol.
* @property RoutingRuleCondition {AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty} Required: No. Rules that define when a redirect is applied.
*/
class AmazonS3WebsiteConfigurationRoutingRulesProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      RedirectRule: new ResourceAttribute('RedirectRule', AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, 'Yes', null),
      RoutingRuleCondition: new ResourceAttribute('RoutingRuleCondition', AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, 'No', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesProperty', properties, propertiesObject)
  }
}

/**
* @property HostName {String} Required: No. Name of the host where requests are redirected.
* @property HttpRedirectCode {String} Required: No. The HTTP redirect code to use on the response.
* @property Protocol {String} Required: No. The protocol to use in the redirect request.
* @property ReplaceKeyPrefixWith {String} Required: No. The object key prefix to use in the redirect request. For example, to redirect                   requests for all pages with the prefix docs/ (objects in the                      docs/ folder) to the documents/ prefix, you can set                   the KeyPrefixEquals property in routing condition property to                      docs/, and set the ReplaceKeyPrefixWith property to documents/.ImportantIf you specify this property, you cannot specify the                         ReplaceKeyWith property.
* @property ReplaceKeyWith {String} Required: No. The specific object key to use in the redirect request. For example, redirect                   request to error.html.ImportantIf you specify this property, you cannot specify the                         ReplaceKeyPrefixWith property.
*/
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

/**
* @property HttpErrorCodeReturnedEquals {String} Required: Conditional. Applies this redirect if the error code equals this value in the event of an                   error.
* @property KeyPrefixEquals {String} Required: Conditional. The object key name prefix when the redirect is applied. For example, to                   redirect requests for ExamplePage.html, set the key prefix to                      ExamplePage.html. To redirect request for all pages with the                   prefix docs/, set the key prefix to docs/, which                   identifies all objects in the docs/ folder.
*/
class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new ResourceAttribute('HttpErrorCodeReturnedEquals', String, 'Conditional', null),
      KeyPrefixEquals: new ResourceAttribute('KeyPrefixEquals', String, 'Conditional', null)
    }
    super('AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty', properties, propertiesObject)
  }
}

/**
* @property Endpoint {String} Required: Yes. The subscription's endpoint (format depends on the protocol). For more                   information, see the Subscribe                      Endpoint parameter in the                   Amazon Simple Notification Service API Reference.
* @property Protocol {String} Required: Yes. The subscription's protocol. For more information, see the Subscribe Protocol parameter in                   the Amazon Simple Notification Service API Reference.
*/
class AmazonSNSSubscriptionPropertyType extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Endpoint: new ResourceAttribute('Endpoint', String, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null)
    }
    super('AmazonSNSSubscriptionPropertyType', properties, propertiesObject)
  }
}

/**
* @property deadLetterTargetArn {String} Required: No. The Amazon Resource Name (ARN) of the dead letter queue to which the messages are             sent to after the maxReceiveCount value has been exceeded.
* @property maxReceiveCount {Number} Required: No. The number of times a message is delivered to the source queue before being sent to             the dead letter queue.
*/
class AmazonSQSRedrivePolicy extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      deadLetterTargetArn: new ResourceAttribute('deadLetterTargetArn', String, 'No', null),
      maxReceiveCount: new ResourceAttribute('maxReceiveCount', Number, 'No', null)
    }
    super('AmazonSQSRedrivePolicy', properties, propertiesObject)
  }
}

/**
* @property FieldToMatch {AWSWAFByteMatchSetByteMatchTuplesFieldToMatch} Required: Yes. The part of a web request that you want AWS WAF to search, such as a specific                   header or a query string.
* @property PositionalConstraint {String} Required: Yes. How AWS WAF finds matches within the web request part in which you are searching.                   For valid values, see the PositionalConstraint content for the ByteMatchTuple data type in                   the AWS WAF API Reference.
* @property TargetString {String} Required: Conditional. The value that AWS WAF searches for. AWS CloudFormation base64 encodes this value before                   sending it to AWS WAF.AWS WAF searches for this value in a specific part of web requests, which you                   define in the FieldToMatch property.Valid values depend on the Type value in the                      FieldToMatch property. For example, for a METHOD                   type, you must specify HTTP methods such as DELETE, GET, HEAD, OPTIONS,                      PATCH, POST, and PUT. For more information, see the                      TargetString content for the ByteMatchTuple data type in                   the AWS WAF API Reference.
* @property TargetStringBase64 {String} Required: Conditional. The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to                   AWS WAF without encoding it.AWS WAF searches for this value in a specific part of web requests, which you                   define in the FieldToMatch property.Valid values depend on the Type value in the                      FieldToMatch property. For example, for a METHOD                   type, you must specify HTTP methods such as DELETE, GET, HEAD, OPTIONS,                      PATCH, POST, and PUT. For more information, see the                      TargetString content for the ByteMatchTuple data type in                   the AWS WAF API Reference.
* @property TextTransformation {String} Required: Yes. Specifies how AWS WAF processes the target string value. Text transformations                   eliminate some of the unusual formatting that attackers use in web requests in an                   effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the                   target string value before inspecting a web request for a match.For example, AWS WAF can replace whitespace characters (such as \t                   and \n) with a single space. For valid values, see the                      TextTransformation content for the ByteMatchTuple data type in                   the AWS WAF API Reference.
*/
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

/**
* @property Data {String} Required: Conditional. If you specify HEADER for the Type property, the name             of the header that AWS WAF searches for, such as User-Agent or               Referer. If you specify any other value for the Type             property, do not specify this property.
* @property Type {String} Required: Yes. The part of the web request in which AWS WAF searches for the target string. For             valid values, see FieldToMatch             in the AWS WAF API Reference.
*/
class AWSWAFByteMatchSetByteMatchTuplesFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFByteMatchSetByteMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

/**
* @property Type {String} Required: Yes. The IP address type, such as IPV4. For valid values, see the                      Type contents of the IPSetDescriptor data type                   in the AWS WAF API Reference.
* @property Value {String} Required: Yes. An IP address (in CIDR notation) that AWS WAF permits, blocks, or counts. For                   example, to specify a single IP address such as 192.0.2.44, specify                      192.0.2.44/32. To specify a range of IP addresses such as                      192.0.2.0 to 192.0.2.255, specify                      192.0.2.0/24.
*/
class AWSWAFIPSetIPSetDescriptors extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Value: new ResourceAttribute('Value', String, 'Yes', null)
    }
    super('AWSWAFIPSetIPSetDescriptors', properties, propertiesObject)
  }
}

/**
* @property DataId {String} Required: Yes. The unique identifier of a predicate, such as the ID of a ByteMatchSet or IPSet.
* @property Negated {Boolean} Required: Yes. Whether to use the settings or the negated settings that you specified in the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects.Specify false if you want AWS WAF to allow, block, or count requests based on the settings in the specified ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects. For example, if an IPSet object includes the IP address 192.0.2.44, AWS WAF allows, blocks, or counts requests originating from that IP address.Specify true if you want AWS WAF to allow, block, or count requests based on the negated settings in the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects. For example, if an IPSet object includes the IP address 192.0.2.44, AWS WAF allows, blocks, or counts requests originating from all IP addresses except 192.0.2.44.
* @property Type {String} Required: Yes. The type of predicate in a rule, such as an IPSet               (IPMatch). For valid values, see the Type contents of the               Predicate data type in the               AWS WAF API Reference.
*/
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

/**
* @property ComparisonOperator {String} Required: Yes. The type of comparison that you want AWS WAF to perform. AWS WAF uses this value in combination with the Size and FieldToMatch property values to check if the size constraint is a match. For more information and valid values, see the ComparisonOperator content for the SizeConstraint data type in the AWS WAF API Reference.
* @property FieldToMatch {AWSWAFSizeConstraintSetSizeConstraintFieldToMatch} Required: Yes. The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
* @property Size {Number} Required: Yes. The size in bytes that you want AWS WAF to compare against the size of the specified FieldToMatch. AWS WAF uses Size in combination with the ComparisonOperator and FieldToMatch property values to check if the size constraint of a web request is a match. For more information and valid values, see the Size content for the SizeConstraint data type in the                      AWS WAF API Reference.
* @property TextTransformation {String} Required: Yes. Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the FieldToMatch before inspecting a web request for a match.For example, AWS WAF can replace white space characters (such as \t and \n) with a single space. For valid values, see the TextTransformation content for the SizeConstraint data type in the AWS WAF API Reference.
*/
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

/**
* @property Data {String} Required: Conditional. If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.
* @property Type {String} Required: Yes. The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.
*/
class AWSWAFSizeConstraintSetSizeConstraintFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFSizeConstraintSetSizeConstraintFieldToMatch', properties, propertiesObject)
  }
}

/**
* @property FieldToMatch {AWSWAFByteMatchSetByteMatchTuplesFieldToMatch} Required: Yes. The part of a web request that you want AWS WAF to search, such as a specific                   header or a query string.
* @property TextTransformation {String} Required: Yes. Text transformations eliminate some of the unusual formatting that attackers                   use in web requests in an effort to bypass AWS WAF. If you specify a transformation,                   AWS WAF transforms the target string value before inspecting a web request for a                   match. For valid values, see the TextTransformation content for the                      SqlInjectionMatchTuple data type in the                      AWS WAF API Reference.
*/
class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFByteMatchSetByteMatchTuplesFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples', properties, propertiesObject)
  }
}

/**
* @property Data {String} Required: Conditional. If you specify HEADER for the Type property, the name                   of the header that AWS WAF searches for, such as User-Agent or                      Referer. If you specify any other value for the Type                   property, do not specify this property.
* @property Type {String} Required: Yes. The part of the web request in which AWS WAF searches for the target string. For                   valid values, see FieldToMatch in the AWS WAF API Reference.
*/
class AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch', properties, propertiesObject)
  }
}

/**
* @property FieldToMatch {AWSWAFXssMatchSetXssMatchTupleFieldToMatch} Required: Yes. The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
* @property TextTransformation {String} Required: Yes. Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms theFieldToMatch parameter before inspecting a web request for a match.For example, AWS WAF can replace white space characters (such as \t and \n) with a single space. For valid values, see the TextTransformation content for the XssMatchTuple data type in the AWS WAF API Reference.
*/
class AWSWAFXssMatchSetXssMatchTuple extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      FieldToMatch: new ResourceAttribute('FieldToMatch', AWSWAFXssMatchSetXssMatchTupleFieldToMatch, 'Yes', null),
      TextTransformation: new ResourceAttribute('TextTransformation', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTuple', properties, propertiesObject)
  }
}

/**
* @property Data {String} Required: Conditional. If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.
* @property Type {String} Required: Yes. The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.
*/
class AWSWAFXssMatchSetXssMatchTupleFieldToMatch extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Data: new ResourceAttribute('Data', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFXssMatchSetXssMatchTupleFieldToMatch', properties, propertiesObject)
  }
}

/**
* @property Type {String} Required: Yes. For actions that are associated with a rule, the action that AWS WAF takes when a                   web request matches all conditions in a rule.For the default action of a web access control list (ACL), the action that                   AWS WAF takes when a web request doesn't match all conditions in any rule.For valid value, see the Type contents of the WafAction data type in the                      AWS WAF API Reference.
*/
class AWSWAFWebACLAction extends ResourceProperty {
  constructor (propertiesObject) {
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super('AWSWAFWebACLAction', properties, propertiesObject)
  }
}

/**
* @property Action {AWSWAFWebACLAction} Required: Yes. The action that Amazon CloudFront (CloudFront) or AWS WAF takes when a web request matches all                   conditions in the rule, such as allow, block, or count the request.
* @property Priority {Number} Required: Yes. The order in which AWS WAF evaluates the rules in a web ACL. AWS WAF evaluates                   rules with a lower value before rules with a higher value. The value must be a                   unique integer. If you have multiple rules in a web ACL, the priority numbers do                   not need to be consecutive.
* @property RuleId {String} Required: Yes. The ID of an AWS WAF rule to                   associate with a web ACL.
*/
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
