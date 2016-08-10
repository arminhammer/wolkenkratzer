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

// const _ = require('lodash')
const wk = require(path.join(__dirname, '..', '..', 'index'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

/*
describe('CodePipeline', () => {
  let t = new wk.Template()

  let s3location = new wk.Parameter('s3bucketlocation', { Type: 'String' })
  t.addParameter(s3location)

  let rolearn = new wk.Parameter('rolearn', { Type: 'String' })
  t.addParameter(rolearn)

  let customActionType = new wk.CodePipeline.CustomActionType('customActionType')
  customActionType.Category = 'Source'
  customActionType.InputArtifactDetails = new wk.Types.AWSCodePipelineCustomActionTypeArtifactDetails({ MaximumCount: 1, MinimumCount: 0 })
  customActionType.OutputArtifactDetails = new wk.Types.AWSCodePipelineCustomActionTypeArtifactDetails({ MaximumCount: 1, MinimumCount: 0 })
  customActionType.Provider = 'Provider'
  t.addResource(customActionType)

  let stage = new wk.Types.AWSCodePipelinePipelineStages()
  stage.Name = 'stage0'
  stage.Actions.push(new wk.Types.AWSCodePipelinePipelineStagesActions())

  let pipeline = new wk.CodePipeline.Pipeline('pipeline')
  pipeline.ArtifactStore = new wk.Types.AWSCodePipelinePipelineArtifactStore({
    Location: new wk.Intrinsic.Ref(s3location),
    Type: 'S3'
  })
  pipeline.RoleArn.ref(rolearn)
  pipeline.Stages.push(stage)
  t.addResource(pipeline)

  console.log(t.toJson())

  it('should be able to add a custom action type to the template', () => {
    t.Resources[ 'customActionType' ].resourceType.should.equal('AWS::CodePipeline::CustomActionType')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson())
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
    let jsonString = t.toJson()
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
   */