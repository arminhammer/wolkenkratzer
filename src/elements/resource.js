// @flow

import { ICreationPolicy } from '../attributes/creationpolicy';

export interface IResource {
  +kind: 'Resource',
  +Name: string,
  +Type: string,
  +Properties: mixed,
  +Condition?: string,
  +CreationPolicy?: ICreationPolicy
}

export function Resource(
  name: string,
  properties: mixed,
  options: mixed
): IResource {
  if (!name) {
    throw new SyntaxError(`New Resource is invalid. A Name is required.`);
  }
  if (properties) {
    _validateProperties(properties, this.name, this.json);
  }
  const result = {
    kind: 'Resource',
    Name: name,
    Type: this.json.Resources[this.name].Name,
    Properties: properties
  };
  if (options && options.Condition) {
    result.Condition = options.Condition;
  }
  return result;
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

function _validateProperties(properties: mixed, rType: string, model: mixed) {
  //Check if keys other than the defined ones are present
  Object.keys(properties).map(p => {
    if (!model.Resources[rType].Properties[p]) {
      throw new SyntaxError(`${p} is not a valid attribute of ${rType}`);
    }
  });
  // Check if all of the required keys are present
  Object.keys(model.Resources[rType].Properties).map(p => {
    if (model.Resources[rType].Properties[p].Required === 'Yes') {
      if (!properties[p]) {
        throw new SyntaxError(
          `${p} is required but is not present in ${rType}`
        );
      }
    }
    if (model.Resources[rType].Properties[p].Array) {
      if (properties[p] && !Array.isArray(properties[p])) {
        if (
          !properties[p].kind &&
          properties[p].kind !== 'FnGetAtt' &&
          !properties[p]['Fn::GetAtt']
        ) {
          throw new SyntaxError(`${p} must be an array in ${rType}`);
        }
      }
    } else {
      if (properties[p] && Array.isArray(properties[p])) {
        throw new SyntaxError(`${p} cannot be an array in ${rType}`);
      }
    }
  });
}
