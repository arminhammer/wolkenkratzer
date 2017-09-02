export interface IResourceMetadata {
    readonly kind: 'ResourceMetadata';
    readonly Resource: string;
    readonly Content: any;
}
export declare function ResourceMetadata(resource: string, content: any): IResourceMetadata;
