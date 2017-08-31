'use strict';

import stubs from 'cfn-doc-json-stubs';
import * as path from 'path';
import { Service } from '../service';
const s3Service: any = Service(stubs.S3);

export function S3BucketTransform(
  bucketName: string,
  logicalName: string,
  awsObj: any
) {
  const s3Client = new awsObj.S3();
  return new Promise((resolve, reject) => {
    // let bucket = new s3Resource.Bucket(newName);
    const bucket: any = {};
    return (
      s3Client
        .getBucketVersioning({ Bucket: bucketName })
        .promise()
        .then(versionData => {
          if (Object.keys(versionData)) {
            bucket.VersioningConfiguration = versionData;
          }
          // return s3Client.getBucketAcl({ Bucket: bucketName }).promise()
          return s3Client.getBucketCors({ Bucket: bucketName }).promise();
        })
        /* .then(function (aclData) {
      bucket.AccessControl = aclData
    })*/
        .then(corsData => {
          bucket.CorsConfiguration = corsData;
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: bucketName })
            .promise();
        })
        .catch(e => {
          // Silently catch the NoSuchCORSConfiguration
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: bucketName })
            .promise();
        })
        .then(lifeData => {
          bucket.LifecycleConfiguration = lifeData;
          return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
        .catch(e => {
          // Silently catch the NoSuchLifecycleConfiguration
          return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
        .then(loggingData => {
          bucket.LoggingConfiguration = {
            DestinationBucketName: loggingData.LoggingEnabled.TargetBucket,
            LogFilePrefix: loggingData.LoggingEnabled.TargetPrefix
          };
          return s3Client
            .getBucketNotification({ Bucket: bucketName })
            .promise();
        })
        .then(notificationData => {
          if (Object.keys(notificationData).length > 0) {
            bucket.NotificationConfiguration = notificationData;
          }
          return s3Client
            .getBucketReplication({ Bucket: bucketName })
            .promise();
        })
        .then(replData => {
          bucket.ReplicationConfiguration = replData;
          return s3Client.getBucketTagging({ Bucket: bucketName }).promise();
        })
        .then(tagsData => {
          tagsData.TagSet.forEach((tag: any) => {
            bucket.Tags.add(tag);
          });
          return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
        .catch(e => {
          // Silently catch the NoSuchTagSet
          return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
        .then(websiteData => {
          bucket.WebsiteConfiguration = new websiteData();
        })
        .catch(e => {
          // Silently catch the NoSuchWebsiteConfiguration
          return;
        })
        .then(() => {
          resolve(s3Service.Bucket(logicalName, bucket));
        })
        .catch(e => {
          // Silently catch the NoSuchWebsiteConfiguration
          reject(e);
        })
    );
  });
}
