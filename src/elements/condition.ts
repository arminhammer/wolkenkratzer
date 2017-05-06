import { ConditionFunction } from '../intrinsic';

export interface ICondition {
    readonly Name: string;
    readonly Condition: ConditionFunction;
}

export function Condition(name: string, conditionFn: ConditionFunction): ICondition {
    return { Name: name, Condition: conditionFn };
}
