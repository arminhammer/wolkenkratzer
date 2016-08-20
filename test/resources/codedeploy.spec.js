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

describe('CodeDeploy', () => {
  let t = new wk.Template()

  let Application = new wk.CodeDeploy.Application('Application')
  t.add(Application)

  let DeploymentConfig = new wk.CodeDeploy.DeploymentConfig('DeploymentConfig')
  let DeploymentGroup = new wk.CodeDeploy.DeploymentGroup('DeploymentGroup')

  it('should be able to add an CodeDeploy Application to the template', () => {
    t.Resources['Application'].WKResourceType.should.equal('AWS::CodeDeploy::Application')
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
