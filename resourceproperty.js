/**
 * Created by arming on 6/15/16.
 */
'use strict'

const Ref = require('./intrinsic').Ref
const Intrinsic = require('./intrinsic').Intrinsic
const FnGetAtt = require('./intrinsic').FnGetAtt
const RequiredPropertyException = require('./index').RequiredPropertyException
const TypeException = require('./index').TypeException

class ResourceProperty {
  constructor (Type, required, value) {
    this.Type = Type
    this.required = required
    this.val = value
  }
  set (value) {
    let valueType = value
    if (typeof value === 'string') {
      valueType = new String(value)
    } else if (typeof value === 'boolean') {
      valueType = new Boolean(value)
    }
    if (valueType instanceof this.Type) {
      this.val = value
    } else {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
    }
  }
  get () { return this.val }
  ref (resource) {
    this.val = new Ref(resource)
  }
  getAtt (resource, attribute) {
    this.val = new FnGetAtt(resource, attribute)
  }
  toJson () {
    if (this.val !== null) {
      if (this.val instanceof Intrinsic) {
        return this.val.toJson()
      }
      return this.val
    } else {
      if (this.required) { throw new RequiredPropertyException() }
    }
  }
}

module.exports = {
  ResourceProperty: ResourceProperty
}
