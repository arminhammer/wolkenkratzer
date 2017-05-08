"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./elements/resource");
function Service(name) {
    const json = require(`../stubs/json/resources/${name}.json`);
    const service = { json };
    Object.keys(json).map(r => {
        service[r] = resource_1.Resource.bind({ json, name: r });
    });
    return service;
}
exports.Service = Service;
