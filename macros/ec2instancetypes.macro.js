/**
 * Created by arming on 9/25/16.
 */
'use strict'

const instanceTypes = require('../scripts/ec2info.json')

function getInstanceTypeList (filters) {
  let results = []
  instanceTypes.forEach((instanceType) => {
    let valid = true
    if (filters) {
      valid = false
      if (filters.instanceTypes) {
        filters.instanceTypes.some((filter) => {
          if (instanceType.instance_type.includes(filter)) {
            valid = true
            return true
          }
        })
      }
    }
    if (valid) {
      results.push(instanceType.instance_type)
    }
  })
  return results
}

module.exports = {
  getInstanceTypeList: getInstanceTypeList
}
