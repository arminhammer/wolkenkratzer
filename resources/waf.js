'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module WAF */

/** @memberof module:WAF
*   @extends WKResource
* @property {AWSWAFByteMatchSetByteMatchTuples} ByteMatchTuples Required: No. Settings for the ByteMatchSet, such as the bytes (typically a
            string that corresponds with ASCII characters) that you want AWS WAF to search for in web
            requests.Update requires: No interruption
* @property {String} Name Required: Yes. A friendly name or description of the ByteMatchSet.Update requires: Replacement
*/
function ByteMatchSet (name, propertiesObject) {
    let resourceType = 'AWS::WAF::ByteMatchSet'
    let properties = {
      ByteMatchTuples: new ResourceAttributeArray('ByteMatchTuples', types.AWSWAFByteMatchSetByteMatchTuples, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ByteMatchSet.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {AWSWAFIPSetIPSetDescriptors} IPSetDescriptors Required: No. The IP address type and IP address range (in CIDR notation) from which web
            requests originate. If you associate the IPSet with a web ACL that is associated with a Amazon CloudFront
            (CloudFront) distribution, this descriptor is the value of one of the following fields in the
            CloudFront access logs:If the viewer did not use an HTTP proxy or a load balancer to send the
                    requestIf the viewer did use an HTTP proxy or a load balancer to send the
                    requestUpdate requires: No interruption
* @property {String} Name Required: Yes. A friendly name or description of the IPSet.Update requires: Replacement
*/
function IPSet (name, propertiesObject) {
    let resourceType = 'AWS::WAF::IPSet'
    let properties = {
      IPSetDescriptors: new ResourceAttributeArray('IPSetDescriptors', types.AWSWAFIPSetIPSetDescriptors, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
IPSet.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {String} MetricName Required: Yes. A friendly name or description for the metrics of the rule.Update requires: Replacement
* @property {String} Name Required: Yes. A friendly name or description of the rule.Update requires: Replacement
* @property {AWSWAFRulePredicates} Predicates Required: No. The ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in a rule. If you add more than one predicate to a rule, a request must match all conditions in order to be allowed or blocked.Update requires: No interruption
*/
function Rule (name, propertiesObject) {
    let resourceType = 'AWS::WAF::Rule'
    let properties = {
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Predicates: new ResourceAttributeArray('Predicates', types.AWSWAFRulePredicates, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Rule.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {String} Name Required: Yes. A friendly name or description for the SizeConstraintSet.Update requires: Replacement
* @property {AWSWAFSizeConstraintSetSizeConstraint} SizeConstraints Required: Yes. The size constraint and the part of the web request to check.Update requires: No interruption
*/
function SizeConstraintSet (name, propertiesObject) {
    let resourceType = 'AWS::WAF::SizeConstraintSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      SizeConstraints: new ResourceAttributeArray('SizeConstraints', types.AWSWAFSizeConstraintSetSizeConstraint, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
SizeConstraintSet.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {String} Name Required: Yes. A friendly name or description of the SqlInjectionMatchSet.Update requires: Replacement
* @property {AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples} SqlInjectionMatchTuples Required: No. The parts of web requests that you want AWS WAF to inspect for malicious SQL code
            and, if you want AWS WAF to inspect a header, the name of the header.Update requires: No interruption
*/
function SqlInjectionMatchSet (name, propertiesObject) {
    let resourceType = 'AWS::WAF::SqlInjectionMatchSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      SqlInjectionMatchTuples: new ResourceAttributeArray('SqlInjectionMatchTuples', types.AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
SqlInjectionMatchSet.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {AWSWAFWebACLAction} DefaultAction Required: Yes. The action that you want AWS WAF to take when a request doesn't match the
                  criteria in any of the rules that are associated with the web ACL.Update requires: No interruption
* @property {String} MetricName Required: Yes. A friendly name or description for the Amazon CloudWatch metric of this web ACL.Update requires: Replacement
* @property {String} Name Required: Yes. A friendly name or description of the web ACL.Update requires: Replacement
* @property {AWSWAFWebACLRules} Rules Required: No. The rules to associate with the web ACL and the settings for each rule.Update requires: No interruption
*/
function WebACL (name, propertiesObject) {
    let resourceType = 'AWS::WAF::WebACL'
    let properties = {
      DefaultAction: new ResourceAttribute('DefaultAction', types.AWSWAFWebACLAction, 'Yes', null),
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Rules: new ResourceAttributeArray('Rules', types.AWSWAFWebACLRules, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
WebACL.prototype = Object.create(WKResource.prototype)

/** @memberof module:WAF
*   @extends WKResource
* @property {String} Name Required: Yes. A friendly name or description for the XssMatchSet.Update requires: Replacement
* @property {AWSWAFXssMatchSetXssMatchTuple} XssMatchTuples Required: No. The parts of web requests that you want to inspect for cross-site scripting attacks.Update requires: No interruption
*/
function XssMatchSet (name, propertiesObject) {
    let resourceType = 'AWS::WAF::XssMatchSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      XssMatchTuples: new ResourceAttributeArray('XssMatchTuples', types.AWSWAFXssMatchSetXssMatchTuple, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
XssMatchSet.prototype = Object.create(WKResource.prototype)

module.exports = {  ByteMatchSet: ByteMatchSet,
  IPSet: IPSet,
  Rule: Rule,
  SizeConstraintSet: SizeConstraintSet,
  SqlInjectionMatchSet: SqlInjectionMatchSet,
  WebACL: WebACL,
  XssMatchSet: XssMatchSet
}
