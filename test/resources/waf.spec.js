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

describe('WAF', () => {
  let t = new wk.Template()

  let ByteMatchSet = new wk.WAF.ByteMatchSet('ByteMatchSet')
  ByteMatchSet.Name = 'dummyName'
  t.add(ByteMatchSet)

  let IPSet = new wk.WAF.IPSet('IPSet')
  let Rule = new wk.WAF.Rule('Rule')
  let SizeConstraintSet = new wk.WAF.SizeConstraintSet('SizeConstraintSet')
  let SqlInjectionMatchSet = new wk.WAF.SqlInjectionMatchSet('SqlInjectionMatchSet')
  let WebACL = new wk.WAF.WebACL('WebACL')
  let XssMatchSet = new wk.WAF.XssMatchSet('XssMatchSet')

  it('should be able to add an WAF ByteMatchSet to the template', () => {
    t.Resources['ByteMatchSet'].WKResourceType.should.equal('AWS::WAF::ByteMatchSet')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
