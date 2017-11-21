const { Transform } = require('./dist');
const AWS = require('aws-sdk');

/*Transform.S3.BucketPolicy({
  AWSClient: AWS,
  logicalName: 'logicalName',
  resourceName: 'arminhammer-cloudtrail'
})
  .then(result => {
    console.log('Result:');
    console.log(result);
  })
  .catch(console.error);
*/

Transform.S3.Bucket({
  AWSClient: AWS,
  logicalName: 'logicalName',
  resourceName: 'wk-transform-test' //'arminhammer-cloudtrail' //
})
  .then(result => {
    console.log('Result:');
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(console.error);
