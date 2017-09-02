export interface IDeletionPolicy {
    readonly kind: 'DeletionPolicy';
    readonly Resource: string;
    readonly Content: 'Delete' | 'Retain' | 'Snapshot';
}
export declare function DeletionPolicy(resource: string, content: 'Delete' | 'Retain' | 'Snapshot'): IDeletionPolicy;
