import { IFnJoin, IFnSub, IRef } from '../intrinsic';
export interface IOutputProperties {
    readonly Description?: string;
    readonly Value: IRef | string;
    readonly Export?: {
        Name: IFnSub | IFnJoin | string;
    };
    readonly Condition?: string;
}
export interface IOutput {
    readonly kind: 'Output';
    readonly Name: string;
    readonly Properties: IOutputProperties;
    readonly Condition?: string;
}
/**
 * Creatr an Output object
 * @param {*} name
 * @param {*} properties
 */
export declare function Output(name: string, properties: IOutputProperties): IOutput;
