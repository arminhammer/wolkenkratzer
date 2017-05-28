'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = Service;

var _resource = require('./elements/resource');

function Service(name) {
  const json = require(`../stubs/json/${name}.json`);
  const service = { json };
  Object.keys(json.Resources).map(r => {
    service[r] = _resource.Resource.bind({ json, name: r });
  });
  return service;
}