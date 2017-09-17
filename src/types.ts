import { ICondition } from './elements/condition';
import { IDescription } from './elements/description';
import { IMapping } from './elements/mapping';
import { IOutput } from './elements/output';
import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';

export type IElement =
  | IParameter
  | IDescription
  | IOutput
  | IResource
  | ICondition
  | IMapping;

export interface IAttribute {}

export interface ICreationPolicy extends IAttribute {
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

export interface IDeletionPolicy extends IAttribute {
  readonly kind: 'DeletionPolicy';
  readonly Resource: string;
  readonly Content: 'Delete' | 'Retain' | 'Snapshot';
}

export interface IDependsOn extends IAttribute {
  readonly kind: 'DependsOn';
  readonly Resource: string;
  readonly Content: string | string[];
}

export interface IResourceMetadata extends IAttribute {
  readonly kind: 'ResourceMetadata';
  readonly Resource: string;
  readonly Content;
}

export interface IUpdatePolicy extends IAttribute {
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
