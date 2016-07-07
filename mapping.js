/**
 * Created by arming on 7/6/16.
 */

/**
 * Created by arming on 6/15/16.
 */
'use strict'

class Mapping {
  constructor (name, body) {
    this.WKName = name
    this.body = body
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p.body
  }
}

module.exports = {
  Mapping: Mapping
}
