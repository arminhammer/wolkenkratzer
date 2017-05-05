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
function add(t, e) {
    let result = Object.assign({}, t);
    switch (e.kind) {
        case 'parameter':
            result.Parameters[e.Name] = e;
            break;
        case 'output':
            result.Outputs.push(e);
            break;
        case 'resource':
            result.Resources.push(e);
            break;
        case 'description':
            let desc = { Description: e.Content };
            result = Object.assign({}, t, desc);
            break;
        default:
            console.log('No match was found');
    }
    return result;
}
exports.add = add;
function remove(t, e) {
    let result = Object.assign({}, t);
    let element;
    if (typeof e === 'string') {
        let parameter = result.Parameters[e];
        if (parameter) {
            element = parameter;
        }
        else {
            let output = result.Outputs.find(p => { return p.Name === e; });
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
            let parameter = result.Parameters[element.Name]; // .indexOf(element);
            if (parameter) {
                delete result.Parameters[element.Name]; // .splice(parameter, 1);
            }
            break;
        case 'output':
            let output = result.Outputs.indexOf(element);
            if (output !== -1) {
                result.Outputs.splice(output, 1);
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
function stripElement(t) {
    let { kind, Name } = t, rest = __rest(t, ["kind", "Name"]);
    return rest;
}
function json(t) {
    switch (t.kind) {
        case 'ref':
            return JSON.stringify({ Ref: t.target.Name });
        case 'parameter':
            return JSON.stringify(stripElement(t));
        case 'output':
            let outputResult = Object.assign({}, t.Properties);
            if (typeof outputResult.Value !== 'string') {
                outputResult = { Value: JSON.parse(json(outputResult.Value)) };
            }
            return JSON.stringify(outputResult);
        case 'resource':
            return JSON.stringify(stripElement(t));
        case 'template':
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
            if (t.Outputs.length > 0) {
                result.Outputs = {};
                t.Outputs.map(o => {
                    result.Outputs[o.Name] = JSON.parse(json(o));
                });
            }
            if (t.Resources.length > 0) {
                result.Resources = {};
                t.Resources.map(r => {
                    result.Resources[r.Name] = JSON.parse(json(r));
                });
            }
            if (t.Description) {
                result.Description = t.Description;
            }
            return JSON.stringify(result, null, 2);
        default:
            console.log('You cant do that!');
            return 'Invalid!';
    }
}
exports.json = json;
