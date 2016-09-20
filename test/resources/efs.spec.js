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

describe('EFS', () => {
  let t = new wk.Template()

  let FileSystem = new wk.EFS.FileSystem('FileSystem')
  t.add(FileSystem)

  let MountTarget = new wk.EFS.MountTarget('MountTarget')

  it('should be able to add an EFS FileSystem to the template', () => {
    t.Resources['FileSystem'].WKResourceType.should.equal('AWS::EFS::FileSystem')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
