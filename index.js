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
  toJson() {
    debug('Generating Resource json')
    let newProperties = JSON.parse(JSON.stringify(this.properties))
    Object.keys(newProperties).forEach((prop) => {
      try {
        newProperties[prop] = this.properties[prop].toJson()
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

class Parameter {
  constructor(name, parameter) {
    this.Name = name
    this.Type = parameter.Type
    this.AllowedPattern = parameter.AllowedPattern
    this.AllowedValues = parameter.AllowedValues
    this.ConstraintDescription = parameter.ConstraintDescription
    this.Default = parameter.Default
    this.Description = parameter.Description
    this.MaxLength = parameter.MaxLength
    this.MaxValue = parameter.MaxValue
    this.MinLength = parameter.MinLength
    this.MinValue = parameter.MinValue
    this.NoEcho = parameter.NoEcho
  }
  toJson() {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p
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
  addDescription(description) {
    this.Description = description
  }
  addMetadata(metadata) {
    this.Metadata = metadata
  }
  addCondition(name, condition) {
    this.Conditions[name] = condition
  }
  handleDuplicateKey(key) {
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
  addOutput(output) {
    return this._update(this.Outputs, output)
  }
  addMapping(name, mapping) {
    this.Mappings[name] = mapping
  }
  addParameter(parameter) {
    return this._update(this.Parameters, parameter)
  }
  addResource(resource) {
    debug('adding resource ' + JSON.stringify(resource, null, 2))
    this._update(this.Resources, resource)
  }
  addVersion(version) {
    this.Version = version
  }
  toJson() {
    let j = JSON.parse(JSON.stringify(this))
    Object.keys(this.Parameters).forEach((param) => {
      j.Parameters[param] = this.Parameters[param].toJson()
    })
    Object.keys(this.Resources).forEach((resource) => {
      j.Resources[resource] = this.Resources[resource].toJson()
    })
    return JSON.stringify(j, null, 2)
  }
}

function ValueError(message) {
  this.toJson = () => {
    return message
  }
}

function RequiredPropertyException(message) {
  this.toJson = function() {
    return message
  }
}

function TypeException(message) {
  this.toJson = function() {
    return message
  }
}

class Intrinsic {
  constructor() {}
  toJson() {}
}

class Ref extends Intrinsic {
  constructor(resource) {
    super()
    this.ref = resource
  }
  toJson() {
    return { "Ref": this.ref.Name }
  }
}

class FnGetAtt extends Intrinsic {
  constructor(resource, attribute) {
    super()
    this.resource = resource
    this.attribute = attribute
  }
  toJson() {}
}

class FnBase64 extends Intrinsic {
  constructor(string) {
    super()
    this.base64 = new Buffer(string).toJson('base64')
  }
  toJson() {}
}

class FnFindInMap extends Intrinsic {
  constructor(mapName, topLevelKey, secondLevelKey) {
    super()
    this.mapName = mapName
    this.topLevelKey = topLevelKey
    this.secondLevelKey = secondLevelKey
  }
  toJson() {}
}

class FnGetAZs extends Intrinsic {
  constructor(region) {
    super()
    this.region = region
  }
  toJson() {}
}

class FnJoin extends Intrinsic {
  constructor(delimiter, values) {
    super()
    this.delimiter = delimiter
    this.values = values
  }
  toJson() {}
}

class FnSelect extends Intrinsic {
  constructor(index, list) {
    super()
    this.index = index
    this.list = list
  }
  toJson() {}
}

class Conditional extends Intrinsic {
  constructor() {
    super()
  }
  toJson() {}
}

class FnIf extends Conditional {
  constructor() {
    super()
  }
  toJson() {}
}

class FnEquals extends Conditional {
  constructor() {
    super()
  }
  toJson() {}
}

class FnNot extends Conditional {
  constructor() {
    super()
  }
  toJson() {}
}

class FnOr extends Conditional {
  constructor() {
    super()
  }
  toJson() {}
}

class Tag {
  constructor(key, value) {
    this.Key = key
    this.Value = value
  }
  toJson() {
    let value = this.Value
    if(value instanceof Intrinsic) {
      value = value.toJson()
    }
    return { Key: this.Key, Value: value }
  }
}

class TagSet {
  constructor() {
    this.tags = {}
  }
  add(tag) {
    if(!(tag instanceof Tag)) {
      console.log('new ' + tag + ' is not a Tag')
      if(tag.Key && tag.Value) {
        tag = new Tag(tag.Key, tag.Value)
      } else {
        throw new TypeException(tag, 'is not a valid tag')
      }
    } else {
      console.log('new ' + tag + ' is a Tag')
    }
    this.tags[tag.Key] = tag
  }
  remove(tag) {
    delete this.tags(tag)
  }
  toJson() {
    console.log('tagbuild')
    console.log(Object.keys(this.tags).length > 0)
    if(Object.keys(this.tags).length > 0) {
      console.log('more build')
      let tagArray = []
      console.log(this.tags)
      for (let tag in this.tags) {
        console.log('tag')
        console.log(tag)
        console.log(this.tags[tag])
        let tagJson = this.tags[tag].toJson()
        console.log('tagJson')
        console.log(tagJson)
        tagArray.push(tagJson)
      }
      console.log('tagArray')
      console.log(tagArray)
      return tagArray
    }
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
    else if(typeof value === 'boolean') { valueType = new Boolean(value) }
    if(valueType instanceof this.Type) {
      this.val = value
    } else {
      throw new TypeException(value + ' is the wrong type, was expecting ' + this.Type)
    }
  }
  get() { return this.val }
  ref(resource) {
    this.val = new Ref(resource)
  }
  getAtt(resource, attribute) {
    this.val = new FnGetAtt(resource, attribute)
  }
  toJson() {
    if(this.val) {
      if(this.val instanceof Intrinsic) {
        return this.val.toJson()
      }
      return this.val
    } else {
      if(this.required) { throw new RequiredPropertyException() }
    }
  }
}

module.exports = {
  Template: Template,
  BaseAWSObject: BaseAWSObject,
  Parameter: Parameter,
  ResourceProperty: ResourceProperty,
  TagSet: TagSet,
  Tag: Tag,
  Ref: Ref
}