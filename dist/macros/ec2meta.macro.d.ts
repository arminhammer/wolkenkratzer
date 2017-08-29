import bluebird from 'bluebird';
/**
 * Returns an array of all instance types and details.
 * @memberof module:Macro
 * @returns {Array}
 */
export declare function getInstanceTypeList(): any;
/**
 * Returns an array of just the instance type names available in AWS.
 * @memberof module:Macro
 * @returns {Array}
 */
export declare function getInstanceTypeNameList(): string[];
/**
 * Returns a map of all instance types and details.
 * @memberof module:Macro
 * @returns {{}}
 */
export declare function getInstanceTypeMap(): any;
/**
 * Returns an array of the names of all regions in AWS.
 * @memberof module:Macro
 * @returns {string[]}
 */
export declare function getRegions(): string[];
/**
 * Returns an AMI Map that can be added to a Mapping.
 * @memberof module:Macro
 * @param filters
 * @param regions
 * @returns {Promise.<TResult>}
 */
export declare function getAMIMap(filters: any, regions: any, aws: any): bluebird<any>;
