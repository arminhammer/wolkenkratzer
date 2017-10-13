/** Elements */
/**
 *
 *
 * @export
 * @interface IElement
 */
export interface ICondition {
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
    readonly Content: {
        [s: string]: any;
    };
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
    readonly Properties: any;
    readonly Condition?: string;
    readonly Metadata?: any;
    readonly CreationPolicy?: ICreationPolicy;
    readonly DeletionPolicy?: IDeletionPolicy;
    readonly DependsOn?: IDependsOn;
    readonly UpdatePolicy?: IUpdatePolicy;
}
export declare type IElement = ICondition | IParameter | IDescription | IOutput | IResource | ICondition | IMapping;
/** Attributes */
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
export interface IDeletionPolicy {
    readonly kind: 'DeletionPolicy';
    readonly Resource: string;
    readonly Content: 'Delete' | 'Retain' | 'Snapshot';
}
export interface IDependsOn {
    readonly kind: 'DependsOn';
    readonly Resource: string;
    readonly Content: string | string[];
}
export interface IResourceMetadata {
    readonly kind: 'ResourceMetadata';
    readonly Resource: string;
    readonly Content: any;
}
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
export declare type IAttribute = ICreationPolicy | IDeletionPolicy | IDependsOn | IResourceMetadata | IUpdatePolicy;
/** Intrinsic Functions */
export declare type Conditional = string | IRef | IFnGetAtt;
export declare type ConditionFunction = IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
export interface IRef {
    readonly kind: 'Ref';
    readonly Ref: string;
}
export interface IFnGetAtt {
    readonly kind: 'FnGetAtt';
    readonly FnGetAtt: Array<string>;
}
export interface IFnJoin {
    readonly kind: 'FnJoin';
    readonly Delimiter: string;
    readonly Values: Array<string | IFnGetAtt | IRef> | IFnGetAtt;
}
export interface IFnAnd {
    readonly kind: 'FnAnd';
    readonly FnAnd: Array<Conditional>;
}
export interface IFnEquals {
    readonly kind: 'FnEquals';
    readonly FnEquals: Array<Conditional>;
}
export interface IFnIf {
    readonly kind: 'FnIf';
    readonly FnIf: Array<Conditional>;
}
export interface IFnNot {
    readonly kind: 'FnNot';
    readonly FnNot: Array<Conditional>;
}
export interface IFnOr {
    readonly kind: 'FnOr';
    readonly FnOr: Array<Conditional>;
}
export declare type IIntrinsic = IRef | IFnGetAtt | IFnJoin | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr | ConditionFunction;
export interface IFnSub {
    readonly kind: 'FnSub';
    readonly FnSub: string;
}
export interface IFnBase64 {
    readonly kind: 'FnBase64';
    readonly FnBase64: string;
}
export interface IFnFindInMap {
    readonly kind: 'FnFindInMap';
    readonly FnFindInMap: Array<string>;
}
export interface IFnGetAZs {
    readonly kind: 'FnGetAZs';
    readonly FnGetAZs: string | IRef;
}
export interface IFnSelect {
    readonly kind: 'FnSelect';
    readonly index: number;
    readonly FnSelect: Array<string | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnSplit | IRef>;
}
export interface IFnImportValue {
    readonly kind: 'FnImportValue';
    readonly FnImportValue: string | IFnBase64 | IFnFindInMap | IFnIf | IFnJoin | IFnSelect | IFnSplit | IFnSub | IRef;
}
export interface IFnSplit {
    readonly kind: 'FnSplit';
    readonly delimiter: string;
    readonly value: string | IFnBase64 | IFnFindInMap | IFnGetAtt | IFnGetAZs | IFnIf | IFnJoin | IFnSelect | IRef;
}
/**
 * Internal
 */
export interface IService {
    Function?: any;
}
/**
 * Template Interface
 * @member Template
 */
export interface ITemplate {
    readonly kind: 'Template';
    readonly AWSTemplateFormatVersion: string;
    readonly Description?: void | string;
    readonly Parameters: {
        readonly [s: string]: IParameter;
    };
    readonly Mappings: {
        readonly [s: string]: IMapping;
    };
    readonly Conditions: {
        readonly [s: string]: ICondition;
    };
    readonly Resources: {
        readonly [s: string]: IResource;
    };
    readonly Outputs: {
        readonly [s: string]: IOutput;
    };
    readonly add: (e: IElement | ICreationPolicy | IResourceMetadata, options?: IAddOptions) => ITemplate;
    readonly remove: Function;
    readonly removeDescription: Function;
    readonly build: () => object;
    readonly merge: Function;
    readonly import: Function;
    readonly map: (iterable: Array<IElement>, mapFn: Function) => ITemplate;
    readonly yaml: () => string;
}
/**
 * IAddOptions Interface
 * @member Template
 */
export interface IAddOptions {
    Output: boolean;
    Parameters?: Array<string>;
}
