'use strict';

var _awsSdk = require('aws-sdk');

var aws = _interopRequireWildcard(_awsSdk);

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _service = require('../service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var s3Resource = new _service.Service('S3');
var types = require('../types');

/**
 * @memberof module:Macro
 * @param name
 * @param newName
 * @param region
 * @returns {Promise}
 * @constructor
 */
function Bucket(name, newName, region) {
  var s3Client = new aws.S3({ region: region });
  return new Promise(function (resolve, reject) {
    var bucket = new s3Resource.Bucket(util.safeRename(newName));
    bucket.BucketName = newName;
    return s3Client.getBucketVersioning({ Bucket: name }).promise().then(function (versionData) {
      if (!util.isEmpty(versionData)) {
        bucket.VersioningConfiguration = new types.AmazonS3VersioningConfiguration(versionData);
      }
      // return s3Client.getBucketAcl({ Bucket: name }).promise()
      return s3Client.getBucketCors({ Bucket: name }).promise();
    })
    /* .then(function (aclData) {
    console.log('2')
    console.log(JSON.stringify(aclData))
    bucket.AccessControl = aclData
    })*/
    .then(function (corsData) {
      bucket.CorsConfiguration = new types.AmazonS3CorsConfiguration(corsData);
      return s3Client.getBucketLifecycleConfiguration({ Bucket: name }).promise();
    }).catch(function () {
      // Silently catch the NoSuchCORSConfiguration
      return s3Client.getBucketLifecycleConfiguration({ Bucket: name }).promise();
    }).then(function (lifeData) {
      bucket.LifecycleConfiguration = lifeData;
      return s3Client.getBucketLogging({ Bucket: name }).promise();
    }).catch(function () {
      // Silently catch the NoSuchLifecycleConfiguration
      return s3Client.getBucketLogging({ Bucket: name }).promise();
    }).then(function (loggingData) {
      bucket.LoggingConfiguration = new types.AmazonS3LoggingConfiguration(loggingData);
      return s3Client.getBucketNotification({ Bucket: name }).promise();
    }).then(function (notificationData) {
      bucket.NotificationConfiguration = new types.AmazonS3NotificationConfiguration(notificationData);
      return s3Client.getBucketReplication({ Bucket: name }).promise();
    }).then(function (replData) {
      bucket.ReplicationConfiguration = new types.AmazonS3ReplicationConfiguration(replData);
      return s3Client.getBucketTagging({ Bucket: name }).promise();
    }).then(function (tagsData) {
      tagsData.TagSet.forEach(function (tag) {
        bucket.Tags.add(tag);
      });
      return s3Client.getBucketWebsite({ Bucket: name }).promise();
    }).catch(function () {
      // Silently catch the NoSuchTagSet
      return s3Client.getBucketWebsite({ Bucket: name }).promise();
    }).then(function (websiteData) {
      bucket.WebsiteConfiguration = new types.AmazonS3WebsiteConfigurationProperty(websiteData);
    }).catch(function () {
      // Silently catch the NoSuchWebsiteConfiguration
      return;
    }).then(function () {
      resolve(bucket);
    }).catch(function (e) {
      // Silently catch the NoSuchWebsiteConfiguration
      reject(e);
    });
  });
}

module.exports = {
  Bucket: Bucket
};