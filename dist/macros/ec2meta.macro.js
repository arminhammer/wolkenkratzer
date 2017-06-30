

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */function getAMIMap(filters, regions, aws) {return Promise.map(regions, region => {let ec2Client = new aws.EC2({ region: region });return Promise.map(filters, filterSet => {return ec2Client.describeImages({ Filters: filterSet.Filters }).promise().then(ami => {let set = {};if (ami.Images[0]) {if (ami.Images[0].ImageId) {set[filterSet.Name] = ami.Images[0].ImageId;} else {set[filterSet.Name] = 'NOT_SUPPORTED';}} else {set[filterSet.Name] = 'NOT_SUPPORTED';}return set;});}).then(results => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWNyb3MvZWMybWV0YS5tYWNyby5qcyJdLCJuYW1lcyI6WyJnZXRJbnN0YW5jZVR5cGVMaXN0IiwiZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3QiLCJnZXRJbnN0YW5jZVR5cGVNYXAiLCJnZXRSZWdpb25zIiwiZ2V0QU1JTWFwIiwiaW5zdGFuY2VUeXBlcyIsInJlcXVpcmUiLCJQcm9taXNlIiwicmVzdWx0cyIsImZvckVhY2giLCJpbnN0YW5jZVR5cGUiLCJwdXNoIiwiaW5zdGFuY2VfdHlwZSIsImZpbHRlcnMiLCJyZWdpb25zIiwiYXdzIiwibWFwIiwicmVnaW9uIiwiZWMyQ2xpZW50IiwiRUMyIiwiZmlsdGVyU2V0IiwiZGVzY3JpYmVJbWFnZXMiLCJGaWx0ZXJzIiwicHJvbWlzZSIsInRoZW4iLCJhbWkiLCJzZXQiLCJJbWFnZXMiLCJJbWFnZUlkIiwiTmFtZSIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsImltYWdlcyIsImZpbmFsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOztBQUVBLGE7Ozs7Ozs7Ozs7QUFVZ0JBLG1CLEdBQUFBLG1COzs7Ozs7Ozs7QUFTQUMsdUIsR0FBQUEsdUI7Ozs7Ozs7Ozs7Ozs7QUFhQUMsa0IsR0FBQUEsa0I7Ozs7Ozs7Ozs7Ozs7QUFhQUMsVSxHQUFBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBQyxTLEdBQUFBLFMsQ0F2RWhCLE1BQU1DLGdCQUFnQkMsUUFBUSwrQkFBUixDQUF0QixDQUNBLE1BQU1DLFVBQVVELFFBQVEsVUFBUixDQUFoQixDLENBRUE7Ozs7NkhBS08sU0FBU04sbUJBQVQsR0FBK0IsQ0FDcEMsT0FBT0ssYUFBUCxDQUNELEMsQ0FFRDs7Ozt1TEFLTyxTQUFTSix1QkFBVCxHQUFtQyxDQUN4QyxJQUFJTyxVQUFvQixFQUF4QixDQUNBSCxjQUFjSSxPQUFkLENBQXVCQyxZQUFELElBQXVCLENBQzNDRixRQUFRRyxJQUFSLENBQWFELGFBQWFFLGFBQTFCLEVBQ0QsQ0FGRCxFQUdBLE9BQU9KLE9BQVAsQ0FDRCxDLENBRUQ7Ozs7bVZBS08sU0FBU04sa0JBQVQsR0FBOEIsQ0FDbkMsSUFBSU0sVUFBZSxFQUFuQixDQUNBSCxjQUFjSSxPQUFkLENBQXVCQyxZQUFELElBQXVCLENBQzNDRixRQUFRRSxhQUFhRSxhQUFyQixJQUFzQ0YsWUFBdEMsQ0FDRCxDQUZELEVBR0EsT0FBT0YsT0FBUCxDQUNELEMsQ0FFRDs7OztvZkFLTyxTQUFTTCxVQUFULEdBQXNCLENBQzNCLE9BQU8sQ0FDTCxXQURLLEVBRUwsV0FGSyxFQUdMLFdBSEssRUFJTCxXQUpLLEVBS0wsY0FMSyxFQU1MLFdBTkssRUFPTCxXQVBLLEVBUUwsY0FSSyxFQVNMLFlBVEssRUFVTCxnQkFWSyxFQVdMLGdCQVhLLEVBWUwsZ0JBWkssRUFhTCxnQkFiSyxFQWNMLFdBZEssRUFlTCxZQWZLLEVBZ0JMLGVBaEJLLENBQVAsQ0FrQkQsQyxDQUVEOzs7Ozs7d3dCQU9PLFNBQVNDLFNBQVQsQ0FBbUJTLE9BQW5CLEVBQWlDQyxPQUFqQyxFQUErQ0MsR0FBL0MsRUFBeUQsQ0FDOUQsT0FBT1IsUUFBUVMsR0FBUixDQUFZRixPQUFaLEVBQXNCRyxNQUFELElBQWlCLENBQzNDLElBQUlDLFlBQVksSUFBSUgsSUFBSUksR0FBUixDQUFZLEVBQUVGLFFBQVFBLE1BQVYsRUFBWixDQUFoQixDQUNBLE9BQU9WLFFBQVFTLEdBQVIsQ0FBWUgsT0FBWixFQUFzQk8sU0FBRCxJQUFvQixDQUM5QyxPQUFPRixVQUNKRyxjQURJLENBQ1csRUFDZEMsU0FBU0YsVUFBVUUsT0FETCxFQURYLEVBSUpDLE9BSkksR0FLSkMsSUFMSSxDQUtFQyxHQUFELElBQWMsQ0FDbEIsSUFBSUMsTUFBVyxFQUFmLENBQ0EsSUFBSUQsSUFBSUUsTUFBSixDQUFXLENBQVgsQ0FBSixFQUFtQixDQUNqQixJQUFJRixJQUFJRSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxPQUFsQixFQUEyQixDQUN6QkYsSUFBSU4sVUFBVVMsSUFBZCxJQUFzQkosSUFBSUUsTUFBSixDQUFXLENBQVgsRUFBY0MsT0FBcEMsQ0FDRCxDQUZELE1BRU8sQ0FDTEYsSUFBSU4sVUFBVVMsSUFBZCxJQUFzQixlQUF0QixDQUNELENBQ0YsQ0FORCxNQU1PLENBQ0xILElBQUlOLFVBQVVTLElBQWQsSUFBc0IsZUFBdEIsQ0FDRCxDQUNELE9BQU9ILEdBQVAsQ0FDRCxDQWpCSSxDQUFQLENBa0JELENBbkJNLEVBbUJKRixJQW5CSSxDQW1CRWhCLE9BQUQsSUFBa0I7QUFDeEJBLGdCQUFVQSxRQUFRc0IsTUFBUixDQUFlLENBQUNDLElBQUQsRUFBWUMsT0FBWixLQUE2QjtBQUNwRCxZQUFJQyxNQUFNQyxPQUFPQyxJQUFQLENBQVlILE9BQVosRUFBcUIsQ0FBckIsQ0FBVjtBQUNBRCxhQUFLRSxHQUFMLElBQVlELFFBQVFDLEdBQVIsQ0FBWjtBQUNBLGVBQU9GLElBQVA7QUFDRCxPQUpTLEVBSVAsRUFKTyxDQUFWO0FBS0EsYUFBTyxFQUFFZCxRQUFRQSxNQUFWLEVBQWtCbUIsUUFBUTVCLE9BQTFCLEVBQVA7QUFDRCxLQTFCTSxDQUFQO0FBMkJELEdBN0JNLEVBNkJKZ0IsSUE3QkksQ0E2QkMsVUFBU2hCLE9BQVQsRUFBdUI7QUFDN0IsUUFBSTZCLFFBQWEsRUFBakI7QUFDQTdCLFlBQVFDLE9BQVIsQ0FBaUI2QixNQUFELElBQWlCO0FBQy9CRCxZQUFNQyxPQUFPckIsTUFBYixJQUF1QnFCLE9BQU9GLE1BQTlCO0FBQ0QsS0FGRDtBQUdBLFdBQU9DLEtBQVA7QUFDRCxHQW5DTSxDQUFQO0FBb0NEIiwiZmlsZSI6ImVjMm1ldGEubWFjcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGluc3RhbmNlVHlwZXMgPSByZXF1aXJlKCcuLi9lYzJpbmZvL3d3dy9pbnN0YW5jZXMuanNvbicpO1xuY29uc3QgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgaW5zdGFuY2UgdHlwZXMgYW5kIGRldGFpbHMuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOk1hY3JvXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZVR5cGVMaXN0KCkge1xuICByZXR1cm4gaW5zdGFuY2VUeXBlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGp1c3QgdGhlIGluc3RhbmNlIHR5cGUgbmFtZXMgYXZhaWxhYmxlIGluIEFXUy5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6TWFjcm9cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlVHlwZU5hbWVMaXN0KCkge1xuICBsZXQgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcbiAgaW5zdGFuY2VUeXBlcy5mb3JFYWNoKChpbnN0YW5jZVR5cGU6IGFueSkgPT4ge1xuICAgIHJlc3VsdHMucHVzaChpbnN0YW5jZVR5cGUuaW5zdGFuY2VfdHlwZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbWFwIG9mIGFsbCBpbnN0YW5jZSB0eXBlcyBhbmQgZGV0YWlscy5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6TWFjcm9cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlVHlwZU1hcCgpIHtcbiAgbGV0IHJlc3VsdHM6IGFueSA9IHt9O1xuICBpbnN0YW5jZVR5cGVzLmZvckVhY2goKGluc3RhbmNlVHlwZTogYW55KSA9PiB7XG4gICAgcmVzdWx0c1tpbnN0YW5jZVR5cGUuaW5zdGFuY2VfdHlwZV0gPSBpbnN0YW5jZVR5cGU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBuYW1lcyBvZiBhbGwgcmVnaW9ucyBpbiBBV1MuXG4gKiBAbWVtYmVyb2YgbW9kdWxlOk1hY3JvXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdpb25zKCkge1xuICByZXR1cm4gW1xuICAgICd1cy1lYXN0LTEnLFxuICAgICd1cy1lYXN0LTInLFxuICAgICd1cy13ZXN0LTEnLFxuICAgICd1cy13ZXN0LTInLFxuICAgICdjYS1jZW50cmFsLTEnLFxuICAgICdldS13ZXN0LTEnLFxuICAgICdldS13ZXN0LTInLFxuICAgICdldS1jZW50cmFsLTEnLFxuICAgICdhcC1zb3V0aC0xJyxcbiAgICAnYXAtc291dGhlYXN0LTEnLFxuICAgICdhcC1zb3V0aGVhc3QtMicsXG4gICAgJ2FwLW5vcnRoZWFzdC0xJyxcbiAgICAnYXAtbm9ydGhlYXN0LTInLFxuICAgICdzYS1lYXN0LTEnLFxuICAgICdjbi1ub3J0aC0xJyxcbiAgICAndXMtZ292LXdlc3QtMSdcbiAgXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIEFNSSBNYXAgdGhhdCBjYW4gYmUgYWRkZWQgdG8gYSBNYXBwaW5nLlxuICogQG1lbWJlcm9mIG1vZHVsZTpNYWNyb1xuICogQHBhcmFtIGZpbHRlcnNcbiAqIEBwYXJhbSByZWdpb25zXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48VFJlc3VsdD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBTUlNYXAoZmlsdGVyczogYW55LCByZWdpb25zOiBhbnksIGF3czogYW55KSB7XG4gIHJldHVybiBQcm9taXNlLm1hcChyZWdpb25zLCAocmVnaW9uOiBhbnkpID0+IHtcbiAgICBsZXQgZWMyQ2xpZW50ID0gbmV3IGF3cy5FQzIoeyByZWdpb246IHJlZ2lvbiB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5tYXAoZmlsdGVycywgKGZpbHRlclNldDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gZWMyQ2xpZW50XG4gICAgICAgIC5kZXNjcmliZUltYWdlcyh7XG4gICAgICAgICAgRmlsdGVyczogZmlsdGVyU2V0LkZpbHRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgLnByb21pc2UoKVxuICAgICAgICAudGhlbigoYW1pOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgc2V0OiBhbnkgPSB7fTtcbiAgICAgICAgICBpZiAoYW1pLkltYWdlc1swXSkge1xuICAgICAgICAgICAgaWYgKGFtaS5JbWFnZXNbMF0uSW1hZ2VJZCkge1xuICAgICAgICAgICAgICBzZXRbZmlsdGVyU2V0Lk5hbWVdID0gYW1pLkltYWdlc1swXS5JbWFnZUlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0W2ZpbHRlclNldC5OYW1lXSA9ICdOT1RfU1VQUE9SVEVEJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0W2ZpbHRlclNldC5OYW1lXSA9ICdOT1RfU1VQUE9SVEVEJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgICAgfSk7XG4gICAgfSkudGhlbigocmVzdWx0czogYW55KSA9PiB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5yZWR1Y2UoKHByZXY6IGFueSwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhjdXJyZW50KVswXTtcbiAgICAgICAgcHJldltrZXldID0gY3VycmVudFtrZXldO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHJldHVybiB7IHJlZ2lvbjogcmVnaW9uLCBpbWFnZXM6IHJlc3VsdHMgfTtcbiAgICB9KTtcbiAgfSkudGhlbihmdW5jdGlvbihyZXN1bHRzOiBhbnkpIHtcbiAgICBsZXQgZmluYWw6IGFueSA9IHt9O1xuICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGZpbmFsW3Jlc3VsdC5yZWdpb25dID0gcmVzdWx0LmltYWdlcztcbiAgICB9KTtcbiAgICByZXR1cm4gZmluYWw7XG4gIH0pO1xufVxuIl19