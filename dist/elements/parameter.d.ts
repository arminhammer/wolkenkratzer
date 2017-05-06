export interface IParameterProperties {
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
export interface IParameter {
    readonly Name: string;
    readonly Properties: IParameterProperties;
}
export declare function Parameter(name: string, properties?: IParameterProperties): IParameter;
