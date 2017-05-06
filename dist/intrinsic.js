"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ref(t, target) {
    let result = Object.assign({}, t);
    let element;
    if (typeof target === 'string') {
        if (result.Parameters[target]) {
            return { Ref: target };
        }
        else if (result.Resources[target]) {
            return { Ref: target };
        }
        else {
            throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
        }
    }
    if (result.Parameters[target.Name]) {
        return { Ref: target.Name };
    }
    else if (result.Resources[target.Name]) {
        return { Ref: target.Name };
    }
    else {
        throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
    }
}
exports.Ref = Ref;
/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
