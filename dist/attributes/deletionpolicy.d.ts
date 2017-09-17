import { IDeletionPolicy } from '../types';
export declare function DeletionPolicy(resource: string, content: 'Delete' | 'Retain' | 'Snapshot'): IDeletionPolicy;
