/**
 * Created by arming on 6/5/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Bucket extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resource_type = 'AWS::S3::Bucket'
    let properties = {
      AccessControl : new cloudpotato.ResourceProperty(String, false, null),
      BucketName : new cloudpotato.ResourceProperty(String, false, null)
      /*CorsConfiguration : CORS Configuration,
      LifecycleConfiguration : Lifecycle Configuration,
      LoggingConfiguration : Logging Configuration,
      NotificationConfiguration : Notification Configuration,
      ReplicationConfiguration : Replication Configuration,
      Tags : [ Resource Tag, ... ],
      VersioningConfiguration : Versioning Configuration,
      WebsiteConfiguration : Website Configuration Type*/
    }
    super(name, resource_type, properties, propertiesObject)
  }
}

class BucketPolicy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resource_type = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket : new cloudpotato.ResourceProperty(String, true, null),
      PolicyDocument : new cloudpotato.ResourceProperty(Object, true, null)
    }
    super(name, resource_type, properties, propertiesObject)
  }
}

module.exports = {
  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}