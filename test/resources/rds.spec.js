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

describe('RDS', () => {
  let t = new wk.Template()

  let DBCluster = new wk.RDS.DBCluster('DBCluster')
  DBCluster.Engine = 'mysql'
  t.add(DBCluster)

  let DBClusterParameterGroup = new wk.RDS.DBClusterParameterGroup('DBClusterParameterGroup')
  let DBInstance = new wk.RDS.DBInstance('DBInstance')
  let DBParameterGroup = new wk.RDS.DBParameterGroup('DBParameterGroup')
  let DBSecurityGroup = new wk.RDS.DBSecurityGroup('DBSecurityGroup')
  let DBSecurityGroupIngress = new wk.RDS.DBSecurityGroupIngress('DBSecurityGroupIngress')
  let DBSubnetGroup = new wk.RDS.DBSubnetGroup('DBSubnetGroup')
  let EventSubscription = new wk.RDS.EventSubscription('EventSubscription')
  let OptionGroup = new wk.RDS.OptionGroup('OptionGroup')

  it('should be able to add an RDS DBCluster to the template', () => {
    t.Resources['DBCluster'].WKResourceType.should.equal('AWS::RDS::DBCluster')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
