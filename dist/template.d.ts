import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
export interface ITemplate {
    readonly kind: 'template';
    readonly Description?: string;
    readonly Parameters: Array<IParameter>;
    readonly Resources: Array<IResource>;
    readonly Outputs: Array<IOutput>;
}
export declare function Template(): ITemplate;
