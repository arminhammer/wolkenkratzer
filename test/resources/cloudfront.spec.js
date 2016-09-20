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

describe('CloudFront', () => {
  let t = new wk.Template()

  let CloudFrontForwardedValues = new wk.Types.CloudFrontForwardedValues()
  CloudFrontForwardedValues.QueryString = false

  let CloudFrontDefaultCacheBehavior = new wk.Types.CloudFrontDefaultCacheBehavior()
  CloudFrontDefaultCacheBehavior.ForwardedValues = CloudFrontForwardedValues
  CloudFrontDefaultCacheBehavior.TargetOriginId = 'originid'
  CloudFrontDefaultCacheBehavior.ViewerProtocolPolicy = 'role'

  let CloudFrontDistributionConfigOrigin = new wk.Types.CloudFrontDistributionConfigOrigin()
  CloudFrontDistributionConfigOrigin.DomainName = 'domain'
  CloudFrontDistributionConfigOrigin.Id = 'id'

  let CloudFrontDistributionConfig = new wk.Types.CloudFrontDistributionConfig()
  CloudFrontDistributionConfig.DefaultCacheBehavior = CloudFrontDefaultCacheBehavior
  CloudFrontDistributionConfig.Enabled = false
  CloudFrontDistributionConfig.Origins.push(CloudFrontDistributionConfigOrigin)

  let Distribution = new wk.CloudFront.Distribution('Distribution')
  Distribution.DistributionConfig = CloudFrontDistributionConfig
  t.add(Distribution)

  it('should be able to add a Distribution to the template', () => {
    t.Resources['Distribution'].WKResourceType.should.equal('AWS::CloudFront::Distribution')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
