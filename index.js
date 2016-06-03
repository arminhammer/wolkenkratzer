/**
 * Created by arming on 6/2/16.
 */
'use strict'

class Template {
  construtor() {
    this.description = null
    this.metadata = {}
    this.conditions = {}
    this.mappings = {}
    this.outputs = {}
    this.parameters = {}
    this.resources = {}
    this.version = "2010-09-09"
  }
  add_description(description) {
    this.description = description
  }
  add_metadata(metadata) {
    this.metadata = metadata
  }
  add_condition(name, condition) {
    this.conditions[ name ] = condition
  }
  handle_duplicate_key(key) {
    throw new ValueError('duplicate key "%s" detected' % key)
  }
  _update(d, values) {
    if (Array.isArray(values)) {
      values.forEach((v) => {
        if (v.title in d) {
          this.handle_duplicate_key(v.title)
        }
        d[v.title] = v
      })
    } else {
      if (values.title in d) {
        this.handle_duplicate_key(values.title)
      }
      d[ values.title ] = values
    }
    return values
  }
  add_output(output) {
    return this._update(this.outputs, output)
  }
  add_mapping(name, mapping) {
    this.mappings[ name ] = mapping
  }
  add_parameter(parameter) {
    return this._update(this.parameters, parameter)
  }
  add_resource(resource) {
    return this._update(this.resources, resource)
  }
  add_version(version) {
      this.version = version
  }
}

function ValueError(message) {
  this.toString(message)
}

module.exports = {
  Template: Template
}