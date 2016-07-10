'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class DBCluster extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBCluster'
    let properties = {
      AvailabilityZones: new ResourceAttribute('AvailabilityZones', String, 'No', null),
      BackupRetentionPeriod: new ResourceAttribute('BackupRetentionPeriod', Number, 'No', null),
      DatabaseName: new ResourceAttribute('DatabaseName', String, 'No', null),
      DBClusterParameterGroupName: new ResourceAttribute('DBClusterParameterGroupName', String, 'No', null),
      DBSubnetGroupName: new ResourceAttribute('DBSubnetGroupName', String, 'No', null),
      Engine: new ResourceAttribute('Engine', String, 'Yes', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, 'No', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, 'Conditional', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, 'Conditional', null),
      Port: new ResourceAttribute('Port', Number, 'No', null),
      PreferredBackupWindow: new ResourceAttribute('PreferredBackupWindow', String, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, 'No', null),
      SnapshotIdentifier: new ResourceAttribute('SnapshotIdentifier', String, 'No', null),
      StorageEncrypted: new ResourceAttribute('StorageEncrypted', Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new ResourceAttributeArray('VpcSecurityGroupIds', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBClusterParameterGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBClusterParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      Family: new ResourceAttribute('Family', String, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', Object, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBInstance extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBInstance'
    let properties = {
      AllocatedStorage: new ResourceAttribute('AllocatedStorage', String, 'Conditional', null),
      AllowMajorVersionUpgrade: new ResourceAttribute('AllowMajorVersionUpgrade', Boolean, 'No', null),
      AutoMinorVersionUpgrade: new ResourceAttribute('AutoMinorVersionUpgrade', Boolean, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      BackupRetentionPeriod: new ResourceAttribute('BackupRetentionPeriod', String, 'No', null),
      CharacterSetName: new ResourceAttribute('CharacterSetName', String, 'No', null),
      DBClusterIdentifier: new ResourceAttribute('DBClusterIdentifier', String, 'No', null),
      DBInstanceClass: new ResourceAttribute('DBInstanceClass', String, 'Yes', null),
      DBInstanceIdentifier: new ResourceAttribute('DBInstanceIdentifier', String, 'No', null),
      DBName: new ResourceAttribute('DBName', String, 'No', null),
      DBParameterGroupName: new ResourceAttribute('DBParameterGroupName', String, 'No', null),
      DBSecurityGroups: new ResourceAttributeArray('DBSecurityGroups', String, 'No', null),
      DBSnapshotIdentifier: new ResourceAttribute('DBSnapshotIdentifier', String, 'No', null),
      DBSubnetGroupName: new ResourceAttribute('DBSubnetGroupName', String, 'No', null),
      Engine: new ResourceAttribute('Engine', String, 'Conditional', null),
      EngineVersion: new ResourceAttribute('EngineVersion', String, 'No', null),
      Iops: new ResourceAttribute('Iops', Number, 'Conditional', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, 'No', null),
      LicenseModel: new ResourceAttribute('LicenseModel', String, 'No', null),
      MasterUsername: new ResourceAttribute('MasterUsername', String, 'Conditional', null),
      MasterUserPassword: new ResourceAttribute('MasterUserPassword', String, 'Conditional', null),
      MultiAZ: new ResourceAttribute('MultiAZ', Boolean, 'No', null),
      OptionGroupName: new ResourceAttribute('OptionGroupName', String, 'No', null),
      Port: new ResourceAttribute('Port', String, 'No', null),
      PreferredBackupWindow: new ResourceAttribute('PreferredBackupWindow', String, 'No', null),
      PreferredMaintenanceWindow: new ResourceAttribute('PreferredMaintenanceWindow', String, 'No', null),
      PubliclyAccessible: new ResourceAttribute('PubliclyAccessible', Boolean, 'No', null),
      SourceDBInstanceIdentifier: new ResourceAttribute('SourceDBInstanceIdentifier', String, 'No', null),
      StorageEncrypted: new ResourceAttribute('StorageEncrypted', Boolean, 'Conditional', null),
      StorageType: new ResourceAttribute('StorageType', String, 'No', null),
      Tags: new tag.TagSet(),
      VPCSecurityGroups: new ResourceAttributeArray('VPCSecurityGroups', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBParameterGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBParameterGroup'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'Yes', null),
      Family: new ResourceAttribute('Family', String, 'Yes', null),
      Parameters: new ResourceAttribute('Parameters', Object, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroup'
    let properties = {
      EC2VpcId: new ResourceAttribute('EC2VpcId', String, 'Conditional', null),
      DBSecurityGroupIngress: new ResourceAttributeArray('DBSecurityGroupIngress', types.RDSSecurityGroupRules, 'Yes', null),
      GroupDescription: new ResourceAttribute('GroupDescription', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroupIngress extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroupIngress'
    let properties = {
      CIDRIP: new ResourceAttribute('CIDRIP', String, 'undefined', null),
      DBSecurityGroupName: new ResourceAttribute('DBSecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupId: new ResourceAttribute('EC2SecurityGroupId', String, 'No', null),
      EC2SecurityGroupName: new ResourceAttribute('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new ResourceAttribute('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSubnetGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSubnetGroup'
    let properties = {
      DBSubnetGroupDescription: new ResourceAttribute('DBSubnetGroupDescription', String, 'Yes', null),
      SubnetIds: new ResourceAttributeArray('SubnetIds', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EventSubscription extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::EventSubscription'
    let properties = {
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      EventCategories: new ResourceAttributeArray('EventCategories', String, 'No', null),
      SnsTopicArn: new ResourceAttribute('SnsTopicArn', String, 'Yes', null),
      SourceIds: new ResourceAttributeArray('SourceIds', String, 'No', null),
      SourceType: new ResourceAttribute('SourceType', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class OptionGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::OptionGroup'
    let properties = {
      EngineName: new ResourceAttribute('EngineName', String, 'Yes', null),
      MajorEngineVersion: new ResourceAttribute('MajorEngineVersion', String, 'Yes', null),
      OptionGroupDescription: new ResourceAttribute('OptionGroupDescription', String, 'Yes', null),
      OptionConfigurations: new ResourceAttribute('OptionConfigurations', types.AmazonRDSOptionGroupOptionConfigurations, 'Yes', null),
      Tags: new tag.TagSet()
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
