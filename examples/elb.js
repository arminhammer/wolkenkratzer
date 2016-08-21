/**
 * Created by arming on 6/2/16.
 */
'use strict'

const wk = require('./../index')

let t = new wk.Template()

let ElasticLoadBalancer = new wk.ElasticLoadBalancing.LoadBalancer('ElasticLoadBalancer')
ElasticLoadBalancer.AvailabilityZones = new wk.Intrinsic.FnGetAZs()
ElasticLoadBalancer.CrossZone = true
let cookieStickinessPolicy = new wk.Types.ElasticLoadBalancingLBCookieStickinessPolicyType()
cookieStickinessPolicy.PolicyName = 'CookieBasedPolicy'
cookieStickinessPolicy.CookieExpirationPeriod = '30'
ElasticLoadBalancer.LBCookieStickinessPolicy.push(cookieStickinessPolicy)

let listener = new wk.Types.ElasticLoadBalancingListenerPropertyType()
listener.LoadBalancerPort = '80'
listener.InstancePort = '80'
listener.Protocol = 'HTTP'
listener.PolicyNames.push('CookieBasedPolicy')
ElasticLoadBalancer.Listeners.push(listener)

let elbHealthCheck = new wk.Types.ElasticLoadBalancingHealthCheckType()
elbHealthCheck.Target = 'HTTP:80/',
elbHealthCheck.HealthyThreshold = '2',
elbHealthCheck.UnhealthyThreshold = '5',
elbHealthCheck.Interval = '10',
elbHealthCheck.Timeout = '5'
ElasticLoadBalancer.HealthCheck = elbHealthCheck

t.add(ElasticLoadBalancer)

console.log(t.toJson().Template)
