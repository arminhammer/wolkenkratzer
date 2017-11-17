(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "cfn-doc-json-stubs", "cloudformation-schema-js-yaml", "js-yaml", "lodash", "./attributes/creationpolicy", "./attributes/deletionpolicy", "./attributes/dependson", "./attributes/metadata", "./attributes/updatepolicy", "./elements/condition", "./elements/description", "./elements/mapping", "./elements/output", "./elements/parameter", "./elements/resource", "./intrinsic", "./pseudo", "./service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
    const cloudformation_schema_js_yaml_1 = require("cloudformation-schema-js-yaml");
    const js_yaml_1 = require("js-yaml");
    const lodash_1 = require("lodash");
    const creationpolicy_1 = require("./attributes/creationpolicy");
    const deletionpolicy_1 = require("./attributes/deletionpolicy");
    const dependson_1 = require("./attributes/dependson");
    const metadata_1 = require("./attributes/metadata");
    const updatepolicy_1 = require("./attributes/updatepolicy");
    const condition_1 = require("./elements/condition");
    const description_1 = require("./elements/description");
    const mapping_1 = require("./elements/mapping");
    const output_1 = require("./elements/output");
    const parameter_1 = require("./elements/parameter");
    const resource_1 = require("./elements/resource");
    const intrinsic_1 = require("./intrinsic");
    // import { IMetadata } from './elements/metadata';
    const pseudo_1 = require("./pseudo");
    const service_1 = require("./service");
    /** @module Template */
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
                const _t = lodash_1.cloneDeep(this);
                switch (e.kind) {
                    case 'CreationPolicy':
                        return _addCreationPolicy(_t, e);
                    case 'DeletionPolicy':
                        return _addDeletionPolicy(_t, e);
                    case 'DependsOn':
                        return _addDependsOn(_t, e);
                    case 'ResourceMetadata':
                        return _addResourceMetadata(_t, e);
                    case 'UpdatePolicy':
                        return _addUpdatePolicy(_t, e);
                    case 'Condition':
                        return _addCondition(_t, e);
                    case 'Mapping':
                        return _addMapping(_t, e);
                    case 'Parameter':
                        return _addParameter(_t, e);
                    case 'Output':
                        return _addOutput(_t, e);
                    case 'Resource':
                        let newT = _t;
                        const f = lodash_1.cloneDeep(e);
                        if (options) {
                            const nameSplit = f.Type.split('::').splice(1);
                            const shortName = nameSplit.join('');
                            if (options.Parameters) {
                                options.Parameters.map(p => {
                                    const paramName = `${f.Name}${shortName}Param`;
                                    if (!f.Properties) {
                                        f.Properties = {};
                                    }
                                    f.Properties[p] = intrinsic_1.Ref(paramName);
                                    newT = _addParameter(newT, parameter_1.Parameter(paramName, {
                                        Type: 'String'
                                    }));
                                });
                            }
                            newT = _addResource(newT, f);
                            if (options.Output) {
                                newT = _addOutput(newT, output_1.Output(`${f.Name}${shortName}Output`, {
                                    Condition: f.Condition,
                                    Export: {
                                        Name: intrinsic_1.FnSub(`\$\{${pseudo_1.Pseudo.AWS_STACK_NAME}\}-${nameSplit[0]}-${nameSplit[1]}-${f.Name}`)
                                    },
                                    Value: intrinsic_1.Ref(f.Name)
                                }));
                            }
                        }
                        else {
                            newT = _addResource(_t, f);
                        }
                        return newT;
                    case 'Description':
                        return _addDescription(_t, e);
                    default:
                        throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
                }
            },
            /**
             * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
             * @example
             * const t = Template();
             * JSON.stringify(t.build(), null, 2)
             */
            build: function () {
                const result = {
                    AWSTemplateFormatVersion: '2010-09-09',
                    Resources: {}
                };
                const skel = {
                    Conditions: this.Conditions,
                    Mappings: this.Mappings,
                    Outputs: this.Outputs,
                    Parameters: this.Parameters,
                    Resources: this.Resources
                };
                Object.keys(skel).forEach(element => {
                    if (Object.keys(skel[element]).length > 0) {
                        result[element] = {};
                        Object.keys(skel[element]).forEach(item => {
                            result[element][item] = _json(skel[element][item]);
                        });
                    }
                });
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
                const _t = lodash_1.cloneDeep(this);
                return _calcFromExistingTemplate(_t, inputTemplate);
            },
            kind: 'Template',
            /**
             * Add elements to the Template in a functional way.
             */
            map: function (iterable, mapFn) {
                let result = lodash_1.cloneDeep(this);
                iterable.map(i => {
                    result = result.add(mapFn(i));
                });
                return result;
            },
            /**
             * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
             */
            merge: function (t) {
                const _t = lodash_1.cloneDeep(this);
                const combined = {};
                [
                    'Conditions',
                    'Mapping',
                    'Outputs',
                    'Parameters',
                    'Resources',
                    'Description'
                ].forEach(block => {
                    if (t[block]) {
                        combined[block] = Object.assign({}, _t[block], t[block]);
                    }
                });
                return Object.assign({}, _t, combined);
            },
            /**
             * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
             * @example
             * let t = Template();
             * let p = Parameter('NewParam', { Type: 'String' });
             * t.add(p).remove(p);
             */
            remove: function (e) {
                const result = lodash_1.cloneDeep(this);
                let element;
                if (typeof e === 'string') {
                    const parameter = result.Parameters[e];
                    if (parameter) {
                        element = parameter;
                    }
                    else {
                        const output = result.Outputs[e];
                        if (output) {
                            element = output;
                        }
                        else {
                            const mapping = result.Mappings[e];
                            if (mapping) {
                                element = mapping;
                            }
                            else {
                                throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
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
                        throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
                }
            },
            /**
             * Removes the Description from the Template.
             */
            removeDescription: function () {
                const newT = lodash_1.cloneDeep(this);
                delete newT.Description;
                return newT;
            },
            yaml: function () {
                const cleanedTemplate = this.build();
                // const templateString = JSON.stringify(cleanedTemplate, null, 2);
                const templateString = js_yaml_1.safeDump(cleanedTemplate, {
                    flowLevel: 5,
                    schema: cloudformation_schema_js_yaml_1.default
                })
                    .replace(/'Fn::Equals':/g, '!Equals')
                    .replace(/'Fn::And':/g, '!And')
                    .replace(/'Fn::GetAZs':/g, '!GetAZs')
                    .replace(/\{Ref: ([^}]+)\}/g, (match, p1) => {
                    return `!Ref ${p1}`;
                })
                    .replace(/Ref: (\w+)/g, (match, p1) => {
                    return `!Ref ${p1}`;
                })
                    .replace(/'Fn::ImportValue':/g, '!ImportValue')
                    .replace(/'Fn::Or':/g, '!Or')
                    .replace(/'Fn::Not':/g, '!Not')
                    .replace(/'Fn::If':/g, '!If')
                    .replace(/\{'Fn::GetAtt': \[(\w+), ([\w|\.]+)\]\}/g, (match, p1, p2) => {
                    return `!GetAtt ${p1}.${p2}`;
                })
                    .replace(/\{'Fn::FindInMap': \[([\w\d!]+), ([\w\d! ]+), ([\w\d!]+)\]\}/g, (match, p1, p2, p3) => {
                    return `!FindInMap [ ${p1}, ${p2}, ${p3} ]`;
                });
                /*
                TODO: add support for short versions of the rest
                  .replace(/'Fn::Join':/g, '!Join');
                  'Fn::FindInMap'
                  "Fn::Select"
                  "Fn::Split"
                  "Fn::Sub"*/
                return templateString;
            }
        };
    }
    exports.Template = Template;
    /**
     * @hidden
     * @param obj
     */
    function _isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    /**
     * @hidden
     * @param t
     * @param ref
     */
    function _validateRef(t, ref) {
        if (ref.Ref) {
            if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
                throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);
            }
        }
        return;
    }
    /**
     * @hidden
     * @param t
     * @param att
     */
    function _validateFnGetAtt(t, att) {
        if (att.FnGetAtt && !t.Resources[att.FnGetAtt[0]]) {
            throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);
        }
        return;
    }
    /**
     * @hidden
     * @param object
     */
    function _cleanObject(object) {
        if (Array.isArray(object)) {
            for (let v = 0; v < object.length; v++) {
                object[v] = _cleanObject(object[v]);
            }
        }
        else {
            if (object.kind) {
                object = _json(object);
            }
            else {
                for (const o in object) {
                    if (object[o] !== null && typeof object[o] === 'object') {
                        object[o] = _cleanObject(object[o]);
                    }
                }
            }
        }
        return object;
    }
    /**
     * @hidden
     * @param t
     */
    function _buildResource(t) {
        const newT = lodash_1.cloneDeep(t);
        const { Type, Properties, CreationPolicy, DeletionPolicy, DependsOn, Metadata, Condition: condition, UpdatePolicy } = newT;
        const newProps = {};
        const result = { Type };
        if (Properties) {
            Object.keys(Properties).forEach(p => {
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
            result.Properties = newProps;
        }
        if (CreationPolicy) {
            result.CreationPolicy = _json(CreationPolicy);
        }
        if (DeletionPolicy) {
            result.DeletionPolicy = _json(DeletionPolicy);
        }
        if (DependsOn) {
            result.DependsOn = _json(DependsOn);
        }
        if (Metadata) {
            result.Metadata = _json(Metadata);
        }
        if (UpdatePolicy) {
            result.UpdatePolicy = _json(UpdatePolicy);
        }
        if (condition) {
            result.Condition = condition;
        }
        return result;
    }
    /**
     * @hidden
     * @param t
     */
    function _buildCondition(t) {
        const { Condition: condition } = t;
        const result = _json(condition);
        Object.keys(result).forEach(k => {
            if (result[k][0].kind) {
                result[k][0] = _json(result[k][0]);
            }
        });
        return result;
    }
    /**
     * @hidden
     * @param t
     */
    function _buildAttribute(t) {
        const { Content } = t;
        return Content;
    }
    /**
     * @hidden
     * @param t
     */
    function _buildFnJoin(t) {
        if (Array.isArray(t.Values)) {
            const jsonValues = t.Values.map(x => {
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
    /**
     * @hidden
     */
    function _buildFnFindInMap(t) {
        return t.FnFindInMap.map(x => {
            if (typeof x === 'string') {
                return x;
            }
            else {
                return _json(x);
            }
        });
    }
    /**
     * @hidden
     */
    function _buildGetAZs(t) {
        if (typeof t.FnGetAZs === 'string') {
            return t.FnGetAZs;
        }
        else {
            return _json(t.FnGetAZs);
        }
    }
    /**
     * @hidden
     * @param t
     */
    function _buildFnSplit(t) {
        if (typeof t.value === 'string') {
            return [t.delimiter, t.value];
        }
        else {
            return [t.delimiter, _json(t.value)];
        }
    }
    /**
     * @hidden
     */
    function _buildFnOr(t) {
        const jsonValues = t.FnOr.map(x => {
            if (typeof x === 'string') {
                return x;
            }
            else {
                return _json(x);
            }
        });
        return jsonValues;
    }
    /**
     * @hidden
     * @param t
     */
    function _buildFnImportValue(t) {
        if (typeof t.FnImportValue === 'string') {
            return t.FnImportValue;
        }
        else {
            return _json(t.FnImportValue);
        }
    }
    /**
     * @hidden
     * @param t
     */
    function _buildFnBase64(t) {
        if (typeof t.FnBase64 === 'string') {
            return t.FnBase64;
        }
        else {
            return _json(t.FnBase64);
        }
    }
    /**
     * @hidden
     */
    function _buildFnAnd(t) {
        return t.FnAnd.map(x => {
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
    /**
     * @hidden
     */
    function _buildFnNot(t) {
        return t.FnNot.map(x => {
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
    /**
     * @hidden
     */
    function _buildFnIf(t) {
        return t.FnIf.map(x => {
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
    /**
     * @hidden
     */
    function _buildFnEquals(t) {
        return t.FnEquals.map(x => {
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
    /**
     * @hidden
     */
    function _buildFnSelect(t) {
        if (Array.isArray(t.FnSelect)) {
            const values = t.FnSelect.map(x => {
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
            return [t.index, values];
        }
        else {
            return [t.index, _json(t.FnSelect)];
        }
    }
    /**
     * @hidden
     */
    function _buildMapping(t) {
        const result = t.Content;
        return result;
    }
    /**
     * @hidden
     */
    function _buildOutput(t) {
        let outputResult = lodash_1.cloneDeep(t.Properties);
        if (typeof outputResult.Value !== 'string') {
            const stripped = _json(outputResult.Value);
            outputResult = Object.assign({}, outputResult, { Value: stripped });
        }
        if (outputResult.Export &&
            outputResult.Export.Name &&
            typeof outputResult.Export.Name !== 'string') {
            const stripped = _json(outputResult.Export.Name);
            outputResult = Object.assign({}, outputResult, { Export: { Name: stripped } });
        }
        return outputResult;
    }
    /**
     * @hidden
     * @param t
     */
    function _json(t) {
        switch (t.kind) {
            case 'Ref':
                return { Ref: t.Ref };
            case 'FnBase64':
                return { 'Fn::Base64': _buildFnBase64(t) };
            case 'FnGetAtt':
                return { 'Fn::GetAtt': t.FnGetAtt };
            case 'FnGetAZs':
                return { 'Fn::GetAZs': _buildGetAZs(t) };
            case 'FnJoin':
                return _buildFnJoin(t);
            case 'FnAnd':
                return { 'Fn::And': _buildFnAnd(t) };
            case 'FnNot':
                return { 'Fn::Not': _buildFnNot(t) };
            case 'FnIf':
                return { 'Fn::If': _buildFnIf(t) };
            case 'FnFindInMap':
                return { 'Fn::FindInMap': _buildFnFindInMap(t) };
            case 'FnEquals':
                return { 'Fn::Equals': _buildFnEquals(t) };
            case 'FnImportValue':
                return { 'Fn::ImportValue': _buildFnImportValue(t) };
            case 'FnOr':
                return { 'Fn::Or': _buildFnOr(t) };
            case 'FnSelect':
                return { 'Fn::Select': _buildFnSelect(t) };
            case 'FnSplit':
                return { 'Fn::Split': _buildFnSplit(t) };
            case 'FnSub':
                return { 'Fn::Sub': t.FnSub };
            case 'CreationPolicy':
                return _buildAttribute(t);
            case 'DeletionPolicy':
                return _buildAttribute(t);
            case 'DependsOn':
                return _buildAttribute(t);
            case 'ResourceMetadata':
                return _buildAttribute(t);
            case 'UpdatePolicy':
                return _buildAttribute(t);
            case 'Condition':
                return _buildCondition(t);
            case 'Mapping':
                return _buildMapping(t);
            case 'Parameter':
                return t.Properties;
            case 'Output':
                return _buildOutput(t);
            case 'Resource':
                return _buildResource(t);
            default:
                throw new SyntaxError(`Can't call _json on ${JSON.stringify(t)}`);
        }
    }
    exports._json = _json;
    /**
     * @hidden
     */
    function _addDescription(t, e) {
        const desc = { Description: e.Content };
        const result = Object.assign({}, t, desc);
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addCreationPolicy(t, e) {
        const result = lodash_1.cloneDeep(t);
        if (!result.Resources[e.Resource]) {
            throw new SyntaxError('Cannot add CreationPolicy to a Resource that does not exist in the template.');
        }
        const resource = Object.assign({}, result.Resources[e.Resource]);
        resource.CreationPolicy = e;
        result.Resources[e.Resource] = resource;
        return result;
    }
    /**
     * @hidden
     */
    function _addDeletionPolicy(t, e) {
        const result = lodash_1.cloneDeep(t);
        if (!result.Resources[e.Resource]) {
            throw new SyntaxError('Cannot add DeletionPolicy to a Resource that does not exist in the template.');
        }
        const resource = Object.assign({}, result.Resources[e.Resource]);
        resource.DeletionPolicy = e;
        result.Resources[e.Resource] = resource;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addUpdatePolicy(t, e) {
        const result = lodash_1.cloneDeep(t);
        if (!result.Resources[e.Resource]) {
            throw new SyntaxError('Cannot add DeletionPolicy to a Resource that does not exist in the template.');
        }
        const resource = Object.assign({}, result.Resources[e.Resource]);
        resource.UpdatePolicy = e;
        result.Resources[e.Resource] = resource;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addDependsOn(t, e) {
        const result = lodash_1.cloneDeep(t);
        if (!result.Resources[e.Resource]) {
            throw new SyntaxError('Cannot add DeletionPolicy to a Resource that does not exist in the template.');
        }
        const resource = Object.assign({}, result.Resources[e.Resource]);
        resource.DependsOn = e;
        result.Resources[e.Resource] = resource;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addResourceMetadata(t, e) {
        const result = lodash_1.cloneDeep(t);
        if (!result.Resources[e.Resource]) {
            throw new SyntaxError('Cannot add Metadata to a Resource that does not exist in the template.');
        }
        const resource = Object.assign({}, result.Resources[e.Resource]);
        resource.Metadata = e;
        result.Resources[e.Resource] = resource;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addCondition(t, e) {
        // TODO: Validate intrinsics
        const result = lodash_1.cloneDeep(t);
        result.Conditions[e.Name] = e;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addOutput(t, e) {
        const e0 = lodash_1.cloneDeep(e);
        if (typeof e0.Properties.Value !== 'string') {
            if (e0.Properties.Value.Ref) {
                _validateRef(t, e0.Properties.Value);
            }
            else if (e0.Properties.Value['Fn::GetAtt']) {
                e0.Properties.Value = intrinsic_1.FnGetAtt(e0.Properties.Value['Fn::GetAtt'][0], e0.Properties.Value['Fn::GetAtt'][1]);
                _validateFnGetAtt(t, e0.Properties.Value);
            }
        }
        const result = lodash_1.cloneDeep(t);
        result.Outputs[e0.Name] = e0;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addParameter(t, e) {
        const result = lodash_1.cloneDeep(t);
        result.Parameters[e.Name] = e;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addMapping(t, e) {
        const result = Object.assign({}, t);
        if (result.Mappings[e.Name]) {
            const newMappings = lodash_1.cloneDeep(result.Mappings);
            newMappings[e.Name] = Object.assign({}, e, { Content: Object.assign({}, result.Mappings[e.Name].Content, e.Content) });
            result.Mappings = newMappings;
        }
        else {
            const newMappings = lodash_1.cloneDeep(result.Mappings);
            newMappings[e.Name] = e;
            result.Mappings = newMappings;
        }
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _addResource(t, e) {
        const result = Object.assign({}, t);
        const newResources = lodash_1.cloneDeep(result.Resources);
        newResources[e.Name] = e;
        result.Resources = newResources;
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _removeMapping(t, e) {
        const result = Object.assign({}, t);
        let mapping;
        if (typeof e === 'string') {
            if (result.Mappings[e]) {
                mapping = result.Mappings[e];
            }
            else {
                throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
            }
        }
        else {
            mapping = e;
        }
        if (result.Mappings[mapping.Name]) {
            result.Mappings = lodash_1.omit(result.Mappings, mapping.Name);
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(mapping)}`);
        }
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _removeOutput(t, e) {
        const result = Object.assign({}, t);
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
            result.Outputs = lodash_1.omit(result.Outputs, out.Name);
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(out)}`);
        }
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param e
     */
    function _removeParameter(t, e) {
        const result = Object.assign({}, t);
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
            result.Parameters = lodash_1.omit(result.Parameters, param.Name);
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(param)}`);
        }
        return result;
    }
    /**
     * @hidden
     * @param t
     * @param inputTemplate
     */
    function _calcFromExistingTemplate(t, inputTemplate) {
        if (inputTemplate.Description) {
            t = t.add(description_1.Description(inputTemplate.Description));
        }
        if (inputTemplate.Parameters) {
            Object.keys(inputTemplate.Parameters).forEach(p => {
                t = t.add(parameter_1.Parameter(p, inputTemplate.Parameters[p]));
            });
        }
        if (inputTemplate.Resources) {
            Object.keys(inputTemplate.Resources).forEach(r => {
                const split = inputTemplate.Resources[r].Type.split('::');
                const cat = split[1];
                const resType = split[2];
                const options = {
                    Condition: inputTemplate.Resources[r].Condition
                };
                if (split[0] === 'AWS') {
                    const service = service_1.Service(cfn_doc_json_stubs_1.default[cat]);
                    t = t.add(service[resType](r, inputTemplate.Resources[r].Properties, options));
                }
                else if (split[0] === 'Custom') {
                    t = t.add(resource_1.CustomResource(r, inputTemplate.Resources[r].Properties, options));
                }
                if (inputTemplate.Resources[r].Metadata) {
                    t = _addResourceMetadata(t, metadata_1.ResourceMetadata(r, inputTemplate.Resources[r].Metadata));
                }
                if (inputTemplate.Resources[r].CreationPolicy) {
                    t = _addCreationPolicy(t, creationpolicy_1.CreationPolicy(r, inputTemplate.Resources[r].CreationPolicy));
                }
                if (inputTemplate.Resources[r].DeletionPolicy) {
                    t = _addDeletionPolicy(t, deletionpolicy_1.DeletionPolicy(r, inputTemplate.Resources[r].DeletionPolicy));
                }
                if (inputTemplate.Resources[r].DependsOn) {
                    t = _addDependsOn(t, dependson_1.DependsOn(r, inputTemplate.Resources[r].DependsOn));
                }
                if (inputTemplate.Resources[r].UpdatePolicy) {
                    t = _addUpdatePolicy(t, updatepolicy_1.UpdatePolicy(r, inputTemplate.Resources[r].UpdatePolicy));
                }
            });
        }
        if (inputTemplate.Outputs) {
            Object.keys(inputTemplate.Outputs).forEach(o => {
                t = t.add(output_1.Output(o, inputTemplate.Outputs[o]));
            });
        }
        if (inputTemplate.Mappings) {
            Object.keys(inputTemplate.Mappings).forEach(m => {
                Object.keys(inputTemplate.Mappings[m]).forEach(m0 => {
                    t = t.add(mapping_1.Mapping(m, m0, inputTemplate.Mappings[m][m0]));
                });
            });
        }
        if (inputTemplate.Conditions) {
            Object.keys(inputTemplate.Conditions).forEach(c => {
                t = t.add(condition_1.Condition(c, inputTemplate.Conditions[c]));
            });
        }
        return t;
    }
});
//# sourceMappingURL=template.js.map