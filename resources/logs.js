'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

class LogGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Logs::LogGroup'
    let properties = {
      RetentionInDays: new ResourceAttribute('RetentionInDays', Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

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

module.exports = {
  Destination: Destination,
  LogGroup: LogGroup,
  LogStream: LogStream,
  MetricFilter: MetricFilter,
  SubscriptionFilter: SubscriptionFilter
}
