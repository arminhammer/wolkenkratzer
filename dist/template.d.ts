import { IParameter } from './elements/parameter';
export interface ITemplate {
    readonly kind: 'template';
    readonly Parameters: Array<IParameter>;
}
export declare function Template(): ITemplate;
