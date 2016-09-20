'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module SDB */

/** @memberof module:SDB
*   @extends WKResource
*/
function Domain (name, propertiesObject) {
    let resourceType = 'AWS::SDB::Domain'
    let properties = {
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Domain.prototype = Object.create(WKResource.prototype)

module.exports = {  Domain: Domain
}
