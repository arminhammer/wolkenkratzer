const { Transform } = require('./dist');
const AWS = require('aws-sdk');

Transform.S3.BucketPolicy('arminhammer-cloudtrail', AWS, 'logicalName')
  .then(result => {
    console.log('Result:');
    console.log(result);
  })
  .catch(console.error);
/*
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
