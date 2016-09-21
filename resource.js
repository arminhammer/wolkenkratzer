/**
 * Created by arming on 6/15/16.
 */
'use strict'
const RequiredPropertyException = require('./exceptions').RequiredPropertyException
const ConditionNotMetException = require('./exceptions').ConditionNotMetException
const TypeException = require('./exceptions').TypeException
const Policy = require('./policy').Policy

/** @module Core */

/**
 * A CloudFormation Resource, mapping to those defined at http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html.
 * @memberof module:Core
 * @property {String} WKName
 */
function WKResource (name, resourceType, properties, propertiesObject, conditional) {
  this.WKName = name
  this.WKResourceType = resourceType
  this.properties = properties
  this.conditional = conditional
  for (let prop in this.properties) {
    Object.defineProperty(this, prop, {
      set: (value) => {
        this.properties[prop].set(value)
      },
      get: () => {
        return this.properties[prop]
      }
    })
  }
  if (propertiesObject) {
    for (let prop in propertiesObject) {
      if (this.properties[prop]) {
        let property = propertiesObject[prop]
        if (this.properties[prop].Type) {
          try {
            this.properties[prop].set(property)
          } catch (e) {
          }
        }
      }
    }
  }
}

/**
 * Adds a DependsOn dependency for another Resource
 * @param resource
 */
WKResource.prototype.dependsOn = function (resource) {
  this.dependsOn = resource
}

/**
 * Get the logical name of the resource
 * @returns {String}
 */
WKResource.prototype.getName = function () {
  return this.WKName
}

/**
 * Adds a Config block to the Metadata AWS::CloudFormation::Init block of an Instance
 * @param config
 */
WKResource.prototype.addConfig = function (config) {
  if ((this instanceof require('./resources/ec2').Instance) || (this instanceof require('./resources/autoscaling').LaunchConfiguration)) {
    if (!this.Metadata) {
      this.Metadata = {
      }
    }
    if (!this.Metadata['AWS::CloudFormation::Init']) {
      this.Metadata['AWS::CloudFormation::Init'] = {
        configSets: {}
      }
    }
    this.Metadata['AWS::CloudFormation::Init'][config.WKName] = config
  } else {
    throw new TypeException('Not allowed to add ' + config.WKName + ' to ' + this.WKName + ' because it is not an Instance or LaunchConfiguration')
  }
}

/**
 * Adds a ConfigSet block to the Metadata AWS::CloudFormation::Init block of an Instance
 * @param configSet
 */
WKResource.prototype.addConfigSet = function (configSet) {
  if ((this instanceof require('./resources/ec2').Instance) || (this instanceof require('./resources/autoscaling').LaunchConfiguration)) {
    if (!this.Metadata) {
      this.Metadata = {
      }
    }
    if (!this.Metadata['AWS::CloudFormation::Init']) {
      this.Metadata['AWS::CloudFormation::Init'] = {
        configSets: {}
      }
    }
    this.Metadata['AWS::CloudFormation::Init'].configSets[configSet.WKName] = configSet.configs
  } else {
    throw new TypeException('Not allowed to add ' + configSet.WKName + ' to ' + this.WKName + ' because it is not an Instance or LaunchConfiguration')
  }
}

/**
 * Adds a CreationPolicy, UpdatePolicy, or DeletePolic
 * @param policy
 */
WKResource.prototype.addPolicy = function (policy) {
  if (!this.policies) {
    this.policies = {}
  }
  if (policy instanceof Policy) {
    this.policies[policy.WKName] = policy
  } else {
    throw new TypeException(policy + ' must be of type Policy')
  }
}
/**
 * Performs validation and returns a pretty-printed JSON object.
 * @returns {String}
 */
WKResource.prototype.toJson = function () {
  let newProperties = JSON.parse(JSON.stringify(this.properties))
  let errors = []
  for (let prop in newProperties) {
    let result = this.properties[prop].toJson()
    if (result.errors) {
      result.errors.forEach((e) => {
        errors.push(e)
      })
      errors.push(this.WKName + '.' + prop + ' or a subproperty is required but not defined.')
    }
    if (result.json) {
      newProperties[prop] = result.json
    } else {
      delete newProperties[prop]
    }
  }
  if (this.conditional) {
    let result = this.conditional(this.properties)
    if (result.errors) {
      result.errors.forEach((e) => {
        errors.push(e)
      })
      errors.push(this.WKName + ' has a condition that was not met.')
    }
  }
  let newMetadata = {}
  if (this.Metadata) {
    if (this.Metadata['AWS::CloudFormation::Init']) {
      newMetadata['AWS::CloudFormation::Init'] = {}
      for (let config in this.Metadata['AWS::CloudFormation::Init']) {
        if (config === 'configSets') {
          newMetadata['AWS::CloudFormation::Init'][config] = this.Metadata['AWS::CloudFormation::Init'][config]
        } else {
          newMetadata['AWS::CloudFormation::Init'][config] = this.Metadata['AWS::CloudFormation::Init'][config].toJson()
        }
      }
    }
  }
  let returnObject = {
    Type: this.WKResourceType,
    Properties: newProperties
  }
  if (this.Metadata) {
    returnObject.Metadata = newMetadata
  }
  if (this.policies) {
    for (let policy in this.policies) {
      returnObject[policy] = this.policies[policy].toJson()
    }
  }
  if (this.dependsOn) {
    returnObject.DependsOn = this.dependsOn.WKName
  }
  if (errors.length === 0) {
    errors = null
  }
  return { errors: errors, json: returnObject }
}

/**
 * A CloudFormation ResourceProperty, mapped to those listed at http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-property-reference.html
 * @memberof module:Core
 */
function ResourceProperty (name, properties, propertiesObject, conditional) {
  this.WKName = name
  this.properties = properties
  this.conditional = conditional
  for (let prop in this.properties) {
    Object.defineProperty(this, prop, {
      set: (value) => {
        this.properties[prop].set(value)
      },
      get: () => {
        return this.properties[prop]
      }
    })
  }
  if (propertiesObject) {
    for (let prop in propertiesObject) {
      this.properties[prop] = propertiesObject[prop]
    }
  }
}

/**
 * Performs validation and returns a pretty-printed JSON object.
 * @returns {String}
 */
ResourceProperty.prototype.toJson = function () {
  let newProperties = JSON.parse(JSON.stringify(this.properties))
  let errors = []
  for (let prop in newProperties) {
    // TODO: only call toJson if this is an object
    let result = this.properties[prop].toJson()
    if (result.errors) {
      result.errors.forEach((e) => {
        errors.push(e)
      })
      errors.push(this.WKName + '.' + prop + ' is required but not defined.')
    }
    if (result.json) {
      newProperties[prop] = result.json
    } else {
      delete newProperties[prop]
    }
  }
  if (this.conditional) {
    let result = this.conditional(this.properties)
    if (result.errors) {
      result.errors.forEach((e) => {
        errors.push(e)
      })
      errors.push(this.WKName + ' has a condition that was not met.')
    }
  }
  if (errors === 0) { errors = null }
  return { errors: errors, json: newProperties }
}

module.exports = {
  WKResource: WKResource,
  ResourceProperty: ResourceProperty
}