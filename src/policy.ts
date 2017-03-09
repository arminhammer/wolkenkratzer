'use strict';

import { TypeException } from './exceptions';

/**
 * @class Policy
 */
export class Policy { 
  
  private WKName: string;

  constructor(name: string) {
    this.WKName = name;
  }

 public toJson () {
  let p = JSON.parse(JSON.stringify(this));
  delete p.WKName;
  return p;
  }
}

/**
 * @class CreationPolicy
 */
export class CreationPolicy extends Policy { 

  private AutoScalingCreationPolicy: any;
  private ResourceSignal: any;

  constructor(parameters?: any) {
    super('CreationPolicy');
    if (parameters) {
      this.AutoScalingCreationPolicy = parameters.AutoScalingCreationPolicy;
      this.ResourceSignal = parameters.ResourceSignal;
    }
  }
}

/**
 * @class DeletionPolicy
 */
export class DeletionPolicy extends Policy { 

  private Type: string;

  constructor(Type: string) {
    super('DeletionPolicy');
    if (Type === 'Delete' || Type === 'Retain' || Type === 'Snapshot') {
      this.Type = Type;
    } else {
      throw new TypeException(
        Type + ' in DeletionPolicy must be Delete, Retain, or Snapshot'
      );
    }
  }
}

/**
 * @class UpdatePolicy 
 */
export class UpdatePolicy extends Policy { 
  constructor(parameters?: any) {
    super('UpdatePolicy');
  }
}
