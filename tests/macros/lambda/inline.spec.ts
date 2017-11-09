import {
  buildInlineLambda,
  buildLambda,
  buildLambdaTemplate
} from '../../../src/macros/lambda.macro';
const path = require('path');

describe('Lambda Macro', () => {
  describe('buildLambda', () => {
    test('Can build a Template with an inline Lambda function', () => {
      return buildLambda({
        name: 'MyGreatFunction',
        options: {
          MemorySize: 256
        },
        output: true,
        parameters: ['Role'],
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(({ FunctionResource }) => {
        return expect(FunctionResource).toEqual({
          Name: 'MyGreatFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
        return expect(FunctionResource).toEqual({
          Name: 'MyFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
      return buildInlineLambda({
        name: 'MyGreatFunction',
        options: {
          MemorySize: 256
        },
        parameters: ['Role'],
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(fn => {
        return expect(fn).toEqual({
          Name: 'MyGreatFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
      return buildInlineLambda({
        name: 'MyGreatFunction',
        options: {
          Environment: {
            Variables: {
              DDB_TABLE: `main-table`
            }
          },
          MemorySize: 256
        },
        output: true,
        parameters: ['Role'],
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(fn => {
        return expect(fn).toEqual({
          Name: 'MyGreatFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
      return buildInlineLambda({
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
        output: true,
        parameters: ['Role'],
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(fn => {
        return expect(fn).toEqual({
          Name: 'MyGreatFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
            Tags: [
              {
                Key: 'Owner',
                Value: 'Me'
              }
            ],
            Timeout: 30
          },
          Type: 'AWS::Lambda::Function',
          kind: 'Resource'
        });
      });
    });

    test('Can build an inline Lambda function with default values', () => {
      return buildInlineLambda({
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(fn => {
        return expect(fn).toEqual({
          Name: 'MyFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
      return buildInlineLambda({
        path: path.resolve(__dirname, './examples/zipEmpty')
      }).then(fn => {
        return expect(fn).toEqual({
          Name: 'MyFunction',
          Properties: {
            Code: {
              ZipFile: {
                Delimiter: '\n',
                Values: [
                  'exports.handler = (event, context, callback) => {',
                  "  callback(null, 'Hello from Default Function');",
                  '};',
                  ''
                ],
                kind: 'FnJoin'
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
        name: 'MyGreatFunction',
        options: {
          MemorySize: 256
        },
        output: true,
        parameters: ['Role'],
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(({ Template }) => {
        return expect(Template).toEqual(
          require('./templates/lambda/inline/template.json')
        );
      });
    });

    test('Can build a Template with an inline Lambda function with default values', () => {
      return buildLambdaTemplate({
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(({ Template }) => {
        return expect(Template).toEqual(
          require('./templates/lambda/inline/defaultValues.json')
        );
      });
    });

    test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
      return buildLambdaTemplate({
        path: path.resolve(__dirname, './examples/zipEmpty')
      }).then(({ Template }) => {
        return expect(Template).toEqual(
          require('./templates/lambda/inline/defaultValues.json')
        );
      });
    });
  });
});
