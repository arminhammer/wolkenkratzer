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
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

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

  it('CloudFormation should validate the template', (done) => {
    let jsonString = t.toJson().Template
    return CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if (err) {
        console.error(err)
        console.log(t.toJson().Errors)
      }
      should.exist(data)
      done()
    })
  })
})
