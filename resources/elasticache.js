/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class CacheCluster extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new cloudpotato.ResourceProperty(Boolean, false, null),
      AZMode: new cloudpotato.ResourceProperty(String, false, null),
      CacheNodeType: new cloudpotato.ResourceProperty(String, true, null),
      CacheParameterGroupName: new cloudpotato.ResourceProperty(String, false, null),
      CacheSecurityGroupNames: new cloudpotato.ResourceArray(String, false, null),
      CacheSubnetGroupName: new cloudpotato.ResourceProperty(String, false, null),
      ClusterName: new cloudpotato.ResourceProperty(String, false, null),
      Engine: new cloudpotato.ResourceProperty(String, true, null),
      EngineVersion: new cloudpotato.ResourceProperty(String, false, null),
      NotificationTopicArn: new cloudpotato.ResourceProperty(String, false, null),
      NumCacheNodes: new cloudpotato.ResourceProperty(String, true, null),
      Port: new cloudpotato.ResourceProperty(Number, false, null),
      PreferredAvailabilityZone: new cloudpotato.ResourceProperty(String, false, null),
      PreferredAvailabilityZones: new cloudpotato.ResourceArray(String, false, null),
      PreferredMaintenanceWindow: new cloudpotato.ResourceProperty(String, false, null),
      SnapshotArns: new cloudpotato.ResourceArray(String, false, null),
      SnapshotName: new cloudpotato.ResourceProperty(String, false, null),
      SnapshotRetentionLimit: new cloudpotato.ResourceProperty(Number, false, null),
      SnapshotWindow: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet(),
      VpcSecurityGroupIds: new cloudpotato.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new cloudpotato.ResourceProperty(String, true, null),
      Description: new cloudpotato.ResourceProperty(String, true, null),
      Properties: new cloudpotato.ResourceProperty(Object, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new cloudpotato.ResourceProperty(Boolean, false, null),
      AutoMinorVersionUpgrade: new cloudpotato.ResourceProperty(Boolean, false, null),
      CacheNodeType: new cloudpotato.ResourceProperty(String, true, null),
      CacheParameterGroupName: new cloudpotato.ResourceProperty(String, false, null),
      CacheSecurityGroupNames: new cloudpotato.ResourceArray(String, false, null),
      CacheSubnetGroupName: new cloudpotato.ResourceProperty(String, false, null),
      Engine: new cloudpotato.ResourceProperty(String, true, null),
      EngineVersion: new cloudpotato.ResourceProperty(String, false, null),
      NotificationTopicArn: new cloudpotato.ResourceProperty(String, false, null),
      NumCacheClusters: new cloudpotato.ResourceProperty(Number, true, null),
      Port: new cloudpotato.ResourceProperty(Number, false, null),
      PreferredCacheClusterAZs: new cloudpotato.ResourceArray(String, false, null),
      PreferredMaintenanceWindow: new cloudpotato.ResourceProperty(String, false, null),
      ReplicationGroupDescription: new cloudpotato.ResourceProperty(String, true, null),
      SecurityGroupIds: new cloudpotato.ResourceArray(String, false, null),
      SnapshotArns: new cloudpotato.ResourceArray(String, false, null),
      SnapshotRetentionLimit: new cloudpotato.ResourceProperty(Number, false, null),
      SnapshotWindow: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new cloudpotato.ResourceProperty(String, true, null),
      EC2SecurityGroupName: new cloudpotato.ResourceProperty(String, true, null),
      EC2SecurityGroupOwnerId: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new cloudpotato.ResourceProperty(String, true, null),
      SubnetIds: new cloudpotato.ResourceArray(String, true, null)
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