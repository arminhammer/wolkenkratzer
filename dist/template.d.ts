import { IParameter } from './elements/parameter';
import { IMapping } from './elements/mapping';
import { ICondition } from './elements/condition';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
import { IElement } from './elements/element';
import { ICreationPolicy } from './attributes/creationpolicy';
import { IResourceMetadata } from './attributes/metadata';
import { IRef, IFnGetAtt, IFnJoin, IFnAnd, IFnEquals, IFnFindInMap, IFnIf, IFnNot, IFnOr, IFnSub } from './intrinsic';
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
    readonly add: Function;
    readonly remove: Function;
    readonly removeDescription: Function;
    readonly build: Function;
    readonly merge: Function;
    readonly import: Function;
    readonly map: Function;
}
/**
 * IAddOptions Interface
 * @member Template
 */
export interface IAddOptions {
    Output: boolean;
    Parameters: Array<string>;
}
/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
export declare function Template(): ITemplate;
export declare function _json(t: IElement | IFnAnd | IFnFindInMap | IRef | IFnGetAtt | IFnJoin | IFnSub | ICreationPolicy | IFnEquals | IFnIf | IFnNot | IFnOr | IResourceMetadata): any;
