'use strict';

const ResourceAttribute = require('./resourceattribute').ResourceAttribute;
const ResourceProperty = require('./resourceproperty').ResourceProperty;

let types = null;

function Types() {
  if (types) {
    return types;
  } else {
    types = {};
    const stub = require('../stubs/json/properties/properties');
    for (let propStub in stub) {
      let propBlock = function(propertiesObject) {
        let propName = stub[propStub].Name;
        let properties = {};
        for (let prop in stub[propStub].Properties) {
          let propBlock = stub[propStub].Properties[prop];
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
        ResourceProperty.call(this, propName, properties, propertiesObject);
      };
      propBlock.prototype = Object.create(ResourceProperty.prototype);
      types[propStub] = propBlock;
    }
    return types;
  }
}

module.exports = Types;
