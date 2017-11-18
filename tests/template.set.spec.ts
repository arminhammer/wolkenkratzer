const { S3, Template } = require('../src/index');

describe('Template Set', () => {
  test('Test set() function, set BucketName as a new value', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'bucket-name' }));
    t = t.set('Main.BucketName', 'new-bucket-name');
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: { BucketName: 'new-bucket-name' },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
