'use strict';

/**
 * @class Exception
 */
export class Exception {
  private message: string;
  protected name: string;

  constructor(message: string) {
    this.message = message;
  }

  /**
  * Returns a JSON string
  */
  public toJson() {
    return this.message;
  };
}

/**
 * @class ValueException
 */
export class ValueException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'ValueError';
  }
}

/**
 * @class RequiredPropertyException
 */
export class RequiredPropertyException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'RequiredPropertyException';
  }
}

/**
 * @class TypeException
 */
export class TypeException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'TypeException';
  }
}

/**
 * @class ConditionNotMetException
 */
export class ConditionNotMetException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = 'ConditionNotMetException';
  }
}
