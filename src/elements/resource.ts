export interface IResource {
    readonly kind: 'resource';
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
}

export function Resource(name: string, properties: object): IResource {
    if (!name) {
        throw new SyntaxError(`New Resource is invalid. A Name is required.`);
    }
    return { kind: 'resource', Name: name, Type: this.json[this.name].Name, Properties: properties };
}
