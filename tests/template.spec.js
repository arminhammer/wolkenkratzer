const {
  Template,
  Output,
  add,
  json,
  S3,
  Ref,
  Description
} = require('../dist/index');

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

  /*test('Can turn create a valid AMI Template', () => {
    let t = Template();
    t = add(
      t,
      Description({
        Content: 'Base template that always uses the newest Amazon Linux AMI'
      })
    );
    // t = add(t, S3.Bucket('Bucket'));
    // t = add(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));
    // t = add(t, Output({ Name: 'BucketName', Value: Ref(t, 'Bucket') }));
    expect(JSON.parse(json(t))).toEqual(require('./templates/ami.json'));
  });*/
});
