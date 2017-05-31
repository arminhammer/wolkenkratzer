'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.





Service = Service;var _resource = require('./elements/resource');var _path = require('path');var path = _interopRequireWildcard(_path);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function Service(name) {
  const json = require(path.resolve(__dirname, `./stubs/json/${name}.json`));
  const service = { json };
  Object.keys(json.Resources).map(r => {
    service[r] = _resource.Resource.bind({ json, name: r });
  });
  return service;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIlNlcnZpY2UiLCJwYXRoIiwibmFtZSIsImpzb24iLCJyZXF1aXJlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsInNlcnZpY2UiLCJPYmplY3QiLCJrZXlzIiwiUmVzb3VyY2VzIiwibWFwIiwiciIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1nQkEsTyxHQUFBQSxPLENBSmhCLCtDQUNBLDRCLElBQVlDLEksa1NBR0wsU0FBU0QsT0FBVCxDQUFpQkUsSUFBakIsRUFBeUM7QUFDOUMsUUFBTUMsT0FBT0MsUUFBUUgsS0FBS0ksT0FBTCxDQUFhQyxTQUFiLEVBQXlCLGdCQUFlSixJQUFLLE9BQTdDLENBQVIsQ0FBYjtBQUNBLFFBQU1LLFVBQWUsRUFBRUosSUFBRixFQUFyQjtBQUNBSyxTQUFPQyxJQUFQLENBQVlOLEtBQUtPLFNBQWpCLEVBQTRCQyxHQUE1QixDQUFnQ0MsS0FBSztBQUNuQ0wsWUFBUUssQ0FBUixJQUFhLG1CQUFTQyxJQUFULENBQWMsRUFBRVYsSUFBRixFQUFRRCxNQUFNVSxDQUFkLEVBQWQsQ0FBYjtBQUNELEdBRkQ7QUFHQSxTQUFPTCxPQUFQO0FBQ0QiLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9lbGVtZW50cy9yZXNvdXJjZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gU2VydmljZShuYW1lOiBzdHJpbmcpOiBJU2VydmljZSB7XG4gIGNvbnN0IGpzb24gPSByZXF1aXJlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL3N0dWJzL2pzb24vJHtuYW1lfS5qc29uYCkpO1xuICBjb25zdCBzZXJ2aWNlOiBhbnkgPSB7IGpzb24gfTtcbiAgT2JqZWN0LmtleXMoanNvbi5SZXNvdXJjZXMpLm1hcChyID0+IHtcbiAgICBzZXJ2aWNlW3JdID0gUmVzb3VyY2UuYmluZCh7IGpzb24sIG5hbWU6IHIgfSk7XG4gIH0pO1xuICByZXR1cm4gc2VydmljZTtcbn1cbiJdfQ==