'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../index');

let t = new wk.Template();

let LambdaExecutionRole = new wk.IAM.Role('LambdaExecutionRole');

LambdaExecutionRole.AssumeRolePolicyDocument = {
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
};
LambdaExecutionRole.Path = '/';
LambdaExecutionRole.Policies = [
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
];

t.add(LambdaExecutionRole);

let FunctionCode = new wk.Types.AWSLambdaFunctionCode();
FunctionCode.ZipFile = new wk.Intrinsic.FnJoin('', [
  'exports.handler = function(event, context) {',
  '   console.log(event);',
  '};'
]);

let LambdaFunction = new wk.Lambda.Function('LambdaFunction');
LambdaFunction.Runtime = 'nodejs4.3';
LambdaFunction.Handler = 'index.handler';
LambdaFunction.Role.getAtt(LambdaExecutionRole, 'Arn');
LambdaFunction.Code = FunctionCode;
t.add(LambdaFunction);

let BucketName = new wk.Parameter('BucketName', {
  Type: 'String'
});
t.add(BucketName);

let S3Bucket = new wk.S3.Bucket('S3Bucket');
S3Bucket.BucketName.ref(BucketName);

let NotificationConfiguration = new wk.Types.AmazonS3NotificationConfiguration();

let LambdaConfiguration = new wk.Types.AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations();

LambdaConfiguration.Event = 's3:ObjectCreated:*';
LambdaConfiguration.Function = new wk.FnGetAtt(LambdaFunction, 'Arn');

NotificationConfiguration.LambdaConfigurations.push(LambdaConfiguration);

S3Bucket.NotificationConfiguration = NotificationConfiguration;

t.add(S3Bucket);

let LambdaInvokePermission = new wk.Lambda.Permission('LambdaInvokePermission');
LambdaInvokePermission.Action = 'lambda:InvokeFunction';

LambdaInvokePermission.Principal = 's3.amazonaws.com';
LambdaInvokePermission.SourceArn.sub('arn:aws:s3:::${BucketName}');
LambdaInvokePermission.SourceAccount.ref(wk.Pseudo.AWS_ACCOUNT_ID);
LambdaInvokePermission.FunctionName.getAtt(LambdaFunction, 'Arn');

t.add(LambdaInvokePermission);

let result = t.toJson();
if (result.Errors) {
  console.error(result.Errors);
}
console.log(t.toJson().Template);
