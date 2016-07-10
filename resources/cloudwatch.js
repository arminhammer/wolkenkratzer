'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CloudWatch */

/** @memberof module:CloudWatch
*   @extends WKResource
* @property {Boolean} ActionsEnabled Required: No. Indicates whether or not actions should be executed during any changes to the
                  alarm's state.Update requires: No interruption
* @property {String} AlarmActions Required: No. The list of actions to execute when this alarm transitions into an ALARM state
                  from any other state. Each action is specified as an Amazon Resource Number (ARN).
                  For more information about creating alarms and the actions you can specify, see
                     Creating Amazon CloudWatch
                     Alarms in the Amazon CloudWatch Developer Guide.Update requires: No interruption
* @property {String} AlarmDescription Required: No. The description for the alarm.Update requires: No interruption
* @property {String} AlarmName Required: No. A name for the alarm. If you don't specify a name, AWS CloudFormation generates a unique
                  physical ID and uses that ID for the alarm name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} ComparisonOperator Required: Yes. The arithmetic operation to use when comparing the specified Statistic and
                  Threshold. The specified Statistic value is used as the first operand.You can specify the following values:
                     GreaterThanOrEqualToThreshold |
                     GreaterThanThreshold |
                     LessThanThreshold |
                     LessThanOrEqualToThresholdUpdate requires: No interruption
* @property {MetricDimension} Dimensions Required: No. The dimensions for the alarm's associated metric.Update requires: No interruption
* @property {String} EvaluationPeriods Required: Yes. The number of periods over which data is compared to the specified
                  threshold.Update requires: No interruption
* @property {String} InsufficientDataActions Required: No. The list of actions to execute when this alarm transitions into an
                  INSUFFICIENT_DATA state from any other state. Each action is specified as an
                  Amazon Resource Number (ARN). Currently the only action supported is publishing to
                  an Amazon SNS topic or an Amazon Auto Scaling policy.Update requires: No interruption
* @property {String} MetricName Required: Yes. The name for the alarm's associated metric. For more information about the
                  metrics that you can specify, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the
                     Amazon CloudWatch Developer Guide.Update requires: No interruption
* @property {String} Namespace Required: Yes. The namespace for the alarm's associated metric.Update requires: No interruption
* @property {String} OKActions Required: No. The list of actions to execute when this alarm transitions into an OK state
                  from any other state. Each action is specified as an Amazon Resource Number (ARN).
                  Currently the only action supported is publishing to an Amazon SNS topic or an
                  Amazon Auto Scaling policy.Update requires: No interruption
* @property {String} Period Required: Yes. The time over which the specified statistic is applied. You must specify a time
                  in seconds that is also a multiple of 60.Update requires: No interruption
* @property {String} Statistic Required: Yes. The statistic to apply to the alarm's associated metric.You can specify the following values: SampleCount |
                     Average | Sum | Minimum |
                     MaximumUpdate requires: No interruption
* @property {String} Threshold Required: Yes. The value against which the specified statistic is compared.Update requires: No interruption
* @property {String} Unit Required: No. The unit for the alarm's associated metric.You can specify the following values: Seconds | Microseconds | Milliseconds |
                  Bytes | Kilobytes | Megabytes | Gigabytes | Terabytes | Bits | Kilobits | Megabits
                  | Gigabits | Terabits | Percent | Count | Bytes/Second | Kilobytes/Second |
                  Megabytes/Second | Gigabytes/Second | Terabytes/Second | Bits/Second |
                  Kilobits/Second | Megabits/Second | Gigabits/Second | Terabits/Second |
                  Count/Second | NoneUpdate requires: No interruption
*/
class Alarm extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new ResourceAttribute('ActionsEnabled', Boolean, 'No', null),
      AlarmActions: new ResourceAttributeArray('AlarmActions', String, 'No', null),
      AlarmDescription: new ResourceAttribute('AlarmDescription', String, 'No', null),
      AlarmName: new ResourceAttribute('AlarmName', String, 'No', null),
      ComparisonOperator: new ResourceAttribute('ComparisonOperator', String, 'Yes', null),
      Dimensions: new ResourceAttributeArray('Dimensions', types.MetricDimension, 'No', null),
      EvaluationPeriods: new ResourceAttribute('EvaluationPeriods', String, 'Yes', null),
      InsufficientDataActions: new ResourceAttributeArray('InsufficientDataActions', String, 'No', null),
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      Namespace: new ResourceAttribute('Namespace', String, 'Yes', null),
      OKActions: new ResourceAttributeArray('OKActions', String, 'No', null),
      Period: new ResourceAttribute('Period', String, 'Yes', null),
      Statistic: new ResourceAttribute('Statistic', String, 'Yes', null),
      Threshold: new ResourceAttribute('Threshold', String, 'Yes', null),
      Unit: new ResourceAttribute('Unit', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Alarm: Alarm
}
