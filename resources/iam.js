'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class AccessKey extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Status: new wolkenkratzer.ResourceProperty(String, 'No', null),
      UserName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Group extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, 'No', null),
      Path: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Policies: new wolkenkratzer.ResourceArray(propertyTypes.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceProfile extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Roles: new wolkenkratzer.ResourceArray(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ManagedPolicy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Groups: new wolkenkratzer.ResourceArray(String, 'No', null),
      Path: new wolkenkratzer.ResourceProperty(String, 'No', null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      Roles: new wolkenkratzer.ResourceArray(String, 'No', null),
      Users: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Policy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Roles: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      Users: new wolkenkratzer.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Role extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null),
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, 'No', null),
      Path: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Policies: new wolkenkratzer.ResourceArray(propertyTypes.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class User extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new wolkenkratzer.ResourceArray(String, 'No', null),
      LoginProfile: new wolkenkratzer.ResourceProperty(propertyTypes.IAMUserLoginProfile, 'No', null),
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, 'No', null),
      Path: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Policies: new wolkenkratzer.ResourceArray(propertyTypes.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class UserToGroupAddition extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Users: new wolkenkratzer.ResourceArray(propertyTypes.users, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  AccessKey: AccessKey,
  Group: Group,
  InstanceProfile: InstanceProfile,
  ManagedPolicy: ManagedPolicy,
  Policy: Policy,
  Role: Role,
  User: User,
  UserToGroupAddition: UserToGroupAddition
}