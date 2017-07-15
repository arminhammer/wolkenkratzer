// @flow

export interface IMapping {
  +kind: 'Mapping',
  +Name: string,
  +Content: { [string]: mixed }
}

/**
 * Create a Mapping object
 * @param {*} name 
 * @param {*} subName 
 * @param {*} body 
 */
export function Mapping(
  name: string,
  subName: string,
  body: { [string]: mixed }
): IMapping {
  if (!name || !subName || !body) {
    throw new SyntaxError(
      `New Mapping with ${JSON.stringify({
        name,
        subName,
        body
      })} parameters is invalid. name, subName, and body are required.`
    );
  }
  return { kind: 'Mapping', Name: name, Content: { [subName]: body } };
}
