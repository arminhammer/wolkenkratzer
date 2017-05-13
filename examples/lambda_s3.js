const {
  Template,
  S3,
  Lambda,
  IAM,
  Ref,
  Parameter,
  FnGetAtt
} = require('../dist/index');
debugger;
let t = Template()
  .add(Parameter('BucketName', { Type: 'String' }))
  .add(
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
  )
  .add(
    Lambda.Function('LambdaFunction', {
      Handler: 'index.handler',
      Role: FnGetAtt('LambdaExecutionRole', 'Arn'),
      Code: {
        ZipFile: {
          'Fn::Join': [
            '',
            [
              'exports.handler = function(event, context) {',
              '   console.log(event);',
              '};'
            ]
          ]
        }
      },
      Runtime: 'nodejs4.3'
    })
  )
  .add(
    Lambda.Permission('LambdaInvokePermission', {
      FunctionName: {
        'Fn::GetAtt': ['LambdaFunction', 'Arn']
      },
      Action: 'lambda:InvokeFunction',
      Principal: 's3.amazonaws.com',
      SourceArn: {
        'Fn::Sub': 'arn:aws:s3:::${BucketName}'
      },
      SourceAccount: {
        Ref: 'AWS::AccountId'
      }
    })
  )
  .add(
    IAM.Role('LambdaExecutionRole', {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: ['lambda.amazonaws.com']
            },
            Action: ['sts:AssumeRole']
          }
        ]
      },
      Path: '/',
      Policies: [
        {
          PolicyName: 'root',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: ['logs:*'],
                Resource: 'arn:aws:logs:*:*:*'
              }
            ]
          }
        }
      ]
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
