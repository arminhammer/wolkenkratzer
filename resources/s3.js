'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Bucket extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::Bucket'
    let properties = {
      AccessControl: new ResourceAttribute('AccessControl', String, 'No', null),
      BucketName: new ResourceAttribute('BucketName', String, 'No', null),
      CorsConfiguration: new ResourceAttribute('CorsConfiguration', types.AmazonS3CorsConfiguration, 'No', null),
      LifecycleConfiguration: new ResourceAttribute('LifecycleConfiguration', types.AmazonS3LifecycleConfiguration, 'No', null),
      LoggingConfiguration: new ResourceAttribute('LoggingConfiguration', types.AmazonS3LoggingConfiguration, 'No', null),
      NotificationConfiguration: new ResourceAttribute('NotificationConfiguration', types.AmazonS3NotificationConfiguration, 'No', null),
      ReplicationConfiguration: new ResourceAttribute('ReplicationConfiguration', types.AmazonS3ReplicationConfiguration, 'No', null),
      Tags: new tag.TagSet(),
      VersioningConfiguration: new ResourceAttribute('VersioningConfiguration', types.AmazonS3VersioningConfiguration, 'No', null),
      WebsiteConfiguration: new ResourceAttribute('WebsiteConfiguration', types.AmazonS3WebsiteConfigurationProperty, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BucketPolicy extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}
