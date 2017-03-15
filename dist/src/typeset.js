'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resourceproperty_1 = require("./resourceproperty");
const resourceattribute_1 = require("./resourceattribute");
class TypeSet {
    constructor() { }
    static getTypes() {
        if (this.types) {
            return this.types;
        }
        else {
            this.types = new TypeSet();
            const stub = require('../stubs/json/properties/properties');
            for (let propStub in stub) {
                let propName = stub[propStub].Name;
                let properties = {};
                for (let prop in stub[propStub].Properties) {
                    let propBlock = stub[propStub].Properties[prop];
                    /*let realType: any = String;
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
                        realType = propBlock.Type;
                        break;
                    }
                    if(!propBlock.Type) {
                      console.log('NOT REAL')
                    }
                    */
                    properties[prop] = new resourceattribute_1.ResourceAttribute(prop, propBlock.Type, propBlock.Array, propBlock.Required, null);
                    this.types[propStub] = new resourceproperty_1.ResourceProperty(propName, properties);
                    if (!this.types[propStub]) {
                        console.log('PROBLEM');
                    }
                }
            }
            return this.types;
        }
    }
}
exports.TypeSet = TypeSet;
