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

describe('SSM', () => {
  let t = new wk.Template()

  let document = new wk.SSM.Document('document')
  t.addResource(document)
  document.Content = {
    Test: 'Test'
  }

  it('should be able to add a new document to the template', () => {
    t.Resources['document'].WKResourceType.should.equal('AWS::SSM::Document')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson())
    jsonString.should.deep.equal({
      'Resources': {
        'document': {
          'Type': 'AWS::SSM::Document',
          'Properties': {
            'Content': {
              'Test': 'Test'
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
