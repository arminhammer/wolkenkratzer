'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ApiGateway */

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} CloudWatchRoleArn Required: No. The Amazon Resource Name (ARN) of an IAM role that has write access to CloudWatch Logs in your account.Update requires: No interruption
*/
function Account (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Account'
    let properties = {
      CloudWatchRoleArn: new ResourceAttribute('CloudWatchRoleArn', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Account.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} Description Required: No. A description of the purpose of the API key.Update requires: No interruption
* @property {Boolean} Enabled Required: No. Indicates whether the API key can be used by clients.Update requires: No interruption
* @property {String} Name Required: No. A name for the API key. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {AmazonAPIGatewayApiKeyStageKey} StageKeys Required: No. A list of stages to associated with this API key.Update requires: No interruption
*/
function ApiKey (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ApiKey'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      StageKeys: new ResourceAttributeArray('StageKeys', types.AmazonAPIGatewayApiKeyStageKey, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ApiKey.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} AuthorizerCredentials Required: No. The credentials required for the authorizer. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To use resource-based permissions on the AWS Lambda (Lambda) function, specify null.Update requires: No interruption
* @property {Number} AuthorizerResultTtlInSeconds Required: No. The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches authorizer results. If you specify a value greater than 0, API Gateway caches the authorizer responses. By default, API Gateway sets this property to 300. The maximum value is 3600, or 1 hour.Update requires: No interruption
* @property {String} AuthorizerUri Required: Yes. The authorizer's Uniform Resource Identifier (URI). If you specify TOKEN for the authorizer's Type property, specify a Lambda function URI, which has the form arn:aws:apigateway:region:lambda:path/path. The path usually has the form /2015-03-31/functions/LambdaFunctionARN/invocations.Update requires: No interruption
* @property {String} IdentitySource Required: Yes. The source of the identity in an incoming request. If you specify TOKEN for the authorizer's Type property, specify a mapping expression. The custom header mapping expression has the form method.request.header.name, where name is the name of a custom authorization header that clients submit as part of their requests.Update requires: No interruption
* @property {String} IdentityValidationExpression Required: No. A validation expression for the incoming identity. If you specify TOKEN for the authorizer's Type property, specify a regular expression. API Gateway uses the expression to attempt to match the incoming client token, and proceeds if the token matches. If the token doesn't match, API Gateway responds with a 401 (unauthorized request) error code.Update requires: No interruption
* @property {String} Name Required: Yes. The name of the authorizer.Update requires: No interruption
* @property {String} RestApiId Required: No. The ID of the RestApi resource in which API Gateway creates the authorizer.Update requires: Replacement
* @property {String} Type Required: Yes. The type of the authorizer, such as TOKEN.Update requires: No interruption
*/
function Authorizer (name, propertiesObject) {
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
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Authorizer.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} BasePath Required: No. The base path name that callers of the API must provide in the URL after the domain name.Update requires: No interruption
* @property {String} DomainName Required: Yes. The name of a DomainName resource.Update requires: No interruption
* @property {String} RestApiId Required: Yes. The name of the API.Update requires: No interruption
* @property {String} Stage Required: No. The name of the API's stage.Update requires: No interruption
*/
function BasePathMapping (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::BasePathMapping'
    let properties = {
      BasePath: new ResourceAttribute('BasePath', String, 'No', null),
      DomainName: new ResourceAttribute('DomainName', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      Stage: new ResourceAttribute('Stage', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
BasePathMapping.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} Description Required: No. A description of the client certificate.Update requires: No interruption
*/
function ClientCertificate (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::ClientCertificate'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ClientCertificate.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} Description Required: No. A description of the purpose of the API Gateway deployment.Update requires: No interruption
* @property {String} RestApiId Required: Yes. The ID of the RestApi resource to deploy.Update requires: Replacement
* @property {AmazonAPIGatewayDeploymentStageDescription} StageDescription Required: No. Configures the stage that API Gateway creates with this deployment.NoteWe recommend that you use the AWS::ApiGateway::Stage resource to create and associate a stage with this deployment instead of using this property to configure a stage. If you use this property, you tie this stage to this deployment, which means you can't delete one without deleting the other. For example, if you delete this deployment, API Gateway also deletes this stage, which you might want to keep. By using the
                AWS::ApiGateway::Stage resource, you avoid tying your stage to this deployment.Update requires: No interruption
* @property {String} StageName Required: Yes. A name for the stage that API Gateway creates with this deployment. Use only alphanumeric characters.NoteThis property is required by API Gateway. We recommend that you specify a name using any value (see Examples) and that you don't use this stage. We recommend not using this stage because it is tied to this deployment, which means you can't delete one without deleting the other. For example, if you delete this deployment, API Gateway also deletes this stage, which you might want to keep. Instead, use the AWS::ApiGateway::Stage resource to create and associate a stage with this deployment.Update requires: No interruption
*/
function Deployment (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Deployment'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      StageDescription: new ResourceAttribute('StageDescription', types.AmazonAPIGatewayDeploymentStageDescription, 'No', null),
      StageName: new ResourceAttribute('StageName', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Deployment.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {Boolean} ApiKeyRequired Required: No. Indicates whether the method requires clients to submit a valid API key.Update requires: No interruption
* @property {String} AuthorizationType Required: Conditional. The method's authorization type.Update requires: No interruption
* @property {String} AuthorizerId Required: No. The identifier of the authorizer to use on this method. If you specify this property, specify CUSTOM for the AuthorizationType property.Update requires: No interruption
* @property {String} HttpMethod Required: Yes. The HTTP method that clients will use to call this method.Update requires: No interruption
* @property {AmazonAPIGatewayMethodIntegration} Integration Required: No. The back-end system that the method calls when it receives a request.Update requires: No interruption
* @property {AmazonAPIGatewayMethodMethodResponse} MethodResponses Required: No. The responses that can be sent to the client who calls the method.Update requires: No interruption
* @property {Map} RequestModels Required: No. The resources used for the response's content type. Specify response models as key-value pairs (string-to-string maps), with a content type as the key and a Model resource name as the value.Update requires: No interruption
* @property {Map} RequestParameters Required: No. Request parameters that API Gateway accepts. Specify request parameters as key-value pairs (string-to-Boolean maps), with a source as the key and a Boolean as the value. The Boolean specifies whether a parameter is required. A source must match the following format method.request.location.name, where the location is querystring, path, or header, and
              name is a valid, unique parameter name.Update requires: No interruption
* @property {String} ResourceId Required: Yes. The ID of an API Gateway resource. For root resource methods, specify the RestApi root resource ID, such as { "Fn::GetAtt": ["MyRestApi", "RootResourceId"] }.Update requires: No interruption
* @property {String} RestApiId Required: Yes. The ID of the RestApi resource in which API Gateway creates the method.Update requires: No interruption
*/
function Method (name, propertiesObject) {
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
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Method.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} ContentType Required: No. The content type for the model.Update requires: Replacement
* @property {String} Description Required: No. A description that identifies this model.Update requires: No interruption
* @property {String} Name Required: No. A name for the mode. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the model name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} RestApiId Required: Yes. The ID of a REST API with which to associate this model.Update requires: Replacement
* @property {Object} Schema Required: No. The schema to use to transform data to one or more output formats.Update requires: No interruption
*/
function Model (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Model'
    let properties = {
      ContentType: new ResourceAttribute('ContentType', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null),
      Schema: new ResourceAttribute('Schema', Object, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Model.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {String} ParentId Required: Yes. If you want to create a child resource, the ID of the parent resource. For resources without a parent, specify the RestApi root resource ID, such as { "Fn::GetAtt": ["MyRestApi", "RootResourceId"] }.Update requires: Replacement
* @property {String} PathPart Required: Yes. A path name for the resource.Update requires: Replacement
* @property {String} RestApiId Required: Yes. The ID of the RestApi resource in which you want to create this resource.Update requires: Replacement
*/
function Resource (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::Resource'
    let properties = {
      ParentId: new ResourceAttribute('ParentId', String, 'Yes', null),
      PathPart: new ResourceAttribute('PathPart', String, 'Yes', null),
      RestApiId: new ResourceAttribute('RestApiId', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Resource.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {Object} Body Required: No. A Swagger specification that defines a set of RESTful APIs in the JSON format. To
            specify a Swagger file that is in the YAML format, use the BodyS3Location
            property.Update requires: No interruption
* @property {AmazonAPIGatewayRestApiS3Location} BodyS3Location Required: No. The Amazon Simple Storage Service (Amazon S3) location that points to a Swagger file, which defines a set of RESTful APIs in JSON or YAML format.Update requires: No interruption
* @property {String} CloneFrom Required: No. The ID of the API Gateway RestApi resource that you want to clone.Update requires: No interruption
* @property {String} Description Required: No. A description of the purpose of this API Gateway RestApi resource.Update requires: No interruption
* @property {Boolean} FailOnWarnings Required: No. If a warning occurs while API Gateway is creating the RestApi resource, indicates whether to roll back the resource.Update requires: No interruption
* @property {String} Name Required: Conditional. A name for the API Gateway RestApi resource.Update requires: No interruption
* @property {String} Parameters Required: No. Custom header parameters for the request.Update requires: No interruption
*/
function RestApi (name, propertiesObject) {
    let resourceType = 'AWS::ApiGateway::RestApi'
    let properties = {
      Body: new ResourceAttribute('Body', Object, 'No', null),
      BodyS3Location: new ResourceAttribute('BodyS3Location', types.AmazonAPIGatewayRestApiS3Location, 'No', null),
      CloneFrom: new ResourceAttribute('CloneFrom', String, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      FailOnWarnings: new ResourceAttribute('FailOnWarnings', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Conditional', null),
      Parameters: new ResourceAttributeArray('Parameters', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
RestApi.prototype = Object.create(WKResource.prototype)

/** @memberof module:ApiGateway
*   @extends WKResource
* @property {Boolean} CacheClusterEnabled Required: No. Indicates whether cache clustering is enabled for the stage.Update requires: No interruption
* @property {String} CacheClusterSize Required: No. The stage's cache cluster size.Update requires: No interruption
* @property {String} ClientCertificateId Required: No. The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.Update requires: No interruption
* @property {String} DeploymentId Required: Yes. The ID of the deployment that the stage points to.Update requires: No interruption
* @property {String} Description Required: No. A description of the stage's purpose.Update requires: No interruption
* @property {AmazonAPIGatewayStageMethodSetting} MethodSettings Required: No. Settings for all methods in the stage.Update requires: No interruption
* @property {String} RestApiId Required: Yes. The ID of the RestApi resource that you're deploying with this stage.Update requires: Replacement
* @property {String} StageName Required: Yes. The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).Update requires: Replacement
* @property {Map} Variables Required: No. A map (string to string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.Update requires: No interruption
*/
function Stage (name, propertiesObject) {
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
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Stage.prototype = Object.create(WKResource.prototype)

module.exports = {  Account: Account,
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
