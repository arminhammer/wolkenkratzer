'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Destination extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::Destination'
    let properties = {
      DestinationName: new resource.ResourceProperty('DestinationName', String, 'Yes', null),
      DestinationPolicy: new resource.ResourceProperty('DestinationPolicy', String, 'Yes', null),
      RoleArn: new resource.ResourceProperty('RoleArn', String, 'Yes', null),
      TargetArn: new resource.ResourceProperty('TargetArn', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LogGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogGroup'
    let properties = {
      RetentionInDays: new resource.ResourceProperty('RetentionInDays', Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LogStream extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogStream'
    let properties = {
      LogGroupName: new resource.ResourceProperty('LogGroupName', String, 'Yes', null),
      LogStreamName: new resource.ResourceProperty('LogStreamName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class MetricFilter extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::MetricFilter'
    let properties = {
      FilterPattern: new resource.ResourceArray('FilterPattern', String, 'Yes', null),
      LogGroupName: new resource.ResourceProperty('LogGroupName', String, 'Yes', null),
      MetricTransformations: new resource.ResourceArray('MetricTransformations', types.CloudWatchLogsMetricFilterMetricTransformationProperty, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubscriptionFilter extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::SubscriptionFilter'
    let properties = {
      DestinationArn: new resource.ResourceProperty('DestinationArn', String, 'Yes', null),
      FilterPattern: new resource.ResourceProperty('FilterPattern', String, 'Yes', null),
      LogGroupName: new resource.ResourceProperty('LogGroupName', String, 'Yes', null),
      RoleArn: new resource.ResourceProperty('RoleArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Destination: Destination,
  LogGroup: LogGroup,
  LogStream: LogStream,
  MetricFilter: MetricFilter,
  SubscriptionFilter: SubscriptionFilter
}