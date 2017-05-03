import { IIntrinsic } from '../intrinsic';

export interface IOutput {
    readonly kind: 'output';
    readonly Name: string;
    readonly Description?: string;
    readonly Value: IIntrinsic | string;
    readonly Export?: {
        Name: string
    };
}

export function Output(params: IOutput = {} as IOutput): IOutput {
    if (!params.Name || !params.Value) {
        throw new SyntaxError(`New Output with ${JSON.stringify(params)} parameters is invalid. Name and Value are required.`);
    }
    const defaultP = { kind: 'output' };
    const mix = { ...defaultP, ...params };
    return mix;
}
