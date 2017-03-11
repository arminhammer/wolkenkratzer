'use strict';

import { Intrinsic } from './intrinsic';
import { TypeException } from './exceptions';
import { ResourceProperty } from './resourceproperty';

/** @module Core */

/**
 * @memberof module:Core
 */
export class ResourceAttribute {

  private WKName: any;
  private Type: any;
  private isArray: any;
  private required: any;
  private val: any;

  constructor(name: string, type: any, isArray: boolean, required: any, value: any) {
    this.WKName = name;
    this.Type = type;
    this.isArray = isArray;
    this.required = required;
    this.val = value;
  }

  /**
   * Set the value of the attribute
   * @param value
   */
  set(value: any) {
    if (this.isArray) {
      let instrinsicValue = Intrinsic.makeIntrinsic(value);
      if (instrinsicValue) {
        value = instrinsicValue;
      }
      if (value instanceof Intrinsic.Intrinsic) {
        this.val = value;
      } else if (!Array.isArray(value)) {
        throw new TypeException(
            value + ' is the wrong type, was expecting an array of ' + this.Type
        );
      } else {
        this.val = [];
        for (let val of value) {
          val = new this.Type(val);
          if (
              (typeof val === 'string' &&
              this.Type.prototype === String.prototype) ||
              (typeof val === 'boolean' &&
              this.Type.prototype === Boolean.prototype) ||
              (typeof val === 'number' &&
              this.Type.prototype === Number.prototype) ||
              val instanceof this.Type
          ) {
            this.val.push(val);
          } else {
            throw new TypeException(
                value +
                ' is the wrong type for ' +
                this.WKName +
                ', was expecting ' +
                this.Type
            );
          }
        }
      }
    } else {
      let instrinsicValue = Intrinsic.makeIntrinsic(value);
      if (instrinsicValue) {
        value = instrinsicValue;
      }
      if (value instanceof Intrinsic.Intrinsic) {
        this.val = value;
      } else {
        if (
            (typeof value === 'string' &&
            this.Type.prototype === String.prototype) ||
            (typeof value === 'boolean' &&
            this.Type.prototype === Boolean.prototype) ||
            (typeof value === 'number' &&
            this.Type.prototype === Number.prototype) ||
            value instanceof this.Type
        ) {
          this.val = value;
        } else if (new this.Type(value) instanceof this.Type) {
          this.val = new this.Type(value);
        } else {
          throw new TypeException(
              value +
              ' is the wrong type for ' +
              this.WKName +
              ', was expecting ' +
              this.Type
          );
        }
      }
    }
  };

  /**
   * Add a value to the attribute array
   * @param val
   */
  push(val: any) {
    if (!this.isArray) {
      throw new TypeException(
          this.WKName + ' is not an array, cannot push ' + val
      );
    }
    let value = val;
    let instrinsicValue = Intrinsic.makeIntrinsic(value);
    if (instrinsicValue) {
      value = instrinsicValue;
    }
    if (
        value instanceof Intrinsic.Intrinsic ||
        (typeof value === 'string' && this.Type.prototype === String.prototype) ||
        (typeof value === 'boolean' && this.Type.prototype === Boolean.prototype) ||
        (typeof value === 'number' && this.Type.prototype === Number.prototype) ||
        value instanceof this.Type
    ) {
      if (!this.val) {
        this.val = [];
      }
      this.val.push(val);
    } else {
      try {
        if (!this.val) {
          this.val = [];
        }
        let newObject = new this.Type(val);
        this.val.push(newObject);
      } catch (e) {
        throw new TypeException(
            val +
            ' is the wrong type, was expecting ' +
            this.Type +
            ', reporting: ' +
            e
        );
      }
    }
  };

  /**
   * Get the value of the attribute
   * @returns {FnGetAtt|module:Core.FnGetAtt|FnFindInMap|*|Ref|FnJoin}
   */
  get() {
    return this.val;
  };

  /**
   * Add an Fn Ref intrinsic function to link another resource to the attribute
   * @param resource
   */
  ref(resource: any) {
    this.val = new Intrinsic.Ref(resource);
  };

  /**
   * Add an Fn Sub intrinsic function
   * @param resource
   */
  sub(input: any) {
    this.val = new Intrinsic.FnSub(input);
  };

  /**
   * Add an Fn GetAtt intrinsic function to link the attribute of another resource to the attribute
   * @param resource
   * @param attribute
   */
  getAtt(resource: any, attribute: any) {
    this.val = new Intrinsic.FnGetAtt(resource, attribute);
  };

  /**
   * Add a Fn FindInMap intrinsic function to set the value of the attribute
   * @param map
   * @param top
   * @param second
   */
  findInMap(map: any, top: any, second: any) {
    this.val = new Intrinsic.FnFindInMap(map, top, second);
  };

  /**
   * Add an Fn Join intrinsic function to set the value of the attribute
   * @param delimiter
   * @param values
   */
  join(delimiter: any, values: any) {
    this.val = new Intrinsic.FnJoin(delimiter, values);
  };

  /**
   * Add an Fn Base64 intrinsic function to set the value of the attribute
   * @param content
   */
  base64(content: any) {
    this.val = new Intrinsic.FnBase64(content);
  };

  /**
   * Get a JSON representation of the attribute
   * @returns {*}
   */
  toJson() {
    let errors: string[] = [];
    if (this.isArray) {
      if (this.val !== null) {
        if (this.val instanceof Intrinsic.Intrinsic) {
          let result: any = this.val.toJson();
          if (result.errors) {
            result.errors.forEach((e: any) => {
              errors.push(e);
            });
          }
          return {errors: errors, json: result.json};
        } else if (this.Type.prototype instanceof ResourceProperty) {
          let propArray: Object[] = [];
          for (let prop in this.val) {
            let result = this.val[prop].toJson();
            if (result.errors) {
              result.errors.forEach((e: any) => {
                errors.push(e);
              });
            }
            if (result.json != null) {
              propArray.push(result.json);
            }
          }
          if (propArray.length > 0) {
            return {errors: errors, json: propArray};
          } else {
            return {errors: errors, json: null};
          }
        } else {
          let propArray: Object[] = [];
          for (let prop in this.val) {
            if (this.val[prop] instanceof Intrinsic.Intrinsic) {
              let result = this.val[prop].toJson();
              if (result.errors) {
                result.errors.forEach((e: any) => {
                  errors.push(e);
                });
              }
              if (result.json != null) {
                propArray.push(result.json);
              }
            } else {
              propArray.push(this.val[prop]);
            }
          }
          if (propArray.length > 0) {
            return {errors: errors, json: propArray};
          } else {
            return {errors: errors, json: null};
          }
        }
      } else {
        if (this.required === 'Yes') {
          errors.push(this.WKName + ' is required.');
          return {errors: errors, json: null};
        } else {
          return {errors: null, json: null};
        }
      }
    } else {
      if (this.val !== null) {
        if (
            this.val instanceof Intrinsic.Intrinsic ||
            this.val instanceof ResourceProperty
        ) {
          let result: any = this.val.toJson();
          if (result.errors) {
            result.errors.forEach((e: any) => {
              errors.push(e);
            });
          }
          return {errors: errors, json: result.json};
        }
        let jsonValue = this.val;
        return {errors: errors, json: jsonValue};
      } else {
        if (this.required === 'Yes') {
          errors.push(this.WKName + ' is required.');
          return {errors: errors, json: null};
        } else {
          return {errors: null, json: null};
        }
      }
    }
  };
}
