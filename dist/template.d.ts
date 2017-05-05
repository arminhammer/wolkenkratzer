import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
export interface ITemplate {
    readonly kind: 'template';
    readonly Description?: string;
    readonly Parameters: {
        [s: string]: IParameter;
    };
    readonly Resources: {
        [s: string]: IResource;
    };
    readonly Outputs: {
        [s: string]: IOutput;
    };
}
export declare function Template(): ITemplate;
