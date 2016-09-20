'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module IoT */

/** @memberof module:IoT
*   @extends WKResource
* @property {String} CertificateSigningRequest Required: Yes. The certificate signing request (CSR).Update requires: Replacement
* @property {String} Status Required: Yes. The status of the certificate.Update requires: No interruption
*/
function Certificate (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Certificate'
    let properties = {
      CertificateSigningRequest: new ResourceAttribute('CertificateSigningRequest', String, false, 'Yes', null),
      Status: new ResourceAttribute('Status', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Certificate.prototype = Object.create(WKResource.prototype)

/** @memberof module:IoT
*   @extends WKResource
* @property {Object} PolicyDocument Required: Yes. The JSON document that describes the policy.Update requires: Replacement
* @property {String} PolicyName Required: No. The name (the physical ID) of the AWS IoT policy.Update requires: Replacement
*/
function Policy (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Policy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, false, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Policy.prototype = Object.create(WKResource.prototype)

/** @memberof module:IoT
*   @extends WKResource
* @property {String} PolicyName Required: Yes. The name of the policy.Update requires: Replacement
* @property {String} Principal Required: Yes. The principal, which can be a certificate ARN (as returned from the
                     CreateCertificate operation) or an Amazon Cognito ID.Update requires: Replacement
*/
function PolicyPrincipalAttachment (name, propertiesObject) {
    let resourceType = 'AWS::IoT::PolicyPrincipalAttachment'
    let properties = {
      PolicyName: new ResourceAttribute('PolicyName', String, false, 'Yes', null),
      Principal: new ResourceAttribute('Principal', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
PolicyPrincipalAttachment.prototype = Object.create(WKResource.prototype)

/** @memberof module:IoT
*   @extends WKResource
* @property {Map} AttributePayload Required: No. A JSON string that contains up to three key-value pairs, for example:
                     {\"attributes\":{\"string1\":\"string2\"}}.Update requires: No interruption
* @property {String} ThingName Required: No. The name (the physical ID) of the AWS IoT thing.Update requires: Replacement
*/
function Thing (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Thing'
    let properties = {
      AttributePayload: new ResourceAttribute('AttributePayload', Map, false, 'No', null),
      ThingName: new ResourceAttribute('ThingName', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Thing.prototype = Object.create(WKResource.prototype)

/** @memberof module:IoT
*   @extends WKResource
* @property {String} Principal Required: Yes. The principal, which can be a certificate ARN (as returned from the
                     CreateCertificate operation) or an Amazon Cognito ID.Update requires: Replacement
* @property {String} ThingName Required: Yes. The name of the AWS IoT thing.Update requires: Replacement
*/
function ThingPrincipalAttachment (name, propertiesObject) {
    let resourceType = 'AWS::IoT::ThingPrincipalAttachment'
    let properties = {
      Principal: new ResourceAttribute('Principal', String, false, 'Yes', null),
      ThingName: new ResourceAttribute('ThingName', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ThingPrincipalAttachment.prototype = Object.create(WKResource.prototype)

/** @memberof module:IoT
*   @extends WKResource
* @property {String} RuleName Required: No. The name (the physical ID) of the AWS IoT rule.Update requires: Replacement
* @property {AWSIoTTopicRulePayload} TopicRulePayload Required: Yes. The actions associated with the AWS IoT rule.Update requires: No interruption
*/
function TopicRule (name, propertiesObject) {
    let resourceType = 'AWS::IoT::TopicRule'
    let properties = {
      RuleName: new ResourceAttribute('RuleName', String, false, 'No', null),
      TopicRulePayload: new ResourceAttribute('TopicRulePayload', types.AWSIoTTopicRulePayload, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
TopicRule.prototype = Object.create(WKResource.prototype)

module.exports = {  Certificate: Certificate,
  Policy: Policy,
  PolicyPrincipalAttachment: PolicyPrincipalAttachment,
  Thing: Thing,
  ThingPrincipalAttachment: ThingPrincipalAttachment,
  TopicRule: TopicRule
}
