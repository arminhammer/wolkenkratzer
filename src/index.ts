export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export { Ref, FnGetAtt, FnEquals } from './intrinsic';
import { Service, IService } from './service';

import * as fs from 'fs';
import * as path from 'path';

const files = fs.readdirSync(path.resolve(__dirname, '../stubs/json/resources/'));

files.map(file => {
    const service = file.replace('.json', '');
    exports[service] = Service(service);
});
