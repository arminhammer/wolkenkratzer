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
        if (typeof property === 'string') {
          property = new String(property)
        } else if (typeof property === 'boolean') {
          property = new Boolean(property)
        } else if (typeof property === 'number') {
          property = new Number(property)
        }
        if (this.properties[prop].Type) {
          if (property instanceof this.properties[prop].Type) {
          } else {
            try {
              property = new this.properties[prop].Type(property)
            } catch (e) {
            }
          }
          try {
            this.properties[prop].set(propertiesObject[prop])
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
  if (this instanceof require('./resources/ec2').Instance) {
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
    throw new TypeException('Not allowed to add ' + config + 'to ' + this.WKName + ' because it is not an Instance or LaunchConfiguration')
  }
}

/**
 * Adds a ConfigSet block to the Metadata AWS::CloudFormation::Init block of an Instance
 * @param configSet
 */
WKResource.prototype.addConfigSet = function (configSet) {
  if (this instanceof require('./resources/ec2').Instance) {
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
    throw new TypeException('Not allowed to add ' + configSet + 'to ' + this.WKName + ' because it is not an Instance or LaunchConfiguration')
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
  for (let prop in newProperties) {
    try {
      newProperties[prop] = this.properties[prop].toJson()
    } catch (e) {
      if (e instanceof RequiredPropertyException) {
        throw new RequiredPropertyException(this.WKName + '.' + prop + ' or a subproperty is required but not defined: ' + e.message)
      }
    }
  }
  if (this.conditional) {
    try {
      this.conditional(this.properties)
    } catch (e) {
      if (e instanceof ConditionNotMetException) {
        throw new ConditionNotMetException(this.WKName + ' has a condition that was not met: ' + e.message)
      }
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
    Properties: newProperties,
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
  return returnObject
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
  for (let prop in newProperties) {
    try {
      newProperties[prop] = this.properties[prop].toJson()
    } catch (e) {
      if (e instanceof RequiredPropertyException) {
        throw new RequiredPropertyException(this.WKName + '.' + prop + ' is required but not defined: ' + e.message)
      }
    }
  }
  if(this.conditional) {
    try {
      this.conditional(this.properties)
    } catch (e) {
      if (e instanceof ConditionNotMetException) {
        throw new ConditionNotMetException(this.WKName + ' has a condition that was not met: ' + e.message)
      }
    }
  }
  return newProperties
}

module.exports = {
  WKResource: WKResource,
  ResourceProperty: ResourceProperty
}