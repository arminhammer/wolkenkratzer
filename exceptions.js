/**
 * Created by arming on 6/15/16.
 */
'use strict'

/** @module Core */

/**
 * @memberof module:Core
 */
function Exception (message) {
  this.message = message
}
/**
 * Returns a JSON string
 */
Exception.prototype.toJson = function () {
  return this.message
}

/**
 * @memberof module:Core
 */
function ValueException (message) {
  Exception.call(message)
  this.name = 'ValueError'
}
ValueException.prototype = Exception

/**
 * @memberof module:Core
 */
function RequiredPropertyException (message) {
  Exception.call(message)
  this.name = 'RequiredPropertyException'
}
RequiredPropertyException.prototype = Exception

/**
 * @memberof module:Core
 */
function TypeException (message) {
  Exception.call(message)
  this.name = 'TypeException'
}
TypeException.prototype = Exception

/**
 * @memberof module:Core
 */
function ConditionNotMetException (message) {
  Exception.call(message)
  this.name = 'ConditionNotMetException'
}
ConditionNotMetException.prototype = Exception

module.exports = {
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException,
  ConditionNotMetException: ConditionNotMetException
}
