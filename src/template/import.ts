import { CreationPolicy as CreationPolicyConstructor } from '../attributes/creationpolicy';
import { DeletionPolicy as DeletionPolicyConstructor } from '../attributes/deletionpolicy';
import { DependsOn as DependsOnConstructor } from '../attributes/dependson';
import { ResourceMetadata as ResourceMetadataConstructor } from '../attributes/metadata';
import { UpdatePolicy as UpdatePolicyConstructor } from '../attributes/updatepolicy';
import { Condition } from '../elements/condition';
import { Description } from '../elements/description';
import { Mapping } from '../elements/mapping';
import { Output } from '../elements/output';
import { Parameter } from '../elements/parameter';
import { CustomResource } from '../elements/resource';
import { Service } from '../service';
import * as stubs from '../spec/spec';
import { ITemplate } from '../types';
import { _addResourcePolicy } from './add';

/**
 * @hidden
 * @param t
 * @param inputTemplate
 */
function _calcFromExistingTemplate(t: ITemplate, inputTemplate: any) {
  if (inputTemplate.Description) {
    t = t.add(Description(inputTemplate.Description));
  }
  if (inputTemplate.Parameters) {
    Object.keys(inputTemplate.Parameters).forEach(p => {
      t = t.add(Parameter(p, inputTemplate.Parameters[p]));
    });
  }
  if (inputTemplate.Resources) {
    Object.keys(inputTemplate.Resources).forEach(r => {
      const split = inputTemplate.Resources[r].Type.split('::');
      const cat = split[1];
      const resType = split[2];
      const options = {
        Condition: inputTemplate.Resources[r].Condition,
      };
      if (split[0] === 'AWS') {
        const service = Service(stubs[cat]);
        t = t.add(
          service[resType](r, inputTemplate.Resources[r].Properties, options)
        );
      } else if (split[0] === 'Custom') {
        t = t.add(
          CustomResource(r, inputTemplate.Resources[r].Properties, options)
        );
      }
      if (inputTemplate.Resources[r].Metadata) {
        t = _addResourcePolicy(
          t,
          ResourceMetadataConstructor(r, inputTemplate.Resources[r].Metadata)
        );
      }
      if (inputTemplate.Resources[r].CreationPolicy) {
        t = _addResourcePolicy(
          t,
          CreationPolicyConstructor(
            r,
            inputTemplate.Resources[r].CreationPolicy
          )
        );
      }
      if (inputTemplate.Resources[r].DeletionPolicy) {
        t = _addResourcePolicy(
          t,
          DeletionPolicyConstructor(
            r,
            inputTemplate.Resources[r].DeletionPolicy
          )
        );
      }
      if (inputTemplate.Resources[r].DependsOn) {
        t = _addResourcePolicy(
          t,
          DependsOnConstructor(r, inputTemplate.Resources[r].DependsOn)
        );
      }
      if (inputTemplate.Resources[r].UpdatePolicy) {
        t = _addResourcePolicy(
          t,
          UpdatePolicyConstructor(r, inputTemplate.Resources[r].UpdatePolicy)
        );
      }
    });
  }
  if (inputTemplate.Outputs) {
    t = _addIterate(t, inputTemplate, 'Outputs', Output);
  }
  if (inputTemplate.Mappings) {
    Object.keys(inputTemplate.Mappings).forEach(m => {
      Object.keys(inputTemplate.Mappings[m]).forEach(m0 => {
        t = t.add(Mapping(m, m0, inputTemplate.Mappings[m][m0]));
      });
    });
  }
  if (inputTemplate.Conditions) {
    t = _addIterate(t, inputTemplate, 'Conditions', Condition);
  }
  return t;
}

/**
 * @hidden
 * @param t
 * @param inputTemplate
 * @param blockType
 * @param method
 */
function _addIterate(
  t: ITemplate,
  inputTemplate: any,
  blockType: 'Conditions' | 'Outputs',
  method: Function
) {
  Object.keys(inputTemplate[blockType]).forEach(o => {
    t = t.add(method(o, inputTemplate[blockType][o]));
  });
  return t;
}

export { _calcFromExistingTemplate };
