/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Parameter {
  constructor (name, parameter) {
    this.WKName = name
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
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

module.exports = {
  Parameter: Parameter
}
