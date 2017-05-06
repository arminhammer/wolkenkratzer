import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
    readonly Ref: string;
}

export type Conditional = string | IRef;
export type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;

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

export function Ref(t: ITemplate, target: IResource | IParameter | string): IRef {
    let result = { ...t };
    let element: IResource | IParameter;
    if (typeof target === 'string') {
        if (result.Parameters[target]) {
            return { Ref: target };
        } else if (result.Resources[target]) {
            return { Ref: target };
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
        }
    }
    if (result.Parameters[target.Name]) {
        return { Ref: target.Name };
    } else if (result.Resources[target.Name]) {
        return { Ref: target.Name };
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
    }
}

export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
    return { 'Fn::Equals': [one, two] };
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
