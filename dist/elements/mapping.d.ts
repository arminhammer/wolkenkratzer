import { IMapping } from '../types';
/**
 * Create a Mapping object
 * @param {*} name
 * @param {*} subName
 * @param {*} body
 */
export declare function Mapping(name: string, subName: string, body: {
    [s: string]: any;
}): IMapping;
