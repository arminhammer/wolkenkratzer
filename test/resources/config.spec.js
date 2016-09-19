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

describe('Config', () => {
  let t = new wk.Template()

  let AWSConfigConfigRuleSource = new wk.Types.AWSConfigConfigRuleSource()
  AWSConfigConfigRuleSource.Owner = 'owner'
  AWSConfigConfigRuleSource.SourceIdentifier = 'ide'

  let ConfigRule = new wk.Config.ConfigRule('ConfigRule')
  ConfigRule.Source = AWSConfigConfigRuleSource
  t.add(ConfigRule)

  let ConfigurationRecorder = new wk.Config.ConfigurationRecorder('ConfigurationRecorder')
  let DeliveryChannel = new wk.Config.DeliveryChannel('DeliveryChannel')

  it('should be able to add an Config ConfigRule to the template', () => {
    t.Resources['ConfigRule'].WKResourceType.should.equal('AWS::Config::ConfigRule')
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
