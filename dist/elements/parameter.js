'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parameter = Parameter;
function Parameter(name, properties) {
  if (!name || !properties || !properties.Type) {
    throw new SyntaxError(`New Parameter with ${JSON.stringify({
      name,
      properties
    })} parameters is invalid. Name and Type are required.`);
  }

  return { kind: 'Parameter', Name: name, Properties: properties };
}