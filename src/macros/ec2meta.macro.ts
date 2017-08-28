'use strict';

import path from 'path';
import instanceTypes from '../ec2info.json';
//import bluebird from '../../node_modules/bluebird/js/browser/bluebird';
const Promise = require('bluebird');

/**
 * Returns an array of all instance types and details.
 * @memberof module:Macro
 * @returns {Array}
 */
export function getInstanceTypeList() {
  return instanceTypes;
}

/**
 * Returns an array of just the instance type names available in AWS.
 * @memberof module:Macro
 * @returns {Array}
 */
export function getInstanceTypeNameList() {
  let results: string[] = [];
  instanceTypes.forEach((instanceType: any) => {
    results.push(instanceType.instance_type);
  });
  return results;
}

/**
 * Returns a map of all instance types and details.
 * @memberof module:Macro
 * @returns {{}}
 */
export function getInstanceTypeMap() {
  let results: any = {};
  instanceTypes.forEach((instanceType: any) => {
    results[instanceType.instance_type] = instanceType;
  });
  return results;
}

/**
 * Returns an array of the names of all regions in AWS.
 * @memberof module:Macro
 * @returns {string[]}
 */
export function getRegions() {
  return [
    'us-east-1',
    'us-east-2',
    'us-west-1',
    'us-west-2',
    'ca-central-1',
    'eu-west-1',
    'eu-west-2',
    'eu-central-1',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ap-northeast-1',
    'ap-northeast-2',
    'sa-east-1',
    'cn-north-1',
    'us-gov-west-1'
  ];
}

/**
 * Returns an AMI Map that can be added to a Mapping.
 * @memberof module:Macro
 * @param filters
 * @param regions
 * @returns {Promise.<TResult>}
 */
export function getAMIMap(filters: any, regions: any, aws: any) {
  return bluebird
    .map(regions, (region: any) => {
      let ec2Client = new aws.EC2({ region: region });
      return bluebird
        .map(filters, (filterSet: any) => {
          return ec2Client
            .describeImages({
              Filters: filterSet.Filters
            })
            .promise()
            .then((ami: any) => {
              let set: any = {};
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
        })
        .then((results: any) => {
          results = results.reduce((prev: any, current: any) => {
            let key = Object.keys(current)[0];
            prev[key] = current[key];
            return prev;
          }, {});
          return { region: region, images: results };
        });
    })
    .then(function(results: any) {
      let final: any = {};
      results.forEach((result: any) => {
        final[result.region] = result.images;
      });
      return final;
    });
}
