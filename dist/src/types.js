'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resourceproperty_1 = require("./resourceproperty");
const resourceattribute_1 = require("./resourceattribute");
const util = require("./util");
let types = null;
function Types() {
    if (types) {
        return types;
    }
    else {
        types = {};
        const stub = require('../stubs/json/properties/properties');
        for (let propStub in stub) {
            let propBlock = function (propertiesObject) {
                let propName = stub[propStub].Name;
                let properties = {};
                for (let prop in stub[propStub].Properties) {
                    let propBlock = stub[propStub].Properties[prop];
                    properties[prop] = new resourceattribute_1.ResourceAttribute(prop, util.getTypeFromString(propBlock.Type, types), propBlock.Array, propBlock.Required, null);
                }
                resourceproperty_1.ResourceProperty.call(this, propName, properties, propertiesObject);
            };
            propBlock.prototype = Object.create(resourceproperty_1.ResourceProperty.prototype);
            types[propStub] = propBlock;
        }
        return types;
    }
}
module.exports = Types;
