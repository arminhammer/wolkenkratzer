const { S3, Template } = require('../src/index');

describe('Template putOut()', () => {
  test('Test putOut() function, set BucketName as an Output', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'bucket-name' }));
    t = t.putOut('Main.BucketName');
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Outputs: {
        MainBucketName: {
          Description: 'The BucketName of the Main S3 Bucket',
          Value: {
            Ref: 'Main'
          }
        }
      },
      Resources: {
        Main: {
          Properties: { BucketName: 'bucket-name' },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('Test putOut() function, set BucketName as an Output with a custom name', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'bucket-name' }));
    t = t.putOut('Main.BucketName', 'CustomOutputName');
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Outputs: {
        CustomOutputName: {
          Description: 'The BucketName of the Main S3 Bucket',
          Value: {
            Ref: 'Main'
          }
        }
      },
      Resources: {
        Main: {
          Properties: { BucketName: 'bucket-name' },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
