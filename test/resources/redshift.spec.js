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

describe('Redshift', () => {
  let t = new wk.Template()

  let Cluster = new wk.Redshift.Cluster('Cluster')
  Cluster.ClusterType = 'single-node'
  Cluster.DBName = 'name'
  Cluster.MasterUsername = 'user'
  Cluster.MasterUserPassword = 'password'
  Cluster.NodeType = 't2.micro'
  t.add(Cluster)

  let ClusterParameterGroup = new wk.Redshift.ClusterParameterGroup('ClusterParameterGroup')
  let ClusterSecurityGroup = new wk.Redshift.ClusterSecurityGroup('ClusterSecurityGroup')
  let ClusterSecurityGroupIngress = new wk.Redshift.ClusterSecurityGroupIngress('ClusterSecurityGroupIngress')
  let ClusterSubnetGroup = new wk.Redshift.ClusterSubnetGroup('ClusterSubnetGroup')

  it('should be able to add an Redshift Cluster to the template', () => {
    t.Resources['Cluster'].WKResourceType.should.equal('AWS::Redshift::Cluster')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
