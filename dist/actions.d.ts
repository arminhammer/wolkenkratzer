import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IParameter } from './elements/parameter';
import { IOutput } from './elements/output';
export declare function add(t: ITemplate, e: IElement): ITemplate;
export declare function remove(t: ITemplate, e: IElement | string): ITemplate;
export declare function wipe(t: ITemplate, category: string): {
    readonly kind: "template";
    readonly Parameters: IParameter[];
    readonly Outputs: IOutput[];
};
export declare type Jsonifiable = ITemplate | IParameter | IOutput;
export declare function json(t: Jsonifiable): string;
