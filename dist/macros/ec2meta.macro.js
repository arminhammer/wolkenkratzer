'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstanceTypeList = getInstanceTypeList;
exports.getInstanceTypeNameList = getInstanceTypeNameList;
exports.getInstanceTypeMap = getInstanceTypeMap;
exports.getRegions = getRegions;
exports.getAMIMap = getAMIMap;
var instanceTypes = require('../../ec2info/www/instances.json');
var Promise = require('bluebird');

/**
 * Returns an array of all instance types and details.
 * @memberof module:Macro
 * @returns {Array}
 */
function getInstanceTypeList() {
  return instanceTypes;
}

/**
 * Returns an array of just the instance type names available in AWS.
 * @memberof module:Macro
 * @returns {Array}
 */
function getInstanceTypeNameList() {
  var results = [];
  instanceTypes.forEach(function (instanceType) {
    results.push(instanceType.instance_type);
  });
  return results;
}

/**
 * Returns a map of all instance types and details.
 * @memberof module:Macro
 * @returns {{}}
 */
function getInstanceTypeMap() {
  var results = {};
  instanceTypes.forEach(function (instanceType) {
    results[instanceType.instance_type] = instanceType;
  });
  return results;
}

/**
 * Returns an array of the names of all regions in AWS.
 * @memberof module:Macro
 * @returns {string[]}
 */
function getRegions() {
  return ['us-east-1', 'us-west-2', 'us-west-1', 'eu-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-northeast-1', 'ap-northeast-2', 'ap-southeast-2', 'sa-east-1', 'cn-north-1', 'us-gov-west-1'];
}

/**
 * Returns an AMI Map that can be added to a Mapping.
 * @memberof module:Macro
 * @param filters
 * @param regions
 * @returns {Promise.<TResult>}
 */
function getAMIMap(filters, regions) {
  var aws = require('aws-sdk');
  return Promise.map(regions, function (region) {
    var ec2Client = new aws.EC2({ region: region });
    return Promise.map(filters, function (filterSet) {
      return ec2Client.describeImages({
        Filters: filterSet.Filters
      }).promise().then(function (ami) {
        var set = {};
        if (ami.Images[0]) {
          if (ami.Images[0].ImageId) {
            set[filterSet.Name] = ami.Images[0].ImageId;
          } else {
            set[filterSet.Name] = 'NOT_SUPPORTED';
          }
        } else {
          set[filterSet.Name] = 'NOT_SUPPORTED';
        }
        return set;
      });
    }).then(function (results) {
      results = results.reduce(function (prev, current) {
        var key = Object.keys(current)[0];
        prev[key] = current[key];
        return prev;
      }, {});
      return { region: region, images: results };
    });
  }).then(function (results) {
    var final = {};
    results.forEach(function (result) {
      final[result.region] = result.images;
    });
    return final;
  });
}