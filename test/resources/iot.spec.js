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

describe('IoT', () => {
  let t = new wk.Template()

  let Certificate = new wk.IoT.Certificate('Certificate')
  Certificate.CertificateSigningRequest = 'request'
  Certificate.Status = 'dummystatus'
  t.add(Certificate)

  let Policy = new wk.IoT.Policy('Policy')
  let PolicyPrincipalAttachment = new wk.IoT.PolicyPrincipalAttachment('PolicyPrincipalAttachment')
  let Thing = new wk.IoT.Thing('Thing')
  let ThingPrincipalAttachment = new wk.IoT.ThingPrincipalAttachment('ThingPrincipalAttachment')
  let TopicRule = new wk.IoT.TopicRule('TopicRule')

  it('should be able to add an IoT Certificate to the template', () => {
    t.Resources['Certificate'].WKResourceType.should.equal('AWS::IoT::Certificate')
  })

  it ('CloudFormation should validate the template', (done) => {
    let jsonString = t.toJson().Template
    CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if (err) {
        console.error(err)
        console.log(t.toJson().Errors)
      }
      should.exist(data)
      done()
    })
  })
})
