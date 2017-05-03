export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { add, remove, json, wipe } from './actions';
export { Ref } from './intrinsic'
import { Service, IService } from './service';
export const S3 = Service('S3');
