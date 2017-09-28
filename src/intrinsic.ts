import {
  Conditional,
  IFnAnd,
  IFnBase64,
  IFnEquals,
  IFnFindInMap,
  IFnGetAtt,
  IFnGetAZs,
  IFnIf,
  IFnImportValue,
  IFnJoin,
  IFnNot,
  IFnOr,
  IFnSelect,
  IFnSplit,
  IFnSub,
  IIntrinsic,
  IParameter,
  IRef,
  IResource,
  ITemplate
} from './types';

/**
 * Returns an Fn::And object
 * @param {*} one 
 * @param {*} two 
 */
export function FnAnd(one: Conditional, two: Conditional): IFnAnd {
  return { kind: 'FnAnd', FnAnd: [buildIntrinsic(one), buildIntrinsic(two)] };
}

/**
 * Returns an Fn::Or object
 * @param {*} array 
 */
export function FnOr(items: Array<string | IIntrinsic>): IFnOr {
  return { kind: 'FnOr', FnOr: items.map(x => buildIntrinsic(x)) };
}

/**
 * Returns an Fn::Not object
 * @param {*} array 
 */
export function FnNot(items: Array<string | IIntrinsic>): IFnNot {
  return { kind: 'FnNot', FnNot: items.map(x => buildIntrinsic(x)) };
}

/**
 * Returns an Fn::If object
 * @param {*} array 
 */
export function FnIf(items: Array<string | IIntrinsic>): IFnIf {
  return { kind: 'FnIf', FnIf: items.map(x => buildIntrinsic(x)) };
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

/**
 * Returns an Fn::Equals object
 * @param {*} one 
 * @param {*} two 
 */
export function FnEquals(one: Conditional, two: Conditional): IFnEquals {
  return { kind: 'FnEquals', FnEquals: [one, two] };
}

/**
 * Returns an Fn::Sub object
 * @param {*} input 
 */
export function FnSub(input: string): IFnSub {
  return { kind: 'FnSub', FnSub: input };
}

/**
 * Returns an Fn::Base64 object
 * @param {*} input 
 */
export function FnBase64(input: string): IFnBase64 {
  return { kind: 'FnBase64', FnBase64: input };
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
  } else if (input['Fn::Or']) {
    return FnOr(input['Fn::Or'].map(x => buildIntrinsic(x)));
  } else if (input['Fn::Not']) {
    return FnNot(input['Fn::Not'].map(x => buildIntrinsic(x)));
  } else if (input['Fn::If']) {
    return FnIf(input['Fn::If'].map(x => buildIntrinsic(x)));
  } else if (input['Fn::And']) {
    return FnAnd(
      buildIntrinsic(input['Fn::And'][0]),
      buildIntrinsic(input['Fn::And'][1])
    );
  } else {
    return input;
  }
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
