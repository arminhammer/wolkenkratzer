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

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
