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

describe('SDB', () => {
  let t = new wk.Template()

  let domain = new wk.SDB.Domain('domain')
  t.addResource(domain)

  it('should be able to add a new domain to the template', () => {
    t.Resources['domain'].WKResourceType.should.equal('AWS::SDB::Domain')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson().Template)
    jsonString.should.deep.equal({
      'Resources': {
        'domain': {
          'Type': 'AWS::SDB::Domain',
          'Properties': {}
        }
      },
      'AWSTemplateFormatVersion': '2010-09-09'
    })
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
