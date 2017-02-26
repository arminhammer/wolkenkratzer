/**
 * Created by arming on 12/16/16.
 */

'use strict';
const ResourceAttribute = require('./resourceattribute').ResourceAttribute;
const WKResource = require('./resource').WKResource;
const types = require('./types')();
const tag = require('./tag');

function Service(serviceName) {
  let service = {};
  const stub = require('../stubs/json/resources/' + serviceName);
  for (let resourceStub in stub) {
    let resourceBlock = function(name, propertiesObject) {
      let resourceType = stub[resourceStub].Name;
      let properties = {};
      for (let prop in stub[resourceStub].Properties) {
        if (prop === 'Tags') {
          properties[prop] = new tag.TagSet();
        } else {
          let propBlock = stub[resourceStub].Properties[prop];
          let realType = String;
          switch (propBlock.Type) {
            case 'String':
              realType = String;
              break;
            case 'Number':
              realType = Number;
              break;
            case 'Boolean':
              realType = Boolean;
              break;
            case 'Object':
              realType = Object;
              break;
            default:
              realType = types[propBlock.Type];
              break;
          }
          properties[prop] = new ResourceAttribute(
            prop,
            realType,
            propBlock.Array,
            propBlock.Required,
            null
          );
        }
      }
      WKResource.call(this, name, resourceType, properties, propertiesObject);
      return this;
    };
    resourceBlock.prototype = Object.create(WKResource.prototype);
    // resourceBlock.prototype.constructor = WKResource.prototype.constructor
    service[resourceStub] = resourceBlock;
  }
  return service;
}

module.exports = Service;
