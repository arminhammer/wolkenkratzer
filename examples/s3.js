const { Template, Output, S3, Ref } = require('../dist/index');

//let t = Template().addResource(S3.Bucket('Bucket'));
//t.addOutput(Output('BucketName', { Value: Ref(t, 'Bucket') }));

let t = Template()
  .add(S3.Bucket('Bucket'))
  .add(Output('BucketName', { Value: Ref('Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
