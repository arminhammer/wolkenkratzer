'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
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
class Cluster extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::Cluster'
    let properties = {
      AllowVersionUpgrade: new ResourceAttribute('AllowVersionUpgrade', Boolean, 'No', null),
      AutomatedSnapshotRetentionPeriod: new ResourceAttribute('AutomatedSnapshotRetentionPeriod', Number, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      ClusterParameterGroupName: new ResourceAttribute('ClusterParameterGroupName', String, 'No', null),
      ClusterSecurityGroups: new ResourceAttributeArray('ClusterSecurityGroups', String, 'No', null),
      ClusterSubnetGroupName: new ResourceAttribute('ClusterSubnetGroupName', String, 'No', null),
      ClusterType: new ResourceAttribute('ClusterType', String, 'Yes', null),
      ClusterVersion: new ResourceAttribute('ClusterVersion', String, 'No', null),
      DBName: new ResourceAttribute('DBName', String, 'Yes', null),
      ElasticIp: new ResourceAttribute('ElasticIp', String, 'No', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'No', null),
      HsmClientCertificateIdentifier: new ResourceAttribute('HsmClientCertificateIdentifier', String, 'No', null),
      HsmConfigurationIdentifier: new ResourceAttribute('HsmConfigurationIdentifier', String, 'No', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, 'Yes', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, 'Yes', null),
      NodeType: new ResourceAttribute('NodeType', String, 'Yes', null),
      NumberOfNodes: new ResourceAttribute('NumberOfNodes', Number, 'Conditional', null),
      OwnerAccount: new ResourceAttribute('OwnerAccount', String, 'No', null),
      Port: new ResourceAttribute('Port', Number, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, 'No', null),
      PubliclyAccessible: new ResourceAttribute('PubliclyAccessible', Boolean, 'No', null),
      SnapshotIdentifier: new ResourceAttribute('SnapshotIdentifier', String, 'Conditional', null),
      VpcSecurityGroupIds: new ResourceAttributeArray('VpcSecurityGroupIds', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

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
class ClusterParameterGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      ParameterGroupFamily: new ResourceAttribute('ParameterGroupFamily', String, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', types.AmazonRedshiftParameterType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} Description Required: Yes. A description of the security group.Update requires: Replacement
*/
class ClusterSecurityGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} ClusterSecurityGroupName Required: Yes. The name of the Amazon Redshift security group that will be associated with the ingress
                  rule.Update requires: Replacement
* @property {String} CIDRIP Required: No. The IP address range that has inbound access to the Amazon Redshift security group.Update requires: Replacement
* @property {String} EC2SecurityGroupName Required: No. The Amazon EC2 security group that will be added the Amazon Redshift security group.Update requires: Replacement
* @property {String} EC2SecurityGroupOwnerId Required: Conditional. The 12-digit AWS account number of the owner of the Amazon EC2 security group that
                  is specified by the EC2SecurityGroupName parameter.Update requires: Replacement
*/
class ClusterSecurityGroupIngress extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroupIngress'
    let properties = {
      ClusterSecurityGroupName: new ResourceAttribute('ClusterSecurityGroupName', String, 'Yes', null),
      CIDRIP: new ResourceAttribute('CIDRIP', String, 'No', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:Redshift
*   @extends WKResource
* @property {String} Description Required: Yes. A description of the subnet group.Update requires: No interruption
* @property {String} SubnetIds Required: Yes. A list of VPC subnet IDs. You can modify a maximum of 20 subnets.Update requires: No interruption
*/
class ClusterSubnetGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSubnetGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Cluster: Cluster,
  ClusterParameterGroup: ClusterParameterGroup,
  ClusterSecurityGroup: ClusterSecurityGroup,
  ClusterSecurityGroupIngress: ClusterSecurityGroupIngress,
  ClusterSubnetGroup: ClusterSubnetGroup
}
