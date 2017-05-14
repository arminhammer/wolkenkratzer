// @flow

import { IParameter } from './parameter';
import { IDescription } from './description';
import { IOutput } from './output';
import { IResource } from './resource';
import { ICondition } from './condition';
import { IMapping } from './mapping';

export type IElement =
  | IParameter
  | IDescription
  | IOutput
  | IResource
  | ICondition
  | IMapping;
