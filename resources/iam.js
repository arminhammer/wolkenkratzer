'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module IAM */

/** @memberof module:IAM
*   @extends WKResource
* @property {Number} Serial Required: No. This value is specific to AWS CloudFormation and can only be incremented. Incrementing this
                  value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will
                  replace the existing access key with a new key.Update requires: Replacement
* @property {String} Status Required: No. The status of the access key. By default, AWS CloudFormation sets this property value to
                     Active.Valid values:
                  Active or InactiveUpdate requires: No interruption
* @property {String} UserName Required: Yes. The name of the user that the new key will belong to.Update requires: Replacement
*/
function AccessKey (name, propertiesObject) {
    let resourceType = 'AWS::IAM::AccessKey'
    let properties = {
      Serial: new ResourceAttribute('Serial', Number, 'No', null),
      Status: new ResourceAttribute('Status', String, 'No', null),
      UserName: new ResourceAttribute('UserName', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
AccessKey.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} GroupName Required: No. A name for the IAM group. For valid values, see the GroupName parameter for the CreateGroup action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates. WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.Update requires: Replacement
* @property {String} ManagedPolicyArns Required: No. One or more managed policy ARNs to attach to this group.Update requires: No interruption
* @property {String} Path Required: No. The path to the group. For more information about paths, see IAM Identifiers in the IAM User Guide.Update requires: No interruption
* @property {IAMPolicies} Policies Required: No. The policies to associate with this group. For information about policies, see Overview of IAM Policies in the IAM User Guide.Update requires: No interruption
*/
function Group (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Group'
    let properties = {
      GroupName: new ResourceAttribute('GroupName', String, 'No', null),
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Group.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} Path Required: Yes. The path associated with this IAM instance profile. For information about IAM paths, see Friendly Names and Paths in the AWS Identity and Access Management User
                     Guide.Update requires: Replacement
* @property {String} Roles Required: Yes. The roles associated with this IAM instance profile.Update requires: No interruption
*/
function InstanceProfile (name, propertiesObject) {
    let resourceType = 'AWS::IAM::InstanceProfile'
    let properties = {
      Path: new ResourceAttribute('Path', String, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
InstanceProfile.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} Description Required: No. A description of the policy. For example, you can describe the permissions that
                  are defined in the policy.Update requires: Replacement
* @property {String} Groups Required: No. The names of groups to attach to this policy.Update requires: No interruption
* @property {String} Path Required: No. The path for the policy. By default, the path is /. For more
                  information, see IAM
                     Identifiers in the IAM User Guide
                  guide.Update requires: Replacement
* @property {Object} PolicyDocument Required: Yes. Policies that define the permissions for this managed policy. For more
                  information about policy syntax, see IAM Policy Elements Reference in
                     IAM User Guide.Update requires: No interruption
* @property {String} Roles Required: No. The names of roles to attach to this policy.NoteIf a policy has a Ref to a role and if a resource (such as
                        AWS::ECS::Service) also has a Ref to the same
                     role, add a DependsOn attribute to the resource so that the
                     resource depends on the policy. This dependency ensures that the role's policy
                     is available throughout the resource's lifecycle. For example, when you delete
                     a stack with an AWS::ECS::Service resource, the
                        DependsOn attribute ensures that the
                        AWS::ECS::Service resource can complete its deletion before its
                     role's policy is deleted.Update requires: No interruption
* @property {String} Users Required: No. The names of users to attach to this policy.Update requires: No interruption
*/
function ManagedPolicy (name, propertiesObject) {
    let resourceType = 'AWS::IAM::ManagedPolicy'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Groups: new ResourceAttributeArray('Groups', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'No', null),
      Users: new ResourceAttributeArray('Users', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
ManagedPolicy.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} Groups Required: Conditional. The names of groups to which you want to add the policy.Update requires: No interruption
* @property {Object} PolicyDocument Required: Yes. A policy document that contains permissions to add to the specified users or
                  groups.Update requires: No interruption
* @property {String} PolicyName Required: Yes. The name of the policy. If you specify multiple policies for an entity, specify
                  unique names. For example, if you specify a list of policies for an IAM role,
                  each policy must have a unique name.Update requires: No interruption
* @property {String} Roles Required: Conditional. The names of AWS::IAM::Roles to
                  attach to this policy.NoteIf a policy has a Ref to a role and if a resource (such as
                        AWS::ECS::Service) also has a Ref to the same
                     role, add a DependsOn attribute to the resource so that the
                     resource depends on the policy. This dependency ensures that the role's policy
                     is available throughout the resource's lifecycle. For example, when you delete
                     a stack with an AWS::ECS::Service resource, the
                        DependsOn attribute ensures that the
                        AWS::ECS::Service resource can complete its deletion before its
                     role's policy is deleted.Update requires: No interruption
* @property {String} Users Required: Conditional. The names of users for whom you want to add the policy.Update requires: No interruption
*/
function Policy (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Policy'
    let properties = {
      Groups: new ResourceAttributeArray('Groups', String, 'Conditional', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null),
      PolicyName: new ResourceAttribute('PolicyName', String, 'Yes', null),
      Roles: new ResourceAttributeArray('Roles', String, 'Conditional', null),
      Users: new ResourceAttributeArray('Users', String, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Policy.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {Object} AssumeRolePolicyDocument Required: Yes. The trust policy that is associated with this role.Update requires: No interruptionNoteYou can associate only one assume role policy with a role. For an example of
                     an assume role policy, see Template Examples.
* @property {String} ManagedPolicyArns Required: No. One or more managed policy ARNs to attach to this role.Update requires: No interruption
* @property {String} Path Required: No. The path associated with this role. For information about IAM paths, see
                     Friendly Names and Paths in
                  IAM User Guide.Update requires: Replacement
* @property {IAMPolicies} Policies Required: No. The policies to associate with this role. You can specify a policy inline or reference an external policy, such as a policy declared in an AWS::IAM::Policy or AWS::IAM::ManagedPolicy resource. For sample templates that demonstrates both embedded and external policies, see Template Examples.ImportantThe name of each policy for a role, user, or group must be unique. Duplicate policy names can cause IAM role updates to fail. NoteIf an external policy (such as AWS::IAM::Policy or AWS::IAM::ManagedPolicy) has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a
                     stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that AWS CloudFormation deletes the AWS::ECS::Service resource  before deleting its role's policy.Update requires: No interruption
* @property {String} RoleName Required: No. A name for the IAM role. For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates. WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.Update requires: Replacement
*/
function Role (name, propertiesObject) {
    let resourceType = 'AWS::IAM::Role'
    let properties = {
      AssumeRolePolicyDocument: new ResourceAttribute('AssumeRolePolicyDocument', Object, 'Yes', null),
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null),
      RoleName: new ResourceAttribute('RoleName', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Role.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} Groups Required: No. A name of a group to which you want to add the user.Update requires: No interruption
* @property {IAMUserLoginProfile} LoginProfile Required: No. Creates a login profile so that the user can access the AWS Management Console.Update requires: No interruption
* @property {String} ManagedPolicyArns Required: No. One or more managed policy ARNs to attach to this user.Update requires: No interruption
* @property {String} Path Required: No. The path for the user name. For more information about paths, see IAM Identifiers in the IAM User Guide.Update requires: No interruption
* @property {IAMPolicies} Policies Required: No. The policies to associate with this user. For information about policies, see Overview of IAM Policies in the IAM User Guide.NoteIf you specify multiple polices, specify unique values for the policy name.
                     If you don't, updates to the IAM user will fail.Update requires: No interruption
* @property {String} UserName Required: No. A name for the IAM user. For valid values, see the UserName
            parameter for the CreateUser action in the IAM API Reference.
            If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for
            the
            group
            name.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates. WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.Update requires: Replacement
*/
function User (name, propertiesObject) {
    let resourceType = 'AWS::IAM::User'
    let properties = {
      Groups: new ResourceAttributeArray('Groups', String, 'No', null),
      LoginProfile: new ResourceAttribute('LoginProfile', types.IAMUserLoginProfile, 'No', null),
      ManagedPolicyArns: new ResourceAttributeArray('ManagedPolicyArns', String, 'No', null),
      Path: new ResourceAttribute('Path', String, 'No', null),
      Policies: new ResourceAttributeArray('Policies', types.IAMPolicies, 'No', null),
      UserName: new ResourceAttribute('UserName', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
User.prototype = Object.create(WKResource.prototype)

/** @memberof module:IAM
*   @extends WKResource
* @property {String} GroupName Required: Yes. The name of group to add users to.Update requires: No interruption
* @property {String} Users Required: Yes. Update requires: No interruption
*/
function UserToGroupAddition (name, propertiesObject) {
    let resourceType = 'AWS::IAM::UserToGroupAddition'
    let properties = {
      GroupName: new ResourceAttribute('GroupName', String, 'Yes', null),
      Users: new ResourceAttributeArray('Users', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
UserToGroupAddition.prototype = Object.create(WKResource.prototype)

module.exports = {  AccessKey: AccessKey,
  Group: Group,
  InstanceProfile: InstanceProfile,
  ManagedPolicy: ManagedPolicy,
  Policy: Policy,
  Role: Role,
  User: User,
  UserToGroupAddition: UserToGroupAddition
}
