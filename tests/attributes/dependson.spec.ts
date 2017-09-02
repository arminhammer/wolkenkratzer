const { Template, S3, DependsOn } = require('../../src/index');

describe('DeletionPolicy', () => {
  test('Can add a DeletionPolicy', () => {
    const t = Template()
      .add(S3.Bucket('firstBucket'))
      .add(S3.Bucket('secondBucket'))
      .add(DependsOn('secondBucket', 'firstBucket'));
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        firstBucket: {
          Type: 'AWS::S3::Bucket'
        },
        secondBucket: {
          DependsOn: 'firstBucket',
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
