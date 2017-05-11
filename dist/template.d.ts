import { IParameter } from './elements/parameter';
import { ICondition } from './elements/condition';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
export interface ITemplate {
    readonly kind: 'Template';
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
    readonly addDescription: Function;
    readonly removeDescription: Function;
    readonly addCondition: Function;
    readonly addParameter: Function;
    readonly addOutput: Function;
    readonly addResource: Function;
    readonly removeOutput: Function;
    readonly removeParameter: Function;
    readonly build: Function;
}
export declare function Template(): ITemplate;
