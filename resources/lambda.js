/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class EventSourceMapping extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new cloudpotato.ResourceProperty(Number, false, null),
      Enabled: new cloudpotato.ResourceProperty(Boolean, false, null),
      EventSourceArn: new cloudpotato.ResourceProperty(String, true, null),
      FunctionName: new cloudpotato.ResourceProperty(String, true, null),
      StartingPosition: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Alias extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new cloudpotato.ResourceProperty(String, false, null),
      FunctionName: new cloudpotato.ResourceProperty(String, true, null),
      FunctionVersion: new cloudpotato.ResourceProperty(String, true, null),
      Name: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class AWSLambdaFunctionCode extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Bucket: new cloudpotato.ResourceProperty(String, false, null),
      S3Key: new cloudpotato.ResourceProperty(String, false, null),
      S3ObjectVersion: new cloudpotato.ResourceProperty(String, false, null),
      ZipFile: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AWSLambdaFunctionVPCConfig extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      SecurityGroupIds: new cloudpotato.ResourceArray(String, true, null),
      SubnetIds: new cloudpotato.ResourceArray(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class Function extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new cloudpotato.ResourceProperty(AWSLambdaFunctionCode, true, null),
      Description: new cloudpotato.ResourceProperty(String, false, null),
      FunctionName: new cloudpotato.ResourceProperty(String, false, null),
      Handler: new cloudpotato.ResourceProperty(String, true, null),
      MemorySize: new cloudpotato.ResourceProperty(Number, false, null),
      Role: new cloudpotato.ResourceProperty(String, true, null),
      Runtime: new cloudpotato.ResourceProperty(String, true, null),
      Timeout: new cloudpotato.ResourceProperty(Number, false, null),
      VpcConfig: new cloudpotato.ResourceProperty(AWSLambdaFunctionVPCConfig, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Permission extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new cloudpotato.ResourceProperty(String, true, null),
      FunctionName: new cloudpotato.ResourceProperty(String, true, null),
      Principal: new cloudpotato.ResourceProperty(String, true, null),
      SourceAccount: new cloudpotato.ResourceProperty(String, false, null),
      SourceArn: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Version extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new cloudpotato.ResourceProperty(String, false, null),
      Description: new cloudpotato.ResourceProperty(String, false, null),
      FunctionName: new cloudpotato.ResourceProperty(String, true, null)
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