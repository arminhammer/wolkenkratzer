/**
 * Created by arming on 6/15/16.
 */
'use strict'
const ValueException = require('./exceptions').ValueException
const TypeException = require('./exceptions').TypeException
const Mapping = require('./mapping').Mapping
const Output = require('./output').Output
const Parameter = require('./parameter').Parameter
const WKResource = require('./resource').WKResource
const path = require('path')

/** @module Core */

function _handleDuplicateKey (key) {
  console.log('Duplicate key ' + key)
  throw new ValueException('duplicate key "%s" detected' % key)
}

function _update (d, values) {
  if (Array.isArray(values)) {
    values.forEach((v) => {
      if (v.WKName in d) {
        _handleDuplicateKey(v.WKName)
      }
      d[v.WKName] = v
    })
  } else {
    if (values.WKName in d) {
      _handleDuplicateKey(values.WKName)
    }
    d[values.WKName] = values
  }
  return values
}

function _populateFromExisting(newTemplate, existingTemplate) {
  for (let param in existingTemplate.Parameters) {
    let newParam = new Parameter(param, existingTemplate.Parameters[param])
    newTemplate.add(newParam)
  }
  for (let output in existingTemplate.Outputs) {
    let newOutput = new Output(output, existingTemplate.Outputs[output])
    newTemplate.add(newOutput)
  }
  for (let mapping in existingTemplate.Mappings) {
    let newMapping = new Mapping(mapping, existingTemplate.Mappings[mapping])
    newTemplate.add(newMapping)
  }
  for (let resource in existingTemplate.Resources) {
    let typeSplit = existingTemplate.Resources[resource].Type.split('::')
    let resourceGroupName = typeSplit[1]
    let resourceGroup
    let resourceName = typeSplit[2]
    if (typeSplit[0] === 'Custom') {
      resourceGroup = require(path.join(__dirname, 'resources', 'cloudformation'))
      resourceName = 'CustomResource'
    } else {
      resourceGroup = require(path.join(__dirname, 'resources', resourceGroupName.toLowerCase()))
      if (resourceGroupName === 'Lambda' && resourceName === 'Function') {
        resourceName = 'LambdaFunction'
      }
    }
    let temp = Object.create(resourceGroup[resourceName].prototype)
    let newResource = Reflect.construct(resourceGroup[resourceName], [resource, existingTemplate.Resources[resource].Properties])
    newTemplate.add(newResource)
  }
}

/**
 * @memberof module:Core
 */
function Template (template) {
  this.Description = ''
  this.Metadata = {}
  this.Conditions = {}
  this.Mappings = {}
  this.Outputs = {}
  this.Parameters = {}
  this.Resources = {}
  this.AWSTemplateFormatVersion = '2010-09-09'
  if (template) {
    //console.log('Existing template detected!')
    _populateFromExisting(this, template)
  }
}

/**
 * Add an element to the Template
 * @param element
 */
Template.prototype.add = function (element) {
  if (element instanceof Parameter) {
    _update(this.Parameters, element)
  } else if (element instanceof WKResource) {
    _update(this.Resources, element)
  } else if (element instanceof Output) {
    _update(this.Outputs, element)
  } else if (element instanceof Mapping) {
    _update(this.Mappings, element)
  } else {
    throw new TypeException(element + ' is not a valid type and cannot be added to the template.')
  }
}

/**
 * Set the metadata value of the template
 * @param metadata
 */
Template.prototype.setMetadata = function (metadata) {
  this.Metadata = metadata
}

/**
 * Set the version value of the template
 * @param version
 */
Template.prototype.setVersion = function (version) {
  this.Version = version
}

/**
 * Add a description to the template
 * @param description
 */
Template.prototype.setDescription = function (description) {
  this.Description = description
}

/**
 * Add a condition to the template
 * @param name
 * @param condition
 */
Template.prototype.addCondition = function (name, condition) {
  this.Conditions[name] = condition
}

/**
 *
 * @param callback
 */
Template.prototype.toJsonAsync = function (callback) {
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

/**
 * Returns a CloudFormation JSON template string
 * @returns {Object}
 */
Template.prototype.toJson = function () {
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

module.exports = {
  Template: Template
}
