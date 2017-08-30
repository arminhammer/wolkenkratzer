"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a Mapping object
 * @param {*} name
 * @param {*} subName
 * @param {*} body
 */
function Mapping(name, subName, body) {
    if (!name || !subName || !body) {
        throw new SyntaxError(`New Mapping with ${JSON.stringify({
            name,
            subName,
            body
        })} parameters is invalid. name, subName, and body are required.`);
    }
    return { kind: 'Mapping', Name: name, Content: { [subName]: body } };
}
exports.Mapping = Mapping;
