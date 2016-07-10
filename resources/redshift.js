'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

class ClusterSecurityGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

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

module.exports = {
  Cluster: Cluster,
  ClusterParameterGroup: ClusterParameterGroup,
  ClusterSecurityGroup: ClusterSecurityGroup,
  ClusterSecurityGroupIngress: ClusterSecurityGroupIngress,
  ClusterSubnetGroup: ClusterSubnetGroup
}
