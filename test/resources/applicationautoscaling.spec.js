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

describe('ApplicationAutoScaling', () => {
  let t = new wk.Template()

  let ScalableTarget = new wk.ApplicationAutoScaling.ScalableTarget('ScalableTarget')
  ScalableTarget.MaxCapacity = 3
  ScalableTarget.MinCapacity = 1
  ScalableTarget.ResourceId = 'resource'
  ScalableTarget.RoleARN = 'dummyARN'
  ScalableTarget.ScalableDimension = 'dummyDimension'
  ScalableTarget.ServiceNamespace = 'dummyNamespace'
  t.add(ScalableTarget)

  let ScalingPolicy = new wk.ApplicationAutoScaling.ScalingPolicy('ScalingPolicy')

  it('should be able to add an ApplicationAutoScaling ScalableTarget to the template', () => {
    t.Resources['ScalableTarget'].WKResourceType.should.equal('AWS::ApplicationAutoScaling::ScalableTarget')
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
