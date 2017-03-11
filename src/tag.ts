'use strict';

import { Intrinsic } from './intrinsic';
import { TypeException } from './exceptions';

/**
 * @class Tag
 */
export class Tag {

  private Key: string;
  private Value: any;

  constructor(key: string, value: any) {
    this.Key = key;
    this.Value = value;
  }

  /**
 * Returns a JSON representation of the Tag
 * @returns {{Key: module:KMS.Key, Value: *}}
 */
  public toJson = function () {
    let value = this.Value;
    if (value instanceof Intrinsic.Intrinsic) {
      value = value.toJson().json;
    }
    return { Key: this.Key, Value: value };
  };
}
