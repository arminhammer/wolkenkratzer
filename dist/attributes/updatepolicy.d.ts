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
export declare function UpdatePolicy(resource: string, content: any): IUpdatePolicy;
