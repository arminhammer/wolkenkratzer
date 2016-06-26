/**
 * Created by arming on 6/2/16.
 */
'use strict'
const debug = require('debug')('index')
const Template = require('./template').Template
const Tag = require('./tag').Tag
const TagSet = require('./tag').TagSet
const Intrinsic = require('./intrinsic').Intrinsic
const Ref = require('./intrinsic').Ref
const FnGetAtt = require('./intrinsic').FnGetAtt
const Parameter = require('./parameter').Parameter
const BaseAWSObject = require('./baseawsobject').BaseAWSObject
const SubPropertyObject = require('./baseawsobject').SubPropertyObject
const ResourceProperty = require('./resourceproperty').ResourceProperty
const ResourceArray = require('./resourceproperty').ResourceArray
const TypeException = require('./exceptions').TypeException
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const ValueException = require('./exceptions').ValueException
const Properties = require('./resources/propertytypes/propertytypes')

// constants for DeletionPolicy
/* const Delete = 'Delete'
const Retain = 'Retain'
const Snapshot = 'Snapshot'*/

// Pseudo Parameters
/* const AWS_ACCOUNT_ID = 'AWS::AccountId'
const AWS_NOTIFICATION_ARNS = 'AWS::NotificationARNs'
const AWS_NO_VALUE = 'AWS::NoValue'
const AWS_REGION = 'AWS::Region'
const AWS_STACK_ID = 'AWS::StackId'
const AWS_STACK_NAME = 'AWS::StackName'*/

module.exports = {
  Template: Template,
  BaseAWSObject: BaseAWSObject,
  SubPropertyObject: SubPropertyObject,
  Parameter: Parameter,
  Properties: Properties,
  ResourceProperty: ResourceProperty,
  ResourceArray: ResourceArray,
  TagSet: TagSet,
  Tag: Tag,
  Ref: Ref,
  Intrinsic: Intrinsic,
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException,
  FnGetAtt: FnGetAtt
}
