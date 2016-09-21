'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module Lambda */

/** @memberof module:Lambda
*   @extends WKResource
* @property {Number} BatchSize Required: No. The largest number of records that Lambda retrieves from your event source when
                  invoking your function. Your function receives an event with all the retrieved
                  records. For the default and valid values, see CreateEventSourceMapping in the
                  AWS Lambda Developer Guide.Update requires: No interruption
* @property {Boolean} Enabled Required: No. Indicates whether Lambda begins polling the event source.Update requires: No interruption
* @property {String} EventSourceArn Required: Yes. The Amazon Resource Name (ARN) of the Amazon Kinesis or DynamoDB stream that is the source
                  of events. Any record added to this stream can invoke the Lambda function. For more
                  information, see CreateEventSourceMapping in the
                  AWS Lambda Developer Guide.Update requires: Replacement
* @property {String} FunctionName Required: Yes. The name or ARN of a Lambda function to invoke when Lambda detects an event on
                  the stream.Update requires: No interruption
* @property {String} StartingPosition Required: Yes. The position in the stream where Lambda starts reading. For valid values, see
                     CreateEventSourceMapping in the
                  AWS Lambda Developer Guide.Update requires: Replacement
*/
function EventSourceMapping (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::EventSourceMapping'
    let properties = {
      BatchSize: new ResourceAttribute('BatchSize', Number, false, 'No', null),
      Enabled: new ResourceAttribute('Enabled', Boolean, false, 'No', null),
      EventSourceArn: new ResourceAttribute('EventSourceArn', String, false, 'Yes', null),
      FunctionName: new ResourceAttribute('FunctionName', String, false, 'Yes', null),
      StartingPosition: new ResourceAttribute('StartingPosition', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
EventSourceMapping.prototype = Object.create(WKResource.prototype)

/** @memberof module:Lambda
*   @extends WKResource
* @property {String} Description Required: No. Information about the alias, such as its purpose or the Lambda function that is associated with it.Update requires: No interruption
* @property {String} FunctionName Required: Yes. The Lambda function that you want to associate with this alias. You can specify the function's name or its Amazon Resource Name (ARN).Update requires: Replacement
* @property {String} FunctionVersion Required: Yes. The version of the Lambda function that you want to associate with this alias.Update requires: No interruption
* @property {String} Name Required: Yes. A name for the alias.Update requires: Replacement
*/
function Alias (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Alias'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, false, 'Yes', null),
      FunctionVersion: new ResourceAttribute('FunctionVersion', String, false, 'Yes', null),
      Name: new ResourceAttribute('Name', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Alias.prototype = Object.create(WKResource.prototype)

/** @memberof module:Lambda
*   @extends WKResource
* @property {AWSLambdaFunctionCode} Code Required: Yes. The source code of your Lambda function. You can point to a file in an Amazon Simple Storage Service
            (Amazon S3) bucket or specify your source code as inline text.Update requires: No interruption
* @property {String} Description Required: No. A description of the function.Update requires: No interruption
* @property {String} FunctionName Required: No. A name for the function. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} Handler Required: Yes. The name of the function (within your source code) that Lambda calls to start running
                  your code. For more information, see the Handler property in the
                     AWS Lambda Developer Guide.NoteIf you specify your source code as inline text by specifying the ZipFile property within the Code property, specify index.function_name as the handler.Update requires: No interruption
* @property {Number} MemorySize Required: No. The amount of memory, in MB, that is allocated to your Lambda function. Lambda
                  uses this value to proportionally allocate the amount of CPU power. For more
                  information, see Resource
                     Model in the AWS Lambda Developer Guide.Your function use case determines your CPU and memory requirements. For
                  example, a database operation might need less memory than an image processing
                  function. You must specify a value that is greater than or equal to
                     128, and it must be a multiple of 64. You cannot specify a size
                  larger than 1536. The default value is 128 MB.Update requires: No interruption
* @property {String} Role Required: Yes. The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role that
                  Lambda assumes when it runs your code to access AWS services.Update requires: No interruption
* @property {String} Runtime Required: Yes. The runtime environment for the Lambda function that you are uploading. For valid values, see the Runtime property in the AWS Lambda Developer Guide.Update requires: Replacement
* @property {Number} Timeout Required: No. The function execution time (in seconds) after which Lambda terminates the
                  function. Because the execution time affects cost, set this value based on the
                  function's expected execution time. By default,  Timeout is set to
                     3 seconds. Update requires: No interruption
* @property {AWSLambdaFunctionVPCConfig} VpcConfig Required: No. If the Lambda function requires access to resources in a VPC, specify a VPC configuration that Lambda uses to set up an elastic network interface (ENI). The ENI enables your function to connect to other resources in your VPC, but it doesn't provide public Internet access. If your function requires Internet access (for example, to access AWS services that don't have VPC endpoints), configure a Network Address Translation (NAT) instance inside your VPC or use an Amazon Virtual Private Cloud
                  (Amazon VPC) NAT gateway. For more information, see NAT Gateways in the Amazon VPC User Guide.Update requires: No interruption
*/
function LambdaFunction (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Function'
    let properties = {
      Code: new ResourceAttribute('Code', types.AWSLambdaFunctionCode, false, 'Yes', null),
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, false, 'No', null),
      Handler: new ResourceAttribute('Handler', String, false, 'Yes', null),
      MemorySize: new ResourceAttribute('MemorySize', Number, false, 'No', null),
      Role: new ResourceAttribute('Role', String, false, 'Yes', null),
      Runtime: new ResourceAttribute('Runtime', String, false, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', Number, false, 'No', null),
      VpcConfig: new ResourceAttribute('VpcConfig', types.AWSLambdaFunctionVPCConfig, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
LambdaFunction.prototype = Object.create(WKResource.prototype)

/** @memberof module:Lambda
*   @extends WKResource
* @property {String} Action Required: Yes. The Lambda actions that you want to allow in this statement. For example, you can specify lambda:CreateFunction to specify a certain action, or use a wildcard (lambda:*) to grant permission to all Lambda actions. For a list of actions, see Actions and Condition Context Keys for AWS Lambda in the IAM User Guide.Update requires: Replacement
* @property {String} FunctionName Required: Yes. The name (physical ID) or Amazon Resource Name (ARN) of the Lambda function that
                  you want to associate with this statement. Lambda adds this statement to the
                  function's access policy.Update requires: Replacement
* @property {String} Principal Required: Yes. The entity for which you are granting permission to invoke the Lambda function.
                  This entity can be any valid AWS service principal, such as
                     s3.amazonaws.com or sns.amazonaws.com, or, if you are
                  granting cross-account permission, an AWS account ID. For example, you might want
                  to allow a custom application in another AWS account to push events to Lambda by
                  invoking your function.Update requires: Replacement
* @property {String} SourceAccount Required: No. The AWS account ID (without hyphens) of the source owner. For example, if you
                  specify an S3 bucket in the SourceArn property, this value is the
                  bucket owner's account ID. You can use this property to ensure that all source
                  principals are owned by a specific account.ImportantThis property is not supported by all event sources. For more information, see the SourceAccount parameter for the AddPermission action in the AWS Lambda Developer Guide.Update requires: Replacement
* @property {String} SourceArn Required: No. The ARN of a resource that is invoking your function. When granting Amazon Simple Storage Service
                  (Amazon S3) permission to invoke your function, specify this property with the bucket
                  ARN as its value. This ensures that events generated only from the specified
                  bucket, not just any bucket from any AWS account that creates a mapping to your
                  function, can invoke the function.ImportantThis property is not supported by all event sources. For more information, see the SourceArn parameter for the AddPermission action in the AWS Lambda Developer Guide.Update requires: Replacement
*/
function Permission (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Permission'
    let properties = {
      Action: new ResourceAttribute('Action', String, false, 'Yes', null),
      FunctionName: new ResourceAttribute('FunctionName', String, false, 'Yes', null),
      Principal: new ResourceAttribute('Principal', String, false, 'Yes', null),
      SourceAccount: new ResourceAttribute('SourceAccount', String, false, 'No', null),
      SourceArn: new ResourceAttribute('SourceArn', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Permission.prototype = Object.create(WKResource.prototype)

/** @memberof module:Lambda
*   @extends WKResource
* @property {String} CodeSha256 Required: No. The SHA-256 hash of the deployment package that you want to publish. This value must match the SHA-256 hash of the $LATEST version of the function. Specify this property to validate that you are publishing the correct package. Update requires: Updates are not supported.
* @property {String} Description Required: No. A description of the version you are publishing. If you don't specify a value, Lambda copies the description from the $LATEST version of the function.Update requires: Updates are not supported.
* @property {String} FunctionName Required: Yes. The Lambda function for which you want to publish a version. You can specify the function's name or its Amazon Resource Name (ARN).Update requires: Replacement
*/
function Version (name, propertiesObject) {
    let resourceType = 'AWS::Lambda::Version'
    let properties = {
      CodeSha256: new ResourceAttribute('CodeSha256', String, false, 'No', null),
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      FunctionName: new ResourceAttribute('FunctionName', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Version.prototype = Object.create(WKResource.prototype)

module.exports = {  EventSourceMapping: EventSourceMapping,
  Alias: Alias,
  LambdaFunction: LambdaFunction,
  Permission: Permission,
  Version: Version
}
