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

describe('EMR', () => {
  let t = new wk.Template()

  let AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig = new wk.Types.AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig()
  AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig.InstanceCount = 1
  AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig.InstanceType = 't2.micro'
  let AmazonEMRClusterJobFlowInstancesConfig = new wk.Types.AmazonEMRClusterJobFlowInstancesConfig()
  AmazonEMRClusterJobFlowInstancesConfig.CoreInstanceGroup = AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig
  AmazonEMRClusterJobFlowInstancesConfig.MasterInstanceGroup = AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig

  let Cluster = new wk.EMR.Cluster('Cluster')
  Cluster.Instances = AmazonEMRClusterJobFlowInstancesConfig
  Cluster.JobFlowRole = 'dummyArn'
  Cluster.Name = 'name'
  Cluster.ServiceRole = 'dummyRole'
  t.add(Cluster)

  let InstanceGroupConfig = new wk.EMR.InstanceGroupConfig('InstanceGroupConfig')
  let Step = new wk.EMR.Step('Step')

  it('should be able to add an EMR Cluster to the template', () => {
    t.Resources['Cluster'].WKResourceType.should.equal('AWS::EMR::Cluster')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
