const { Template, Output, S3, Ref } = require('../dist/index');

let t = Template().addResource(S3.Bucket('Bucket'));
t.addOutput(Output('BucketName', { Value: Ref(t, 'Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
