/**
 * Created by arming on 9/25/16.
 */
'use strict'

const instanceTypes = require('../scripts/ec2info.json')

function getInstanceTypeList () {
  return instanceTypes
}

function getInstanceTypeNameList () {
  let results = []
  instanceTypes.forEach((instanceType) => {
    results.push(instanceType.instance_type)
  })
  return results
}

function getInstanceTypeMap () {
  let results = {}
  instanceTypes.forEach((instanceType) => {
    results[instanceType.instance_type] = instanceType
  })
  return results
}

module.exports = {
  getInstanceTypeList: getInstanceTypeList,
  getInstanceTypeNameList: getInstanceTypeNameList,
  getInstanceTypeMap: getInstanceTypeMap
}
