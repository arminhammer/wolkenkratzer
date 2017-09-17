import { ICreationPolicy } from '../types';

export function CreationPolicy(resource: string, content): ICreationPolicy {
  if (
    !resource ||
    !content ||
    (!content.AutoScalingCreationPolicy && !content.ResourceSignal)
  ) {
    throw new SyntaxError(
      `New CreationPolicy must have content, ${JSON.stringify(
        content
      )} is invalid.`
    );
  }
  return { kind: 'CreationPolicy', Resource: resource, Content: content };
}
