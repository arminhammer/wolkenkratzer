import { IParameter } from './elements/parameter';
import { IOutput } from './elements/output';
export interface ITemplate {
    readonly kind: 'template';
    readonly Description?: string;
    readonly Parameters: Array<IParameter>;
    readonly Outputs: Array<IOutput>;
}
export declare function Template(): ITemplate;
