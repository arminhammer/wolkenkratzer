'use strict';

/**
 * @class Output
 */
export class Output {

  private WKName: string;
  private Description;
  private Value;

  constructor(name: string, parameter) {
    this.WKName = name;
    this.Description = parameter.Description;
    this.Value = parameter.Value;
  }

  /**
   * Returns a JSON version of the Output
   * @returns {Object}
   */
  public toJson() {
    let p = JSON.parse(JSON.stringify(this));
    delete p.WKName;
    return p;
  };
}
