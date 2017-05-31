

'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.









getInstanceTypeList = getInstanceTypeList;exports.








getInstanceTypeNameList = getInstanceTypeNameList;exports.












getInstanceTypeMap = getInstanceTypeMap;exports.












getRegions = getRegions;exports.



























getAMIMap = getAMIMap;const instanceTypes = require('../ec2info/www/instances.json');const Promise = require('bluebird'); /**
                                                                                                                           * Returns an array of all instance types and details.
                                                                                                                           * @memberof module:Macro
                                                                                                                           * @returns {Array}
                                                                                                                           */function getInstanceTypeList() {return instanceTypes;} /**
                                                                                                                                                                                     * Returns an array of just the instance type names available in AWS.
                                                                                                                                                                                     * @memberof module:Macro
                                                                                                                                                                                     * @returns {Array}
                                                                                                                                                                                     */function getInstanceTypeNameList() {let results = [];instanceTypes.forEach(instanceType => {results.push(instanceType.instance_type);});return results;} /**
                                                                                                                                                                                                                                                                                                                                                 * Returns a map of all instance types and details.
                                                                                                                                                                                                                                                                                                                                                 * @memberof module:Macro
                                                                                                                                                                                                                                                                                                                                                 * @returns {{}}
                                                                                                                                                                                                                                                                                                                                                 */function getInstanceTypeMap() {let results = {};instanceTypes.forEach(instanceType => {results[instanceType.instance_type] = instanceType;});return results;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Returns an array of the names of all regions in AWS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @memberof module:Macro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @returns {string[]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */function getRegions() {return ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'ca-central-1', 'eu-west-1', 'eu-west-2', 'eu-central-1', 'ap-south-1', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'ap-northeast-2', 'sa-east-1', 'cn-north-1', 'us-gov-west-1'];} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Returns an AMI Map that can be added to a Mapping.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @memberof module:Macro
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param filters
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param regions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @returns {Promise.<TResult>}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */function getAMIMap(filters, regions) {const aws = require('aws-sdk');return Promise.map(regions, region => {let ec2Client = new aws.EC2({ region: region });return Promise.map(filters, filterSet => {return ec2Client.describeImages({ Filters: filterSet.Filters }).promise().then(ami => {let set = {};if (ami.Images[0]) {if (ami.Images[0].ImageId) {set[filterSet.Name] = ami.Images[0].ImageId;} else {set[filterSet.Name] = 'NOT_SUPPORTED';}} else {set[filterSet.Name] = 'NOT_SUPPORTED';}return set;});
    }).then(results => {
      results = results.reduce((prev, current) => {
        let key = Object.keys(current)[0];
        prev[key] = current[key];
        return prev;
      }, {});
      return { region: region, images: results };
    });
  }).then(function (results) {
    let final = {};
    results.forEach(result => {
      final[result.region] = result.images;
    });
    return final;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWNyb3MvZWMybWV0YS5tYWNyby5qcyJdLCJuYW1lcyI6WyJnZXRJbnN0YW5jZVR5cGVMaXN0IiwiZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3QiLCJnZXRJbnN0YW5jZVR5cGVNYXAiLCJnZXRSZWdpb25zIiwiZ2V0QU1JTWFwIiwiaW5zdGFuY2VUeXBlcyIsInJlcXVpcmUiLCJQcm9taXNlIiwicmVzdWx0cyIsImZvckVhY2giLCJpbnN0YW5jZVR5cGUiLCJwdXNoIiwiaW5zdGFuY2VfdHlwZSIsImZpbHRlcnMiLCJyZWdpb25zIiwiYXdzIiwibWFwIiwicmVnaW9uIiwiZWMyQ2xpZW50IiwiRUMyIiwiZmlsdGVyU2V0IiwiZGVzY3JpYmVJbWFnZXMiLCJGaWx0ZXJzIiwicHJvbWlzZSIsInRoZW4iLCJhbWkiLCJzZXQiLCJJbWFnZXMiLCJJbWFnZUlkIiwiTmFtZSIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImltYWdlcyIsImZpbmFsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOztBQUVBLGE7Ozs7Ozs7Ozs7QUFVZ0JBLG1CLEdBQUFBLG1COzs7Ozs7Ozs7QUFTQUMsdUIsR0FBQUEsdUI7Ozs7Ozs7Ozs7Ozs7QUFhQUMsa0IsR0FBQUEsa0I7Ozs7Ozs7Ozs7Ozs7QUFhQUMsVSxHQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBQyxTLEdBQUFBLFMsQ0F2RWhCLE1BQU1DLGdCQUFnQkMsUUFBUSwrQkFBUixDQUF0QixDQUNBLE1BQU1DLFVBQVVELFFBQVEsVUFBUixDQUFoQixDLENBRUE7Ozs7NkhBS08sU0FBU04sbUJBQVQsR0FBK0IsQ0FDcEMsT0FBT0ssYUFBUCxDQUNELEMsQ0FFRDs7Ozt1TEFLTyxTQUFTSix1QkFBVCxHQUFtQyxDQUN4QyxJQUFJTyxVQUFvQixFQUF4QixDQUNBSCxjQUFjSSxPQUFkLENBQXVCQyxZQUFELElBQXVCLENBQzNDRixRQUFRRyxJQUFSLENBQWFELGFBQWFFLGFBQTFCLEVBQ0QsQ0FGRCxFQUdBLE9BQU9KLE9BQVAsQ0FDRCxDLENBRUQ7Ozs7bVZBS08sU0FBU04sa0JBQVQsR0FBOEIsQ0FDbkMsSUFBSU0sVUFBZSxFQUFuQixDQUNBSCxjQUFjSSxPQUFkLENBQXVCQyxZQUFELElBQXVCLENBQzNDRixRQUFRRSxhQUFhRSxhQUFyQixJQUFzQ0YsWUFBdEMsQ0FDRCxDQUZELEVBR0EsT0FBT0YsT0FBUCxDQUNELEMsQ0FFRDs7OztvZkFLTyxTQUFTTCxVQUFULEdBQXNCLENBQzNCLE9BQU8sQ0FDTCxXQURLLEVBRUwsV0FGSyxFQUdMLFdBSEssRUFJTCxXQUpLLEVBS0wsY0FMSyxFQU1MLFdBTkssRUFPTCxXQVBLLEVBUUwsY0FSSyxFQVNMLFlBVEssRUFVTCxnQkFWSyxFQVdMLGdCQVhLLEVBWUwsZ0JBWkssRUFhTCxnQkFiSyxFQWNMLFdBZEssRUFlTCxZQWZLLEVBZ0JMLGVBaEJLLENBQVAsQ0FrQkQsQyxDQUVEOzs7Ozs7d3dCQU9PLFNBQVNDLFNBQVQsQ0FBbUJTLE9BQW5CLEVBQWlDQyxPQUFqQyxFQUErQyxDQUNwRCxNQUFNQyxNQUFNVCxRQUFRLFNBQVIsQ0FBWixDQUNBLE9BQU9DLFFBQVFTLEdBQVIsQ0FBWUYsT0FBWixFQUFzQkcsTUFBRCxJQUFpQixDQUMzQyxJQUFJQyxZQUFZLElBQUlILElBQUlJLEdBQVIsQ0FBWSxFQUFFRixRQUFRQSxNQUFWLEVBQVosQ0FBaEIsQ0FDQSxPQUFPVixRQUFRUyxHQUFSLENBQVlILE9BQVosRUFBc0JPLFNBQUQsSUFBb0IsQ0FDOUMsT0FBT0YsVUFDSkcsY0FESSxDQUNXLEVBQ2RDLFNBQVNGLFVBQVVFLE9BREwsRUFEWCxFQUlKQyxPQUpJLEdBS0pDLElBTEksQ0FLRUMsR0FBRCxJQUFjLENBQ2xCLElBQUlDLE1BQVcsRUFBZixDQUNBLElBQUlELElBQUlFLE1BQUosQ0FBVyxDQUFYLENBQUosRUFBbUIsQ0FDakIsSUFBSUYsSUFBSUUsTUFBSixDQUFXLENBQVgsRUFBY0MsT0FBbEIsRUFBMkIsQ0FDekJGLElBQUlOLFVBQVVTLElBQWQsSUFBc0JKLElBQUlFLE1BQUosQ0FBVyxDQUFYLEVBQWNDLE9BQXBDLENBQ0QsQ0FGRCxNQUVPLENBQ0xGLElBQUlOLFVBQVVTLElBQWQsSUFBc0IsZUFBdEIsQ0FDRCxDQUNGLENBTkQsTUFNTyxDQUNMSCxJQUFJTixVQUFVUyxJQUFkLElBQXNCLGVBQXRCLENBQ0QsQ0FDRCxPQUFPSCxHQUFQLENBQ0QsQ0FqQkksQ0FBUDtBQWtCRCxLQW5CTSxFQW1CSkYsSUFuQkksQ0FtQkVoQixPQUFELElBQWtCO0FBQ3hCQSxnQkFBVUEsUUFBUXNCLE1BQVIsQ0FBZSxDQUFDQyxJQUFELEVBQVlDLE9BQVosS0FBNkI7QUFDcEQsWUFBSUMsTUFBTUMsT0FBT0MsSUFBUCxDQUFZSCxPQUFaLEVBQXFCLENBQXJCLENBQVY7QUFDQUQsYUFBS0UsR0FBTCxJQUFZRCxRQUFRQyxHQUFSLENBQVo7QUFDQSxlQUFPRixJQUFQO0FBQ0QsT0FKUyxFQUlQLEVBSk8sQ0FBVjtBQUtBLGFBQU8sRUFBRWQsUUFBUUEsTUFBVixFQUFrQm1CLFFBQVE1QixPQUExQixFQUFQO0FBQ0QsS0ExQk0sQ0FBUDtBQTJCRCxHQTdCTSxFQTZCSmdCLElBN0JJLENBNkJDLFVBQVNoQixPQUFULEVBQXVCO0FBQzdCLFFBQUk2QixRQUFhLEVBQWpCO0FBQ0E3QixZQUFRQyxPQUFSLENBQWlCNkIsTUFBRCxJQUFpQjtBQUMvQkQsWUFBTUMsT0FBT3JCLE1BQWIsSUFBdUJxQixPQUFPRixNQUE5QjtBQUNELEtBRkQ7QUFHQSxXQUFPQyxLQUFQO0FBQ0QsR0FuQ00sQ0FBUDtBQW9DRCIsImZpbGUiOiJlYzJtZXRhLm1hY3JvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpbnN0YW5jZVR5cGVzID0gcmVxdWlyZSgnLi4vZWMyaW5mby93d3cvaW5zdGFuY2VzLmpzb24nKTtcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIGluc3RhbmNlIHR5cGVzIGFuZCBkZXRhaWxzLlxuICogQG1lbWJlcm9mIG1vZHVsZTpNYWNyb1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2VUeXBlTGlzdCgpIHtcbiAgcmV0dXJuIGluc3RhbmNlVHlwZXM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBqdXN0IHRoZSBpbnN0YW5jZSB0eXBlIG5hbWVzIGF2YWlsYWJsZSBpbiBBV1MuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOk1hY3JvXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZVR5cGVOYW1lTGlzdCgpIHtcbiAgbGV0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIGluc3RhbmNlVHlwZXMuZm9yRWFjaCgoaW5zdGFuY2VUeXBlOiBhbnkpID0+IHtcbiAgICByZXN1bHRzLnB1c2goaW5zdGFuY2VUeXBlLmluc3RhbmNlX3R5cGUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hcCBvZiBhbGwgaW5zdGFuY2UgdHlwZXMgYW5kIGRldGFpbHMuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOk1hY3JvXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZVR5cGVNYXAoKSB7XG4gIGxldCByZXN1bHRzOiBhbnkgPSB7fTtcbiAgaW5zdGFuY2VUeXBlcy5mb3JFYWNoKChpbnN0YW5jZVR5cGU6IGFueSkgPT4ge1xuICAgIHJlc3VsdHNbaW5zdGFuY2VUeXBlLmluc3RhbmNlX3R5cGVdID0gaW5zdGFuY2VUeXBlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbmFtZXMgb2YgYWxsIHJlZ2lvbnMgaW4gQVdTLlxuICogQG1lbWJlcm9mIG1vZHVsZTpNYWNyb1xuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnaW9ucygpIHtcbiAgcmV0dXJuIFtcbiAgICAndXMtZWFzdC0xJyxcbiAgICAndXMtZWFzdC0yJyxcbiAgICAndXMtd2VzdC0xJyxcbiAgICAndXMtd2VzdC0yJyxcbiAgICAnY2EtY2VudHJhbC0xJyxcbiAgICAnZXUtd2VzdC0xJyxcbiAgICAnZXUtd2VzdC0yJyxcbiAgICAnZXUtY2VudHJhbC0xJyxcbiAgICAnYXAtc291dGgtMScsXG4gICAgJ2FwLXNvdXRoZWFzdC0xJyxcbiAgICAnYXAtc291dGhlYXN0LTInLFxuICAgICdhcC1ub3J0aGVhc3QtMScsXG4gICAgJ2FwLW5vcnRoZWFzdC0yJyxcbiAgICAnc2EtZWFzdC0xJyxcbiAgICAnY24tbm9ydGgtMScsXG4gICAgJ3VzLWdvdi13ZXN0LTEnXG4gIF07XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBBTUkgTWFwIHRoYXQgY2FuIGJlIGFkZGVkIHRvIGEgTWFwcGluZy5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6TWFjcm9cbiAqIEBwYXJhbSBmaWx0ZXJzXG4gKiBAcGFyYW0gcmVnaW9uc1xuICogQHJldHVybnMge1Byb21pc2UuPFRSZXN1bHQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QU1JTWFwKGZpbHRlcnM6IGFueSwgcmVnaW9uczogYW55KSB7XG4gIGNvbnN0IGF3cyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcbiAgcmV0dXJuIFByb21pc2UubWFwKHJlZ2lvbnMsIChyZWdpb246IGFueSkgPT4ge1xuICAgIGxldCBlYzJDbGllbnQgPSBuZXcgYXdzLkVDMih7IHJlZ2lvbjogcmVnaW9uIH0pO1xuICAgIHJldHVybiBQcm9taXNlLm1hcChmaWx0ZXJzLCAoZmlsdGVyU2V0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBlYzJDbGllbnRcbiAgICAgICAgLmRlc2NyaWJlSW1hZ2VzKHtcbiAgICAgICAgICBGaWx0ZXJzOiBmaWx0ZXJTZXQuRmlsdGVyc1xuICAgICAgICB9KVxuICAgICAgICAucHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChhbWk6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBzZXQ6IGFueSA9IHt9O1xuICAgICAgICAgIGlmIChhbWkuSW1hZ2VzWzBdKSB7XG4gICAgICAgICAgICBpZiAoYW1pLkltYWdlc1swXS5JbWFnZUlkKSB7XG4gICAgICAgICAgICAgIHNldFtmaWx0ZXJTZXQuTmFtZV0gPSBhbWkuSW1hZ2VzWzBdLkltYWdlSWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRbZmlsdGVyU2V0Lk5hbWVdID0gJ05PVF9TVVBQT1JURUQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRbZmlsdGVyU2V0Lk5hbWVdID0gJ05PVF9TVVBQT1JURUQnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgICB9KTtcbiAgICB9KS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnJlZHVjZSgocHJldjogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKGN1cnJlbnQpWzBdO1xuICAgICAgICBwcmV2W2tleV0gPSBjdXJyZW50W2tleV07XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge30pO1xuICAgICAgcmV0dXJuIHsgcmVnaW9uOiByZWdpb24sIGltYWdlczogcmVzdWx0cyB9O1xuICAgIH0pO1xuICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdHM6IGFueSkge1xuICAgIGxldCBmaW5hbDogYW55ID0ge307XG4gICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgZmluYWxbcmVzdWx0LnJlZ2lvbl0gPSByZXN1bHQuaW1hZ2VzO1xuICAgIH0pO1xuICAgIHJldHVybiBmaW5hbDtcbiAgfSk7XG59XG4iXX0=