import { IDependsOn } from '../types';

export function DependsOn(
  resource: string,
  content: string | string[]
): IDependsOn {
  if (!resource || !content) {
    throw new SyntaxError(
      `New DependsOn must have content, ${JSON.stringify(content)} is invalid.`
    );
  }
  return { kind: 'DependsOn', Resource: resource, Content: content };
}
