'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class LoadBalancer extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancing::LoadBalancer'
    let properties = {
      AccessLoggingPolicy: new resource.ResourceProperty(types.ElasticLoadBalancingAccessLoggingPolicy, 'No', null),
      AppCookieStickinessPolicy: new resource.ResourceArray(types.AppCookieStickinessPolicyobjects, 'No', null),
      AvailabilityZones: new resource.ResourceArray(String, 'No', null),
      ConnectionDrainingPolicy: new resource.ResourceProperty(types.ElasticLoadBalancingConnectionDrainingPolicy, 'No', null),
      ConnectionSettings: new resource.ResourceProperty(types.ElasticLoadBalancingConnectionSettings, 'No', null),
      CrossZone: new resource.ResourceProperty(Boolean, 'No', null),
      HealthCheck: new resource.ResourceProperty(types.ElasticLoadBalancingHealthCheckType, 'No', null),
      Instances: new resource.ResourceArray(String, 'No', null),
      LBCookieStickinessPolicy: new resource.ResourceArray(types.LBCookieStickinessPolicyobjects, 'No', null),
      LoadBalancerName: new resource.ResourceProperty(String, 'No', null),
      Listeners: new resource.ResourceArray(types.ElasticLoadBalancingListenerPropertyTypeobjects, 'Yes', null),
      Policies: new resource.ResourceArray(types.ElasticLoadBalancingpolicyobjects, 'No', null),
      Scheme: new resource.ResourceProperty(String, 'No', null),
      SecurityGroups: new resource.ResourceArray(types.securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC), 'No', null),
      Subnets: new resource.ResourceArray(String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  LoadBalancer: LoadBalancer
}