import { cloneDeep } from 'lodash';
import {
  buildIntrinsic,
  IFnAnd,
  IFnEquals,
  IFnIf,
  IFnNot,
  IFnOr
} from '../intrinsic';
import { ICondition } from '../types';

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
