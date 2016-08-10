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

describe('OpsWorks', () => {
  let t = new wk.Template()

  let App = new wk.OpsWorks.App('App')
  t.addResource(App)

  let ElasticLoadBalancerAttachment = new wk.OpsWorks.ElasticLoadBalancerAttachment('ElasticLoadBalancerAttachment')
  let Instance = new wk.OpsWorks.Instance('Instance')
  let Layer = new wk.OpsWorks.Layer('Layer')
  let Stack = new wk.OpsWorks.Stack('Stack')

  it('should be able to add an OpsWorks App to the template', () => {
    t.Resources['App'].WKResourceType.should.equal('AWS::OpsWorks::App')
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
