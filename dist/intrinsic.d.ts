import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';
export interface IRef {
    readonly Ref: string;
}
export declare function Ref(t: ITemplate, target: IResource | IParameter | string): IRef;
