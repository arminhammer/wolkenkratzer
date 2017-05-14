'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mapping = Mapping;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Mapping(name, subName, body) {
  if (!name || !subName || !body) {
    throw new SyntaxError('New Mapping with ' + JSON.stringify({
      name: name,
      subName: subName,
      body: body
    }) + ' parameters is invalid. name, subName, and body are required.');
  }
  return { kind: 'Mapping', Name: name, Content: _defineProperty({}, subName, body) };
}