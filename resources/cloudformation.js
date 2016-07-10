'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CloudFormation */

/** @memberof module:CloudFormation
*   @extends WKResource
* @property {String} accessKeyId Required: Conditional. Specifies the access key ID for S3 authentication.
* @property {String} buckets Required: Conditional. A comma-delimited list of Amazon S3 buckets to be associated with the S3
                  authentication credentials.
* @property {String} password Required: Conditional. Specifies the password for basic authentication.
* @property {String} secretKey Required: Conditional. Specifies the secret key for S3 authentication.
* @property {String} type Required: Yes. Specifies whether the authentication scheme uses a user name and password
                  ("basic") or an access key ID and secret key ("S3").If you specify "basic", specify the username, password, and uris properties.If you specify "S3", specify the accessKeyId, secretKey, and buckets (optional) properties.
* @property {String} uris Required: Conditional. A comma-delimited list of URIs to be associated with the basic authentication
                  credentials. The authorization applies to the specified URIs and any more specific
                  URI. For example, if you specify http://www.example.com, the
                  authorization will also apply to http://www.example.com/test.
* @property {String} username Required: Conditional. Specifies the user name for basic authentication.
* @property {String} roleName Required: Conditional. Describes the role for role-based authentication.
*/
class Authentication extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Authentication'
    let properties = {
      accessKeyId: new ResourceAttribute('accessKeyId', String, 'Conditional', null),
      buckets: new ResourceAttributeArray('buckets', String, 'Conditional', null),
      password: new ResourceAttribute('password', String, 'Conditional', null),
      secretKey: new ResourceAttribute('secretKey', String, 'Conditional', null),
      type: new ResourceAttribute('type', String, 'Yes', null),
      uris: new ResourceAttributeArray('uris', String, 'Conditional', null),
      username: new ResourceAttribute('username', String, 'Conditional', null),
      roleName: new ResourceAttribute('roleName', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
* @property {String} ServiceToken Required: Yes. The service token that was given to the template developer by the service provider
                  to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The
                  service token must be from the same region in which you are creating the
                  stack.Update requires: Updates are not supported.
*/
class CustomResource extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::CustomResource'
    let properties = {
      ServiceToken: new ResourceAttribute('ServiceToken', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
*/
class Init extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Init'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
* @property {AWSCloudFormationInterfaceParameterGroup} ParameterGroups Required: No. A list of parameter group types, where you specify group names, the parameters
            in each group, and the order in which the parameters are shown.Update requires: No interruption
* @property {AWSCloudFormationInterfaceParameterLabel} ParameterLabels Required: No. A list of parameters and their friendly names that the AWS CloudFormation console shows when
            a stack is created or updated.Update requires: No interruption
*/
class Interface extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Interface'
    let properties = {
      ParameterGroups: new ResourceAttribute('ParameterGroups', types.AWSCloudFormationInterfaceParameterGroup, 'No', null),
      ParameterLabels: new ResourceAttribute('ParameterLabels', types.AWSCloudFormationInterfaceParameterLabel, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
* @property {String} NotificationARNs Required: No. A list of existing Amazon SNS topics where notifications about stack events are
                  sent.Update requires: No interruption
* @property {CloudFormationStackParametersPropertyType} Parameters Required: Conditional. The set of parameters passed to AWS CloudFormation when this nested stack is created.NoteIf you use the ref function to pass a parameter value to a
                     nested stack, comma-delimited list parameters must be of type
                        String. In other words, you cannot pass values that are of type
                        CommaDelimitedList to nested stacks.Update requires: Whether an update causes interruptions
                  depends on the resources that are being update. An update never causes a nested
                  stack to be replaced.
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) to describe this
                  stack.Update requires: No interruption.
* @property {String} TemplateURL Required: Yes. The URL of a template that specifies the stack that you want to create as a
                  resource. The template must be stored on an Amazon S3 bucket, so the URL must have the
                  form:
                     https://s3.amazonaws.com/.../TemplateName.templateUpdate requires: Whether an update causes interruptions
                  depends on the resources that are being update. An update never causes a nested
                  stack to be replaced.
* @property {String} TimeoutInMinutes Required: No. The length of time, in minutes, that AWS CloudFormation waits for the nested stack to reach
                  the CREATE_COMPLETE state. The default is no timeout. When AWS CloudFormation detects that the
                  nested stack has reached the CREATE_COMPLETE state, it marks the nested stack
                  resource as CREATE_COMPLETE in the parent stack and resumes creating the parent
                  stack. If the timeout period expires before the nested stack reaches
                  CREATE_COMPLETE, AWS CloudFormation marks the nested stack as failed and rolls back both the
                  nested stack and parent stack.Update requires: Updates are not supported.
*/
class Stack extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Stack'
    let properties = {
      NotificationARNs: new ResourceAttributeArray('NotificationARNs', String, 'No', null),
      Parameters: new ResourceAttribute('Parameters', types.CloudFormationStackParametersPropertyType, 'Conditional', null),
      Tags: new tag.TagSet(),
      TemplateURL: new ResourceAttribute('TemplateURL', String, 'Yes', null),
      TimeoutInMinutes: new ResourceAttribute('TimeoutInMinutes', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
* @property {String} Count Required: No. The number of success signals that AWS CloudFormation must receive before it continues
                        the stack creation process. When the wait condition receives the requisite
                        number of success signals, AWS CloudFormation resumes the creation of the stack. If the
                        wait condition does not receive the specified number of success signals
                        before the Timeout period expires, AWS CloudFormation assumes that the wait condition has
                        failed and rolls the stack back.Update requires: Updates are not supported.
* @property {String} Handle Required: Yes. A reference to the wait condition handle used to signal this wait
                        condition. Use the Ref intrinsic function to specify an
                            AWS::CloudFormation::WaitConditionHandle resource.Anytime you add a WaitCondition resource during a stack update, you must
                        associate the wait condition with a new WaitConditionHandle resource. Do not
                        reuse an old wait condition handle that has already been defined in the
                        template. If you reuse a wait condition handle, the wait condition might
                        evaluate old signals from a previous create or update stack command.Update requires: Updates are not supported.
* @property {String} Timeout Required: Yes. The length of time (in seconds) to wait for the number of signals that the
                            Count property specifies. Timeout is a
                        minimum-bound property, meaning the timeout occurs no sooner than the time
                        you specify, but can occur shortly thereafter. The maximum time that can be
                        specified for this property is 12 hours (43200 seconds).Update requires: Updates are not supported.
*/
class WaitCondition extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitCondition'
    let properties = {
      Count: new ResourceAttribute('Count', String, 'No', null),
      Handle: new ResourceAttribute('Handle', String, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:CloudFormation
*   @extends WKResource
*/
class WaitConditionHandle extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitConditionHandle'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Authentication: Authentication,
  CustomResource: CustomResource,
  Init: Init,
  Interface: Interface,
  Stack: Stack,
  WaitCondition: WaitCondition,
  WaitConditionHandle: WaitConditionHandle
}
