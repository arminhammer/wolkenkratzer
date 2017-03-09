'use strict';

/** 
 * Mapping
*/
export class Mapping {
  private WKName: string;
  private body: string;

  constructor(name: string, body: string) {
    this.WKName = name;
    this.body = body;
  }

  /**
   * Provides a JSON version of the Mapping
   * @returns {Object}
   */
  public toJson(): Object {
    let p = JSON.parse(JSON.stringify(this));
    delete p.WKName;
    return p.body;
  };
}
