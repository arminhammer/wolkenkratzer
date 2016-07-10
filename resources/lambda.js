'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class EventSourceMapping extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new ResourceAttribute('BatchSize', Number, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      EventSourceArn: new ResourceAttribute('EventSourceArn', String, 'Yes', null),
      FunctionName: new ResourceAttribute('FunctionName', String, 'Yes', null),
      StartingPosition: new ResourceAttribute('StartingPosition', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, 'Yes', null),
      FunctionVersion: new ResourceAttribute('FunctionVersion', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LambdaFunction extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new ResourceAttribute('Code', types.AWSLambdaFunctionCode, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, 'No', null),
      Handler: new ResourceAttribute('Handler', String, 'Yes', null),
      MemorySize: new ResourceAttribute('MemorySize', Number, 'No', null),
      Role: new ResourceAttribute('Role', String, 'Yes', null),
      Runtime: new ResourceAttribute('Runtime', String, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', Number, 'No', null),
      VpcConfig: new ResourceAttribute('VpcConfig', types.AWSLambdaFunctionVPCConfig, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new ResourceAttribute('Action', String, 'Yes', null),
      FunctionName: new ResourceAttribute('FunctionName', String, 'Yes', null),
      Principal: new ResourceAttribute('Principal', String, 'Yes', null),
      SourceAccount: new ResourceAttribute('SourceAccount', String, 'No', null),
      SourceArn: new ResourceAttribute('SourceArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new ResourceAttribute('CodeSha256', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  EventSourceMapping: EventSourceMapping,
  Alias: Alias,
  LambdaFunction: LambdaFunction,
  Permission: Permission,
  Version: Version
}
