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

describe('Elastic Load Balancing', () => {
  let t = new wk.Template()

  let LoadBalancer = new wk.ElasticLoadBalancing.LoadBalancer('LoadBalancer')
  t.add(LoadBalancer)

  it('should be able to add an ElasticLoadBalancing LoadBalancer to the template', () => {
    t.Resources['LoadBalancer'].WKResourceType.should.equal('AWS::ElasticLoadBalancing::LoadBalancer')
  })

  it('CloudFormation should validate the template', () => {
    let jsonString = t.toJson().Template
    CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if (err) {
        console.error(err)
      }
      should.exist(data)
    })
  })
})
