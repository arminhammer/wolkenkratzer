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

describe('AutoScaling', () => {
  let t = new wk.Template()

  let AutoScalingGroup = new wk.AutoScaling.AutoScalingGroup('AutoScalingGroup')
  AutoScalingGroup.MaxSize = 3
  AutoScalingGroup.MinSize = 1
  t.add(AutoScalingGroup)
  let LaunchConfiguration = new wk.AutoScaling.LaunchConfiguration('LaunchConfiguration')
  let LifecycleHook = new wk.AutoScaling.LifecycleHook('LifecycleHook')
  let ScalingPolicy = new wk.AutoScaling.ScalingPolicy('ScalingPolicy')
  let ScheduledAction = new wk.AutoScaling.ScheduledAction('ScheduledAction')

  it('should be able to add an AutoScaling AutoScalingGroup to the template', () => {
    t.Resources['AutoScalingGroup'].WKResourceType.should.equal('AWS::AutoScaling::AutoScalingGroup')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
