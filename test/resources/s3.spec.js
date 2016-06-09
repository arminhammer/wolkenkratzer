/**
 * Created by arming on 6/5/16.
 */

/**
 * Created by arming on 6/5/16.
 */
'use strict';

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0;
chai.should()
var should = require('chai').should();

//const _ = require('lodash')
const cloudpotato = require(path.join(__dirname,'..','..','index'))
const s3 = require(path.join(__dirname,'..','..','resources/s3'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('S3', () => {
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

  it('Should be able to add a bucket to the template', () => {
    t.Resources['newBucket'].resource_type.should.equal('AWS::S3::Bucket')
  })

  it('Should generate the expected JSON template', () => {
    let jsonString = t.toJson()
    jsonString.should.equal(JSON.stringify({
        "Description": null,
        "Metadata": {},
        "Conditions": {},
        "Mappings": {},
        "Outputs": {},
        "Parameters": {},
        "Resources": {
          "newBucket": {
            "Type": "AWS::S3::Bucket",
            "Properties": {
              "BucketName": "newBucket"
            }
          },
          "newBucketPolicy": {
            "Type": "AWS::S3::BucketPolicy",
            "Properties": {
              "Bucket": {
                "Ref": "newBucket"
              },
              "PolicyDocument": {
                "Statement": [
                  {
                    "Action": [
                      "s3:GetObject"
                    ],
                    "Effect": "Allow",
                    "Resource": "*",
                    "Principal": "*"
                  }
                ]
              }
            }
          }
        },
        "Version": "2010-09-09"
      }, null, 2)
    )
  })

  it('CloudFormation should validate the template', () => {
    let jsonString = t.toJson()
    CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if(err) {
        console.error(err)
      }
      should.exist(data)
    })
  })

})