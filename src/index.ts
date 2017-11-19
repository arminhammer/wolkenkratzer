export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export {
  Ref,
  FnBase64,
  FnGetAtt,
  FnGetAZs,
  FnEquals,
  FnImportValue,
  FnJoin,
  FnFindInMap,
  FnSelect,
  FnSplit,
  FnSub,
  FnAnd
} from './intrinsic';

export { CreationPolicy } from './attributes/creationpolicy';
export { DeletionPolicy } from './attributes/deletionpolicy';
export { UpdatePolicy } from './attributes/updatepolicy';
export { DependsOn } from './attributes/dependson';
export { ResourceMetadata } from './attributes/metadata';
import { Service } from './service';
export { S3BucketTransform } from './mapping/s3';
export {
  getInstanceTypeList,
  getInstanceTypeNameList
} from './macros/ec2meta.macro';
export {
  buildLambda,
  buildLambdaTemplate,
  buildInlineLambda,
  buildInlineLambdaTemplate,
  buildZipLambda,
  buildZipLambdaTemplate
} from './macros/lambda.macro';
export { Pseudo } from './pseudo';
import * as stubs from './spec/spec';

stubs.resourceList.forEach(r => {
  exports[r] = Service(stubs[r]);
});
