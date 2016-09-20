'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module Redshift */

/** @memberof module:Redshift
*   @extends WKResource
* @property {Boolean} AllowVersionUpgrade Required: No. When a new version of the Amazon Redshift is released, indicates whether upgrades can be
                  applied to the engine that is running on the cluster. The upgrades are applied
                  during the maintenance window.Update requires: No interruption
* @property {Number} AutomatedSnapshotRetentionPeriod Required: No. The number of days that automated snapshots are retained. If you set the value
                  to 0, automated snapshots are disabled.Update requires: No interruption
* @property {String} AvailabilityZone Required: No. The Amazon EC2 Availability Zone in which you want to provision your Amazon Redshift cluster.
                  For example, if you have several Amazon EC2 instances running in a specific
                  Availability Zone, you might want the cluster to be provisioned in the same zone
                  in order to decrease network latency.Update requires: Replacement
* @property {String} ClusterParameterGroupName Required: No. The name of the parameter group that you want to associate with this
                  cluster.Update requires: Some interruptions
* @property {String} ClusterSecurityGroups Required: No. A list of security groups that you want to associate with this cluster.Update requires: No interruption
* @property {String} ClusterSubnetGroupName Required: No. The name of a cluster subnet group that you want to associate with this
                  cluster.Update requires: Replacement
* @property {String} ClusterType Required: Yes. The type of cluster. You can specify single-node or
                     multi-node.Update requires: Some interruptions
* @property {String} ClusterVersion Required: No. The Amazon Redshift engine version that you want to deploy on the cluster.Update requires: No interruption
* @property {String} DBName Required: Yes. The name of the first database that is created when the cluster is
                  created.Update requires: Replacement
* @property {String} ElasticIp Required: No. The Elastic IP (EIP) address for the cluster.Update requires: Replacement
* @property {Boolean} Encrypted Required: No. Indicates whether the data in the cluster is encrypted at rest.Update requires: Replacement
* @property {String} HsmClientCertificateIdentifier Required: No. Specifies the name of the HSM client certificate that the Amazon Redshift cluster uses to
                  retrieve the data encryption keys stored in an HSM.Update requires: No interruption
* @property {String} HsmConfigurationIdentifier Required: No. Specifies the name of the HSM configuration that contains the information that
                  the Amazon Redshift cluster can use to retrieve and store keys in an HSM.Update requires: No interruption
* @property {String} KmsKeyId Required: No. The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt data in the
                  cluster.Update requires: Replacement
* @property {String} MasterUsername Required: Yes. The user name that is associated with the master user account for this
                  cluster.Update requires: Replacement
* @property {String} MasterUserPassword Required: Yes. The  password associated with the master user account for this cluster.Update requires: No interruption
* @property {String} NodeType Required: Yes. The node type that is provisioned for this cluster.Update requires: No interruption
* @property {Number} NumberOfNodes Required: Conditional. The number of compute nodes in the cluster. If you specify
                     multi-node for the ClusterType parameter, you must
                  specify a number greater than 1.Update requires: Some interruptions
* @property {String} OwnerAccount Required: No. When you restore from a snapshot from another AWS account, the 12-digit AWS
                  account ID that contains that snapshot.Update requires: Replacement
* @property {Number} Port Required: No. The port number on which the cluster accepts incoming connections.Update requires: Replacement
* @property {String} PreferredMaintenanceWindow Required: No. The weekly time range (in UTC) during which automated cluster maintenance can
                  occur.  The format of the time range is
                  ddd:hh24:mi-ddd:hh24:mi.Update requires: No interruption
* @property {Boolean} PubliclyAccessible Required: No. Indicates whether the cluster can be accessed from a public network.Update requires: Replacement
* @property {String} SnapshotIdentifier Required: Conditional. The name of the snapshot from which to create a new cluster.Update requires: Replacement
* @property {String} VpcSecurityGroupIds Required: No. A list of VPC security groups that are associated with this cluster.Update requires: No interruption
*/
function Cluster (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::Cluster'
    let properties = {
      AllowVersionUpgrade: new ResourceAttribute('AllowVersionUpgrade', Boolean, false, 'No', null),
      AutomatedSnapshotRetentionPeriod: new ResourceAttribute('AutomatedSnapshotRetentionPeriod', Number, false, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, false, 'No', null),
      ClusterParameterGroupName: new ResourceAttribute('ClusterParameterGroupName', String, false, 'No', null),
      ClusterSecurityGroups: new ResourceAttribute('ClusterSecurityGroups', String, true, 'No', null),
      ClusterSubnetGroupName: new ResourceAttribute('ClusterSubnetGroupName', String, false, 'No', null),
      ClusterType: new ResourceAttribute('ClusterType', String, false, 'Yes', null),
      ClusterVersion: new ResourceAttribute('ClusterVersion', String, false, 'No', null),
      DBName: new ResourceAttribute('DBName', String, false, 'Yes', null),
      ElasticIp: new ResourceAttribute('ElasticIp', String, false, 'No', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, false, 'No', null),
      HsmClientCertificateIdentifier: new ResourceAttribute('HsmClientCertificateIdentifier', String, false, 'No', null),
      HsmConfigurationIdentifier: new ResourceAttribute('HsmConfigurationIdentifier', String, false, 'No', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, false, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, false, 'Yes', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, false, 'Yes', null),
      NodeType: new ResourceAttribute('NodeType', String, false, 'Yes', null),
      NumberOfNodes: new ResourceAttribute('NumberOfNodes', Number, false, 'Conditional', null),
      OwnerAccount: new ResourceAttribute('OwnerAccount', String, false, 'No', null),
      Port: new ResourceAttribute('Port', Number, false, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, false, 'No', null),
      PubliclyAccessible: new ResourceAttribute('PubliclyAccessible', Boolean, false, 'No', null),
      SnapshotIdentifier: new ResourceAttribute('SnapshotIdentifier', String, false, 'Conditional', null),
      VpcSecurityGroupIds: new ResourceAttribute('VpcSecurityGroupIds', String, true, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Cluster.prototype = Object.create(WKResource.prototype)

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} Description Required: Yes. A description of the parameter group.Update requires: Replacement
* @property {String} ParameterGroupFamily Required: Yes. The Amazon Redshift engine version that applies to this cluster parameter group. The
                  cluster engine version determines the set of parameters that you can specify in
                  the Parameters property. Update requires: Replacement
* @property {AmazonRedshiftParameterType} Parameters Required: No. A list of parameter names and values that are allowed by the Amazon Redshift engine
                  version that you specified in the ParameterGroupFamily property. For
                  more information, see Amazon Redshift Parameter Groups in the
                  Amazon Redshift Cluster Management Guide.Update requires: No interruption
*/
function ClusterParameterGroup (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'Yes', null),
      ParameterGroupFamily: new ResourceAttribute('ParameterGroupFamily', String, false, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', types.AmazonRedshiftParameterType, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ClusterParameterGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} Description Required: Yes. A description of the security group.Update requires: Replacement
*/
function ClusterSecurityGroup (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ClusterSecurityGroup.prototype = Object.create(WKResource.prototype)

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} ClusterSecurityGroupName Required: Yes. The name of the Amazon Redshift security group that will be associated with the ingress
                  rule.Update requires: Replacement
* @property {String} CIDRIP Required: No. The IP address range that has inbound access to the Amazon Redshift security group.Update requires: Replacement
* @property {String} EC2SecurityGroupName Required: No. The Amazon EC2 security group that will be added the Amazon Redshift security group.Update requires: Replacement
* @property {String} EC2SecurityGroupOwnerId Required: Conditional. The 12-digit AWS account number of the owner of the Amazon EC2 security group that
                  is specified by the EC2SecurityGroupName parameter.Update requires: Replacement
*/
function ClusterSecurityGroupIngress (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroupIngress'
    let properties = {
      ClusterSecurityGroupName: new ResourceAttribute('ClusterSecurityGroupName', String, false, 'Yes', null),
      CIDRIP: new ResourceAttribute('CIDRIP', String, false, 'No', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, false, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, false, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ClusterSecurityGroupIngress.prototype = Object.create(WKResource.prototype)

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} Description Required: Yes. A description of the subnet group.Update requires: No interruption
* @property {String} SubnetIds Required: Yes. A list of VPC subnet IDs. You can modify a maximum of 20 subnets.Update requires: No interruption
*/
function ClusterSubnetGroup (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSubnetGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'Yes', null),
      SubnetIds: new ResourceAttribute('SubnetIds', String, true, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ClusterSubnetGroup.prototype = Object.create(WKResource.prototype)

module.exports = {  Cluster: Cluster,
  ClusterParameterGroup: ClusterParameterGroup,
  ClusterSecurityGroup: ClusterSecurityGroup,
  ClusterSecurityGroupIngress: ClusterSecurityGroupIngress,
  ClusterSubnetGroup: ClusterSubnetGroup
}
