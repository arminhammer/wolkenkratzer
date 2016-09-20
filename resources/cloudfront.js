'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module CloudFront */

/** @memberof module:CloudFront
*   @extends WKResource
* @property {CloudFrontDistributionConfig} DistributionConfig Required: Yes. The distribution's configuration information.Update requires: No interruption
*/
function Distribution (name, propertiesObject) {
    let resourceType = 'AWS::CloudFront::Distribution'
    let properties = {
      DistributionConfig: new ResourceAttribute('DistributionConfig', types.CloudFrontDistributionConfig, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Distribution.prototype = Object.create(WKResource.prototype)

module.exports = {  Distribution: Distribution
}
