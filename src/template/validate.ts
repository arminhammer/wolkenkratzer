import * as stubs from '../spec/spec';
import { IFnGetAtt, IRef, IResource, ITemplate } from '../types';

/**
 * @hidden
 * @param t
 * @param att
 */
function _validateFnGetAtt(t: ITemplate, att: IFnGetAtt): void | SyntaxError {
  if (!t.Resources[att.FnGetAtt[0]]) {
    throw new SyntaxError(`Could not find ${JSON.stringify(att)}`);
  }
  const [begin, service, resource] = t.Resources[att.FnGetAtt[0]].Type.split(
    '::'
  );
  if (begin === 'AWS' && stubs[service]) {
    const validAttributes = Object.keys(
      stubs[service].Resources[resource].Attributes
    );
    if (!validAttributes.includes(att.FnGetAtt[1])) {
      throw new SyntaxError(`${att.FnGetAtt[1]} is not a valid attribute of 
        ${att.FnGetAtt[0]}`);
    }
  }
}

/**
 * @hidden
 * @param t
 * @param ref
 */
function _validateRef(t: ITemplate, ref: IRef): void | SyntaxError {
  if (ref.Ref) {
    if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
      throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);
    }
  }
  return;
}

/**
 * @hidden
 */
function _validateResourceIntrinsics(
  t: ITemplate,
  e: IResource | any
): void | SyntaxError {
  if (e) {
    Object.keys(e).forEach(x => {
      if (
        e[x] &&
        typeof e[x] !== 'string' &&
        (Array.isArray(e[x]) || Object.keys(e[x]).length > 0)
      ) {
        if (e[x].kind) {
          if (e[x].kind === 'FnGetAtt') {
            _validateFnGetAtt(t, e[x]);
          } else if (e[x].kind === 'Ref') {
            _validateRef(t, e[x]);
          }
        } else {
          _validateResourceIntrinsics(t, e[x]);
        }
      }
    });
  }
}

export { _validateFnGetAtt, _validateRef, _validateResourceIntrinsics };
