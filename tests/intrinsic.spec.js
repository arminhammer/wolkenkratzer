const {
  Template,
  Ref,
  Condition,
  FnGetAtt,
  FnEquals,
  FnJoin,
  FnAnd,
  FnSub,
  Parameter,
  Pseudo,
  S3,
  Output,
  FnFindInMap
} = require('../src/index');

describe('Intrinsic', () => {
  test('Can create a Ref', () => {
    const r = Ref('Bucket');
    expect(r).toEqual({
      kind: 'Ref',
      Ref: 'Bucket'
    });
  });

  test('Can create an FnGetAtt', () => {
    const r = FnGetAtt('Function', 'ARN');
    expect(r).toEqual({
      kind: 'FnGetAtt',
      FnGetAtt: ['Function', 'ARN']
    });
  });

  test('FnGetAtt turns to valid JSON', () => {
    let t = Template().add(Parameter('BucketName', { Type: 'String' })).add(
      S3.Bucket('S3Bucket', {
        BucketName: Ref('BucketName'),
        NotificationConfiguration: {
          LambdaConfigurations: [
            {
              Event: 's3:ObjectCreated:*',
              Function: FnGetAtt('LambdaFunction', 'Arn')
            }
          ]
        }
      })
    );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: { BucketName: { Type: 'String' } },
      Resources: {
        S3Bucket: {
          Properties: {
            BucketName: { Ref: 'BucketName' },
            NotificationConfiguration: {
              LambdaConfigurations: [
                {
                  Event: 's3:ObjectCreated:*',
                  Function: { 'Fn::GetAtt': ['LambdaFunction', 'Arn'] }
                }
              ]
            }
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('Can create an FnEquals', () => {
    const r = FnEquals('Function', 'ARN');
    expect(r).toEqual({ kind: 'FnEquals', FnEquals: ['Function', 'ARN'] });
  });

  test('Can create an FnAnd', () => {
    const r = FnAnd('Function', 'ARN');
    expect(r).toEqual({
      kind: 'FnAnd',
      FnAnd: ['Function', 'ARN']
    });
  });

  test('Can create an FnAnd with intrinsics', () => {
    const r = FnAnd(FnEquals('one', 'two'), 'ARN');
    expect(r).toEqual({
      kind: 'FnAnd',
      FnAnd: [FnEquals('one', 'two'), 'ARN']
    });
  });

  test('FnAnd returns to valid JSON when using an embedded intrinsic', () => {
    let t = Template()
      .add(
        Parameter('EnvironmentType', {
          Type: 'String',
          AllowedValues: ['dev', 'prod']
        })
      )
      .add(
        S3.Bucket(
          'S3Bucket',
          {
            BucketName: 'my-bucket'
          },
          { Condition: 'isUSEastDev' }
        )
      )
      .add(
        Condition(
          'isUSEastDev',
          FnAnd(
            FnEquals(Ref(Pseudo.AWS_REGION), 'us-east-1'),
            FnEquals(Ref('EnvironmentType'), 'dev')
          )
        )
      );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        EnvironmentType: { Type: 'String', AllowedValues: ['dev', 'prod'] }
      },
      Conditions: {
        isUSEastDev: {
          'Fn::And': [
            {
              'Fn::Equals': [{ Ref: 'AWS::Region' }, 'us-east-1']
            },
            {
              'Fn::Equals': [{ Ref: 'EnvironmentType' }, 'dev']
            }
          ]
        }
      },
      Resources: {
        S3Bucket: {
          Condition: 'isUSEastDev',
          Properties: {
            BucketName: 'my-bucket'
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('Can create an FnJoin', () => {
    const r = FnJoin('', ['Function', 'ARN']);
    expect(r).toEqual({
      kind: 'FnJoin',
      Delimiter: '',
      Values: ['Function', 'ARN']
    });
  });

  test('FnJoin returns to valid JSON when using an embedded intrinsic', () => {
    let t = Template().add(Parameter('BucketName', { Type: 'String' })).add(
      S3.Bucket('S3Bucket', {
        BucketName: FnJoin('-', [
          FnFindInMap('Map', 'Variables', 'Value'),
          `MyBucket`
        ])
      })
    );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: { BucketName: { Type: 'String' } },
      Resources: {
        S3Bucket: {
          Properties: {
            BucketName: {
              'Fn::Join': [
                '-',
                [{ 'Fn::FindInMap': ['Map', 'Variables', 'Value'] }, 'MyBucket']
              ]
            }
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('Can create an FnSub', () => {
    const r = FnSub('${AWS::StackName}-EC2-SecurityGroup0');
    expect(r).toEqual({
      kind: 'FnSub',
      FnSub: '${AWS::StackName}-EC2-SecurityGroup0'
    });
  });

  test('FnSub turns to valid JSON', () => {
    let t = Template()
      .add(Parameter('BucketName', { Type: 'String' }))
      .add(
        S3.Bucket('S3Bucket', {
          BucketName: FnFindInMap('One', 'Two', 'Three'),
          NotificationConfiguration: {
            LambdaConfigurations: [
              {
                Event: 's3:ObjectCreated:*',
                Function: FnGetAtt('LambdaFunction', 'Arn')
              }
            ]
          }
        })
      )
      .add(
        Output('S3Output', {
          Description: '',
          Value: Ref('S3Bucket'),
          Export: {
            Name: FnSub('${AWS::StackName}-S3Bucket')
          }
        })
      );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: { BucketName: { Type: 'String' } },
      Resources: {
        S3Bucket: {
          Properties: {
            BucketName: {
              'Fn::FindInMap': ['One', 'Two', 'Three']
            },
            NotificationConfiguration: {
              LambdaConfigurations: [
                {
                  Event: 's3:ObjectCreated:*',
                  Function: { 'Fn::GetAtt': ['LambdaFunction', 'Arn'] }
                }
              ]
            }
          },
          Type: 'AWS::S3::Bucket'
        }
      },
      Outputs: {
        S3Output: {
          Description: '',
          Export: {
            Name: {
              'Fn::Sub': '${AWS::StackName}-S3Bucket'
            }
          },
          Value: {
            Ref: 'S3Bucket'
          }
        }
      }
    });
  });

  test('Can create an FnFindInMap', () => {
    const r = FnFindInMap('One', 'Two', 'Three');
    expect(r).toEqual({
      kind: 'FnFindInMap',
      FnFindInMap: ['One', 'Two', 'Three']
    });
  });

  test('FnFindInMap turns to valid JSON', () => {
    let t = Template().add(Parameter('BucketName', { Type: 'String' })).add(
      S3.Bucket('S3Bucket', {
        BucketName: FnFindInMap('One', 'Two', 'Three'),
        NotificationConfiguration: {
          LambdaConfigurations: [
            {
              Event: 's3:ObjectCreated:*',
              Function: FnGetAtt('LambdaFunction', 'Arn')
            }
          ]
        }
      })
    );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: { BucketName: { Type: 'String' } },
      Resources: {
        S3Bucket: {
          Properties: {
            BucketName: {
              'Fn::FindInMap': ['One', 'Two', 'Three']
            },
            NotificationConfiguration: {
              LambdaConfigurations: [
                {
                  Event: 's3:ObjectCreated:*',
                  Function: { 'Fn::GetAtt': ['LambdaFunction', 'Arn'] }
                }
              ]
            }
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });

  test('FnFindInMap turns to valid JSON with embedded Ref', () => {
    let t = Template().add(Parameter('BucketName', { Type: 'String' })).add(
      S3.Bucket('S3Bucket', {
        BucketName: FnFindInMap('One', Ref(Pseudo.AWS_REGION), 'Three'),
        NotificationConfiguration: {
          LambdaConfigurations: [
            {
              Event: 's3:ObjectCreated:*',
              Function: FnGetAtt('LambdaFunction', 'Arn')
            }
          ]
        }
      })
    );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: { BucketName: { Type: 'String' } },
      Resources: {
        S3Bucket: {
          Properties: {
            BucketName: {
              'Fn::FindInMap': ['One', { Ref: 'AWS::Region' }, 'Three']
            },
            NotificationConfiguration: {
              LambdaConfigurations: [
                {
                  Event: 's3:ObjectCreated:*',
                  Function: { 'Fn::GetAtt': ['LambdaFunction', 'Arn'] }
                }
              ]
            }
          },
          Type: 'AWS::S3::Bucket'
        }
      }
    });
  });
});
