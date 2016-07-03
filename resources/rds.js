'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class DBCluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBCluster'
    let properties = {
      AvailabilityZones: new resource.ResourceProperty(String, 'No', null),
      BackupRetentionPeriod: new resource.ResourceProperty(Number, 'No', null),
      DatabaseName: new resource.ResourceProperty(String, 'No', null),
      DBClusterParameterGroupName: new resource.ResourceProperty(String, 'No', null),
      DBSubnetGroupName: new resource.ResourceProperty(String, 'No', null),
      Engine: new resource.ResourceProperty(String, 'Yes', null),
      EngineVersion: new resource.ResourceProperty(String, 'No', null),
      KmsKeyId: new resource.ResourceProperty(String, 'No', null),
      MasterUsername: new resource.ResourceProperty(String, 'Conditional', null),
      MasterUserPassword: new resource.ResourceProperty(String, 'Conditional', null),
      Port: new resource.ResourceProperty(Number, 'No', null),
      PreferredBackupWindow: new resource.ResourceProperty(String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty(String, 'No', null),
      SnapshotIdentifier: new resource.ResourceProperty(String, 'No', null),
      StorageEncrypted: new resource.ResourceProperty(Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpcSecurityGroupIds: new resource.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBClusterParameterGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBClusterParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null),
      Family: new resource.ResourceProperty(String, 'Yes', null),
      Parameters: new resource.ResourceProperty(Object, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBInstance extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBInstance'
    let properties = {
      AllocatedStorage: new resource.ResourceProperty(String, 'Conditional', null),
      AllowMajorVersionUpgrade: new resource.ResourceProperty(Boolean, 'No', null),
      AutoMinorVersionUpgrade: new resource.ResourceProperty(Boolean, 'No', null),
      AvailabilityZone: new resource.ResourceProperty(String, 'No', null),
      BackupRetentionPeriod: new resource.ResourceProperty(String, 'No', null),
      CharacterSetName: new resource.ResourceProperty(String, 'No', null),
      DBClusterIdentifier: new resource.ResourceProperty(String, 'No', null),
      DBInstanceClass: new resource.ResourceProperty(String, 'Yes', null),
      DBInstanceIdentifier: new resource.ResourceProperty(String, 'No', null),
      DBName: new resource.ResourceProperty(String, 'No', null),
      DBParameterGroupName: new resource.ResourceProperty(String, 'No', null),
      DBSecurityGroups: new resource.ResourceArray(String, 'No', null),
      DBSnapshotIdentifier: new resource.ResourceProperty(String, 'No', null),
      DBSubnetGroupName: new resource.ResourceProperty(String, 'No', null),
      Engine: new resource.ResourceProperty(String, 'Conditional', null),
      EngineVersion: new resource.ResourceProperty(String, 'No', null),
      Iops: new resource.ResourceProperty(Number, 'Conditional', null),
      KmsKeyId: new resource.ResourceProperty(String, 'No', null),
      LicenseModel: new resource.ResourceProperty(String, 'No', null),
      MasterUsername: new resource.ResourceProperty(String, 'Conditional', null),
      MasterUserPassword: new resource.ResourceProperty(String, 'Conditional', null),
      MultiAZ: new resource.ResourceProperty(Boolean, 'No', null),
      OptionGroupName: new resource.ResourceProperty(String, 'No', null),
      Port: new resource.ResourceProperty(String, 'No', null),
      PreferredBackupWindow: new resource.ResourceProperty(String, 'No', null),
      PreferredMaintenanceWindow: new resource.ResourceProperty(String, 'No', null),
      PubliclyAccessible: new resource.ResourceProperty(Boolean, 'No', null),
      SourceDBInstanceIdentifier: new resource.ResourceProperty(String, 'No', null),
      StorageEncrypted: new resource.ResourceProperty(Boolean, 'Conditional', null),
      StorageType: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet(),
      VPCSecurityGroups: new resource.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBParameterGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBParameterGroup'
    let properties = {
      Description: new resource.ResourceProperty(String, 'Yes', null),
      Family: new resource.ResourceProperty(String, 'Yes', null),
      Parameters: new resource.ResourceProperty(Object, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroup'
    let properties = {
      EC2VpcId: new resource.ResourceProperty(String, 'Conditional', null),
      DBSecurityGroupIngress: new resource.ResourceArray(types.RDSSecurityGroupRules, 'Yes', null),
      GroupDescription: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSecurityGroupIngress extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSecurityGroupIngress'
    let properties = {
      CIDRIP: new resource.ResourceProperty(String, 'undefined', null),
      DBSecurityGroupName: new resource.ResourceProperty(String, 'Yes', null),
      EC2SecurityGroupId: new resource.ResourceProperty(String, 'No', null),
      EC2SecurityGroupName: new resource.ResourceProperty(String, 'No', null),
      EC2SecurityGroupOwnerId: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class DBSubnetGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::DBSubnetGroup'
    let properties = {
      DBSubnetGroupDescription: new resource.ResourceProperty(String, 'Yes', null),
      SubnetIds: new resource.ResourceArray(String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class EventSubscription extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::EventSubscription'
    let properties = {
      Enabled: new resource.ResourceProperty(Boolean, 'No', null),
      EventCategories: new resource.ResourceArray(String, 'No', null),
      SnsTopicArn: new resource.ResourceProperty(String, 'Yes', null),
      SourceIds: new resource.ResourceArray(String, 'No', null),
      SourceType: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class OptionGroup extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::RDS::OptionGroup'
    let properties = {
      EngineName: new resource.ResourceProperty(String, 'Yes', null),
      MajorEngineVersion: new resource.ResourceProperty(String, 'Yes', null),
      OptionGroupDescription: new resource.ResourceProperty(String, 'Yes', null),
      OptionConfigurations: new resource.ResourceProperty(types.AmazonRDSOptionGroupOptionConfigurations, 'Yes', null),
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