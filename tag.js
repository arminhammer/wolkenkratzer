/**
 * Created by arming on 6/15/16.
 */
'use strict'
// const debug = require('debug')('tag')
const Intrinsic = require('./index').Intrinsic
const TypeException = require('./index').TypeException

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
  TagSet: TagSet,
  Tag: Tag
}
