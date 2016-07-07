/**
 * Created by arming on 7/4/16.
 */
'use strict'

const TypeException = require('./exceptions').TypeException

class Policy {
  constructor (name) {
    this.WKName = name
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

class CreationPolicy extends Policy {
  constructor(parameters) {
    super('CreationPolicy')
    if(parameters) {
      this.AutoScalingCreationPolicy = parameters.AutoScalingCreationPolicy
      this.ResourceSignal = parameters.ResourceSignal
    }
  }
}

class DeletionPolicy extends Policy {
  constructor(Type) {
    super('DeletionPolicy')
    if(Type === 'Delete' || Type === 'Retain' || Type === 'Snapshot') {
      this.Type = Type
    } else {
      throw new TypeException(Type + ' in DeletionPolicy must be Delete, Retain, or Snapshot')
    }
  }
}

class UpdatePolicy extends Policy {
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
