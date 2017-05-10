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
function Template() {
    return {
        AWSTemplateFormatVersion: '2010-09-09',
        Conditions: {},
        Outputs: {},
        Parameters: {},
        Resources: {},
        addCondition: function (e) {
            // TODO: Validate intrinsics
            let result = Object.assign({}, this);
            result.Conditions[e.Name] = e;
            return result;
        },
        addDescription: function (e) {
            let result = Object.assign({}, this);
            let desc = { Description: e.Content };
            result = Object.assign({}, this, desc);
            return result;
        },
        addOutput: function (e) {
            if (typeof e.Properties.Value !== 'string' && e.Properties.Value.Ref) {
                _validateRef(this, e.Properties.Value);
            }
            /*if (typeof e.Properties.Value !== 'string' && e.Properties.Value['Fn::GetAtt']) {
                _validateFnGetAtt(this, e.Properties.Value);
            }*/
            let result = Object.assign({}, this);
            result.Outputs[e.Name] = e;
            return result;
        },
        addParameter: function (e) {
            let result = Object.assign({}, this);
            result.Parameters[e.Name] = e;
            return result;
        },
        addResource: function (e) {
            let result = Object.assign({}, this);
            result.Resources[e.Name] = e;
            return result;
        },
        build: function () {
            let result = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (Object.keys(this.Conditions).length > 0) {
                result.Conditions = {};
                Object.keys(this.Conditions).map(c => {
                    result.Conditions[c] = _stripName(this.Conditions[c]).Condition;
                });
            }
            if (Object.keys(this.Parameters).length > 0) {
                result.Parameters = {};
                Object.keys(this.Parameters).map(p => {
                    result.Parameters[p] = this.Parameters[p].Properties;
                });
            }
            if (Object.keys(this.Outputs).length > 0) {
                result.Outputs = {};
                Object.keys(this.Outputs).map(o => {
                    result.Outputs[o] = JSON.parse(_buildOutput(this.Outputs[o]));
                });
            }
            if (Object.keys(this.Resources).length > 0) {
                result.Resources = {};
                Object.keys(this.Resources).map(r => {
                    result.Resources[r] = _stripName(this.Resources[r]);
                });
            }
            if (this.Description) {
                result.Description = this.Description;
            }
            return result;
        },
        removeDescription: function () {
            const _a = this, { Description } = _a, remaining = __rest(_a, ["Description"]);
            return remaining;
        },
        removeOutput: function (e) {
            let result = Object.assign({}, this);
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
        },
        removeParameter: function (e) {
            let result = Object.assign({}, this);
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
    };
}
exports.Template = Template;
function _validateRef(t, ref) {
    if (ref.Ref) {
        if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
            throw new SyntaxError(`Could not find ${ref}`);
        }
    }
    return;
}
function _validateFnGetAtt(t, getatt) {
    if (!(t.Resources[getatt['Fn::GetAtt'][0]])) {
        throw new SyntaxError(`Could not find ${getatt}`);
    }
    return;
}
function _stripName(t) {
    let { Name } = t, rest = __rest(t, ["Name"]);
    return rest;
}
function _buildOutput(t) {
    let outputResult = Object.assign({}, t.Properties);
    if (typeof outputResult.Value !== 'string') {
        outputResult = Object.assign({}, outputResult, { Value: outputResult.Value });
    }
    return JSON.stringify(outputResult);
}
