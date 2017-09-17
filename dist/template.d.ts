import { ICreationPolicy, IDeletionPolicy, IDependsOn, IFnAnd, IFnBase64, IFnEquals, IFnFindInMap, IFnGetAtt, IFnGetAZs, IFnIf, IFnImportValue, IFnJoin, IFnNot, IFnOr, IFnSelect, IFnSplit, IFnSub, IRef, IElement, IResourceMetadata, ITemplate, IUpdatePolicy } from './types';
/** @module Template */
/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
export declare function Template(): ITemplate;
export declare function _json(t: IElement | IFnAnd | IFnBase64 | IFnFindInMap | IRef | IFnGetAtt | IFnGetAZs | IFnImportValue | IFnJoin | IFnSelect | IFnSplit | IFnSub | ICreationPolicy | IDeletionPolicy | IDependsOn | IFnEquals | IFnIf | IFnNot | IFnOr | IResourceMetadata | IUpdatePolicy): any;
