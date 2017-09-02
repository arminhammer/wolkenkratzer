export interface IMapping {
    readonly kind: 'Mapping';
    readonly Name: string;
    readonly Content: {
        [s: string]: any;
    };
}
/**
 * Create a Mapping object
 * @param {*} name
 * @param {*} subName
 * @param {*} body
 */
export declare function Mapping(name: string, subName: string, body: {
    [s: string]: any;
}): IMapping;
