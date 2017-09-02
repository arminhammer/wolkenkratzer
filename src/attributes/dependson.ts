export interface IDependsOn {
  readonly kind: 'DependsOn';
  readonly Resource: string;
  readonly Content: string | Array<string>;
}

export function DependsOn(
  resource: string,
  content: string | Array<string>
): IDependsOn {
  if (!resource || !content) {
    throw new SyntaxError(
      `New DependsOn must have content, ${JSON.stringify(content)} is invalid.`
    );
  }
  return { kind: 'DependsOn', Resource: resource, Content: content };
}
