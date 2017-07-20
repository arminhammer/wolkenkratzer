import {
  buildLambda,
  buildLambdaTemplate,
  buildInlineLambda
} from '../../../src/macros/lambda.macro';
const path = require('path');

describe('Lambda Macro', () => {
  describe('buildLambda', () => {
    test('Can build a Template with an inline Lambda function', () => {
      return buildLambda({
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
      return buildLambda({
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
      return buildLambda({
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
    test('Can build a Template with an inline Lambda function', () => {
      return buildInlineLambda({
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

    test('Can build a Template with an inline Lambda function with default values', () => {
      return buildInlineLambda({
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

    test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
      return buildInlineLambda({
        path: path.resolve(__dirname, './examples/zipEmpty')
      }).then(fn => {
        console.log('EXPECTED');
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
      return buildLambdaTemplate({
        path: path.resolve(__dirname, './examples/inline/index.js'),
        name: 'MyGreatFunction',
        options: {
          MemorySize: 256
        },
        parameters: ['Role'],
        output: true
      }).then(({ Template }) => {
        //console.log(JSON.stringify(Template, null, 2));
        return expect(Template).toEqual(
          require('./templates/lambda/inline/template.json')
        );
      });
    });

    test('Can build a Template with an inline Lambda function with default values', () => {
      return buildLambdaTemplate({
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(({ Template }) => {
        //console.log(JSON.stringify(Template, null, 2));
        return expect(Template).toEqual(
          require('./templates/lambda/inline/defaultValues.json')
        );
      });
    });

    test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
      return buildLambdaTemplate({
        path: path.resolve(__dirname, './examples/zipEmpty')
      }).then(({ Template }) => {
        //console.log(JSON.stringify(Template, null, 2));
        return expect(Template).toEqual(
          require('./templates/lambda/inline/defaultValues.json')
        );
      });
    });
  });
});
