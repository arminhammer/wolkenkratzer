'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module Events */

/** @memberof module:Events
*   @extends WKResource
* @property {String} Description Required: No. A description of the rule's purpose.Update requires: No interruption
* @property {Object} EventPattern Required: Conditional. Describes which events CloudWatch Events routes to the specified target. These routed events are matched events. For more information, see Events and Event Patterns in the Amazon CloudWatch Developer Guide.Update requires: No interruption
* @property {String} Name Required: No. A name for the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {String} RoleArn Required: No. The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants CloudWatch Events permission to make calls to target services, such as AWS Lambda (Lambda) or Amazon Kinesis streams.Update requires: No interruption
* @property {String} ScheduleExpression Required: Conditional. The schedule or rate (frequency) that determines when CloudWatch Events runs the rule. For more information, see Schedule Expression Syntax for Rules in the Amazon CloudWatch Developer Guide.Update requires: No interruption
* @property {String} State Required: No. Indicates whether the rule is enabled. For valid values, see the State parameter for the PutRule action in the Amazon CloudWatch Events API Reference.Update requires: No interruption
* @property {AmazonCloudWatchEventsRuleTarget} Targets Required: No. The resources, such as Lambda functions or Amazon Kinesis streams, that CloudWatch Events routes events to and invokes when the rule is triggered.  For information about valid targets, see the PutTargets action in the Amazon CloudWatch Events API Reference.Update requires: No interruption
*/
function Rule (name, propertiesObject) {
    let resourceType = 'AWS::Events::Rule'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      EventPattern: new ResourceAttribute('EventPattern', Object, false, 'Conditional', null),
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      RoleArn: new ResourceAttribute('RoleArn', String, false, 'No', null),
      ScheduleExpression: new ResourceAttribute('ScheduleExpression', String, false, 'Conditional', null),
      State: new ResourceAttribute('State', String, false, 'No', null),
      Targets: new ResourceAttribute('Targets', types.AmazonCloudWatchEventsRuleTarget, true, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Rule.prototype = Object.create(WKResource.prototype)

module.exports = {  Rule: Rule
}
