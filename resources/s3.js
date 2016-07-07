'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Bucket extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::S3::Bucket'
    let properties = {
      AccessControl: new resource.ResourceProperty(String, 'No', null),
      BucketName: new resource.ResourceProperty(String, 'No', null),
      CorsConfiguration: new resource.ResourceProperty(types.AmazonS3CorsConfiguration, 'No', null),
      LifecycleConfiguration: new resource.ResourceProperty(types.AmazonS3LifecycleConfiguration, 'No', null),
      LoggingConfiguration: new resource.ResourceProperty(types.AmazonS3LoggingConfiguration, 'No', null),
      NotificationConfiguration: new resource.ResourceProperty(types.AmazonS3NotificationConfiguration, 'No', null),
      ReplicationConfiguration: new resource.ResourceProperty(types.AmazonS3ReplicationConfiguration, 'No', null),
      Tags: new tag.TagSet(),
      VersioningConfiguration: new resource.ResourceProperty(types.AmazonS3VersioningConfiguration, 'No', null),
      WebsiteConfiguration: new resource.ResourceProperty(Number, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BucketPolicy extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new resource.ResourceProperty(String, 'Yes', null),
      PolicyDocument: new resource.ResourceProperty(Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}