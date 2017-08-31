import * as path from 'path';
import { Resource } from './elements/resource';

export interface IService {
  Function?: any;
}

/**
 * Return a Service object to create Resources and Attributes
 * @param {*} json 
 */
export function Service(json: any): IService {
  const service: any = { json };
  Object.keys(json.Resources).map(r => {
    service[r] = Resource.bind({ json, name: r });
  });
  return service;
}
