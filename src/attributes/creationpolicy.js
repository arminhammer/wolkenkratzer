// @flow

export interface ICreationPolicy {
  +kind: 'CreationPolicy',
  +Resource: string,
  +Content: {
    +AutoScalingCreationPolicy?: {
      MinSuccessfulInstancesPercent: number
    },
    +ResourceSignal?: {
      Count: number,
      Timeout: string
    }
  }
}

export function CreationPolicy(
  resource: string,
  content: mixed
): ICreationPolicy {
  if (
    !resource ||
    !content ||
    (!content.AutoScalingCreationPolicy && !content.ResourceSignal)
  ) {
    throw new SyntaxError(
      `New CreationPolicy must have content, ${JSON.stringify(content)} is invalid.`
    );
  }
  return { kind: 'CreationPolicy', Resource: resource, Content: content };
}
