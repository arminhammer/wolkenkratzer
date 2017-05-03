import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';
export interface IIntrinsic {
    readonly kind: 'intrinsic';
    readonly target: IResource | IParameter;
}
export declare function Ref(t: ITemplate, target: IResource | IParameter | string): IIntrinsic;
