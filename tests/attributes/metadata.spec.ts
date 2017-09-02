const { Template, S3, ResourceMetadata } = require('../../src/index');

describe('DeletionPolicy', () => {
  test('Can add a DeletionPolicy', () => {
    const t = Template()
      .add(S3.Bucket('firstBucket'))
      .add(
        ResourceMetadata('firstBucket', {
          Object1: 'Location1',
          Object2: 'Location2'
        })
      );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        firstBucket: {
          Metadata: { Object1: 'Location1', Object2: 'Location2' },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
