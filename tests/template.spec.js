const { Template, Output, add, json, S3, Ref } = require('../dist/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    let t = Template();
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can turn create a valid S3 Template', () => {
    let t = Template();
    t = add(t, S3.Bucket('Bucket'));
    // t = add(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));
    t = add(t, Output({ Name: 'BucketName', Value: Ref(t, 'Bucket') }));
    expect(JSON.parse(json(t))).toEqual(require('./templates/s3.json'));
  });
});
