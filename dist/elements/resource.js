'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resource = Resource;
exports.CustomResource = CustomResource;
function Resource(name, properties) {
  if (!name) {
    throw new SyntaxError('New Resource is invalid. A Name is required.');
  }
  return {
    kind: 'Resource',
    Name: name,
    Type: this.json[this.name].Name,
    Properties: properties
  };
}

function CustomResource(name, properties) {
  if (!name) {
    throw new SyntaxError('New Resource is invalid. A Name is required.');
  }
  return {
    kind: 'Resource',
    Name: name,
    Type: 'Custom::' + name,
    Properties: properties
  };
}