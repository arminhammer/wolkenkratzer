"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreationPolicy(resource, content) {
    if (!resource ||
        !content ||
        (!content.AutoScalingCreationPolicy && !content.ResourceSignal)) {
        throw new SyntaxError("New CreationPolicy must have content, " + JSON.stringify(content) + " is invalid.");
    }
    return { kind: 'CreationPolicy', Resource: resource, Content: content };
}
exports.CreationPolicy = CreationPolicy;
//# sourceMappingURL=creationpolicy.js.map