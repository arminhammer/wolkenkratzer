'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

module.exports = {
  Alarm: Alarm
}
