const { Template, Parameter, Output, S3 } = require('../src/index');

describe('Template Merge', () => {
  test('Test parameterize() function, set BucketName as a Parameter', () => {
    let t = Template().add(
      S3.Bucket('Main', { BucketName: 'This is a bucket' })
    );
    debugger;
    t = t.parameterize('Main.BucketName');
    debugger;
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        MainBucketName: {
          Type: 'String'
        }
      },
      Resources: {
        Main: {
          Properties: { BucketName: { Ref: 'MainBucketName' } },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
