import { IParameter } from './parameter';
import { IDescription } from './description';
import { IOutput } from './output';
import { IResource } from './resource';
import { ICondition } from './condition';

export type IElement = IParameter | IDescription | IOutput | IResource | ICondition;
