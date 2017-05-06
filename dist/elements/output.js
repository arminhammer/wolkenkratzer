"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Output(name, properties = {}) {
    if (!name || !properties.Value) {
        throw new SyntaxError(`New Output with ${JSON.stringify({ name, properties })} parameters is invalid. Name and Value are required.`);
    }
    return { Name: name, Properties: properties };
}
exports.Output = Output;
