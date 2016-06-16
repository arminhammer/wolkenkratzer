/**
 * Created by arming on 6/2/16.
 */
'use strict'
const debug = require('debug')('index')
const Template = require('./template').Template
// const Tag = require('./tag').Tag
// const TagSet = require('./tag').TagSet
const Intrinsic = require('./intrinsic').Intrinsic
const Ref = require('./intrinsic').Ref
const FnGetAtt = require('./intrinsic').FnGetAtt
const Parameter = require('./parameter').Parameter
const BaseAWSObject = require('./baseawsobject').BaseAWSObject
const ResourceProperty = require('./resourceproperty').ResourceProperty
const TypeException = require('./exceptions').TypeException
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const ValueException = require('./exceptions').ValueException

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

class Tag {
  constructor (key, value) {
    this.Key = key
    this.Value = value
  }
  toJson () {
    let value = this.Value
    if (value instanceof Intrinsic) {
      value = value.toJson()
    }
    return { Key: this.Key, Value: value }
  }
}

class TagSet {
  constructor () {
    this.tags = {}
  }
  add (tag) {
    if (!(tag instanceof Tag)) {
      if (tag.Key && tag.Value) {
        tag = new Tag(tag.Key, tag.Value)
      } else {
        throw new TypeException(tag, 'is not a valid tag')
      }
    }
    this.tags[tag.Key] = tag
  }
  remove (tag) {
    delete this.tags(tag)
  }
  toJson () {
    if (Object.keys(this.tags).length > 0) {
      let tagArray = []
      for (let tag in this.tags) {
        let tagJson = this.tags[tag].toJson()
        tagArray.push(tagJson)
      }
      return tagArray
    }
  }
}

module.exports = {
  Template: Template,
  BaseAWSObject: BaseAWSObject,
  Parameter: Parameter,
  ResourceProperty: ResourceProperty,
  TagSet: TagSet,
  Tag: Tag,
  Ref: Ref,
  Intrinsic: Intrinsic,
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException,
  FnGetAtt: FnGetAtt
}
