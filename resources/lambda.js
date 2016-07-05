'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class EventSourceMapping extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new resource.ResourceProperty(Number, 'No', null),
      Enabled: new resource.ResourceProperty(Boolean, 'No', null),
      EventSourceArn: new resource.ResourceProperty(String, 'Yes', null),
      FunctionName: new resource.ResourceProperty(String, 'Yes', null),
      StartingPosition: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      FunctionName: new resource.ResourceProperty(String, 'Yes', null),
      FunctionVersion: new resource.ResourceProperty(String, 'Yes', null),
      Name: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class LambdaFunction extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new resource.ResourceProperty(types.AWSLambdaFunctionCode, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      FunctionName: new resource.ResourceProperty(String, 'No', null),
      Handler: new resource.ResourceProperty(String, 'Yes', null),
      MemorySize: new resource.ResourceProperty(Number, 'No', null),
      Role: new resource.ResourceProperty(String, 'Yes', null),
      Runtime: new resource.ResourceProperty(String, 'Yes', null),
      Timeout: new resource.ResourceProperty(Number, 'No', null),
      VpcConfig: new resource.ResourceProperty(types.AWSLambdaFunctionVPCConfig, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new resource.ResourceProperty(String, 'Yes', null),
      FunctionName: new resource.ResourceProperty(String, 'Yes', null),
      Principal: new resource.ResourceProperty(String, 'Yes', null),
      SourceAccount: new resource.ResourceProperty(String, 'No', null),
      SourceArn: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      FunctionName: new resource.ResourceProperty(String, 'Yes', null)
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