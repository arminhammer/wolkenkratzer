import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IParameter } from './elements/parameter';

export function add(t: ITemplate, e: IElement): ITemplate {
    let result = { ...t };
    switch (e.kind) {
        case 'parameter':
            result.Parameters.push(e);
            break;
        case 'description':
            let desc = { Description: e.Content };
            result = { ...t, ...desc }
            break;
        default:
            console.log('No match was found');
    }
    return result;
}

export function remove(t: ITemplate, e: IElement | string): ITemplate {
    let result = { ...t };
    let element: IElement;
    if (typeof e === 'string') {
        let find: IParameter | undefined = result.Parameters.find(p => { return p.Name === e; });
        if (find) {
            element = find;
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
        }
    } else {
        element = e;
    }
    switch (element.kind) {
        case 'parameter':
            let find = result.Parameters.indexOf(element);
            if (find !== -1) {
                result.Parameters.splice(find, 1);
            }
            break;
        case 'description':
            const { Description, ...remaining } = result;
            result = remaining;
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    return result;
}

export function wipe(t: ITemplate, category: string) {
    switch (category) {
        case 'Description':
            const { Description, ...remaining } = t;
            return remaining;
        default:
            throw new SyntaxError(`${category} is not a valid part of a CloudFormation template.`);
    }
}

export type Jsonifiable = ITemplate | IParameter;

export function json(t: Jsonifiable): string {
    switch (t.kind) {
        case 'parameter':
            let { kind, Name, ...rest } = t;
            return JSON.stringify(rest);
        case 'template':
            let result: any = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (t.Parameters.length > 0) {
                result.Parameters = {};
                t.Parameters.map(p => {
                    result.Parameters[p.Name] = JSON.parse(json(p));
                });
            }
            if (t.Description) {
                result.Description = t.Description;
            }
            return JSON.stringify(result, null, 2);
        default:
            console.log('You cant do that!');
            return 'Invalid!';
    }
}
