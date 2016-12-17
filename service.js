 /**
 * Created by arming on 12/16/16.
 */

 'use strict'
 const ResourceAttribute = require('./resourceattribute').ResourceAttribute
 const WKResource = require('./resource').WKResource
 const types = require('./types')

 function Service (serviceName) {
   let service = {}
   const stub = require('./stubs/json/resources/' + serviceName)
   for (let resourceStub in stub) {
     let resourceType = stub[resourceStub].Name
     let properties = {}

     for (let prop in stub[resourceStub].Properties) {
       let propBlock = stub[resourceStub].Properties[prop]
       let realType = String
       switch (propBlock.Type) {
         case 'String':
           realType = String
           break
       }
       properties[prop] = new ResourceAttribute(prop, realType, propBlock.Array, propBlock.Required, null)
     }
     let resourceBlock = function (name, propertiesObject) {
       WKResource.call(this, name, resourceType, properties, propertiesObject)
     }
     resourceBlock.prototype = Object.create(WKResource.prototype)
     service[resourceStub] = resourceBlock
   }
   return service
 }

 module.exports = Service
