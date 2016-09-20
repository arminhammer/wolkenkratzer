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

describe ('CloudTrail', () => {
  let t = new wk.Template()

  let Trail = new wk.CloudTrail.Trail('Trail')
  Trail.IsLogging = true
  Trail.S3BucketName = 'testBucket'
  t.add(Trail)

  it ('should be able to add a CloudTrail to the template', () => {
    t.Resources['Trail'].WKResourceType.should.equal('AWS::CloudTrail::Trail')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
