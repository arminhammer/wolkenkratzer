// @flow

export interface IResourceMetadata {
  +kind: 'ResourceMetadata',
  +Resource: string,
  +Content: mixed
}

export function ResourceMetadata(
  resource: string,
  content: mixed
): IResourceMetadata {
  if (!resource || !content) {
    throw new SyntaxError(
      `New Metadata must have content, ${JSON.stringify(content)} is invalid.`
    );
  }
  return { kind: 'ResourceMetadata', Resource: resource, Content: content };
}
