import { cloneDeep, omit } from 'lodash';
import { IMapping, IOutput, IParameter, IResource, ITemplate } from '../types';

/**
 * @hidden
 * @param t
 * @param e
 */
function _remove(
  t: ITemplate,
  e: IMapping | IResource | IParameter | IOutput
): ITemplate {
  const result = { ...t };
  const block = `${e.kind}s`;
  if (result[block][e.Name]) {
    result[block] = omit(result[block], e.Name);
  } else {
    throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
  }
  return result;
}

export { _remove };
