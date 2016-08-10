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

describe('Route53', () => {
  let t = new wk.Template()

  let HealthCheck = new wk.Route53.HealthCheck('HealthCheck')
  t.addResource(HealthCheck)

  let HostedZone = new wk.Route53.HostedZone('HostedZone')
  let RecordSet = new wk.Route53.RecordSet('RecordSet')
  let RecordSetGroup = new wk.Route53.RecordSetGroup('RecordSetGroup')


  it('should be able to add an Route53 HealthCheck to the template', () => {
    t.Resources['HealthCheck'].WKResourceType.should.equal('AWS::Route53::HealthCheck')
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
