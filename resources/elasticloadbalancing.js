'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class LoadBalancer extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancing::LoadBalancer'
    let properties = {
      AccessLoggingPolicy: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticLoadBalancingAccessLoggingPolicy, 'No', null),
      AppCookieStickinessPolicy: new wolkenkratzer.ResourceArray(propertyTypes.AppCookieStickinessPolicyobjects, 'No', null),
      AvailabilityZones: new wolkenkratzer.ResourceArray(String, 'No', null),
      ConnectionDrainingPolicy: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticLoadBalancingConnectionDrainingPolicy, 'No', null),
      ConnectionSettings: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticLoadBalancingConnectionSettings, 'No', null),
      CrossZone: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      HealthCheck: new wolkenkratzer.ResourceProperty(propertyTypes.ElasticLoadBalancingHealthCheckType, 'No', null),
      Instances: new wolkenkratzer.ResourceArray(String, 'No', null),
      LBCookieStickinessPolicy: new wolkenkratzer.ResourceArray(propertyTypes.LBCookieStickinessPolicyobjects, 'No', null),
      LoadBalancerName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Listeners: new wolkenkratzer.ResourceArray(propertyTypes.ElasticLoadBalancingListenerPropertyTypeobjects, 'Yes', null),
      Policies: new wolkenkratzer.ResourceArray(propertyTypes.ElasticLoadBalancingpolicyobjects, 'No', null),
      Scheme: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SecurityGroups: new wolkenkratzer.ResourceArray(propertyTypes.securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC), 'No', null),
      Subnets: new wolkenkratzer.ResourceArray(String, 'No', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  LoadBalancer: LoadBalancer
}