'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CloudTrail */

/** @memberof module:CloudTrail
*   @extends WKResource
* @property {String} CloudWatchLogsLogGroupArn Required: Conditional. The Amazon Resource Name (ARN) of a log group to which CloudTrail logs will be
            delivered.Update requires: No interruption
* @property {String} CloudWatchLogsRoleArn Required: No. The role ARN that Amazon CloudWatch Logs (CloudWatch Logs) assumes to write logs to a log group. For more information,
            see Role
              Policy Document for CloudTrail to Use CloudWatch Logs for Monitoring in the
              AWS CloudTrail User Guide.Update requires: No interruption
* @property {Boolean} EnableLogFileValidation Required: No. Indicates whether CloudTrail validates the integrity of log files. By default, AWS CloudFormation sets
            this value to false. When you disable log file integrity validation, CloudTrail
            stops creating digest files. For more information, see CreateTrail in the
              AWS CloudTrail API Reference.Update requires: No interruption
* @property {Boolean} IncludeGlobalServiceEvents Required: No. Indicates whether the trail is publishing events from global services, such as
            IAM, to the log files. By default, AWS CloudFormation sets this value to false.Update requires: No interruption
* @property {Boolean} IsLogging Required: Yes. Indicates whether the CloudTrail trail is currently logging AWS API calls.Update requires: No interruption
* @property {Boolean} IsMultiRegionTrail Required: No. Indicates whether the CloudTrail trail is created in the region in which you create the
            stack (false) or in all regions (true). By default, AWS CloudFormation sets
            this value to false. For more information, see How Does CloudTrail Behave Regionally and Globally? in the
              AWS CloudTrail User Guide.Update requires: No interruption
* @property {String} KMSKeyId Required: No. The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt CloudTrail logs. You can
            specify an alias name (prefixed with alias/), an alias ARN, a key ARN, or a
            globally unique identifier.Update requires: No interruption
* @property {String} S3BucketName Required: Yes. The name of the Amazon S3 bucket where CloudTrail publishes log files.Update requires: No interruption
* @property {String} S3KeyPrefix Required: No. An Amazon S3 object key prefix that precedes the name of all log files.Update requires: No interruption
* @property {String} SnsTopicName Required: No. The name of an Amazon SNS topic that is notified when new log files are
                  published.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this trail.Update requires: No interruption.
*/
class Trail extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new ResourceAttribute('CloudWatchLogsLogGroupArn', String, 'Conditional', null),
      CloudWatchLogsRoleArn: new ResourceAttribute('CloudWatchLogsRoleArn', String, 'No', null),
      EnableLogFileValidation: new ResourceAttribute('EnableLogFileValidation', Boolean, 'No', null),
      IncludeGlobalServiceEvents: new ResourceAttribute('IncludeGlobalServiceEvents', Boolean, 'No', null),
      IsLogging: new ResourceAttribute('IsLogging', Boolean, 'Yes', null),
      IsMultiRegionTrail: new ResourceAttribute('IsMultiRegionTrail', Boolean, 'No', null),
      KMSKeyId: new ResourceAttribute('KMSKeyId', String, 'No', null),
      S3BucketName: new ResourceAttribute('S3BucketName', String, 'Yes', null),
      S3KeyPrefix: new ResourceAttribute('S3KeyPrefix', String, 'No', null),
      SnsTopicName: new ResourceAttribute('SnsTopicName', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Trail: Trail
}
