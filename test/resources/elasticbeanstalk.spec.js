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

describe('ElasticBeanstalk', () => {
  let t = new wk.Template()

  let Application = new wk.ElasticBeanstalk.Application('Application')
  t.add(Application)

  let ApplicationVersion = new wk.ElasticBeanstalk.ApplicationVersion('ApplicationVersion')
  let ConfigurationTemplate = new wk.ElasticBeanstalk.ConfigurationTemplate('ConfigurationTemplate')
  let Environment = new wk.ElasticBeanstalk.Environment('Environment')

  it('should be able to add an ElasticBeanstalk Application to the template', () => {
    t.Resources['Application'].WKResourceType.should.equal('AWS::ElasticBeanstalk::Application')
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
