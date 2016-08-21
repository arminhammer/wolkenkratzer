'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module Route53 */

/** @memberof module:Route53
*   @extends WKResource
* @property {AmazonRoute53HealthCheckConfig} HealthCheckConfig Required: Yes. An Amazon Route 53 health check.Update requires: No interruption
* @property {AmazonRoute53HealthCheckTags} HealthCheckTags Required: No. An arbitrary set of tags (key–value pairs) for this health check.Update requires: No interruption
*/
function HealthCheck (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HealthCheck'
    let properties = {
      HealthCheckConfig: new ResourceAttribute('HealthCheckConfig', types.AmazonRoute53HealthCheckConfig, 'Yes', null),
      HealthCheckTags: new ResourceAttributeArray('HealthCheckTags', types.AmazonRoute53HealthCheckTags, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
HealthCheck.prototype = Object.create(WKResource.prototype)

/** @memberof module:Route53
*   @extends WKResource
* @property {AmazonRoute53HostedZoneConfigProperty} HostedZoneConfig Required: No. A complex type that contains an optional comment about your hosted zone.Update requires: No interruption
* @property {AmazonRoute53HostedZoneTags} HostedZoneTags Required: No. An arbitrary set of tags (key–value pairs) for this hosted zone.Update requires: No interruption
* @property {String} Name Required: Yes. The name of the domain. For resource record types that include a domain name,
                  specify a fully qualified domain name.Update requires: Replacement
* @property {AmazonRoute53HostedZoneVPCs} VPCs Required: No. One or more VPCs that you want to associate with this hosted zone. When you
                  specify this property, AWS CloudFormation creates a private hosted zone.If this property was specified previously and you're modifying values, updates
                  require no interruption. If this
                  property wasn't specified and you add values, updates require replacement. Also, if this property was
                  specified and you remove all values, updates require replacement.
*/
function HostedZone (name, propertiesObject) {
    let resourceType = 'AWS::Route53::HostedZone'
    let properties = {
      HostedZoneConfig: new ResourceAttribute('HostedZoneConfig', types.AmazonRoute53HostedZoneConfigProperty, 'No', null),
      HostedZoneTags: new ResourceAttributeArray('HostedZoneTags', types.AmazonRoute53HostedZoneTags, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      VPCs: new ResourceAttributeArray('VPCs', types.AmazonRoute53HostedZoneVPCs, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
HostedZone.prototype = Object.create(WKResource.prototype)

/** @memberof module:Route53
*   @extends WKResource
* @property {Route53AliasTargetProperty} AliasTarget Required: Conditional. Alias resource record sets only: Information about the
                  domain to which you are redirecting traffic.If you specify this property, do not specify the TTL property. The
                  alias uses a TTL value from the alias target record.For more information about alias resource record sets, see Creating Alias Resource Record Sets in the Amazon Route 53 Developer
                     Guide and POST ChangeResourceRecordSets in the Amazon Route 53 API reference.Update requires: No interruption
* @property {String} Comment Required: No. Any comments that you want to include about the hosted zone.ImportantIf the record set is part of a record set group, this property isn't valid.
                     Don't specify this property.Update requires: No interruption
* @property {String} Failover Required: No. Designates the record set as a PRIMARY or SECONDARY
                  failover record set. When you have more than one resource performing the same
                  function, you can configure Amazon Route 53 to check the health of your resources and use
                  only health resources to respond to DNS queries. You cannot create nonfailover
                  resource record sets that have the same Name and Type
                  property values as failover resource record sets. For more information, see the
                     Failover element in the Amazon Route 53 API Reference.If you specify this property, you must specify the SetIdentifier
                  property.Update requires: No interruption
* @property {AmazonRoute53RecordSetGeoLocationProperty} GeoLocation Required: No. Describes how Amazon Route 53 responds to DNS queries based on the geographic origin of
                  the query.Update requires: No interruption
* @property {String} HealthCheckId Required: No. The health check ID that you want to apply to this record set. Amazon Route 53 returns
                  this resource record set in response to a DNS query only while record set is
                  healthy.Update requires: No interruption
* @property {String} HostedZoneId Required: Conditional. The ID of the hosted zone.Update requires: Replacement
* @property {String} HostedZoneName Required: Conditional. The name of the domain for the hosted zone where you want to add the record
                  set.When you create a stack using an AWS::Route53::RecordSet that
                  specifies HostedZoneName, AWS CloudFormation attempts to find a hosted
                  zone whose name matches the HostedZoneName. If AWS CloudFormation cannot
                  find a hosted zone with a matching domain name, or if there is more than one
                  hosted zone with the specified domain name, AWS CloudFormation will not create the
                  stack.If you have multiple hosted zones with the same domain name, you must
                  explicitly specify the hosted zone using
                  HostedZoneId.Update requires: Replacement
* @property {String} Name Required: Yes. The name of the domain. You must specify a fully qualified domain name that
                  ends with a period as the last label indication. If you omit the final period,
                  AWS CloudFormation adds it.Update requires: No interruption
* @property {String} ResourceRecords Required: No. List of resource records to add. Each record should be in the format
                  appropriate for the record type specified by the Type
                  property. For information about different record types and their record formats,
                  see Appendix: Domain Name Format in the Amazon Route 53 Developer
                     Guide. Required: Conditional. If you don't specify the AliasTarget
                  property, you must specify this property. If you are creating an alias resource
                  record set, do not specify this property.Update requires: No interruption
* @property {String} SetIdentifier Required: Conditional. A unique identifier that differentiates among multiple resource record sets
                  that have the same combination of DNS name and type.For more information, see the SetIdentifier element in the Amazon Route 53 Developer
                     Guide.Update requires: No interruption
* @property {String} TTL Required: Conditional. The resource record cache time to live (TTL), in seconds. If you specify this
                  property, do not specify the AliasTarget property. For alias target
                  records, the alias uses a TTL value from the target.If you specify this property, you must specify the
                     ResourceRecords property.Update requires: No interruption
* @property {String} Type Required: Yes. The type of records to add.Valid Values: A | AAAA | CNAME | MX | NS | PTR | SOA | SPF
                  | SRV | TXTUpdate requires: No interruption
* @property {Number} Weight Required: Conditional. Weighted resource record sets only: Among resource record
                  sets that have the same combination of DNS name and type, a value that determines
                  what portion of traffic for the current resource record set is routed to the
                  associated location.For more information about weighted resource record sets, see Setting Up Weighted Resource Record Sets in the Amazon Route 53
                     Developer Guide.Update requires: No interruption
*/
function RecordSet (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSet'
    let properties = {
      AliasTarget: new ResourceAttribute('AliasTarget', types.Route53AliasTargetProperty, 'Conditional', null),
      Comment: new ResourceAttribute('Comment', String, 'No', null),
      Failover: new ResourceAttribute('Failover', String, 'No', null),
      GeoLocation: new ResourceAttribute('GeoLocation', types.AmazonRoute53RecordSetGeoLocationProperty, 'No', null),
      HealthCheckId: new ResourceAttribute('HealthCheckId', String, 'No', null),
      HostedZoneId: new ResourceAttribute('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new ResourceAttribute('HostedZoneName', String, 'Conditional', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ResourceRecords: new ResourceAttributeArray('ResourceRecords', String, 'No', null),
      SetIdentifier: new ResourceAttribute('SetIdentifier', String, 'Conditional', null),
      TTL: new ResourceAttribute('TTL', String, 'Conditional', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Weight: new ResourceAttribute('Weight', Number, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
RecordSet.prototype = Object.create(WKResource.prototype)

/** @memberof module:Route53
*   @extends WKResource
* @property {String} Comment Required: No. Any comments you want to include about the hosted zone.Update requires: No interruption
* @property {String} HostedZoneId Required: Conditional. The ID of the hosted zone.Update requires: Replacement
* @property {String} HostedZoneName Required: Conditional. The name of the domain for the hosted zone where you want to add the record set.When you create a stack using an AWS::Route53::RecordSet that specifies
                     HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the
                     HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain
                  name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create
                  the stack.If you have multiple hosted zones with the same domain name, you must explicitly specify the
                  hosted zone using HostedZoneId.Update requires: Replacement
* @property {RecordSet} RecordSets Required: Yes. List of resource record sets to add.Update requires: No interruption
*/
function RecordSetGroup (name, propertiesObject) {
    let resourceType = 'AWS::Route53::RecordSetGroup'
    let properties = {
      Comment: new ResourceAttribute('Comment', String, 'No', null),
      HostedZoneId: new ResourceAttribute('HostedZoneId', String, 'Conditional', null),
      HostedZoneName: new ResourceAttribute('HostedZoneName', String, 'Conditional', null),
      RecordSets: new ResourceAttributeArray('RecordSets', RecordSet, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
RecordSetGroup.prototype = Object.create(WKResource.prototype)

module.exports = {  HealthCheck: HealthCheck,
  HostedZone: HostedZone,
  RecordSet: RecordSet,
  RecordSetGroup: RecordSetGroup
}
