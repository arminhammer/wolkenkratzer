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

describe('DirectoryService', () => {
  let t = new wk.Template()

  let MicrosoftAD = new wk.DirectoryService.MicrosoftAD('MicrosoftAD')
  t.addResource(MicrosoftAD)

  let SimpleAD = new wk.DirectoryService.SimpleAD('SimpleAD')

  it('should be able to add an DirectoryService MicrosoftAD to the template', () => {
    t.Resources['MicrosoftAD'].WKResourceType.should.equal('AWS::DirectoryService::MicrosoftAD')
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
