import { IParameter } from './elements/parameter';
import { IDescription } from './elements/description';
// import { IMetadata } from './elements/metadata';
// import { IMapping } from './elements/mapping';
// import { ICondition } from './elements/condition';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';

export interface ITemplate {
    readonly kind: 'template';
    readonly Description?: string;
    readonly Parameters: { [s: string]: IParameter };
    // readonly Metadata: { [s: string]: IMetadata };
    // readonly Mappings: { [s: string]: IMapping };
    // readonly Conditions: { [s: string]: ICondition };
    readonly Resources: Array<IResource>;
    readonly Outputs: { [s: string]: IOutput };
}

export function Template(): ITemplate {
    return {
        Outputs: {},
        Parameters: {},
        Resources: [],
        kind: 'template'
    };
}
