// @flow

import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
  +kind: 'Ref',
  +Ref: string
}

export function Ref(target: IResource | IParameter | string): IRef {
  if (typeof target === 'string') {
    return { kind: 'Ref', Ref: target };
  } else {
    return { kind: 'Ref', Ref: target.Name };
  }
}

export interface IFnGetAtt {
  +kind: 'FnGetAtt',
  +FnGetAtt: Array<string>
}

export function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt {
  if (typeof target === 'string') {
    return { kind: 'FnGetAtt', FnGetAtt: [target, attr] };
  } else {
    return { kind: 'FnGetAtt', FnGetAtt: [target.Name, attr] };
  }
}

export interface IFnJoin {
  +kind: 'FnJoin',
  +Delimiter: string,
  +Values: Array<string | IFnGetAtt> | IFnGetAtt
}

export function FnJoin(
  delimiter: string,
  values: Array<string | IFnGetAtt | Ref> | IFnGetAtt
): IFnJoin {
  let newValues = values;
  if (Array.isArray(values)) {
    newValues = values.map(v => {
      return buildIntrinsic(v);
    });
  }
  return { kind: 'FnJoin', Delimiter: delimiter, Values: newValues };
}

export interface IFnAnd {
  +kind: 'FnAnd',
  +FnAnd: Array<Conditional>
}

export function FnAnd(one: Conditional, two: Conditional): IFnAnd {
  return { kind: 'FnAnd', FnAnd: [one, two] };
}

export interface IFnEquals {
  +kind: 'FnEquals',
  +FnEquals: Array<Conditional>
}

export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
  return { kind: 'FnEquals', FnEquals: [one, two] };
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

export interface IFnSub {
  +kind: 'FnSub',
  +FnSub: string
}

export function FnSub(input: string) {
  return { kind: 'FnSub', FnSub: input };
}

export interface IFnBase64 {
  +kind: 'FnBase64',
  +FnBase64: string
}

export function FnBase64(input: string) {
  return { kind: 'FnBase64', FnBase64: input };
}

export interface IFnFindInMap {
  +kind: 'FnFindInMap',
  +FnFindInMap: Array<string>
}

export function FnFindInMap(
  mapName: string,
  topLevelKey: string,
  secondLevelKey: string
): IFnFindInMap {
  return {
    kind: 'FnFindInMap',
    FnFindInMap: [mapName, topLevelKey, secondLevelKey]
  };
}

export interface IFnGetAZs {
  +kind: 'FnGetAZs',
  +FnGetAZs: string
}

export function FnGetAZs(region: string | Object) {
  if (!region) {
    region = { Ref: 'AWS::Region' };
  }
  return { kind: 'FnGetAZs', FnGetAZs: region };
}

export interface IFnSelect {
  +kind: 'FnSelect',
  +FnFindInMap: string
}

export function FnSelect(index: string, list: string) {
  return { kind: 'FnSelect', FnSelect: [index, list] };
}

export function buildIntrinsic(input: mixed) {
  if (input['Fn::Equals']) {
    return FnEquals(
      buildIntrinsic(input['Fn::Equals'][0]),
      buildIntrinsic(input['Fn::Equals'][1])
    );
  } else if (input.Ref) {
    return Ref(input.Ref);
  } else if (input['Fn::GetAtt']) {
    return FnGetAtt(
      buildIntrinsic(input['Fn::GetAtt'][0]),
      buildIntrinsic(input['Fn::GetAtt'][1])
    );
  } else {
    return input;
  }
}
