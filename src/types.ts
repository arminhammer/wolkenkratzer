import AWS = require('aws-sdk');

/** Elements */

/**
 * @hidden
 */
export interface ICondition /*extends IElement*/ {
  readonly kind: 'Condition';
  readonly Name: string;
  readonly Condition: IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
}

/**
 * @hidden
 */
export interface IDescription {
  readonly kind: 'Description';
  readonly Content: string;
}

/**
 * @hidden
 */
export interface IMapping {
  readonly kind: 'Mapping';
  readonly Name: string;
  readonly Content: { [s: string]: any };
}

/**
 * @hidden
 */
export interface IOutputProperties {
  readonly Description?: string;
  readonly Value: IRef | string;
  readonly Export?: {
    Name: IFnSub | IFnJoin | string;
  };
  readonly Condition?: string;
}

/**
 * @hidden
 */
export interface IOutput {
  readonly kind: 'Output';
  readonly Name: string;
  readonly Properties: IOutputProperties;
  readonly Condition?: string;
}

/**
 * @hidden
 */
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

/**
 * @hidden
 */
export interface IParameter {
  readonly kind: 'Parameter';
  readonly Name: string;
  readonly Properties: IParameterProperties;
}

/**
 * @hidden
 */
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

/**
 * @hidden
 */
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
 * @hidden
 */
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

/**
 * @hidden
 */
export interface IDeletionPolicy {
  readonly kind: 'DeletionPolicy';
  readonly Resource: string;
  readonly Content: 'Delete' | 'Retain' | 'Snapshot';
}

/**
 * @hidden
 */
export interface IDependsOn {
  readonly kind: 'DependsOn';
  readonly Resource: string;
  readonly Content: string | string[];
}

/**
 * @hidden
 */
export interface IResourceMetadata {
  readonly kind: 'ResourceMetadata';
  readonly Resource: string;
  readonly Content;
}

/**
 * @hidden
 */
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

/**
 * @hidden
 */
export type IAttribute =
  | ICreationPolicy
  | IDeletionPolicy
  | IDependsOn
  | IResourceMetadata
  | IUpdatePolicy;

/** Intrinsic Functions */

/**
 * @hidden
 */
export type Conditional = string | IRef | IFnGetAtt;
/**
 * @hidden
 */
export type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;

/**
 * @hidden
 */
export interface IRef {
  readonly kind: 'Ref';
  readonly Ref: string;
}

/**
 * @hidden
 */
export interface IFnGetAtt {
  readonly kind: 'FnGetAtt';
  readonly FnGetAtt: Array<string>;
}

/**
 * @hidden
 */
export interface IFnJoin {
  readonly kind: 'FnJoin';
  readonly Delimiter: string;
  readonly Values: Array<string | IFnGetAtt | IRef> | IFnGetAtt;
}

/**
 * @hidden
 */
export interface IFnAnd {
  readonly kind: 'FnAnd';
  readonly FnAnd: Array<Conditional>;
}

/**
 * @hidden
 */
export interface IFnEquals {
  readonly kind: 'FnEquals';
  readonly FnEquals: Array<Conditional>;
}

/**
 * @hidden
 */
export interface IFnIf {
  readonly kind: 'FnIf';
  readonly FnIf: Array<Conditional>;
}

/**
 * @hidden
 */
export interface IFnNot {
  readonly kind: 'FnNot';
  readonly FnNot: Array<Conditional>;
}

/**
 * @hidden
 */
export interface IFnOr {
  readonly kind: 'FnOr';
  readonly FnOr: Array<Conditional>;
}

// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
/**
 * @hidden
 */
export type IIntrinsic =
  | IRef
  | IFnGetAtt
  | IFnJoin
  | IFnAnd
  | IFnEquals
  | IFnIf
  | IFnNot
  | IFnOr
  | ConditionFunction;

/**
 * @hidden
 */
export interface IFnSub {
  readonly kind: 'FnSub';
  readonly FnSub: string;
}

/**
 * @hidden
 */
export interface IFnBase64 {
  readonly kind: 'FnBase64';
  readonly FnBase64: string;
}

/**
 * @hidden
 */
export interface IFnFindInMap {
  readonly kind: 'FnFindInMap';
  readonly FnFindInMap: Array<string>;
}

/**
 * @hidden
 */
export interface IFnGetAZs {
  readonly kind: 'FnGetAZs';
  readonly FnGetAZs: string | IRef;
}

/**
 * @hidden
 */
export interface IFnSelect {
  readonly kind: 'FnSelect';
  readonly index: number;
  readonly FnSelect: Array<
    string | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnSplit | IRef
  >;
}

/**
 * @hidden
 */
export interface IFnImportValue {
  readonly kind: 'FnImportValue';
  readonly FnImportValue:
    | string
    | IFnBase64
    | IFnFindInMap
    | IFnIf
    | IFnJoin
    | IFnSelect
    | IFnSplit
    | IFnSub
    | IRef;
}

/**
 * @hidden
 */
export interface IFnSplit {
  readonly kind: 'FnSplit';
  readonly delimiter: string;
  readonly value:
    | string
    | IFnBase64
    | IFnFindInMap
    | IFnGetAtt
    | IFnGetAZs
    | IFnIf
    | IFnJoin
    | IFnSelect
    | IRef;
}

/**
 * Internal
 */

/**
 * @hidden
 */
export type TransformFunctionType = (
  name: string,
  AWSClient: any,
  logical?: string
) => Promise<IResource>;

/**
 * @hidden
 */
export type TransformListFunctionType = (
  AWSClient: any
) => Promise<IResource[]>;

/**
 * @hidden
 */
export interface IService {
  Function?: any;
}

/**
 * @hidden
 */
export interface ITemplate {
  readonly kind: 'Template';
  readonly AWSTemplateFormatVersion: string;
  readonly Description?: void | string;
  readonly Parameters: { readonly [s: string]: IParameter };
  // readonly Metadata: { readonly [s: string]: IMetadata };
  readonly Mappings: { readonly [s: string]: IMapping };
  readonly Conditions: { readonly [s: string]: ICondition };
  readonly Resources: { readonly [s: string]: IResource };
  readonly Outputs: { readonly [s: string]: IOutput };
  readonly add: (
    e: IElement | ICreationPolicy | IResourceMetadata,
    options?: IAddOptions
  ) => ITemplate;
  readonly remove: Function;
  readonly removeDescription: Function;
  readonly build: () => object;
  readonly merge: Function;
  readonly import: Function;
  readonly has: Function;
  readonly parameterize: Function;
  readonly putOut: Function;
  readonly set: Function;
  readonly yaml: () => string;
}

/**
 * @hidden
 */
export interface IAddOptions {
  Output: boolean;
  Parameters?: Array<string>;
}
