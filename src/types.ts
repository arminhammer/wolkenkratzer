'use strict';

import { ResourceProperty } from './resourceproperty';
import { ResourceAttribute } from './resourceattribute';
import * as util from './util';

let types: any = null;

function Types() {
  if (types) {
    return types;
  } else {
    types = {};
    const stub = require('../stubs/json/properties/properties');
    for (let propStub in stub) {
      let propBlock = function (propertiesObject: any): any {
        let propName = stub[propStub].Name;
        let properties: any = {};
        for (let prop in stub[propStub].Properties) {
          let propBlock = stub[propStub].Properties[prop];
          properties[prop] = new ResourceAttribute(
              prop,
              util.getTypeFromString(propBlock.Type, types),
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
