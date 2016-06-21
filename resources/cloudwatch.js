/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class CloudWatchMetricDimensionPropertyType extends cloudpotato.SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new cloudpotato.ResourceProperty(String, true, null),
      Value: new cloudpotato.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class Alarm extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new cloudpotato.ResourceProperty(Boolean, false, null),
      AlarmActions: new cloudpotato.ResourceArray(String, false, null),
      AlarmDescription: new cloudpotato.ResourceProperty(String, false, null),
      AlarmName: new cloudpotato.ResourceProperty(String, false, null),
      ComparisonOperator: new cloudpotato.ResourceProperty(String, false, null),
      Dimensions: new cloudpotato.ResourceProperty(CloudWatchMetricDimensionPropertyType, false, null),
      EvaluationPeriods: new cloudpotato.ResourceProperty(String, false, null),
      InsufficientDataActions: new cloudpotato.ResourceArray(String, false, null),
      MetricName: new cloudpotato.ResourceProperty(String, false, null),
      Namespace: new cloudpotato.ResourceProperty(String, false, null),
      OKActions: new cloudpotato.ResourceArray(String, false, null),
      Period: new cloudpotato.ResourceProperty(String, false, null),
      Statistic: new cloudpotato.ResourceProperty(String, false, null),
      Threshold: new cloudpotato.ResourceProperty(String, false, null),
      Unit: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CloudWatchMetricDimensionPropertyType: CloudWatchMetricDimensionPropertyType,
  Alarm: Alarm
}