'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ref = Ref;
exports.FnGetAtt = FnGetAtt;
exports.FnJoin = FnJoin;
exports.FnEquals = FnEquals;
exports.FnSub = FnSub;
exports.FnBase64 = FnBase64;
exports.FnFindInMap = FnFindInMap;
exports.FnGetAZs = FnGetAZs;
exports.FnSelect = FnSelect;

var _resource = require('./elements/resource');

var _parameter = require('./elements/parameter');

var _template = require('./template');

function Ref(target) {
  if (typeof target === 'string') {
    return { kind: 'Ref', Ref: target };
  } else {
    return { kind: 'Ref', Ref: target.Name };
  }
}

function FnGetAtt(target, attr) {
  if (typeof target === 'string') {
    return { kind: 'FnGetAtt', FnGetAtt: [target, attr] };
  } else {
    return { kind: 'FnGetAtt', FnGetAtt: [target.Name, attr] };
  }
}

function FnJoin(delimiter, values) {
  return { kind: 'FnJoin', Delimiter: delimiter, Values: values };
}

function FnEquals(one, two) {
  return { kind: 'FnEquals', FnEquals: [one, two] };
}

// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
function FnSub(input) {
  return { kind: 'FnSub', FnSub: input };
}

function FnBase64(input) {
  return { kind: 'FnBase64', FnBase64: input };
}

function FnFindInMap(mapName, topLevelKey, secondLevelKey) {
  return {
    kind: 'FnFindInMap',
    'Fn::FindInMap': [this.mapName, this.topLevelKey, this.secondLevelKey]
  };
}

function FnGetAZs(region) {
  if (!region) {
    region = { Ref: 'AWS::Region' };
  }
  return { kind: 'FnGetAZs', FnGetAZs: region };
}

function FnSelect(index, list) {
  return { kind: 'FnSelect', FnSelect: [index, list] };
}