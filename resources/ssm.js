'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module SSM */

/** @memberof module:SSM
*   @extends WKResource
* @property {Object} Content Required: Yes. A JSON object that describes an instance configuration. For more information,
                  see SSM Documents in the
                     Amazon EC2 Simple Systems Manager API Reference.Update requires: Replacement
*/
class Document extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::SSM::Document'
    let properties = {
      Content: new ResourceAttribute('Content', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Document: Document
}
