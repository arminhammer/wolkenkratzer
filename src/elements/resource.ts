export interface IResource {
    readonly kind: 'resource';
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
}

/*export function buildResourceFunction(name: string, json: object): Resource {

}*/

export function Resource(name: string, properties: object): IResource {
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
