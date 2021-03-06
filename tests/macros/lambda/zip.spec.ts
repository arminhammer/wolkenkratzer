import {
  buildLambda,
  buildLambdaTemplate,
  buildZipLambda,
  buildZipLambdaTemplate
} from '../../../src/macros/lambda.macro';
const path = require('path');
const fs = require('fs-extra');
const TIMEOUT = 60000;

describe('Lambda Macro', () => {
  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function',
    () => {
      let zipFile = null;
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
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
    TIMEOUT
  );

  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function and env vars',
    () => {
      let zipFile = null;
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            name: 'MyGreatFunction',
            options: {
              Environment: {
                Variables: {
                  Key: 'Value'
                }
              },
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
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
    TIMEOUT
  );

  test(
    'buildZipLambda Can build a Function resource with a zip Lambda function and bucket and key params',
    () => {
      let zipFile = null;
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildZipLambda({
            bucket: 'sample-bucket',
            key: 'sample-key',
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
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
    TIMEOUT
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
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
          }).then(({ Template, Zip }) => {
            expect(Zip.size).toEqual(zipFile.size);
            expect(Template.build()).toEqual(testTemplate);
          });
        });
    },
    TIMEOUT
  );

  test(
    'buildLambda Can build a Function resource with a zip Lambda function',
    () => {
      let zipFile = null;
      return fs
        .readFile(path.resolve(__dirname, './templates/lambda/zip/src.zip'))
        .then(contents => {
          zipFile = contents;
          return buildLambda({
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
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
    TIMEOUT
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
            name: 'MyGreatFunction',
            options: {
              MemorySize: 256
            },
            output: true,
            parameters: ['Role'],
            path: path.resolve(__dirname, './examples/zip/')
          }).then(({ Template, Zip }) => {
            console.log('Here');
            expect(Zip.size).toEqual(zipFile.size);
            expect(Template).toEqual(testTemplate);
          });
        });
    },
    TIMEOUT
  );
});
