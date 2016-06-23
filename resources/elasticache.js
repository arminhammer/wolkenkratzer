/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class CacheCluster extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      AZMode: new wolkenkratzer.ResourceProperty(String, false, null),
      CacheNodeType: new wolkenkratzer.ResourceProperty(String, true, null),
      CacheParameterGroupName: new wolkenkratzer.ResourceProperty(String, false, null),
      CacheSecurityGroupNames: new wolkenkratzer.ResourceArray(String, false, null),
      CacheSubnetGroupName: new wolkenkratzer.ResourceProperty(String, false, null),
      ClusterName: new wolkenkratzer.ResourceProperty(String, false, null),
      Engine: new wolkenkratzer.ResourceProperty(String, true, null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, false, null),
      NotificationTopicArn: new wolkenkratzer.ResourceProperty(String, false, null),
      NumCacheNodes: new wolkenkratzer.ResourceProperty(String, true, null),
      Port: new wolkenkratzer.ResourceProperty(Number, false, null),
      PreferredAvailabilityZone: new wolkenkratzer.ResourceProperty(String, false, null),
      PreferredAvailabilityZones: new wolkenkratzer.ResourceArray(String, false, null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, false, null),
      SnapshotArns: new wolkenkratzer.ResourceArray(String, false, null),
      SnapshotName: new wolkenkratzer.ResourceProperty(String, false, null),
      SnapshotRetentionLimit: new wolkenkratzer.ResourceProperty(Number, false, null),
      SnapshotWindow: new wolkenkratzer.ResourceProperty(String, false, null),
      Tags: new wolkenkratzer.TagSet(),
      VpcSecurityGroupIds: new wolkenkratzer.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new wolkenkratzer.ResourceProperty(String, true, null),
      Description: new wolkenkratzer.ResourceProperty(String, true, null),
      Properties: new wolkenkratzer.ResourceProperty(Object, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      AutoMinorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      CacheNodeType: new wolkenkratzer.ResourceProperty(String, true, null),
      CacheParameterGroupName: new wolkenkratzer.ResourceProperty(String, false, null),
      CacheSecurityGroupNames: new wolkenkratzer.ResourceArray(String, false, null),
      CacheSubnetGroupName: new wolkenkratzer.ResourceProperty(String, false, null),
      Engine: new wolkenkratzer.ResourceProperty(String, true, null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, false, null),
      NotificationTopicArn: new wolkenkratzer.ResourceProperty(String, false, null),
      NumCacheClusters: new wolkenkratzer.ResourceProperty(Number, true, null),
      Port: new wolkenkratzer.ResourceProperty(Number, false, null),
      PreferredCacheClusterAZs: new wolkenkratzer.ResourceArray(String, false, null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, false, null),
      ReplicationGroupDescription: new wolkenkratzer.ResourceProperty(String, true, null),
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, false, null),
      SnapshotArns: new wolkenkratzer.ResourceArray(String, false, null),
      SnapshotRetentionLimit: new wolkenkratzer.ResourceProperty(Number, false, null),
      SnapshotWindow: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new wolkenkratzer.ResourceProperty(String, true, null),
      EC2SecurityGroupName: new wolkenkratzer.ResourceProperty(String, true, null),
      EC2SecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, true, null),
      SubnetIds: new wolkenkratzer.ResourceArray(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CacheCluster: CacheCluster,
  ParameterGroup: ParameterGroup,
  ReplicationGroup: ReplicationGroup,
  SecurityGroup: SecurityGroup,
  SecurityGroupIngress: SecurityGroupIngress,
  SubnetGroup: SubnetGroup
}