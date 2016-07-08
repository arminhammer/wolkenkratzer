'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class LoadBalancer extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancing::LoadBalancer'
    let properties = {
      AccessLoggingPolicy: new resource.ResourceProperty('AccessLoggingPolicy', types.ElasticLoadBalancingAccessLoggingPolicy, 'No', null),
      AppCookieStickinessPolicy: new resource.ResourceArray('AppCookieStickinessPolicy', types.AppCookieStickinessPolicyobjects, 'No', null),
      AvailabilityZones: new resource.ResourceArray('AvailabilityZones', String, 'No', null),
      ConnectionDrainingPolicy: new resource.ResourceProperty('ConnectionDrainingPolicy', types.ElasticLoadBalancingConnectionDrainingPolicy, 'No', null),
      ConnectionSettings: new resource.ResourceProperty('ConnectionSettings', types.ElasticLoadBalancingConnectionSettings, 'No', null),
      CrossZone: new resource.ResourceProperty('CrossZone', Boolean, 'No', null),
      HealthCheck: new resource.ResourceProperty('HealthCheck', types.ElasticLoadBalancingHealthCheckType, 'No', null),
      Instances: new resource.ResourceArray('Instances', String, 'No', null),
      LBCookieStickinessPolicy: new resource.ResourceArray('LBCookieStickinessPolicy', types.LBCookieStickinessPolicyobjects, 'No', null),
      LoadBalancerName: new resource.ResourceProperty('LoadBalancerName', String, 'No', null),
      Listeners: new resource.ResourceArray('Listeners', types.ElasticLoadBalancingListenerPropertyTypeobjects, 'Yes', null),
      Policies: new resource.ResourceArray('Policies', types.ElasticLoadBalancingpolicyobjects, 'No', null),
      Scheme: new resource.ResourceProperty('Scheme', String, 'No', null),
      SecurityGroups: new resource.ResourceArray('SecurityGroups', types.securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC), 'No', null),
      Subnets: new resource.ResourceArray('Subnets', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  LoadBalancer: LoadBalancer
}
