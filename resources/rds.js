'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class DBCluster extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBCluster'
    let properties = {
      AvailabilityZones: new resource.ResourceProperty('AvailabilityZones', String, 'No', null),
      BackupRetentionPeriod: new resource.ResourceProperty('BackupRetentionPeriod', Number, 'No', null),
      DatabaseName: new resource.ResourceProperty('DatabaseName', String, 'No', null),
      DBClusterParameterGroupName: new resource.ResourceProperty('DBClusterParameterGroupName', String, 'No', null),
      DBSubnetGroupName: new resource.ResourceProperty('DBSubnetGroupName', String, 'No', null),
      Engine: new resource.ResourceProperty('Engine', String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty('EngineVersion', String, 'No', null),
      KmsKeyId: new resource.ResourceProperty('KmsKeyId', String, 'No', null),
      MasterUsername: new resource.ResourceProperty('MasterUsername', String, 'Conditional', null),
      MasterUserPassword: new resource.ResourceProperty('MasterUserPassword', String, 'Conditional', null),
      Port: new resource.ResourceProperty('Port', Number, 'No', null),
      PreferredBackupWindow: new resource.ResourceProperty('PreferredBackupWindow', String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty('PreferredMaintenanceWindow', String, 'No', null),
      SnapshotIdentifier: new resource.ResourceProperty('SnapshotIdentifier', String, 'No', null),
      StorageEncrypted: new resource.ResourceProperty('StorageEncrypted', Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new resource.ResourceArray('VpcSecurityGroupIds', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBClusterParameterGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBClusterParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      Family: new resource.ResourceProperty('Family', String, 'Yes', null),
      Parameters: new resource.ResourceProperty('Parameters', Object, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBInstance extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBInstance'
    let properties = {
      AllocatedStorage: new resource.ResourceProperty('AllocatedStorage', String, 'Conditional', null),
      AllowMajorVersionUpgrade: new resource.ResourceProperty('AllowMajorVersionUpgrade', Boolean, 'No', null),
      AutoMinorVersionUpgrade: new resource.ResourceProperty('AutoMinorVersionUpgrade', Boolean, 'No', null),
      AvailabilityZone: new resource.ResourceProperty('AvailabilityZone', String, 'No', null),
      BackupRetentionPeriod: new resource.ResourceProperty('BackupRetentionPeriod', String, 'No', null),
      CharacterSetName: new resource.ResourceProperty('CharacterSetName', String, 'No', null),
      DBClusterIdentifier: new resource.ResourceProperty('DBClusterIdentifier', String, 'No', null),
      DBInstanceClass: new resource.ResourceProperty('DBInstanceClass', String, 'Yes', null),
      DBInstanceIdentifier: new resource.ResourceProperty('DBInstanceIdentifier', String, 'No', null),
      DBName: new resource.ResourceProperty('DBName', String, 'No', null),
      DBParameterGroupName: new resource.ResourceProperty('DBParameterGroupName', String, 'No', null),
      DBSecurityGroups: new resource.ResourceArray('DBSecurityGroups', String, 'No', null),
      DBSnapshotIdentifier: new resource.ResourceProperty('DBSnapshotIdentifier', String, 'No', null),
      DBSubnetGroupName: new resource.ResourceProperty('DBSubnetGroupName', String, 'No', null),
      Engine: new resource.ResourceProperty('Engine', String, 'Conditional', null),
      EngineVersion: new resource.ResourceProperty('EngineVersion', String, 'No', null),
      Iops: new resource.ResourceProperty('Iops', Number, 'Conditional', null),
      KmsKeyId: new resource.ResourceProperty('KmsKeyId', String, 'No', null),
      LicenseModel: new resource.ResourceProperty('LicenseModel', String, 'No', null),
      MasterUsername: new resource.ResourceProperty('MasterUsername', String, 'Conditional', null),
      MasterUserPassword: new resource.ResourceProperty('MasterUserPassword', String, 'Conditional', null),
      MultiAZ: new resource.ResourceProperty('MultiAZ', Boolean, 'No', null),
      OptionGroupName: new resource.ResourceProperty('OptionGroupName', String, 'No', null),
      Port: new resource.ResourceProperty('Port', String, 'No', null),
      PreferredBackupWindow: new resource.ResourceProperty('PreferredBackupWindow', String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty('PreferredMaintenanceWindow', String, 'No', null),
      PubliclyAccessible: new resource.ResourceProperty('PubliclyAccessible', Boolean, 'No', null),
      SourceDBInstanceIdentifier: new resource.ResourceProperty('SourceDBInstanceIdentifier', String, 'No', null),
      StorageEncrypted: new resource.ResourceProperty('StorageEncrypted', Boolean, 'Conditional', null),
      StorageType: new resource.ResourceProperty('StorageType', String, 'No', null),
      Tags: new tag.TagSet(),
      VPCSecurityGroups: new resource.ResourceArray('VPCSecurityGroups', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBParameterGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'Yes', null),
      Family: new resource.ResourceProperty('Family', String, 'Yes', null),
      Parameters: new resource.ResourceProperty('Parameters', Object, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroup'
    let properties = {
      EC2VpcId: new resource.ResourceProperty('EC2VpcId', String, 'Conditional', null),
      DBSecurityGroupIngress: new resource.ResourceArray('DBSecurityGroupIngress', types.RDSSecurityGroupRules, 'Yes', null),
      GroupDescription: new resource.ResourceProperty('GroupDescription', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroupIngress'
    let properties = {
      CIDRIP: new resource.ResourceProperty('CIDRIP', String, 'undefined', null),
      DBSecurityGroupName: new resource.ResourceProperty('DBSecurityGroupName', String, 'Yes', null),
      EC2SecurityGroupId: new resource.ResourceProperty('EC2SecurityGroupId', String, 'No', null),
      EC2SecurityGroupName: new resource.ResourceProperty('EC2SecurityGroupName', String, 'No', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty('EC2SecurityGroupOwnerId', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSubnetGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSubnetGroup'
    let properties = {
      DBSubnetGroupDescription: new resource.ResourceProperty('DBSubnetGroupDescription', String, 'Yes', null),
      SubnetIds: new resource.ResourceArray('SubnetIds', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EventSubscription extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::EventSubscription'
    let properties = {
      Enabled: new resource.ResourceProperty('Enabled', Boolean, 'No', null),
      EventCategories: new resource.ResourceArray('EventCategories', String, 'No', null),
      SnsTopicArn: new resource.ResourceProperty('SnsTopicArn', String, 'Yes', null),
      SourceIds: new resource.ResourceArray('SourceIds', String, 'No', null),
      SourceType: new resource.ResourceProperty('SourceType', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class OptionGroup extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::RDS::OptionGroup'
    let properties = {
      EngineName: new resource.ResourceProperty('EngineName', String, 'Yes', null),
      MajorEngineVersion: new resource.ResourceProperty('MajorEngineVersion', String, 'Yes', null),
      OptionGroupDescription: new resource.ResourceProperty('OptionGroupDescription', String, 'Yes', null),
      OptionConfigurations: new resource.ResourceProperty('OptionConfigurations', types.AmazonRDSOptionGroupOptionConfigurations, 'Yes', null),
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
