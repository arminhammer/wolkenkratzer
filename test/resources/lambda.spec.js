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

describe('Lambda', () => {
  let t = new wk.Template()

  let EventSourceMapping = new wk.Lambda.EventSourceMapping('EventSourceMapping')
  t.addResource(EventSourceMapping)

  let Alias = new wk.Lambda.Alias('Alias')
  let LambdaFunction = new wk.Lambda.LambdaFunction('LambdaFunction')
  let Permission = new wk.Lambda.Permission('Permission')
  let Version = new wk.Lambda.Version('Version')

  it('should be able to add an Lambda EventSourceMapping to the template', () => {
    t.Resources['EventSourceMapping'].WKResourceType.should.equal('AWS::Lambda::EventSourceMapping')
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