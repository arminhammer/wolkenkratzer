'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module Logs */

/** @memberof module:Logs
*   @extends WKResource
* @property {String} DestinationName Required: Yes. The name of the CloudWatch Logs destination.Update requires: Replacement
* @property {String} DestinationPolicy Required: Yes. An AWS Identity and Access Management (IAM) policy that specifies who can write to your
                  destination.Update requires: No interruption
* @property {String} RoleArn Required: Yes. The Amazon Resource Name (ARN) of an IAM role that permits CloudWatch Logs to send data
                  to the specified AWS resource (TargetArn).Update requires: No interruption
* @property {String} TargetArn Required: Yes. The ARN of the AWS resource that receives log events. Currently, you can
                  specify only an Amazon Kinesis stream.Update requires: No interruption
*/
class Destination extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::Destination'
    let properties = {
      DestinationName: new ResourceAttribute('DestinationName', String, 'Yes', null),
      DestinationPolicy: new ResourceAttribute('DestinationPolicy', String, 'Yes', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'Yes', null),
      TargetArn: new ResourceAttribute('TargetArn', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Logs
*   @extends WKResource
* @property {Number} RetentionInDays Required: No. The number of days log events are kept in CloudWatch Logs. When a log event expires,
                  CloudWatch Logs automatically deletes it. For valid values, see PutRetentionPolicy in
                  the Amazon CloudWatch Logs API Reference.Update requires: No interruption
*/
class LogGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogGroup'
    let properties = {
      RetentionInDays: new ResourceAttribute('RetentionInDays', Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Logs
*   @extends WKResource
* @property {String} LogGroupName Required: Yes. The name of the log group where the log stream is created.Update requires: Replacement
* @property {String} LogStreamName Required: No. The name of the log stream to create. The name must be unique within the log
                  group.Update requires: Replacement
*/
class LogStream extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogStream'
    let properties = {
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Yes', null),
      LogStreamName: new ResourceAttribute('LogStreamName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Logs
*   @extends WKResource
* @property {String} FilterPattern Required: Yes. Describes the pattern that CloudWatch Logs follows to interpret each entry in a log. For
                  example, a log entry might contain fields such as timestamps, IP addresses, error
                  codes, bytes transferred, and so on. You use the pattern to specify those fields
                  and to specify what to look for in the log file. For example, if you're interested
                  in error codes that begin with 1234, your filter pattern might be
                     [timestamps, ip_addresses, error_codes = 1234*, size, ...].Update requires: No interruption
* @property {String} LogGroupName Required: Yes. The name of an existing log group that you want to associate with this metric
                  filter.Update requires: Replacement
* @property {CloudWatchLogsMetricFilterMetricTransformationProperty} MetricTransformations Required: Yes. Describes how to transform data from a log into a CloudWatch metric.ImportantCurrently, you can specify only one metric transformation for each metric
                        filter. If you want to specify multiple metric transformations, you must
                        specify multiple metric filters.Update requires: No interruption
*/
class MetricFilter extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::MetricFilter'
    let properties = {
      FilterPattern: new ResourceAttributeArray('FilterPattern', String, 'Yes', null),
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Yes', null),
      MetricTransformations: new ResourceAttributeArray('MetricTransformations', types.CloudWatchLogsMetricFilterMetricTransformationProperty, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Logs
*   @extends WKResource
* @property {String} DestinationArn Required: Yes. The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Lambda function that you
                  want to use as the subscription feed destination.Update requires: Replacement
* @property {String} FilterPattern Required: Yes. The filtering expressions that restrict what gets delivered to the destination
                  AWS resource. For more information about the filter pattern syntax, see Filter and Pattern
                     Syntax in the Amazon CloudWatch Developer Guide.Update requires: Replacement
* @property {String} LogGroupName Required: Yes. The log group to associate with the subscription filter. All log events that
                  are uploaded to this log group are filtered and delivered to the specified AWS
                  resource if the filter pattern matches the log events.Update requires: Replacement
* @property {String} RoleArn Required: No. An IAM role that grants CloudWatch Logs permission to put data into the specified Amazon Kinesis
                  stream. For Lambda and CloudWatch Logs destinations, don't specify this property because
                  CloudWatch Logs gets the necessary permissions from the destination resource.Update requires: Replacement
*/
class SubscriptionFilter extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::SubscriptionFilter'
    let properties = {
      DestinationArn: new ResourceAttribute('DestinationArn', String, 'Yes', null),
      FilterPattern: new ResourceAttribute('FilterPattern', String, 'Yes', null),
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Yes', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Destination: Destination,
  LogGroup: LogGroup,
  LogStream: LogStream,
  MetricFilter: MetricFilter,
  SubscriptionFilter: SubscriptionFilter
}
