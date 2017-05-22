'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstanceTypeNameList = exports.getInstanceTypeList = exports.ResourceMetadata = exports.CreationPolicy = exports.FnJoin = exports.FnEquals = exports.FnGetAtt = exports.Ref = exports.Condition = exports.CustomResource = exports.Resource = exports.Mapping = exports.Output = exports.Description = exports.Parameter = exports.Template = undefined;

var _template = require('./template');

Object.defineProperty(exports, 'Template', {
  enumerable: true,
  get: function get() {
    return _template.Template;
  }
});

var _parameter = require('./elements/parameter');

Object.defineProperty(exports, 'Parameter', {
  enumerable: true,
  get: function get() {
    return _parameter.Parameter;
  }
});

var _description = require('./elements/description');

Object.defineProperty(exports, 'Description', {
  enumerable: true,
  get: function get() {
    return _description.Description;
  }
});

var _output = require('./elements/output');

Object.defineProperty(exports, 'Output', {
  enumerable: true,
  get: function get() {
    return _output.Output;
  }
});

var _mapping = require('./elements/mapping');

Object.defineProperty(exports, 'Mapping', {
  enumerable: true,
  get: function get() {
    return _mapping.Mapping;
  }
});

var _resource = require('./elements/resource');

Object.defineProperty(exports, 'Resource', {
  enumerable: true,
  get: function get() {
    return _resource.Resource;
  }
});
Object.defineProperty(exports, 'CustomResource', {
  enumerable: true,
  get: function get() {
    return _resource.CustomResource;
  }
});

var _condition = require('./elements/condition');

Object.defineProperty(exports, 'Condition', {
  enumerable: true,
  get: function get() {
    return _condition.Condition;
  }
});

var _intrinsic = require('./intrinsic');

Object.defineProperty(exports, 'Ref', {
  enumerable: true,
  get: function get() {
    return _intrinsic.Ref;
  }
});
Object.defineProperty(exports, 'FnGetAtt', {
  enumerable: true,
  get: function get() {
    return _intrinsic.FnGetAtt;
  }
});
Object.defineProperty(exports, 'FnEquals', {
  enumerable: true,
  get: function get() {
    return _intrinsic.FnEquals;
  }
});
Object.defineProperty(exports, 'FnJoin', {
  enumerable: true,
  get: function get() {
    return _intrinsic.FnJoin;
  }
});

var _creationpolicy = require('./attributes/creationpolicy');

Object.defineProperty(exports, 'CreationPolicy', {
  enumerable: true,
  get: function get() {
    return _creationpolicy.CreationPolicy;
  }
});

var _metadata = require('./attributes/metadata');

Object.defineProperty(exports, 'ResourceMetadata', {
  enumerable: true,
  get: function get() {
    return _metadata.ResourceMetadata;
  }
});

var _ec2meta = require('./macros/ec2meta.macro');

Object.defineProperty(exports, 'getInstanceTypeList', {
  enumerable: true,
  get: function get() {
    return _ec2meta.getInstanceTypeList;
  }
});
Object.defineProperty(exports, 'getInstanceTypeNameList', {
  enumerable: true,
  get: function get() {
    return _ec2meta.getInstanceTypeNameList;
  }
});

var _service = require('./service');

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var files = fs.readdirSync(path.resolve(__dirname, '../stubs/json/resources/'));

files.map(function (file) {
  var service = file.replace('.json', '');
  exports[service] = (0, _service.Service)(service);
});