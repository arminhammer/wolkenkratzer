'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::Cluster'
    let properties = {
      AllowVersionUpgrade: new resource.ResourceProperty(Boolean, 'No', null),
      AutomatedSnapshotRetentionPeriod: new resource.ResourceProperty(Number, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      ClusterParameterGroupName: new resource.ResourceProperty(String, 'No', null),
      ClusterSecurityGroups: new resource.ResourceArray(String, 'No', null),
      ClusterSubnetGroupName: new resource.ResourceProperty(String, 'No', null),
      ClusterType: new resource.ResourceProperty(String, 'Yes', null),
      ClusterVersion: new resource.ResourceProperty(String, 'No', null),
      DBName: new resource.ResourceProperty(String, 'Yes', null),
      ElasticIp: new resource.ResourceProperty(String, 'No', null),
      Encrypted: new resource.ResourceProperty(Boolean, 'No', null),
      HsmClientCertificateIdentifier: new resource.ResourceProperty(String, 'No', null),
      HsmConfigurationIdentifier: new resource.ResourceProperty(String, 'No', null),
      KmsKeyId: new resource.ResourceProperty(String, 'No', null),
      MasterUsername: new resource.ResourceProperty(String, 'Yes', null),
      MasterUserPassword: new resource.ResourceProperty(String, 'Yes', null),
      NodeType: new resource.ResourceProperty(String, 'Yes', null),
      NumberOfNodes: new resource.ResourceProperty(Number, 'Conditional', null),
      OwnerAccount: new resource.ResourceProperty(String, 'No', null),
      Port: new resource.ResourceProperty(Number, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty(String, 'No', null),
      PubliclyAccessible: new resource.ResourceProperty(Boolean, 'No', null),
      SnapshotIdentifier: new resource.ResourceProperty(String, 'Conditional', null),
      VpcSecurityGroupIds: new resource.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterParameterGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null),
      ParameterGroupFamily: new resource.ResourceProperty(String, 'Yes', null),
      Parameters: new resource.ResourceProperty(types.AmazonRedshiftParameterType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSecurityGroupIngress'
    let properties = {
      ClusterSecurityGroupName: new resource.ResourceProperty(String, 'Yes', null),
      CIDRIP: new resource.ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new resource.ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClusterSubnetGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Redshift::ClusterSubnetGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null),
      SubnetIds: new resource.ResourceArray(String, 'Yes', null)
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