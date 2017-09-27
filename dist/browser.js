(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./template", "./elements/parameter", "./elements/description", "./elements/output", "./elements/mapping", "./elements/resource", "./elements/condition", "./intrinsic", "./service", "./attributes/creationpolicy", "./attributes/metadata", "./transform/s3", "./pseudo", "cfn-doc-json-stubs"], factory);
    }
})(function (require, exports) {
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
    const service_1 = require("./service");
    var creationpolicy_1 = require("./attributes/creationpolicy");
    exports.CreationPolicy = creationpolicy_1.CreationPolicy;
    var metadata_1 = require("./attributes/metadata");
    exports.ResourceMetadata = metadata_1.ResourceMetadata;
    var s3_1 = require("./transform/s3");
    exports.S3BucketTransform = s3_1.S3BucketTransform;
    var pseudo_1 = require("./pseudo");
    exports.Pseudo = pseudo_1.Pseudo;
    const cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
    cfn_doc_json_stubs_1.default.resourceList.map(r => {
        exports[r] = service_1.Service(cfn_doc_json_stubs_1.default[r]);
    });
});
//# sourceMappingURL=browser.js.map