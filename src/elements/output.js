// @flow

import { IRef, IFnGetAtt } from '../intrinsic';

export interface IOutputProperties {
  +Description?: string,
  +Value: IRef | string,
  +Export?: {
    Name: string
  }
}

export interface IOutput {
  +kind: 'Output',
  +Name: string,
  +Properties: IOutputProperties
}

export function Output(name: string, properties: IOutputProperties): IOutput {
  if (!name || !properties || !properties.Value) {
    throw new SyntaxError(
      `New Output with ${JSON.stringify({
        name,
        properties
      })} parameters is invalid. Name and Value are required.`
    );
  }
  return { kind: 'Output', Name: name, Properties: properties };
}
