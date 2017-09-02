import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
export interface IRef {
    readonly kind: 'Ref';
    readonly Ref: string;
}
/**
 * Returns a Ref object that references another element in the template
 * @param {*} target
 */
export declare function Ref(target: IResource | IParameter | string): IRef;
export interface IFnGetAtt {
    readonly kind: 'FnGetAtt';
    readonly FnGetAtt: Array<string>;
}
/**
 * Returns an Fn::GetAtt object that references another element in the template
 * @param {*} target
 * @param {*} attr
 */
export declare function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt;
export interface IFnJoin {
    readonly kind: 'FnJoin';
    readonly Delimiter: string;
    readonly Values: Array<string | IFnGetAtt | IRef> | IFnGetAtt;
}
/**
 * Returns an Fn::Join object
 */
export declare function FnJoin(delimiter: string, values: Array<string | IFnGetAtt | IRef> | IFnGetAtt): IFnJoin;
export interface IFnAnd {
    readonly kind: 'FnAnd';
    readonly FnAnd: Array<Conditional>;
}
/**
 * Returns an Fn::And object
 * @param {*} one
 * @param {*} two
 */
export declare function FnAnd(one: Conditional, two: Conditional): IFnAnd;
export interface IFnEquals {
    readonly kind: 'FnEquals';
    readonly FnEquals: Array<Conditional>;
}
/**
 * Returns an Fn::Equals object
 * @param {*} one
 * @param {*} two
 */
export declare function FnEquals(one: Conditional, two: Conditional): IFnEquals;
export interface IFnIf {
    readonly kind: 'FnIf';
    readonly FnIf: Array<Conditional>;
}
export interface IFnNot {
    readonly kind: 'FnNot';
    readonly FnNot: Array<Conditional>;
}
export interface IFnOr {
    readonly kind: 'FnOr';
    readonly FnOr: Array<Conditional>;
}
export declare type IIntrinsic = IRef | IFnGetAtt | IFnJoin | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr | ConditionFunction;
export declare type Conditional = string | IRef | IFnGetAtt;
export declare type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export interface IFnSub {
    readonly kind: 'FnSub';
    readonly FnSub: string;
}
/**
 * Returns an Fn::Sub object
 * @param {*} input
 */
export declare function FnSub(input: string): IFnSub;
export interface IFnBase64 {
    readonly kind: 'FnBase64';
    readonly FnBase64: string;
}
/**
 * Returns an Fn::Base64 object
 * @param {*} input
 */
export declare function FnBase64(input: string): {
    kind: string;
    FnBase64: string;
};
export interface IFnFindInMap {
    readonly kind: 'FnFindInMap';
    readonly FnFindInMap: Array<string>;
}
/**
 * Returns an Fn::FindInMap object
 * @param {*} mapName
 * @param {*} topLevelKey
 * @param {*} secondLevelKey
 */
export declare function FnFindInMap(mapName: string, topLevelKey: string, secondLevelKey: string): IFnFindInMap;
export interface IFnGetAZs {
    readonly kind: 'FnGetAZs';
    readonly FnGetAZs: string;
}
/**
 * Returns an Fn::GetAZs object
 * @param {*} region
 */
export declare function FnGetAZs(region: string | object): {
    kind: string;
    FnGetAZs: string | object;
};
export interface IFnSelect {
    readonly kind: 'FnSelect';
    readonly FnFindInMap: string;
}
/**
 * Returns an Fn::Select object
 * @param {*} index
 * @param {*} list
 */
export declare function FnSelect(index: string, list: string): {
    kind: string;
    FnSelect: string[];
};
export declare function buildIntrinsic(input: any): any;
