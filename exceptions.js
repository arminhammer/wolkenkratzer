/**
 * Created by arming on 6/15/16.
 */
'use strict'

/** @module Core */

/**
 * @memberof module:Core
 */
class Exception {
  constructor (message) {
    this.message = message
  }
  /**
   * Returns a JSON string
   */
  toJson () {
    return this.message
  }
}

/**
 * @memberof module:Core
 */
class ValueException extends Exception {
  constructor (message) {
    super(message)
    this.name = 'ValueError'
  }
}

/**
 * @memberof module:Core
 */
class RequiredPropertyException extends Exception {
  constructor(message) {
    super(message)
    this.name = 'RequiredPropertyException'
  }
}

/**
 * @memberof module:Core
 */
class TypeException extends Exception {
  constructor (message) {
    super(message)
    this.name = 'TypeException'
  }
}

/**
 * @memberof module:Core
 */
class ConditionNotMetException extends Exception {
  constructor (message) {
    super(message)
    this.name = 'ConditionNotMetException'
  }
}

module.exports = {
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException,
  ConditionNotMetException: ConditionNotMetException
}
