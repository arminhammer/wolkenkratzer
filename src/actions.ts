import { ITemplate } from './template'
import { IElement } from './elements/element'
import { IParameter } from './elements/parameter'

export function add(t: ITemplate, e: IElement): ITemplate {
    let result = { ...t }
    switch (e.kind) {
        case 'parameter':
            result.Parameters.push(e);
            break;
        default:
            console.log('No match was found')
    }
    return result;
}

export type Jsonifiable = ITemplate | IParameter;

export function json(t: Jsonifiable): string {
    switch (t.kind) {
        case 'parameter':
            let { kind, Name, ...rest } = t
            return JSON.stringify(rest)
        case 'template':
            let result: any = {
                Resources: {},
                AWSTemplateFormatVersion: '2010-09-09'
            }
            if (t.Parameters.length > 0) {
                result.Parameters = {}
                t.Parameters.map(p => {
                    result.Parameters[p.Name] = JSON.parse(json(p))
                })
            }
            return JSON.stringify(result, null, 2)
        default:
            console.log('You cant do that!')
            return 'Invalid!'
    }
}