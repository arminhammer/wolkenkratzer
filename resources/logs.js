'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Destination extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::Destination'
    let properties = {
      DestinationName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DestinationPolicy: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TargetArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LogGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogGroup'
    let properties = {
      RetentionInDays: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LogStream extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogStream'
    let properties = {
      LogGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LogStreamName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class MetricFilter extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::MetricFilter'
    let properties = {
      FilterPattern: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      LogGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MetricTransformations: new wolkenkratzer.ResourceArray(propertyTypes.CloudWatchLogsMetricFilterMetricTransformationProperty, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubscriptionFilter extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Logs::SubscriptionFilter'
    let properties = {
      DestinationArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      FilterPattern: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LogGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'No', null)
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