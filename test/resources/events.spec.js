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

describe('Events', () => {
  let t = new wk.Template()

  let Rule = new wk.Events.Rule('Rule')
  t.add(Rule)

  it('should be able to add an Events Rule to the template', () => {
    t.Resources['Rule'].WKResourceType.should.equal('AWS::Events::Rule')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
