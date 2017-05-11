export interface IResource {
    readonly kind: 'Resource';
    readonly Name: string;
    readonly Type: string;
    readonly Properties: any;
}

export function Resource(name: string, properties: object): IResource {
    if (!name) {
        throw new SyntaxError(`New Resource is invalid. A Name is required.`);
    }
    return { kind: 'Resource', Name: name, Type: this.json[this.name].Name, Properties: properties };
}

export function CustomResource(name: string, properties: object): IResource {
    if (!name) {
        throw new SyntaxError(`New Resource is invalid. A Name is required.`);
    }
    return { kind: 'Resource', Name: name, Type: `Custom::${name}`, Properties: properties };
}
