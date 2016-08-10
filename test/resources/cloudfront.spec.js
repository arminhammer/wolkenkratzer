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

describe('CloudFront', () => {
  let t = new wk.Template()

  let Distribution = new wk.CloudFront.Distribution('Distribution')
  t.addResource(Distribution)

  it('should be able to add a Distribution to the template', () => {
    t.Resources['Distribution'].WKResourceType.should.equal('AWS::CloudFront::Distribution')
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
