/**
 * Created by arming on 6/15/16.
 */
'use strict'
const debug = require('debug')('template')
const ValueException = require('./exceptions').ValueException
const TypeException = require('./exceptions').TypeException
const output = require('./output')

class Template {
  constructor () {
    this.Description = ''
    this.Metadata = {}
    this.Conditions = {}
    this.Mappings = {}
    this.Outputs = {}
    this.Parameters = {}
    this.Resources = {}
    this.AWSTemplateFormatVersion = '2010-09-09'
  }
  addDescription (description) {
    this.Description = description
  }
  addMetadata (metadata) {
    this.Metadata = metadata
  }
  addCondition (name, condition) {
    this.Conditions[name] = condition
  }
  handleDuplicateKey (key) {
    console.log('Duplicate key ' + key)
    throw new ValueException('duplicate key "%s" detected' % key)
  }
  _update (d, values) {
    if (Array.isArray(values)) {
      values.forEach((v) => {
        if (v.Name in d) {
          this.handleDuplicateKey(v.Name)
        }
        d[v.Name] = v
      })
    } else {
      if (values.Name in d) {
        this.handleDuplicateKey(values.Name)
      }
      d[values.Name] = values
    }
    return values
  }
  addOutput (newOutput) {
    if(!(newOutput instanceof output.Output)) {
      throw new TypeException(newOutput + ' is not of type Output')
    }
    return this._update(this.Outputs, newOutput)
  }
  addMapping (name, mapping) {
    this.Mappings[name] = mapping
  }
  addParameter (parameter) {
    return this._update(this.Parameters, parameter)
  }
  addResource (resource) {
    debug('adding resource ' + JSON.stringify(resource, null, 2))
    this._update(this.Resources, resource)
  }
  addVersion (version) {
    this.Version = version
  }
  toJson () {
    let j = JSON.parse(JSON.stringify(this))
    for (let param in this.Parameters) {
      j.Parameters[param] = this.Parameters[param].toJson()
    }
    for (let resource in this.Resources) {
      j.Resources[resource] = this.Resources[resource].toJson()
    }
    for (let output in this.Outputs) {
      j.Outputs[output] = this.Outputs[output].toJson()
    }
    if(Object.keys(j.Metadata).length === 0) {
      delete j.Metadata
    }
    if(Object.keys(j.Conditions).length === 0) {
      delete j.Conditions
    }
    if(Object.keys(j.Mappings).length === 0) {
      delete j.Mappings
    }
    if(Object.keys(j.Outputs).length === 0) {
      delete j.Outputs
    }
    if(Object.keys(j.Parameters).length === 0) {
      delete j.Parameters
    }
    if(j.Description === '') {
      delete j.Description
    }
    return JSON.stringify(j, null, 2)
  }
}

module.exports = {
  Template: Template
}
