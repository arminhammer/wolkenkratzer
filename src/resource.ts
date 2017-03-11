'use strict';

import { TypeException } from './exceptions';
import { Policy } from './policy';
const util = require('./util');

/** @module Core */

/**
 * A CloudFormation Resource, mapping to those defined at http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html.
 * @memberof module:Core
 * @property {String} WKName
 */
export class WKResource {

  private WKName: string;
  private WKResourceType: any;
  private properties: any;
  private conditional: any;
  private DependsOn: any;
  private Metadata: any;
  private policies: any;

  constructor(
    name: string,
    resourceType: any,
    properties: any,
    propertiesObject: any,
    conditional?: any,
  ) {
    this.WKName = name;
    this.WKResourceType = resourceType;
    this.properties = properties;
    this.conditional = conditional;
    for (let prop in this.properties) {
      Object.defineProperty(this, prop, {
        set: value => {
          this.properties[prop].set(value);
        },
        get: () => {
          return this.properties[prop];
        },
      });
    }
    if (propertiesObject) {
      for (let prop in propertiesObject) {
        if (this.properties[prop]) {
          let property = propertiesObject[prop];
          if (this.properties[prop].Type) {
            try {
              this.properties[prop].set(property);
            } catch (e) { }
          }
        }
      }
    }
  }

  /**
   * Adds a DependsOn dependency for another Resource
   * @param resource
   */
  public dependsOn(resource: any) {
    this.DependsOn = resource;
  };

  /**
   * Get the logical name of the resource
   * @returns {String}
   */
  public getName() {
    return this.WKName;
  };

  /**
   * Adds a Config block to the Metadata AWS::CloudFormation::Init block of an Instance
   * @param config
   */
  public addConfig(config: any) {
    if (
      this.WKResourceType === 'AWS::EC2::Instance' ||
      this.WKResourceType === 'AWS::AutoScaling::LaunchConfiguration'
    ) {
      if (!this.Metadata) {
        this.Metadata = {};
      }
      if (!this.Metadata['AWS::CloudFormation::Init']) {
        this.Metadata['AWS::CloudFormation::Init'] = {
          configSets: {},
        };
      }
      this.Metadata['AWS::CloudFormation::Init'][config.WKName] = config;
    } else {
      throw new TypeException(
        'Not allowed to add ' +
        config.WKName +
        ' to ' +
        this.WKName +
        ' because it is not an Instance or LaunchConfiguration',
      );
    }
  };

  /**
   * Adds a ConfigSet block to the Metadata AWS::CloudFormation::Init block of an Instance
   * @param configSet
   */
  public addConfigSet(configSet: any) {
    if (
      this.WKResourceType === 'AWS::EC2::Instance' ||
      this.WKResourceType === 'AWS::AutoScaling::LaunchConfiguration'
    ) {
      if (!this.Metadata) {
        this.Metadata = {};
      }
      if (!this.Metadata['AWS::CloudFormation::Init']) {
        this.Metadata['AWS::CloudFormation::Init'] = {
          configSets: {},
        };
      }
      this.Metadata['AWS::CloudFormation::Init'].configSets[
        configSet.WKName
      ] = configSet.configs;
    } else {
      throw new TypeException(
        'Not allowed to add ' +
        configSet.WKName +
        ' to ' +
        this.WKName +
        ' because it is not an Instance or LaunchConfiguration',
      );
    }
  };

  /**
   * Adds a CreationPolicy, UpdatePolicy, or DeletePolic
   * @param policy
   */
  public addPolicy(policy: any) {
    if (!this.policies) {
      this.policies = {};
    }
    if (policy instanceof Policy.Policy) {
      this.policies[policy.getName()] = policy;
    } else {
      throw new TypeException(policy + ' must be of type Policy');
    }
  };
  /**
   * Performs validation and returns a pretty-printed JSON object.
   * @returns {String}
   */
  public toJson() {
    let newProperties = JSON.parse(JSON.stringify(this.properties));
    let errors: string[] = [];
    for (let prop in newProperties) {
      let result = this.properties[prop].toJson();
      if (result.errors && result.errors.length > 0) {
        for (let e in result.errors) {
          errors.push(this.WKName + '.' + e);
        }
      }
      if (result.json === null || util.isEmpty(result.json)) {
        delete newProperties[prop];
      } else {
        newProperties[prop] = result.json;
      }
    }
    if (this.conditional) {
      let result: any = this.conditional(this.properties);
      if (result.errors) {
        for (let e in result.errors) {
          errors.push(e);
        }
        errors.push(this.WKName + ' has a condition that was not met.');
      }
    }
    let newMetadata: any = {};
    if (this.Metadata) {
      if (this.Metadata['AWS::CloudFormation::Init']) {
        newMetadata['AWS::CloudFormation::Init'] = {};
        for (let config in this.Metadata['AWS::CloudFormation::Init']) {
          if (config === 'configSets') {
            newMetadata['AWS::CloudFormation::Init'][config] = this.Metadata[
              'AWS::CloudFormation::Init'
            ][config];
          } else {
            newMetadata['AWS::CloudFormation::Init'][config] = this.Metadata[
              'AWS::CloudFormation::Init'
            ][config].toJson();
          }
        }
      }
    }
    // TODO fix any
    let returnObject: any = {
      Type: this.WKResourceType,
      Properties: newProperties
    };
    if (this.Metadata) {
      returnObject.Metadata = newMetadata;
    }
    if (this.policies) {
      for (let policy in this.policies) {
        returnObject[policy] = this.policies[policy].toJson();
      }
    }
    if (this.DependsOn) {
      returnObject.DependsOn = this.DependsOn.WKName;
    }
    let result: Object = { errors: errors, json: returnObject };
    if (errors.length === 0) {
      result = { errors: null, json: returnObject };
    }
    return result;
  }
}