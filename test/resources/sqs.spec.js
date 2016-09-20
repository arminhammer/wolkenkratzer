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

describe('SQS', () => {
  let t = new wk.Template()

  let Queue = new wk.SQS.Queue('Queue')
  t.add(Queue)

  let QueuePolicy = new wk.SQS.QueuePolicy('QueuePolicy')

  it('should be able to add an SQS Queue to the template', () => {
    t.Resources['Queue'].WKResourceType.should.equal('AWS::SQS::Queue')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})