'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
const tagset_1 = require("./tagset");
const resourceattribute_1 = require("./resourceattribute");
const types = require('./types')();
class Service {
    constructor(serviceName) {
        let service = {};
        const stub = require('../stubs/json/resources/' + serviceName);
        for (let resourceStub in stub) {
            let resourceBlock = function (name, propertiesObject) {
                let resourceType = stub[resourceStub].Name;
                let properties = {};
                for (let prop in stub[resourceStub].Properties) {
                    if (prop === 'Tags') {
                        properties[prop] = new tagset_1.TagSet();
                    }
                    else {
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
                        properties[prop] = new resourceattribute_1.ResourceAttribute(prop, realType, propBlock.Array, propBlock.Required, null);
                    }
                }
                return new resource_1.WKResource(name, resourceType, properties, propertiesObject);
            };
            service[resourceStub] = resourceBlock;
        }
        return service;
    }
}
exports.Service = Service;
