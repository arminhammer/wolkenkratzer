import { IUpdatePolicy } from '../types';

export function UpdatePolicy(resource: string, content): IUpdatePolicy {
  if (!resource || !content) {
    throw new SyntaxError(
      `New UpdatePolicy must have content, ${JSON.stringify(
        content
      )} is invalid.`
    );
  }
  return { kind: 'UpdatePolicy', Resource: resource, Content: content };
}
