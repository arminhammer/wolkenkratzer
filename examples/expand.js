const { Template, S3 } = require('../dist/index');

let t = Template()
  .add(S3.Bucket('Bucket'))
  .putOut('Bucket', 'BucketS3BucketOutput')
  .parameterize('Bucket.BucketName', 'BucketS3BucketParam');

console.log(JSON.stringify(t.build(), null, 2));
