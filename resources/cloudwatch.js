'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Alarm extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AlarmActions: new wolkenkratzer.ResourceArray(String, 'No', null),
      AlarmDescription: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AlarmName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ComparisonOperator: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Dimensions: new wolkenkratzer.ResourceArray(propertyTypes.MetricDimension, 'No', null),
      EvaluationPeriods: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InsufficientDataActions: new wolkenkratzer.ResourceArray(String, 'No', null),
      MetricName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Namespace: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OKActions: new wolkenkratzer.ResourceArray(String, 'No', null),
      Period: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Statistic: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Threshold: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Unit: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alarm: Alarm
}