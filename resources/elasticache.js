'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ElastiCache */

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {Boolean} AutoMinorVersionUpgrade Required: No. Indicates that minor engine upgrades will be applied automatically to the cache
                  cluster during the maintenance window.Default: trueUpdate requires: No interruption
* @property {String} AZMode Required: Conditional. For Memcached cache clusters, indicates whether the nodes are created in a
                  single Availability Zone or across multiple Availability Zones in the cluster's
                  region. For valid values, see CreateCacheCluster in
                  the Amazon ElastiCache API Reference.Update requires: No interruption
* @property {String} CacheNodeType Required: Yes. The compute and memory capacity of nodes in a cache cluster.Update requires: Replacement
* @property {String} CacheParameterGroupName Required: No. The name of the cache parameter group that is associated with this cache
                  cluster.Update requires: Some interruptions
* @property {String} CacheSecurityGroupNames Required: Conditional. A list of cache security group names that are associated with this cache
                  cluster. If your cache cluster is in a VPC, specify the
                     VpcSecurityGroupIds property instead.Update requires: No interruption
* @property {String} CacheSubnetGroupName Required: Conditional. The cache subnet group that you associate with a cache cluster.Update requires: Replacement
* @property {String} ClusterName Required: No. A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a
                  unique physical ID and uses that ID for the cache cluster. For more information,
                  see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.The name must contain 1 to 20 alphanumeric characters or hyphens. The name must
                  start with a letter and cannot end with a hyphen or contain two consecutive
                  hyphens.Update requires: Replacement
* @property {String} Engine Required: Yes. The name of the cache engine to be used for this cache cluster, such as
                     memcached or redis.Update requires: Replacement
* @property {String} EngineVersion Required: No. The version of the cache engine to be used for this cluster.Update requires: Some interruptions
* @property {String} NotificationTopicArn Required: No. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)
                  topic to which notifications will be sent.Update requires: No interruption
* @property {String} NumCacheNodes Required: Yes. The number of cache nodes that the cache cluster should have.Update requires: No interruption. However, if the PreferredAvailabilityZone
                  and PreferredAvailabilityZones properties were not previously
                  specified and you don't specify any new values, an update requires replacement.
* @property {Number} Port Required: No. The port number on which each of the cache nodes will accept
                  connections.Update requires: Replacement
* @property {String} PreferredAvailabilityZone Required: No. The Amazon EC2 Availability Zone in which the cache cluster is created.Update requires: Replacement
* @property {String} PreferredAvailabilityZones Required: No. For Memcached cache clusters, the list of Availability Zones in which cache
                  nodes are created. The number of Availability Zones listed must equal the number
                  of cache nodes. For example, if you want to create three nodes in two different
                  Availability Zones, you can specify ["us-east-1a", "us-east-1a",
                     "us-east-1b"], which would create two nodes in us-east-1a and one node
                  in us-east-1b.If you specify a subnet group and you're creating your cache cluster in a VPC,
                  you must specify Availability Zones that are associated with the subnets in the
                  subnet group that you've chosen.If you want all the nodes in the same Availability Zone, use the
                     PreferredAvailabilityZone property or repeat the Availability Zone
                  multiple times in the list.If you specify an Availability Zone that was previously specified in the
                  template, such as in the PreferredAvailabilityZone property, the
                  update requires some interruptions.
                  Also, if the PreferredAvailabilityZones property was already
                  specified and you're updating its values (regardless of whether you specify the
                  same Availability Zones), the update requires some interruptions.All other updates require replacement.
* @property {String} PreferredMaintenanceWindow Required: No. The weekly time range (in UTC) during which system maintenance can
                  occur.Update requires: No interruption
* @property {String} SnapshotArns Required: No. The ARN of the snapshot file that you want to use to seed a new Redis cache
                  cluster. If you manage a Redis instance outside of Amazon ElastiCache, you can create a new
                  cache cluster in ElastiCache by using a snapshot file that is stored in an Amazon S3
                  bucket.Update requires: Replacement
* @property {String} SnapshotName Required: No. The name of a snapshot from which to restore data into a new Redis cache
                  cluster.Update requires: Replacement
* @property {Number} SnapshotRetentionLimit Required: No. For Redis cache clusters, the number of days for which ElastiCache retains automatic
                  snapshots before deleting them. For example, if you set the value to
                     5, a snapshot that was taken today will be retained for 5 days
                  before being deleted.Update requires: No interruption
* @property {String} SnapshotWindow Required: No. For Redis cache clusters, the daily time range (in UTC) during which ElastiCache will
                  begin taking a daily snapshot of your node group. For example, you can specify
                     05:00-09:00.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this cache
                  cluster.Update requires: No interruption.
* @property {String} VpcSecurityGroupIds Required: Conditional. A list of VPC security group IDs. If your cache cluster isn't in a VPC, specify
                  the CacheSecurityGroupNames property instead.
                  NoteYou must use the AWS::EC2::SecurityGroup resource instead of
                        the AWS::ElastiCache::SecurityGroup resource in order to
                        specify an ElastiCache security group that is in a VPC. In addition, if you use
                        the default VPC for your
                        AWS account, you must use the Fn::GetAtt function and the
                           GroupId attribute to retrieve security group IDs (instead of
                        the Ref function). To see a sample template, see the Template
                        Snippet section.
               Update requires: No interruption
*/
class CacheCluster extends WKResource {
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

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {String} CacheParameterGroupFamily Required: Yes. The name of the cache parameter group family that the cache parameter group can be used
               with.Update requires: Updates are not supported.
* @property {String} Description Required: Yes. The description for the Cache Parameter Group.Update requires: Updates are not supported.
* @property {Map} Properties Required: No. A comma-delimited list of parameter name/value pairs. For more information, go to ModifyCacheParameterGroup in the Amazon ElastiCache API Reference
                     Guide.Example:Update requires: Updates are not supported.
*/
class ParameterGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::ParameterGroup'
    let properties = {
      CacheParameterGroupFamily: new ResourceAttribute('CacheParameterGroupFamily', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      Properties: new ResourceAttribute('Properties', Map, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {Boolean} AutomaticFailoverEnabled Required: No. Indicates whether Multi-AZ is enabled. When Multi-AZ is enabled, a read-only
                  replica is automatically promoted to a read-write primary cluster if the existing
                  primary cluster fails. If you specify true, you must specify a value
                  greater than 1 for the NumCacheNodes property. By
                  default, AWS CloudFormation sets the value to true.For more information about Multi-AZ, see Multi-AZ with Redis Replication Groups in the
                     Amazon ElastiCache User Guide.NoteYou cannot enable automatic failover for Redis versions earlier than 2.8.6
                     or for T1 and T2 cache node types.Update requires: No interruption
* @property {Boolean} AutoMinorVersionUpgrade Required: No. Currently, this property isn't used by ElastiCache.Update requires: No interruption
* @property {String} CacheNodeType Required: Yes. The compute and memory capacity of nodes in the node group. To see valid
                  values, see CreateReplicationGroup in the Amazon ElastiCache API
                     Reference Guide.Update requires: Replacement
* @property {String} CacheParameterGroupName Required: No. The name of the parameter group to associate with this replication
                  group.Update requires: No interruption
* @property {String} CacheSecurityGroupNames Required: No. A list of cache security group names to associate with this replication group.
                  If you specify the SecurityGroupIds property, do not specify this
                  property; you can specify only one.Update requires: No interruption
* @property {String} CacheSubnetGroupName Required: No. The name of a cache subnet group to use for this replication group.Update requires: Replacement
* @property {String} Engine Required: Yes. The name of the cache engine to use for the cache clusters in this replication
                  group. Currently, you can specify only redis.Update requires: Replacement
* @property {String} EngineVersion Required: No. The version number of the cache engine to use for the cache clusters in this
                  replication group.Update requires: No interruption
* @property {String} NotificationTopicArn Required: No. The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic to which notifications are
                  sent.Update requires: No interruption
* @property {Number} NumCacheClusters Required: Yes. The number of cache clusters for this replication group. If automatic failover
                  is enabled, you must specify a value greater than 1.Update requires: Replacement
* @property {Number} Port Required: No. The port number on which each member of the replication group accepts
                  connections.Update requires: Replacement
* @property {String} PreferredCacheClusterAZs Required: No. A list of Availability Zones (AZs) in which the cache clusters in this
                  replication group are created.Update requires: Replacement
* @property {String} PreferredMaintenanceWindow Required: No. The weekly time range during which system maintenance can occur. Use the
                  following format to specify a time range: ddd:hh24:mi-ddd:hh24:mi
                  (24H Clock UTC). For example, you can specify sun:22:00-sun:23:30 for
                  Sunday from 10 PM to 11:30 PM.Update requires: No interruption
* @property {String} ReplicationGroupDescription Required: Yes. The description of the replication group.Update requires: No interruption
* @property {String} SecurityGroupIds Required: No. A list of Amazon Virtual Private Cloud (Amazon VPC) security groups to associate with this replication
                  group. Use this property only when you are creating a replication group in a VPC.
                  If you specify the CacheSecurityGroupNames property, do not specify
                  this property; you can specify only one.Update requires: No interruption
* @property {String} SnapshotArns Required: No. A single-element string list that specifies an ARN of a Redis
                     .rdb snapshot file that is stored in Amazon Simple Storage Service (Amazon S3). The
                  snapshot file populates the node group. The Amazon S3 object name in the ARN cannot
                  contain commas. For example, you can specify
                     arn:aws:s3:::my_bucket/snapshot1.rdb.Update requires: Replacement
* @property {Number} SnapshotRetentionLimit Required: No. The number of days that ElastiCache retains automatic snapshots before deleting
                  them.Update requires: No interruption
* @property {String} SnapshotWindow Required: No. The time range (in UTC) when ElastiCache takes a daily snapshot of your node group.
                  For example, you can specify 05:00-09:00.Update requires: No interruption
*/
class ReplicationGroup extends WKResource {
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

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {String} Description Required: No. A description for the cache security group.Update requires: Updates are not supported.
*/
class SecurityGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SecurityGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {String} CacheSecurityGroupName Required: Yes. The name of the Cache Security Group to authorize.Update requires: Updates are not supported.
* @property {String} EC2SecurityGroupName Required: Yes. Name of the EC2 Security Group to include in the authorization.Update requires: Updates are not supported.
* @property {String} EC2SecurityGroupOwnerId Required: No. Specifies the AWS Account ID of the owner of the EC2 security group specified
                  in the EC2SecurityGroupName property. The AWS access key ID is not an acceptable
                  value.Update requires: Updates are not supported.
*/
class SecurityGroupIngress extends WKResource {
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

/** @memberof module:ElastiCache
*   @extends WKResource
* @property {String} Description Required: Yes. The description for the cache subnet group.Update requires: No interruption
* @property {String} SubnetIds Required: Yes. The Amazon EC2 subnet IDs for the cache subnet group.Update requires: No interruption
*/
class SubnetGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ElastiCache::SubnetGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  CacheCluster: CacheCluster,
  ParameterGroup: ParameterGroup,
  ReplicationGroup: ReplicationGroup,
  SecurityGroup: SecurityGroup,
  SecurityGroupIngress: SecurityGroupIngress,
  SubnetGroup: SubnetGroup
}
