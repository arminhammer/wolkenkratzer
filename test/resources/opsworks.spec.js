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

describe('OpsWorks', () => {
  let t = new wk.Template()

  let App = new wk.OpsWorks.App('App')
  App.Name = 'name'
  App.StackId = 'stackid'
  App.Type = 'java'
  t.add(App)

  let ElasticLoadBalancerAttachment = new wk.OpsWorks.ElasticLoadBalancerAttachment('ElasticLoadBalancerAttachment')
  let Instance = new wk.OpsWorks.Instance('Instance')
  let Layer = new wk.OpsWorks.Layer('Layer')
  let Stack = new wk.OpsWorks.Stack('Stack')

  it('should be able to add an OpsWorks App to the template', () => {
    t.Resources['App'].WKResourceType.should.equal('AWS::OpsWorks::App')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
