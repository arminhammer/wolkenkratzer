'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FnGetAtt = FnGetAtt;
exports.Ref = Ref;
exports.FnJoin = FnJoin;
exports.FnEquals = FnEquals;

var _resource = require('./elements/resource');

var _parameter = require('./elements/parameter');

var _template = require('./template');

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

// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
function FnGetAtt(target, attr) {
  if (typeof target === 'string') {
    return { kind: 'FnGetAtt', FnGetAtt: [target, attr] };
  } else {
    return { kind: 'FnGetAtt', FnGetAtt: [target.Name, attr] };
  }
}

function Ref(target) {
  if (typeof target === 'string') {
    return { kind: 'Ref', Ref: target };
  } else {
    return { kind: 'Ref', Ref: target.Name };
  }
}

function FnJoin(delimiter, values) {
  return { kind: 'FnJoin', Delimiter: delimiter, Values: values };
}

function FnEquals(one, two) {
  return { kind: 'FnEquals', FnEquals: [one, two] };
}

/*
export function FnAnd(t: ITemplate): IIntrinsic { }
export function FnEquals(t: ITemplate): IIntrinsic { }
export function FnIf(t: ITemplate): IIntrinsic { }
export function FnNot(t: ITemplate): IIntrinsic { }
export function FnOr(t: ITemplate): IIntrinsic { }
*/