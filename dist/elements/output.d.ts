import { IRef } from '../intrinsic';
export interface IOutputProperties {
    readonly Description?: string;
    readonly Value: IRef | string;
    readonly Export?: {
        Name: string;
    };
}
export interface IOutput {
    readonly kind: 'output';
    readonly Name: string;
    readonly Properties: IOutputProperties;
}
export declare function Output(name: string, properties?: IOutputProperties): IOutput;
