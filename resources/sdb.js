'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module SDB */

/** @memberof module:SDB
*   @extends WKResource
* @property {String} Description Required: No. Information about the Amazon SimpleDB domain.Update requires: Updates are not supported.
*/
function Domain (name, propertiesObject) {
    let resourceType = 'AWS::SDB::Domain'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Domain.prototype = Object.create(WKResource.prototype)

module.exports = {  Domain: Domain
}
