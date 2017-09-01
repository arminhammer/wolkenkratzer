"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const parameter_1 = require("../elements/parameter");
const intrinsic_1 = require("../intrinsic");
const service_1 = require("../service");
const template_1 = require("../template");
const fs = require('fs-extra');
const bluebird = require('bluebird');
const jszip = require('jszip');
const klaw = require('klaw');
const Lambda = service_1.Service(cfn_doc_json_stubs_1.Lambda);
const defaultConfig = {
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
function _createInlineFunction({ path: inputPath, name, options, parameters }) {
    return new Promise((res, rej) => {
        fs
            .readFile(inputPath)
            .then(functionCode => {
            const props = {
                Code: {
                    ZipFile: intrinsic_1.FnJoin('\n', functionCode.toString().split('\n'))
                },
                FunctionName: options.FunctionName,
                Handler: options.Handler,
                MemorySize: options.MemorySize,
                Role: parameters && parameters.includes('Role')
                    ? intrinsic_1.Ref(`${name}Role`)
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
            const fn = Lambda.Function(name, props);
            res(fn);
        })
            .catch(e => {
            rej(e);
        });
    });
}
function _createInlineTemplate({ path: inputPath, name, options, parameters }) {
    return new Promise((res, rej) => {
        _createInlineFunction({ path: inputPath, name, options, parameters })
            .then(fnBlock => {
            let t = template_1.Template();
            if (parameters && parameters.length > 0) {
                parameters.map(p => {
                    t = t.add(parameter_1.Parameter(`${name}${p}`, { Type: 'String' }));
                });
            }
            t = t.add(fnBlock, {
                Output: true
            });
            res(t);
        })
            .catch(e => {
            rej(e);
        });
    });
}
/**
 * Create an inline Lambda function from a folder or source file
 * @param {} param0
 */
function buildInlineLambdaTemplate({ path: inputPath, name, options, parameters }) {
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.resolve(inputPath);
    return _createInlineTemplate({
        name,
        options,
        parameters,
        path: inputPath
    });
}
exports.buildInlineLambdaTemplate = buildInlineLambdaTemplate;
/**
 * Create an inline Lambda function
 * @param {*} param0
 */
function buildInlineLambda({ path: inputPath, name, options, parameters }) {
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.resolve(inputPath);
    return fs.stat(inputPath).then(stat => {
        if (stat.isFile()) {
            return _createInlineFunction({
                name,
                options,
                parameters,
                path: inputPath
            });
        }
        else {
            const indexPath = path_1.resolve(inputPath, 'index.js');
            return fs.stat(indexPath).then(statIndex => {
                if (statIndex.isFile()) {
                    return _createInlineFunction({
                        name,
                        options,
                        parameters,
                        path: indexPath
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
function _buildZipLambda({ path: inputPath, name, options, parameters, bucket, key, output }) {
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.resolve(inputPath);
    return new Promise((res, rej) => {
        const zip = new jszip();
        const files = [];
        klaw(inputPath)
            .on('data', ({ path: location, stats }) => {
            if (stats.isFile()) {
                files.push(location);
            }
        })
            .on('end', () => {
            bluebird
                .map(files, file => {
                return fs.readFile(file).then(contents => {
                    const relPath = path_1.relative(inputPath, file);
                    zip.file(relPath, contents);
                });
            })
                .then(results => {
                zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                    // fs.writeFileSync('final.zip', blob);
                    let t = template_1.Template();
                    let s3BucketVal = intrinsic_1.Ref(`${name}S3BucketParam`);
                    let s3KeyVal = intrinsic_1.Ref(`${name}S3KeyParam`);
                    if (bucket) {
                        s3BucketVal = bucket;
                        t = t.add(parameter_1.Parameter(`${name}S3BucketParam`, { Type: 'String' }));
                    }
                    if (key) {
                        s3KeyVal = key;
                        t = t.add(parameter_1.Parameter(`${name}S3KeyParam`, { Type: 'String' }));
                    }
                    if (parameters && parameters.length > 0) {
                        parameters.map(p => {
                            t = t.add(parameter_1.Parameter(`${name}${p}`, { Type: 'String' }));
                        });
                    }
                    const fn = Lambda.Function(name, {
                        Code: {
                            S3Bucket: s3BucketVal,
                            S3Key: s3KeyVal
                        },
                        FunctionName: options.FunctionName,
                        Handler: options.Handler,
                        MemorySize: options.MemorySize,
                        Role: parameters && parameters.includes('Role')
                            ? intrinsic_1.Ref(`${name}Role`)
                            : options.Role,
                        Runtime: options.Runtime,
                        Timeout: options.Timeout
                        // Tags: options.Tags ? options.Tags.length > 0 : null
                    });
                    res({
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
function buildZipLambda({ path: inputPath, name, options, parameters, bucket, key, output }) {
    return _buildZipLambda({
        name,
        options,
        output,
        parameters,
        bucket,
        key,
        path: inputPath
    });
}
exports.buildZipLambda = buildZipLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildLambda({ path: inputPath, name, options, parameters, output }) {
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.resolve(inputPath);
    return new Promise((res, rej) => {
        fs
            .stat(inputPath)
            .then(stat => {
            if (stat.isFile()) {
                _createInlineFunction({
                    name: name,
                    options: options,
                    parameters: parameters,
                    path: inputPath
                })
                    .then(fn => {
                    res({ FunctionResource: fn });
                })
                    .catch(e => {
                    rej(e);
                });
            }
            else if (stat.isDirectory()) {
                const zip = new jszip();
                const files = [];
                klaw(inputPath)
                    .on('data', ({ path: location, stats }) => {
                    if (stats.isFile()) {
                        files.push(location);
                    }
                })
                    .on('end', () => {
                    if (files.length === 1 &&
                        path_1.relative(inputPath, files[0]) === 'index.js') {
                        _createInlineFunction({
                            name: name,
                            options: options,
                            parameters: parameters,
                            path: files[0]
                        })
                            .then(fn => {
                            res({ FunctionResource: fn });
                        })
                            .catch(e => {
                            rej(e);
                        });
                    }
                    else {
                        bluebird
                            .map(files, file => {
                            return fs.readFile(file).then(contents => {
                                const relPath = path_1.relative(inputPath, file);
                                zip.file(relPath, contents);
                            });
                        })
                            .then(results => {
                            zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                                // fs.writeFileSync('final.zip', blob);
                                let t = template_1.Template()
                                    .add(parameter_1.Parameter(`${name}S3BucketParam`, { Type: 'String' }))
                                    .add(parameter_1.Parameter(`${name}S3KeyParam`, { Type: 'String' }));
                                if (parameters && parameters.length > 0) {
                                    parameters.map(p => {
                                        t = t.add(parameter_1.Parameter(`${name}${p}`, { Type: 'String' }));
                                    });
                                }
                                const fn = Lambda.Function(name, {
                                    Code: {
                                        S3Bucket: intrinsic_1.Ref(`${name}S3BucketParam`),
                                        S3Key: intrinsic_1.Ref(`${name}S3KeyParam`)
                                    },
                                    FunctionName: options.FunctionName,
                                    Handler: options.Handler,
                                    MemorySize: options.MemorySize,
                                    Role: parameters && parameters.includes('Role')
                                        ? intrinsic_1.Ref(`${name}Role`)
                                        : options.Role,
                                    Runtime: options.Runtime,
                                    Timeout: options.Timeout
                                    // Tags: options.Tags ? options.Tags.length > 0 : null
                                });
                                res({
                                    FunctionResource: fn,
                                    Zip: blob
                                });
                            });
                        });
                    }
                });
            }
        })
            .catch(e => {
            rej(e);
        });
    });
}
exports.buildLambda = buildLambda;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildZipLambdaTemplate({ path: inputPath, name, options, parameters, bucket, key, output }) {
    return _buildZipLambda({
        bucket,
        key,
        name,
        options,
        output,
        parameters,
        path: inputPath
    })
        .then(({ FunctionResource, Zip }) => {
        return new Promise((res, rej) => {
            let t = template_1.Template()
                .add(parameter_1.Parameter(`${name}S3BucketParam`, { Type: 'String' }))
                .add(parameter_1.Parameter(`${name}S3KeyParam`, { Type: 'String' }));
            if (parameters && parameters.length > 0) {
                parameters.map(p => {
                    t = t.add(parameter_1.Parameter(`${name}${p}`, { Type: 'String' }));
                });
            }
            t = t.add(FunctionResource, { Output: true });
            res({
                Template: t,
                Zip
            });
        });
    })
        .catch(e => {
        throw new SyntaxError(`There was an error: ${e}`);
    });
}
exports.buildZipLambdaTemplate = buildZipLambdaTemplate;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
function buildLambdaTemplate({ path: inputPath, name, options, parameters, output }) {
    name = name ? name : defaultConfig.FunctionName;
    options = options ? lodash_1.merge({}, defaultConfig, options) : defaultConfig;
    inputPath = path_1.resolve(inputPath);
    return new Promise((res, rej) => {
        fs
            .stat(inputPath)
            .then(stat => {
            if (stat.isFile()) {
                _createInlineTemplate({
                    name: name,
                    options: options,
                    parameters: parameters,
                    path: inputPath
                })
                    .then(t => {
                    res({ Template: t.build() });
                })
                    .catch(e => {
                    rej(e);
                });
            }
            else if (stat.isDirectory()) {
                const zip = new jszip();
                const files = [];
                klaw(inputPath)
                    .on('data', ({ path: location, stats }) => {
                    if (stats.isFile()) {
                        files.push(location);
                    }
                })
                    .on('end', () => {
                    if (files.length === 1 &&
                        path_1.relative(inputPath, files[0]) === 'index.js') {
                        _createInlineTemplate({
                            name: name,
                            options: options,
                            parameters: parameters,
                            path: files[0]
                        })
                            .then(t => {
                            res({ Template: t.build() });
                        })
                            .catch(e => {
                            rej(e);
                        });
                    }
                    else {
                        bluebird
                            .map(files, file => {
                            return fs.readFile(file).then(contents => {
                                const relPath = path_1.relative(inputPath, file);
                                zip.file(relPath, contents);
                            });
                        })
                            .then(results => {
                            zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                                // fs.writeFileSync('final.zip', blob);
                                let t = template_1.Template()
                                    .add(parameter_1.Parameter(`${name}S3BucketParam`, { Type: 'String' }))
                                    .add(parameter_1.Parameter(`${name}S3KeyParam`, { Type: 'String' }));
                                if (parameters && parameters.length > 0) {
                                    parameters.map(p => {
                                        t = t.add(parameter_1.Parameter(`${name}${p}`, { Type: 'String' }));
                                    });
                                }
                                t = t.add(Lambda.Function(name, {
                                    Code: {
                                        S3Bucket: intrinsic_1.Ref(`${name}S3BucketParam`),
                                        S3Key: intrinsic_1.Ref(`${name}S3KeyParam`)
                                    },
                                    FunctionName: options.FunctionName,
                                    Handler: options.Handler,
                                    MemorySize: options.MemorySize,
                                    Role: parameters && parameters.includes('Role')
                                        ? intrinsic_1.Ref(`${name}Role`)
                                        : options.Role,
                                    Runtime: options.Runtime,
                                    Timeout: options.Timeout
                                    // Tags: options.Tags ? options.Tags.length > 0 : null
                                }), { Output: true });
                                res({
                                    Template: t.build(),
                                    Zip: blob
                                });
                            });
                        });
                    }
                });
            }
        })
            .catch(e => {
            rej(e);
        });
    });
}
exports.buildLambdaTemplate = buildLambdaTemplate;
//# sourceMappingURL=lambda.macro.js.map