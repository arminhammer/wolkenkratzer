'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var cfn_doc_json_stubs_1 = require("cfn-doc-json-stubs");
var service_1 = require("../service");
var s3Service = service_1.Service(cfn_doc_json_stubs_1.default.S3);
function S3BucketTransform(bucketName, logicalName, awsObj) {
    var s3Client = new awsObj.S3();
    return new Promise(function (resolve, reject) {
        // let bucket = new s3Resource.Bucket(newName);
        var bucket = {};
        return (s3Client
            .getBucketVersioning({ Bucket: bucketName })
            .promise()
            .then(function (versionData) {
            if (Object.keys(versionData)) {
                bucket.VersioningConfiguration = versionData;
            }
            // return s3Client.getBucketAcl({ Bucket: bucketName }).promise()
            return s3Client.getBucketCors({ Bucket: bucketName }).promise();
        })
            .then(function (corsData) {
            bucket.CorsConfiguration = corsData;
            return s3Client
                .getBucketLifecycleConfiguration({ Bucket: bucketName })
                .promise();
        })
            .catch(function (e) {
            // Silently catch the NoSuchCORSConfiguration
            return s3Client
                .getBucketLifecycleConfiguration({ Bucket: bucketName })
                .promise();
        })
            .then(function (lifeData) {
            bucket.LifecycleConfiguration = lifeData;
            return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
            .catch(function (e) {
            // Silently catch the NoSuchLifecycleConfiguration
            return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
            .then(function (loggingData) {
            bucket.LoggingConfiguration = {
                DestinationBucketName: loggingData.LoggingEnabled.TargetBucket,
                LogFilePrefix: loggingData.LoggingEnabled.TargetPrefix
            };
            return s3Client
                .getBucketNotification({ Bucket: bucketName })
                .promise();
        })
            .then(function (notificationData) {
            if (Object.keys(notificationData).length > 0) {
                bucket.NotificationConfiguration = notificationData;
            }
            return s3Client
                .getBucketReplication({ Bucket: bucketName })
                .promise();
        })
            .then(function (replData) {
            bucket.ReplicationConfiguration = replData;
            return s3Client.getBucketTagging({ Bucket: bucketName }).promise();
        })
            .then(function (tagsData) {
            tagsData.TagSet.forEach(function (tag) {
                bucket.Tags.add(tag);
            });
            return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
            .catch(function (e) {
            // Silently catch the NoSuchTagSet
            return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
            .then(function (websiteData) {
            bucket.WebsiteConfiguration = new websiteData();
        })
            .catch(function (e) {
            // Silently catch the NoSuchWebsiteConfiguration
            return;
        })
            .then(function () {
            resolve(s3Service.Bucket(logicalName, bucket));
        })
            .catch(function (e) {
            // Silently catch the NoSuchWebsiteConfiguration
            reject(e);
        }));
    });
}
exports.S3BucketTransform = S3BucketTransform;
//# sourceMappingURL=s3.js.map