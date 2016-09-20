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

describe('CloudFormation', () => {
  let t = new wk.Template()

  let Stack = new wk.CloudFormation.Stack('Stack')
  Stack.TemplateURL = 'url'
  t.add(Stack)

  let CustomResource = new wk.CloudFormation.CustomResource('CustomResource')
  let Init = new wk.CloudFormation.Init('Init')
  let Interface = new wk.CloudFormation.Interface('Interface')
  let Authentication = new wk.CloudFormation.Authentication('Authentication')
  let WaitCondition = new wk.CloudFormation.WaitCondition('WaitCondition')
  let WaitConditionHandle = new wk.CloudFormation.WaitConditionHandle('WaitConditionHandle')

  let account = new wk.ApiGateway.Account('account')
  t.add(account)

  it('should be able to add an CloudFormation Authentication to the template', () => {
    t.Resources['Stack'].WKResourceType.should.equal('AWS::CloudFormation::Stack')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
