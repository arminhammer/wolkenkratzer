'use strict';

/**
 * @class Parameter
 */
export class Parameter {
  private WKName: string;
  private Type;
  private AllowedPattern: string;
  private AllowedValues;
  private ConstraintDescription;
  private Default;
  private Description: string;
  private MaxLength;
  private MaxValue;
  private MinLength;
  private MinValue;
  private NoEcho;

  constructor(name: string, parameter) {
    this.WKName = name;
    this.Type = parameter.Type;
    this.AllowedPattern = parameter.AllowedPattern;
    this.AllowedValues = parameter.AllowedValues;
    this.ConstraintDescription = parameter.ConstraintDescription;
    this.Default = parameter.Default;
    this.Description = parameter.Description;
    this.MaxLength = parameter.MaxLength;
    this.MaxValue = parameter.MaxValue;
    this.MinLength = parameter.MinLength;
    this.MinValue = parameter.MinValue;
    this.NoEcho = parameter.NoEcho;
  }

  /**
   * Provides a JSON version of the Parameter
   */
  public toJson() {
    let p = JSON.parse(JSON.stringify(this));
    delete p.WKName;
    return p;
  };
}


