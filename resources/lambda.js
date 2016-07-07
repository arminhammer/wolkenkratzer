'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class EventSourceMapping extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new resource.ResourceProperty('BatchSize', Number, 'No', null),
      Enabled: new resource.ResourceProperty('Enabled', Boolean, 'No', null),
      EventSourceArn: new resource.ResourceProperty('EventSourceArn', String, 'Yes', null),
      FunctionName: new resource.ResourceProperty('FunctionName', String, 'Yes', null),
      StartingPosition: new resource.ResourceProperty('StartingPosition', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      FunctionName: new resource.ResourceProperty('FunctionName', String, 'Yes', null),
      FunctionVersion: new resource.ResourceProperty('FunctionVersion', String, 'Yes', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Function extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new resource.ResourceProperty('Code', types.AWSLambdaFunctionCode, 'Yes', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      FunctionName: new resource.ResourceProperty('FunctionName', String, 'No', null),
      Handler: new resource.ResourceProperty('Handler', String, 'Yes', null),
      MemorySize: new resource.ResourceProperty('MemorySize', Number, 'No', null),
      Role: new resource.ResourceProperty('Role', String, 'Yes', null),
      Runtime: new resource.ResourceProperty('Runtime', String, 'Yes', null),
      Timeout: new resource.ResourceProperty('Timeout', Number, 'No', null),
      VpcConfig: new resource.ResourceProperty('VpcConfig', types.AWSLambdaFunctionVPCConfig, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new resource.ResourceProperty('Action', String, 'Yes', null),
      FunctionName: new resource.ResourceProperty('FunctionName', String, 'Yes', null),
      Principal: new resource.ResourceProperty('Principal', String, 'Yes', null),
      SourceAccount: new resource.ResourceProperty('SourceAccount', String, 'No', null),
      SourceArn: new resource.ResourceProperty('SourceArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new resource.ResourceProperty('CodeSha256', String, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      FunctionName: new resource.ResourceProperty('FunctionName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  EventSourceMapping: EventSourceMapping,
  Alias: Alias,
  Function: Function,
  Permission: Permission,
  Version: Version
}