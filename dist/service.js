'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = Service;

var _resource = require('./elements/resource');

function Service(name) {
  var json = require('../stubs/json/resources/' + name + '.json');
  var service = { json: json };
  Object.keys(json).map(function (r) {
    service[r] = _resource.Resource.bind({ json: json, name: r });
  });
  return service;
}