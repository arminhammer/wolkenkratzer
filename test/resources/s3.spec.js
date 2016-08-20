/**
 * Created by arming on 6/5/16.
 */

/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()

const wk = require(path.join(__dirname, '..', '..', 'index'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('S3', () => {
  let t = new wk.Template()

  let bucket = new wk.S3.Bucket('newBucket')
  bucket.BucketName = 'newBucket'

  t.add(bucket)

  let bucketPolicy = new wk.S3.BucketPolicy('newBucketPolicy')
  bucketPolicy.PolicyDocument = {
    'Statement': [{
      'Action': ['s3:GetObject'],
      'Effect': 'Allow',
      'Resource': '*',
      'Principal': '*'
    }]
  }
  bucketPolicy.Bucket.ref(bucket)

  t.add(bucketPolicy)

  it('should be able to add a bucket to the template', () => {
    t.Resources['newBucket'].WKResourceType.should.equal('AWS::S3::Bucket')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson().Template)
    jsonString.should.deep.equal({
      'Resources': {
        'newBucket': {
          'Type': 'AWS::S3::Bucket',
          'Properties': {
            'BucketName': 'newBucket'
          }
        },
        'newBucketPolicy': {
          'Type': 'AWS::S3::BucketPolicy',
          'Properties': {
            'Bucket': {
              'Ref': 'newBucket'
            },
            'PolicyDocument': {
              'Statement': [
                {
                  'Action': [
                    's3:GetObject'
                  ],
                  'Effect': 'Allow',
                  'Resource': '*',
                  'Principal': '*'
                }
              ]
            }
          }
        }
      },
      'AWSTemplateFormatVersion': '2010-09-09'
    })
  })

  it('CloudFormation should validate the template', () => {
    let jsonString = t.toJson().Template
    CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if (err) {
        console.error(err)
      }
      should.exist(data)
    })
  })
})
