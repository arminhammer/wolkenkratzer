'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::Cluster'
    let properties = {
      AllowVersionUpgrade: new resource.ResourceProperty('AllowVersionUpgrade', Boolean, 'No', null),
      AutomatedSnapshotRetentionPeriod: new resource.ResourceProperty('AutomatedSnapshotRetentionPeriod', Number, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'No', null),
      ClusterParameterGroupName: new resource.ResourceProperty('ClusterParameterGroupName', String, 'No', null),
      ClusterSecurityGroups: new resource.ResourceArray('ClusterSecurityGroups', String, 'No', null),
      ClusterSubnetGroupName: new resource.ResourceProperty('ClusterSubnetGroupName', String, 'No', null),
      ClusterType: new resource.ResourceProperty('ClusterType', String, 'Yes', null),
      ClusterVersion: new resource.ResourceProperty('ClusterVersion', String, 'No', null),
      DBName: new resource.ResourceProperty('DBName', String, 'Yes', null),
      ElasticIp: new resource.ResourceProperty('ElasticIp', String, 'No', null),
      Encrypted: new resource.ResourceProperty('Encrypted', Boolean, 'No', null),
      HsmClientCertificateIdentifier: new resource.ResourceProperty('HsmClientCertificateIdentifier', String, 'No', null),
      HsmConfigurationIdentifier: new resource.ResourceProperty('HsmConfigurationIdentifier', String, 'No', null),
      KmsKeyId: new resource.ResourceProperty('KmsKeyId', String, 'No', null),
      MasterUsername: new resource.ResourceProperty('MasterUsername', String, 'Yes', null),
      MasterUserPassword: new resource.ResourceProperty('MasterUserPassword', String, 'Yes', null),
      NodeType: new resource.ResourceProperty('NodeType', String, 'Yes', null),
      NumberOfNodes: new resource.ResourceProperty('NumberOfNodes', Number, 'Conditional', null),
      OwnerAccount: new resource.ResourceProperty('OwnerAccount', String, 'No', null),
      Port: new resource.ResourceProperty('Port', Number, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty('PreferredMaintenanceWindow', String, 'No', null),
      PubliclyAccessible: new resource.ResourceProperty('PubliclyAccessible', Boolean, 'No', null),
      SnapshotIdentifier: new resource.ResourceProperty('SnapshotIdentifier', String, 'Conditional', null),
      VpcSecurityGroupIds: new resource.ResourceArray('VpcSecurityGroupIds', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterParameterGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      ParameterGroupFamily: new resource.ResourceProperty('ParameterGroupFamily', String, 'Yes', null),
      Parameters: new resource.ResourceProperty('Parameters', types.AmazonRedshiftParameterType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroupIngress'
    let properties = {
      ClusterSecurityGroupName: new resource.ResourceProperty('ClusterSecurityGroupName', String, 'Yes', null),
      CIDRIP: new resource.ResourceProperty('CIDRIP', String, 'No', null),
      EC2SecurityGroupName: new resource.ResourceProperty('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty('EC2SecurityGroupOwnerId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSubnetGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSubnetGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      SubnetIds: new resource.ResourceArray('SubnetIds', String, 'Yes', null)
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
