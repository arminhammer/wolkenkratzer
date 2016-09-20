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

describe('CloudWatch', () => {
  let t = new wk.Template()

  let Alarm = new wk.CloudWatch.Alarm('Alarm')
  Alarm.ComparisonOperator = '<'
  Alarm.EvaluationPeriods = 0
  Alarm.MetricName = 'name'
  Alarm.Namespace = 'namespace'
  Alarm.Period = 5
  Alarm.Statistic = 'stat'
  Alarm.Threshold = 60

  t.add(Alarm)

  it('should be able to add a CloudWatch Alarm to the template', () => {
    t.Resources['Alarm'].WKResourceType.should.equal('AWS::CloudWatch::Alarm')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
