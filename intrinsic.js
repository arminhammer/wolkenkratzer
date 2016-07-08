/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Intrinsic {
  toJson () {}
}

class Ref extends Intrinsic {
  constructor (resource) {
    super()
    this.ref = resource
  }
  toJson () {
    return { 'Ref': this.ref.WKName }
  }
  toJSON () {
    return { 'Ref': this.ref.WKName }
  }
}

class FnGetAtt extends Intrinsic {
  constructor (resource, attribute) {
    super()
    this.resource = resource
    this.attribute = attribute
  }
  toJson () {
    return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
  }
  toJSON () {
    return { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
  }
}

class FnBase64 extends Intrinsic {
  constructor (content) {
    super()
    this.content = content
  }
  toJson () {
    return { "Fn::Base64": this.content }
  }
  toJSON () {
    return { "Fn::Base64": this.content }
  }
}

class FnFindInMap extends Intrinsic {
  constructor (mapName, topLevelKey, secondLevelKey) {
    super()
    this.mapName = mapName
    this.topLevelKey = topLevelKey
    this.secondLevelKey = secondLevelKey
  }
  toJson () {
    return { "Fn::FindInMap": [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
  }
  toJSON () {
    return { "Fn::FindInMap": [ this.mapName, this.topLevelKey, this.secondLevelKey ] }
  }
}

/* class FnGetAZs extends Intrinsic {
 constructor (region) {
 super()
 this.region = region
 }
 toJson () {}
 }*/

class FnJoin extends Intrinsic {
  constructor (delimiter, values) {
    super()
    this.delimiter = delimiter
    this.values = values
  }
  toJson () {
    return { "Fn::Join": [ this.delimiter, this.values ] }
  }
  toJSON () {
    return { "Fn::Join": [ this.delimiter, this.values ] }
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