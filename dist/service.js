(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./elements/resource"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const resource_1 = require("./elements/resource");
    /**
     * Return a Service object to create Resources and Attributes
     * @param {*} json
     */
    function Service(json) {
        const service = { json };
        Object.keys(json.Resources).map(r => {
            service[r] = resource_1.Resource.bind({ json, name: r });
        });
        return service;
    }
    exports.Service = Service;
});
//# sourceMappingURL=service.js.map