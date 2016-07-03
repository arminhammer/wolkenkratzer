'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class HealthCheck extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::HealthCheck'
    let properties = {
      HealthCheckConfig: new resource.ResourceProperty(types.AmazonRoute53HealthCheckConfig, 'Yes', null),
      HealthCheckTags: new resource.ResourceArray(types.AmazonRoute53HealthCheckTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class HostedZone extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::HostedZone'
    let properties = {
      HostedZoneConfig: new resource.ResourceProperty(types.AmazonRoute53HostedZoneConfigProperty, 'No', null),
      HostedZoneTags: new resource.ResourceArray(types.AmazonRoute53HostedZoneTags, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      VPCs: new resource.ResourceArray(types.AmazonRoute53HostedZoneVPCs, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSet'
    let properties = {
      AliasTarget: new resource.ResourceProperty(types.AliasTarget, 'Conditional', null),
      Comment: new resource.ResourceProperty(String, 'No', null),
      Failover: new resource.ResourceProperty(String, 'No', null),
      GeoLocation: new resource.ResourceProperty(types.AmazonRoute53RecordSetGeoLocationProperty, 'No', null),
      HealthCheckId: new resource.ResourceProperty(String, 'No', null),
      HostedZoneId: new resource.ResourceProperty(String, 'Conditional', null),
      HostedZoneName: new resource.ResourceProperty(String, 'Conditional', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      ResourceRecords: new resource.ResourceArray(String, 'undefined', null),
      SetIdentifier: new resource.ResourceProperty(String, 'Conditional', null),
      TTL: new resource.ResourceProperty(String, 'Conditional', null),
      Type: new resource.ResourceProperty(String, 'Yes', null),
      Weight: new resource.ResourceProperty(types.NumberWeightexpectsintegervalues, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSetGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSetGroup'
    let properties = {
      Comment: new resource.ResourceProperty(String, 'No', null),
      HostedZoneId: new resource.ResourceProperty(String, 'Conditional', null),
      HostedZoneName: new resource.ResourceProperty(String, 'Conditional', null),
      RecordSets: new resource.ResourceArray(RecordSet, 'Yes', null)
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