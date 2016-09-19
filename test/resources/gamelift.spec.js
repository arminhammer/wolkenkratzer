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

describe('Gamelift', () => {
  let t = new wk.Template()

  let AmazonGameLiftAliasRoutingStrategy = new wk.Types.AmazonGameLiftAliasRoutingStrategy()
  AmazonGameLiftAliasRoutingStrategy.Type = 'dummytype'

  let Alias = new wk.GameLift.Alias('Alias')
  Alias.Name = 'name'
  Alias.RoutingStrategy = AmazonGameLiftAliasRoutingStrategy
  t.add(Alias)

  let Build = new wk.GameLift.Build('Build')
  let Fleet = new wk.GameLift.Fleet('Fleet')

  it('should be able to add an GameLift Alias to the template', () => {
    t.Resources['Alias'].WKResourceType.should.equal('AWS::GameLift::Alias')
  })

  it ('CloudFormation should validate the template', (done) => {
    let jsonString = t.toJson().Template
    CloudFormation.validateTemplate({
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
