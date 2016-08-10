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

describe('EMR', () => {
  let t = new wk.Template()

  let Cluster = new wk.EMR.Cluster('Cluster')
  t.addResource(Cluster)

  let InstanceGroupConfig = new wk.EMR.InstanceGroupConfig('InstanceGroupConfig')
  let Step = new wk.EMR.Step('Step')

  it('should be able to add an EMR Cluster to the template', () => {
    t.Resources['Cluster'].WKResourceType.should.equal('AWS::EMR::Cluster')
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
