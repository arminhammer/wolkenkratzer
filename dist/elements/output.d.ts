import { IIntrinsic } from '../intrinsic';
export interface IOutput {
    readonly kind: 'output';
    readonly Name: string;
    readonly Description?: string;
    readonly Value: IIntrinsic | string;
    readonly Export?: {
        Name: string;
    };
}
export declare function Output(params?: IOutput): IOutput;
