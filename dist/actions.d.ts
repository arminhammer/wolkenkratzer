import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IParameter } from './elements/parameter';
export declare function add(t: ITemplate, e: IElement): ITemplate;
export declare function remove(t: ITemplate, e: IElement | string): ITemplate;
export declare function wipe(t: ITemplate, category: string): {
    readonly kind: "template";
    readonly Parameters: IParameter[];
};
export declare type Jsonifiable = ITemplate | IParameter;
export declare function json(t: Jsonifiable): string;
