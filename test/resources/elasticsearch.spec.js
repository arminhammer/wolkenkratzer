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

describe('Elasticsearch', () => {
  let t = new wk.Template()

  let Domain = new wk.Elasticsearch.Domain('Domain')
  t.add(Domain)

  it('should be able to add an ElasticSearch Domain to the template', () => {
    t.Resources['Domain'].WKResourceType.should.equal('AWS::Elasticsearch::Domain')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
