'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Output = Output;

var _intrinsic = require('../intrinsic');

function Output(name, properties) {
  if (!name || !properties || !properties.Value) {
    throw new SyntaxError(`New Output with ${JSON.stringify({
      name,
      properties
    })} parameters is invalid. Name and Value are required.`);
  }
  return { kind: 'Output', Name: name, Properties: properties };
}