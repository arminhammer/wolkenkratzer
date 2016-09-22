/**
 * Created by arming on 9/21/16.
 */
'use strict'

const aws = require('aws-sdk')
const s3Resource = require('../resources/s3')
const types = require('../types')
const util = require('../util')

function Bucket (name, region) {
  const s3Client = new aws.S3({ region: region })
  return new Promise((resolve, reject) => {
    let bucket = new s3Resource.Bucket(name)
    bucket.BucketName = name
    return s3Client
    .getBucketVersioning({ Bucket: name }).promise()
    .then((versionData) => {
      if (!util.isEmpty(versionData)) {
        bucket.VersioningConfiguration = new types.AmazonS3VersioningConfiguration(versionData)
      }
      // return s3Client.getBucketAcl({ Bucket: name }).promise()
      return s3Client.getBucketCors({ Bucket: name }).promise()
    })
    /* .then(function (aclData) {
      console.log('2')
      console.log(JSON.stringify(aclData))
      bucket.AccessControl = aclData
    })*/
    .then(function (corsData) {
      bucket.CorsConfiguration = new types.AmazonS3CorsConfiguration(corsData)
      return s3Client.getBucketLifecycleConfiguration({ Bucket: name }).promise()
    })
    .catch(function () {
      // Silently catch the NoSuchCORSConfiguration
      return s3Client.getBucketLifecycleConfiguration({ Bucket: name }).promise()
    })
    .then(function (lifeData) {
      bucket.LifecycleConfiguration = lifeData
      return s3Client.getBucketLogging({ Bucket: name }).promise()
    })
    .catch(function () {
      // Silently catch the NoSuchLifecycleConfiguration
      return s3Client.getBucketLogging({ Bucket: name }).promise()
    })
    .then(function (loggingData) {
      bucket.LoggingConfiguration = new types.AmazonS3LoggingConfiguration(loggingData)
      return s3Client.getBucketNotification({ Bucket: name }).promise()
    })
    .then(function (notificationData) {
      bucket.NotificationConfiguration = new types.AmazonS3NotificationConfiguration(notificationData)
      return s3Client.getBucketReplication({ Bucket: name }).promise()
    })
    .then(function (replData) {
      bucket.ReplicationConfiguration = new types.AmazonS3ReplicationConfiguration(replData)
      return s3Client.getBucketTagging({ Bucket: name }).promise()
    })
    .then(function (tagsData) {
      tagsData.TagSet.forEach((tag) => {
        bucket.Tags.add(tag)
      })
      return s3Client.getBucketWebsite({ Bucket: name }).promise()
    })
    .catch(function () {
      // Silently catch the NoSuchTagSet
      return s3Client.getBucketWebsite({ Bucket: name }).promise()
    })
    .then(function(websiteData) {
      bucket.WebsiteConfiguration = new types.AmazonS3WebsiteConfigurationProperty(websiteData)
    })
    .catch(function () {
      // Silently catch the NoSuchWebsiteConfiguration
      return
    })
    .then(function () {
      resolve(bucket)
    })
    .catch(function (e) {
      // Silently catch the NoSuchWebsiteConfiguration
      reject(e)
    })
  })
}

module.exports = {
  Bucket: Bucket
}
