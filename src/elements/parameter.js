// @flow

export interface IParameterProperties {
  +Type: string,
  +AllowedPattern?: string,
  +AllowedValues?: string,
  +ConstraintDescription?: string,
  +Default?: string,
  +Description?: string,
  +MaxLength?: string,
  +MaxValue?: string,
  +MinLength?: string,
  +MinValue?: string,
  +NoEcho?: string
}

export interface IParameter {
  +kind: 'Parameter',
  +Name: string,
  +Properties: IParameterProperties
}

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
