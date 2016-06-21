/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class AccessKey extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new cloudpotato.ResourceProperty(Number, false, null),
      Status: new cloudpotato.ResourceProperty(String, false, null),
      UserName: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IAMPolicies extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      PolicyDocument: new cloudpotato.ResourceProperty(Object, true, null),
      PolicyName: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class Group extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      ManagedPolicyArns: new cloudpotato.ResourceArray(String, false, null),
      Path: new cloudpotato.ResourceProperty(String, false, null),
      Policies: new cloudpotato.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceProfile extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new cloudpotato.ResourceProperty(String, true, null),
      Roles: new cloudpotato.ResourceArray(Role, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ManagedPolicy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new cloudpotato.ResourceProperty(String, false, null),
      Groups: new cloudpotato.ResourceArray(String, false, null),
      Path: new cloudpotato.ResourceProperty(String, false, null),
      PolicyDocument: new cloudpotato.ResourceProperty(Object, true, null),
      Roles: new cloudpotato.ResourceArray(String, false, null),
      Users: new cloudpotato.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Policy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new cloudpotato.ResourceArray(String, false, null),
      PolicyDocument: new cloudpotato.ResourceProperty(Object, true, null),
      PolicyName: new cloudpotato.ResourceProperty(String, true, null),
      Roles: new cloudpotato.ResourceArray(String, false, null),
      Users: new cloudpotato.ResourceArray(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Role extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new cloudpotato.ResourceProperty(Object, true, null),
      ManagedPolicyArns: new cloudpotato.ResourceArray(String, false, null),
      Path: new cloudpotato.ResourceProperty(String, false, null),
      Policies: new cloudpotato.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IAMUserLoginProfile extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Password: new cloudpotato.ResourceProperty(String, true, null),
      PasswordResetRequired: new cloudpotato.ResourceProperty(Boolean, false, null)
    }
    super(properties, propertiesObject)
  }
}

class User extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new cloudpotato.ResourceArray(String, false, null),
      LoginProfile: new cloudpotato.ResourceProperty(IAMUserLoginProfile, false, null),
      ManagedPolicyArns: new cloudpotato.ResourceArray(String, false, null),
      Path: new cloudpotato.ResourceProperty(String, false, null),
      Policies: new cloudpotato.ResourceArray(IAMPolicies, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class UserToGroupAddition extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new cloudpotato.ResourceProperty(String, true, null),
      Users: new cloudpotato.ResourceArray(User, true, null)
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