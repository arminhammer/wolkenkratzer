/**
 * Created by arming on 7/6/16.
 */

/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Mapping {
  constructor (name, body) {
    this.Name = name
    this.body = body
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p.body
  }
}

module.exports = {
  Mapping: Mapping
}
