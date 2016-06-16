/**
 * Created by arming on 6/15/16.
 */
'use strict'
const debug = require('debug')('baseawsobject')
const RequiredPropertyException = require('./index').RequiredPropertyException

class BaseAWSObject {
  constructor (name, resourceType, properties, propertiesObject) {
    this.Name = name
    this.resourceType = resourceType
    this.properties = properties
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
  dependsOn (resource) {
    this.dependsOn = resource
  }
  toJson () {
    debug('Generating Resource json')
    let newProperties = JSON.parse(JSON.stringify(this.properties))
    for (let prop in newProperties) {
      try {
        newProperties[prop] = this.properties[prop].toJson()
      } catch (e) {
        if (e instanceof RequiredPropertyException) {
          throw new RequiredPropertyException(this.Name + '.' + prop + ' is required but not defined.')
        }
      }
    }
    let returnObject = {
      Type: this.resourceType,
      Properties: newProperties
    }
    if (this.dependsOn) {
      returnObject.DependsOn = this.dependsOn.Name
    }
    return returnObject
  }
}

module.exports = {
  BaseAWSObject: BaseAWSObject
}