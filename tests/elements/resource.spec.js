const {
  Condition,
  FnEquals,
  Pseudo,
  Ref,
  Template,
  S3,
  SNS
} = require('../../src/index');

describe('Resource', () => {
  test('Check for types of immediate attributes', () => {
    let t = Template();
    expect(() => {
      t.add(S3.Bucket('Main', { Name: 'This is a bucket' }));
    }).toThrow(SyntaxError);
  });

  test('Test for required attributes', () => {
    let t = Template();
    expect(() => {
      t.add(SNS.TopicPolicy('Main', { Topics: ['SampleTopic'] }));
    }).toThrow(SyntaxError);
  });

  /*test('Check for Array requirement', () => {
    let t = Template();
    expect(() => {
      t.add(S3.Bucket('Main', { Tags: 'This is a bucket' }));
    }).toThrow(SyntaxError);
  });*/

  test('Add resource pack with Output', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'name' }), {
      Output: true
    });
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'name'
          }
        }
      },
      Outputs: {
        MainS3BucketOutput: {
          Value: { Ref: 'Main' },
          Export: { Name: { 'Fn::Sub': '${AWS::StackName}-S3-Bucket-Main' } }
        }
      }
    });
  });

  test('Add resource pack with Output and Parameter', () => {
    let t = Template().add(S3.Bucket('Main', { BucketName: 'name' }), {
      Output: true,
      Parameters: ['BucketName']
    });
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        MainS3BucketParam: {
          Type: 'String'
        }
      },
      Resources: {
        Main: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: { Ref: 'MainS3BucketParam' }
          }
        }
      },
      Outputs: {
        MainS3BucketOutput: {
          Value: { Ref: 'Main' },
          Export: { Name: { 'Fn::Sub': '${AWS::StackName}-S3-Bucket-Main' } }
        }
      }
    });
  });

  test('Can create a conditional Resource and Output that automatically includes the Condition', () => {
    let t = Template()
      .add(Condition('isProd', FnEquals(Ref(Pseudo.AWS_REGION), 'us-east-1')))
      .add(S3.Bucket('Main', null, { Condition: 'isProd' }), {
        Output: true
      });
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Condition: 'isProd',
          Type: 'AWS::S3::Bucket'
        }
      },
      Conditions: {
        isProd: {
          'Fn::Equals': [
            {
              Ref: 'AWS::Region'
            },
            'us-east-1'
          ]
        }
      },
      Outputs: {
        MainS3BucketOutput: {
          Value: { Ref: 'Main' },
          Condition: 'isProd',
          Export: { Name: { 'Fn::Sub': '${AWS::StackName}-S3-Bucket-Main' } }
        }
      }
    });
  });

  test('Can remove a Resource from a Template once it has been added', () => {
    const resource = S3.Bucket('Main', { BucketName: 'This is a bucket' });
    let t = Template()
      .add(resource)
      .remove(resource);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Resource from a Template once it has been added, by string Name', () => {
    const resource = S3.Bucket('Main', { BucketName: 'This is a bucket' });
    let t = Template()
      .add(resource)
      .remove('Main');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
