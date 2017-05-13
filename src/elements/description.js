// @flow

export interface IDescription {
  +kind: 'Description',
  +Content: string
}

export function Description(params: IDescription): IDescription {
  if (!params || !params.Content) {
    throw new SyntaxError(`New Description must have a Content.`);
  }
  const defaultP = { kind: 'Description' };
  const mix = { ...defaultP, ...params };
  return mix;
}
