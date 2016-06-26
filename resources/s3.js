'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Bucket extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::S3::Bucket'
    let properties = {
      AccessControl: new wolkenkratzer.ResourceProperty(String, 'No', null),
      BucketName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      CorsConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3CorsConfiguration, 'No', null),
      LifecycleConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3LifecycleConfiguration, 'No', null),
      LoggingConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3LoggingConfiguration, 'No', null),
      NotificationConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3NotificationConfiguration, 'No', null),
      ReplicationConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3ReplicationConfiguration, 'No', null),
      Tags: new wolkenkratzer.TagSet(),
      VersioningConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonS3VersioningConfiguration, 'No', null),
      WebsiteConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.WebsiteConfigurationType, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BucketPolicy extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}