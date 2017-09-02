export interface IDependsOn {
    readonly kind: 'DependsOn';
    readonly Resource: string;
    readonly Content: string | Array<string>;
}
export declare function DependsOn(resource: string, content: string | Array<string>): IDependsOn;
