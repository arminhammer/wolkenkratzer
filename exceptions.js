/**
 * Created by arming on 6/15/16.
 */
'use strict'

class ValueException {
  constructor(message) {
    this.message = message
    this.name = 'ValueError'
  }
  toJson () {
    return message
  }
}

class RequiredPropertyException {
  constructor(message) {
    this.message = message
    this.name = 'RequiredPropertyException'
  }
  toJson () {
    return message
  }
}

class TypeException {
  constructor(message) {
    this.message = message
    this.name = 'TypeException'
  }
  toJson () {
    return message
  }
}

module.exports = {
  TypeException: TypeException,
  RequiredPropertyException: RequiredPropertyException,
  ValueException: ValueException
}