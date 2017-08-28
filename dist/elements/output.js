"use strict";
// @flow
Object.defineProperty(exports, "__esModule", { value: true });
const intrinsic_1 = require("../intrinsic");
const lodash_es_1 = require("lodash-es");
/**
 * Creatr an Output object
 * @param {*} name
 * @param {*} properties
 */
function Output(name, properties) {
    if (!name || !properties || !properties.Value) {
        throw new SyntaxError(`New Output with ${JSON.stringify({
            name,
            properties
        })} parameters is invalid. Name and Value are required.`);
    }
    const newProps = lodash_es_1.cloneDeep(properties);
    // If Value is a Ref object, create a Ref object
    if (typeof newProps.Value === 'object' && !newProps.Value.kind) {
        if (newProps.Value.Ref) {
            newProps.Value = intrinsic_1.Ref(newProps.Value.Ref);
        }
        else if (newProps.Value['Fn::Join']) {
            newProps.Value = intrinsic_1.FnJoin(newProps.Value['Fn::Join'][0], newProps.Value['Fn::Join'][1]);
        }
    }
    // If Export Name is Intrinsic, create an Intrinsic object
    if (newProps.Export &&
        newProps.Export.Name &&
        typeof newProps.Export.Name === 'object' &&
        newProps.Export.Name['Fn::Sub'] &&
        !newProps.Export.Name.kind) {
        newProps.Export.Name = intrinsic_1.FnSub(newProps.Export.Name['Fn::Sub']);
    }
    return { kind: 'Output', Name: name, Properties: newProps };
}
exports.Output = Output;
