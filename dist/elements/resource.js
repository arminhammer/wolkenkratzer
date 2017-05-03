"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*export function buildResourceFunction(name: string, json: object): Resource {

}*/
function Resource(name, properties) {
    /* console.log('this')
    console.log(JSON.stringify(this, null, 2))
    console.log('json')
    console.log(this.json)
    console.log('this.name')
    console.log(this.name) */
    if (!name) {
        throw new SyntaxError(`New Resource is invalid. A Name is required.`);
    }
    return { kind: 'resource', Name: name, Type: this.json[this.name].Name, Properties: properties };
}
exports.Resource = Resource;
