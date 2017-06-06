const { Template, S3 } = require('../dist/index');

let t = Template().add(S3.Bucket('Bucket'), {
  Output: true,
  Parameters: ['BucketName']
});

console.log(JSON.stringify(t.build(), null, 2));
