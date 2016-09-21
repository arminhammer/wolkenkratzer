'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
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
function Listener (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::Listener'
    let properties = {
      Certificates: new ResourceAttribute('Certificates', types.ElasticLoadBalancingListenerCertificates, true, 'Conditional', null),
      DefaultActions: new ResourceAttribute('DefaultActions', types.ElasticLoadBalancingListenerDefaultActions, true, 'Yes', null),
      LoadBalancerArn: new ResourceAttribute('LoadBalancerArn', String, false, 'Yes', null),
      Port: new ResourceAttribute('Port', Number, false, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, false, 'Yes', null),
      SslPolicy: new ResourceAttribute('SslPolicy', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Listener.prototype = Object.create(WKResource.prototype)

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {ElasticLoadBalancingListenerRuleActions} Actions Required: Yes. The action that the listener takes when a request meets the specified condition.Update requires: No interruption
* @property {ElasticLoadBalancingListenerRuleConditions} Conditions Required: Yes. The conditions under which a rule takes effect.Update requires: No interruption
* @property {String} ListenerArn Required: Yes. The Amazon Resource Name (ARN) of the listener that the rule applies to.Update requires: Replacement
* @property {Number} Priority Required: Yes. The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules.NoteA target group can have only one rule with a given priority.For valid values, see the Priority parameter for the CreateRule action in the Elastic Load Balancing API Reference version 2015-12-01.Update requires: No interruption
*/
function ListenerRule (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::ListenerRule'
    let properties = {
      Actions: new ResourceAttribute('Actions', types.ElasticLoadBalancingListenerRuleActions, true, 'Yes', null),
      Conditions: new ResourceAttribute('Conditions', types.ElasticLoadBalancingListenerRuleConditions, true, 'Yes', null),
      ListenerArn: new ResourceAttribute('ListenerArn', String, false, 'Yes', null),
      Priority: new ResourceAttribute('Priority', Number, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ListenerRule.prototype = Object.create(WKResource.prototype)

/** @memberof module:ElasticLoadBalancingV2
*   @extends WKResource
* @property {ElasticLoadBalancingLoadBalancerLoadBalancerAttributes} LoadBalancerAttributes Required: No. Specifies the load balancer configuration.Update requires: No interruption
* @property {String} Name Required: No. Specifies a name for the load balancer. This name must be unique within your AWS
            account and can have a maximum of 32 alphanumeric characters and hyphens. A name can't
            begin or end with a hyphen.Update requires: Replacement
* @property {String} Scheme Required: No. Specifies whether the load balancer is internal or Internet-facing. An internal load
            balancer routes requests to targets using private IP addresses. An Internet-facing load
            balancer routes requests from clients over the Internet to targets in your public
            subnets. For valid and default values, see the Scheme parameter for the
                CreateLoadBalancer action in the
              Elastic Load Balancing API Reference version 2015-12-01.Update requires: Replacement
* @property {String} SecurityGroups Required: No. Specifies a list of the IDs of the security groups to assign to the load
            balancer.Update requires: No interruption
* @property {String} Subnets Required: Yes. Specifies a list of at least two IDs of the subnets to associate with the load
            balancer. The subnets must be in different Availability Zones.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. Specifies an arbitrary set of tags (key–value pairs) to associate with this
            load balancer. Use tags to manage your resources.Update requires: No interruption
*/
function LoadBalancer (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::LoadBalancer'
    let properties = {
      LoadBalancerAttributes: new ResourceAttribute('LoadBalancerAttributes', types.ElasticLoadBalancingLoadBalancerLoadBalancerAttributes, true, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      Scheme: new ResourceAttribute('Scheme', String, false, 'No', null),
      SecurityGroups: new ResourceAttribute('SecurityGroups', String, true, 'No', null),
      Subnets: new ResourceAttribute('Subnets', String, true, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
LoadBalancer.prototype = Object.create(WKResource.prototype)

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
function TargetGroup (name, propertiesObject) {
    let resourceType = 'AWS::ElasticLoadBalancingV2::TargetGroup'
    let properties = {
      HealthCheckIntervalSeconds: new ResourceAttribute('HealthCheckIntervalSeconds', Number, false, 'No', null),
      HealthCheckPath: new ResourceAttribute('HealthCheckPath', String, false, 'No', null),
      HealthCheckPort: new ResourceAttribute('HealthCheckPort', String, false, 'No', null),
      HealthCheckProtocol: new ResourceAttribute('HealthCheckProtocol', String, false, 'No', null),
      HealthCheckTimeoutSeconds: new ResourceAttribute('HealthCheckTimeoutSeconds', Number, false, 'No', null),
      HealthyThresholdCount: new ResourceAttribute('HealthyThresholdCount', Number, false, 'No', null),
      Matcher: new ResourceAttribute('Matcher', types.ElasticLoadBalancingTargetGroupMatcher, false, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      Port: new ResourceAttribute('Port', Number, false, 'Yes', null),
      Protocol: new ResourceAttribute('Protocol', String, false, 'Yes', null),
      Tags: new tag.TagSet(),
      TargetGroupAttributes: new ResourceAttribute('TargetGroupAttributes', types.ElasticLoadBalancingTargetGroupTargetGroupAttributes, true, 'No', null),
      Targets: new ResourceAttribute('Targets', types.ElasticLoadBalancingTargetGroupTargetDescription, true, 'No', null),
      UnhealthyThresholdCount: new ResourceAttribute('UnhealthyThresholdCount', Number, false, 'No', null),
      VpcId: new ResourceAttribute('VpcId', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
TargetGroup.prototype = Object.create(WKResource.prototype)

module.exports = {  Listener: Listener,
  ListenerRule: ListenerRule,
  LoadBalancer: LoadBalancer,
  TargetGroup: TargetGroup
}
