'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class HealthCheck extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::HealthCheck'
    let properties = {
      HealthCheckConfig: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonRoute53HealthCheckConfig, 'Yes', null),
      HealthCheckTags: new wolkenkratzer.ResourceArray(propertyTypes.AmazonRoute53HealthCheckTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class HostedZone extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::HostedZone'
    let properties = {
      HostedZoneConfig: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonRoute53HostedZoneConfigProperty, 'No', null),
      HostedZoneTags: new wolkenkratzer.ResourceArray(propertyTypes.AmazonRoute53HostedZoneTags, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VPCs: new wolkenkratzer.ResourceArray(propertyTypes.AmazonRoute53HostedZoneVPCs, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSet'
    let properties = {
      AliasTarget: new wolkenkratzer.ResourceProperty(propertyTypes.AliasTarget, 'Conditional', null),
      Comment: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Failover: new wolkenkratzer.ResourceProperty(String, 'No', null),
      GeoLocation: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonRoute53RecordSetGeoLocationProperty, 'No', null),
      HealthCheckId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HostedZoneId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      HostedZoneName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ResourceRecords: new wolkenkratzer.ResourceArray(String, 'undefined', null),
      SetIdentifier: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      TTL: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Weight: new wolkenkratzer.ResourceProperty(propertyTypes.NumberWeightexpectsintegervalues, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RecordSetGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSetGroup'
    let properties = {
      Comment: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HostedZoneId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      HostedZoneName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      RecordSets: new wolkenkratzer.ResourceArray(RecordSet, 'Yes', null)
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