'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module Config */

/** @memberof module:Config
*   @extends WKResource
* @property {String} ConfigRuleName Required: No. A name for the AWS Config rule. If you don't specify a name, AWS CloudFormation generates a unique
            physical ID and uses that ID for the rule name. For more information, see Name Type.Update requires: Replacement
* @property {String} Description Required: No. A description about this AWS Config rule.Update requires: No interruption
* @property {Object} InputParameters Required: No. Input parameter values that are passed to the AWS Config rule (Lambda function).Update requires: No interruption
* @property {String} MaximumExecutionFrequency Required: No. The maximum frequency at which the AWS Config rule runs evaluations. For valid values, see
            the ConfigRule data type in the
              AWS Config API Reference.If the rule runs an evaluation when AWS Config delivers a configuration snapshot, the rule
            cannot run more frequently than the snapshot delivery frequency. Set an execution
            frequency value that is equal to or greater than the value of the snapshot delivery
            frequency, which is a property the AWS::Config::DeliveryChannel resource.Update requires: No interruption
* @property {AWSConfigConfigRuleScope} Scope Required: No. Defines which AWS resources will trigger an evaluation when their configurations
            change. The scope can include one or more resource types, a combination of a tag key and
            value, or a combination of one resource type and one resource ID. Specify a scope to
            constrain the resources that are evaluated. If you don't specify a scope, the rule
            evaluates all resources in the recording group.Update requires: No interruption
* @property {AWSConfigConfigRuleSource} Source Required: Yes. Specifies the rule owner, the rule identifier, and the events that cause the
            function to evaluate your AWS resources.Update requires: No interruption
*/
function ConfigRule (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigRule'
    let properties = {
      ConfigRuleName: new ResourceAttribute('ConfigRuleName', String, false, 'No', null),
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      InputParameters: new ResourceAttribute('InputParameters', Object, false, 'No', null),
      MaximumExecutionFrequency: new ResourceAttribute('MaximumExecutionFrequency', String, false, 'No', null),
      Scope: new ResourceAttribute('Scope', types.AWSConfigConfigRuleScope, false, 'No', null),
      Source: new ResourceAttribute('Source', types.AWSConfigConfigRuleSource, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ConfigRule.prototype = Object.create(WKResource.prototype)

/** @memberof module:Config
*   @extends WKResource
* @property {String} Name Required: No. A name for the configuration recorder. If you don't specify a name, AWS CloudFormation generates
            a unique physical ID and uses that ID for the configuration recorder name. For more
            information, see Name Type.NoteAfter you create a configuration recorder, you cannot rename it. If you don't want
              a AWS CloudFormation-generated name, specify a value for this property.If you specify the name of an existing configuration recorder, AWS CloudFormation uses that
            recorder.Update requires: Updates are not supported.
* @property {AWSConfigConfigurationRecorderRecordingGroup} RecordingGroup Required: No. Indicates whether to record configurations for all supported resources or for a list
            of resource types. The resource types that you list must be supported by AWS Config.Update requires: No interruption
* @property {String} RoleARN Required: Yes. The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to make
            read or write requests to the delivery channel that you specify and to get configuration
            details for supported AWS resources. For more information, see Permissions for the AWS Config IAM
              Role in the AWS Config Developer Guide.Update requires: No interruption
*/
function ConfigurationRecorder (name, propertiesObject) {
    let resourceType = 'AWS::Config::ConfigurationRecorder'
    let properties = {
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      RecordingGroup: new ResourceAttribute('RecordingGroup', types.AWSConfigConfigurationRecorderRecordingGroup, false, 'No', null),
      RoleARN: new ResourceAttribute('RoleARN', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ConfigurationRecorder.prototype = Object.create(WKResource.prototype)

/** @memberof module:Config
*   @extends WKResource
* @property {AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties} ConfigSnapshotDeliveryProperties Required: No. Provides options for how AWS Config delivers configuration snapshots to the S3 bucket in
            your delivery channel.Update requires: No interruption
* @property {String} Name Required: No. A name for the delivery channel. If you don't specify a name, AWS CloudFormation generates a
            unique physical ID and uses that ID for the delivery channel name. For more information,
            see Name Type.Update requires: Updates are not supported.. To change the name, you must run two separate updates.
            Delete this resource in the first update and then recreate it with a new name in the
            second update.
* @property {String} S3BucketName Required: Yes. The name of an S3 bucket where you want to store configuration history for the
            delivery channel.Update requires: No interruption
* @property {String} S3KeyPrefix Required: No. A key prefix (folder) for the specified S3 bucket.Update requires: No interruption
* @property {String} SnsTopicARN Required: No. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic that AWS Config delivers
            notifications to.Update requires: No interruption
*/
function DeliveryChannel (name, propertiesObject) {
    let resourceType = 'AWS::Config::DeliveryChannel'
    let properties = {
      ConfigSnapshotDeliveryProperties: new ResourceAttribute('ConfigSnapshotDeliveryProperties', types.AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties, false, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      S3BucketName: new ResourceAttribute('S3BucketName', String, false, 'Yes', null),
      S3KeyPrefix: new ResourceAttribute('S3KeyPrefix', String, false, 'No', null),
      SnsTopicARN: new ResourceAttribute('SnsTopicARN', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DeliveryChannel.prototype = Object.create(WKResource.prototype)

module.exports = {  ConfigRule: ConfigRule,
  ConfigurationRecorder: ConfigurationRecorder,
  DeliveryChannel: DeliveryChannel
}
