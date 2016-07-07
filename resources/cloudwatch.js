'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Alarm extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudWatch::Alarm'
    let properties = {
      ActionsEnabled: new resource.ResourceProperty('ActionsEnabled', Boolean, 'No', null),
      AlarmActions: new resource.ResourceArray('AlarmActions', String, 'No', null),
      AlarmDescription: new resource.ResourceProperty('AlarmDescription', String, 'No', null),
      AlarmName: new resource.ResourceProperty('AlarmName', String, 'No', null),
      ComparisonOperator: new resource.ResourceProperty('ComparisonOperator', String, 'Yes', null),
      Dimensions: new resource.ResourceArray('Dimensions', types.MetricDimension, 'No', null),
      EvaluationPeriods: new resource.ResourceProperty('EvaluationPeriods', String, 'Yes', null),
      InsufficientDataActions: new resource.ResourceArray('InsufficientDataActions', String, 'No', null),
      MetricName: new resource.ResourceProperty('MetricName', String, 'Yes', null),
      Namespace: new resource.ResourceProperty('Namespace', String, 'Yes', null),
      OKActions: new resource.ResourceArray('OKActions', String, 'No', null),
      Period: new resource.ResourceProperty('Period', String, 'Yes', null),
      Statistic: new resource.ResourceProperty('Statistic', String, 'Yes', null),
      Threshold: new resource.ResourceProperty('Threshold', String, 'Yes', null),
      Unit: new resource.ResourceProperty('Unit', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alarm: Alarm
}