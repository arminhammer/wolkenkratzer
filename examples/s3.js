const { Template, Output, S3, Ref } = require('../dist/index');

const t = Template()
  .add(S3.Bucket('Bucket'))
  .add(Output('BucketName', { Value: Ref('Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
