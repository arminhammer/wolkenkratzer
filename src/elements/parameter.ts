export interface IParameter {
    readonly kind: 'parameter';
    readonly Name: string;
    readonly Type: string;
    readonly AllowedPattern?: string;
    readonly AllowedValues?: string;
    readonly ConstraintDescription?: string;
    readonly Default?: string;
    readonly Description?: string;
    readonly MaxLength?: string;
    readonly MaxValue?: string;
    readonly MinLength?: string;
    readonly MinValue?: string;
    readonly NoEcho?: string;
}

export function Parameter(params: IParameter = {} as IParameter): IParameter {
    if (!params.Name || !params.Type) {
        throw new SyntaxError(`New Parameter with ${JSON.stringify(params)} parameters is invalid. Name and Type are required.`);
    }
    const defaultP = { kind: 'parameter' };
    const mix = { ...defaultP, ...params };
    return mix;
}
