'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module RDS */

/** @memberof module:RDS
*   @extends WKResource
* @property {String} AvailabilityZones Required: No. A list of Availability Zones (AZs) in which DB instances in the cluster can be
                  created.Update requires: Replacement
* @property {Number} BackupRetentionPeriod Required: No. The number of days for which automatic backups are retained. For more
                  information, see CreateDBCluster in the Amazon Relational Database Service API Reference.Update requires: No interruption or some
                     interruptions. For more information, see ModifyDBInstance in the
                     Amazon Relational Database Service API Reference.
* @property {String} DatabaseName Required: No. The name of your database. You can specify a name of up to eight alpha-numeric
                  characters. If you do not provide a name, Amazon Relational Database Service (Amazon RDS) won't create a
                  database in this DB cluster.Update requires: Replacement
* @property {String} DBClusterParameterGroupName Required: No. The name of the DB cluster parameter group to associate with this DB cluster.
                  For the default value, see the DBClusterParameterGroupName parameter
                  of the CreateDBCluster
                  action in the Amazon Relational Database Service API Reference.Update requires: Some interruptions
* @property {String} DBSubnetGroupName Required: No. A DB subnet group that you want to associate with this DB cluster.Update requires: Replacement
* @property {String} Engine Required: Yes. The name of the database engine that you want to use for this DB
                  cluster.For valid values, see the Engine parameter of the CreateDBCluster action in the
                  Amazon Relational Database Service API Reference.Update requires: Replacement
* @property {String} EngineVersion Required: No. The version number of the database engine that you want to use.Update requires: Replacement
* @property {String} KmsKeyId Required: No. The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to
                  encrypt the database instances in the DB cluster, such as
                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
                  If you enable the StorageEncrypted property but don't specify this
                  property, the default master key is used. If you specify this property, you must
                  set the StorageEncrypted property to true.If you specify the SnapshotIdentifier, do not specify this
                  property. The value is inherited from the snapshot DB cluster.Update requires: Replacement.
* @property {String} MasterUsername Required: Conditional. The master user name for the DB instance.Update requires: Replacement.
* @property {String} MasterUserPassword Required: Conditional. The password for the master database user.Update requires: No interruption
* @property {Number} Port Required: No. The port number on which the DB instances in the cluster can accept
                  connections.Update requires: No interruption
* @property {String} PreferredBackupWindow Required: No. if automated backups are enabled (see the BackupRetentionPeriod
                  property), the daily time range in UTC during which you want to create automated
                  backups.For valid values, see the PreferredBackupWindow parameter of the
                     CreateDBInstance action in the
                  Amazon Relational Database Service API Reference.Update requires: No interruption
* @property {String} PreferredMaintenanceWindow Required: No. The weekly time range (in UTC) during which system maintenance can
                  occur.For valid values, see the PreferredMaintenanceWindow parameter of
                  the CreateDBInstance action in the
                  Amazon Relational Database Service API Reference.Update requires: No interruption or some
                     interruptions. For more information, see ModifyDBInstance in the
                     Amazon Relational Database Service API Reference.
* @property {String} SnapshotIdentifier Required: No. The identifier for the DB cluster snapshot from which you want to
                  restore.Update requires: Replacement
* @property {Boolean} StorageEncrypted Required: Conditional. Indicates whether the DB instances in the cluster are encrypted.If you specify the SnapshotIdentifier property, do not specify
                  this property. The value is inherited from the snapshot DB cluster.Update requires: Replacement.
* @property {resourcetags} Tags Required: No. The tags that you want to attach to this DB cluster.Update requires: Updates are not supported.
* @property {String} VpcSecurityGroupIds Required: No. A list of VPC security groups to associate with this DB cluster.Update requires: No interruption
*/
function DBCluster (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBCluster'
    let properties = {
      AvailabilityZones: new ResourceAttribute('AvailabilityZones', String, false, 'No', null),
      BackupRetentionPeriod: new ResourceAttribute('BackupRetentionPeriod', Number, false, 'No', null),
      DatabaseName: new ResourceAttribute('DatabaseName', String, false, 'No', null),
      DBClusterParameterGroupName: new ResourceAttribute('DBClusterParameterGroupName', String, false, 'No', null),
      DBSubnetGroupName: new ResourceAttribute('DBSubnetGroupName', String, false, 'No', null),
      Engine: new ResourceAttribute('Engine', String, false, 'Yes', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, false, 'No', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, false, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, false, 'Conditional', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, false, 'Conditional', null),
      Port: new ResourceAttribute('Port', Number, false, 'No', null),
      PreferredBackupWindow: new ResourceAttribute('PreferredBackupWindow', String, false, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, false, 'No', null),
      SnapshotIdentifier: new ResourceAttribute('SnapshotIdentifier', String, false, 'No', null),
      StorageEncrypted: new ResourceAttribute('StorageEncrypted', Boolean, false, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new ResourceAttribute('VpcSecurityGroupIds', String, true, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBCluster.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} Description Required: Yes. A friendly description for this DB cluster parameter group.Update requires: Replacement
* @property {String} Family Required: Yes. The database family of this DB cluster parameter group, such as
                     aurora5.6.Update requires: Replacement
* @property {Object} Parameters Required: Yes. The parameters to set for this DB cluster parameter group. For a list of
                  parameter keys, see Appendix: DB Cluster
                     and DB Instance Parameters in the
                     Amazon Relational Database Service User Guide.Changes to dynamic parameters are applied immediately. Changes to static
                  parameters require a reboot without failover to the DB instance that is associated
                  with the parameter group before the change can take effect.Update requires: No interruption or some
                     interruptions, depending on the parameters that you update.
* @property {resourcetags} Tags Required: No. The tags that you want to attach to this parameter group.Update requires: Updates are not supported.
*/
function DBClusterParameterGroup (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBClusterParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'Yes', null),
      Family: new ResourceAttribute('Family', String, false, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', Object, false, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBClusterParameterGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} AllocatedStorage Required: Conditional. The allocated storage size specified in gigabytes (GB).If any value is used in the Iops parameter,
                     AllocatedStorage must be at least 100 GB, which
                  corresponds to the minimum Iops value of 1000. If
                     Iops is increased (in 1000 IOPS increments), then
                     AllocatedStorage must also be increased (in 100 GB
                  increments) correspondingly.Update requires: No interruption
* @property {Boolean} AllowMajorVersionUpgrade Required: No. Indicates whether major version upgrades are allowed. Changing this parameter
                  does not result in an outage, and the change is applied asynchronously as soon as
                  possible.Constraints: This parameter must be set to
                     true when you specify an EngineVersion that differs
                  from the DB instance's current major version.Update requires: No interruption
* @property {Boolean} AutoMinorVersionUpgrade Required: No. Indicates that minor engine upgrades will be applied automatically to the DB
                  instance during the maintenance window. The default value is
                  true.Update requires: No interruption or some
                     interruptions. For more information, see ModifyDBInstance in the
                     Amazon Relational Database Service API Reference.
* @property {String} AvailabilityZone Required: No. The name of the Availability Zone where the DB instance is located. You cannot
                  set the AvailabilityZone parameter if the
                     MultiAZ parameter is set to true.Update requires: Replacement
* @property {String} BackupRetentionPeriod Required: No. The number of days for which automatic DB snapshots are retained.ImportantIf this DB instance is deleted or replaced during an update, all
                        automated snapshots are deleted. However, manual DB snapshot are
                        retained.Update requires: No interruption or some
                     interruptions. For more information, see ModifyDBInstance in the
                     Amazon Relational Database Service API Reference.
* @property {String} CharacterSetName Required: No. For supported engines, specifies the character set to associate with the
                  database instance. For more information, see Appendix: Oracle
                     Character Sets Supported in Amazon RDS in the
                     Amazon Relational Database Service User Guide.If you specify the DBSnapshotIdentifier or
                     SourceDBInstanceIdentifier property, do not specify this property.
                  The value is inherited from the snapshot or source database instance.Update requires: Replacement
* @property {String} DBClusterIdentifier Required: No. The identifier of an existing DB cluster that this instance will be associated
                  with. If you specify this property, specify aurora for the
                     Engine property and do not specify any of the following
                  properties: AllocatedStorage, CharacterSetName,
                     DBSecurityGroups, SourceDBInstanceIdentifier,
                  and StorageType.Amazon RDS assigns the first DB instance in the cluster as the primary and
                  additional DB instances as replicas.Update requires: Replacement
* @property {String} DBInstanceClass Required: Yes. The name of the compute and memory capacity class of the DB instance.Update requires: Some interruptions
* @property {String} DBInstanceIdentifier Required: No. A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lower
                  case. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses
                  that ID for the DB instance. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} DBName Required: No. The name of the initial database of this instance that was provided at create
                  time, if one was specified. This same name is returned for the life of the DB
                  instance.NoteIf you restore from a snapshot, do specify this property for the MySQL or
                     MariaDB engines.Update requires: Replacement
* @property {String} DBParameterGroupName Required: No. The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup
                  resource created in the template.Update requires: No interruption or some interruptions. If any of the data members of the referenced parameter group are changed during an update, the database instance might need to be restarted, causing some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
* @property {String} DBSecurityGroups Required: No. A list of the DB security groups to assign to the Amazon RDS instance. The list can
                  include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup
                  resources created in the template.If you set DBSecurityGroups, you must not set VPCSecurityGroups, and
                  vice-versa.Update requires: No interruption
* @property {String} DBSnapshotIdentifier Required: No. The identifier for the DB snapshot to restore from.By specifying this property, you can create a DB instance from the specified DB
                  snapshot. If the DBSnapshotIdentifier property is an empty string or the
                  AWS::RDS::DBInstance declaration has no DBSnapshotIdentifier property, the
                  database is created as a new database. If the property contains a value (other
                  than empty string), AWS CloudFormation creates a database from the specified snapshot. If a
                  snapshot with the specified name does not exist, the database creation fails and
                  the stack rolls back.Some DB instance properties are not valid when you restore from a snapshot,
                  such as the MasterUsername and MasterUserPassword
                  properties. For information about the properties that you can specify, see the
                     RestoreDBInstanceFromDBSnapshot action in the
                     Amazon Relational Database Service API Reference.Update requires: Replacement
* @property {String} DBSubnetGroupName Required: No. A DB subnet group to associate with the DB instance.If there is no DB subnet group, then it is a non-VPC DB instance.For more information about using Amazon RDS in a VPC, go to Using Amazon RDS
                     with Amazon Virtual Private Cloud (VPC) in the
                     Amazon Relational Database Service Developer Guide.Update requires: Replacement
* @property {String} Engine Required: Conditional. The name of the database engine that the DB instance uses. This property is
                  optional when you specify the DBSnapshotIdentifier property to create
                  DB instances.For valid values, see the Engine parameter of the CreateDBInstance action in the
                  Amazon Relational Database Service API Reference.Update requires: Replacement
* @property {String} EngineVersion Required: No. The version number of the database engine to use.Update requires: Some interruptions
* @property {Number} Iops Required: Conditional. The number of I/O operations per second (IOPS) that the database provisions.
                  The value must be equal to or greater than 1000.If you specify this property, you must follow the range of allowed ratios of
                  your requested IOPS rate to the amount of storage that you allocate (IOPS to
                  allocated storage).  For example, you can provision an Oracle database instance
                  with 1000 IOPS and 200 GB of storage (a ratio of 5:1) or
                  specify 2000 IOPS with 200 GB of storage (a ratio of 10:1). For more information,
                  see Amazon RDS Provisioned IOPS
                     Storage to Improve Performance in the
                     Amazon Relational Database Service User Guide.Update requires: No interruption
* @property {String} KmsKeyId Required: No. The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to
                  encrypt the database instance, such as
                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
                  If you enable the StorageEncrypted property but don't specify this
                  property, the default master key is used. If you specify this property, you must
                  set the StorageEncrypted property to true.If you specify the DBSnapshotIdentifier or
                     SourceDBInstanceIdentifier property, do not specify this property.
                  The value is inherited from the snapshot or source database instance.NoteCurrently, if you specify DBSecurityGroups, this property is
                     ignored. If you want to specify a security group and this property, you must
                     use a VPC security group. For more information about Amazon RDS and VPC, see Using Amazon RDS with Amazon VPC in the
                        Amazon Relational Database Service User Guide.Update requires: Replacement.
* @property {String} LicenseModel Required: No. The license model information for the DB instance.Update requires: Replacement.
* @property {String} MasterUsername Required: Conditional. The master user name for the database instance. This property is optional when
                  you specify the DBSnapshotIdentifier or the
                     DBClusterIdentifier property to create DB instances. NoteIf you specify the SourceDBInstanceIdentifier or
                           DBSnapshotIdentifier property, do not specify this property.
                        The value is inherited from the source database instance or snapshot.Update requires: Replacement.
* @property {String} MasterUserPassword Required: Conditional. The master password for the database instance. This property is optional when
                  you specify the DBSnapshotIdentifier or the
                     DBClusterIdentifier property to create DB instances.NoteIf you specify the SourceDBInstanceIdentifier property, do not
                     specify this property. The value is inherited from the source database
                     instance.Update requires: No interruption.
* @property {Boolean} MultiAZ Required: No. Specifies if the database instance is a multiple Availability Zone deployment.
                  You cannot set the AvailabilityZone parameter if the
                     MultiAZ parameter is set to true.NoteDo not specify this property if you want a Multi-AZ deployment for a SQL
                        Server database instance. Use the mirroring option in an option group to set
                        Multi-AZ for a SQL Server database instance.Update requires: No interruption.
* @property {String} OptionGroupName Required: No. An option group that this database instance is associated with.Update requires: No interruption.
* @property {String} Port Required: No. The port for the instance.Update requires: Replacement.
* @property {String} PreferredBackupWindow Required: No. The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod property. For valid values, see the PreferredBackupWindow parameter for the CreateDBInstance action in the Amazon Relational Database Service API Reference.Update requires: No interruption.
* @property {String} PreferredMaintenanceWindow Required: No. The weekly time range (in UTC) during which system maintenance can occur. For valid values, see the PreferredMaintenanceWindow parameter for the CreateDBInstance action in the Amazon Relational Database Service API Reference.NoteThis property applies during the initial resource creation. If you use AWS CloudFormation to update the DB instance, AWS CloudFormation applies those updates immediately.Update requires: No interruption or some
                     interruptions. For more information, see ModifyDBInstance in the
                     Amazon Relational Database Service API Reference.
* @property {Boolean} PubliclyAccessible Required: No. Indicates whether the database instance is an Internet-facing instance. If you
                  specify true, an instance is created with a publicly resolvable DNS
                  name, which resolves to a public IP address. If you specify false, an
                  internal instance is created with a DNS name that resolves to a private IP
                  address. The default behavior value depends on your VPC setup and the database subnet
                  group. For more information, see the PubliclyAccessible parameter in
                     CreateDBInstance in the Amazon Relational Database Service API Reference.If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the
DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,
see DependsOn Attribute.NoteCurrently, if you specify DBSecurityGroups, this property is
                     ignored. If you want to specify a security group and this property, you must
                     use a VPC security group. For more information about Amazon RDS and VPC, see Using Amazon RDS with Amazon VPC in the
                        Amazon Relational Database Service User Guide.Update requires: Replacement.
* @property {String} SourceDBInstanceIdentifier Required: No. If you want to create a read replica DB instance, specify the ID of the source
                  database instance. Each database instance can have a certain number of read
                  replicas. For more information, see Working with Read Replicas in the
                     Amazon Relational Database Service Developer Guide.The SourceDBInstanceIdentifier property determines whether a
                  database instance is a read replica. If you remove the
                     SourceDBInstanceIdentifier property from your current template and
                  then update your stack, the read replica is deleted and a new database instance
                  (not a read replica) is created.ImportantRead replicas do not support deletion policies. Any deletion policy
                           that's associated with a read replica is ignored.If you specify SourceDBInstanceIdentifier, do not set the
                              MultiAZ property to true and do not specify
                           the DBSnapshotIdentifier property. You cannot deploy read
                           replicas in multiple Availability Zones, and you cannot create a read
                           replica from a snapshot.Do not set the BackupRetentionPeriod,
                           DBName, MasterUsername,
                              MasterUserPassword, and
                              PreferredBackupWindow properties. The database attributes
                           are inherited from the source database instance, and backups are disabled
                           for read replicas.If the source DB instance is in a different region than the read
                           replica, specify a valid DB instance ARN. For more information, see
                              Constructing a Amazon RDS Amazon Resource Name (ARN) in the
                              Amazon Relational Database Service User Guide.For DB instances in an Amazon Aurora clusters, do not specify this
                           property. Amazon RDS assigns automatically assigns a writer and reader DB
                           instances.Update requires: Replacement.
* @property {Boolean} StorageEncrypted Required: Conditional. Indicates whether the database instance is encrypted.If you specify the DBClusterIdentifier,
                     DBSnapshotIdentifier, or SourceDBInstanceIdentifier
                  property, do not specify this property. The value is inherited from the cluster,
                  snapshot, or source database instance.Update requires: Replacement.
* @property {String} StorageType Required: No. The storage type associated with this database instance.For the default and valid values, see the StorageType parameter of
                  the CreateDBInstance action in the
                  Amazon Relational Database Service API Reference.Update requires: Some interruptions
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this database
                  instance.Update requires: No interruption.
* @property {String} VPCSecurityGroups Required: No. A list of the VPC security group IDs to assign to the Amazon RDS instance. The list can include both the physical IDs of existing VPC security groups or references to AWS::EC2::SecurityGroup resources created in the template.If you set VPCSecurityGroups, you must not set DBSecurityGroups, and
                  vice-versa.ImportantYou can migrate a database instance in your stack from an RDS DB security
                     group to a VPC security group, but you should keep the following points in
                     mind:You cannot revert to using an RDS security group once you have
                           established a VPC security group membership.When you migrate your DB instance to VPC security groups, if your
                           stack update rolls back because of another failure in the database
                           instance update, or because of an update failure in another AWS CloudFormation
                           resource, the rollback will fail because it cannot revert to an RDS
                           security group.To avoid this situation, only migrate your DB instance to using VPC security
                     groups when that is the only change in your stack
                     template.Update requires: No interruption.
*/
function DBInstance (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBInstance'
    let properties = {
      AllocatedStorage: new ResourceAttribute('AllocatedStorage', String, false, 'Conditional', null),
      AllowMajorVersionUpgrade: new ResourceAttribute('AllowMajorVersionUpgrade', Boolean, false, 'No', null),
      AutoMinorVersionUpgrade: new ResourceAttribute('AutoMinorVersionUpgrade', Boolean, false, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, false, 'No', null),
      BackupRetentionPeriod: new ResourceAttribute('BackupRetentionPeriod', String, false, 'No', null),
      CharacterSetName: new ResourceAttribute('CharacterSetName', String, false, 'No', null),
      DBClusterIdentifier: new ResourceAttribute('DBClusterIdentifier', String, false, 'No', null),
      DBInstanceClass: new ResourceAttribute('DBInstanceClass', String, false, 'Yes', null),
      DBInstanceIdentifier: new ResourceAttribute('DBInstanceIdentifier', String, false, 'No', null),
      DBName: new ResourceAttribute('DBName', String, false, 'No', null),
      DBParameterGroupName: new ResourceAttribute('DBParameterGroupName', String, false, 'No', null),
      DBSecurityGroups: new ResourceAttribute('DBSecurityGroups', String, true, 'No', null),
      DBSnapshotIdentifier: new ResourceAttribute('DBSnapshotIdentifier', String, false, 'No', null),
      DBSubnetGroupName: new ResourceAttribute('DBSubnetGroupName', String, false, 'No', null),
      Engine: new ResourceAttribute('Engine', String, false, 'Conditional', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, false, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, false, 'Conditional', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, false, 'No', null),
      LicenseModel: new ResourceAttribute('LicenseModel', String, false, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, false, 'Conditional', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, false, 'Conditional', null),
      MultiAZ: new ResourceAttribute('MultiAZ', Boolean, false, 'No', null),
      OptionGroupName: new ResourceAttribute('OptionGroupName', String, false, 'No', null),
      Port: new ResourceAttribute('Port', String, false, 'No', null),
      PreferredBackupWindow: new ResourceAttribute('PreferredBackupWindow', String, false, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, false, 'No', null),
      PubliclyAccessible: new ResourceAttribute('PubliclyAccessible', Boolean, false, 'No', null),
      SourceDBInstanceIdentifier: new ResourceAttribute('SourceDBInstanceIdentifier', String, false, 'No', null),
      StorageEncrypted: new ResourceAttribute('StorageEncrypted', Boolean, false, 'Conditional', null),
      StorageType: new ResourceAttribute('StorageType', String, false, 'No', null),
      Tags: new tag.TagSet(),
      VPCSecurityGroups: new ResourceAttribute('VPCSecurityGroups', String, true, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBInstance.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} Description Required: Yes. A friendly description of the RDS parameter group. For example, "My Parameter Group".Update requires: Updates are not supported.
* @property {String} Family Required: Yes. The database family of this RDS parameter group. For example, "MySQL5.1".Update requires: Updates are not supported.
* @property {Object} Parameters Required: No. The parameters to set for this RDS parameter group.Update requires: No interruption or Some interruptions. Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), triggers AWS CloudFormation to reboot the associated DB instance without failover.
* @property {resourcetags} Tags Required: No. The tags that you want to attach to the RDS parameter group.Update requires: No interruption
*/
function DBParameterGroup (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'Yes', null),
      Family: new ResourceAttribute('Family', String, false, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', Object, false, 'No', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBParameterGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} EC2VpcId Required: Conditional. The Id of VPC. Indicates which VPC this DB Security Group should belong to.Update requires: Replacement
* @property {AmazonRDSSecurityGroupRule} DBSecurityGroupIngress Required: Yes. Network ingress authorization for an Amazon EC2 security group or an IP address range.Update requires: No interruption
* @property {String} GroupDescription Required: Yes. Description of the security group.Update requires: Replacement
* @property {resourcetags} Tags Required: No. The tags that you want to attach to the Amazon RDS DB security group.Update requires: No interruption
*/
function DBSecurityGroup (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroup'
    let properties = {
      EC2VpcId: new ResourceAttribute('EC2VpcId', String, false, 'Conditional', null),
      DBSecurityGroupIngress: new ResourceAttribute('DBSecurityGroupIngress', types.AmazonRDSSecurityGroupRule, true, 'Yes', null),
      GroupDescription: new ResourceAttribute('GroupDescription', String, false, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBSecurityGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} CIDRIP Required: No. The IP range to authorize.For an overview of CIDR ranges, go to the Wikipedia
                  Tutorial.Update requires: No interruption
* @property {String} DBSecurityGroupName Required: Yes. The name (ARN) of the AWS::RDS::DBSecurityGroup to which this ingress
                  will be added.Update requires: No interruption
* @property {String} EC2SecurityGroupId Required: No. The ID of the VPC or EC2 security group to authorize.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use
                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: No interruption
* @property {String} EC2SecurityGroupName Required: No. The name of the EC2 security group to authorize.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use
                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: No interruption
* @property {String} EC2SecurityGroupOwnerId Required: No. The AWS Account Number of the owner of the EC2 security group specified in the EC2SecurityGroupName
                  parameter. The AWS Access Key ID is not an acceptable value.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use
                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.Update requires: No interruption
*/
function DBSecurityGroupIngress (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroupIngress'
    let properties = {
      CIDRIP: new ResourceAttribute('CIDRIP', String, false, 'No', null),
      DBSecurityGroupName: new ResourceAttribute('DBSecurityGroupName', String, false, 'Yes', null),
      EC2SecurityGroupId: new ResourceAttribute('EC2SecurityGroupId', String, false, 'No', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, false, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBSecurityGroupIngress.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} DBSubnetGroupDescription Required: Yes. The description for the DB Subnet Group.Update requires: No interruption
* @property {String} SubnetIds Required: Yes. The EC2 Subnet IDs for the DB Subnet Group.Update requires: No interruption
* @property {resourcetags} Tags Required: No. The tags that you want to attach to the RDS database subnet group.Update requires: No interruption
*/
function DBSubnetGroup (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSubnetGroup'
    let properties = {
      DBSubnetGroupDescription: new ResourceAttribute('DBSubnetGroupDescription', String, false, 'Yes', null),
      SubnetIds: new ResourceAttribute('SubnetIds', String, true, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DBSubnetGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {Boolean} Enabled Required: No. Indicates whether to activate the subscription. If you don't specify this
                  property, AWS CloudFormation activates the subscription.Update requires: No interruption
* @property {String} EventCategories Required: No. A list of event categories that you want to subscribe to for a given source type. If you don't specify this property, you are notified about all event categories. For more information, see  Using Amazon RDS Event Notification in the Amazon Relational Database Service User Guide.Update requires: No interruption
* @property {String} SnsTopicArn Required: Yes. The Amazon Resource Name (ARN) of an Amazon SNS topic that you want to send event
                  notifications to.Update requires: Replacement
* @property {String} SourceIds Required: No. A list of identifiers for which Amazon RDS provides notification events.If you don't specify a value, notifications are provided for all sources. If
                  you specify multiple values, they must be of the same type. For example, if you
                  specify a database instance ID, all other values must be database instance
                  IDs.Update requires: No interruption
* @property {String} SourceType Required: Conditional. The type of source for which Amazon RDS provides notification events. For example, if you want to be notified of events generated by a database instance, set this parameter to db-instance. If you don't specify a value, notifications are provided for all source types. For valid values, see the SourceType parameter for the CreateEventSubscription action in the
                     Amazon Relational Database Service API Reference.Update requires: Replacement if you're removing this property after it was previously
                  specified. All other updates require no
                     interruption.
*/
function EventSubscription (name, propertiesObject) {
    let resourceType = 'AWS::RDS::EventSubscription'
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, false, 'No', null),
      EventCategories: new ResourceAttribute('EventCategories', String, true, 'No', null),
      SnsTopicArn: new ResourceAttribute('SnsTopicArn', String, false, 'Yes', null),
      SourceIds: new ResourceAttribute('SourceIds', String, true, 'No', null),
      SourceType: new ResourceAttribute('SourceType', String, false, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
EventSubscription.prototype = Object.create(WKResource.prototype)

/** @memberof module:RDS
*   @extends WKResource
* @property {String} EngineName Required: Yes. The name of the database engine that this option group is associated
                  with.Update requires: Replacement
* @property {String} MajorEngineVersion Required: Yes. The major version number of the database engine that this option group is
                  associated with.Update requires: Replacement
* @property {String} OptionGroupDescription Required: Yes. A description of the option group.Update requires: Replacement
* @property {AmazonRDSOptionGroupOptionConfigurations} OptionConfigurations Required: Yes. The configurations for this option group.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this option group.Update requires: No interruption
*/
function OptionGroup (name, propertiesObject) {
    let resourceType = 'AWS::RDS::OptionGroup'
    let properties = {
      EngineName: new ResourceAttribute('EngineName', String, false, 'Yes', null),
      MajorEngineVersion: new ResourceAttribute('MajorEngineVersion', String, false, 'Yes', null),
      OptionGroupDescription: new ResourceAttribute('OptionGroupDescription', String, false, 'Yes', null),
      OptionConfigurations: new ResourceAttribute('OptionConfigurations', types.AmazonRDSOptionGroupOptionConfigurations, false, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
OptionGroup.prototype = Object.create(WKResource.prototype)

module.exports = {  DBCluster: DBCluster,
  DBClusterParameterGroup: DBClusterParameterGroup,
  DBInstance: DBInstance,
  DBParameterGroup: DBParameterGroup,
  DBSecurityGroup: DBSecurityGroup,
  DBSecurityGroupIngress: DBSecurityGroupIngress,
  DBSubnetGroup: DBSubnetGroup,
  EventSubscription: EventSubscription,
  OptionGroup: OptionGroup
}
