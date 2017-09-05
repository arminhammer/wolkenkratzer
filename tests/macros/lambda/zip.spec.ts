import {
  buildZipLambda,
  buildZipLambdaTemplate,
  buildLambda,
  buildLambdaTemplate
} from '../../../src/macros/lambda.macro';
const path = require('path');
const fs = require('fs-extra');

describe('Lambda Macro', () => {
  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            parameters: ['Role'],
            output: true
          }).then(({ FunctionResource, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(FunctionResource).toEqual({
              Name: 'MyGreatFunction',
              Properties: {
                Code: {
                  S3Bucket: {
                    Ref: 'MyGreatFunctionS3BucketParam',
                    kind: 'Ref'
                  },
                  S3Key: { Ref: 'MyGreatFunctionS3KeyParam', kind: 'Ref' }
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
    },
    10000
  );

  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function and env vars',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256,
              Environment: {
                Variables: {
                  Key: 'Value'
                }
              }
            },
            parameters: ['Role'],
            output: true
          }).then(({ FunctionResource, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(FunctionResource).toEqual({
              Name: 'MyGreatFunction',
              Properties: {
                Code: {
                  S3Bucket: {
                    Ref: 'MyGreatFunctionS3BucketParam',
                    kind: 'Ref'
                  },
                  S3Key: { Ref: 'MyGreatFunctionS3KeyParam', kind: 'Ref' }
                },
                Environment: {
                  Variables: {
                    Key: 'Value'
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
    },
    10000
  );

  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function and bucket and key params',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            parameters: ['Role'],
            bucket: 'sample-bucket',
            key: 'sample-key',
            output: true
          }).then(({ FunctionResource, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(FunctionResource).toEqual({
              Name: 'MyGreatFunction',
              Properties: {
                Code: {
                  S3Bucket: 'sample-bucket',
                  S3Key: 'sample-key'
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
    },
    10000
  );

  test(
    'buildZipLambdaTemplate Can build a Template with a zip Lambda function',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambdaTemplate({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            parameters: ['Role'],
            output: true
          }).then(({ Template, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(Template.build()).toEqual(testTemplate);
          });
        });
    },
    10000
  );

  test(
    'buildLambda Can build a Function resource with a zip Lambda function',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildLambda({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            parameters: ['Role'],
            output: true
          }).then(({ FunctionResource, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(FunctionResource).toEqual({
              Name: 'MyGreatFunction',
              Properties: {
                Code: {
                  S3Bucket: {
                    Ref: 'MyGreatFunctionS3BucketParam',
                    kind: 'Ref'
                  },
                  S3Key: { Ref: 'MyGreatFunctionS3KeyParam', kind: 'Ref' }
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
    },
    10000
  );

  test(
    'buildLambdaTemplate Can build a Template with a zip Lambda function',
    () => {
      let zipFile = null;
      const testTemplate = require('./templates/lambda/zip/template.json');
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildLambdaTemplate({
            path: path.resolve(__dirname, './examples/zip/'),
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            parameters: ['Role'],
            output: true
          }).then(({ Template, Zip }) => {
            console.log('Here');
            //console.log(JSON.stringify(Template, null, 2));
            expect(Zip.size).toEqual(zipFile.size);
            expect(Template).toEqual(testTemplate);
          });
        });
    },
    10000
  );
});
