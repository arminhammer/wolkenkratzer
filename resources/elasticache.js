'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CacheCluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::CacheCluster'
    let properties = {
      AutoMinorVersionUpgrade: new resource.ResourceProperty(Boolean, 'No', null),
      AZMode: new resource.ResourceProperty(String, 'Conditional', null),
      CacheNodeType: new resource.ResourceProperty(String, 'Yes', null),
      CacheParameterGroupName: new resource.ResourceProperty(String, 'No', null),
      CacheSecurityGroupNames: new resource.ResourceArray(String, 'Conditional', null),
      CacheSubnetGroupName: new resource.ResourceProperty(String, 'Conditional', null),
      ClusterName: new resource.ResourceProperty(String, 'No', null),
      Engine: new resource.ResourceProperty(String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty(String, 'No', null),
      NotificationTopicArn: new resource.ResourceProperty(String, 'No', null),
      NumCacheNodes: new resource.ResourceProperty(String, 'Yes', null),
      Port: new resource.ResourceProperty(Number, 'No', null),
      PreferredAvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      PreferredAvailabilityZones: new resource.ResourceArray(String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty(String, 'No', null),
      SnapshotArns: new resource.ResourceArray(String, 'No', null),
      SnapshotName: new resource.ResourceProperty(String, 'No', null),
      SnapshotRetentionLimit: new resource.ResourceProperty(Number, 'No', null),
      SnapshotWindow: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new resource.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ParameterGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new resource.ResourceProperty(String, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'Yes', null),
      Properties: new resource.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ReplicationGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ReplicationGroup'
    let properties = {
      AutomaticFailoverEnabled: new resource.ResourceProperty(Boolean, 'No', null),
      AutoMinorVersionUpgrade: new resource.ResourceProperty(Boolean, 'No', null),
      CacheNodeType: new resource.ResourceProperty(String, 'Yes', null),
      CacheParameterGroupName: new resource.ResourceProperty(String, 'No', null),
      CacheSecurityGroupNames: new resource.ResourceArray(String, 'No', null),
      CacheSubnetGroupName: new resource.ResourceProperty(String, 'No', null),
      Engine: new resource.ResourceProperty(String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty(String, 'No', null),
      NotificationTopicArn: new resource.ResourceProperty(String, 'No', null),
      NumCacheClusters: new resource.ResourceProperty(Number, 'Yes', null),
      Port: new resource.ResourceProperty(Number, 'No', null),
      PreferredCacheClusterAZs: new resource.ResourceArray(String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty(String, 'No', null),
      ReplicationGroupDescription: new resource.ResourceProperty(String, 'Yes', null),
      SecurityGroupIds: new resource.ResourceArray(String, 'No', null),
      SnapshotArns: new resource.ResourceArray(String, 'No', null),
      SnapshotRetentionLimit: new resource.ResourceProperty(Number, 'No', null),
      SnapshotWindow: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroupIngress'
    let properties = {
      CacheSecurityGroupName: new resource.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupName: new resource.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SubnetGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null),
      SubnetIds: new resource.ResourceProperty(types.Stringlist, 'Yes', null)
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