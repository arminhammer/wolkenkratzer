// @flow
import { IFnAnd, IFnEquals, IFnIf, IFnNot, IFnOr } from '../intrinsic';

export interface ICondition {
  +kind: 'Condition',
  +Name: string,
  +Condition: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr
}

export function Condition(
  name: string,
  conditionFn: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr
): ICondition {
  return { kind: 'Condition', Name: name, Condition: conditionFn };
}
