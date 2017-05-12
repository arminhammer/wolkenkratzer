import { IParameter } from './elements/parameter';
import { IDescription } from './elements/description';
// import { IMetadata } from './elements/metadata';
// import { IMapping } from './elements/mapping';
import { ICondition } from './elements/condition';
import { IResource } from './elements/resource';
import { IOutput } from './elements/output';
import { IElement } from './elements/element';
import { IRef, IFnGetAtt, Conditional, IIntrinsic, IFnAnd, IFnEquals, IFnIf, IFnNot, IFnOr } from './intrinsic';

export interface ITemplate {
    readonly kind: 'Template';
    readonly AWSTemplateFormatVersion: string;
    readonly Description?: string;
    readonly Parameters: { [s: string]: IParameter };
    // readonly Metadata: { [s: string]: IMetadata };
    // readonly Mappings: { [s: string]: IMapping };
    readonly Conditions: { [s: string]: ICondition };
    readonly Resources: { [s: string]: IResource };
    readonly Outputs: { [s: string]: IOutput };
    readonly add: Function;
    readonly remove: Function;
    readonly removeDescription: Function;
    readonly build: Function;
}

export function Template(): ITemplate {
    return {
        AWSTemplateFormatVersion: '2010-09-09',
        Conditions: {},
        Outputs: {},
        Parameters: {},
        Resources: {},
        add: function (e: IElement): ITemplate {
            switch (e.kind) {
                case 'Condition':
                    return _addCondition(this, e);
                case 'Parameter':
                    return _addParameter(this, e);
                case 'Output':
                    return _addOutput(this, e);
                case 'Resource':
                    return _addResource(this, e);
                case 'Description':
                    return _addDescription(this, e);
                default:
                    throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
            }
        },
        build: function (): object {
            let result: any = {
                AWSTemplateFormatVersion: '2010-09-09',
                Resources: {}
            };
            if (Object.keys(this.Conditions).length > 0) {
                result.Conditions = {};
                Object.keys(this.Conditions).map(c => {
                    result.Conditions[c] = _json(this.Conditions[c]);
                });
            }
            if (Object.keys(this.Parameters).length > 0) {
                result.Parameters = {};
                Object.keys(this.Parameters).map(p => {
                    result.Parameters[p] = _json(this.Parameters[p]);
                });
            }
            if (Object.keys(this.Outputs).length > 0) {
                result.Outputs = {};
                Object.keys(this.Outputs).map(o => {
                    result.Outputs[o] = _json(this.Outputs[o]);
                });
            }
            if (Object.keys(this.Resources).length > 0) {
                result.Resources = {};
                Object.keys(this.Resources).map(r => {
                    result.Resources[r] = _json(this.Resources[r]);
                });
            }
            if (this.Description) {
                result.Description = this.Description;
            }
            return result;
        },
        kind: 'Template',
        remove: function (e: IElement | string): ITemplate {
            let result = { ...this };
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
                /*case 'Condition':
                    return _removeCondition(this, e);*/
                case 'Parameter':
                    return _removeParameter(this, element);
                case 'Output':
                    return _removeOutput(this, element);
                /*case 'Resource':
                    return _removeResource(this, e);*/
                // case 'Description':
                //    return _removeDescription(this, element);
                default:
                    throw new SyntaxError(`${JSON.stringify(e)} is not a valid type, could not be added.`);
            }
        },
        removeDescription: function (): ITemplate {
            const { Description, ...remaining } = this;
            return remaining;
        }
    };
}

function _validateRef(t: ITemplate, ref: IRef): undefined | SyntaxError {
    if (ref.Ref) {
        if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
            throw new SyntaxError(`Could not find ${JSON.stringify(ref)}`);
        }
    }
    return;
}

function _validateFnGetAtt(t: ITemplate, getatt: IFnGetAtt): undefined | SyntaxError {
    if (!(t.Resources[getatt['Fn::GetAtt'][0]])) {
        throw new SyntaxError(`Could not find ${JSON.stringify(getatt)}`);
    }
    return;
}

function _strip(t: IParameter | IOutput | IResource | ICondition): any {
    let { kind, Name, ...rest } = t;
    return rest;
}

function _stripKind(intrinsic: any): object {
    let { kind, ...rest } = intrinsic;
    return rest;
}

function _buildResource(t: IResource): object {
    let { Type, Properties } = t;
    let newProps: any = {};
    if (Properties) {
        Object.keys(Properties).map(p => {
            if (Properties[p].kind) {
                newProps[p] = _stripKind(Properties[p]);
            } else {
                newProps[p] = Properties[p];
            }
        });
    }
    return { Type, Properties: newProps };
}

function _buildCondition(t: ICondition): string {
    let { Condition } = t;
    let { kind, ...conditionFn } = Condition;
    let result: any = _stripKind(conditionFn);
    Object.keys(result).map(k => {
        result[k][0] = _stripKind(result[k][0]);
    });
    return result;
}

function _buildOutput(t: IOutput): string {
    let outputResult: any = Object.assign({}, t.Properties);
    if (typeof outputResult.Value !== 'string') {
        let stripped = _stripKind(outputResult.Value);
        outputResult = { ...outputResult, Value: stripped };
    }
    return outputResult;
}

export function _json(t: IElement | IRef): any {
    switch (t.kind) {
        case 'Ref':
            return { Ref: t.Ref };
        case 'Condition':
            return _buildCondition(t);
        case 'Parameter':
            return _strip(t).Properties;
        case 'Output':
            return _buildOutput(t);
        case 'Resource':
            return _buildResource(t);
        default:
            console.log('You cant do that!');
            return 'Invalid!';
    }
}

function _addDescription(t: ITemplate, e: IDescription): ITemplate {
    let result = { ...t };
    let desc = { Description: e.Content };
    result = { ...t, ...desc };
    return result;
}

function _addCondition(t: ITemplate, e: ICondition): ITemplate {
    // TODO: Validate intrinsics
    let result = { ...t };
    result.Conditions[e.Name] = e;
    return result;
}

function _addOutput(t: ITemplate, e: IOutput): ITemplate {
    if (typeof e.Properties.Value !== 'string' && e.Properties.Value.Ref) {
        _validateRef(t, e.Properties.Value);
    }
    /*if (typeof e.Properties.Value !== 'string' && e.Properties.Value['Fn::GetAtt']) {
        _validateFnGetAtt(this, e.Properties.Value);
    }*/
    let result = { ...t };
    result.Outputs[e.Name] = e;
    return result;
}

function _addParameter(t: ITemplate, e: IParameter): ITemplate {
    let result = { ...t };
    result.Parameters[e.Name] = e;
    return result;
}

function _addResource(t: ITemplate, e: IResource): ITemplate {
    let result = { ...t };
    result.Resources[e.Name] = e;
    return result;
}

function _removeOutput(t: ITemplate, e: IOutput | string): ITemplate {
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

function _removeParameter(t: ITemplate, e: IParameter | string): ITemplate {
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
