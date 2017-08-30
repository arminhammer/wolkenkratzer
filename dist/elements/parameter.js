"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a Parameter object
 * @param {*} name
 * @param {*} properties
 */
function Parameter(name, properties) {
    if (!name || !properties || !properties.Type) {
        throw new SyntaxError(`New Parameter with ${JSON.stringify({
            name,
            properties
        })} parameters is invalid. Name and Type are required.`);
    }
    return { kind: 'Parameter', Name: name, Properties: properties };
}
exports.Parameter = Parameter;
//# sourceMappingURL=parameter.js.map