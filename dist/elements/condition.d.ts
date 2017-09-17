import { ICondition, IFnAnd, IFnEquals, IFnIf, IFnNot, IFnOr } from '../types';
/**
 * Create a Condition object
 * @param {*} name
 * @param {*} conditionFn
 */
export declare function Condition(name: string, conditionFn: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr): ICondition;
