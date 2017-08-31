"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = require("./elements/resource");
/**
 * Return a Service object to create Resources and Attributes
 * @param {*} json
 */
function Service(json) {
    var service = { json: json };
    Object.keys(json.Resources).map(function (r) {
        service[r] = resource_1.Resource.bind({ json: json, name: r });
    });
    return service;
}
exports.Service = Service;
//# sourceMappingURL=service.js.map