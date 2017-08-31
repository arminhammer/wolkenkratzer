"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
var lodash_1 = require("lodash");
var path_1 = require("path");
var parameter_1 = require("../elements/parameter");
var intrinsic_1 = require("../intrinsic");
var service_1 = require("../service");
var template_1 = require("../template");
var fs = require('fs-extra');
var bluebird = require('bluebird');
var jszip = require('jszip');
var klaw = require('klaw');
var Lambda = service_1.Service(cfn_doc_json_stubs_1.Lambda);
var defaultConfig = {
    Environment: {},
    FunctionName: 'MyFunction',
    Handler: 'index.handler',
    MemorySize: 128,
    Role: 'BlankRole',
    Runtime: 'nodejs6.10',
    Tags: [],
    Timeout: 30
    // env: {},
    // kms: '',
};
function _createInlineFunction(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters;
    return new Promise(function (resolve, reject) {
        fs
            .readFile(inputPath)
            .then(function (functionCode) {
            var props = {
                Code: {
                    ZipFile: intrinsic_1.FnJoin('\n', functionCode.toString().split('\n'))
                },
                FunctionName: options.FunctionName,
                Handler: options.Handler,
                MemorySize: options.MemorySize,
                Role: parameters && parameters.includes('Role')
                    ? intrinsic_1.Ref(name + "Role")
                    : options.Role,
                Runtime: options.Runtime,
                Timeout: options.Timeout
                // Tags: options.Tags ? options.Tags.length > 0 : null
            };
            if (Object.keys(options.Environment).length > 0) {
                props.Environment = options.Environment;
            }
            if (options.Tags.length > 0) {
                props.Tags = options.Tags;
            }
            var fn = Lambda.Function(name, props);
            resolve(fn);
        })
            .catch(function (e) {
            reject(e);
        });
    });
}
function _createInlineTemplate(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters;
    return new Promise(function (resolve, reject) {
        _createInlineFunction({ path: inputPath, name: name, options: options, parameters: parameters })
            .then(function (fnBlock) {
            var t = template_1.Template();
            if (parameters && parameters.length > 0) {
                parameters.map(function (p) {
                    t = t.add(parameter_1.Parameter("" + name + p, { Type: 'String' }));
                });
            }
            t = t.add(fnBlock, {
                Output: true
            });
            resolve(t);
        })
            .catch(function (e) {
            reject(e);
        });
    });
}
/**
 * Create an inline Lambda function
 * @param {*} param0
 */
function buildInlineLambda(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters;
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.default.resolve(inputPath);
    return fs.stat(inputPath).then(function (stat) {
        if (stat.isFile()) {
            return _createInlineFunction({
                name: name,
                options: options,
                parameters: parameters,
                path: inputPath
            });
        }
        else {
            var indexPath_1 = path_1.default.resolve(inputPath, 'index.js');
            return fs.stat(indexPath_1).then(function (statIndex) {
                if (statIndex.isFile()) {
                    return _createInlineFunction({
                        name: name,
                        options: options,
                        parameters: parameters,
                        path: indexPath_1
                    });
                }
                else {
                    return null;
                }
            });
        }
    });
}
exports.buildInlineLambda = buildInlineLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function _buildZipLambda(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters, output = _a.output;
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.default.resolve(inputPath);
    return new Promise(function (resolve, reject) {
        var zip = new jszip();
        var files = [];
        klaw(inputPath)
            .on('data', function (_a) {
            var location = _a.path, stats = _a.stats;
            if (stats.isFile()) {
                files.push(location);
            }
        })
            .on('end', function () {
            bluebird
                .map(files, function (file) {
                return fs.readFile(file).then(function (contents) {
                    var relPath = path_1.default.relative(inputPath, file);
                    zip.file(relPath, contents);
                });
            })
                .then(function (results) {
                zip.generateAsync({ type: 'nodebuffer' }).then(function (blob) {
                    // fs.writeFileSync('final.zip', blob);
                    var t = template_1.Template()
                        .add(parameter_1.Parameter(name + "S3BucketParam", { Type: 'String' }))
                        .add(parameter_1.Parameter(name + "S3KeyParam", { Type: 'String' }));
                    if (parameters && parameters.length > 0) {
                        parameters.map(function (p) {
                            t = t.add(parameter_1.Parameter("" + name + p, { Type: 'String' }));
                        });
                    }
                    var fn = Lambda.Function(name, {
                        Code: {
                            S3Bucket: intrinsic_1.Ref('MyGreatFunctionS3BucketParam'),
                            S3Key: intrinsic_1.Ref('MyGreatFunctionS3KeyParam')
                        },
                        FunctionName: options.FunctionName,
                        Handler: options.Handler,
                        MemorySize: options.MemorySize,
                        Role: parameters && parameters.includes('Role')
                            ? intrinsic_1.Ref(name + "Role")
                            : options.Role,
                        Runtime: options.Runtime,
                        Timeout: options.Timeout
                        // Tags: options.Tags ? options.Tags.length > 0 : null
                    });
                    resolve({
                        FunctionResource: fn,
                        Zip: blob
                    });
                });
            });
        });
    });
}
exports._buildZipLambda = _buildZipLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildZipLambda(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters, output = _a.output;
    return _buildZipLambda({
        name: name,
        options: options,
        output: output,
        parameters: parameters,
        path: inputPath
    });
}
exports.buildZipLambda = buildZipLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildLambda(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters, output = _a.output;
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.default.resolve(inputPath);
    return new Promise(function (resolve, reject) {
        fs
            .stat(inputPath)
            .then(function (stat) {
            if (stat.isFile()) {
                _createInlineFunction({
                    name: name,
                    options: options,
                    parameters: parameters,
                    path: inputPath
                })
                    .then(function (fn) {
                    resolve({ FunctionResource: fn });
                })
                    .catch(function (e) {
                    reject(e);
                });
            }
            else if (stat.isDirectory()) {
                var zip_1 = new jszip();
                var files_1 = [];
                klaw(inputPath)
                    .on('data', function (_a) {
                    var location = _a.path, stats = _a.stats;
                    if (stats.isFile()) {
                        files_1.push(location);
                    }
                })
                    .on('end', function () {
                    if (files_1.length === 1 &&
                        path_1.default.relative(inputPath, files_1[0]) === 'index.js') {
                        _createInlineFunction({
                            name: name,
                            options: options,
                            parameters: parameters,
                            path: files_1[0]
                        })
                            .then(function (fn) {
                            resolve({ FunctionResource: fn });
                        })
                            .catch(function (e) {
                            reject(e);
                        });
                    }
                    else {
                        bluebird
                            .map(files_1, function (file) {
                            return fs.readFile(file).then(function (contents) {
                                var relPath = path_1.default.relative(inputPath, file);
                                zip_1.file(relPath, contents);
                            });
                        })
                            .then(function (results) {
                            zip_1.generateAsync({ type: 'nodebuffer' }).then(function (blob) {
                                // fs.writeFileSync('final.zip', blob);
                                var t = template_1.Template()
                                    .add(parameter_1.Parameter(name + "S3BucketParam", { Type: 'String' }))
                                    .add(parameter_1.Parameter(name + "S3KeyParam", { Type: 'String' }));
                                if (parameters && parameters.length > 0) {
                                    parameters.map(function (p) {
                                        t = t.add(parameter_1.Parameter("" + name + p, { Type: 'String' }));
                                    });
                                }
                                var fn = Lambda.Function(name, {
                                    Code: {
                                        S3Bucket: intrinsic_1.Ref('MyGreatFunctionS3BucketParam'),
                                        S3Key: intrinsic_1.Ref('MyGreatFunctionS3KeyParam')
                                    },
                                    FunctionName: options.FunctionName,
                                    Handler: options.Handler,
                                    MemorySize: options.MemorySize,
                                    Role: parameters && parameters.includes('Role')
                                        ? intrinsic_1.Ref(name + "Role")
                                        : options.Role,
                                    Runtime: options.Runtime,
                                    Timeout: options.Timeout
                                    // Tags: options.Tags ? options.Tags.length > 0 : null
                                });
                                resolve({
                                    FunctionResource: fn,
                                    Zip: blob
                                });
                            });
                        });
                    }
                });
            }
        })
            .catch(function (e) {
            reject(e);
        });
    });
}
exports.buildLambda = buildLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildZipLambdaTemplate(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters, output = _a.output;
    return _buildZipLambda({
        name: name,
        options: options,
        output: output,
        parameters: parameters,
        path: inputPath
    })
        .then(function (_a) {
        var FunctionResource = _a.FunctionResource, Zip = _a.Zip;
        return new Promise(function (resolve, reject) {
            var t = template_1.Template()
                .add(parameter_1.Parameter(name + "S3BucketParam", { Type: 'String' }))
                .add(parameter_1.Parameter(name + "S3KeyParam", { Type: 'String' }));
            if (parameters && parameters.length > 0) {
                parameters.map(function (p) {
                    t = t.add(parameter_1.Parameter("" + name + p, { Type: 'String' }));
                });
            }
            t = t.add(FunctionResource, { Output: true });
            resolve({
                Template: t,
                Zip: Zip
            });
        });
    })
        .catch(function (e) {
        throw new SyntaxError("There was an error: " + e);
    });
}
exports.buildZipLambdaTemplate = buildZipLambdaTemplate;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildLambdaTemplate(_a) {
    var inputPath = _a.path, name = _a.name, options = _a.options, parameters = _a.parameters, output = _a.output;
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.default.resolve(inputPath);
    return new Promise(function (resolve, reject) {
        fs
            .stat(inputPath)
            .then(function (stat) {
            if (stat.isFile()) {
                _createInlineTemplate({
                    name: name,
                    options: options,
                    parameters: parameters,
                    path: inputPath
                })
                    .then(function (t) {
                    resolve({ Template: t.build() });
                })
                    .catch(function (e) {
                    reject(e);
                });
            }
            else if (stat.isDirectory()) {
                var zip_2 = new jszip();
                var files_2 = [];
                klaw(inputPath)
                    .on('data', function (_a) {
                    var location = _a.path, stats = _a.stats;
                    if (stats.isFile()) {
                        files_2.push(location);
                    }
                })
                    .on('end', function () {
                    if (files_2.length === 1 &&
                        path_1.default.relative(inputPath, files_2[0]) === 'index.js') {
                        _createInlineTemplate({
                            name: name,
                            options: options,
                            parameters: parameters,
                            path: files_2[0]
                        })
                            .then(function (t) {
                            resolve({ Template: t.build() });
                        })
                            .catch(function (e) {
                            reject(e);
                        });
                    }
                    else {
                        bluebird
                            .map(files_2, function (file) {
                            return fs.readFile(file).then(function (contents) {
                                var relPath = path_1.default.relative(inputPath, file);
                                zip_2.file(relPath, contents);
                            });
                        })
                            .then(function (results) {
                            zip_2.generateAsync({ type: 'nodebuffer' }).then(function (blob) {
                                // fs.writeFileSync('final.zip', blob);
                                var t = template_1.Template()
                                    .add(parameter_1.Parameter(name + "S3BucketParam", { Type: 'String' }))
                                    .add(parameter_1.Parameter(name + "S3KeyParam", { Type: 'String' }));
                                if (parameters && parameters.length > 0) {
                                    parameters.map(function (p) {
                                        t = t.add(parameter_1.Parameter("" + name + p, { Type: 'String' }));
                                    });
                                }
                                t = t.add(Lambda.Function(name, {
                                    Code: {
                                        S3Bucket: intrinsic_1.Ref('MyGreatFunctionS3BucketParam'),
                                        S3Key: intrinsic_1.Ref('MyGreatFunctionS3KeyParam')
                                    },
                                    FunctionName: options.FunctionName,
                                    Handler: options.Handler,
                                    MemorySize: options.MemorySize,
                                    Role: parameters && parameters.includes('Role')
                                        ? intrinsic_1.Ref(name + "Role")
                                        : options.Role,
                                    Runtime: options.Runtime,
                                    Timeout: options.Timeout
                                    // Tags: options.Tags ? options.Tags.length > 0 : null
                                }), { Output: true });
                                resolve({
                                    Template: t.build(),
                                    Zip: blob
                                });
                            });
                        });
                    }
                });
            }
        })
            .catch(function (e) {
            reject(e);
        });
    });
}
exports.buildLambdaTemplate = buildLambdaTemplate;
//# sourceMappingURL=lambda.macro.js.map