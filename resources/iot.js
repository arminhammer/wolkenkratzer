'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module IoT */

/** @memberof module:IoT
*   @extends WKResource
* @property {String} CertificateSigningRequest Required: Yes. The certificate signing request (CSR).Update requires: Replacement
* @property {String} Status Required: Yes. The status of the certificate.Update requires: No interruption
*/
class Certificate extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Certificate'
    let properties = {
      CertificateSigningRequest: new ResourceAttribute('CertificateSigningRequest', String, 'Yes', null),
      Status: new ResourceAttribute('Status', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:IoT
*   @extends WKResource
* @property {Object} PolicyDocument Required: Yes. The JSON document that describes the policy.Update requires: Replacement
* @property {String} PolicyName Required: No. The name (the physical ID) of the AWS IoT policy.Update requires: Replacement
*/
class Policy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Policy'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:IoT
*   @extends WKResource
* @property {String} PolicyName Required: Yes. The name of the policy.Update requires: Replacement
* @property {String} Principal Required: Yes. The principal, which can be a certificate ARN (as returned from the
                     CreateCertificate operation) or an Amazon Cognito ID.Update requires: Replacement
*/
class PolicyPrincipalAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::PolicyPrincipalAttachment'
    let properties = {
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null),
      Principal: new ResourceAttribute('Principal', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:IoT
*   @extends WKResource
* @property {Map} AttributePayload Required: No. A JSON string that contains up to three key-value pairs, for example:
                     {\"attributes\":{\"string1\":\"string2\"}}.Update requires: No interruption
* @property {String} ThingName Required: No. The name (the physical ID) of the AWS IoT thing.Update requires: Replacement
*/
class Thing extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::Thing'
    let properties = {
      AttributePayload: new ResourceAttribute('AttributePayload', Map, 'No', null),
      ThingName: new ResourceAttribute('ThingName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:IoT
*   @extends WKResource
* @property {String} Principal Required: Yes. The principal, which can be a certificate ARN (as returned from the
                     CreateCertificate operation) or an Amazon Cognito ID.Update requires: Replacement
* @property {String} ThingName Required: Yes. The name of the AWS IoT thing.Update requires: Replacement
*/
class ThingPrincipalAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::ThingPrincipalAttachment'
    let properties = {
      Principal: new ResourceAttribute('Principal', String, 'Yes', null),
      ThingName: new ResourceAttribute('ThingName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:IoT
*   @extends WKResource
* @property {String} RuleName Required: No. The name (the physical ID) of the AWS IoT rule.Update requires: Replacement
* @property {AWSIoTTopicRulePayload} TopicRulePayload Required: Yes. The actions associated with the AWS IoT rule.Update requires: No interruption
*/
class TopicRule extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IoT::TopicRule'
    let properties = {
      RuleName: new ResourceAttribute('RuleName', String, 'No', null),
      TopicRulePayload: new ResourceAttribute('TopicRulePayload', types.AWSIoTTopicRulePayload, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Certificate: Certificate,
  Policy: Policy,
  PolicyPrincipalAttachment: PolicyPrincipalAttachment,
  Thing: Thing,
  ThingPrincipalAttachment: ThingPrincipalAttachment,
  TopicRule: TopicRule
}
