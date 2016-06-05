/**
 * Created by arming on 6/2/16.
 */
'use strict'
const debug = require('debug')('index')

// constants for DeletionPolicy
const Delete = 'Delete'
const Retain = 'Retain'
const Snapshot = 'Snapshot'

// Pseudo Parameters
const AWS_ACCOUNT_ID = 'AWS::AccountId'
const AWS_NOTIFICATION_ARNS = 'AWS::NotificationARNs'
const AWS_NO_VALUE = 'AWS::NoValue'
const AWS_REGION = 'AWS::Region'
const AWS_STACK_ID = 'AWS::StackId'
const AWS_STACK_NAME = 'AWS::StackName'

class BaseAWSObject {
  constructor(title) {
    this.title = title
    this.resource_type = "base"
    this.properties = {}
  }
  to_json() {
    debug('Generating Resource json')
    let properties = this.properties
    Object.keys(this.properties).forEach((prop) => {
      try {
        properties[prop] = properties[prop].to_json()
      } catch(e) {
        if(e instanceof RequiredPropertyException) {
          throw new RequiredPropertyException(this.title + '.' + prop + ' is required but not defined.')
        }
      }
    })
    return {
      Type: this.resource_type,
      Properties: properties
    }
  }
}

class Template {
  constructor() {
    this.Description = null
    this.Metadata = {}
    this.Conditions = {}
    this.Mappings = {}
    this.Outputs = {}
    this.Parameters = {}
    this.Resources = {}
    this.Version = "2010-09-09"
  }
  add_description(description) {
    this.Description = description
  }
  add_metadata(metadata) {
    this.Metadata = metadata
  }
  add_condition(name, condition) {
    this.Conditions[name] = condition
  }
  handle_duplicate_key(key) {
    console.log('Duplicate key ' + key)
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
      d[values.title] = values
    }
    return values
  }
  add_output(output) {
    return this._update(this.Outputs, output)
  }
  add_mapping(name, mapping) {
    this.Mappings[name] = mapping
  }
  add_parameter(parameter) {
    return this._update(this.Parameters, parameter)
  }
  add_resource(resource) {
    debug('adding resource ' + JSON.stringify(resource))
    this._update(this.Resources, resource)
  }
  add_version(version) {
      this.Version = version
  }
  to_json() {
    const j = this
    Object.keys(j.Resources).forEach((resource) => { j.Resources[resource] = j.Resources[resource].to_json() })
    return JSON.stringify(j, null, 2)
  }
}

function ValueError(message) {
  this.toString = () => {
    return message
  }
}

function RequiredPropertyException(message) {
  this.toString = function() {
    return message
  }
}

function TypeException(message) {
  this.toString = function() {
    return message
  }
}

class ResourceProperty {
  constructor(type, required, value) {
    this.type = type
    this.required = required
    this.val = value
  }
  set(value) {
    console.log('TYPE')
    console.log(this.type)
    if(typeof value === 'string') { value = new String(value) }
    if(value instanceof this.type) {
      this.val = value
    } else {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.type)
    }
  }
  get() { return this.val }
  to_json() {
    if(this.val) {
      return this.val
    } else {
      if(this.required) { throw new RequiredPropertyException() }
    }
  }
}

module.exports = {
  Template: Template,
  BaseAWSObject: BaseAWSObject,
  ResourceProperty: ResourceProperty
}