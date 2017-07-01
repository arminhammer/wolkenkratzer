

'use strict';

var _util = require('../util');var util = _interopRequireWildcard(_util);
var _service = require('../service');function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}
const s3Json = require('../stubs/json/S3.json');
const s3Resource = new _service.Service(s3Json);
const types = require('../types');

/**
                                    * @memberof module:Macro
                                    * @param name
                                    * @param newName
                                    * @param region
                                    * @returns {Promise}
                                    * @constructor
                                    */
function Bucket(name, newName, region, aws) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWNyb3MvczMubWFjcm8uanMiXSwibmFtZXMiOlsidXRpbCIsInMzSnNvbiIsInJlcXVpcmUiLCJzM1Jlc291cmNlIiwidHlwZXMiLCJCdWNrZXQiLCJuYW1lIiwibmV3TmFtZSIsInJlZ2lvbiIsImF3cyIsInMzQ2xpZW50IiwiUzMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImJ1Y2tldCIsInNhZmVSZW5hbWUiLCJCdWNrZXROYW1lIiwiZ2V0QnVja2V0VmVyc2lvbmluZyIsInByb21pc2UiLCJ0aGVuIiwidmVyc2lvbkRhdGEiLCJpc0VtcHR5IiwiVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM1ZlcnNpb25pbmdDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0Q29ycyIsImNvcnNEYXRhIiwiQ29yc0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM0NvcnNDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbiIsImNhdGNoIiwibGlmZURhdGEiLCJMaWZlY3ljbGVDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0TG9nZ2luZyIsImxvZ2dpbmdEYXRhIiwiTG9nZ2luZ0NvbmZpZ3VyYXRpb24iLCJBbWF6b25TM0xvZ2dpbmdDb25maWd1cmF0aW9uIiwiZ2V0QnVja2V0Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uRGF0YSIsIk5vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJBbWF6b25TM05vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJnZXRCdWNrZXRSZXBsaWNhdGlvbiIsInJlcGxEYXRhIiwiUmVwbGljYXRpb25Db25maWd1cmF0aW9uIiwiQW1hem9uUzNSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJnZXRCdWNrZXRUYWdnaW5nIiwidGFnc0RhdGEiLCJUYWdTZXQiLCJmb3JFYWNoIiwidGFnIiwiVGFncyIsImFkZCIsImdldEJ1Y2tldFdlYnNpdGUiLCJ3ZWJzaXRlRGF0YSIsIldlYnNpdGVDb25maWd1cmF0aW9uIiwiQW1hem9uUzNXZWJzaXRlQ29uZmlndXJhdGlvblByb3BlcnR5IiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBRUE7O0FBRUEsK0IsSUFBWUEsSTtBQUNaLHFDO0FBQ0EsTUFBTUMsU0FBU0MsUUFBUSx1QkFBUixDQUFmO0FBQ0EsTUFBTUMsYUFBa0IscUJBQVlGLE1BQVosQ0FBeEI7QUFDQSxNQUFNRyxRQUFRRixRQUFRLFVBQVIsQ0FBZDs7QUFFQTs7Ozs7Ozs7QUFRQSxTQUFTRyxNQUFULENBQWdCQyxJQUFoQixFQUEyQkMsT0FBM0IsRUFBeUNDLE1BQXpDLEVBQXNEQyxHQUF0RCxFQUFnRTtBQUM5RCxRQUFNQyxXQUFXLElBQUlELElBQUlFLEVBQVIsQ0FBVyxFQUFFSCxRQUFRQSxNQUFWLEVBQVgsQ0FBakI7QUFDQSxTQUFPLElBQUlJLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdEMsUUFBSUMsU0FBUyxJQUFJWixXQUFXRSxNQUFmLENBQXNCTCxLQUFLZ0IsVUFBTCxDQUFnQlQsT0FBaEIsQ0FBdEIsQ0FBYjtBQUNBUSxXQUFPRSxVQUFQLEdBQW9CVixPQUFwQjtBQUNBO0FBQ0VHO0FBQ0dRLHlCQURILENBQ3VCLEVBQUViLFFBQVFDLElBQVYsRUFEdkI7QUFFR2EsYUFGSDtBQUdHQyxVQUhILENBR1NDLFdBQUQsSUFBc0I7QUFDMUIsWUFBSSxDQUFDckIsS0FBS3NCLE9BQUwsQ0FBYUQsV0FBYixDQUFMLEVBQWdDO0FBQzlCTixpQkFBT1EsdUJBQVAsR0FBaUMsSUFBSW5CLE1BQU1vQiwrQkFBVjtBQUMvQkgscUJBRCtCLENBQWpDOztBQUdEO0FBQ0Q7QUFDQSxlQUFPWCxTQUFTZSxhQUFULENBQXVCLEVBQUVwQixRQUFRQyxJQUFWLEVBQXZCLEVBQXlDYSxPQUF6QyxFQUFQO0FBQ0QsT0FYSDtBQVlFOzs7O2FBWkY7QUFpQkdDLFVBakJILENBaUJRLFVBQVNNLFFBQVQsRUFBd0I7QUFDNUJY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IjoiczMubWFjcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5jb25zdCBzM0pzb24gPSByZXF1aXJlKCcuLi9zdHVicy9qc29uL1MzLmpzb24nKTtcbmNvbnN0IHMzUmVzb3VyY2U6IGFueSA9IG5ldyBTZXJ2aWNlKHMzSnNvbik7XG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyk7XG5cbi8qKlxuICogQG1lbWJlcm9mIG1vZHVsZTpNYWNyb1xuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBuZXdOYW1lXG4gKiBAcGFyYW0gcmVnaW9uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCdWNrZXQobmFtZTogYW55LCBuZXdOYW1lOiBhbnksIHJlZ2lvbjogYW55LCBhd3M6IGFueSkge1xuICBjb25zdCBzM0NsaWVudCA9IG5ldyBhd3MuUzMoeyByZWdpb246IHJlZ2lvbiB9KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgYnVja2V0ID0gbmV3IHMzUmVzb3VyY2UuQnVja2V0KHV0aWwuc2FmZVJlbmFtZShuZXdOYW1lKSk7XG4gICAgYnVja2V0LkJ1Y2tldE5hbWUgPSBuZXdOYW1lO1xuICAgIHJldHVybiAoXG4gICAgICBzM0NsaWVudFxuICAgICAgICAuZ2V0QnVja2V0VmVyc2lvbmluZyh7IEJ1Y2tldDogbmFtZSB9KVxuICAgICAgICAucHJvbWlzZSgpXG4gICAgICAgIC50aGVuKCh2ZXJzaW9uRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCF1dGlsLmlzRW1wdHkodmVyc2lvbkRhdGEpKSB7XG4gICAgICAgICAgICBidWNrZXQuVmVyc2lvbmluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNWZXJzaW9uaW5nQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgICAgdmVyc2lvbkRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHJldHVybiBzM0NsaWVudC5nZXRCdWNrZXRBY2woeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpXG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldENvcnMoeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAvKiAudGhlbihmdW5jdGlvbiAoYWNsRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJzInKVxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYWNsRGF0YSkpXG4gICAgICBidWNrZXQuQWNjZXNzQ29udHJvbCA9IGFjbERhdGFcbiAgICB9KSovXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGNvcnNEYXRhOiBhbnkpIHtcbiAgICAgICAgICBidWNrZXQuQ29yc0NvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNDb3JzQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIGNvcnNEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnRcbiAgICAgICAgICAgIC5nZXRCdWNrZXRMaWZlY3ljbGVDb25maWd1cmF0aW9uKHsgQnVja2V0OiBuYW1lIH0pXG4gICAgICAgICAgICAucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gU2lsZW50bHkgY2F0Y2ggdGhlIE5vU3VjaENPUlNDb25maWd1cmF0aW9uXG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50XG4gICAgICAgICAgICAuZ2V0QnVja2V0TGlmZWN5Y2xlQ29uZmlndXJhdGlvbih7IEJ1Y2tldDogbmFtZSB9KVxuICAgICAgICAgICAgLnByb21pc2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obGlmZURhdGE6IGFueSkge1xuICAgICAgICAgIGJ1Y2tldC5MaWZlY3ljbGVDb25maWd1cmF0aW9uID0gbGlmZURhdGE7XG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldExvZ2dpbmcoeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gU2lsZW50bHkgY2F0Y2ggdGhlIE5vU3VjaExpZmVjeWNsZUNvbmZpZ3VyYXRpb25cbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0TG9nZ2luZyh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGxvZ2dpbmdEYXRhOiBhbnkpIHtcbiAgICAgICAgICBidWNrZXQuTG9nZ2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNMb2dnaW5nQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIGxvZ2dpbmdEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0Tm90aWZpY2F0aW9uKHsgQnVja2V0OiBuYW1lIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obm90aWZpY2F0aW9uRGF0YTogYW55KSB7XG4gICAgICAgICAgYnVja2V0Lk5vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNOb3RpZmljYXRpb25Db25maWd1cmF0aW9uKFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uRGF0YVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldFJlcGxpY2F0aW9uKHsgQnVja2V0OiBuYW1lIH0pLnByb21pc2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVwbERhdGE6IGFueSkge1xuICAgICAgICAgIGJ1Y2tldC5SZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgdHlwZXMuQW1hem9uUzNSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICByZXBsRGF0YVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldFRhZ2dpbmcoeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbih0YWdzRGF0YTogYW55KSB7XG4gICAgICAgICAgdGFnc0RhdGEuVGFnU2V0LmZvckVhY2goKHRhZzogYW55KSA9PiB7XG4gICAgICAgICAgICBidWNrZXQuVGFncy5hZGQodGFnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gczNDbGllbnQuZ2V0QnVja2V0V2Vic2l0ZSh7IEJ1Y2tldDogbmFtZSB9KS5wcm9taXNlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBTaWxlbnRseSBjYXRjaCB0aGUgTm9TdWNoVGFnU2V0XG4gICAgICAgICAgcmV0dXJuIHMzQ2xpZW50LmdldEJ1Y2tldFdlYnNpdGUoeyBCdWNrZXQ6IG5hbWUgfSkucHJvbWlzZSgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbih3ZWJzaXRlRGF0YTogYW55KSB7XG4gICAgICAgICAgYnVja2V0LldlYnNpdGVDb25maWd1cmF0aW9uID0gbmV3IHR5cGVzLkFtYXpvblMzV2Vic2l0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eShcbiAgICAgICAgICAgIHdlYnNpdGVEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFNpbGVudGx5IGNhdGNoIHRoZSBOb1N1Y2hXZWJzaXRlQ29uZmlndXJhdGlvblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVzb2x2ZShidWNrZXQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZTogYW55KSB7XG4gICAgICAgICAgLy8gU2lsZW50bHkgY2F0Y2ggdGhlIE5vU3VjaFdlYnNpdGVDb25maWd1cmF0aW9uXG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQnVja2V0OiBCdWNrZXRcbn07XG4iXX0=