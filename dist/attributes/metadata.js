'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceMetadata = ResourceMetadata;
function ResourceMetadata(resource, content) {
  if (!resource || !content) {
    throw new SyntaxError(`New Metadata must have content, ${JSON.stringify(content)} is invalid.`);
  }
  return { kind: 'ResourceMetadata', Resource: resource, Content: content };
}