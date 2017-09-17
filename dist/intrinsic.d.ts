import { Conditional, IFnAnd, IFnBase64, IFnEquals, IFnFindInMap, IFnGetAtt, IFnGetAZs, IFnIf, IFnImportValue, IFnJoin, IFnSelect, IFnSplit, IFnSub, IParameter, IRef, IResource } from './types';
/**
 * Returns an Fn::And object
 * @param {*} one
 * @param {*} two
 */
export declare function FnAnd(one: Conditional, two: Conditional): IFnAnd;
/**
 * Returns a Ref object that references another element in the template
 * @param {*} target
 */
export declare function Ref(target: IResource | IParameter | string): IRef;
/**
 * Returns an Fn::GetAtt object that references another element in the template
 * @param {*} target
 * @param {*} attr
 */
export declare function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt;
/**
 * Returns an Fn::Join object
 */
export declare function FnJoin(delimiter: string, values: Array<string | IFnGetAtt | IRef> | IFnGetAtt): IFnJoin;
/**
 * Returns an Fn::Equals object
 * @param {*} one
 * @param {*} two
 */
export declare function FnEquals(one: Conditional, two: Conditional): IFnEquals;
/**
 * Returns an Fn::Sub object
 * @param {*} input
 */
export declare function FnSub(input: string): IFnSub;
/**
 * Returns an Fn::Base64 object
 * @param {*} input
 */
export declare function FnBase64(input: string): IFnBase64;
/**
 * Returns an Fn::FindInMap object
 * @param {*} mapName
 * @param {*} topLevelKey
 * @param {*} secondLevelKey
 */
export declare function FnFindInMap(mapName: string, topLevelKey: string, secondLevelKey: string): IFnFindInMap;
/**
 * Returns an Fn::GetAZs object
 * @param {*} region
 */
export declare function FnGetAZs(region: string | IRef): IFnGetAZs;
/**
 * Returns an Fn::Select object
 * @param {*} index
 * @param {*} list
 */
export declare function FnSelect(index: string | number, list: Array<string | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnSplit | IRef>): IFnSelect;
export declare function buildIntrinsic(input: any): any;
/**
 * Returns an Fn::ImportValue object
 * @param {*} region
 */
export declare function FnImportValue(value: string | IFnBase64 | IFnFindInMap | IFnIf | IFnJoin | IFnSelect | IFnSplit | IFnSub | IRef): IFnImportValue;
/**
 * Returns an Fn::Split object
 * @param {*} mapName
 * @param {*} topLevelKey
 * @param {*} secondLevelKey
 */
export declare function FnSplit(delimiter: string, value: string): IFnSplit;
