export interface IMapping {
  readonly kind: 'Mapping';
  readonly Name: string;
  readonly Content: { [string]: any };
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
  body: { [string]: any }
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
