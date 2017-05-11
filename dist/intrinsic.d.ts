import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
export interface IRef {
    readonly kind: 'Ref';
    readonly Ref: string;
}
export interface IFnGetAtt {
    readonly kind: 'FnGetAtt';
    readonly 'Fn::GetAtt': Array<string>;
}
export declare type IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr | ConditionFunction;
export declare type Conditional = string | IRef | IFnGetAtt;
export declare type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export interface IFnAnd {
    readonly kind: 'FnAnd';
    readonly 'Fn::And': Array<Conditional>;
}
export interface IFnEquals {
    readonly kind: 'FnEquals';
    readonly 'Fn::Equals': Array<Conditional>;
}
export interface IFnIf {
    readonly kind: 'FnIf';
    readonly 'Fn::If': Array<Conditional>;
}
export interface IFnNot {
    readonly kind: 'FnNot';
    readonly 'Fn::Not': Array<Conditional>;
}
export interface IFnOr {
    readonly kind: 'FnOr';
    readonly 'Fn::Or': Array<Conditional>;
}
export declare function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt;
export declare function Ref(target: IResource | IParameter | string): IRef;
export declare function FnEquals(one: Conditional, two: Conditional): IFnEquals;
