import { IResourceMetadata } from '../types';

export function ResourceMetadata(resource: string, content): IResourceMetadata {
  if (!resource || !content) {
    throw new SyntaxError(
      `New Metadata must have content, ${JSON.stringify(content)} is invalid.`
    );
  }
  return { kind: 'ResourceMetadata', Resource: resource, Content: content };
}
