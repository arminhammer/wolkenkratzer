import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
    readonly target: IResource | IParameter;
}

export function Ref(t: ITemplate, target: IResource | IParameter | string): IRef {
    let result = { ...t };
    let element: IResource | IParameter;
    if (typeof target === 'string') {
        if (result.Parameters[target]) {
            element = result.Parameters[target];
        } else {
            if (result.Resources[target]) {
                element = result.Resources[target];
            } else {
                throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
            }
        }
    } else {
        element = target;
    }
    if (result.Parameters[element.Name]) {
        return { target: result.Parameters[element.Name] };
    } else if (result.Resources[element.Name]) {
        return { target: result.Resources[element.Name] };
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
