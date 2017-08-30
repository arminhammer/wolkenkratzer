'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//import bluebird from '../../node_modules/bluebird/js/browser/bluebird';
const bluebird_1 = require("bluebird");
const instanceTypes = require('../ec2info.json');
/**
 * Returns an array of all instance types and details.
 * @memberof module:Macro
 * @returns {Array}
 */
function getInstanceTypeList() {
    return instanceTypes;
}
exports.getInstanceTypeList = getInstanceTypeList;
/**
 * Returns an array of just the instance type names available in AWS.
 * @memberof module:Macro
 * @returns {Array}
 */
function getInstanceTypeNameList() {
    let results = [];
    instanceTypes.forEach((instanceType) => {
        results.push(instanceType.instance_type);
    });
    return results;
}
exports.getInstanceTypeNameList = getInstanceTypeNameList;
/**
 * Returns a map of all instance types and details.
 * @memberof module:Macro
 * @returns {{}}
 */
function getInstanceTypeMap() {
    let results = {};
    instanceTypes.forEach((instanceType) => {
        results[instanceType.instance_type] = instanceType;
    });
    return results;
}
exports.getInstanceTypeMap = getInstanceTypeMap;
/**
 * Returns an array of the names of all regions in AWS.
 * @memberof module:Macro
 * @returns {string[]}
 */
function getRegions() {
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
exports.getRegions = getRegions;
/**
 * Returns an AMI Map that can be added to a Mapping.
 * @memberof module:Macro
 * @param filters
 * @param regions
 * @returns {Promise.<TResult>}
 */
function getAMIMap(filters, regions, aws) {
    return bluebird_1.default
        .map(regions, (region) => {
        let ec2Client = new aws.EC2({ region: region });
        return bluebird_1.default
            .map(filters, (filterSet) => {
            return ec2Client
                .describeImages({
                Filters: filterSet.Filters
            })
                .promise()
                .then((ami) => {
                let set = {};
                if (ami.Images[0]) {
                    if (ami.Images[0].ImageId) {
                        set[filterSet.Name] = ami.Images[0].ImageId;
                    }
                    else {
                        set[filterSet.Name] = 'NOT_SUPPORTED';
                    }
                }
                else {
                    set[filterSet.Name] = 'NOT_SUPPORTED';
                }
                return set;
            });
        })
            .then((results) => {
            results = results.reduce((prev, current) => {
                let key = Object.keys(current)[0];
                prev[key] = current[key];
                return prev;
            }, {});
            return { region: region, images: results };
        });
    })
        .then(function (results) {
        let final = {};
        results.forEach((result) => {
            final[result.region] = result.images;
        });
        return final;
    });
}
exports.getAMIMap = getAMIMap;
//# sourceMappingURL=ec2meta.macro.js.map