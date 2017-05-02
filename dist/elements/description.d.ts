export interface IDescription {
    readonly kind: 'description';
    readonly Content: string;
}
export declare function Description(params?: IDescription): IDescription;
