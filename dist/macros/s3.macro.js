

'use strict';

var _awsSdk = require('aws-sdk');var aws = _interopRequireWildcard(_awsSdk);
var _util = require('../util');var util = _interopRequireWildcard(_util);
var _service = require('../service');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

const s3Resource = new _service.Service('S3');
const types = require('../types');

/**
                                    * @memberof module:Macro
                                    * @param name
                                    * @param newName
                                    * @param region
                                    * @returns {Promise}
                                    * @constructor
                                    */
function Bucket(name, newName, region) {
  const s3Client = new aws.S3({ region: region });
  return new Promise((resolve, reject) => {
    let bucket = new s3Resource.Bucket(util.safeRename(newName));
    bucket.BucketName = newName;
    return (
      s3Client.
      getBucketVersioning({ Bucket: name }).
      promise().
      then(versionData => {
        if (!util.isEmpty(versionData)) {
          bucket.VersioningConfiguration = new types.AmazonS3VersioningConfiguration(
          versionData);

        }
        // return s3Client.getBucketAcl({ Bucket: name }).promise()
        return s3Client.getBucketCors({ Bucket: name }).promise();
      })
      /* .then(function (aclData) {
         console.log('2')
         console.log(JSON.stringify(aclData))
         bucket.AccessControl = aclData
         })*/.
      then(function (corsData) {
        bucket.CorsConfiguration = new types.AmazonS3CorsConfiguration(
        corsData);

        return s3Client.
        getBucketLifecycleConfiguration({ Bucket: name }).
        promise();
      }).
      catch(function () {
        // Silently catch the NoSuchCORSConfiguration
        return s3Client.
        getBucketLifecycleConfiguration({ Bucket: name }).
        promise();
      }).
      then(function (lifeData) {
        bucket.LifecycleConfiguration = lifeData;
        return s3Client.getBucketLogging({ Bucket: name }).promise();
      }).
      catch(function () {
        // Silently catch the NoSuchLifecycleConfiguration
        return s3Client.getBucketLogging({ Bucket: name }).promise();
      }).
      then(function (loggingData) {
        bucket.LoggingConfiguration = new types.AmazonS3LoggingConfiguration(
        loggingData);

        return s3Client.getBucketNotification({ Bucket: name }).promise();
      }).
      then(function (notificationData) {
        bucket.NotificationConfiguration = new types.AmazonS3NotificationConfiguration(
        notificationData);

        return s3Client.getBucketReplication({ Bucket: name }).promise();
      }).
      then(function (replData) {
        bucket.ReplicationConfiguration = new types.AmazonS3ReplicationConfiguration(
        replData);

        return s3Client.getBucketTagging({ Bucket: name }).promise();
      }).
      then(function (tagsData) {
        tagsData.TagSet.forEach(tag => {
          bucket.Tags.add(tag);
        });
        return s3Client.getBucketWebsite({ Bucket: name }).promise();
      }).
      catch(function () {
        // Silently catch the NoSuchTagSet
        return s3Client.getBucketWebsite({ Bucket: name }).promise();
      }).
      then(function (websiteData) {
        bucket.WebsiteConfiguration = new types.AmazonS3WebsiteConfigurationProperty(
        websiteData);

      }).
      catch(function () {
        // Silently catch the NoSuchWebsiteConfiguration
        return;
      }).
      then(function () {
        resolve(bucket);
      }).
      catch(function (e) {
        // Silently catch the NoSuchWebsiteConfiguration
        reject(e);
      }));

  });
}

module.exports = {
  Bucket: Bucket };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWNyb3MvczMubWFjcm8uanMiXSwibmFtZXMiOlsiYXdzIiwidXRpbCIsInMzUmVzb3VyY2UiLCJ0eXBlcyIsInJlcXVpcmUiLCJCdWNrZXQiLCJuYW1lIiwibmV3TmFtZSIsInJlZ2lvbiIsInMzQ2xpZW50IiwiUzMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImJ1Y2tldCIsInNhZmVSZW5hbWUiLCJCdWNrZXROYW1lIiwiZ2V0QnVja2V0VmVyc2lvbmluZyIsInByb21pc2UiLCJ0aGVuIiwidmVyc2lvbkRhdGEiLCJpc0VtcHR5IiwiVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM1ZlcnNpb25pbmdDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0Q29ycyIsImNvcnNEYXRhIiwiQ29yc0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM0NvcnNDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiIsImNhdGNoIiwibGlmZURhdGEiLCJMaWZlY3ljbGVDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0TG9nZ2luZyIsImxvZ2dpbmdEYXRhIiwiTG9nZ2luZ0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM0xvZ2dpbmdDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsIk5vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJBbWF6b25TM05vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJnZXRCdWNrZXRSZXBsaWNhdGlvbiIsInJlcGxEYXRhIiwiUmVwbGljYXRpb25Db25maWd1cmF0aW9uIiwiQW1hem9uUzNSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJnZXRCdWNrZXRUYWdnaW5nIiwidGFnc0RhdGEiLCJUYWdTZXQiLCJmb3JFYWNoIiwidGFnIiwiVGFncyIsImFkZCIsImdldEJ1Y2tldFdlYnNpdGUiLCJ3ZWJzaXRlRGF0YSIsIldlYnNpdGVDb25maWd1cmF0aW9uIiwiQW1hem9uUzNXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5IiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBRUE7O0FBRUEsaUMsSUFBWUEsRztBQUNaLCtCLElBQVlDLEk7QUFDWixxQzs7QUFFQSxNQUFNQyxhQUFrQixxQkFBWSxJQUFaLENBQXhCO0FBQ0EsTUFBTUMsUUFBUUMsUUFBUSxVQUFSLENBQWQ7O0FBRUE7Ozs7Ozs7O0FBUUEsU0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBMkJDLE9BQTNCLEVBQXlDQyxNQUF6QyxFQUFzRDtBQUNwRCxRQUFNQyxXQUFXLElBQUlULElBQUlVLEVBQVIsQ0FBVyxFQUFFRixRQUFRQSxNQUFWLEVBQVgsQ0FBakI7QUFDQSxTQUFPLElBQUlHLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdEMsUUFBSUMsU0FBUyxJQUFJWixXQUFXRyxNQUFmLENBQXNCSixLQUFLYyxVQUFMLENBQWdCUixPQUFoQixDQUF0QixDQUFiO0FBQ0FPLFdBQU9FLFVBQVAsR0FBb0JULE9BQXBCO0FBQ0E7QUFDRUU7QUFDR1EseUJBREgsQ0FDdUIsRUFBRVosUUFBUUMsSUFBVixFQUR2QjtBQUVHWSxhQUZIO0FBR0dDLFVBSEgsQ0FHU0MsV0FBRCxJQUFzQjtBQUMxQixZQUFJLENBQUNuQixLQUFLb0IsT0FBTCxDQUFhRCxXQUFiLENBQUwsRUFBZ0M7QUFDOUJOLGlCQUFPUSx1QkFBUCxHQUFpQyxJQUFJbkIsTUFBTW9CLCtCQUFWO0FBQy9CSCxxQkFEK0IsQ0FBakM7O0FBR0Q7QUFDRDtBQUNBLGVBQU9YLFNBQVNlLGFBQVQsQ0FBdUIsRUFBRW5CLFFBQVFDLElBQVYsRUFBdkIsRUFBeUNZLE9BQXpDLEVBQVA7QUFDRCxPQVhIO0FBWUU7Ozs7YUFaRjtBQWlCR0MsVUFqQkgsQ0FpQlEsVUFBU00sUUFBVCxFQUF3QjtBQUM1QlgsZUFBT1ksaUJBQVAsR0FBMkIsSUFBSXZCLE1BQU13Qix5QkFBVjtB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bG93XG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgYXdzIGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJztcblxuY29uc3QgczNSZXNvdXJjZTogYW55ID0gbmV3IFNlcnZpY2UoJ1MzJyk7XG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyk7XG5cbi8qKlxuICogQG1lbWJlcm9mIG1vZHVsZTpNYWNyb1xuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBuZXdOYW1lXG4gKiBAcGFyYW0gcmVnaW9uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCdWNrZXQobmFtZTogYW55LCBuZXdOYW1lOiBhbnksIHJlZ2lvbjogYW55KSB7XG4gIGNvbnN0IHMzQ2xpZW50ID0gbmV3IGF3cy5TMyh7IHJlZ2lvbjogcmVnaW9uIH0pO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBidWNrZXQgPSBuZXcgczNSZXNvdXJjZS5CdWNrZXQodXRpbC5zYWZlUmVuYW1lKG5ld05hbWUpKTtcbiAgICBidWNrZXQuQnVja2V0TmFtZSA9IG5ld05hbWU7XG4gICAgcmV0dXJuIChcbiAgICAgIHMzQ2xpZW50XG4gICAgICAgIC5nZXRCdWNrZXRWZXJzaW9uaW5nKHsgQnVja2V0OiBuYW1lIH0pXG4gICAgICAgIC5wcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHZlcnNpb25EYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoIXV0aWwuaXNFbXB0eSh2ZXJzaW9uRGF0YSkpIHtcbiAgICAgICAgICAgIGJ1Y2tldC5WZXJzaW9uaW5nQ29uZmlndXJhdGlvbiA9IG5ldyB0eXBlcy5BbWF6b25TM1ZlcnNpb25pbmdDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgICB2ZXJzaW9uRGF0YVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldEFjbCh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKClcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0Q29ycyh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8qIC50aGVuKGZ1bmN0aW9uIChhY2xEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnMicpXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhY2xEYXRhKSlcbiAgICAgIGJ1Y2tldC5BY2Nlc3NDb250cm9sID0gYWNsRGF0YVxuICAgIH0pKi9cbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oY29yc0RhdGE6IGFueSkge1xuICAgICAgICAgIGJ1Y2tldC5Db3JzQ29uZmlndXJhdGlvbiA9IG5ldyB0eXBlcy5BbWF6b25TM0NvcnNDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgY29yc0RhdGFcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBzM0NsaWVudFxuICAgICAgICAgICAgLmdldEJ1Y2tldExpZmVjeWNsZUNvbmZpZ3VyYXRpb24oeyBCdWNrZXQ6IG5hbWUgfSlcbiAgICAgICAgICAgIC5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBTaWxlbnRseSBjYXRjaCB0aGUgTm9TdWNoQ09SU0NvbmZpZ3VyYXRpb25cbiAgICAgICAgICByZXR1cm4gczNDbGllbnRcbiAgICAgICAgICAgIC5nZXRCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uKHsgQnVja2V0OiBuYW1lIH0pXG4gICAgICAgICAgICAucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihsaWZlRGF0YTogYW55KSB7XG4gICAgICAgICAgYnVja2V0LkxpZmVjeWNsZUNvbmZpZ3VyYXRpb24gPSBsaWZlRGF0YTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0TG9nZ2luZyh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBTaWxlbnRseSBjYXRjaCB0aGUgTm9TdWNoTGlmZWN5Y2xlQ29uZmlndXJhdGlvblxuICAgICAgICAgIHJldHVybiBzM0NsaWVudC5nZXRCdWNrZXRMb2dnaW5nKHsgQnVja2V0OiBuYW1lIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obG9nZ2luZ0RhdGE6IGFueSkge1xuICAgICAgICAgIGJ1Y2tldC5Mb2dnaW5nQ29uZmlndXJhdGlvbiA9IG5ldyB0eXBlcy5BbWF6b25TM0xvZ2dpbmdDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgbG9nZ2luZ0RhdGFcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBzM0NsaWVudC5nZXRCdWNrZXROb3RpZmljYXRpb24oeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihub3RpZmljYXRpb25EYXRhOiBhbnkpIHtcbiAgICAgICAgICBidWNrZXQuTm90aWZpY2F0aW9uQ29uZmlndXJhdGlvbiA9IG5ldyB0eXBlcy5BbWF6b25TM05vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICBub3RpZmljYXRpb25EYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0UmVwbGljYXRpb24oeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXBsRGF0YTogYW55KSB7XG4gICAgICAgICAgYnVja2V0LlJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbiA9IG5ldyB0eXBlcy5BbWF6b25TM1JlcGxpY2F0aW9uQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIHJlcGxEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0VGFnZ2luZyh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHRhZ3NEYXRhOiBhbnkpIHtcbiAgICAgICAgICB0YWdzRGF0YS5UYWdTZXQuZm9yRWFjaCgodGFnOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGJ1Y2tldC5UYWdzLmFkZCh0YWcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzM0NsaWVudC5nZXRCdWNrZXRXZWJzaXRlKHsgQnVja2V0OiBuYW1lIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFNpbGVudGx5IGNhdGNoIHRoZSBOb1N1Y2hUYWdTZXRcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0V2Vic2l0ZSh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHdlYnNpdGVEYXRhOiBhbnkpIHtcbiAgICAgICAgICBidWNrZXQuV2Vic2l0ZUNvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5KFxuICAgICAgICAgICAgd2Vic2l0ZURhdGFcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gU2lsZW50bHkgY2F0Y2ggdGhlIE5vU3VjaFdlYnNpdGVDb25maWd1cmF0aW9uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXNvbHZlKGJ1Y2tldCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlOiBhbnkpIHtcbiAgICAgICAgICAvLyBTaWxlbnRseSBjYXRjaCB0aGUgTm9TdWNoV2Vic2l0ZUNvbmZpZ3VyYXRpb25cbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCdWNrZXQ6IEJ1Y2tldFxufTtcbiJdfQ==