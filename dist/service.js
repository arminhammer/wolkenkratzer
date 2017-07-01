'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.





Service = Service;var _resource = require('./elements/resource');var _path = require('path');var path = _interopRequireWildcard(_path);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function Service(json) {
  //const json = require(path.resolve(__dirname, `./stubs/json/${name}.json`));
  const service = { json };
  Object.keys(json.Resources).map(r => {
    service[r] = _resource.Resource.bind({ json, name: r });
  });
  return service;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlNlcnZpY2UiLCJwYXRoIiwianNvbiIsInNlcnZpY2UiLCJPYmplY3QiLCJrZXlzIiwiUmVzb3VyY2VzIiwibWFwIiwiciIsImJpbmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNZ0JBLE8sR0FBQUEsTyxDQUpoQiwrQ0FDQSw0QixJQUFZQyxJLGtTQUdMLFNBQVNELE9BQVQsQ0FBaUJFLElBQWpCLEVBQXNDO0FBQzNDO0FBQ0EsUUFBTUMsVUFBZSxFQUFFRCxJQUFGLEVBQXJCO0FBQ0FFLFNBQU9DLElBQVAsQ0FBWUgsS0FBS0ksU0FBakIsRUFBNEJDLEdBQTVCLENBQWdDQyxLQUFLO0FBQ25DTCxZQUFRSyxDQUFSLElBQWEsbUJBQVNDLElBQVQsQ0FBYyxFQUFFUCxJQUFGLEVBQVFRLE1BQU1GLENBQWQsRUFBZCxDQUFiO0FBQ0QsR0FGRDtBQUdBLFNBQU9MLE9BQVA7QUFDRCIsImZpbGUiOiJzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL2VsZW1lbnRzL3Jlc291cmNlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXJ2aWNlKGpzb246IGFueSk6IElTZXJ2aWNlIHtcbiAgLy9jb25zdCBqc29uID0gcmVxdWlyZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9zdHVicy9qc29uLyR7bmFtZX0uanNvbmApKTtcbiAgY29uc3Qgc2VydmljZTogYW55ID0geyBqc29uIH07XG4gIE9iamVjdC5rZXlzKGpzb24uUmVzb3VyY2VzKS5tYXAociA9PiB7XG4gICAgc2VydmljZVtyXSA9IFJlc291cmNlLmJpbmQoeyBqc29uLCBuYW1lOiByIH0pO1xuICB9KTtcbiAgcmV0dXJuIHNlcnZpY2U7XG59XG4iXX0=