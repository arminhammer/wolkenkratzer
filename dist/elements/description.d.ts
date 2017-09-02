export interface IDescription {
    readonly kind: 'Description';
    readonly Content: string;
}
/**
 * Set the Description of a template
 * @param {*} content
 */
export declare function Description(content: string): IDescription;
