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
   * @returns {Object}
   */
  toJson () {
    let j = JSON.parse(JSON.stringify(this))
    let errors = []
    for (let param in this.Parameters) {
      try {
        j.Parameters[param] = this.Parameters[param].toJson()
      } catch (e) {
        errors.push(e.message)
      }
    }
    for (let resource in this.Resources) {
      try {
        j.Resources[resource] = this.Resources[resource].toJson()
      } catch (e) {
        errors.push(e.message)
      }
    }
    for (let output in this.Outputs) {
      try {
        j.Outputs[output] = this.Outputs[output].toJson()
      } catch (e) {
        errors.push(e.message)
      }
    }
    for (let map in this.Mappings) {
      if (this.Mappings[map] instanceof Mapping) {
        try {
          j.Mappings[map] = this.Mappings[map].toJson()
        } catch (e) {
          errors.push(e.message)
        }
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
    if (errors.length === 0) {
      errors = null
    }
    return {
      Errors: errors,
      Template: JSON.stringify(j, null, 2)
    }
  }

  /**
   *
   * @param callback
   */
  toJsonAsync(callback) {
    return new Promise((resolve, reject) => {      // [1]
      process.nextTick(() => {
        let result = this.toJson()
        if (result.Errors) {
          if (callback) { callback(result.Errors, result.Template) }
          reject({ Errors: result.Errors, Template: result.Template })
        } else {
          if (callback) {
            callback(null, result.Template)
          }
          resolve(result.Template)
        }
      })
    })
  }
}

module.exports = {
  Template: Template
}
