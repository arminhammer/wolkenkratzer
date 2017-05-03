"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./elements/resource");
function Service(name) {
    // console.log(`creating service ${name}`);
    const json = require(`../stubs/json/resources/${name}.json`);
    // console.log(JSON.stringify(json, null, 2))
    const service = { json };
    Object.keys(json).map(r => {
        // console.log('found')
        // console.log(r)
        // let res = 
        service[r] = resource_1.Resource.bind({ json, name: r });
        // service[r].bind(this);
    });
    // console.log('service is')
    // console.log(service)
    // console.log('calling')
    // console.log(service.Bucket('Bucket'))
    return service;
}
exports.Service = Service;
