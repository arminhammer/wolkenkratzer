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
    function DependsOn(resource, content) {
        if (!resource || !content) {
            throw new SyntaxError(`New DependsOn must have content, ${JSON.stringify(content)} is invalid.`);
        }
        return { kind: 'DependsOn', Resource: resource, Content: content };
    }
    exports.DependsOn = DependsOn;
});
//# sourceMappingURL=dependson.js.map