'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class LoadBalancer extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancing::LoadBalancer'
    let properties = {
      AccessLoggingPolicy: new ResourceAttribute('AccessLoggingPolicy', types.ElasticLoadBalancingAccessLoggingPolicy, 'No', null),
      AppCookieStickinessPolicy: new ResourceAttributeArray('AppCookieStickinessPolicy', types.AppCookieStickinessPolicyobjects, 'No', null),
      AvailabilityZones: new ResourceAttributeArray('AvailabilityZones', String, 'No', null),
      ConnectionDrainingPolicy: new ResourceAttribute('ConnectionDrainingPolicy', types.ElasticLoadBalancingConnectionDrainingPolicy, 'No', null),
      ConnectionSettings: new ResourceAttribute('ConnectionSettings', types.ElasticLoadBalancingConnectionSettings, 'No', null),
      CrossZone: new ResourceAttribute('CrossZone', Boolean, 'No', null),
      HealthCheck: new ResourceAttribute('HealthCheck', types.ElasticLoadBalancingHealthCheckType, 'No', null),
      Instances: new ResourceAttributeArray('Instances', String, 'No', null),
      LBCookieStickinessPolicy: new ResourceAttributeArray('LBCookieStickinessPolicy', types.LBCookieStickinessPolicyobjects, 'No', null),
      LoadBalancerName: new ResourceAttribute('LoadBalancerName', String, 'No', null),
      Listeners: new ResourceAttributeArray('Listeners', types.ElasticLoadBalancingListenerPropertyTypeobjects, 'Yes', null),
      Policies: new ResourceAttributeArray('Policies', types.ElasticLoadBalancingpolicyobjects, 'No', null),
      Scheme: new ResourceAttribute('Scheme', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', types.securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC), 'No', null),
      Subnets: new ResourceAttributeArray('Subnets', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  LoadBalancer: LoadBalancer
}
