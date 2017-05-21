// @flow

import { ICreationPolicy } from '../attributes/creationpolicy';

export interface IResource {
  +kind: 'Resource',
  +Name: string,
  +Type: string,
  +Properties: mixed,
  +CreationPolicy?: ICreationPolicy
}

export function Resource(name: string, properties: mixed): IResource {
  if (!name) {
    throw new SyntaxError(`New Resource is invalid. A Name is required.`);
  }
  return {
    kind: 'Resource',
    Name: name,
    Type: this.json[this.name].Name,
    Properties: properties
  };
}

export function CustomResource(name: string, properties: mixed): IResource {
  if (!name) {
    throw new SyntaxError(`New Resource is invalid. A Name is required.`);
  }
  return {
    kind: 'Resource',
    Name: name,
    Type: `Custom::${name}`,
    Properties: properties
  };
}
