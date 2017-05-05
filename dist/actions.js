"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function addParameter(t, e) {
    let result = Object.assign({}, t);
    result.Parameters[e.Name] = e;
    return result;
}
exports.addParameter = addParameter;
function addOutput(t, e) {
    let result = Object.assign({}, t);
    result.Outputs[e.Name] = e;
    return result;
}
exports.addOutput = addOutput;
function addResource(t, e) {
    let result = Object.assign({}, t);
    result.Resources[e.Name] = e;
    return result;
}
exports.addResource = addResource;
function addDescription(t, e) {
    let result = Object.assign({}, t);
    let desc = { Description: e.Content };
    result = Object.assign({}, t, desc);
    return result;
}
exports.addDescription = addDescription;
/*export function add(t: ITemplate, e: IElement): ITemplate {
    let result = { ...t };
    switch (e.kind) {
        case 'parameter':
            result.Parameters[e.Name] = e;
            break;
        case 'output':
            result.Outputs[e.Name] = e;
            break;
        case 'resource':
            result.Resources[e.Name] = e;
            break;
        case 'description':
            let desc = { Description: e.Content };
            result = { ...t, ...desc };
            break;
        default:
            console.log('No match was found');
    }
    return result;
}*/
function remove(t, e) {
    let result = Object.assign({}, t);
    let element;
    if (typeof e === 'string') {
        let parameter = result.Parameters[e];
        if (parameter) {
            element = parameter;
        }
        else {
            let output = result.Outputs[e];
            if (output) {
                element = output;
            }
            else {
                throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
            }
        }
    }
    else {
        element = e;
    }
    switch (element.kind) {
        case 'parameter':
            if (result.Parameters[element.Name]) {
                delete result.Parameters[element.Name];
            }
            break;
        case 'output':
            if (result.Outputs[element.Name]) {
                delete result.Outputs[element.Name];
            }
            break;
        case 'description':
            const { Description } = result, remaining = __rest(result, ["Description"]);
            result = remaining;
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    return result;
}
exports.remove = remove;
function wipe(t, category) {
    switch (category) {
        case 'Description':
            const { Description } = t, remaining = __rest(t, ["Description"]);
            return remaining;
        default:
            throw new SyntaxError(`${category} is not a valid part of a CloudFormation template.`);
    }
}
exports.wipe = wipe;
function _stripElement(t) {
    let { kind, Name } = t, rest = __rest(t, ["kind", "Name"]);
    return rest;
}
function _buildRef(t) {
    return JSON.stringify({ Ref: t.target.Name });
}
function _buildResource(t) {
    return _stripElement(t);
}
function _buildOutput(t) {
    let outputResult = Object.assign({}, t.Properties);
    if (typeof outputResult.Value !== 'string') {
        outputResult = { Value: JSON.parse(_buildRef(outputResult.Value)) };
    }
    return JSON.stringify(outputResult);
}
function build(t) {
    let result = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
    };
    if (Object.keys(t.Parameters).length > 0) {
        result.Parameters = {};
        Object.keys(t.Parameters).map(p => {
            result.Parameters[p] = t.Parameters[p].Properties;
        });
    }
    if (Object.keys(t.Outputs).length > 0) {
        result.Outputs = {};
        Object.keys(t.Outputs).map(o => {
            result.Outputs[o] = JSON.parse(_buildOutput(t.Outputs[o]));
        });
    }
    if (Object.keys(t.Resources).length > 0) {
        result.Resources = {};
        Object.keys(t.Resources).map(r => {
            result.Resources[r] = _buildResource(t.Resources[r]);
        });
    }
    if (t.Description) {
        result.Description = t.Description;
    }
    return result;
}
exports.build = build;
