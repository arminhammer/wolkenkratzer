/**
 * Created by arming on 7/4/16.
 */
'use strict'

const TypeException = require('./exceptions').TypeException

/** @module Core */

/**
 * @memberof module:Core
 */
class Policy {
  /**
   * @constructs Policy
   * @param name
   */
  constructor (name) {
    this.WKName = name
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

/**
 * @memberof module:Core
 */
class CreationPolicy extends Policy {
  /**
   * @constructs CreationPolicy
   * @param name
   */
  constructor(parameters) {
    super('CreationPolicy')
    if(parameters) {
      this.AutoScalingCreationPolicy = parameters.AutoScalingCreationPolicy
      this.ResourceSignal = parameters.ResourceSignal
    }
  }
}

/**
 * @memberof module:Core
 */
class DeletionPolicy extends Policy {
  /**
   * @constructs DeletionPolicy
   * @param Type
   */
  constructor(Type) {
    super('DeletionPolicy')
    if(Type === 'Delete' || Type === 'Retain' || Type === 'Snapshot') {
      this.Type = Type
    } else {
      throw new TypeException(Type + ' in DeletionPolicy must be Delete, Retain, or Snapshot')
    }
  }
}

/**
 * @memberof module:Core
 */
class UpdatePolicy extends Policy {
  /**
   * @constructs UpdatePolicy
   * @param parameters
   */
  constructor(parameters) {
    super('UpdatePolicy')
  }
}

module.exports = {
  Policy: Policy,
  CreationPolicy: CreationPolicy,
  DeletionPolicy: DeletionPolicy,
  UpdatePolicy: UpdatePolicy
}
