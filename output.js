/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Output {
  constructor (name, parameter) {
    this.WKName = name
    this.Description = parameter.Description
    this.Value = parameter.Value
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

module.exports = {
  Output: Output
}
