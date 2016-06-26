'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Account extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Account'
    let properties = {
      CloudWatchRoleArn: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApiKey extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ApiKey'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Enabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StageKeys: new wolkenkratzer.ResourceArray(propertyTypes.AmazonAPIGatewayApiKeyStageKey, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Authorizer extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Authorizer'
    let properties = {
      AuthorizerCredentials: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AuthorizerResultTtlInSeconds: new wolkenkratzer.ResourceProperty(String, 'No', null),
      AuthorizerUri: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IdentitySource: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      IdentityValidationExpression: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Type: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BasePathMapping extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::BasePathMapping'
    let properties = {
      BasePath: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DomainName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Stage: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClientCertificate extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ClientCertificate'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Deployment extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Deployment'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StageDescription: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonAPIGatewayDeploymentStageDescription, 'No', null),
      StageName: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Method extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Method'
    let properties = {
      ApiKeyRequired: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      AuthorizationType: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      AuthorizerId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      HttpMethod: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Integration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonAPIGatewayMethodIntegration, 'No', null),
      MethodResponses: new wolkenkratzer.ResourceArray(propertyTypes.AmazonAPIGatewayMethodMethodResponse, 'No', null),
      RequestModels: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      RequestParameters: new wolkenkratzer.ResourceProperty(Map, 'No', null),
      ResourceId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Model extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Model'
    let properties = {
      ContentType: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Schema: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Resource extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Resource'
    let properties = {
      ParentId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PathPart: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RestApi extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::RestApi'
    let properties = {
      Body: new wolkenkratzer.ResourceProperty(String, 'No', null),
      BodyS3Location: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonAPIGatewayRestApiS3Location, 'No', null),
      CloneFrom: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      FailOnWarnings: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Parameters: new wolkenkratzer.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stage extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Stage'
    let properties = {
      CacheClusterEnabled: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      CacheClusterSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ClientCertificateId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DeploymentId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MethodSettings: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonAPIGatewayStageMethodSetting, 'No', null),
      RestApiId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      StageName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Variables: new wolkenkratzer.ResourceProperty(Map, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Account: Account,
  ApiKey: ApiKey,
  Authorizer: Authorizer,
  BasePathMapping: BasePathMapping,
  ClientCertificate: ClientCertificate,
  Deployment: Deployment,
  Method: Method,
  Model: Model,
  Resource: Resource,
  RestApi: RestApi,
  Stage: Stage
}