import cftSchema from 'cloudformation-schema-js-yaml';
import { safeDump } from 'js-yaml';
import { cloneDeep } from 'lodash';
import { Output } from '../elements/output';
import { Parameter } from '../elements/parameter';
import { FnSub, Ref } from '../intrinsic';
import * as stubs from '../spec/spec';
// import { IMetadata } from './elements/metadata';
import {
  IAddOptions,
  ICreationPolicy,
  IDeletionPolicy,
  IDependsOn,
  IElement,
  IMapping,
  IOutput,
  IParameter,
  IResource,
  IResourceMetadata,
  ITemplate,
  IUpdatePolicy,
} from '../types';
import { _add, _addOutput, _addParameter } from './add';
import { _json } from './build';
import { _calcFromExistingTemplate } from './import';
import { Pseudo } from '../pseudo';
import { _remove } from './remove';

/** @module Template */

/**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */
export function Template(): ITemplate {
  return {
    AWSTemplateFormatVersion: '2010-09-09',
    Conditions: {},
    Mappings: {},
    Outputs: {},
    Parameters: {},
    Resources: {},
    /**
     * Add a new Parameter, Description, Output, Resource, Condition, or Mapping
     * to the template. Returns a new Template with the element added. Does not mutate the original Template object.
     * @example
     * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
     */
    add: function(
      e:
        | IElement
        | IElement[]
        | ICreationPolicy
        | IDeletionPolicy
        | IResourceMetadata
        | IDependsOn
        | IUpdatePolicy
    ): ITemplate {
      if (Array.isArray(e)) {
        let _t = cloneDeep(this);
        e.forEach(elem => {
          _t = _add(_t, elem);
        });
        return _t;
      }
      return _add(this, e);
    },
    /**
     * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
     * @example
     * const t = Template();
     * JSON.stringify(t.build(), null, 2)
     */
    build: function(): object {
      const result: any = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {},
      };
      const skel = {
        Conditions: this.Conditions,
        Mappings: this.Mappings,
        Outputs: this.Outputs,
        Parameters: this.Parameters,
        Resources: this.Resources,
      };
      Object.keys(skel).forEach(element => {
        if (Object.keys(skel[element]).length > 0) {
          result[element] = {};
          Object.keys(skel[element]).forEach(item => {
            result[element][item] = _json(skel[element][item]);
          });
        }
      });
      if (this.Description) {
        result.Description = this.Description;
      }
      return result;
    },
    /**
     * Checks to see if an element is in the current template.
     * Returns true if it is in the template, false if it is not found.
     */
    has: function(query: string): boolean {
      const [resource, attribute] = query.split('.');
      if (attribute && this.Resources[resource].Properties[attribute]) {
        return true;
      }
      if (this.Resources[query]) {
        return true;
      }
      if (this.Parameters[query]) {
        return true;
      }
      return false;
    },
    /**
     * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
     * @example
     * const templateJson = require('template.json');
     * const t = Template().import(templateJson);
     */
    import: function(inputTemplate): ITemplate {
      const _t = cloneDeep(this);
      return _calcFromExistingTemplate(_t, inputTemplate);
    },
    kind: 'Template',
    /**
     * Merges another Template object into another. The original Template objects are not mutated.
     * Returns a new Template object that is the product of the two original Template objects.
     */
    merge: function(t: ITemplate): ITemplate {
      const _t = cloneDeep(this);
      const combined = {};
      [
        'Conditions',
        'Mapping',
        'Outputs',
        'Parameters',
        'Resources',
        'Description',
      ].forEach(block => {
        if (t[block]) {
          combined[block] = { ..._t[block], ...t[block] };
        }
      });
      return {
        ..._t,
        ...combined,
      };
    },
    /**
     * Turn an attribute of a Resource into a Parameter.
     */
    parameterize: function(
      location: string,
      parameterName?: string
    ): ITemplate {
      let result = cloneDeep(this);
      const [resource, attribute] = location.split('.');
      const [, rgroup, rtype] = result.Resources[resource].Type.split('::');
      const propType = stubs[rgroup].Resources[rtype].Properties[attribute]
        .ItemType
        ? stubs[rgroup].Resources[rtype].Properties[attribute].ItemType
        : stubs[rgroup].Resources[rtype].Properties[attribute].PrimitiveType;
      parameterName = parameterName ? parameterName : `${resource}${attribute}`;
      console.log('proptype: ', propType);
      result = _addParameter(
        result,
        Parameter(parameterName, { Type: propType })
      );
      result.Resources[resource].Properties[attribute] = Ref(parameterName);
      return result;
    },
    /**
     * Turn an attribute of a Resource into an Output. Currently only supports turning it into a 'Ref'
     */
    putOut: function(location: string, outputName?: string): ITemplate {
      let result = cloneDeep(this);
      const [resource, attribute] = location.split('.');
      const [, rgroup, rtype] = result.Resources[resource].Type.split('::');
      if (result.Resources[resource].Condition) {
        console.log('Condition found');
      }
      if (!outputName) {
        outputName = resource;
        if (attribute) {
          outputName += attribute;
        }
      }
      let exportString = `\$\{${Pseudo.AWS_STACK_NAME}\}-${rgroup}-${rtype}-${resource}`;
      let descriptionString = `The ${resource} ${rgroup} ${rtype}`;
      if (attribute) {
        exportString += `-${attribute}`;
        descriptionString = `The ${attribute} of the ${resource} ${rgroup} ${rtype}`;
      }
      result = _addOutput(
        result,
        Output(outputName, {
          Condition: result.Resources[resource].Condition,
          Description: descriptionString,
          Export: {
            Name: FnSub(
              exportString
            ),
          },
          Value: Ref(resource),
        })
      );
      return result;
    },
    /**
     * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template.
     * Returns a new Template with the element removed. Does not mutate the original Template object.
     * @example
     * let t = Template();
     * let p = Parameter('NewParam', { Type: 'String' });
     * t.add(p).remove(p);
     */
    remove: function(
      e: IMapping | IResource | IParameter | IOutput | string
    ): ITemplate {
      const result = cloneDeep(this);
      let element: IElement;
      if (typeof e === 'string') {
        const resource: IResource | void = result.Resources[e];
        if (resource) {
          element = resource;
        } else {
          const parameter: IParameter | void = result.Parameters[e];
          if (parameter) {
            element = parameter;
          } else {
            const output: IOutput | void = result.Outputs[e];
            if (output) {
              element = output;
            } else {
              const mapping: IMapping | void = result.Mappings[e];
              if (mapping) {
                element = mapping;
              } else {
                throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
              }
            }
          }
        }
      } else {
        element = e;
      }
      return _remove(this, element);
    },
    /**
     * Removes the Description from the Template.
     */
    removeDescription: function(): ITemplate {
      const newT = cloneDeep(this);
      delete newT.Description;
      return newT;
    },
    /**
     * Update the value of a resource in the Template.
     */
    set: function(location: string, newValue: string): ITemplate {
      const result = cloneDeep(this);
      const [resource, attribute] = location.split('.');
      if (
        [
          'Condition',
          'UpdatePolicy',
          'DependsOn',
          'CreationPolicy',
          'DeletionPolicy',
        ].includes(attribute)
      ) {
        result.Resources[resource][attribute] = newValue;
      } else {
        result.Resources[resource].Properties[attribute] = newValue;
      }
      return result;
    },
    yaml: function(): string {
      const cleanedTemplate = this.build();
      // const templateString = JSON.stringify(cleanedTemplate, null, 2);
      const templateString = safeDump(cleanedTemplate, {
        flowLevel: 5,
        schema: cftSchema,
      })
        /* See note on 
        http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-base64.html
         .replace(/'Fn::Base64':/g, '!Base64')*/
        .replace(/'Fn::Equals':/g, '!Equals')
        .replace(/'Fn::And':/g, '!And')
        .replace(/'Fn::GetAZs':/g, '!GetAZs')
        .replace(/\{Ref: ([^}]+)\}/g, (match, p1) => {
          return `!Ref ${p1}`;
        })
        .replace(/Ref: (\w+)/g, (match, p1) => {
          return `!Ref ${p1}`;
        })
        .replace(/'Fn::ImportValue':/g, '!ImportValue')
        .replace(/'Fn::Or':/g, '!Or')
        .replace(/'Fn::Not':/g, '!Not')
        .replace(/'Fn::If':/g, '!If')
        .replace(
          /\{'Fn::GetAtt': \[(\w+), ([\w|\.]+)\]\}/g,
          (match, p1, p2) => {
            return `!GetAtt ${p1}.${p2}`;
          }
        )
        .replace(
          /\{'Fn::FindInMap': \[([\w\d!]+), ([\w\d! ]+), ([\w\d!]+)\]\}/g,
          (match, p1, p2, p3) => {
            return `!FindInMap [ ${p1}, ${p2}, ${p3} ]`;
          }
        );
      /*
      TODO: add support for short versions of the rest
        .replace(/'Fn::Join':/g, '!Join');
        'Fn::FindInMap'
        "Fn::Select"
        "Fn::Split"
        "Fn::Sub"*/
      return templateString;
    },
  };
}
