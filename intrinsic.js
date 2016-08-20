/**
 * Created by arming on 6/15/16.
 */
'use strict'

const WKResource = require('./resource').WKResource
const Parameter = require('./parameter').Parameter

/** @module Core */

/**
 * @memberof module:Core
 */
function Intrinsic () {
}

/**
 * Returns a JSON Object
 */
Intrinsic.prototype.toJson = function () {}

/**
 * @memberof module:Core
 */
function Ref (resource) {
  Intrinsic.call(this)
  this.ref = resource
}
Ref.prototype = Object.create(Intrinsic.prototype)

/**
 * Returns a JSON string version
 * @returns {Object}
 */
Ref.prototype.toJson = function () {
  return { 'Ref': this.ref.WKName }
}

Ref.prototype.toJSON = function () {
  if (this.ref instanceof WKResource || this.ref instanceof Parameter) {
    return { 'Ref': this.ref.WKName }
  } else {
    return { 'Ref': this.ref }
  }
}

/**
 * @memberof module:Core
 */
function FnGetAtt (resource, attribute) {
  Intrinsic.call(this)
  this.resource = resource
  this.attribute = attribute
}
FnGetAtt.prototype = Object.create(Intrinsic.prototype)

/**
 * Returns a JSON string version
 * @returns {Object}
 */
FnGetAtt.prototype.toJson = function () {
  return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
}

FnGetAtt.prototype.toJSON = function () {
  if (this.resource instanceof WKResource || this.resource instanceof Parameter) {
    return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
  } else {
    return { 'Fn::GetAtt': [this.resource, this.attribute] }
  }
}

/**
 * @memberof module:Core
 */
function FnBase64 (content) {
  Intrinsic.call(this)
  this.content = content
}
FnBase64.prototype = Object.create(Intrinsic.prototype)

/**
 * Returns a JSON string version
 * @returns {Object}
 */
FnBase64.prototype.toJson = function () {
  return { 'Fn::Base64': this.content }
}

FnBase64.prototype.toJSON = function () {
  return { 'Fn::Base64': this.content }
}


/**
 * @memberof module:Core
 */
function FnFindInMap (mapName, topLevelKey, secondLevelKey) {
  Intrinsic.call(this)
  this.mapName = mapName
  this.topLevelKey = topLevelKey
  this.secondLevelKey = secondLevelKey
}
FnFindInMap.prototype = Object.create(Intrinsic.prototype)

/**
 * Returns a JSON string version
 * @returns {Object}
 */
FnFindInMap.prototype.toJson = function () {
  return { 'Fn::FindInMap': [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
}

FnFindInMap.prototype.toJSON = function () {
  return { 'Fn::FindInMap': [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
}

/* function FnGetAZs extends Intrinsic {
 constructor (region) {
 super()
 this.region = region
 }
 toJson () {}
 }*/

/**
 * @memberof module:Core
 */
function FnJoin (delimiter, values) {
  Intrinsic.call(this)
  this.delimiter = delimiter
  this.values = values
}
FnJoin.prototype = Object.create(Intrinsic.prototype)
/**
 * Returns a JSON string version
 * @returns {Object}
 */
FnJoin.prototype.toJson = function () {
  return { 'Fn::Join': [ this.delimiter, this.values ] }
}

FnJoin.prototype.toJSON = function () {
  return { 'Fn::Join': [ this.delimiter, this.values ] }
}

/* function FnSelect extends Intrinsic {
 constructor (index, list) {
 super()
 this.index = index
 this.list = list
 }
 toJson () {}
 }*/

/* function Conditional extends Intrinsic {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* function FnIf extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* function FnEquals extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* function FnNot extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* function FnOr extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

module.exports = {
  Ref: Ref,
  Intrinsic: Intrinsic,
  FnGetAtt: FnGetAtt,
  FnBase64: FnBase64,
  FnFindInMap: FnFindInMap,
  FnJoin: FnJoin
}
