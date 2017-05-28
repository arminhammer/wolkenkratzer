'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = Description;
function Description(content) {
  if (!content) {
    throw new SyntaxError(`New Description must have content.`);
  }
  return { kind: 'Description', Content: content };
}