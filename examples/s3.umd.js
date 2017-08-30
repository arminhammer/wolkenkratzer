const { Template, Output, S3, Ref } = require('../dist/index.umd');

const t = Template().add(S3.Bucket('Bucket'), { Output: true });
console.log(JSON.stringify(t.build(), null, 2));
