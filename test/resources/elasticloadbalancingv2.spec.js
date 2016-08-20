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

describe('ElasticLoadBalancingV2', () => {
  let t = new wk.Template()

  let Listener = new wk.ElasticLoadBalancingV2.Listener('Listener')
  t.add(Listener)

  let ListenerRule = new wk.ElasticLoadBalancingV2.ListenerRule('ListenerRule')
  let LoadBalancer = new wk.ElasticLoadBalancingV2.LoadBalancer('LoadBalancer')
  let TargetGroup = new wk.ElasticLoadBalancingV2.TargetGroup('TargetGroup')

  it('should be able to add an ElasticLoadBalancingV2 Listener to the template', () => {
    t.Resources['Listener'].WKResourceType.should.equal('AWS::ElasticLoadBalancingV2::Listener')
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
