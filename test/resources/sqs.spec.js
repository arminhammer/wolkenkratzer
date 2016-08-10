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

describe('SQS', () => {
  let t = new wk.Template()

  let Queue = new wk.SQS.Queue('Queue')
  t.addResource(Queue)

  let QueuePolicy = new wk.SQS.QueuePolicy('QueuePolicy')

  it('should be able to add an SQS Queue to the template', () => {
    t.Resources['Queue'].WKResourceType.should.equal('AWS::SQS::Queue')
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
