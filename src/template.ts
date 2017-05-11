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
    readonly addDescription: Function;
    readonly removeDescription: Function;
    readonly addCondition: Function;
    readonly addParameter: Function;
    readonly addOutput: Function;
    readonly addResource: Function;
    readonly removeOutput: Function;
    readonly removeParameter: Function;
    readonly build: Function;
}

export function Template(): ITemplate {
    return {
        AWSTemplateFormatVersion: '2010-09-09',
        Conditions: {},
        Outputs: {},
        Parameters: {},
        Resources: {},
        addCondition: function (e: ICondition): ITemplate {
            // TODO: Validate intrinsics
            let result = { ...this };
            result.Conditions[e.Name] = e;
            return result;
        },
        addDescription: function (e: IDescription): ITemplate {
            let result = { ...this };
            let desc = { Description: e.Content };
            result = { ...this, ...desc };
            return result;
        },
        addOutput: function (e: IOutput): ITemplate {
            if (typeof e.Properties.Value !== 'string' && e.Properties.Value.Ref) {
                _validateRef(this, e.Properties.Value);
            }
            /*if (typeof e.Properties.Value !== 'string' && e.Properties.Value['Fn::GetAtt']) {
                _validateFnGetAtt(this, e.Properties.Value);
            }*/
            let result = { ...this };
            result.Outputs[e.Name] = e;
            return result;
        },
        addParameter: function (e: IParameter): ITemplate {
            let result = { ...this };
            result.Parameters[e.Name] = e;
            return result;
        },
        addResource: function (e: IResource): ITemplate {
            let result = { ...this };
            result.Resources[e.Name] = e;
            return result;
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
        removeDescription: function (): ITemplate {
            const { Description, ...remaining } = this;
            return remaining;
        },
        removeOutput: function (e: IOutput | string): ITemplate {
            let result = { ...this };
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
        },
        removeParameter: function (e: IParameter | string): ITemplate {
            let result = { ...this };
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
    };
}

function _validateRef(t: ITemplate, ref: IRef): undefined | SyntaxError {
    if (ref.Ref) {
        if (!(t.Parameters[ref.Ref] || t.Resources[ref.Ref])) {
            throw new SyntaxError(`Could not find ${ref}`);
        }
    }
    return;
}

function _validateFnGetAtt(t: ITemplate, getatt: IFnGetAtt): undefined | SyntaxError {
    if (!(t.Resources[getatt['Fn::GetAtt'][0]])) {
        throw new SyntaxError(`Could not find ${getatt}`);
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

function add(e: IElement): ITemplate {
    let result = { ...this };
    switch (e.kind) {
        case 'Parameter':
            result.Parameters[e.Name] = e;
            break;
        case 'Output':
            result.Outputs[e.Name] = e;
            break;
        case 'Resource':
            result.Resources[e.Name] = e;
            break;
        case 'Description':
            let desc = { Description: e.Content };
            result = { ...this, ...desc };
            break;
        default:
            console.log('No match was found');
    }
    return result;
}

function remove(e: IElement | string): ITemplate {
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
        case 'Parameter':
            if (result.Parameters[element.Name]) {
                delete result.Parameters[element.Name];
            }
            break;
        case 'Output':
            if (result.Outputs[element.Name]) {
                delete result.Outputs[element.Name];
            }
            break;
        case 'Description':
            const { Description, ...remaining } = result;
            result = remaining;
            break;
        default:
            throw new SyntaxError(`Could not find ${JSON.stringify(element)}`);
    }
    return result;
}

export function _json(t: IElement|IRef): any {
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
