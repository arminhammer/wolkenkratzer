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

describe('ElastiCache', () => {
  let t = new wk.Template()

  let CacheCluster = new wk.ElastiCache.CacheCluster('CacheCluster')
  CacheCluster.CacheNodeType = 't2.micro'
  CacheCluster.Engine = 'redis'
  CacheCluster.NumCacheNodes = 0
  t.add(CacheCluster)

  let ParameterGroup = new wk.ElastiCache.ParameterGroup('ParameterGroup')
  let ReplicationGroup = new wk.ElastiCache.ReplicationGroup('ReplicationGroup')
  let SecurityGroup = new wk.ElastiCache.SecurityGroup('SecurityGroup')
  let SecurityGroupIngress = new wk.ElastiCache.SecurityGroupIngress('SecurityGroupIngress')
  let SubnetGroup = new wk.ElastiCache.SubnetGroup('SubnetGroup')

  it('should be able to add an ElastiCache CacheCluster to the template', () => {
    t.Resources['CacheCluster'].WKResourceType.should.equal('AWS::ElastiCache::CacheCluster')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
