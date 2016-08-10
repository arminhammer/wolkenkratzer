'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ElasticLoadBalancing */

/** @memberof module:ElasticLoadBalancing
*   @extends WKResource
* @property {ElasticLoadBalancingAccessLoggingPolicy} AccessLoggingPolicy Required: No. Captures detailed information for all requests made to your load balancer, such
                  as the time a request was received, client’s IP address, latencies, request path,
                  and server responses.Update requires: No interruption
* @property {ElasticLoadBalancingAppCookieStickinessPolicyType} AppCookieStickinessPolicy Required: No. Generates one or more stickiness policies with sticky session lifetimes that
                  follow that of an application-generated cookie. These policies can be associated
                  only with HTTP/HTTPS listeners.Update requires: No interruption
* @property {String} AvailabilityZones Required: No. The Availability Zones in which to create the load balancer. You can specify
                  the AvailabilityZones or Subnets property, but not
                  both.NoteFor load balancers that are in a VPC, specify the Subnets
                     property.Update requires: Replacement if you did not have an Availability Zone specified and you
                  are adding one or if you are removing all Availability Zones. Otherwise, update
                  requires no interruption.
* @property {ElasticLoadBalancingConnectionDrainingPolicy} ConnectionDrainingPolicy Required: No. Whether deregistered or unhealthy instances can complete all in-flight
                  requests.Update requires: No interruption
* @property {ElasticLoadBalancingConnectionSettings} ConnectionSettings Required: No. Specifies how long front-end and back-end connections of your load balancer can
                  remain idle.Update requires: No interruption
* @property {Boolean} CrossZone Required: No. Whether cross-zone load balancing is enabled for the load balancer. With
                  cross-zone load balancing, your load balancer nodes route traffic to the back-end
                  instances across all Availability Zones. By default the CrossZone
                  property is false.Update requires: No interruption
* @property {ElasticLoadBalancingHealthCheckType} HealthCheck Required: No. Application health check for the instances.Update requires: Replacement if you did not have a health check specified and you are
                  adding one or if you are removing a health check. Otherwise, update requires no interruption.
* @property {String} Instances Required: No. A list of EC2 instance IDs for the load balancer.Update requires: No interruption
* @property {ElasticLoadBalancingLBCookieStickinessPolicyType} LBCookieStickinessPolicy Required: No. Generates a stickiness policy with sticky session lifetimes controlled by the
                  lifetime of the browser (user-agent), or by a specified expiration period. This
                  policy can be associated only with HTTP/HTTPS listeners.Update requires: No interruption
* @property {String} LoadBalancerName Required: No. A name for the load balancer. For valid values, see the LoadBalancerName parameter for the CreateLoadBalancer action in the Elastic Load Balancing API Reference.If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the load balancer. The name must be unique within your set of load balancers. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {ElasticLoadBalancingListenerPropertyType} Listeners Required: Yes. One or more listeners for this load balancer. Each listener must be registered
                  for a specific port, and you cannot have more than one listener for a given
                  port.ImportantIf you update the property values for a listener specified by the
                        Listeners property, AWS CloudFormation will delete the existing listener and
                     create a new one with the updated properties. During the time that AWS CloudFormation is
                     performing this action, clients will not be able to connect to the load
                     balancer.Update requires: No interruption
* @property {ElasticLoadBalancingPolicyType} Policies Required: No. A list of elastic load balancing policies to apply to this elastic load balancer. Specify only back-end server policies. For more information, see DescribeLoadBalancerPolicyTypes in the Elastic Load Balancing API Reference.Update requires: No interruption
* @property {String} Scheme Required: No. For load balancers attached to an Amazon VPC, this parameter can be used to
                  specify the type of load balancer to use. Specify internal to create
                  an internal load balancer with a DNS name that resolves to private IP addresses or
                     internet-facing to create a load balancer with a publicly
                  resolvable DNS name, which resolves to public IP addresses.
                  NoteIf you specify internal, you must specify subnets to
                        associate with the load balancer, not Availability Zones.
               Update requires: Replacement
* @property {String} SecurityGroups Required: No. Update requires: No interruption
* @property {String} Subnets Required: No. A list of subnet IDs in your virtual private cloud (VPC) to attach to your load
                  balancer. Do not specify multiple subnets that are in the same Availability Zone.
                  You can specify the AvailabilityZones or Subnets
                  property, but not both.For more information about using Elastic Load Balancing in a VPC, see How Do I Use Elastic Load Balancing in Amazon VPC in the
                     Elastic Load Balancing Developer Guide.Update requires: Replacement if you did not have an subnet specified and you are adding
                  one or if you are removing all subnets. Otherwise, update requires no interruption. To update the load
                  balancer to another subnet that is in the same Availability Zone, you must do two
                  updates. You must first update the load balancer to use a subnet in different
                  Availability Zone. After the update is complete, update the load balancer to use
                  the new subnet that is in the original Availability Zone.
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key-value pairs) for this load balancer.Update requires: No interruption
*/
class LoadBalancer extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancing::LoadBalancer'
    let properties = {
      AccessLoggingPolicy: new ResourceAttribute('AccessLoggingPolicy', types.ElasticLoadBalancingAccessLoggingPolicy, 'No', null),
      AppCookieStickinessPolicy: new ResourceAttributeArray('AppCookieStickinessPolicy', types.ElasticLoadBalancingAppCookieStickinessPolicyType, 'No', null),
      AvailabilityZones: new ResourceAttributeArray('AvailabilityZones', String, 'No', null),
      ConnectionDrainingPolicy: new ResourceAttribute('ConnectionDrainingPolicy', types.ElasticLoadBalancingConnectionDrainingPolicy, 'No', null),
      ConnectionSettings: new ResourceAttribute('ConnectionSettings', types.ElasticLoadBalancingConnectionSettings, 'No', null),
      CrossZone: new ResourceAttribute('CrossZone', Boolean, 'No', null),
      HealthCheck: new ResourceAttribute('HealthCheck', types.ElasticLoadBalancingHealthCheckType, 'No', null),
      Instances: new ResourceAttributeArray('Instances', String, 'No', null),
      LBCookieStickinessPolicy: new ResourceAttributeArray('LBCookieStickinessPolicy', types.ElasticLoadBalancingLBCookieStickinessPolicyType, 'No', null),
      LoadBalancerName: new ResourceAttribute('LoadBalancerName', String, 'No', null),
      Listeners: new ResourceAttributeArray('Listeners', types.ElasticLoadBalancingListenerPropertyType, 'Yes', null),
      Policies: new ResourceAttributeArray('Policies', types.ElasticLoadBalancingPolicyType, 'No', null),
      Scheme: new ResourceAttribute('Scheme', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', String, 'No', null),
      Subnets: new ResourceAttributeArray('Subnets', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  LoadBalancer: LoadBalancer
}
