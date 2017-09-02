const { Template, S3, DeletionPolicy } = require('../../src/index');

describe('DeletionPolicy', () => {
  test('Can add a DeletionPolicy', () => {
    let t = Template()
      .add(S3.Bucket('myS3Bucket'))
      .add(DeletionPolicy('myS3Bucket', 'Retain'));
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        myS3Bucket: {
          DeletionPolicy: 'Retain',
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('Cannot add an invalid DeletionPolicy', () => {
    const t = Template().add(S3.Bucket('myS3Bucket'));
    expect(() => {
      t.add(DeletionPolicy('myS3Bucket', 'Wrong'));
    }).toThrow(SyntaxError);
  });
});
