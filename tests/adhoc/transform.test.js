const { Transform } = require('../../dist');
const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
/*
Transform.S3.BucketPolicy('arminhammer-cloudtrail', AWS, 'logicalName')
  .then(result => {
    console.log('Result:');
    console.log(result);
  })
  .catch(console.error);

Transform.S3.Bucket(
  'wk-transform-test', //'arminhammer-cloudtrail
  AWS,
  'logicalName'
)
  .then(result => {
    console.log('Result:');
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(console.error);
*/

Transform.EC2.EgressOnlyInternetGateway(
  'eigw-0e1d4ea8cb7e777c5',
  AWS,
  'logicalName'
)
  .then(result => {
    console.log('Result:');
    console.log(result);
  })
  .catch(console.error);
