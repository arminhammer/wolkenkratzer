/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class CloudWatchMetricDimensionPropertyType extends wolkenkratzer.SubPropertyObject {
  constructor (propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, true, null),
      Value: new wolkenkratzer.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class Alarm extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      AlarmActions: new wolkenkratzer.ResourceArray(String, false, null),
      AlarmDescription: new wolkenkratzer.ResourceProperty(String, false, null),
      AlarmName: new wolkenkratzer.ResourceProperty(String, false, null),
      ComparisonOperator: new wolkenkratzer.ResourceProperty(String, true, null),
      Dimensions: new wolkenkratzer.ResourceProperty(CloudWatchMetricDimensionPropertyType, false, null),
      EvaluationPeriods: new wolkenkratzer.ResourceProperty(String, true, null),
      InsufficientDataActions: new wolkenkratzer.ResourceArray(String, false, null),
      MetricName: new wolkenkratzer.ResourceProperty(String, true, null),
      Namespace: new wolkenkratzer.ResourceProperty(String, true, null),
      OKActions: new wolkenkratzer.ResourceArray(String, false, null),
      Period: new wolkenkratzer.ResourceProperty(String, true, null),
      Statistic: new wolkenkratzer.ResourceProperty(String, true, null),
      Threshold: new wolkenkratzer.ResourceProperty(String, true, null),
      Unit: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CloudWatchMetricDimensionPropertyType: CloudWatchMetricDimensionPropertyType,
  Alarm: Alarm
}