'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Condition = Condition;

var _intrinsic = require('../intrinsic');

function Condition(name, conditionFn) {
  return { kind: 'Condition', Name: name, Condition: conditionFn };
}