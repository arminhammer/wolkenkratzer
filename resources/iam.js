'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class AccessKey extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new resource.ResourceProperty(Number, 'No', null),
      Status: new resource.ResourceProperty(String, 'No', null),
      UserName: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Group extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      ManagedPolicyArns: new resource.ResourceArray(String, 'No', null),
      Path: new resource.ResourceProperty(String, 'No', null),
      Policies: new resource.ResourceArray(types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceProfile extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new resource.ResourceProperty(String, 'Yes', null),
      Roles: new resource.ResourceArray(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ManagedPolicy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      Groups: new resource.ResourceArray(String, 'No', null),
      Path: new resource.ResourceProperty(String, 'No', null),
      PolicyDocument: new resource.ResourceProperty(Object, 'Yes', null),
      Roles: new resource.ResourceArray(String, 'No', null),
      Users: new resource.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Policy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new resource.ResourceArray(String, 'Conditional', null),
      PolicyDocument: new resource.ResourceProperty(Object, 'Yes', null),
      PolicyName: new resource.ResourceProperty(String, 'Yes', null),
      Roles: new resource.ResourceArray(String, 'Conditional', null),
      Users: new resource.ResourceArray(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Role extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new resource.ResourceProperty(Object, 'Yes', null),
      ManagedPolicyArns: new resource.ResourceArray(String, 'No', null),
      Path: new resource.ResourceProperty(String, 'No', null),
      Policies: new resource.ResourceArray(types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class User extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new resource.ResourceArray(String, 'No', null),
      LoginProfile: new resource.ResourceProperty(types.IAMUserLoginProfile, 'No', null),
      ManagedPolicyArns: new resource.ResourceArray(String, 'No', null),
      Path: new resource.ResourceProperty(String, 'No', null),
      Policies: new resource.ResourceArray(types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class UserToGroupAddition extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new resource.ResourceProperty(String, 'Yes', null),
      Users: new resource.ResourceArray(types.users, 'Yes', null)
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