'use strict';

import { ValueException, TypeException } from './exceptions';
import { Mapping } from './mapping';
import { Output } from './output';
import { Parameter } from './parameter';
const WKResource = require('./resource').WKResource;
const path = require('path');
const yaml = require('js-yaml');
const Service = require('./service');

/** @module Core */

function _handleDuplicateKey(key: string) {
  console.log('Duplicate key ' + key);
  throw new ValueException(`duplicate key ${key} detected`);
}

// TODO fix any
function _add(d: any, values: any) {
  if (Array.isArray(values)) {
    values.forEach(v => {
      if (v.WKName in d) {
        _handleDuplicateKey(v.WKName);
      }
      d[v.WKName] = v;
    });
  } else {
    if (values.WKName in d) {
      _handleDuplicateKey(values.WKName);
    }
    d[values.WKName] = values;
  }
  return values;
}

// TODO fix anys
function _remove(d: any, values: any) {
  if (Array.isArray(values)) {
    values.forEach(v => {
      delete d[v.WKName];
    });
  } else {
    delete d[values.WKName];
  }
  return values;
}

function _populateFromExisting(newTemplate: any, existingTemplate: any) {
  for (let param in existingTemplate.Parameters) {
    let newParam = new Parameter(param, existingTemplate.Parameters[param]);
    newTemplate.add(newParam);
  }
  for (let output in existingTemplate.Outputs) {
    let newOutput = new Output(output, existingTemplate.Outputs[output]);
    newTemplate.add(newOutput);
  }
  for (let mapping in existingTemplate.Mappings) {
    let newMapping = new Mapping(mapping, existingTemplate.Mappings[mapping]);
    newTemplate.add(newMapping);
  }
  for (let resource in existingTemplate.Resources) {
    let typeSplit = existingTemplate.Resources[resource].Type.split('::');
    let resourceGroupName = typeSplit[1];
    let resourceName = typeSplit[2];
    if (typeSplit[0] === 'Custom') {
      resourceName = 'CustomResource';
    } else {
      let serviceClient = Service(resourceGroupName);
      let newResource = new serviceClient[resourceName](
        resource,
        existingTemplate.Resources[resource].Properties,
      );
      newTemplate.add(newResource);
    }
  }
}

/**
 * @memberof module:Core
 */
export class Template {

  private Description: string;
  private Metadata: any;
  private Conditions: any;
  private Mappings: any;
  private Outputs: any;
  private Parameters: any;
  private Resources: any;
  private AWSTemplateFormatVersion: string;

  constructor(template: any) {
    this.Description = '';
    this.Metadata = {};
    this.Conditions = {};
    this.Mappings = {};
    this.Outputs = {};
    this.Parameters = {};
    this.Resources = {};
    this.AWSTemplateFormatVersion = '2010-09-09';
    if (template) {
      _populateFromExisting(this, template);
    }
  }

  /**
   * Add an element to the Template
   * @param element
   */
  public add(element: Parameter | Object | Output | Mapping) {
    if (element instanceof Parameter) {
      _add(this.Parameters, element);
    } else if (element instanceof WKResource) {
      _add(this.Resources, element);
    } else if (element instanceof Output) {
      _add(this.Outputs, element);
    } else if (element instanceof Mapping) {
      _add(this.Mappings, element);
    } else {
      throw new TypeException(
        element + ' is not a valid type and cannot be added to the template.',
      );
    }
  };

  /**
   * Remove an element from the Template
   * @param element
   */
  public remove(element: Parameter | Object | Output | Mapping) {
    if (element instanceof Parameter) {
      _remove(this.Parameters, element);
    } else if (element instanceof WKResource) {
      _remove(this.Resources, element);
    } else if (element instanceof Output) {
      _remove(this.Outputs, element);
    } else if (element instanceof Mapping) {
      _remove(this.Mappings, element);
    } else {
      throw new TypeException(
        element + ' is not a valid type and cannot be added to the template.',
      );
    }
  };

  /**
   * Set the metadata value of the template
   * @param metadata
   */
  public setMetadata(metadata: string) {
    this.Metadata = metadata;
  };

  /**
   * Set the version value of the template
   * @param version
   */
  public setVersion(version: string) {
    this.AWSTemplateFormatVersion = version;
  };

  /**
   * Add a description to the template
   * @param description
   */
  public setDescription(description: string) {
    this.Description = description;
  };

  /**
   * Add a condition to the template
   * @param name
   * @param condition
   */
  public addCondition(name: string, condition: string) {
    this.Conditions[name] = condition;
  };

  /**
   * Remove a condition from the template
   * @param name
   * @param condition
   */
  public removeCondition(name: string, condition: string) {
    delete this.Conditions[name];
  };

  /**
   *
   * @param callback
   */
  public toJsonAsync(callback: Function) {
    if (callback) {
      let result = this.toJson();
      if (result.Errors) {
        return callback(result.Errors, result.Template);
      } else {
        return callback(null, result.Template);
      }
    } else {
      return new Promise((resolve, reject) => {
        process.nextTick(() => {
          let result = this.toJson();
          if (result.Errors) {
            reject({ Errors: result.Errors, Template: result.Template });
          } else {
            resolve(result.Template);
          }
        });
      });
    }
  };

  /**
   * Returns a CloudFormation JSON template string
   * @returns {Object}
   */
  public toJson(): any {
    let j = JSON.parse(JSON.stringify(this));
    let errors: string[] = [];
    for (let param in this.Parameters) {
      try {
        j.Parameters[param] = this.Parameters[param].toJson();
      } catch (e) {
        errors.push(e.message);
      }
    }
    for (let resource in this.Resources) {
      let result = this.Resources[resource].toJson();
      if (result.errors) {
        for (let e in result.errors) {
          errors.push(e);
        }
      }
      j.Resources[resource] = result.json;
    }
    for (let output in this.Outputs) {
      try {
        j.Outputs[output] = this.Outputs[output].toJson();
      } catch (e) {
        errors.push(e.message);
      }
    }
    for (let map in this.Mappings) {
      if (this.Mappings[map] instanceof Mapping) {
        try {
          j.Mappings[map] = this.Mappings[map].toJson();
        } catch (e) {
          errors.push(e.message);
        }
      } else {
        j.Mappings[map] = this.Mappings[map];
      }
    }
    if (Object.keys(j.Metadata).length === 0) {
      delete j.Metadata;
    }
    if (Object.keys(j.Conditions).length === 0) {
      delete j.Conditions;
    }
    if (Object.keys(j.Mappings).length === 0) {
      delete j.Mappings;
    }
    if (Object.keys(j.Outputs).length === 0) {
      delete j.Outputs;
    }
    if (Object.keys(j.Parameters).length === 0) {
      delete j.Parameters;
    }
    if (j.Description === '') {
      delete j.Description;
    }
    let result: Object = {
      Errors: errors,
      Template: JSON.stringify(j, null, 2),
    };
    if (errors.length === 0) {
      result = {
        Errors: null,
        Template: JSON.stringify(j, null, 2),
      };
    }
    return result;
  };

  public toYaml() {
    let jsonResult = this.toJson();
    return {
      Errors: jsonResult.errors,
      Template: yaml.safeDump(JSON.parse(jsonResult.Template)),
    };
  };
}