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

describe('ElasticLoadBalancingV2', () => {
  let t = new wk.Template()

  let ElasticLoadBalancingListenerDefaultActions = new wk.Types.ElasticLoadBalancingListenerDefaultActions()
  ElasticLoadBalancingListenerDefaultActions.TargetGroupArn = 'dummyArn'
  ElasticLoadBalancingListenerDefaultActions.Type = 'forward'

  let Listener = new wk.ElasticLoadBalancingV2.Listener('Listener')
  Listener.DefaultActions.push(ElasticLoadBalancingListenerDefaultActions)
  Listener.LoadBalancerArn = 'dummyarn'
  Listener.Port = 80
  Listener.Protocol = 'http'
  t.add(Listener)

  let ListenerRule = new wk.ElasticLoadBalancingV2.ListenerRule('ListenerRule')
  let LoadBalancer = new wk.ElasticLoadBalancingV2.LoadBalancer('LoadBalancer')
  let TargetGroup = new wk.ElasticLoadBalancingV2.TargetGroup('TargetGroup')

  it('should be able to add an ElasticLoadBalancingV2 Listener to the template', () => {
    t.Resources['Listener'].WKResourceType.should.equal('AWS::ElasticLoadBalancingV2::Listener')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
