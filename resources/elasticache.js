'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CacheCluster extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new resource.ResourceProperty('AutoMinorVersionUpgrade', Boolean, 'No', null),
      AZMode: new resource.ResourceProperty('AZMode', String, 'Conditional', null),
      CacheNodeType: new resource.ResourceProperty('CacheNodeType', String, 'Yes', null),
      CacheParameterGroupName: new resource.ResourceProperty('CacheParameterGroupName', String, 'No', null),
      CacheSecurityGroupNames: new resource.ResourceArray('CacheSecurityGroupNames', String, 'Conditional', null),
      CacheSubnetGroupName: new resource.ResourceProperty('CacheSubnetGroupName', String, 'Conditional', null),
      ClusterName: new resource.ResourceProperty('ClusterName', String, 'No', null),
      Engine: new resource.ResourceProperty('Engine', String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty('EngineVersion', String, 'No', null),
      NotificationTopicArn: new resource.ResourceProperty('NotificationTopicArn', String, 'No', null),
      NumCacheNodes: new resource.ResourceProperty('NumCacheNodes', String, 'Yes', null),
      Port: new resource.ResourceProperty('Port', Number, 'No', null),
      PreferredAvailabilityZone: new resource.ResourceProperty('PreferredAvailabilityZone', String, 'No', null),
      PreferredAvailabilityZones: new resource.ResourceArray('PreferredAvailabilityZones', String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty('PreferredMaintenanceWindow', String, 'No', null),
      SnapshotArns: new resource.ResourceArray('SnapshotArns', String, 'No', null),
      SnapshotName: new resource.ResourceProperty('SnapshotName', String, 'No', null),
      SnapshotRetentionLimit: new resource.ResourceProperty('SnapshotRetentionLimit', Number, 'No', null),
      SnapshotWindow: new resource.ResourceProperty('SnapshotWindow', String, 'No', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new resource.ResourceArray('VpcSecurityGroupIds', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new resource.ResourceProperty('CacheParameterGroupFamily', String, 'Yes', null),
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      Properties: new resource.ResourceProperty('Properties', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new resource.ResourceProperty('AutomaticFailoverEnabled', Boolean, 'No', null),
      AutoMinorVersionUpgrade: new resource.ResourceProperty('AutoMinorVersionUpgrade', Boolean, 'No', null),
      CacheNodeType: new resource.ResourceProperty('CacheNodeType', String, 'Yes', null),
      CacheParameterGroupName: new resource.ResourceProperty('CacheParameterGroupName', String, 'No', null),
      CacheSecurityGroupNames: new resource.ResourceArray('CacheSecurityGroupNames', String, 'No', null),
      CacheSubnetGroupName: new resource.ResourceProperty('CacheSubnetGroupName', String, 'No', null),
      Engine: new resource.ResourceProperty('Engine', String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty('EngineVersion', String, 'No', null),
      NotificationTopicArn: new resource.ResourceProperty('NotificationTopicArn', String, 'No', null),
      NumCacheClusters: new resource.ResourceProperty('NumCacheClusters', Number, 'Yes', null),
      Port: new resource.ResourceProperty('Port', Number, 'No', null),
      PreferredCacheClusterAZs: new resource.ResourceArray('PreferredCacheClusterAZs', String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty('PreferredMaintenanceWindow', String, 'No', null),
      ReplicationGroupDescription: new resource.ResourceProperty('ReplicationGroupDescription', String, 'Yes', null),
      SecurityGroupIds: new resource.ResourceArray('SecurityGroupIds', String, 'No', null),
      SnapshotArns: new resource.ResourceArray('SnapshotArns', String, 'No', null),
      SnapshotRetentionLimit: new resource.ResourceProperty('SnapshotRetentionLimit', Number, 'No', null),
      SnapshotWindow: new resource.ResourceProperty('SnapshotWindow', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new resource.ResourceProperty('CacheSecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupName: new resource.ResourceProperty('EC2SecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      SubnetIds: new resource.ResourceProperty('SubnetIds', types.Stringlist, 'Yes', null)
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
