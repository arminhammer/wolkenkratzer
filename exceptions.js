/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Exception {
  constructor (message) {
    this.message = message
  }
  toJson () {
    return this.message
  }
}

class ValueException extends Exception {
  constructor (message) {
    super(message)
    this.name = 'ValueError'
  }
}

function RequiredPropertyException (message) {
  this.message = message
  this.name = 'RequiredPropertyException'
}

/* class RequiredPropertyException extends Exception {
  constructor(message) {
    super(message)
    this.name = 'RequiredPropertyException'
  }
}*/

class TypeException extends Exception {
  constructor (message) {
    super(message)
    this.name = 'TypeException'
  }
}

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
