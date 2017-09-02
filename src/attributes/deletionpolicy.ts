export interface IDeletionPolicy {
  readonly kind: 'DeletionPolicy';
  readonly Resource: string;
  readonly Content: 'Delete' | 'Retain' | 'Snapshot';
}

export function DeletionPolicy(
  resource: string,
  content: 'Delete' | 'Retain' | 'Snapshot'
): IDeletionPolicy {
  if (!resource || !content) {
    throw new SyntaxError(
      `New DeletionPolicy must have content, ${JSON.stringify(
        content
      )} is invalid.`
    );
  }
  if (['Delete', 'Retain', 'Snapshot'].indexOf(content) === -1) {
    throw new SyntaxError(
      `New DeletionPolicy content must be Delete, Retain, or Snapshot`
    );
  }
  return { kind: 'DeletionPolicy', Resource: resource, Content: content };
}
