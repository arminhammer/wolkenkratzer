'use strict';

/**
 * @class Parameter
 */
export class Parameter {
  private WKName: string;
  // TODO fix anys
  private Type: any;
  private AllowedPattern: string;
  private AllowedValues: any;
  private ConstraintDescription: any;
  private Default: any;
  private Description: string;
  private MaxLength: any;
  private MaxValue: any;
  private MinLength: any;
  private MinValue: any;
  private NoEcho: any;

  constructor(name: string, parameter: any) {
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
