'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Description = Description;
function Description(params) {
  if (!params || !params.Content) {
    throw new SyntaxError('New Description must have a Content.');
  }
  var defaultP = { kind: 'Description' };
  var mix = _extends({}, defaultP, params);
  return mix;
}