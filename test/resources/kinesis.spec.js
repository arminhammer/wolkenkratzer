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

describe('Kinesis', () => {
  let t = new wk.Template()

  let Stream = new wk.Kinesis.Stream('Stream')
  Stream.ShardCount = 1
  t.add(Stream)

  it('should be able to add an API Gateway Stream to the template', () => {
    t.Resources['Stream'].WKResourceType.should.equal('AWS::Kinesis::Stream')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
