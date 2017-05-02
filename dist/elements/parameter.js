"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Parameter(params = {}) {
    const defaultP = { kind: 'parameter', Name: Date.now().toLocaleString(), Type: 'String' };
    const mix = Object.assign({}, defaultP, params);
    return mix;
}
exports.Parameter = Parameter;
