'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../dist/index');

let region = 'us-east-1';
const aws = require('aws-sdk');
const s3 = new aws.S3({ region: region });

s3
  .listBuckets()
  .promise()
  .then(data => {
    let bucketName = data.Buckets[0].Name;
    return wk.Macro.S3.Bucket('armingtest', 'mybucket', region);
  })
  .then(bucket => {
    let t = new wk.Template();
    t.add(bucket);
    let result = t.toJson();
    if (result.Errors) {
      console.error(result.Errors);
    } else {
      console.log(result.Template);
    }
  })
  .catch(e => {
    console.error(e);
  });
