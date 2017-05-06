import { ITemplate } from './template';
import { IElement } from './elements/element';
import { ICondition } from './elements/condition';
import { IParameter } from './elements/parameter';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
import { IDescription } from './elements/description';
import { IRef } from './intrinsic';

export function addCondition(t: ITemplate, e: ICondition): ITemplate {
    let result = { ...t };
    result.Conditions[e.Name] = e;
    return result;
}

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

export function removeParameter(t: ITemplate, e: IParameter | string): ITemplate {
    let result = { ...t };
    let param: IParameter;
    if (typeof e === 'string') {
        if (result.Parameters[e]) {
            param = result.Parameters[e];
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
        }
    } else {
        param = e;
    }
    if (result.Parameters[param.Name]) {
        delete result.Parameters[param.Name];
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(param)}`);
    }
    return result;
}

export function removeOutput(t: ITemplate, e: IOutput | string): ITemplate {
    let result = { ...t };
    let out: IOutput;
    if (typeof e === 'string') {
        if (result.Outputs[e]) {
            out = result.Outputs[e];
        } else {
            throw new SyntaxError(`Could not find ${JSON.stringify(e)}`);
        }
    } else {
        out = e;
    }
    if (result.Outputs[out.Name]) {
        delete result.Outputs[out.Name];
    } else {
        throw new SyntaxError(`Could not find ${JSON.stringify(out)}`);
    }
    return result;
}

export function removeDescription(t: ITemplate): ITemplate {
    const { Description, ...remaining } = t;
    return remaining;
}

function _stripName(t: IParameter | IOutput | IResource | ICondition): any {
    let { Name, ...rest } = t;
    return rest;
}

function _buildOutput(t: IOutput): string {
    let outputResult = Object.assign({}, t.Properties);
    if (typeof outputResult.Value !== 'string') {
        outputResult = { Value: outputResult.Value };
    }
    return JSON.stringify(outputResult);
}

export function build(t: ITemplate): object {
    let result: any = {
        AWSTemplateFormatVersion: '2010-09-09',
        Resources: {}
    };
    if (Object.keys(t.Conditions).length > 0) {
        result.Conditions = {};
        Object.keys(t.Conditions).map(c => {
            result.Conditions[c] = _stripName(t.Conditions[c]).Condition;
        });
    }
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
            result.Resources[r] = _stripName(t.Resources[r]);
        });
    }
    if (t.Description) {
        result.Description = t.Description;
    }
    return result;
}
