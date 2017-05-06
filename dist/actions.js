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
function removeParameter(t, e) {
    let result = Object.assign({}, t);
    let param;
    if (typeof e === 'string') {
        if (result.Parameters[e]) {
            param = result.Parameters[e];
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
        }
    }
    else {
        param = e;
    }
    if (result.Parameters[param.Name]) {
        delete result.Parameters[param.Name];
    }
    else {
        throw new SyntaxError(`Could not find ${JSON.stringify(param)}`);
    }
    return result;
}
exports.removeParameter = removeParameter;
function removeOutput(t, e) {
    let result = Object.assign({}, t);
    let out;
    if (typeof e === 'string') {
        if (result.Outputs[e]) {
            out = result.Outputs[e];
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
        }
    }
    else {
        out = e;
    }
    if (result.Outputs[out.Name]) {
        delete result.Outputs[out.Name];
    }
    else {
        throw new SyntaxError(`Could not find ${JSON.stringify(out)}`);
    }
    return result;
}
exports.removeOutput = removeOutput;
function removeDescription(t) {
    const { Description } = t, remaining = __rest(t, ["Description"]);
    return remaining;
}
exports.removeDescription = removeDescription;
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
