export interface ICreationPolicy {
  readonly kind: 'CreationPolicy';
  readonly Resource: string;
  readonly Content: {
    readonly AutoScalingCreationPolicy?: {
      MinSuccessfulInstancesPercent: number;
    };
    readonly ResourceSignal?: {
      Count: number;
      Timeout: string;
    };
  };
}

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
