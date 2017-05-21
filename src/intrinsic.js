// @flow

import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
  +kind: 'Ref',
  +Ref: string
}

export interface IFnGetAtt {
  +kind: 'FnGetAtt',
  +FnGetAtt: Array<string>
}

export interface IFnJoin {
  +kind: 'FnJoin',
  +Delimiter: string,
  +Values: Array<string | IFnGetAtt> | IFnGetAtt
}

// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export type IIntrinsic =
  | IRef
  | IFnGetAtt
  | IFnJoin
  | IFnAnd
  | IFnEquals
  | IFnIf
  | IFnNot
  | IFnOr
  | ConditionFunction;

export type Conditional = string | IRef | IFnGetAtt;
export type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;

export interface IFnAnd {
  +kind: 'FnAnd',
  +FnAnd: Array<Conditional>
}

export interface IFnEquals {
  +kind: 'FnEquals',
  +FnEquals: Array<Conditional>
}

export interface IFnIf {
  +kind: 'FnIf',
  +FnIf: Array<Conditional>
}

export interface IFnNot {
  +kind: 'FnNot',
  +FnNot: Array<Conditional>
}

export interface IFnOr {
  +kind: 'FnOr',
  +FnOr: Array<Conditional>
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
    return { kind: 'FnGetAtt', FnGetAtt: [target, attr] };
  } else {
    return { kind: 'FnGetAtt', FnGetAtt: [target.Name, attr] };
  }
}

export function Ref(target: IResource | IParameter | string): IRef {
  if (typeof target === 'string') {
    return { kind: 'Ref', Ref: target };
  } else {
    return { kind: 'Ref', Ref: target.Name };
  }
}

export function FnJoin(
  delimiter: string,
  values: Array<string | IFnGetAtt> | IFnGetAtt
): IFnJoin {
  return { kind: 'FnJoin', Delimiter: delimiter, Values: values };
}

export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
  return { kind: 'FnEquals', FnEquals: [one, two] };
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
