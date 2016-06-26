'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Cluster extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::Cluster'
    let properties = {
      AllowVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AutomatedSnapshotRetentionPeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ClusterParameterGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ClusterSecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      ClusterSubnetGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ClusterType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ClusterVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ElasticIp: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Encrypted: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      HsmClientCertificateIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HsmConfigurationIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KmsKeyId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MasterUsername: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MasterUserPassword: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NodeType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      NumberOfNodes: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      OwnerAccount: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Port: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PubliclyAccessible: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      SnapshotIdentifier: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      VpcSecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterParameterGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterParameterGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ParameterGroupFamily: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Parameters: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonRedshiftParameterType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroupIngress extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroupIngress'
    let properties = {
      ClusterSecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      CIDRIP: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSubnetGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSubnetGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetIds: new wolkenkratzer.ResourceArray(String, 'Yes', null)
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