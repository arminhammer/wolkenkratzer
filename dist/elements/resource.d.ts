export interface IResource {
    readonly kind: 'Resource';
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
}
export declare function Resource(name: string, properties: object): IResource;
export declare function CustomResource(name: string, properties: object): IResource;
