import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';
export interface IRef {
    readonly Ref: string;
}
export interface IFnGetAtt {
    readonly 'Fn::GetAtt': Array<string>;
}
export declare type Conditional = string | IRef;
export declare type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export interface IFnAnd {
    readonly 'Fn::And': Array<Conditional>;
}
export interface IFnEquals {
    readonly 'Fn::Equals': Array<Conditional>;
}
export interface IFnIf {
    readonly 'Fn::If': Array<Conditional>;
}
export interface IFnNot {
    readonly 'Fn::Not': Array<Conditional>;
}
export interface IFnOr {
    readonly 'Fn::Or': Array<Conditional>;
}
export declare function FnGetAtt(t: ITemplate, target: IResource | string, attr: string): IFnGetAtt;
export declare function Ref(t: ITemplate, target: IResource | IParameter | string): IRef;
export declare function FnEquals(one: Conditional, two: Conditional): IFnEquals;
