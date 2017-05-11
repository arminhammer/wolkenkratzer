export interface IDescription {
    readonly kind: 'Description';
    readonly Content: string;
}

export function Description(params: IDescription = {} as IDescription): IDescription {
    if (!params.Content) {
        throw new SyntaxError(`New Description must have a Content.`);
    }
    const defaultP = { kind: 'Description' };
    const mix = { ...defaultP, ...params };
    return mix;
}
