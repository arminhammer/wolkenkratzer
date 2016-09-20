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

describe('KMS', () => {
  let t = new wk.Template()

  let Key = new wk.KMS.Key('Key')
  Key.KeyPolicy = 'policy'
  t.add(Key)

  it('should be able to add an KMS Key to the template', () => {
    t.Resources['Key'].WKResourceType.should.equal('AWS::KMS::Key')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
