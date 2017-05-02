"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Parameter(params = {}) {
    if (!params.Name || !params.Type) {
        throw new SyntaxError(`New Parameter with ${JSON.stringify(params)} parameters is invalid. Name and Type are required.`);
    }
    const defaultP = { kind: 'parameter' };
    const mix = Object.assign({}, defaultP, params);
    return mix;
}
exports.Parameter = Parameter;
