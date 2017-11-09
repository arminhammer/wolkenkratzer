'use strict';

import stubs from 'cfn-doc-json-stubs';
import { Service } from '../service';

/**
 * @memberof module:Macro
 * @param name
 * @param newName
 * @param region
 * @returns {Promise}
 * @constructor
 */
export function Bucket(name: any, newName: any, region: any, aws: any) {
  /*
  const s3Client = new aws.S3({ region: region });
  return new Promise((resolve, reject) => {
    let bucket = new s3Resource.Bucket(util.safeRename(newName));
    bucket.BucketName = newName;
    return (
      s3Client
        .getBucketVersioning({ Bucket: name })
        .promise()
        .then((versionData: any) => {
          if (!util.isEmpty(versionData)) {
            bucket.VersioningConfiguration = new types.AmazonS3VersioningConfiguration(
              versionData
            );
          }
          // return s3Client.getBucketAcl({ Bucket: name }).promise()
          return s3Client.getBucketCors({ Bucket: name }).promise();
        })
        //.then(function (aclData) {
      //bucket.AccessControl = aclData
    //})
        .then(function(corsData: any) {
          bucket.CorsConfiguration = new types.AmazonS3CorsConfiguration(
            corsData
          );
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: name })
            .promise();
        })
        .catch(function() {
          // Silently catch the NoSuchCORSConfiguration
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: name })
            .promise();
        })
        .then(function(lifeData: any) {
          bucket.LifecycleConfiguration = lifeData;
          return s3Client.getBucketLogging({ Bucket: name }).promise();
        })
        .catch(function() {
          // Silently catch the NoSuchLifecycleConfiguration
          return s3Client.getBucketLogging({ Bucket: name }).promise();
        })
        .then(function(loggingData: any) {
          bucket.LoggingConfiguration = new types.AmazonS3LoggingConfiguration(
            loggingData
          );
          return s3Client.getBucketNotification({ Bucket: name }).promise();
        })
        .then(function(notificationData: any) {
          bucket.NotificationConfiguration = new types.AmazonS3NotificationConfiguration(
            notificationData
          );
          return s3Client.getBucketReplication({ Bucket: name }).promise();
        })
        .then(function(replData: any) {
          bucket.ReplicationConfiguration = new types.AmazonS3ReplicationConfiguration(
            replData
          );
          return s3Client.getBucketTagging({ Bucket: name }).promise();
        })
        .then(function(tagsData: any) {
          tagsData.TagSet.forEach((tag: any) => {
            bucket.Tags.add(tag);
          });
          return s3Client.getBucketWebsite({ Bucket: name }).promise();
        })
        .catch(function() {
          // Silently catch the NoSuchTagSet
          return s3Client.getBucketWebsite({ Bucket: name }).promise();
        })
        .then(function(websiteData: any) {
          bucket.WebsiteConfiguration = new types.AmazonS3WebsiteConfigurationProperty(
            websiteData
          );
        })
        .catch(function() {
          // Silently catch the NoSuchWebsiteConfiguration
          return;
        })
        .then(function() {
          resolve(bucket);
        })
        .catch(function(e: any) {
          // Silently catch the NoSuchWebsiteConfiguration
          reject(e);
        })
    );
  });
  */
}
