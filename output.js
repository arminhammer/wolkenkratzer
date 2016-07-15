/**
 * Created by arming on 6/15/16.
 */
'use strict'

/** @module Core */

/**
 * @memberof module:Core
 */
class Output {
  /**
   * @constructs Output
   * @param name
   * @param parameter
   */
  constructor (name, parameter) {
    this.WKName = name
    this.Description = parameter.Description
    this.Value = parameter.Value
  }

  /**
   * Returns a JSON version of the Output
   */
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

module.exports = {
  Output: Output
}
