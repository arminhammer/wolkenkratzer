"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ref(t, target) {
    let result = Object.assign({}, t);
    let element;
    if (typeof target === 'string') {
        let parameter = result.Parameters.find(p => { return p.Name === target; });
        if (parameter) {
            element = parameter;
        }
        else {
            let resource = result.Resources.find(r => { return r.Name === target; });
            if (resource) {
                element = resource;
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
            let parameter = result.Parameters.indexOf(element);
            if (parameter !== -1) {
                return { kind: 'intrinsic', target: result.Parameters[parameter] };
            }
            break;
        case 'resource':
            let resource = result.Resources.indexOf(element);
            if (resource !== -1) {
                return { kind: 'intrinsic', target: result.Resources[resource] };
            }
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
}
exports.Ref = Ref;
