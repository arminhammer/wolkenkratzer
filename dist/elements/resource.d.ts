import { ICreationPolicy } from '../attributes/creationpolicy';
export interface IResource {
    readonly kind: 'Resource';
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
    readonly Condition?: string;
    readonly Metadata?: any;
    readonly CreationPolicy?: ICreationPolicy;
}
/**
 * Create a Resource object
 * @param {*} name
 * @param {*} properties
 * @param {*} options
 */
export declare function Resource(name: string, properties: any, options: any): IResource;
export declare function CustomResource(name: string, properties: any): IResource;
