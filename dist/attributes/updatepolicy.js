(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function UpdatePolicy(resource, content) {
        if (!resource || !content) {
            throw new SyntaxError(`New UpdatePolicy must have content, ${JSON.stringify(content)} is invalid.`);
        }
        return { kind: 'UpdatePolicy', Resource: resource, Content: content };
    }
    exports.UpdatePolicy = UpdatePolicy;
});
//# sourceMappingURL=updatepolicy.js.map