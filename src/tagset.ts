'use strict';

import { Intrinsic } from './intrinsic';
import { TypeException } from './exceptions';
import { Tag } from './tag'

/**
 * @class TagSet
 */
export class TagSet {

  private tags: any;

  constructor() {
    this.tags = {};
  }

  /**
   * Adds a tag to the resource's tagset. If one parameter is provided and it is of type Tag, it will be added. If the only parameter is
   * an object with the { Key: 'Key', Value: 'Value' } format, it is also valid. Alternatively two string parameters are provided, the
   * first being the key and the second being the value.
   * @param first
   * @param second
   */
  public add(first: any, second: any) {
    let tag: any;
    if (typeof second === 'undefined') {
      if (!(first instanceof Tag)) {
        if (first.Key && first.Value) {
          tag = new Tag(first.Key, first.Value);
        } else {
          throw new TypeException(tag + 'is not a valid tag');
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
  public remove(tag: string) {
    delete this.tags['tag'];
  };

  /**
   * Returns a JSON representation of the TagSet
   * @returns {Array}
   */
  public toJson(): any {
    if (Object.keys(this.tags).length > 0) {
      let tagArray: Object[] = [];
      for (let tag in this.tags) {
        let tagJson = this.tags[tag].toJson();
        tagArray.push(tagJson);
      }
      return { errors: null, json: tagArray };
    } else {
      return { errors: null, json: null };
    }
  };
}
