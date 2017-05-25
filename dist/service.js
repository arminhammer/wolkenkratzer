'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = Service;

var _resource = require('./elements/resource');

function Service(name) {
  var json = require('../stubs/json/' + name + '.json');
  var service = { json: json };
  /*if (name === 'S3') {
    console.log('service');
    console.log(service);
  }*/
  Object.keys(json.Resources).map(function (r) {
    service[r] = _resource.Resource.bind({ json: json, name: r });
  });
  /*if (name === 'S3') {
    console.log('service');
    console.log(service);
  }*/
  return service;
}