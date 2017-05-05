import { ITemplate } from './template';
import { IElement } from './elements/element';
import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
import { IDescription } from './elements/description';
import { IRef } from './intrinsic';

export function addParameter(t: ITemplate, e: IParameter): ITemplate {
    let result = { ...t };
    result.Parameters[e.Name] = e;
    return result;
}

export function addOutput(t: ITemplate, e: IOutput): ITemplate {
    let result = { ...t };
    result.Outputs[e.Name] = e;
    return result;
}

export function addResource(t: ITemplate, e: IResource): ITemplate {
    let result = { ...t };
    result.Resources[e.Name] = e;
    return result;
}

export function addDescription(t: ITemplate, e: IDescription): ITemplate {
    let result = { ...t };
    let desc = { Description: e.Content };
    result = { ...t, ...desc };
    return result;
}

/*export function add(t: ITemplate, e: IElement): ITemplate {
    let result = { ...t };
    switch (e.kind) {
        case 'parameter':
            result.Parameters[e.Name] = e;
            break;
        case 'output':
            result.Outputs[e.Name] = e;
            break;
        case 'resource':
            result.Resources[e.Name] = e;
            break;
        case 'description':
            let desc = { Description: e.Content };
            result = { ...t, ...desc };
            break;
        default:
            console.log('No match was found');
    }
    return result;
}*/

export function remove(t: ITemplate, e: IElement | string): ITemplate {
    let result = { ...t };
    let element: IElement;
    if (typeof e === 'string') {
        let parameter: IParameter | undefined = result.Parameters[e];
        if (parameter) {
            element = parameter;
        } else {
            let output: IOutput | undefined = result.Outputs[e];
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
            if (result.Parameters[element.Name]) {
                delete result.Parameters[element.Name];
            }
            break;
        case 'output':
            if (result.Outputs[element.Name]) {
                delete result.Outputs[element.Name];
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

export type Jsonifiable = IOutput;

function _stripElement(t: IParameter | IOutput | IResource): any {
    let { kind, Name, ...rest } = t;
    return rest;
}

function _buildRef(t: IRef): string {
    return JSON.stringify({ Ref: t.target.Name });
}

function _buildResource(t: IResource): object {
    return _stripElement(t);
}

function _buildOutput(t: IOutput): string {
    let outputResult = Object.assign({}, t.Properties);
    if (typeof outputResult.Value !== 'string') {
        outputResult = { Value: JSON.parse(_buildRef(outputResult.Value)) };
    }
    return JSON.stringify(outputResult);
}

export function build(t: ITemplate): object {
    let result: any = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
    };
    if (Object.keys(t.Parameters).length > 0) {
        result.Parameters = {};
        Object.keys(t.Parameters).map(p => {
            result.Parameters[p] = t.Parameters[p].Properties;
        });
    }
    if (Object.keys(t.Outputs).length > 0) {
        result.Outputs = {};
        Object.keys(t.Outputs).map(o => {
            result.Outputs[o] = JSON.parse(_buildOutput(t.Outputs[o]));
        });
    }
    if (Object.keys(t.Resources).length > 0) {
        result.Resources = {};
        Object.keys(t.Resources).map(r => {
            result.Resources[r] = _buildResource(t.Resources[r]);
        });
    }
    if (t.Description) {
        result.Description = t.Description;
    }
    return result;
}
