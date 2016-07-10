'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Account extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Account'
    let properties = {
      CloudWatchRoleArn: new ResourceAttribute('CloudWatchRoleArn', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ApiKey extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ApiKey'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      StageKeys: new ResourceAttributeArray('StageKeys', types.AmazonAPIGatewayApiKeyStageKey, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Authorizer extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Authorizer'
    let properties = {
      AuthorizerCredentials: new ResourceAttribute('AuthorizerCredentials', String, 'No', null),
      AuthorizerResultTtlInSeconds: new ResourceAttribute('AuthorizerResultTtlInSeconds', Number, 'No', null),
      AuthorizerUri: new ResourceAttribute('AuthorizerUri', String, 'Yes', null),
      IdentitySource: new ResourceAttribute('IdentitySource', String, 'Yes', null),
      IdentityValidationExpression: new ResourceAttribute('IdentityValidationExpression', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'No', null),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BasePathMapping extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::BasePathMapping'
    let properties = {
      BasePath: new ResourceAttribute('BasePath', String, 'No', null),
      DomainName: new ResourceAttribute('DomainName', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      Stage: new ResourceAttribute('Stage', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class ClientCertificate extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ClientCertificate'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Deployment extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Deployment'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      StageDescription: new ResourceAttribute('StageDescription', types.AmazonAPIGatewayDeploymentStageDescription, 'No', null),
      StageName: new ResourceAttribute('StageName', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Method extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Method'
    let properties = {
      ApiKeyRequired: new ResourceAttribute('ApiKeyRequired', Boolean, 'No', null),
      AuthorizationType: new ResourceAttribute('AuthorizationType', String, 'Conditional', null),
      AuthorizerId: new ResourceAttribute('AuthorizerId', String, 'No', null),
      HttpMethod: new ResourceAttribute('HttpMethod', String, 'Yes', null),
      Integration: new ResourceAttribute('Integration', types.AmazonAPIGatewayMethodIntegration, 'No', null),
      MethodResponses: new ResourceAttributeArray('MethodResponses', types.AmazonAPIGatewayMethodMethodResponse, 'No', null),
      RequestModels: new ResourceAttribute('RequestModels', Map, 'No', null),
      RequestParameters: new ResourceAttribute('RequestParameters', Map, 'No', null),
      ResourceId: new ResourceAttribute('ResourceId', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Model extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Model'
    let properties = {
      ContentType: new ResourceAttribute('ContentType', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      Schema: new ResourceAttribute('Schema', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Resource extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Resource'
    let properties = {
      ParentId: new ResourceAttribute('ParentId', String, 'Yes', null),
      PathPart: new ResourceAttribute('PathPart', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class RestApi extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::RestApi'
    let properties = {
      Body: new ResourceAttribute('Body', String, 'No', null),
      BodyS3Location: new ResourceAttribute('BodyS3Location', types.AmazonAPIGatewayRestApiS3Location, 'No', null),
      CloneFrom: new ResourceAttribute('CloneFrom', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      FailOnWarnings: new ResourceAttribute('FailOnWarnings', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Parameters: new ResourceAttributeArray('Parameters', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stage extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Stage'
    let properties = {
      CacheClusterEnabled: new ResourceAttribute('CacheClusterEnabled', Boolean, 'No', null),
      CacheClusterSize: new ResourceAttribute('CacheClusterSize', String, 'No', null),
      ClientCertificateId: new ResourceAttribute('ClientCertificateId', String, 'No', null),
      DeploymentId: new ResourceAttribute('DeploymentId', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      MethodSettings: new ResourceAttribute('MethodSettings', types.AmazonAPIGatewayStageMethodSetting, 'No', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      StageName: new ResourceAttribute('StageName', String, 'Yes', null),
      Variables: new ResourceAttribute('Variables', Map, 'No', null)
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
