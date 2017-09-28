import { IParameter, IParameterProperties } from '../types';

/**
 * Create a Parameter object
 * @param {*} name 
 * @param {*} properties 
 */
export function Parameter(
  name: string,
  properties: IParameterProperties
): IParameter {
  if (!name || !properties || !properties.Type) {
    throw new SyntaxError(
      `New Parameter with ${JSON.stringify({
        name,
        properties
      })} parameters is invalid. Name and Type are required.`
    );
  }

  return { kind: 'Parameter', Name: name, Properties: properties };
}
