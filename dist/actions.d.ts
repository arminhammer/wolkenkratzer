import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IOutput } from './elements/output';
export declare function add(t: ITemplate, e: IElement): ITemplate;
export declare function remove(t: ITemplate, e: IElement | string): ITemplate;
export declare function wipe(t: ITemplate, category: string): ITemplate;
export declare type Jsonifiable = IOutput;
export declare function build(t: ITemplate): object;
export declare function json(t: ITemplate): string;
