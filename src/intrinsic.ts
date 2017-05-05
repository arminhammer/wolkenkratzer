import { IResource } from './elements/resource';
import { IParameter } from './elements/parameter';
import { ITemplate } from './template';

export interface IRef {
    readonly kind: 'ref';
    readonly target: IResource | IParameter;
}

export function Ref(t: ITemplate, target: IResource | IParameter | string): IRef {
    let result = { ...t };
    let element: IResource | IParameter;
    if (typeof target === 'string') {
        let parameter: IParameter | undefined = result.Parameters[target]; // .find(p => { return p.Name === target; });
        if (parameter) {
            element = parameter;
        } else {
            let resource: IResource | undefined = result.Resources.find(r => { return r.Name === target; });
            if (resource) {
                element = resource;
            } else {
                throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
            }
        }
    } else {
        element = target;
    }
    switch (element.kind) {
        case 'parameter':
            let parameter = result.Parameters[element.Name]; // .indexOf(element);
            if (parameter) {
                return { kind: 'ref', target: result.Parameters[element.Name] };
            }
            break;
        case 'resource':
            let resource = result.Resources.indexOf(element);
            if (resource !== -1) {
                return { kind: 'ref', target: result.Resources[resource] };
            }
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
