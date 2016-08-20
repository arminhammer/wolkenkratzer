/**
 * Created by arming on 7/6/16.
 */

/**
 * Created by arming on 6/15/16.
 */
'use strict'

/** @module Core */

/**
 * @memberof module:Core
 */
function Mapping (name, body) {
  this.WKName = name
  this.body = body
}

/**
 * Provides a JSON version of the Mapping
 * @returns {*}
 */
Mapping.prototype.toJson = function () {
  let p = JSON.parse(JSON.stringify(this))
  delete p.WKName
  return p.body
}

module.exports = {
  Mapping: Mapping
}
