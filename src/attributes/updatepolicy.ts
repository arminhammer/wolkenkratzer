export interface IUpdatePolicy {
  readonly kind: 'UpdatePolicy';
  readonly Resource: string;
  readonly Content: {
    AutoScalingReplacingUpdate?: {
      WillReplace?: boolean;
    };
    AutoScalingRollingUpdate?: {
      MaxBatchSize?: number;
      MinInstancesInService?: number;
      MinSuccessfulInstancesPercent?: number;
      PauseTime?: string;
      SuspendProcesses?: Array<object>;
      WaitOnResourceSignals?: boolean;
    };
    AutoScalingScheduledAction?: {
      IgnoreUnmodifiedGroupSizeProperties?: boolean;
    };
  };
}

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
