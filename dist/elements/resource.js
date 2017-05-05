"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Resource(name, properties) {
    if (!name) {
        throw new SyntaxError(`New Resource is invalid. A Name is required.`);
    }
    return { kind: 'resource', Name: name, Type: this.json[this.name].Name, Properties: properties };
}
exports.Resource = Resource;
