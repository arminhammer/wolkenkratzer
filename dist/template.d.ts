import { IParameter } from './elements/parameter';
import { ICondition } from './elements/condition';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
export interface ITemplate {
    readonly AWSTemplateFormatVersion: string;
    readonly Description?: string;
    readonly Parameters: {
        [s: string]: IParameter;
    };
    readonly Conditions: {
        [s: string]: ICondition;
    };
    readonly Resources: {
        [s: string]: IResource;
    };
    readonly Outputs: {
        [s: string]: IOutput;
    };
}
export declare function Template(): ITemplate;
