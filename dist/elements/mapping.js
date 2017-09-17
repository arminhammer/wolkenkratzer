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
    /**
     * Create a Mapping object
     * @param {*} name
     * @param {*} subName
     * @param {*} body
     */
    function Mapping(name, subName, body) {
        if (!name || !subName || !body) {
            throw new SyntaxError(`New Mapping with ${JSON.stringify({
                body,
                name,
                subName
            })} parameters is invalid. name, subName, and body are required.`);
        }
        return { kind: 'Mapping', Name: name, Content: { [subName]: body } };
    }
    exports.Mapping = Mapping;
});
//# sourceMappingURL=mapping.js.map