'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const ResourceAttribute = require('./resourceattribute').ResourceAttribute;
const resource_1 = require("./resource");
const types = require('./types')();
const tag = require('./tag');
class Service {
    constructor(serviceName) {
        let service = {};
        let s1 = {};
        const stub = require('../stubs/json/resources/' + serviceName);
        for (let resourceStub in stub) {
            let resourceBlock = function (name, propertiesObject) {
                let resourceType = stub[resourceStub].Name;
                let properties = {};
                for (let prop in stub[resourceStub].Properties) {
                    if (prop === 'Tags') {
                        properties[prop] = new tag.TagSet();
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
                        properties[prop] = new ResourceAttribute(prop, realType, propBlock.Array, propBlock.Required, null);
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
