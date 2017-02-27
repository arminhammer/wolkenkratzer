'use strict';

const Intrinsic = require('./intrinsic').Intrinsic;
const TypeException = require('./exceptions').TypeException;

/** @module Core */

/**
 * @memberof module:Core
 */
function Tag(key, value) {
  this.Key = key;
  this.Value = value;
}

/**
 * Returns a JSON representation of the Tag
 * @returns {{Key: module:KMS.Key, Value: *}}
 */
Tag.prototype.toJson = function() {
  let value = this.Value;
  if (value instanceof Intrinsic) {
    value = value.toJson().json;
  }
  return { Key: this.Key, Value: value };
};

/**
 * @memberof module:Core
 */
function TagSet() {
  this.tags = {};
}

/**
 * Adds a tag to the resource's tagset. If one parameter is provided and it is of type Tag, it will be added. If the only parameter is
 * an object with the { Key: 'Key', Value: 'Value' } format, it is also valid. Alternatively two string parameters are provided, the
 * first being the key and the second being the value.
 * @param first
 * @param second
 */
TagSet.prototype.add = function(first, second) {
  let tag;
  if (typeof second === 'undefined') {
    if (!(first instanceof Tag)) {
      if (first.Key && first.Value) {
        tag = new Tag(first.Key, first.Value);
      } else {
        throw new TypeException(tag, 'is not a valid tag');
      }
    } else {
      tag = first;
    }
    this.tags[tag.Key] = tag;
  } else {
    if (typeof first === 'string' && typeof second === 'string') {
      tag = new Tag(first, second);
      this.tags[tag.Key] = tag;
    } else {
      throw new TypeException(first + ' and ' + second + 'must be strings.');
    }
  }
};

/**
 * Removes a Tag object from the TagSet
 * @param tag
 */
TagSet.prototype.remove = function(tag) {
  delete this.tags(tag);
};

/**
 * Returns a JSON representation of the TagSet
 * @returns {Array}
 */
TagSet.prototype.toJson = function() {
  if (Object.keys(this.tags).length > 0) {
    let tagArray = [];
    for (let tag in this.tags) {
      let tagJson = this.tags[tag].toJson();
      tagArray.push(tagJson);
    }
    return { errors: null, json: tagArray };
  } else {
    return { errors: null, json: null };
  }
};

module.exports = {
  TagSet: TagSet,
  Tag: Tag
};
