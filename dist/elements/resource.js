"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a Resource object
 * @param {*} name
 * @param {*} properties
 * @param {*} options
 */
function Resource(name, properties, options) {
    if (!name) {
        throw new SyntaxError("New Resource is invalid. A Name is required.");
    }
    if (properties) {
        _validateProperties(properties, this.name, this.json);
    }
    var result = {
        Name: name,
        Properties: properties,
        Type: this.json.Resources[this.name].Name,
        kind: 'Resource'
    };
    if (options && options.Condition) {
        result.Condition = options.Condition;
    }
    return result;
}
exports.Resource = Resource;
function CustomResource(name, properties) {
    if (!name) {
        throw new SyntaxError("New Resource is invalid. A Name is required.");
    }
    return {
        Name: name,
        Properties: properties,
        Type: "Custom::" + name,
        kind: 'Resource'
    };
}
exports.CustomResource = CustomResource;
function _validateProperties(properties, rType, model) {
    // Check if keys other than the defined ones are present
    Object.keys(properties).map(function (p) {
        if (!model.Resources[rType].Properties[p]) {
            throw new SyntaxError(p + " is not a valid attribute of " + rType);
        }
    });
    // Check if all of the required keys are present
    Object.keys(model.Resources[rType].Properties).map(function (p) {
        if (model.Resources[rType].Properties[p].Required === 'Yes') {
            if (!properties[p]) {
                throw new SyntaxError(p + " is required but is not present in " + rType);
            }
        }
        if (model.Resources[rType].Properties[p].Array) {
            if (properties[p] && !Array.isArray(properties[p])) {
                if (!properties[p].kind &&
                    properties[p].kind !== 'FnGetAtt' &&
                    !properties[p]['Fn::GetAtt']) {
                    throw new SyntaxError(p + " must be an array in " + rType);
                }
            }
        }
        else {
            if (properties[p] && Array.isArray(properties[p])) {
                throw new SyntaxError(p + " cannot be an array in " + rType);
            }
        }
    });
}
//# sourceMappingURL=resource.js.map