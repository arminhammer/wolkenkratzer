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
  constructor(name, resource_type, properties, propertiesObject) {
    this.Name = name
    this.resource_type = resource_type
    this.properties = properties
    Object.keys(this.properties).forEach((prop) => {
      Object.defineProperty(this, prop, {
        set: function(value) {
          this.properties[prop].set(value)
        },
        get: function() {
          return this.properties[prop]
        }
      })
    })
    if (propertiesObject) {
      Object.keys(propertiesObject).forEach((prop) => {
        this.properties[prop] = propertiesObject[prop]
      })
    }
  }
  to_json() {
    debug('Generating Resource json')
    let newProperties = JSON.parse(JSON.stringify(this.properties))
    Object.keys(newProperties).forEach((prop) => {
      try {
        newProperties[prop] = this.properties[prop].to_json()
      } catch(e) {
        if(e instanceof RequiredPropertyException) {
          throw new RequiredPropertyException(this.Name + '.' + prop + ' is required but not defined.')
        }
      }
    })
    return {
      Type: this.resource_type,
      Properties: newProperties
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
    this.Version = '2010-09-09'
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
        if (v.Name in d) {
          this.handle_duplicate_key(v.Name)
        }
        d[v.Name] = v
      })
    } else {
      if (values.Name in d) {
        this.handle_duplicate_key(values.Name)
      }
      d[values.Name] = values
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
    debug('adding resource ' + JSON.stringify(resource, null, 2))
    this._update(this.Resources, resource)
  }
  add_version(version) {
      this.Version = version
  }
  to_json() {
    let j = JSON.parse(JSON.stringify(this))
    Object.keys(this.Resources).forEach((resource) => {
      //console.log('resource:')
      //console.log(resource)
      j.Resources[resource] = this.Resources[resource].to_json()
      //j.Resources[resource] = j.Resources[resource].to_json()
    })
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
  constructor(Type, required, value) {
    this.Type = Type
    this.required = required
    this.val = value
  }
  set(value) {
    let valueType = value
    if(typeof value === 'string') { valueType = new String(value) }
    if(valueType instanceof this.Type) {
      this.val = value
    } else {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
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