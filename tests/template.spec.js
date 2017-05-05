const {
  Template,
  Output,
  add,
  json,
  S3,
  Ref,
  Description,
  Parameter
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
    t = add(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));
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
    t = add(
      t,
      Parameter('InstanceType', {
        Description: 'EC2 instance type',
        Type: 'String',
        Default: 't2.micro',
        AllowedValues: [
          't1.micro',
          't2.nano',
          't2.micro',
          't2.small',
          't2.medium',
          'm1.small',
          'm1.medium',
          'm1.large',
          'm1.xlarge',
          'm2.xlarge',
          'm2.2xlarge',
          'm2.4xlarge',
          'm3.medium',
          'm3.large',
          'm3.xlarge',
          'm3.2xlarge',
          'c1.medium',
          'c1.xlarge',
          'c3.large',
          'c3.xlarge',
          'c3.2xlarge',
          'c3.4xlarge',
          'c3.8xlarge',
          'c4.large',
          'c4.xlarge',
          'c4.2xlarge',
          'c4.4xlarge',
          'c4.8xlarge',
          'g2.2xlarge',
          'r3.large',
          'r3.xlarge',
          'r3.2xlarge',
          'r3.4xlarge',
          'r3.8xlarge',
          'i2.xlarge',
          'i2.2xlarge',
          'i2.4xlarge',
          'i2.8xlarge',
          'd2.xlarge',
          'd2.2xlarge',
          'd2.4xlarge',
          'd2.8xlarge',
          'hi1.4xlarge',
          'hs1.8xlarge',
          'cr1.8xlarge',
          'cc2.8xlarge',
          'cg1.4xlarge'
        ],
        ConstraintDescription: 'Must be a valid EC2 instance type.'
      })
    );
    t = add(
      t,
      Parameter('AMI', {
        Description: 'Instance AMI',
        Type: 'String',
        Default: 'Amazon',
        AllowedValues: [
          'Amazon',
          'Ubuntu',
          'RedHat',
          'Windows',
          'CentOS',
          'Debian',
          'Fedora'
        ]
      })
    );
    // t = add(t, S3.Bucket('Bucket'));
    // t = add(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));
    // t = add(t, Output({ Name: 'BucketName', Value: Ref(t, 'Bucket') }));
    expect(JSON.parse(json(t))).toEqual(require('./templates/ami.json'));
  });*/
});
