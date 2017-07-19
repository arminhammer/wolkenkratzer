import { buildLambdaTemplate } from '../../../src/macros/lambda.macro';
const path = require('path');
const fs = require('fs-extra');

describe('Lambda Macro', () => {
  test(
    'Can build a Template with a zip Lambda function',
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
