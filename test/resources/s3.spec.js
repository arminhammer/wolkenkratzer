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
const util = require('../util')

describe('S3', () => {
  let t = new wk.Template()

  let bucket = new wk.S3.Bucket('newBucket')
  bucket.BucketName = 'newBucket'

  t.add(bucket)

  let bucketPolicy = new wk.S3.BucketPolicy('newBucketPolicy')
  bucketPolicy.PolicyDocument = {
    'Statement': [{
      'Action': ['s3Client:GetObject'],
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
                    's3Client:GetObject'
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

  it('should allow for Lambda Notifications to be added to a Bucket', () => {

    let intermediateBucketName = 'bucketName'

    let TestLambdaFunction = new wk.Lambda.Function('TestLambdaFunction')
    TestLambdaFunction.Handler = 'index.handler'
    // TestLambdaFunction.Role.getAtt(LambdaExecutionRole, 'Arn')
    TestLambdaFunction.Runtime = 'nodejs4.3'
    t.add(TestLambdaFunction)

    let BucketPermission = new wk.Lambda.Permission('BucketPermission')
    BucketPermission.FunctionName.ref(TestLambdaFunction)
    BucketPermission.Action = 'lambda:InvokeFunction'
    BucketPermission.Principal = 's3.amazonaws.com'
    // TODO: Fix SourceAccount issue
    BucketPermission.SourceAccount = new wk.Intrinsic.Ref(wk.Pseudo.AWS_ACCOUNT_ID)
    BucketPermission.SourceArn = new wk.Intrinsic.FnJoin(':', ['arn', 'aws', 's3', '' , '', intermediateBucketName])
    t.add(BucketPermission)

    let ssmintermediatebucket = new wk.S3.Bucket('testbucket')
    ssmintermediatebucket.dependsOn(BucketPermission)
    ssmintermediatebucket.BucketName = intermediateBucketName
    let bucketNotifications = new wk.Types.AmazonS3NotificationConfiguration()
    let lambdaNotification = new wk.Types.AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations()
    lambdaNotification.Event = 's3:ObjectCreated:Put'
    lambdaNotification.Function = new wk.Intrinsic.FnGetAtt(TestLambdaFunction, 'Arn')
    let filter = new wk.Types.AmazonS3NotificationConfigurationConfigFilter()
    let s3KeyRule = new wk.Types.AmazonS3NotificationConfigurationConfigFilterS3KeyRules()
    s3KeyRule.Name = 'Suffix'
    s3KeyRule.Value = 'stdout'
    let s3Key = new wk.Types.AmazonS3NotificationConfigurationConfigFilterS3Key()
    s3Key.Rules.push(s3KeyRule)
    filter.S3Key = s3Key
    lambdaNotification.Filter = filter
    bucketNotifications.LambdaConfigurations.push(lambdaNotification)
    ssmintermediatebucket.NotificationConfiguration = bucketNotifications

    t.add(ssmintermediatebucket)

  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
