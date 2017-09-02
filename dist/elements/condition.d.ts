import { IFnAnd, IFnEquals, IFnIf, IFnNot, IFnOr } from '../intrinsic';
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
export declare function Condition(name: string, conditionFn: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr): ICondition;
