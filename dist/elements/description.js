"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Description(params = {}) {
    if (!params.Content) {
        throw new SyntaxError(`New Description must have a Content.`);
    }
    const defaultP = { kind: 'description' };
    const mix = Object.assign({}, defaultP, params);
    return mix;
}
exports.Description = Description;
