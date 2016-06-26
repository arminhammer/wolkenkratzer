'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class CacheCluster extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AZMode: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      CacheNodeType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CacheParameterGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CacheSecurityGroupNames: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      CacheSubnetGroupName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      ClusterName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Engine: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NotificationTopicArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NumCacheNodes: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Port: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredAvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredAvailabilityZones: new wolkenkratzer.ResourceArray(String, 'No', null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnapshotArns: new wolkenkratzer.ResourceArray(String, 'No', null),
      SnapshotName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnapshotRetentionLimit: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnapshotWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VpcSecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Properties: new wolkenkratzer.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AutoMinorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheNodeType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CacheParameterGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CacheSecurityGroupNames: new wolkenkratzer.ResourceArray(String, 'No', null),
      CacheSubnetGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Engine: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NotificationTopicArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      NumCacheClusters: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Port: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredCacheClusterAZs: new wolkenkratzer.ResourceArray(String, 'No', null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ReplicationGroupDescription: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'No', null),
      SnapshotArns: new wolkenkratzer.ResourceArray(String, 'No', null),
      SnapshotRetentionLimit: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnapshotWindow: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetIds: new wolkenkratzer.ResourceProperty(propertyTypes.Stringlist, 'Yes', null)
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