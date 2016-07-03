'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Account extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Account'
    let properties = {
      CloudWatchRoleArn: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApiKey extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ApiKey'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      Enabled: new resource.ResourceProperty(Boolean, 'No', null),
      Name: new resource.ResourceProperty(String, 'No', null),
      StageKeys: new resource.ResourceArray(types.AmazonAPIGatewayApiKeyStageKey, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Authorizer extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Authorizer'
    let properties = {
      AuthorizerCredentials: new resource.ResourceProperty(String, 'No', null),
      AuthorizerResultTtlInSeconds: new resource.ResourceProperty(Number, 'No', null),
      AuthorizerUri: new resource.ResourceProperty(String, 'Yes', null),
      IdentitySource: new resource.ResourceProperty(String, 'Yes', null),
      IdentityValidationExpression: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      RestApiId: new resource.ResourceProperty(String, 'No', null),
      Type: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BasePathMapping extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::BasePathMapping'
    let properties = {
      BasePath: new resource.ResourceProperty(String, 'No', null),
      DomainName: new resource.ResourceProperty(String, 'Yes', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null),
      Stage: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClientCertificate extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ClientCertificate'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Deployment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Deployment'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null),
      StageDescription: new resource.ResourceProperty(types.AmazonAPIGatewayDeploymentStageDescription, 'No', null),
      StageName: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Method extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Method'
    let properties = {
      ApiKeyRequired: new resource.ResourceProperty(Boolean, 'No', null),
      AuthorizationType: new resource.ResourceProperty(String, 'Conditional', null),
      AuthorizerId: new resource.ResourceProperty(String, 'No', null),
      HttpMethod: new resource.ResourceProperty(String, 'Yes', null),
      Integration: new resource.ResourceProperty(types.AmazonAPIGatewayMethodIntegration, 'No', null),
      MethodResponses: new resource.ResourceArray(types.AmazonAPIGatewayMethodMethodResponse, 'No', null),
      RequestModels: new resource.ResourceProperty(Map, 'No', null),
      RequestParameters: new resource.ResourceProperty(Map, 'No', null),
      ResourceId: new resource.ResourceProperty(String, 'Yes', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Model extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Model'
    let properties = {
      ContentType: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'No', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null),
      Schema: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Resource extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Resource'
    let properties = {
      ParentId: new resource.ResourceProperty(String, 'Yes', null),
      PathPart: new resource.ResourceProperty(String, 'Yes', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RestApi extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::RestApi'
    let properties = {
      Body: new resource.ResourceProperty(String, 'No', null),
      BodyS3Location: new resource.ResourceProperty(types.AmazonAPIGatewayRestApiS3Location, 'No', null),
      CloneFrom: new resource.ResourceProperty(String, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      FailOnWarnings: new resource.ResourceProperty(Boolean, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      Parameters: new resource.ResourceArray(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stage extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Stage'
    let properties = {
      CacheClusterEnabled: new resource.ResourceProperty(Boolean, 'No', null),
      CacheClusterSize: new resource.ResourceProperty(String, 'No', null),
      ClientCertificateId: new resource.ResourceProperty(String, 'No', null),
      DeploymentId: new resource.ResourceProperty(String, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      MethodSettings: new resource.ResourceProperty(types.AmazonAPIGatewayStageMethodSetting, 'No', null),
      RestApiId: new resource.ResourceProperty(String, 'Yes', null),
      StageName: new resource.ResourceProperty(String, 'Yes', null),
      Variables: new resource.ResourceProperty(Map, 'No', null)
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