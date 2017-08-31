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
        throw new SyntaxError("New Mapping with " + JSON.stringify({
            body: body,
            name: name,
            subName: subName
        }) + " parameters is invalid. name, subName, and body are required.");
    }
    return { kind: 'Mapping', Name: name, Content: (_a = {}, _a[subName] = body, _a) };
    var _a;
}
exports.Mapping = Mapping;
//# sourceMappingURL=mapping.js.map