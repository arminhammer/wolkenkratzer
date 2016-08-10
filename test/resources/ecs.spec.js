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

describe('ECS', () => {
  let t = new wk.Template()

  let Cluster = new wk.ECS.Cluster('Cluster')
  t.addResource(Cluster)

  let Service = new wk.ECS.Service('Service')
  let TaskDefinition = new wk.ECS.TaskDefinition('TaskDefinition')

  it('should be able to add an ECS Cluster to the template', () => {
    t.Resources['Cluster'].WKResourceType.should.equal('AWS::ECS::Cluster')
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
