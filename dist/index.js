"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = require("./template");
exports.Template = template_1.Template;
var parameter_1 = require("./elements/parameter");
exports.Parameter = parameter_1.Parameter;
var description_1 = require("./elements/description");
exports.Description = description_1.Description;
var output_1 = require("./elements/output");
exports.Output = output_1.Output;
var mapping_1 = require("./elements/mapping");
exports.Mapping = mapping_1.Mapping;
var resource_1 = require("./elements/resource");
exports.Resource = resource_1.Resource;
exports.CustomResource = resource_1.CustomResource;
var condition_1 = require("./elements/condition");
exports.Condition = condition_1.Condition;
var intrinsic_1 = require("./intrinsic");
exports.Ref = intrinsic_1.Ref;
exports.FnGetAtt = intrinsic_1.FnGetAtt;
exports.FnEquals = intrinsic_1.FnEquals;
exports.FnJoin = intrinsic_1.FnJoin;
exports.FnFindInMap = intrinsic_1.FnFindInMap;
exports.FnSub = intrinsic_1.FnSub;
exports.FnAnd = intrinsic_1.FnAnd;
var creationpolicy_1 = require("./attributes/creationpolicy");
exports.CreationPolicy = creationpolicy_1.CreationPolicy;
var deletionpolicy_1 = require("./attributes/deletionpolicy");
exports.DeletionPolicy = deletionpolicy_1.DeletionPolicy;
var dependson_1 = require("./attributes/dependson");
exports.DependsOn = dependson_1.DependsOn;
var metadata_1 = require("./attributes/metadata");
exports.ResourceMetadata = metadata_1.ResourceMetadata;
const cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
const service_1 = require("./service");
var s3_1 = require("./transform/s3");
exports.S3BucketTransform = s3_1.S3BucketTransform;
var ec2meta_macro_1 = require("./macros/ec2meta.macro");
exports.getInstanceTypeList = ec2meta_macro_1.getInstanceTypeList;
exports.getInstanceTypeNameList = ec2meta_macro_1.getInstanceTypeNameList;
var lambda_macro_1 = require("./macros/lambda.macro");
exports.buildLambda = lambda_macro_1.buildLambda;
exports.buildLambdaTemplate = lambda_macro_1.buildLambdaTemplate;
exports.buildInlineLambda = lambda_macro_1.buildInlineLambda;
exports.buildInlineLambdaTemplate = lambda_macro_1.buildInlineLambdaTemplate;
exports.buildZipLambda = lambda_macro_1.buildZipLambda;
exports.buildZipLambdaTemplate = lambda_macro_1.buildZipLambdaTemplate;
var pseudo_1 = require("./pseudo");
exports.Pseudo = pseudo_1.Pseudo;
cfn_doc_json_stubs_1.default.resourceList.map(r => {
    exports[r] = service_1.Service(cfn_doc_json_stubs_1.default[r]);
});
//# sourceMappingURL=index.js.map