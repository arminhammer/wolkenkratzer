/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Output {
  constructor (name, parameter) {
    this.Name = name
    this.Description = parameter.Description
    this.Value = parameter.Value
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p
  }
}

module.exports = {
  Output: Output
}
