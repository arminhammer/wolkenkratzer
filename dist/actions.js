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
            result.Parameters.push(e);
            break;
        case 'output':
            result.Outputs.push(e);
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
        let parameter = result.Parameters.find(p => { return p.Name === e; });
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
            let parameter = result.Parameters.indexOf(element);
            if (parameter !== -1) {
                result.Parameters.splice(parameter, 1);
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
    return JSON.stringify(rest);
}
function json(t) {
    switch (t.kind) {
        case 'parameter':
            return stripElement(t);
        case 'output':
            return stripElement(t);
        case 'template':
            let result = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (t.Parameters.length > 0) {
                result.Parameters = {};
                t.Parameters.map(p => {
                    result.Parameters[p.Name] = JSON.parse(json(p));
                });
            }
            if (t.Outputs.length > 0) {
                result.Outputs = {};
                t.Outputs.map(p => {
                    result.Outputs[p.Name] = JSON.parse(json(p));
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
