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

describe('ECS', () => {
  let t = new wk.Template()

  let Cluster = new wk.ECS.Cluster('Cluster')
  t.add(Cluster)

  let Service = new wk.ECS.Service('Service')
  let TaskDefinition = new wk.ECS.TaskDefinition('TaskDefinition')

  it('should be able to add an ECS Cluster to the template', () => {
    t.Resources['Cluster'].WKResourceType.should.equal('AWS::ECS::Cluster')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
