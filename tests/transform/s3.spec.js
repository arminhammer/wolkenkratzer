const { Template, S3BucketTransform } = require('../../src/index');

describe('S3 Bucket Transform', () => {
  test('Can transform a complex bucket correctly', () => {
    const AWS = require('aws-sdk');
    let s3 = S3BucketTransform('wk-transform-test', 'Main', AWS);
    let t = Template().add(s3);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
