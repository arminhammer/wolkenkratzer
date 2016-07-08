'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class HealthCheck extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HealthCheck'
    let properties = {
      HealthCheckConfig: new resource.ResourceProperty('HealthCheckConfig', types.AmazonRoute53HealthCheckConfig, 'Yes', null),
      HealthCheckTags: new resource.ResourceArray('HealthCheckTags', types.AmazonRoute53HealthCheckTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class HostedZone extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HostedZone'
    let properties = {
      HostedZoneConfig: new resource.ResourceProperty('HostedZoneConfig', types.AmazonRoute53HostedZoneConfigProperty, 'No', null),
      HostedZoneTags: new resource.ResourceArray('HostedZoneTags', types.AmazonRoute53HostedZoneTags, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      VPCs: new resource.ResourceArray('VPCs', types.AmazonRoute53HostedZoneVPCs, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSet extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSet'
    let properties = {
      AliasTarget: new resource.ResourceProperty('AliasTarget', types.Route53AliasTargetProperty, 'Conditional', null),
      Comment: new resource.ResourceProperty('Comment', String, 'No', null),
      Failover: new resource.ResourceProperty('Failover', String, 'No', null),
      GeoLocation: new resource.ResourceProperty('GeoLocation', types.AmazonRoute53RecordSetGeoLocationProperty, 'No', null),
      HealthCheckId: new resource.ResourceProperty('HealthCheckId', String, 'No', null),
      HostedZoneId: new resource.ResourceProperty('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new resource.ResourceProperty('HostedZoneName', String, 'Conditional', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      ResourceRecords: new resource.ResourceArray('ResourceRecords', String, 'undefined', null),
      SetIdentifier: new resource.ResourceProperty('SetIdentifier', String, 'Conditional', null),
      TTL: new resource.ResourceProperty('TTL', String, 'Conditional', null),
      Type: new resource.ResourceProperty('Type', String, 'Yes', null),
      Weight: new resource.ResourceProperty('Weight', Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSetGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSetGroup'
    let properties = {
      Comment: new resource.ResourceProperty('Comment', String, 'No', null),
      HostedZoneId: new resource.ResourceProperty('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new resource.ResourceProperty('HostedZoneName', String, 'Conditional', null),
      RecordSets: new resource.ResourceArray('RecordSets', RecordSet, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  HealthCheck: HealthCheck,
  HostedZone: HostedZone,
  RecordSet: RecordSet,
  RecordSetGroup: RecordSetGroup
}
