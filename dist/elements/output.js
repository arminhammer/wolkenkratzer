"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Output(params = {}) {
    if (!params.Name || !params.Value) {
        throw new SyntaxError(`New Output with ${JSON.stringify(params)} parameters is invalid. Name and Value are required.`);
    }
    const defaultP = { kind: 'output' };
    const mix = Object.assign({}, defaultP, params);
    return mix;
}
exports.Output = Output;
