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

describe('CertificateManager', () => {
  let t = new wk.Template()

  let Certificate = new wk.CertificateManager.Certificate('Certificate')
  Certificate.DomainName = 'domain'

  t.add(Certificate)

  it('should be able to add an CertificateManager Certificate to the template', () => {
    t.Resources['Certificate'].WKResourceType.should.equal('AWS::CertificateManager::Certificate')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
