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

describe('CloudFormation', () => {
  let t = new wk.Template()

  let Authentication = new wk.CloudFormation.Authentication('Authentication')
  t.addResource(Authentication)
  let CustomResource = new wk.CloudFormation.CustomResource('CustomResource')
  let Init = new wk.CloudFormation.Init('Init')
  let Interface = new wk.CloudFormation.Interface('Interface')
  let Stack = new wk.CloudFormation.Stack('Stack')
  let WaitCondition = new wk.CloudFormation.WaitCondition('WaitCondition')
  let WaitConditionHandle = new wk.CloudFormation.WaitConditionHandle('WaitConditionHandle')

  let account = new wk.ApiGateway.Account('account')
  t.addResource(account)

  it('should be able to add an CloudFormation Authentication to the template', () => {
    t.Resources['Authentication'].WKResourceType.should.equal('AWS::CloudFormation::Authentication')
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
