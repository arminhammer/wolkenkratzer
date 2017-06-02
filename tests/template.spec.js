const { Template } = require('../src/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    const t = Template();
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can take an existing Template as a parameter', () => {
    const s3static = require('../tests/templates/s3static.json');
    const t = Template().import(s3static);
    console.log(t);
    let res = t.build();
    expect(res).toEqual(s3static);
  });
});
