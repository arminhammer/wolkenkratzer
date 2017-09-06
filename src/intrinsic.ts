import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { ITemplate } from './template';

export interface IRef {
  readonly kind: 'Ref';
  readonly Ref: string;
}

/**
 * Returns a Ref object that references another element in the template
 * @param {*} target 
 */
export function Ref(target: IResource | IParameter | string): IRef {
  if (typeof target === 'string') {
    return { kind: 'Ref', Ref: target };
  } else {
    return { kind: 'Ref', Ref: target.Name };
  }
}

export interface IFnGetAtt {
  readonly kind: 'FnGetAtt';
  readonly FnGetAtt: Array<string>;
}

/**
 * Returns an Fn::GetAtt object that references another element in the template
 * @param {*} target 
 * @param {*} attr 
 */
export function FnGetAtt(target: IResource | string, attr: string): IFnGetAtt {
  if (typeof target === 'string') {
    return { kind: 'FnGetAtt', FnGetAtt: [target, attr] };
  } else {
    return { kind: 'FnGetAtt', FnGetAtt: [target.Name, attr] };
  }
}

export interface IFnJoin {
  readonly kind: 'FnJoin';
  readonly Delimiter: string;
  readonly Values: Array<string | IFnGetAtt | IRef> | IFnGetAtt;
}

/**
 * Returns an Fn::Join object
 */
export function FnJoin(
  delimiter: string,
  values: Array<string | IFnGetAtt | IRef> | IFnGetAtt
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
  readonly kind: 'FnAnd';
  readonly FnAnd: Array<Conditional>;
}

/**
 * Returns an Fn::And object
 * @param {*} one 
 * @param {*} two 
 */
export function FnAnd(one: Conditional, two: Conditional): IFnAnd {
  return { kind: 'FnAnd', FnAnd: [buildIntrinsic(one), buildIntrinsic(two)] };
}

export interface IFnEquals {
  readonly kind: 'FnEquals';
  readonly FnEquals: Array<Conditional>;
}

/**
 * Returns an Fn::Equals object
 * @param {*} one 
 * @param {*} two 
 */
export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
  return { kind: 'FnEquals', FnEquals: [one, two] };
}

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
  readonly kind: 'FnSub';
  readonly FnSub: string;
}

/**
 * Returns an Fn::Sub object
 * @param {*} input 
 */
export function FnSub(input: string): IFnSub {
  return { kind: 'FnSub', FnSub: input };
}

export interface IFnBase64 {
  readonly kind: 'FnBase64';
  readonly FnBase64: string;
}

/**
 * Returns an Fn::Base64 object
 * @param {*} input 
 */
export function FnBase64(input: string): IFnBase64 {
  return { kind: 'FnBase64', FnBase64: input };
}

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
export function FnFindInMap(
  mapName: string,
  topLevelKey: string,
  secondLevelKey: string
): IFnFindInMap {
  return {
    FnFindInMap: [mapName, topLevelKey, secondLevelKey],
    kind: 'FnFindInMap'
  };
}

export interface IFnGetAZs {
  readonly kind: 'FnGetAZs';
  readonly FnGetAZs: string | IRef;
}

/**
 * Returns an Fn::GetAZs object
 * @param {*} region 
 */
export function FnGetAZs(region: string | IRef): IFnGetAZs {
  if (!region) {
    region = Ref('AWS::Region');
  }
  return { kind: 'FnGetAZs', FnGetAZs: region };
}

export interface IFnSelect {
  readonly kind: 'FnSelect';
  readonly index: number;
  readonly FnSelect: Array<
    string | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnSplit | IRef
  >;
}

/**
 * Returns an Fn::Select object
 * @param {*} index 
 * @param {*} list 
 */
export function FnSelect(
  index: string | number,
  list: Array<
    string | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnSplit | IRef
  >
): IFnSelect {
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  return {
    FnSelect: list,
    index: index,
    kind: 'FnSelect'
  };
}

export function buildIntrinsic(input) {
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

export interface IFnImportValue {
  readonly kind: 'FnImportValue';
  readonly FnImportValue:
    | string
    | IFnBase64
    | IFnFindInMap
    | IFnIf
    | IFnJoin
    | IFnSelect
    | IFnSplit
    | IFnSub
    | IRef;
}

/**
 * Returns an Fn::ImportValue object
 * @param {*} region 
 */
export function FnImportValue(
  value:
    | string
    | IFnBase64
    | IFnFindInMap
    | IFnIf
    | IFnJoin
    | IFnSelect
    | IFnSplit
    | IFnSub
    | IRef
): IFnImportValue {
  return { kind: 'FnImportValue', FnImportValue: value };
}

export interface IFnSplit {
  readonly kind: 'FnSplit';
  readonly delimiter: string;
  readonly value:
    | string
    | IFnBase64
    | IFnFindInMap
    | IFnGetAtt
    | IFnGetAZs
    | IFnIf
    | IFnJoin
    | IFnSelect
    | IRef;
}

/**
 * Returns an Fn::Split object
 * @param {*} mapName 
 * @param {*} topLevelKey 
 * @param {*} secondLevelKey 
 */
export function FnSplit(delimiter: string, value: string): IFnSplit {
  return {
    delimiter: delimiter,
    kind: 'FnSplit',
    value: value
  };
}
