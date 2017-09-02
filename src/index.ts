export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export {
  Ref,
  FnGetAtt,
  FnEquals,
  FnJoin,
  FnFindInMap,
  FnSub,
  FnAnd
} from './intrinsic';

export { CreationPolicy } from './attributes/creationpolicy';
export { DeletionPolicy } from './attributes/deletionpolicy';
export { DependsOn } from './attributes/dependson';
export { ResourceMetadata } from './attributes/metadata';
import stubs from 'cfn-doc-json-stubs';
import { IService, Service } from './service';
export { S3BucketTransform } from './transform/s3';
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

stubs.resourceList.map(r => {
  exports[r] = Service(stubs[r]);
});
