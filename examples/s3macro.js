/**
 * Created by arming on 9/19/16.
 */

'use strict'

const wk = require('./../index')
const aws = require('aws-sdk')
const s3 = new aws.S3({ region: 'us-east-1' })

s3.listBuckets().promise()
.then((data) => {
  let bucketName = data.Buckets[0].Name
  return wk.Macro.S3.Bucket(bucketName)
})
.then((bucket) => {
  let t = new wk.Template()
  t.add(bucket)
  let result = t.toJson()
  if (result.Errors) {
    console.error(result.Errors)
  }
  console.log(result.Template)
})
.catch((e) => {
  console.error(e)
})
