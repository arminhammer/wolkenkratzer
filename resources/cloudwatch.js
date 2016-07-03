'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Alarm extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new resource.ResourceProperty(Boolean, 'No', null),
      AlarmActions: new resource.ResourceArray(String, 'No', null),
      AlarmDescription: new resource.ResourceProperty(String, 'No', null),
      AlarmName: new resource.ResourceProperty(String, 'No', null),
      ComparisonOperator: new resource.ResourceProperty(String, 'Yes', null),
      Dimensions: new resource.ResourceArray(types.MetricDimension, 'No', null),
      EvaluationPeriods: new resource.ResourceProperty(String, 'Yes', null),
      InsufficientDataActions: new resource.ResourceArray(String, 'No', null),
      MetricName: new resource.ResourceProperty(String, 'Yes', null),
      Namespace: new resource.ResourceProperty(String, 'Yes', null),
      OKActions: new resource.ResourceArray(String, 'No', null),
      Period: new resource.ResourceProperty(String, 'Yes', null),
      Statistic: new resource.ResourceProperty(String, 'Yes', null),
      Threshold: new resource.ResourceProperty(String, 'Yes', null),
      Unit: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alarm: Alarm
}