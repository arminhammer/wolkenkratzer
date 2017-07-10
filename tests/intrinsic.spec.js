const {
  Template,
  Ref,
  FnGetAtt,
  FnEquals,
  Parameter,
  Pseudo,
  S3,
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
