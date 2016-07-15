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
class Intrinsic {
  /**
   * Returns a JSON Object
   */
  toJson () {}
}

/**
 * @memberof module:Core
 */
class Ref extends Intrinsic {
  /**
   * @constructs Ref
   * @param resource
   */
  constructor (resource) {
    super()
    this.ref = resource
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  toJson () {
    return { 'Ref': this.ref.WKName }
  }
  toJSON () {
    if (this.ref instanceof WKResource || this.ref instanceof Parameter) {
      return { 'Ref': this.ref.WKName }
    } else {
      return { 'Ref': this.ref }
    }
  }
}

/**
 * @memberof module:Core
 */
class FnGetAtt extends Intrinsic {
  /**
   * @constructs FnGetAtt
   * @param resource
   * @param attribute
   */
  constructor (resource, attribute) {
    super()
    this.resource = resource
    this.attribute = attribute
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  toJson () {
    return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
  }
  toJSON () {
    if (this.resource instanceof WKResource || this.resource instanceof Parameter) {
      return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
    } else {
      return { 'Fn::GetAtt': [this.resource, this.attribute] }
    }
  }
}

/**
 * @memberof module:Core
 */
class FnBase64 extends Intrinsic {
  /**
   * @constructs FnBase64
   * @param content
   */
  constructor (content) {
    super()
    this.content = content
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  toJson () {
    return { 'Fn::Base64': this.content }
  }
  toJSON () {
    return { 'Fn::Base64': this.content }
  }
}

/**
 * @memberof module:Core
 */
class FnFindInMap extends Intrinsic {
  /**
   * @constructs FnFindInMap
   * @param mapName
   * @param topLevelKey
   * @param secondLevelKey
   */
  constructor (mapName, topLevelKey, secondLevelKey) {
    super()
    this.mapName = mapName
    this.topLevelKey = topLevelKey
    this.secondLevelKey = secondLevelKey
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  toJson () {
    return { 'Fn::FindInMap': [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
  }
  toJSON () {
    return { 'Fn::FindInMap': [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
  }
}

/* class FnGetAZs extends Intrinsic {
 constructor (region) {
 super()
 this.region = region
 }
 toJson () {}
 }*/

/**
 * @memberof module:Core
 */
class FnJoin extends Intrinsic {
  /**
   * @constructs FnJoin
   * @param delimiter
   * @param values
   */
  constructor (delimiter, values) {
    super()
    this.delimiter = delimiter
    this.values = values
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  toJson () {
    return { 'Fn::Join': [ this.delimiter, this.values ] }
  }
  toJSON () {
    return { 'Fn::Join': [ this.delimiter, this.values ] }
  }
}

/* class FnSelect extends Intrinsic {
 constructor (index, list) {
 super()
 this.index = index
 this.list = list
 }
 toJson () {}
 }*/

/* class Conditional extends Intrinsic {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* class FnIf extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* class FnEquals extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* class FnNot extends Conditional {
 constructor () {
 super()
 }
 toJson () {}
 }*/

/* class FnOr extends Conditional {
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
