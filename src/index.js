// @flow

export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export { Ref, FnGetAtt, FnEquals, FnJoin } from './intrinsic';
import { Service, IService } from './service';
export { CreationPolicy } from './attributes/creationpolicy';
export { ResourceMetadata } from './attributes/metadata';
export {
  getInstanceTypeList,
  getInstanceTypeNameList
} from './macros/ec2meta.macro';

import * as fs from 'fs';
import * as path from 'path';

const files = fs.readdirSync(path.resolve(__dirname, '../stubs/json/'));

files.map(file => {
  const service = file.replace('.json', '');
  exports[service] = Service(service);
});
