import { ICreationPolicy } from './attributes/creationpolicy';
import { IDeletionPolicy } from './attributes/deletionpolicy';
import { IDependsOn } from './attributes/dependson';
import { IResourceMetadata } from './attributes/metadata';
import { IUpdatePolicy } from './attributes/updatepolicy';
import { ICondition } from './elements/condition';
import { IElement } from './elements/element';
import { IMapping } from './elements/mapping';
import { IOutput } from './elements/output';
import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IFnAnd, IFnEquals, IFnFindInMap, IFnGetAtt, IFnIf, IFnJoin, IFnNot, IFnOr, IFnSub, IRef } from './intrinsic';
/** @module Template */
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
}
/**
 * IAddOptions Interface
 * @member Template
 */
export interface IAddOptions {
    Output: boolean;
    Parameters?: Array<string>;
}
/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
export declare function Template(): ITemplate;
export declare function _json(t: IElement | IFnAnd | IFnFindInMap | IRef | IFnGetAtt | IFnJoin | IFnSub | ICreationPolicy | IDeletionPolicy | IDependsOn | IFnEquals | IFnIf | IFnNot | IFnOr | IResourceMetadata | IUpdatePolicy): any;
