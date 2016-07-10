'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class HealthCheck extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HealthCheck'
    let properties = {
      HealthCheckConfig: new ResourceAttribute('HealthCheckConfig', types.AmazonRoute53HealthCheckConfig, 'Yes', null),
      HealthCheckTags: new ResourceAttributeArray('HealthCheckTags', types.AmazonRoute53HealthCheckTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class HostedZone extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HostedZone'
    let properties = {
      HostedZoneConfig: new ResourceAttribute('HostedZoneConfig', types.AmazonRoute53HostedZoneConfigProperty, 'No', null),
      HostedZoneTags: new ResourceAttributeArray('HostedZoneTags', types.AmazonRoute53HostedZoneTags, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      VPCs: new ResourceAttributeArray('VPCs', types.AmazonRoute53HostedZoneVPCs, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSet'
    let properties = {
      AliasTarget: new ResourceAttribute('AliasTarget', types.Route53AliasTargetProperty, 'Conditional', null),
      Comment: new ResourceAttribute('Comment', String, 'No', null),
      Failover: new ResourceAttribute('Failover', String, 'No', null),
      GeoLocation: new ResourceAttribute('GeoLocation', types.AmazonRoute53RecordSetGeoLocationProperty, 'No', null),
      HealthCheckId: new ResourceAttribute('HealthCheckId', String, 'No', null),
      HostedZoneId: new ResourceAttribute('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new ResourceAttribute('HostedZoneName', String, 'Conditional', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ResourceRecords: new ResourceAttributeArray('ResourceRecords', String, 'undefined', null),
      SetIdentifier: new ResourceAttribute('SetIdentifier', String, 'Conditional', null),
      TTL: new ResourceAttribute('TTL', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Weight: new ResourceAttribute('Weight', Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSetGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSetGroup'
    let properties = {
      Comment: new ResourceAttribute('Comment', String, 'No', null),
      HostedZoneId: new ResourceAttribute('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new ResourceAttribute('HostedZoneName', String, 'Conditional', null),
      RecordSets: new ResourceAttributeArray('RecordSets', RecordSet, 'Yes', null)
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
