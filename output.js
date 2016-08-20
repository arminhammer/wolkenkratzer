/**
 * Created by arming on 6/15/16.
 */
'use strict'

/** @module Core */

/**
 * @memberof module:Core
 */
function Output (name, parameter) {
  this.WKName = name
  this.Description = parameter.Description
  this.Value = parameter.Value
}

/**
 * Returns a JSON version of the Output
 */
Output.prototype.toJson = function () {
  let p = JSON.parse(JSON.stringify(this))
  delete p.WKName
  return p
}

module.exports = {
  Output: Output
}
