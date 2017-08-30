"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_macro_1 = require("../../../src/macros/lambda.macro");
const path = require('path');
describe('Lambda Macro', () => {
    describe('buildLambda', () => {
        test('Can build a Template with an inline Lambda function', () => {
            return lambda_macro_1.buildLambda({
                path: path.resolve(__dirname, './examples/inline/index.js'),
                name: 'MyGreatFunction',
                options: {
                    MemorySize: 256
                },
                parameters: ['Role'],
                output: true
            }).then(({ FunctionResource }) => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(FunctionResource).toEqual({
                    Name: 'MyGreatFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 256,
                        Role: {
                            Ref: 'MyGreatFunctionRole',
                            kind: 'Ref'
                        },
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build a Template with an inline Lambda function with default values', () => {
            return lambda_macro_1.buildLambda({
                path: path.resolve(__dirname, './examples/inline/index.js')
            }).then(({ FunctionResource }) => {
                return expect(FunctionResource).toEqual({
                    Name: 'MyFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 128,
                        Role: 'BlankRole',
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
            return lambda_macro_1.buildLambda({
                path: path.resolve(__dirname, './examples/zipEmpty')
            }).then(({ FunctionResource }) => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(FunctionResource).toEqual({
                    Name: 'MyFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 128,
                        Role: 'BlankRole',
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
    });
    describe('buildInlineLambda', () => {
        test('Can build an inline Lambda function', () => {
            return lambda_macro_1.buildInlineLambda({
                path: path.resolve(__dirname, './examples/inline/index.js'),
                name: 'MyGreatFunction',
                options: {
                    MemorySize: 256
                },
                parameters: ['Role'],
                output: true
            }).then(fn => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(fn).toEqual({
                    Name: 'MyGreatFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 256,
                        Role: {
                            Ref: 'MyGreatFunctionRole',
                            kind: 'Ref'
                        },
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build an inline Lambda function with environmental variables', () => {
            return lambda_macro_1.buildInlineLambda({
                path: path.resolve(__dirname, './examples/inline/index.js'),
                name: 'MyGreatFunction',
                options: {
                    MemorySize: 256,
                    Environment: {
                        Variables: {
                            DDB_TABLE: `main-table`
                        }
                    }
                },
                parameters: ['Role'],
                output: true
            }).then(fn => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(fn).toEqual({
                    Name: 'MyGreatFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        Environment: {
                            Variables: {
                                DDB_TABLE: `main-table`
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 256,
                        Role: {
                            Ref: 'MyGreatFunctionRole',
                            kind: 'Ref'
                        },
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build an inline Lambda function with tags', () => {
            return lambda_macro_1.buildInlineLambda({
                path: path.resolve(__dirname, './examples/inline/index.js'),
                name: 'MyGreatFunction',
                options: {
                    MemorySize: 256,
                    Tags: [
                        {
                            Key: 'Owner',
                            Value: 'Me'
                        }
                    ]
                },
                parameters: ['Role'],
                output: true
            }).then(fn => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(fn).toEqual({
                    Name: 'MyGreatFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        Tags: [
                            {
                                Key: 'Owner',
                                Value: 'Me'
                            }
                        ],
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 256,
                        Role: {
                            Ref: 'MyGreatFunctionRole',
                            kind: 'Ref'
                        },
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build an inline Lambda function with default values', () => {
            return lambda_macro_1.buildInlineLambda({
                path: path.resolve(__dirname, './examples/inline/index.js')
            }).then(fn => {
                return expect(fn).toEqual({
                    Name: 'MyFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 128,
                        Role: 'BlankRole',
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
        test('Can build an inline Lambda function if the folder is empty except for index.js', () => {
            return lambda_macro_1.buildInlineLambda({
                path: path.resolve(__dirname, './examples/zipEmpty')
            }).then(fn => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(fn).toEqual({
                    Name: 'MyFunction',
                    Properties: {
                        Code: {
                            ZipFile: {
                                kind: 'FnJoin',
                                Values: [
                                    "const aws = require('aws-sdk');",
                                    '',
                                    'exports.handler = (event, context, callback) => {',
                                    "  callback(null, 'Hello from Default Function');",
                                    '};',
                                    ''
                                ],
                                Delimiter: '\n'
                            }
                        },
                        FunctionName: 'MyFunction',
                        Handler: 'index.handler',
                        MemorySize: 128,
                        Role: 'BlankRole',
                        Runtime: 'nodejs6.10',
                        Timeout: 30
                    },
                    Type: 'AWS::Lambda::Function',
                    kind: 'Resource'
                });
            });
        });
    });
    describe('buildLambdaTemplate', () => {
        test('Can build a Template with an inline Lambda function', () => {
            return lambda_macro_1.buildLambdaTemplate({
                path: path.resolve(__dirname, './examples/inline/index.js'),
                name: 'MyGreatFunction',
                options: {
                    MemorySize: 256
                },
                parameters: ['Role'],
                output: true
            }).then(({ Template }) => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(Template).toEqual(require('./templates/lambda/inline/template.json'));
            });
        });
        test('Can build a Template with an inline Lambda function with default values', () => {
            return lambda_macro_1.buildLambdaTemplate({
                path: path.resolve(__dirname, './examples/inline/index.js')
            }).then(({ Template }) => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(Template).toEqual(require('./templates/lambda/inline/defaultValues.json'));
            });
        });
        test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
            return lambda_macro_1.buildLambdaTemplate({
                path: path.resolve(__dirname, './examples/zipEmpty')
            }).then(({ Template }) => {
                //console.log(JSON.stringify(Template, null, 2));
                return expect(Template).toEqual(require('./templates/lambda/inline/defaultValues.json'));
            });
        });
    });
});
