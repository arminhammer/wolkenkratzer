/**
 * Created by arming on 12/16/16.
 */

'use strict'
const ResourceAttribute = require('./resourceattribute').ResourceAttribute
const ResourceProperty = require('./resource').ResourceProperty
// const WKResource = require('./resource').WKResource
// const types = require('./types')

/* function AmazonAPIGatewayRestApiS3Location (propertiesObject) {
 let properties = {
 Bucket: new ResourceAttribute('Bucket', String, false, 'No', null),
 ETag: new ResourceAttribute('ETag', String, false, 'No', null),
 Key: new ResourceAttribute('Key', String, false, 'No', null),
 Version: new ResourceAttribute('Version', String, false, 'No', null)
 }
 ResourceProperty.call(this, 'AmazonAPIGatewayRestApiS3Location', properties, propertiesObject)
 }
 AmazonAPIGatewayRestApiS3Location.prototype = Object.create(ResourceProperty.prototype)
 */

let types = null

function Types () {
  if (types) {
    return types
  } else {
    types = {}
    const stub = require('./stubs/json/properties/properties')
    for (let propStub in stub) {
      let propName = stub[ propStub ].Name
      let properties = {}

      for (let prop in stub[ propStub ].Properties) {
        let propBlock = stub[ propStub ].Properties[ prop ]
        let realType = String
        switch (propBlock.Type) {
          case 'String':
            realType = String
            break
          case 'Number':
            realType = Number
            break
          case 'Boolean':
            realType = Boolean
            break
        }
        properties[ prop ] = new ResourceAttribute(prop, realType, propBlock.Array, propBlock.Required, null)
      }
      let propBlock = function (propertiesObject) {
        ResourceProperty.call(this, propName, properties, propertiesObject)
      }
      propBlock.prototype = Object.create(ResourceProperty.prototype)
      types[ propStub ] = propBlock
    }
    return types
  }
}

module.exports = Types
