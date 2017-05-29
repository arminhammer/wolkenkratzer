const { Template, S3BucketTransform } = require('../dist/index');

const AWS = require('aws-sdk');
S3BucketTransform('wk-transform-test', 'Main', AWS)
  .then(s3 => {
    let t = Template().add(s3);
    console.log(JSON.stringify(t.build(), null, 2));
  })
  .catch(console.error);
