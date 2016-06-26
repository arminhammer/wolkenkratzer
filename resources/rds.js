'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class DBCluster extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBCluster'
    let properties = {
      AvailabilityZones: new wolkenkratzer.ResourceProperty(String, 'No', null),
      BackupRetentionPeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DatabaseName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBClusterParameterGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBSubnetGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Engine: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      KmsKeyId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MasterUsername: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      MasterUserPassword: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      Port: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredBackupWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnapshotIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StorageEncrypted: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      Tags: new wolkenkratzer.TagSet(),
      VpcSecurityGroupIds: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBClusterParameterGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBClusterParameterGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Family: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Parameters: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBInstance extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBInstance'
    let properties = {
      AllocatedStorage: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      AllowMajorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AutoMinorVersionUpgrade: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AvailabilityZone: new wolkenkratzer.ResourceProperty(String, 'No', null),
      BackupRetentionPeriod: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CharacterSetName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBClusterIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBInstanceClass: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      DBInstanceIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBParameterGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBSecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null),
      DBSnapshotIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DBSubnetGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Engine: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      EngineVersion: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Iops: new wolkenkratzer.ResourceProperty(Number, 'Conditional', null),
      KmsKeyId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      LicenseModel: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MasterUsername: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      MasterUserPassword: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      MultiAZ: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      OptionGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Port: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredBackupWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PreferredMaintenanceWindow: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PubliclyAccessible: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      SourceDBInstanceIdentifier: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StorageEncrypted: new wolkenkratzer.ResourceProperty(Boolean, 'Conditional', null),
      StorageType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VPCSecurityGroups: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBParameterGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBParameterGroup'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Family: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Parameters: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroup'
    let properties = {
      EC2VpcId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      DBSecurityGroupIngress: new wolkenkratzer.ResourceArray(propertyTypes.RDSSecurityGroupRules, 'Yes', null),
      GroupDescription: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroupIngress extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroupIngress'
    let properties = {
      CIDRIP: new wolkenkratzer.ResourceProperty(String, 'undefined', null),
      DBSecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSubnetGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSubnetGroup'
    let properties = {
      DBSubnetGroupDescription: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SubnetIds: new wolkenkratzer.ResourceArray(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EventSubscription extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::EventSubscription'
    let properties = {
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EventCategories: new wolkenkratzer.ResourceArray(String, 'No', null),
      SnsTopicArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceIds: new wolkenkratzer.ResourceArray(String, 'No', null),
      SourceType: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class OptionGroup extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::OptionGroup'
    let properties = {
      EngineName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MajorEngineVersion: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OptionGroupDescription: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      OptionConfigurations: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonRDSOptionGroupOptionConfigurations, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  DBCluster: DBCluster,
  DBClusterParameterGroup: DBClusterParameterGroup,
  DBInstance: DBInstance,
  DBParameterGroup: DBParameterGroup,
  DBSecurityGroup: DBSecurityGroup,
  DBSecurityGroupIngress: DBSecurityGroupIngress,
  DBSubnetGroup: DBSubnetGroup,
  EventSubscription: EventSubscription,
  OptionGroup: OptionGroup
}