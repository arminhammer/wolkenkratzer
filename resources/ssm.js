'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module SSM */

/** @memberof module:SSM
*   @extends WKResource
* @property {Object} Content Required: Yes. A JSON object that describes an instance configuration. For more information,
                  see SSM Documents in the
                     Amazon EC2 Simple Systems Manager API Reference.Update requires: Replacement
*/
function Document (name, propertiesObject) {
    let resourceType = 'AWS::SSM::Document'
    let properties = {
      Content: new ResourceAttribute('Content', Object, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Document.prototype = Object.create(WKResource.prototype)

module.exports = {  Document: Document
}
