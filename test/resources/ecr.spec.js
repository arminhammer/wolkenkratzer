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

describe('ECR', () => {
  let t = new wk.Template()

  let repository = new wk.ECR.Repository('repository')
  repository.RepositoryName = 'test-repository'
  repository.RepositoryPolicyText = {
    'Version': '2008-10-17',
    'Statement': [
      {
        'Sid': 'AllowPushPull',
        'Effect': 'Allow',
        'Principal': {
          'AWS': [
            'arn:aws:iam::123456789012:user/Bob',
            'arn:aws:iam::123456789012:user/Alice'
          ]
        },
        'Action': [
          'ecr:GetDownloadUrlForLayer',
          'ecr:BatchGetImage',
          'ecr:BatchCheckLayerAvailability',
          'ecr:PutImage',
          'ecr:InitiateLayerUpload',
          'ecr:UploadLayerPart',
          'ecr:CompleteLayerUpload'
        ]
      }
    ]
  }
  t.add(repository)

  it('should be able to add a new repository to the template', () => {
    t.Resources['repository'].WKResourceType.should.equal('AWS::ECR::Repository')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson().Template)
    jsonString.should.deep.equal({
      'Resources': {
        'repository': {
          'Type': 'AWS::ECR::Repository',
          'Properties': {
            'RepositoryName': 'test-repository',
            'RepositoryPolicyText': {
              'Version': '2008-10-17',
              'Statement': [
                {
                  'Sid': 'AllowPushPull',
                  'Effect': 'Allow',
                  'Principal': {
                    'AWS': [
                      'arn:aws:iam::123456789012:user/Bob',
                      'arn:aws:iam::123456789012:user/Alice'
                    ]
                  },
                  'Action': [
                    'ecr:GetDownloadUrlForLayer',
                    'ecr:BatchGetImage',
                    'ecr:BatchCheckLayerAvailability',
                    'ecr:PutImage',
                    'ecr:InitiateLayerUpload',
                    'ecr:UploadLayerPart',
                    'ecr:CompleteLayerUpload'
                  ]
                }
              ]
            }
          }
        }
      },
      'AWSTemplateFormatVersion': '2010-09-09'
    })
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
