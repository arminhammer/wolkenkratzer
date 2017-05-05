import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
import { IIntrinsic } from './intrinsic';

export function add(t: ITemplate, e: IElement): ITemplate {
    let result = { ...t };
    switch (e.kind) {
        case 'parameter':
            result.Parameters.push(e);
            break;
        case 'output':
            result.Outputs.push(e);
            break;
        case 'resource':
            result.Resources.push(e);
            break;
        case 'description':
            let desc = { Description: e.Content };
            result = { ...t, ...desc };
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
        let parameter: IParameter | undefined = result.Parameters.find(p => { return p.Name === e; });
        if (parameter) {
            element = parameter;
        } else {
            let output: IOutput | undefined = result.Outputs.find(p => { return p.Name === e; });
            if (output) {
                element = output;
            } else {
                throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
            }
        }
    } else {
        element = e;
    }
    switch (element.kind) {
        case 'parameter':
            let parameter = result.Parameters.indexOf(element);
            if (parameter !== -1) {
                result.Parameters.splice(parameter, 1);
            }
            break;
        case 'output':
            let output = result.Outputs.indexOf(element);
            if (output !== -1) {
                result.Outputs.splice(output, 1);
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

export function wipe(t: ITemplate, category: string): ITemplate {
    switch (category) {
        case 'Description':
            const { Description, ...remaining } = t;
            return remaining;
        default:
            throw new SyntaxError(`${category} is not a valid part of a CloudFormation template.`);
    }
}

export type Jsonifiable = ITemplate | IParameter | IOutput | IResource | IIntrinsic;

function stripElement(t: IParameter | IOutput | IResource): any {
    let { kind, Name, ...rest } = t;
    return rest;
}

export function json(t: Jsonifiable): string {
    switch (t.kind) {
        case 'intrinsic':
            return JSON.stringify({ Ref: t.target.Name });
        case 'parameter':
            return JSON.stringify(stripElement(t));
        case 'output':
            let pared = stripElement(t);
            if (typeof pared.Value !== 'string') {
                pared.Value = JSON.parse(json(pared.Value));
                return JSON.stringify(pared);
            } else {
                return JSON.stringify(pared);
            }
        case 'resource':
            return JSON.stringify(stripElement(t));
        case 'template':
            let result: any = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (t.Parameters.length > 0) {
                result.Parameters = {};
                t.Parameters.map(p => {
                    result.Parameters[p.Name] = p.Properties;
                });
            }
            if (t.Outputs.length > 0) {
                result.Outputs = {};
                t.Outputs.map(p => {
                    result.Outputs[p.Name] = JSON.parse(json(p));
                });
            }
            if (t.Resources.length > 0) {
                result.Resources = {};
                t.Resources.map(r => {
                    result.Resources[r.Name] = JSON.parse(json(r));
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
