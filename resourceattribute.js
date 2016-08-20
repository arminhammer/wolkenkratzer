/**
 * Created by arming on 6/15/16.
 */
'use strict'

const Ref = require('./intrinsic').Ref
const Intrinsic = require('./intrinsic').Intrinsic
const FnGetAtt = require('./intrinsic').FnGetAtt
const FnFindInMap = require('./intrinsic').FnFindInMap
const FnBase64 = require('./intrinsic').FnBase64
const FnJoin = require('./intrinsic').FnJoin
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const TypeException = require('./exceptions').TypeException
const ResourceProperty = require('./resource').ResourceProperty

/** @module Core */

/**
 * @memberof module:Core
 */
function ResourceAttribute (name, type, required, value) {
  this.WKName = name
  this.Type = type
  this.required = required
  this.val = value
}

/**
 * Set the value of the attribute
 * @param value
 */
ResourceAttribute.prototype.set = function (value) {
  let valueType = value
  if (typeof value === 'string') {
    valueType = new String(value)
  } else if (typeof value === 'boolean') {
    valueType = new Boolean(value)
  } else if (typeof value === 'number') {
    valueType = new Number(value)
  }
  if (valueType instanceof this.Type || valueType instanceof Intrinsic) {
    this.val = value
  } else {
    throw new TypeException(value + ' is the wrong type for ' + this.WKName + ', was expecting ' + this.Type)
  }
}

/**
 * Get the value of the attribute
 * @returns {FnGetAtt|module:Core.FnGetAtt|FnFindInMap|*|Ref|FnJoin}
 */
ResourceAttribute.prototype.get = function () { return this.val }

/**
 * Add an Fn Ref intrinsic function to link another resource to the attribute
 * @param resource
 */
ResourceAttribute.prototype.ref = function (resource) {
  this.val = new Ref(resource)
}

/**
 * Add an Fn GetAtt intrinsic function to link the attribute of another resource to the attribute
 * @param resource
 * @param attribute
 */
ResourceAttribute.prototype.getAtt = function (resource, attribute) {
  this.val = new FnGetAtt(resource, attribute)
}

/**
 * Add a Fn FindInMap intrinsic function to set the value of the attribute
 * @param map
 * @param top
 * @param second
 */
ResourceAttribute.prototype.findInMap = function (map, top, second) {
  this.val = new FnFindInMap(map, top, second)
}

/**
 * Add an Fn Join intrinsic function to set the value of the attribute
 * @param delimiter
 * @param values
 */
ResourceAttribute.prototype.join = function (delimiter, values) {
  this.val = new FnJoin(delimiter, values)
}

/**
 * Add an Fn Base64 intrinsic function to set the value of the attribute
 * @param content
 */
ResourceAttribute.prototype.base64 = function (content) {
  this.val = new FnBase64(content)
}

/**
 * Get a JSON representation of the attribute
 * @returns {*}
 */
ResourceAttribute.prototype.toJson = function () {
  if (this.val !== null) {
    if (this.val instanceof Intrinsic) {
      return this.val.toJson()
    } else if (this.val instanceof ResourceProperty) {
      return this.val.toJson()
    }
    return this.val
  } else {
    if (this.required === 'Yes') { throw new RequiredPropertyException('this value is required') }
  }
}

/**
 * @memberof module:Core
 */
function ResourceAttributeArray (name, type, required, value) {
  ResourceAttribute.call(this, name, type, required, value)
}
ResourceAttributeArray.prototype = ResourceAttribute

/**
 * Set the value of the attribute
 * @param value
 */
ResourceAttributeArray.prototype.set = function (value) {
  if (!Array.isArray(value)) {
    throw new TypeException(value + ' is the wrong type, was expecting an array of ' + this.Type)
  }
  for (let val in value) {
    let valueType = val
    if (typeof val === 'string') {
      valueType = new String(val)
    } else if (typeof val === 'boolean') {
      valueType = new Boolean(val)
    } else if (typeof val === 'number') {
      valueType = new Number(val)
    }
    if (!(valueType instanceof this.Type)) {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
    }
    this.val = value
  }
}
/**
 * Add an Fn Join intrinsic function to set the value of the attribute
 * @param delimiter
 * @param values
 */
ResourceAttributeArray.prototype.join = function (delimiter, values) {
  if (!this.val) {
    this.val = []
  }
  this.val.push(new FnJoin(delimiter, values))
}

/**
 * Add a value to the attribute array
 * @param val
 */
ResourceAttributeArray.prototype.push = function (val) {
  let valueType = val
  if (typeof val === 'string') {
    valueType = new String(val)
  } else if (typeof val === 'boolean') {
    valueType = new Boolean(val)
  } else if (typeof val === 'number') {
    valueType = new Number(val)
  }
  if (valueType instanceof this.Type || valueType instanceof Intrinsic) {
    if (!this.val) {
      this.val = []
    }
    this.val.push(val)
  } else {
    throw new TypeException(val + ' is the wrong type, was expecting ' + this.Type)
  }
}
/**
 * Get a JSON representation of the attribute
 * @returns {*}
 */
ResourceAttributeArray.prototype.toJson = function () {
  if (this.val !== null) {
    if (this.Type.prototype instanceof ResourceProperty) {
      let propArray = []
      for (let prop in this.val) {
        propArray.push(this.val[prop].toJson())
      }
      return propArray
    } else {
      let propArray = []
      for (let prop in this.val) {
        if (this.val[prop] instanceof Intrinsic) {
          propArray.push(this.val[ prop ].toJson())
        } else {
          propArray.push(this.val[prop])
        }
      }
      return propArray
    }
  } else {
    if (this.required === 'Yes') { throw new RequiredPropertyException(this.WKName + ' is required.') }
  }
}

module.exports = {
  ResourceAttribute: ResourceAttribute,
  ResourceAttributeArray: ResourceAttributeArray
}
