import { ConditionFunction } from '../intrinsic';
export interface ICondition {
    readonly Name: string;
    readonly Condition: ConditionFunction;
}
export declare function Condition(name: string, conditionFn: ConditionFunction): ICondition;
