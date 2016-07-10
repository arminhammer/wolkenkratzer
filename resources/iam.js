'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class AccessKey extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new ResourceAttribute('Serial', Number, 'No', null),
      Status: new ResourceAttribute('Status', String, 'No', null),
      UserName: new ResourceAttribute('UserName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Group extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceProfile extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new ResourceAttribute('Path', String, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ManagedPolicy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Groups: new ResourceAttributeArray('Groups', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'No', null),
      Users: new ResourceAttributeArray('Users', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Policy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new ResourceAttributeArray('Groups', String, 'Conditional', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'Conditional', null),
      Users: new ResourceAttributeArray('Users', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Role extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new ResourceAttribute('AssumeRolePolicyDocument', Object, 'Yes', null),
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class User extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new ResourceAttributeArray('Groups', String, 'No', null),
      LoginProfile: new ResourceAttribute('LoginProfile', types.IAMUserLoginProfile, 'No', null),
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class UserToGroupAddition extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new ResourceAttribute('GroupName', String, 'Yes', null),
      Users: new ResourceAttributeArray('Users', types.users, 'Yes', null)
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
