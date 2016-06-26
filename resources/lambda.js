'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class EventSourceMapping extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EventSourceArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StartingPosition: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      FunctionVersion: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Function extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new wolkenkratzer.ResourceProperty(propertyTypes.AWSLambdaFunctionCode, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Handler: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      MemorySize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Role: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Runtime: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Timeout: new wolkenkratzer.ResourceProperty(String, 'No', null),
      VpcConfig: new wolkenkratzer.ResourceProperty(propertyTypes.AWSLambdaFunctionVPCConfig, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Principal: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SourceAccount: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SourceArn: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
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