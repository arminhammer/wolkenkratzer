/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class AccessKey extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new wolkenkratzer.ResourceProperty(Number, false, null),
      Status: new wolkenkratzer.ResourceProperty(String, false, null),
      UserName: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IAMPolicies extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, true, null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class Group extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, false, null),
      Path: new wolkenkratzer.ResourceProperty(String, false, null),
      Policies: new wolkenkratzer.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceProfile extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new wolkenkratzer.ResourceProperty(String, true, null),
      Roles: new wolkenkratzer.ResourceArray(Role, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ManagedPolicy extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      Groups: new wolkenkratzer.ResourceArray(String, false, null),
      Path: new wolkenkratzer.ResourceProperty(String, false, null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, true, null),
      Roles: new wolkenkratzer.ResourceArray(String, false, null),
      Users: new wolkenkratzer.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Policy extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new wolkenkratzer.ResourceArray(String, false, null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, true, null),
      PolicyName: new wolkenkratzer.ResourceProperty(String, true, null),
      Roles: new wolkenkratzer.ResourceArray(String, false, null),
      Users: new wolkenkratzer.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Role extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new wolkenkratzer.ResourceProperty(Object, true, null),
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, false, null),
      Path: new wolkenkratzer.ResourceProperty(String, false, null),
      Policies: new wolkenkratzer.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new wolkenkratzer.ResourceProperty(String, true, null),
      PasswordResetRequired: new wolkenkratzer.ResourceProperty(Boolean, false, null)
    }
    super(properties, propertiesObject)
  }
}

class User extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new wolkenkratzer.ResourceArray(String, false, null),
      LoginProfile: new wolkenkratzer.ResourceProperty(IAMUserLoginProfile, false, null),
      ManagedPolicyArns: new wolkenkratzer.ResourceArray(String, false, null),
      Path: new wolkenkratzer.ResourceProperty(String, false, null),
      Policies: new wolkenkratzer.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class UserToGroupAddition extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new wolkenkratzer.ResourceProperty(String, true, null),
      Users: new wolkenkratzer.ResourceArray(User, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  AccessKey: AccessKey,
  Group: Group,
  InstanceProfile: InstanceProfile,
  IAMPolicies: IAMPolicies,
  ManagedPolicy: ManagedPolicy,
  Policy: Policy,
  Role: Role,
  IAMUserLoginProfile: IAMUserLoginProfile,
  User: User,
  UserToGroupAddition: UserToGroupAddition
}