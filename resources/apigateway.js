'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Account extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Account'
    let properties = {
      CloudWatchRoleArn: new resource.ResourceProperty('CloudWatchRoleArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApiKey extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ApiKey'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Enabled: new resource.ResourceProperty('Enabled', Boolean, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      StageKeys: new resource.ResourceArray('StageKeys', types.AmazonAPIGatewayApiKeyStageKey, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Authorizer extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Authorizer'
    let properties = {
      AuthorizerCredentials: new resource.ResourceProperty('AuthorizerCredentials', String, 'No', null),
      AuthorizerResultTtlInSeconds: new resource.ResourceProperty('AuthorizerResultTtlInSeconds', Number, 'No', null),
      AuthorizerUri: new resource.ResourceProperty('AuthorizerUri', String, 'Yes', null),
      IdentitySource: new resource.ResourceProperty('IdentitySource', String, 'Yes', null),
      IdentityValidationExpression: new resource.ResourceProperty('IdentityValidationExpression', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'No', null),
      Type: new resource.ResourceProperty('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BasePathMapping extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::BasePathMapping'
    let properties = {
      BasePath: new resource.ResourceProperty('BasePath', String, 'No', null),
      DomainName: new resource.ResourceProperty('DomainName', String, 'Yes', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null),
      Stage: new resource.ResourceProperty('Stage', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClientCertificate extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ClientCertificate'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Deployment extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Deployment'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null),
      StageDescription: new resource.ResourceProperty('StageDescription', types.AmazonAPIGatewayDeploymentStageDescription, 'No', null),
      StageName: new resource.ResourceProperty('StageName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Method extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Method'
    let properties = {
      ApiKeyRequired: new resource.ResourceProperty('ApiKeyRequired', Boolean, 'No', null),
      AuthorizationType: new resource.ResourceProperty('AuthorizationType', String, 'Conditional', null),
      AuthorizerId: new resource.ResourceProperty('AuthorizerId', String, 'No', null),
      HttpMethod: new resource.ResourceProperty('HttpMethod', String, 'Yes', null),
      Integration: new resource.ResourceProperty('Integration', types.AmazonAPIGatewayMethodIntegration, 'No', null),
      MethodResponses: new resource.ResourceArray('MethodResponses', types.AmazonAPIGatewayMethodMethodResponse, 'No', null),
      RequestModels: new resource.ResourceProperty('RequestModels', Map, 'No', null),
      RequestParameters: new resource.ResourceProperty('RequestParameters', Map, 'No', null),
      ResourceId: new resource.ResourceProperty('ResourceId', String, 'Yes', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Model extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Model'
    let properties = {
      ContentType: new resource.ResourceProperty('ContentType', String, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null),
      Schema: new resource.ResourceProperty('Schema', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Resource extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Resource'
    let properties = {
      ParentId: new resource.ResourceProperty('ParentId', String, 'Yes', null),
      PathPart: new resource.ResourceProperty('PathPart', String, 'Yes', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RestApi extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::RestApi'
    let properties = {
      Body: new resource.ResourceProperty('Body', String, 'No', null),
      BodyS3Location: new resource.ResourceProperty('BodyS3Location', types.AmazonAPIGatewayRestApiS3Location, 'No', null),
      CloneFrom: new resource.ResourceProperty('CloneFrom', String, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      FailOnWarnings: new resource.ResourceProperty('FailOnWarnings', Boolean, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Parameters: new resource.ResourceArray('Parameters', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stage extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Stage'
    let properties = {
      CacheClusterEnabled: new resource.ResourceProperty('CacheClusterEnabled', Boolean, 'No', null),
      CacheClusterSize: new resource.ResourceProperty('CacheClusterSize', String, 'No', null),
      ClientCertificateId: new resource.ResourceProperty('ClientCertificateId', String, 'No', null),
      DeploymentId: new resource.ResourceProperty('DeploymentId', String, 'Yes', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      MethodSettings: new resource.ResourceProperty('MethodSettings', types.AmazonAPIGatewayStageMethodSetting, 'No', null),
      RestApiId: new resource.ResourceProperty('RestApiId', String, 'Yes', null),
      StageName: new resource.ResourceProperty('StageName', String, 'Yes', null),
      Variables: new resource.ResourceProperty('Variables', Map, 'No', null)
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