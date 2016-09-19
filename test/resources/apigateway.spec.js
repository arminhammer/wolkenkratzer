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

describe('API Gateway', () => {
  let t = new wk.Template()

  let account = new wk.ApiGateway.Account('account')
  t.add(account)

  let apiKey = new wk.ApiGateway.ApiKey('apiKey')
  let Authorizer = new wk.ApiGateway.Authorizer('Authorizer')
  let BasePathMapping = new wk.ApiGateway.BasePathMapping('BasePathMapping')
  let ClientCertificate = new wk.ApiGateway.ClientCertificate('ClientCertificate')
  let Deployment = new wk.ApiGateway.Deployment('Deployment')
  let Method = new wk.ApiGateway.Method('Method')
  let Model = new wk.ApiGateway.Model('Model')
  let Resource = new wk.ApiGateway.Resource('Resource')
  let RestApi = new wk.ApiGateway.RestApi('RestApi')
  let Stage = new wk.ApiGateway.Stage('Stage')

  it('should be able to add an API Gateway Account to the template', () => {
    t.Resources['account'].WKResourceType.should.equal('AWS::ApiGateway::Account')
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
