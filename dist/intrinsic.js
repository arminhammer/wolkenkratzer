"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ref(t, target) {
    let result = Object.assign({}, t);
    let element;
    if (typeof target === 'string') {
        if (result.Parameters[target]) {
            element = result.Parameters[target];
        }
        else {
            if (result.Resources[target]) {
                element = result.Resources[target];
            }
            else {
                throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
            }
        }
    }
    else {
        element = target;
    }
    switch (element.kind) {
        case 'parameter':
            if (result.Parameters[element.Name]) {
                return { kind: 'ref', target: result.Parameters[element.Name] };
            }
            break;
        case 'resource':
            if (result.Resources[element.Name]) {
                return { kind: 'ref', target: result.Resources[element.Name] };
            }
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
}
exports.Ref = Ref;
/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
