import {
  buildLambda,
  buildLambdaTemplate
} from '../../../src/macros/lambda.macro';
const path = require('path');

describe('Lambda Macro', () => {
  describe('buildLambda', () => {
    /*
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
        return expect(FunctionResource).toEqual({});
      });
    });
    */

    test('Can build a Template with an inline Lambda function with default values', () => {
      return buildLambda({
        path: path.resolve(__dirname, './examples/inline/index.js')
      }).then(({ FunctionResource }) => {
        //console.log(JSON.stringify(Template, null, 2));
        console.log(FunctionResource);
        return expect(FunctionResource).toEqual({
          Name: 'MyFunction',
          Properties: {
            Code: {
              ZipFile: {
                'Fn::Join': [
                  '\n',
                  [
                    "const aws = require('aws-sdk');",
                    '',
                    'exports.handler = (event, context, callback) => {',
                    "  callback(null, 'Hello from Default Function');",
                    '};',
                    ''
                  ]
                ]
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

    /*
    test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
      return buildLambda({
        path: path.resolve(__dirname, './examples/zipEmpty')
      }).then(({ FunctionResource }) => {
        //console.log(JSON.stringify(Template, null, 2));
        return expect(FunctionResource).toEqual(
          require('./templates/lambda/inline/defaultValues.json')
        );
      });
    });
    */
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
