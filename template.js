/**
 * Created by arming on 6/15/16.
 */
'use strict'
const ValueException = require('./exceptions').ValueException
const TypeException = require('./exceptions').TypeException
const Mapping = require('./mapping').Mapping
const Output = require('./output')

/** @module Core */

/**
 * @memberof module:Core
 */
class Template {
  /**
   * @constructs Template
   */
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

  /**
   * Add a description to the template
   * @param description
   */
  addDescription (description) {
    this.Description = description
  }

  /**
   * Add metadata to the template
   * @param metadata
   */
  addMetadata (metadata) {
    this.Metadata = metadata
  }

  /**
   * Add a condition to the template
   * @param name
   * @param condition
   */
  addCondition (name, condition) {
    this.Conditions[name] = condition
  }
  _handleDuplicateKey (key) {
    console.log('Duplicate key ' + key)
    throw new ValueException('duplicate key "%s" detected' % key)
  }
  _update (d, values) {
    if (Array.isArray(values)) {
      values.forEach((v) => {
        if (v.WKName in d) {
          this._handleDuplicateKey(v.WKName)
        }
        d[v.WKName] = v
      })
    } else {
      if (values.WKName in d) {
        this._handleDuplicateKey(values.WKName)
      }
      d[values.WKName] = values
    }
    return values
  }

  /**
   * Add an Output block to the template
   * @param output
   * @returns {*}
   */
  addOutput (output) {
    if (!(output instanceof Output.Output)) {
      throw new TypeException(output + ' is not of type Output')
    }
    return this._update(this.Outputs, output)
  }

  /**
   * Add a Mapping block to the template
   * @param map
   * @param mapping
   */
  addMapping (map, mapping) {
    // If the first parameter is a Mapping, add it
    if (map instanceof Mapping) {
      this.Mappings[map.WKName] = map
    } else {
      // Support pure JSON with two parameters
      this.Mappings[map] = mapping
    }
  }

  /**
   * Add a Parameter to the template
   * @param parameter
   * @returns {*}
   */
  addParameter (parameter) {
    return this._update(this.Parameters, parameter)
  }

  /**
   * Add a resource to the template
   * @param resource
   */
  addResource (resource) {
    this._update(this.Resources, resource)
  }

  /**
   * Add a version string to the template
   * @param version
   */
  addVersion (version) {
    this.Version = version
  }

  /**
   * Returns a CloudFormation JSON template string
   * @returns {JSON}
   */
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
    for (let map in this.Mappings) {
      if (this.Mappings[map] instanceof Mapping) {
        j.Mappings[map] = this.Mappings[map].toJson()
      } else {
        j.Mappings[map] = this.Mappings[map]
      }
    }
    if (Object.keys(j.Metadata).length === 0) {
      delete j.Metadata
    }
    if (Object.keys(j.Conditions).length === 0) {
      delete j.Conditions
    }
    if (Object.keys(j.Mappings).length === 0) {
      delete j.Mappings
    }
    if (Object.keys(j.Outputs).length === 0) {
      delete j.Outputs
    }
    if (Object.keys(j.Parameters).length === 0) {
      delete j.Parameters
    }
    if (j.Description === '') {
      delete j.Description
    }
    return JSON.stringify(j, null, 2)
  }
}

module.exports = {
  Template: Template
}
