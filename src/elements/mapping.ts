import { IMapping } from '../types';

/**
 * Create a Mapping object
 * @param {*} name 
 * @param {*} subName 
 * @param {*} body 
 */
export function Mapping(
  name: string,
  subName: string,
  body: { [s: string]: any }
): IMapping {
  if (!name || !subName || !body) {
    throw new SyntaxError(
      `New Mapping with ${JSON.stringify({
        body,
        name,
        subName
      })} parameters is invalid. name, subName, and body are required.`
    );
  }
  return { kind: 'Mapping', Name: name, Content: { [subName]: body } };
}
