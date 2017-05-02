'use strict';

import { WKResource } from './resource';
import { TagSet } from './tagset';
import { ResourceAttribute } from './resourceattribute';
import * as util from './util';

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
            properties[prop] = new ResourceAttribute(
                prop,
                util.getTypeFromString(propBlock.Type, types),
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