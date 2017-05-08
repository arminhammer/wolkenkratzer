const {
  Template,
  Output,
  Condition,
  addResource,
  CustomResource,
  addCondition,
  addOutput,
  addDescription,
  addParameter,
  S3,
  IAM,
  Lambda,
  EC2,
  Ref,
  FnGetAtt,
  FnEquals,
  Description,
  Parameter,
  build
} = require('../dist/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    let t = Template();
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
