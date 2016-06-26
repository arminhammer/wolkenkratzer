/**
 * Created by arming on 6/15/16.
 */
'use strict'

const Ref = require('./intrinsic').Ref
const Intrinsic = require('./intrinsic').Intrinsic
const FnGetAtt = require('./intrinsic').FnGetAtt
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const TypeException = require('./exceptions').TypeException
const SubPropertyObject = require('./baseawsobject').SubPropertyObject

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
    } else if(typeof value == 'number') {
      valueType = new Number(value)
    }
    if (valueType instanceof this.Type) {
      this.val = value
    } else {
      //console.log('typeof is')
      //console.log(typeof valueType)
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
      } else if(this.val instanceof SubPropertyObject) {
        return this.val.toJson()
      }
      return this.val
    } else {
      if (this.required === 'Yes') { throw new RequiredPropertyException('this value is required') }
    }
  }
}

class ResourceArray extends ResourceProperty {
  constructor(Type, required, value) {
    super(Type, required, value)
  }
  set (value) {
    if (!Array.isArray(value)) {
      throw new TypeException(value + ' is the wrong type, was expecting an array of ' + this.Type)
    }
    for (let val in value) {
      let valueType = val
      if (typeof val === 'string') {
        valueType = new String(val)
      } else if (typeof val === 'boolean') {
        valueType = new Boolean(val)
      } else if(typeof val == 'number') {
        valueType = new Number(val)
      }
      if (!(valueType instanceof this.Type)) {
        console.log('typeof is')
        console.log(typeof valueType)
        throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
      }
      this.val = value
    }
  }
  push (value) {
    let valueType = value
    if (typeof value === 'string') {
      valueType = new String(value)
    } else if (typeof value === 'boolean') {
      valueType = new Boolean(value)
    }
    if (valueType instanceof this.Type) {
      if(!this.val) {
        this.val = []
      }
      this.val.push(value)
    } else {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
    }
  }
  toJson () {
    if (this.val !== null) {
      //console.log(this.Type instanceof SubPropertyObject)
      //console.log(this.Type.prototype)
      if(this.Type.prototype instanceof SubPropertyObject) {
        let propArray = []
        for (let prop in this.val) {
          propArray.push(this.val[prop].toJson())
        }
        return propArray
      } else {
        return this.val
      }
    } else {
      if (this.required === 'Yes') { throw new RequiredPropertyException('this value is required') }
    }
  }
}

module.exports = {
  ResourceProperty: ResourceProperty,
  ResourceArray: ResourceArray
}
