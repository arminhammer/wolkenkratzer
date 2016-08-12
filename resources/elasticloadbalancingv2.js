'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ElasticLoadBalancingV2 */

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {ElasticLoadBalancingListenerCertificates} Certificates Required: Conditional. The SSL server certificate for the listener. With a certificate, you can encrypt traffic between the load balancer and the clients that initiate HTTPS sessions, and traffic between the load balancer and your targets.Update requires: No interruption
* @property {ElasticLoadBalancingListenerDefaultActions} DefaultActions Required: Yes. The default actions that the listener takes when handling incoming requests.Update requires: No interruption
* @property {String} LoadBalancerArn Required: Yes. The Amazon Resource Name (ARN) of the load balancer to associate with the listener.Update requires: Replacement
* @property {Number} Port Required: Yes. The port on which the listener listens for requests.For valid values, see the Port parameter for the CreateListener action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
* @property {String} Protocol Required: Yes. The protocol that clients must use to send requests to the listener.For valid values, see the Protocol parameter for the CreateListener action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
* @property {String} SslPolicy Required: No. The security policy that defines the ciphers and protocols that the load balancer supports.Update requires: No interruption
*/
class Listener extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::Listener'
    let properties = {
      Certificates: new ResourceAttributeArray('Certificates', types.ElasticLoadBalancingListenerCertificates, 'Conditional', null),
      DefaultActions: new ResourceAttributeArray('DefaultActions', types.ElasticLoadBalancingListenerDefaultActions, 'Yes', null),
      LoadBalancerArn: new ResourceAttribute('LoadBalancerArn', String, 'Yes', null),
      Port: new ResourceAttribute('Port', Number, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null),
      SslPolicy: new ResourceAttribute('SslPolicy', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {ElasticLoadBalancingListenerRuleActions} Actions Required: Yes. The action that the listener takes when a request meets the specified condition.Update requires: No interruption
* @property {ElasticLoadBalancingListenerRuleConditions} Conditions Required: Yes. The conditions under which a rule takes effect.Update requires: No interruption
* @property {String} ListenerArn Required: Yes. The Amazon Resource Name (ARN) of the listener that the rule applies to.Update requires: Replacement
* @property {Number} Priority Required: Yes. The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules.NoteA target group can have only one rule with a given priority.For valid values, see the Priority parameter for the CreateRule action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
*/
class ListenerRule extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::ListenerRule'
    let properties = {
      Actions: new ResourceAttributeArray('Actions', types.ElasticLoadBalancingListenerRuleActions, 'Yes', null),
      Conditions: new ResourceAttributeArray('Conditions', types.ElasticLoadBalancingListenerRuleConditions, 'Yes', null),
      ListenerArn: new ResourceAttribute('ListenerArn', String, 'Yes', null),
      Priority: new ResourceAttribute('Priority', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {ElasticLoadBalancingLoadBalancerLoadBalancerAttributes} LoadBalancerAttributes Required: No. Load balancer configurations.Update requires: No interruption
* @property {String} Name Required: No. A name for the load balancer, which must be unique within your AWS account. The name can have a maximum of 32 alphanumeric characters and hyphens. Names can't begin or end with a hyphen.Update requires: Replacement
* @property {String} Scheme Required: No. Indicates whether the load balancer is Internet-facing or internal. An Internet-facing load balancer routes requests from clients over the Internet to targets in your public subnets. An internal load balancer routes requests to targets using private IP addresses.For valid and default values, see the Scheme parameter for the CreateLoadBalancer action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: Replacement
* @property {String} SecurityGroups Required: No. A list of the IDs of the security groups to assign to the load balancer.Update requires: No interruption
* @property {String} Subnets Required: Yes. A list of at least two IDs of the subnets to associate with the load balancer. Subnets must be in different Availability Zones.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) to associate with this load balancer. Use tags to help manage resources.Update requires: No interruption
*/
class LoadBalancer extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::LoadBalancer'
    let properties = {
      LoadBalancerAttributes: new ResourceAttributeArray('LoadBalancerAttributes', types.ElasticLoadBalancingLoadBalancerLoadBalancerAttributes, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      Scheme: new ResourceAttribute('Scheme', String, 'No', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', String, 'No', null),
      Subnets: new ResourceAttributeArray('Subnets', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {Number} HealthCheckIntervalSeconds Required: No. The approximate number of seconds between health checks for an individual target.Update requires: No interruption
* @property {String} HealthCheckPath Required: No. The ping path destination where Elastic Load Balancing sends health check requests.Update requires: No interruption
* @property {String} HealthCheckPort Required: No. The port that the load balancer uses when performing health checks on the targets.For valid and default values, see the HealthCheckPort parameter for the CreateTargetGroup action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
* @property {String} HealthCheckProtocol Required: No. The protocol that the load balancer uses when performing health checks on the targets, such as HTTP or HTTPS.For valid and default values, see the HealthCheckProtocol parameter for the CreateTargetGroup action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
* @property {Number} HealthCheckTimeoutSeconds Required: No. The number of seconds to wait for a response before considering that a health check has failed.Update requires: No interruption
* @property {Number} HealthyThresholdCount Required: No. The number of consecutive successful health checks that are required before an unhealthy target is considered healthy.Update requires: No interruption
* @property {ElasticLoadBalancingTargetGroupMatcher} Matcher Required: No. The HTTP codes that a healthy target uses when responding to a health check.Update requires: No interruption
* @property {String} Name Required: No. A name for the target group.Update requires: Replacement
* @property {Number} Port Required: Yes. The port on which the targets receive traffic.Update requires: Replacement
* @property {String} Protocol Required: Yes. The protocol to use for routing traffic to the targets.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for the target group. Use tags to help manage resources.Update requires: No interruption.
* @property {ElasticLoadBalancingTargetGroupTargetGroupAttributes} TargetGroupAttributes Required: No. Target group configurations.Update requires: No interruption
* @property {ElasticLoadBalancingTargetGroupTargetDescription} Targets Required: No. The targets to add to this target group.Update requires: No interruption
* @property {Number} UnhealthyThresholdCount Required: No. The number of consecutive failed health checks that are required before a target is considered unhealthy.Update requires: No interruption
* @property {String} VpcId Required: Yes. The ID of the VPC in which your targets are located.Update requires: Replacement
*/
class TargetGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::TargetGroup'
    let properties = {
      HealthCheckIntervalSeconds: new ResourceAttribute('HealthCheckIntervalSeconds', Number, 'No', null),
      HealthCheckPath: new ResourceAttribute('HealthCheckPath', String, 'No', null),
      HealthCheckPort: new ResourceAttribute('HealthCheckPort', String, 'No', null),
      HealthCheckProtocol: new ResourceAttribute('HealthCheckProtocol', String, 'No', null),
      HealthCheckTimeoutSeconds: new ResourceAttribute('HealthCheckTimeoutSeconds', Number, 'No', null),
      HealthyThresholdCount: new ResourceAttribute('HealthyThresholdCount', Number, 'No', null),
      Matcher: new ResourceAttribute('Matcher', types.ElasticLoadBalancingTargetGroupMatcher, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      Port: new ResourceAttribute('Port', Number, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, 'Yes', null),
      Tags: new tag.TagSet(),
      TargetGroupAttributes: new ResourceAttributeArray('TargetGroupAttributes', types.ElasticLoadBalancingTargetGroupTargetGroupAttributes, 'No', null),
      Targets: new ResourceAttributeArray('Targets', types.ElasticLoadBalancingTargetGroupTargetDescription, 'No', null),
      UnhealthyThresholdCount: new ResourceAttribute('UnhealthyThresholdCount', Number, 'No', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Listener: Listener,
  ListenerRule: ListenerRule,
  LoadBalancer: LoadBalancer,
  TargetGroup: TargetGroup
}
