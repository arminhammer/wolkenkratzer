export interface IResource {
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
}
export declare function Resource(name: string, properties: object): IResource;
