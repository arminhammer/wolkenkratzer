'use strict';

import { WKResource } from './resource';
import { TagSet } from './tagset';
import { ResourceAttribute } from './resourceattribute';

const types = require('./types')();

export class Service {
  constructor(serviceName: string) {
    let service: any = {};
    const stub = require('../stubs/json/resources/' + serviceName);
    for (let resourceStub in stub) {
      let resourceBlock = function (name: string, propertiesObject: any) {
        let resourceType = stub[resourceStub].Name;
        let properties: any = {};
        for (let prop in stub[resourceStub].Properties) {
          if (prop === 'Tags') {
            properties[prop] = new TagSet();
          } else {
            let propBlock = stub[resourceStub].Properties[prop];
            let realType: any = String;
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
        return new WKResource(name, resourceType, properties, propertiesObject);
      };
      service[resourceStub] = resourceBlock;
    }
    return service;
  }
}