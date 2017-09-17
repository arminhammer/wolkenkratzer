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
    function ResourceMetadata(resource, content) {
        if (!resource || !content) {
            throw new SyntaxError(`New Metadata must have content, ${JSON.stringify(content)} is invalid.`);
        }
        return { kind: 'ResourceMetadata', Resource: resource, Content: content };
    }
    exports.ResourceMetadata = ResourceMetadata;
});
//# sourceMappingURL=metadata.js.map