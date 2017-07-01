'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.





Service = Service;var _resource = require('./elements/resource');var _path = require('path');var path = _interopRequireWildcard(_path);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function Service(name) {
  const json = require(path.resolve(__dirname, `./stubs/json/${name}.json`));
  const service = { json };
  Object.keys(json.Resources).map(r => {
    service[r] = _resource.Resource.bind({ json, name: r });
  });
  return service;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlLm9sZC5qcyJdLCJuYW1lcyI6WyJTZXJ2aWNlIiwicGF0aCIsIm5hbWUiLCJqc29uIiwicmVxdWlyZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJzZXJ2aWNlIiwiT2JqZWN0Iiwia2V5cyIsIlJlc291cmNlcyIsIm1hcCIsInIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNZ0JBLE8sR0FBQUEsTyxDQUpoQiwrQ0FDQSw0QixJQUFZQyxJLGtTQUdMLFNBQVNELE9BQVQsQ0FBaUJFLElBQWpCLEVBQXlDO0FBQzlDLFFBQU1DLE9BQU9DLFFBQVFILEtBQUtJLE9BQUwsQ0FBYUMsU0FBYixFQUF5QixnQkFBZUosSUFBSyxPQUE3QyxDQUFSLENBQWI7QUFDQSxRQUFNSyxVQUFlLEVBQUVKLElBQUYsRUFBckI7QUFDQUssU0FBT0MsSUFBUCxDQUFZTixLQUFLTyxTQUFqQixFQUE0QkMsR0FBNUIsQ0FBZ0NDLEtBQUs7QUFDbkNMLFlBQVFLLENBQVIsSUFBYSxtQkFBU0MsSUFBVCxDQUFjLEVBQUVWLElBQUYsRUFBUUQsTUFBTVUsQ0FBZCxFQUFkLENBQWI7QUFDRCxHQUZEO0FBR0EsU0FBT0wsT0FBUDtBQUNEIiwiZmlsZSI6InNlcnZpY2Uub2xkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL2VsZW1lbnRzL3Jlc291cmNlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXJ2aWNlKG5hbWU6IHN0cmluZyk6IElTZXJ2aWNlIHtcbiAgY29uc3QganNvbiA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vc3R1YnMvanNvbi8ke25hbWV9Lmpzb25gKSk7XG4gIGNvbnN0IHNlcnZpY2U6IGFueSA9IHsganNvbiB9O1xuICBPYmplY3Qua2V5cyhqc29uLlJlc291cmNlcykubWFwKHIgPT4ge1xuICAgIHNlcnZpY2Vbcl0gPSBSZXNvdXJjZS5iaW5kKHsganNvbiwgbmFtZTogciB9KTtcbiAgfSk7XG4gIHJldHVybiBzZXJ2aWNlO1xufVxuIl19