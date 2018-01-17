const { Parameter, Pseudo, Ref, S3, Template } = require('../src/index');

describe('Template and Pseudo attributes', () => {
  test('Test AWS::AccountId', () => {
    const t = Template().add(
      S3.Bucket('Main', { BucketName: Ref(Pseudo.AWS_ACCOUNT_ID) })
    );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            BucketName: { Ref: 'AWS::AccountId' }
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
