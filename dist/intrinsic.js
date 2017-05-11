"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
export function FnGetAtt(t: ITemplate, target: IResource | string, attr: string): IFnGetAtt {
    let result = { ...t };
    let element: IResource;
    if (typeof target === 'string') {
        if (result.Resources[target]) {
            return { 'Fn::GetAtt': [target, attr] };
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
        }
    }
    if (result.Resources[target.Name]) {
        return { 'Fn::GetAtt': [target.Name, attr] };
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(target)}`);
    }
}
*/
function FnGetAtt(target, attr) {
    if (typeof target === 'string') {
        return { kind: 'FnGetAtt', 'Fn::GetAtt': [target, attr] };
    }
    else {
        return { kind: 'FnGetAtt', 'Fn::GetAtt': [target.Name, attr] };
    }
}
exports.FnGetAtt = FnGetAtt;
function Ref(target) {
    if (typeof target === 'string') {
        return { kind: 'Ref', Ref: target };
    }
    else {
        return { kind: 'Ref', Ref: target.Name };
    }
}
exports.Ref = Ref;
function FnEquals(one, two) {
    return { kind: 'FnEquals', 'Fn::Equals': [one, two] };
}
exports.FnEquals = FnEquals;
/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/
