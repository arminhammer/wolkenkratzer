import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
    readonly kind: 'Ref';
    readonly Ref: string;
}

export interface IFnGetAtt {
    readonly kind: 'FnGetAtt';
    readonly 'Fn::GetAtt': Array<string>;
}

// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export type IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr | ConditionFunction;
export type Conditional = string | IRef | IFnGetAtt;
export type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;

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

/*
export function FnGetAtt(t: ITemplate, target: IResource | string, attr: string): IFnGetAtt {
    let result = { ...t };
    let element: IResource;
    if (typeof target === 'string') {
        if (result.Resources[target]) {
            return { 'Fn::GetAtt': [target, attr] };
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
        }
    }
    if (result.Resources[target.Name]) {
        return { 'Fn::GetAtt': [target.Name, attr] };
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
    }
}
*/

export function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt {
    if (typeof target === 'string') {
        return { kind: 'FnGetAtt', 'Fn::GetAtt': [target, attr] };
    } else {
        return { kind: 'FnGetAtt', 'Fn::GetAtt': [target.Name, attr] };
    }
}

export function Ref(target: IResource | IParameter | string): IRef {
    if (typeof target === 'string') {
        return { kind: 'Ref', Ref: target };
    } else {
        return { kind: 'Ref', Ref: target.Name };
    }
}

export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
    return { kind: 'FnEquals', 'Fn::Equals': [one, two] };
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
