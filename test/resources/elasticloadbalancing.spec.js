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

describe('Elastic Load Balancing', () => {
  let t = new wk.Template()

  let ElasticLoadBalancingListenerPropertyType = new wk.Types.ElasticLoadBalancingListenerPropertyType()
  ElasticLoadBalancingListenerPropertyType.InstancePort = 80
  ElasticLoadBalancingListenerPropertyType.LoadBalancerPort = 80
  ElasticLoadBalancingListenerPropertyType.Protocol = 'http'

  let LoadBalancer = new wk.ElasticLoadBalancing.LoadBalancer('LoadBalancer')
  LoadBalancer.Listeners.push(ElasticLoadBalancingListenerPropertyType)
  t.add(LoadBalancer)

  it('should be able to add an ElasticLoadBalancing LoadBalancer to the template', () => {
    t.Resources['LoadBalancer'].WKResourceType.should.equal('AWS::ElasticLoadBalancing::LoadBalancer')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
