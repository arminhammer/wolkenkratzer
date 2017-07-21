// @flow
import {
  IFnAnd,
  IFnEquals,
  IFnIf,
  IFnNot,
  IFnOr,
  buildIntrinsic
} from '../intrinsic';
const cloneDeep = require('lodash.clonedeep');

export interface ICondition {
  +kind: 'Condition',
  +Name: string,
  +Condition: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr
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
