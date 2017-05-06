import { Resource } from './elements/resource';

export interface IService {

}

export function Service(name: string): IService {
    // console.log(`creating service ${name}`);
    const json = require(`../stubs/json/resources/${name}.json`);
    // console.log(JSON.stringify(json, null, 2))
    const service: any = { json };
    Object.keys(json).map(r => {
        // console.log('found')
        // console.log(r)
        // let res =
        service[r] = Resource.bind({ json, name: r });
        // service[r].bind(this);
    });
    // console.log('service is')
    // console.log(service)
    // console.log('calling')
    // console.log(service.Bucket('Bucket'))
    return service;
}
