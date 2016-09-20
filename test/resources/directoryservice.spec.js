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

describe('DirectoryService', () => {
  let t = new wk.Template()

  let AWSDirectoryServiceMicrosoftADVpcSettings = new wk.Types.AWSDirectoryServiceMicrosoftADVpcSettings()
  AWSDirectoryServiceMicrosoftADVpcSettings.SubnetIds.push('subnet0')
  AWSDirectoryServiceMicrosoftADVpcSettings.VpcId = 'vpc0'

  let MicrosoftAD = new wk.DirectoryService.MicrosoftAD('MicrosoftAD')
  MicrosoftAD.Name = 'name'
  MicrosoftAD.Password = 'password'
  MicrosoftAD.VpcSettings = AWSDirectoryServiceMicrosoftADVpcSettings
  t.add(MicrosoftAD)

  let SimpleAD = new wk.DirectoryService.SimpleAD('SimpleAD')

  it('should be able to add an DirectoryService MicrosoftAD to the template', () => {
    t.Resources['MicrosoftAD'].WKResourceType.should.equal('AWS::DirectoryService::MicrosoftAD')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
