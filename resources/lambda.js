/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class EventSourceMapping extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new wolkenkratzer.ResourceProperty(Number, false, null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      EventSourceArn: new wolkenkratzer.ResourceProperty(String, true, null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, true, null),
      StartingPosition: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, true, null),
      FunctionVersion: new wolkenkratzer.ResourceProperty(String, true, null),
      Name: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new wolkenkratzer.ResourceProperty(String, false, null),
      S3Key: new wolkenkratzer.ResourceProperty(String, false, null),
      S3ObjectVersion: new wolkenkratzer.ResourceProperty(String, false, null),
      ZipFile: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SecurityGroupIds: new wolkenkratzer.ResourceArray(String, true, null),
      SubnetIds: new wolkenkratzer.ResourceArray(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class Function extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new wolkenkratzer.ResourceProperty(AWSLambdaFunctionCode, true, null),
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, false, null),
      Handler: new wolkenkratzer.ResourceProperty(String, true, null),
      MemorySize: new wolkenkratzer.ResourceProperty(Number, false, null),
      Role: new wolkenkratzer.ResourceProperty(String, true, null),
      Runtime: new wolkenkratzer.ResourceProperty(String, true, null),
      Timeout: new wolkenkratzer.ResourceProperty(Number, false, null),
      VpcConfig: new wolkenkratzer.ResourceProperty(AWSLambdaFunctionVPCConfig, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new wolkenkratzer.ResourceProperty(String, true, null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, true, null),
      Principal: new wolkenkratzer.ResourceProperty(String, true, null),
      SourceAccount: new wolkenkratzer.ResourceProperty(String, false, null),
      SourceArn: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new wolkenkratzer.ResourceProperty(String, false, null),
      Description: new wolkenkratzer.ResourceProperty(String, false, null),
      FunctionName: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  AWSLambdaFunctionCode: AWSLambdaFunctionCode,
  AWSLambdaFunctionVPCConfig: AWSLambdaFunctionVPCConfig,
  EventSourceMapping: EventSourceMapping,
  Alias: Alias,
  Function: Function,
  Permission: Permission,
  Version: Version
}