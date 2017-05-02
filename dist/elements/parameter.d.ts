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
export declare function Parameter(params?: IParameter): IParameter;
