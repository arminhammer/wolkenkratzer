/**
 * Created by arming on 6/2/16.
 */
const cloudpotato = require('./index')
const s3 = require('./resources/s3')

let t = new cloudpotato.Template()

let bucket = new s3.Bucket('newBucket')
bucket.BucketName = 'newBucket'

t.addResource(bucket)

let bucketPolicy = new s3.BucketPolicy('newBucketPolicy')
bucketPolicy.PolicyDocument = {
  "Statement":[{
    "Action":["s3:GetObject"],
    "Effect":"Allow",
    "Resource": "*",
    "Principal":"*"
  }]
}

bucketPolicy.Bucket.ref(bucket)

t.addResource(bucketPolicy)

console.log('bucketPolicy')
console.log(bucketPolicy)

let vpcCiderParam = new cloudpotato.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

console.log(JSON.stringify(t, null, 2))
console.log(t.toJson())
