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
    function DeletionPolicy(resource, content) {
        if (!resource || !content) {
            throw new SyntaxError(`New DeletionPolicy must have content, ${JSON.stringify(content)} is invalid.`);
        }
        if (['Delete', 'Retain', 'Snapshot'].indexOf(content) === -1) {
            throw new SyntaxError(`New DeletionPolicy content must be Delete, Retain, or Snapshot`);
        }
        return { kind: 'DeletionPolicy', Resource: resource, Content: content };
    }
    exports.DeletionPolicy = DeletionPolicy;
});
//# sourceMappingURL=deletionpolicy.js.map