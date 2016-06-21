/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class AccessKey extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      "Serial": Integer,
      "Status": String,
      "UserName": String
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class Group extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      "ManagedPolicyArns": [ String, ... ],
      "Path": String,
      "Policies": [ Policies, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class InstanceProfile extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      "Path": String,
      "Roles": [ IAM Roles ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class ManagedPolicy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      "Description" : String,
      "Groups" : [ String, ... ],
      "Path" : String,
      "PolicyDocument" : JSON object,
      "Roles" : [ String, ... ],
      "Users" : [ String, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class Policy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      "Groups" : [ String, ... ],
      "PolicyDocument" : JSON object,
      "PolicyName" : String,
      "Roles" : [ String, ... ],
      "Users" : [ String, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class Role extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      "AssumeRolePolicyDocument": { JSON },
      "ManagedPolicyArns": [ String, ... ],
      "Path": String,
      "Policies": [ Policies, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class User extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      "Groups": [ String, ... ],
      "LoginProfile": LoginProfile Type,
      "ManagedPolicyArns": [ String, ... ],
      "Path": String,
      "Policies": [ Policies, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
  }
}

class UserToGroupAddition extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      "GroupName": String,
      "Users": [ User1, ... ]
    }
    super(name, resourceType, properties, propertiesObject, conditional)
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