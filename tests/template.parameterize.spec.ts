const { S3, Template } = require('../src/index');

describe('Template Parameterize', () => {
  test('Test parameterize() function, set BucketName as a Parameter', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'bucket-name' }));
    t = t.parameterize('Main.BucketName');
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

  test('Test parameterize() function, set BucketName as a Parameter with a custom name', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'bucket-name' }));
    t = t.parameterize('Main.BucketName', 'CustomParameterName');
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        CustomParameterName: {
          Type: 'String'
        }
      },
      Resources: {
        Main: {
          Properties: { BucketName: { Ref: 'CustomParameterName' } },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
