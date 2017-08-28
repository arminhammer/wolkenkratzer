import {
  IFnAnd,
  IFnEquals,
  IFnIf,
  IFnNot,
  IFnOr,
  buildIntrinsic
} from '../intrinsic';
import { cloneDeep } from 'lodash-es';

export interface ICondition {
  readonly kind: 'Condition';
  readonly Name: string;
  readonly Condition: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
}

/**
 * Create a Condition object
 * @param {*} name 
 * @param {*} conditionFn 
 */
export function Condition(
  name: string,
  conditionFn: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr
): ICondition {
  let newCondFn = cloneDeep(conditionFn);
  if (typeof newCondFn === 'object' && !newCondFn.kind) {
    newCondFn = buildIntrinsic(newCondFn);
  }
  return { kind: 'Condition', Name: name, Condition: newCondFn };
}
