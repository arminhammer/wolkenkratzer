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
export declare function CreationPolicy(resource: string, content: any): ICreationPolicy;
