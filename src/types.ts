import {
  IFnAnd,
  IFnEquals,
  IFnIf,
  IFnJoin,
  IFnNot,
  IFnOr,
  IFnSub,
  IRef
} from './intrinsic';

/** Elements */

/**
 * 
 * 
 * @export
 * @interface IElement
 */
/*export interface IElement {
  readonly kind: string;
}*/

export interface ICondition /*extends IElement*/ {
  readonly kind: 'Condition';
  readonly Name: string;
  readonly Condition: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
}

export interface IDescription {
  readonly kind: 'Description';
  readonly Content: string;
}

export interface IMapping {
  readonly kind: 'Mapping';
  readonly Name: string;
  readonly Content: { [s: string]: any };
}

export interface IOutputProperties {
  readonly Description?: string;
  readonly Value: IRef | string;
  readonly Export?: {
    Name: IFnSub | IFnJoin | string;
  };
  readonly Condition?: string;
}

export interface IOutput {
  readonly kind: 'Output';
  readonly Name: string;
  readonly Properties: IOutputProperties;
  readonly Condition?: string;
}

export interface IParameterProperties {
  readonly Type: string;
  readonly AllowedPattern?: string;
  readonly AllowedValues?: string;
  readonly ConstraintDescription?: string;
  readonly Default?: string;
  readonly Description?: string;
  readonly MaxLength?: string;
  readonly MaxValue?: string;
  readonly MinLength?: string;
  readonly MinValue?: string;
  readonly NoEcho?: string;
}

export interface IParameter {
  readonly kind: 'Parameter';
  readonly Name: string;
  readonly Properties: IParameterProperties;
}

export interface IResource {
  readonly kind: 'Resource';
  readonly Name: string;
  readonly Type: string;
  readonly Properties;
  readonly Condition?: string;
  readonly Metadata?: any;
  readonly CreationPolicy?: ICreationPolicy;
  readonly DeletionPolicy?: IDeletionPolicy;
  readonly DependsOn?: IDependsOn;
  readonly UpdatePolicy?: IUpdatePolicy;
}

export type IElement =
  | ICondition
  | IParameter
  | IDescription
  | IOutput
  | IResource
  | ICondition
  | IMapping;

/** Attributes */

/**
 * 
 * 
 * @export
 * @interface IAttribute
 */
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
