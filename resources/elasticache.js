'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class CacheCluster extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new ResourceAttribute('AutoMinorVersionUpgrade', Boolean, 'No', null),
      AZMode: new ResourceAttribute('AZMode', String, 'Conditional', null),
      CacheNodeType: new ResourceAttribute('CacheNodeType', String, 'Yes', null),
      CacheParameterGroupName: new ResourceAttribute('CacheParameterGroupName', String, 'No', null),
      CacheSecurityGroupNames: new ResourceAttributeArray('CacheSecurityGroupNames', String, 'Conditional', null),
      CacheSubnetGroupName: new ResourceAttribute('CacheSubnetGroupName', String, 'Conditional', null),
      ClusterName: new ResourceAttribute('ClusterName', String, 'No', null),
      Engine: new ResourceAttribute('Engine', String, 'Yes', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, 'No', null),
      NotificationTopicArn: new ResourceAttribute('NotificationTopicArn', String, 'No', null),
      NumCacheNodes: new ResourceAttribute('NumCacheNodes', String, 'Yes', null),
      Port: new ResourceAttribute('Port', Number, 'No', null),
      PreferredAvailabilityZone: new ResourceAttribute('PreferredAvailabilityZone', String, 'No', null),
      PreferredAvailabilityZones: new ResourceAttributeArray('PreferredAvailabilityZones', String, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, 'No', null),
      SnapshotArns: new ResourceAttributeArray('SnapshotArns', String, 'No', null),
      SnapshotName: new ResourceAttribute('SnapshotName', String, 'No', null),
      SnapshotRetentionLimit: new ResourceAttribute('SnapshotRetentionLimit', Number, 'No', null),
      SnapshotWindow: new ResourceAttribute('SnapshotWindow', String, 'No', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new ResourceAttributeArray('VpcSecurityGroupIds', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new ResourceAttribute('CacheParameterGroupFamily', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      Properties: new ResourceAttribute('Properties', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new ResourceAttribute('AutomaticFailoverEnabled', Boolean, 'No', null),
      AutoMinorVersionUpgrade: new ResourceAttribute('AutoMinorVersionUpgrade', Boolean, 'No', null),
      CacheNodeType: new ResourceAttribute('CacheNodeType', String, 'Yes', null),
      CacheParameterGroupName: new ResourceAttribute('CacheParameterGroupName', String, 'No', null),
      CacheSecurityGroupNames: new ResourceAttributeArray('CacheSecurityGroupNames', String, 'No', null),
      CacheSubnetGroupName: new ResourceAttribute('CacheSubnetGroupName', String, 'No', null),
      Engine: new ResourceAttribute('Engine', String, 'Yes', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, 'No', null),
      NotificationTopicArn: new ResourceAttribute('NotificationTopicArn', String, 'No', null),
      NumCacheClusters: new ResourceAttribute('NumCacheClusters', Number, 'Yes', null),
      Port: new ResourceAttribute('Port', Number, 'No', null),
      PreferredCacheClusterAZs: new ResourceAttributeArray('PreferredCacheClusterAZs', String, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, 'No', null),
      ReplicationGroupDescription: new ResourceAttribute('ReplicationGroupDescription', String, 'Yes', null),
      SecurityGroupIds: new ResourceAttributeArray('SecurityGroupIds', String, 'No', null),
      SnapshotArns: new ResourceAttributeArray('SnapshotArns', String, 'No', null),
      SnapshotRetentionLimit: new ResourceAttribute('SnapshotRetentionLimit', Number, 'No', null),
      SnapshotWindow: new ResourceAttribute('SnapshotWindow', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new ResourceAttribute('CacheSecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      SubnetIds: new ResourceAttribute('SubnetIds', types.Stringlist, 'Yes', null)
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
