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

describe('Logs', () => {
  let t = new wk.Template()

  let Destination = new wk.Logs.Destination('Destination')
  t.add(Destination)

  let LogGroup = new wk.Logs.LogGroup('LogGroup')
  let LogStream = new wk.Logs.LogStream('LogStream')
  let MetricFilter = new wk.Logs.MetricFilter('MetricFilter')
  let SubscriptionFilter = new wk.Logs.SubscriptionFilter('SubscriptionFilter')

  it('should be able to add an Logs Destination to the template', () => {
    t.Resources['Destination'].WKResourceType.should.equal('AWS::Logs::Destination')
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
