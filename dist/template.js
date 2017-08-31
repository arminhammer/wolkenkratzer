"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
var lodash_1 = require("lodash");
var condition_1 = require("./elements/condition");
var description_1 = require("./elements/description");
var mapping_1 = require("./elements/mapping");
var output_1 = require("./elements/output");
var parameter_1 = require("./elements/parameter");
var resource_1 = require("./elements/resource");
var intrinsic_1 = require("./intrinsic");
// import { IMetadata } from './elements/metadata';
var pseudo_1 = require("./pseudo");
var service_1 = require("./service");
/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
function Template() {
    return {
        AWSTemplateFormatVersion: '2010-09-09',
        Conditions: {},
        Mappings: {},
        Outputs: {},
        Parameters: {},
        Resources: {},
        /**
         * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
         * @example
         * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
         */
        add: function (e, options) {
            var _t = lodash_1.cloneDeep(this);
            switch (e.kind) {
                case 'CreationPolicy':
                    return _addCreationPolicy(_t, e);
                case 'ResourceMetadata':
                    return _addResourceMetadata(_t, e);
                case 'Condition':
                    return _addCondition(_t, e);
                case 'Mapping':
                    return _addMapping(_t, e);
                case 'Parameter':
                    return _addParameter(_t, e);
                case 'Output':
                    return _addOutput(_t, e);
                case 'Resource':
                    var newT_1 = _t;
                    var f_1 = lodash_1.cloneDeep(e);
                    if (options) {
                        var nameSplit = f_1.Type.split('::').splice(1);
                        var shortName_1 = nameSplit.join('');
                        if (options.Parameters) {
                            options.Parameters.map(function (p) {
                                var paramName = "" + f_1.Name + shortName_1 + "Param";
                                if (!f_1.Properties) {
                                    f_1.Properties = {};
                                }
                                f_1.Properties[p] = intrinsic_1.Ref(paramName);
                                newT_1 = _addParameter(newT_1, parameter_1.Parameter(paramName, {
                                    Type: 'String'
                                }));
                            });
                        }
                        newT_1 = _addResource(newT_1, f_1);
                        if (options.Output) {
                            newT_1 = _addOutput(newT_1, output_1.Output("" + f_1.Name + shortName_1 + "Output", {
                                Condition: f_1.Condition,
                                Export: {
                                    Name: intrinsic_1.FnSub("${" + pseudo_1.Pseudo.AWS_STACK_NAME + "}-" + nameSplit[0] + "-" + nameSplit[1] + "-" + f_1.Name)
                                },
                                Value: intrinsic_1.Ref(f_1.Name)
                            }));
                        }
                    }
                    else {
                        newT_1 = _addResource(_t, f_1);
                    }
                    return newT_1;
                case 'Description':
                    return _addDescription(_t, e);
                default:
                    throw new SyntaxError(JSON.stringify(e) + " is not a valid type, could not be added.");
            }
        },
        /**
         * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
         * @example
         * const t = Template();
         * JSON.stringify(t.build(), null, 2)
         */
        build: function () {
            var _this = this;
            var result = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (Object.keys(this.Conditions).length > 0) {
                result.Conditions = {};
                Object.keys(this.Conditions).map(function (c) {
                    result.Conditions[c] = _json(_this.Conditions[c]);
                });
            }
            if (Object.keys(this.Parameters).length > 0) {
                result.Parameters = {};
                Object.keys(this.Parameters).map(function (p) {
                    result.Parameters[p] = _json(_this.Parameters[p]);
                });
            }
            if (Object.keys(this.Mappings).length > 0) {
                result.Mappings = {};
                Object.keys(this.Mappings).map(function (m) {
                    result.Mappings[m] = _json(_this.Mappings[m]);
                });
            }
            if (Object.keys(this.Outputs).length > 0) {
                result.Outputs = {};
                Object.keys(this.Outputs).map(function (o) {
                    result.Outputs[o] = _json(_this.Outputs[o]);
                });
            }
            if (Object.keys(this.Resources).length > 0) {
                result.Resources = {};
                Object.keys(this.Resources).map(function (r) {
                    result.Resources[r] = _json(_this.Resources[r]);
                });
            }
            if (this.Description) {
                result.Description = this.Description;
            }
            return result;
        },
        /**
         * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
         * @example
         * const templateJson = require('template.json');
         * const t = Template().import(templateJson);
         */
        import: function (inputTemplate) {
            var _t = lodash_1.cloneDeep(this);
            return _calcFromExistingTemplate(_t, inputTemplate);
        },
        kind: 'Template',
        /**
         * Add elements to the Template in a functional way.
         */
        map: function (iterable, mapFn) {
            var result = lodash_1.cloneDeep(this);
            iterable.map(function (i) {
                result = result.add(mapFn(i));
            });
            return result;
        },
        /**
         * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
         */
        merge: function (t) {
            var _t = lodash_1.cloneDeep(this);
            var combined = {};
            [
                'Conditions',
                'Mapping',
                'Outputs',
                'Parameters',
                'Resources',
                'Description'
            ].map(function (block) {
                if (t[block]) {
                    combined[block] = __assign({}, _t[block], t[block]);
                }
            });
            return __assign({}, _t, combined);
        },
        /**
         * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
         * @example
         * let t = Template();
         * let p = Parameter('NewParam', { Type: 'String' });
         * t.add(p).remove(p);
         */
        remove: function (e) {
            var result = lodash_1.cloneDeep(this);
            var element;
            if (typeof e === 'string') {
                var parameter = result.Parameters[e];
                if (parameter) {
                    element = parameter;
                }
                else {
                    var output = result.Outputs[e];
                    if (output) {
                        element = output;
                    }
                    else {
                        var mapping = result.Mappings[e];
                        if (mapping) {
                            element = mapping;
                        }
                        else {
                            throw new SyntaxError("Could not find " + JSON.stringify(e));
                        }
                    }
                }
            }
            else {
                element = e;
            }
            switch (element.kind) {
                /*case 'Condition':
                            return _removeCondition(this, e);*/
                case 'Parameter':
                    return _removeParameter(this, element);
                case 'Output':
                    return _removeOutput(this, element);
                /*case 'Resource':
                            return _removeResource(this, e);*/
                case 'Mapping':
                    return _removeMapping(this, element);
                default:
                    throw new SyntaxError(JSON.stringify(e) + " is not a valid type, could not be added.");
            }
        },
        /**
         * Removes the Description from the Template.
         */
        removeDescription: function () {
            var newT = lodash_1.cloneDeep(this);
            delete newT.Description;
            return newT;
        }
    };
}
exports.Template = Template;
function _isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function _validateRef(t, ref) {
    if (ref.Ref) {
        if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
            throw new SyntaxError("Could not find " + JSON.stringify(ref));
        }
    }
    return;
}
function _validateFnGetAtt(t, att) {
    if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {
        throw new SyntaxError("Could not find " + JSON.stringify(att));
    }
    return;
}
function _strip(t) {
    var kind = t.kind, Name = t.Name, rest = __rest(t, ["kind", "Name"]);
    return rest;
}
function _stripKind(target) {
    var kind = target.kind, rest = __rest(target, ["kind"]);
    return rest;
}
function _cleanObject(object) {
    if (Array.isArray(object)) {
        for (var v = 0; v < object.length; v++) {
            object[v] = _cleanObject(object[v]);
        }
    }
    else {
        if (object.kind) {
            object = _json(object);
        }
        else {
            for (var o in object) {
                if (object[o] !== null && typeof object[o] === 'object') {
                    object[o] = _cleanObject(object[o]);
                }
            }
        }
    }
    return object;
}
function _buildResource(t) {
    var newT = lodash_1.cloneDeep(t);
    var Type = newT.Type, Properties = newT.Properties, CreationPolicy = newT.CreationPolicy, Metadata = newT.Metadata, condition = newT.Condition;
    var newProps = {};
    if (Properties) {
        Object.keys(Properties).map(function (p) {
            // Ignore empty arrays
            if (!(Array.isArray(Properties[p]) && Properties[p].length === 0)) {
                if (Properties[p].kind) {
                    newProps[p] = _json(Properties[p]);
                }
                else if (!_isEmptyObject(Properties[p])) {
                    newProps[p] = _cleanObject(Properties[p]);
                }
            }
        });
    }
    var result = { Type: Type, Properties: newProps };
    if (CreationPolicy) {
        result.CreationPolicy = _json(CreationPolicy);
    }
    if (Metadata) {
        result.Metadata = _json(Metadata);
    }
    if (condition) {
        result.Condition = condition;
    }
    return result;
}
function _buildCondition(t) {
    var condition = t.Condition;
    var result = _json(condition);
    Object.keys(result).map(function (k) {
        if (result[k][0].kind) {
            result[k][0] = _json(result[k][0]);
        }
    });
    return result;
}
function _buildCreationPolicy(t) {
    var Content = t.Content;
    return Content;
}
function _buildResourceMetadata(t) {
    var Content = t.Content;
    return Content;
}
function _buildFnJoin(t) {
    if (Array.isArray(t.Values)) {
        var jsonValues = t.Values.map(function (x) {
            if (typeof x === 'string') {
                return x;
            }
            else {
                return _json(x);
            }
        });
        return { 'Fn::Join': [t.Delimiter, jsonValues] };
    }
    else {
        return { 'Fn::Join': [t.Delimiter, _json(t.Values)] };
    }
}
function _buildFnFindInMap(t) {
    return t.FnFindInMap.map(function (x) {
        if (typeof x === 'string') {
            return x;
        }
        else {
            return _json(x);
        }
    });
}
function _buildFnAnd(t) {
    return t.FnAnd.map(function (x) {
        if (typeof x === 'string') {
            return x;
        }
        else {
            if (x.kind) {
                return _json(x);
            }
            return x;
        }
    });
}
function _buildFnEquals(t) {
    return t.FnEquals.map(function (x) {
        if (typeof x === 'string') {
            return x;
        }
        else {
            if (x.kind) {
                return _json(x);
            }
            return x;
        }
    });
}
function _buildMapping(t) {
    var result = t.Content;
    return result;
}
function _buildOutput(t) {
    var outputResult = lodash_1.cloneDeep(t.Properties);
    if (typeof outputResult.Value !== 'string') {
        var stripped = _json(outputResult.Value);
        outputResult = __assign({}, outputResult, { Value: stripped });
    }
    if (outputResult.Export &&
        outputResult.Export.Name &&
        typeof outputResult.Export.Name !== 'string') {
        var stripped = _json(outputResult.Export.Name);
        outputResult = __assign({}, outputResult, { Export: { Name: stripped } });
    }
    return outputResult;
}
function _json(t) {
    switch (t.kind) {
        case 'Ref':
            return { Ref: t.Ref };
        case 'FnGetAtt':
            return { 'Fn::GetAtt': t.FnGetAtt };
        case 'FnJoin':
            return _buildFnJoin(t);
        case 'FnAnd':
            return { 'Fn::And': _buildFnAnd(t) };
        case 'FnFindInMap':
            return { 'Fn::FindInMap': _buildFnFindInMap(t) };
        case 'FnEquals':
            return { 'Fn::Equals': _buildFnEquals(t) };
        case 'FnSub':
            return { 'Fn::Sub': t.FnSub };
        case 'CreationPolicy':
            return _buildCreationPolicy(t);
        case 'ResourceMetadata':
            return _buildResourceMetadata(t);
        case 'Condition':
            return _buildCondition(t);
        case 'Mapping':
            return _buildMapping(t);
        case 'Parameter':
            return _strip(t).Properties;
        case 'Output':
            return _buildOutput(t);
        case 'Resource':
            return _buildResource(t);
        default:
            throw new SyntaxError("Can't call _json on " + JSON.stringify(t));
    }
}
exports._json = _json;
function _addDescription(t, e) {
    var result = __assign({}, t);
    var desc = { Description: e.Content };
    result = __assign({}, t, desc);
    return result;
}
function _addCreationPolicy(t, e) {
    var result = lodash_1.cloneDeep(t);
    if (!result.Resources[e.Resource]) {
        throw new SyntaxError('Cannot add CreationPolicy to a Resource that does not exist in the template.');
    }
    var resource = __assign({}, result.Resources[e.Resource]);
    resource.CreationPolicy = e;
    result.Resources[e.Resource] = resource;
    return result;
}
function _addResourceMetadata(t, e) {
    var result = lodash_1.cloneDeep(t);
    if (!result.Resources[e.Resource]) {
        throw new SyntaxError('Cannot add Metadata to a Resource that does not exist in the template.');
    }
    var resource = __assign({}, result.Resources[e.Resource]);
    resource.Metadata = e;
    result.Resources[e.Resource] = resource;
    return result;
}
function _addCondition(t, e) {
    // TODO: Validate intrinsics
    var result = lodash_1.cloneDeep(t);
    result.Conditions[e.Name] = e;
    return result;
}
function _addOutput(t, e) {
    var e0 = lodash_1.cloneDeep(e);
    if (typeof e0.Properties.Value !== 'string') {
        if (e0.Properties.Value.Ref) {
            _validateRef(t, e0.Properties.Value);
        }
        else if (typeof e0.Properties.Value !== 'string' &&
            e0.Properties.Value['Fn::GetAtt']) {
            e0.Properties.Value = intrinsic_1.FnGetAtt(e0.Properties.Value['Fn::GetAtt'][0], e0.Properties.Value['Fn::GetAtt'][1]);
            _validateFnGetAtt(t, e0.Properties.Value);
        }
    }
    var result = lodash_1.cloneDeep(t);
    result.Outputs[e0.Name] = e0;
    return result;
}
function _addParameter(t, e) {
    var result = lodash_1.cloneDeep(t);
    result.Parameters[e.Name] = e;
    return result;
}
function _addMapping(t, e) {
    var result = __assign({}, t);
    if (result.Mappings[e.Name]) {
        var newMappings = lodash_1.cloneDeep(result.Mappings);
        newMappings[e.Name] = __assign({}, e, { Content: __assign({}, result.Mappings[e.Name].Content, e.Content) });
        result.Mappings = newMappings;
    }
    else {
        var newMappings = lodash_1.cloneDeep(result.Mappings);
        newMappings[e.Name] = e;
        result.Mappings = newMappings;
    }
    return result;
}
function _addResource(t, e) {
    var result = __assign({}, t);
    var newResources = lodash_1.cloneDeep(result.Resources);
    newResources[e.Name] = e;
    result.Resources = newResources;
    return result;
}
function _removeMapping(t, e) {
    var result = __assign({}, t);
    var mapping;
    if (typeof e === 'string') {
        if (result.Mappings[e]) {
            mapping = result.Mappings[e];
        }
        else {
            throw new SyntaxError("Could not find " + JSON.stringify(e));
        }
    }
    else {
        mapping = e;
    }
    if (result.Mappings[mapping.Name]) {
        result.Mappings = lodash_1.omit(result.Mappings, mapping.Name);
    }
    else {
        throw new SyntaxError("Could not find " + JSON.stringify(mapping));
    }
    return result;
}
function _removeOutput(t, e) {
    var result = __assign({}, t);
    var out;
    if (typeof e === 'string') {
        if (result.Outputs[e]) {
            out = result.Outputs[e];
        }
        else {
            throw new SyntaxError("Could not find " + JSON.stringify(e));
        }
    }
    else {
        out = e;
    }
    if (result.Outputs[out.Name]) {
        result.Outputs = lodash_1.omit(result.Outputs, out.Name);
    }
    else {
        throw new SyntaxError("Could not find " + JSON.stringify(out));
    }
    return result;
}
function _removeParameter(t, e) {
    var result = __assign({}, t);
    var param;
    if (typeof e === 'string') {
        if (result.Parameters[e]) {
            param = result.Parameters[e];
        }
        else {
            throw new SyntaxError("Could not find " + JSON.stringify(e));
        }
    }
    else {
        param = e;
    }
    if (result.Parameters[param.Name]) {
        result.Parameters = lodash_1.omit(result.Parameters, param.Name);
    }
    else {
        throw new SyntaxError("Could not find " + JSON.stringify(param));
    }
    return result;
}
function _calcFromExistingTemplate(t, inputTemplate) {
    if (inputTemplate.Description) {
        t = t.add(description_1.Description(inputTemplate.Description));
    }
    if (inputTemplate.Parameters) {
        Object.keys(inputTemplate.Parameters).map(function (p) {
            t = t.add(parameter_1.Parameter(p, inputTemplate.Parameters[p]));
        });
    }
    if (inputTemplate.Resources) {
        Object.keys(inputTemplate.Resources).map(function (r) {
            var split = inputTemplate.Resources[r].Type.split('::');
            var cat = split[1];
            var resType = split[2];
            if (split[0] === 'AWS') {
                var service = service_1.Service(cfn_doc_json_stubs_1.default[cat]);
                t = t.add(service[resType](r, inputTemplate.Resources[r].Properties));
            }
            else if (split[0] === 'Custom') {
                t = t.add(resource_1.CustomResource(r, inputTemplate.Resources[r].Properties));
            }
        });
    }
    if (inputTemplate.Outputs) {
        Object.keys(inputTemplate.Outputs).map(function (o) {
            t = t.add(output_1.Output(o, inputTemplate.Outputs[o]));
        });
    }
    if (inputTemplate.Mappings) {
        Object.keys(inputTemplate.Mappings).map(function (m) {
            Object.keys(inputTemplate.Mappings[m]).map(function (m0) {
                t = t.add(mapping_1.Mapping(m, m0, inputTemplate.Mappings[m][m0]));
            });
        });
    }
    if (inputTemplate.Conditions) {
        Object.keys(inputTemplate.Conditions).map(function (c) {
            t = t.add(condition_1.Condition(c, inputTemplate.Conditions[c]));
        });
    }
    return t;
}
//# sourceMappingURL=template.js.map