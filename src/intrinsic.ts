'use strict';

import { WKResource } from './resource';
import { Parameter } from './parameter';
import { Jsonify } from './interfaces';

export function makeIntrinsic(obj) {
  if (obj['Ref']) {
    return new Ref(obj['Ref']);
  } else if (obj['Fn::FindInMap']) {
    return new FnFindInMap(obj['Fn::FindInMap']);
  } else if (obj['Fn::GetAtt']) {
    return new FnGetAtt(obj['Fn::GetAtt']);
  } else if (obj['Fn::Join']) {
    return new FnJoin(obj['Fn::Join'][0], obj['Fn::Join'][1]);
  } else if (obj['Fn::Sub']) {
    return new FnSub(obj['Fn::Sub']);
  }
  return null;
}

/**
 * @class Intrinsic
 */
export class Intrinsic implements Jsonify {
  constructor() { }

  /**
  * Returns a JSON Object 
  */
  public toJson() { return { json: {} } };

  public toJSON() {
    return this.toJson().json;
  };
}

/**
 * @class Ref
 */
export class Ref extends Intrinsic implements Jsonify {

  private ref;

  constructor(resource) {
    super();
    this.ref = resource;
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  public toJson() {
    if (this.ref instanceof WKResource || this.ref instanceof Parameter) {
      return { errors: null, json: { Ref: this.ref.WKName } };
    } else {
      return { errors: null, json: { Ref: this.ref } };
    }
  }
}

/**
 * @class FnSub
 */
export class FnSub extends Intrinsic implements Jsonify {

  private sub;

  constructor(input) {
    super();
    this.sub = input;
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  public toJson() {
    return { errors: null, json: { 'Fn::Sub': this.sub } };
  };
}

/**
 * @class FnGetAtt
 */
export class FnGetAtt extends Intrinsic implements Jsonify {

  private resource;
  private attribute;

  constructor(resource, attribute?) {
    super();
    this.resource = resource;
    this.attribute = attribute;
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  public toJson() {
    if (
      this.resource instanceof WKResource || this.resource instanceof Parameter
    ) {
      return {
        errors: null,
        json: { 'Fn::GetAtt': [this.resource.WKName, this.attribute] }
      };
    } else {
      return {
        errors: null,
        json: { 'Fn::GetAtt': [this.resource, this.attribute] }
      };
    }
  }
}

/**
 * @class FnBase64
 */
export class FnBase64 extends Intrinsic implements Jsonify {

  private content;

  constructor(content) {
    super();
    this.content = content;
  }

  /**
   * Returns a JSON string version
   * @returns {Object}
   */
  public toJson() {
    return { errors: null, json: { 'Fn::Base64': this.content } };
  };
}

/**
 * @mclass FnFindInMap
 */
export class FnFindInMap extends Intrinsic implements Jsonify {

  private mapName;
  private topLevelKey;
  private secondLevelKey;

  constructor(mapName, topLevelKey?, secondLevelKey?) {
    super();
    this.mapName = mapName;
    this.topLevelKey = topLevelKey;
    this.secondLevelKey = secondLevelKey;
  }

  /**
 * Returns a JSON string version
 * @returns {Object}
 */
  public toJson() {
    return {
      errors: null,
      json: {
        'Fn::FindInMap': [this.mapName, this.topLevelKey, this.secondLevelKey]
      }
    };
  };
}

export class FnGetAZs extends Intrinsic implements Jsonify {

  private region;

  constructor(region) {
    super();
    if (region) {
      this.region = region;
    } else {
      this.region = { Ref: 'AWS::Region' };
    }
  }

  /**
 *
 * @returns {Object}
 */
  public toJson() {
    return { errors: null, json: { 'Fn::GetAZs': this.region } };
  };
}

/**
 * @class FnJoin
 */
export class FnJoin extends Intrinsic implements Jsonify {

  private delimiter;
  private values;

  constructor(delimiter, values) {
    super();
    this.delimiter = delimiter;
    this.values = values;
  }

  /**
 * Returns a JSON string version
 * @returns {Object}
 */
  public toJson() {
    return { errors: null, json: { 'Fn::Join': [this.delimiter, this.values] } };
  };
}

/** 
 * @class FnSelect 
 */
export class FnSelect extends Intrinsic implements Jsonify {

  private index;
  private list;

  constructor(index, list) {
    super();
    this.index = index;
    this.list = list;
  }

  public toJson() {
    return { errors: null, json: { 'Fn::Select': [this.index, this.list] } };
  };
}

export class FnAnd extends Intrinsic implements Jsonify {

  private condition;
  private body;

  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }

  public toJson() {
    return { errors: null, json: { 'Fn::And': [this.condition, this.body] } };
  };
}

export class FnEquals extends Intrinsic implements Jsonify {

  private first;
  private second;

  constructor(first, second) {
    super();
    this.first = first;
    this.second = second;
  }

  public toJson() {
    return { errors: null, json: { 'Fn::Equals': [this.first, this.second] } };
  }
}

export class FnIf extends Intrinsic implements Jsonify {

  private condition;
  private ifTrue;
  private ifFalse;

  constructor(condition, ifTrue, ifFalse) {
    super();
    this.condition = condition;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
  }

  public toJson() {
    return {
      errors: null,
      json: { 'Fn::If': [this.condition, this.ifTrue, this.ifFalse] }
    };
  };
}

export class FnNot extends Intrinsic implements Jsonify {

  private condition;

  constructor(condition) {
    super();
    this.condition = condition;
  }

  public toJson() {
    return { errors: null, json: { 'Fn::Not': [this.condition] } };
  };
}

export class FnOr extends Intrinsic implements Jsonify {

  private condition;
  private body;

  constructor(condition, body) {
    super();
    this.condition = condition;
    this.body = body;
  }

  public toJson() {
    return { errors: null, json: { 'Fn::Or': [this.condition, this.body] } };
  };
}
