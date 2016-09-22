/**
 * Created by arming on 9/17/16.
 */
'use strict'

function isEmpty(obj) {
  return (Object.keys(obj).length === 0 && obj.constructor === Object)
}

module.exports = {
  isEmpty: isEmpty
}
