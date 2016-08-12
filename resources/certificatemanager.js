'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CertificateManager */

/** @memberof module:CertificateManager
*   @extends WKResource
* @property {String} DomainName Required: Yes. Fully qualified domain name (FQDN), such as www.example.com, of the site that you want to secure with the ACM certificate. To protect several sites in the same domain, use an asterisk (*) to specify a wildcard. For example, *.example.com protects www.example.com, site.example.com, and images.example.com.For constraints, see the DomainName parameter for the RequestCertificate action in the AWS Certificate Manager API Reference.Update requires: Replacement
* @property {AWSCertificateManagerCertificateDomainValidationOption} DomainValidationOptions Required: No. Domain information that domain name registrars use to verify your identity. For more information and the default values, see Configure Email for Your Domain and Validate Domain Ownership in the AWS Certificate Manager User Guide.Update requires: Replacement
* @property {String} SubjectAlternativeNames Required: No. FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, you can add www.example.net to a certificate for the www.example.com domain name so that users can reach your site by using either name.Update requires: Replacement
*/
class Certificate extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CertificateManager::Certificate'
    let properties = {
      DomainName: new ResourceAttribute('DomainName', String, 'Yes', null),
      DomainValidationOptions: new ResourceAttributeArray('DomainValidationOptions', types.AWSCertificateManagerCertificateDomainValidationOption, 'No', null),
      SubjectAlternativeNames: new ResourceAttributeArray('SubjectAlternativeNames', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Certificate: Certificate
}
