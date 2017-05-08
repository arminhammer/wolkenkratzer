const {
  Template,
  Output,
  addResource,
  addOutput,
  S3,
  Ref,
  build
} = require('../dist/index');

let t = Template();
t = addResource(t, S3.Bucket('Bucket'));
t = addOutput(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));

console.log(JSON.stringify(build(t), null, 2));
