import { buildLambda } from '../../../src/macros/lambda.macro';
const path = require('path');

describe('Lambda Macro', () => {
  test('Can build a Template with an inline Lambda function', () => {
    return buildLambda({
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
    return buildLambda({
      path: path.resolve(__dirname, './examples/inline/index.js')
    }).then(({ Template }) => {
      //console.log(JSON.stringify(Template, null, 2));
      return expect(Template).toEqual(
        require('./templates/lambda/inline/defaultValues.json')
      );
    });
  });

  test('Can build a Template with an inline Lambda function if the folder is empty except for index.js', () => {
    return buildLambda({
      path: path.resolve(__dirname, './examples/zipEmpty')
    }).then(({ Template }) => {
      //console.log(JSON.stringify(Template, null, 2));
      return expect(Template).toEqual(
        require('./templates/lambda/inline/defaultValues.json')
      );
    });
  });
});
