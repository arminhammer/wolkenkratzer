/**
 * Created by arming on 6/5/16.
 */
'use strict'

const cloudpotato = require('./../index')

class AmazonS3CorsConfigurationRule extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedHeaders: new cloudpotato.ResourceArray(String, false, null),
      AllowedMethods: new cloudpotato.ResourceArray(String, true, null),
      AllowedOrigins: new cloudpotato.ResourceArray(String, true, null),
      ExposedHeaders: new cloudpotato.ResourceArray(String, false, null),
      Id: new cloudpotato.ResourceProperty(String, false, null),
      MaxAge: new cloudpotato.ResourceProperty(Number, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CorsRules: new cloudpotato.ResourceArray(AmazonS3CorsConfigurationRule, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new cloudpotato.ResourceProperty(String, true, null),
      TransitionInDays: new cloudpotato.ResourceProperty(Number, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new cloudpotato.ResourceProperty(String, true, null),
      TransitionDate: new cloudpotato.ResourceProperty(String, false, null),
      TransitionInDays: new cloudpotato.ResourceProperty(Number, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ExpirationDate: new cloudpotato.ResourceProperty(String, false, null),
      ExpirationInDays: new cloudpotato.ResourceProperty(Number, false, null),
      Id: new cloudpotato.ResourceProperty(String, false, null),
      NoncurrentVersionExpirationInDays: new cloudpotato.ResourceProperty(Number, false, null),
      NoncurrentVersionTransitions: new cloudpotato.ResourceArray(AmazonS3LifecycleRuleNoncurrentVersionTransition, false, null),
      Prefix: new cloudpotato.ResourceProperty(String, false, null),
      Status: new cloudpotato.ResourceProperty(String, false, null),
      Transitions: new cloudpotato.ResourceArray(AmazonS3LifecycleRuleTransition, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DestinationBucketName: new cloudpotato.ResourceProperty(String, false, null),
      LogFilePrefix: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class Bucket extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::Bucket'
    let properties = {
      AccessControl: new cloudpotato.ResourceProperty(String, false, null),
      BucketName: new cloudpotato.ResourceProperty(String, false, null),
      CorsConfiguration: new cloudpotato.ResourceProperty(AmazonS3CorsConfiguration, false, null),
      LifecycleConfiguration: new cloudpotato.ResourceProperty(AmazonS3LifecycleRule, false, null),
      LoggingConfiguration: new cloudpotato.ResourceProperty(AmazonS3LoggingConfiguration, false, null),
      /* NotificationConfiguration : Notification Configuration,
      ReplicationConfiguration : Replication Configuration,*/
       Tags: new cloudpotato.TagSet(),
      /* VersioningConfiguration : Versioning Configuration,
      WebsiteConfiguration : Website Configuration Type*/
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BucketPolicy extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new cloudpotato.ResourceProperty(String, true, null),
      PolicyDocument: new cloudpotato.ResourceProperty(Object, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  AmazonS3CorsConfigurationRule: AmazonS3CorsConfigurationRule,
  AmazonS3CorsConfiguration: AmazonS3CorsConfiguration,
  AmazonS3LifecycleRuleNoncurrentVersionTransition: AmazonS3LifecycleRuleNoncurrentVersionTransition,
  AmazonS3LifecycleRuleTransition: AmazonS3LifecycleRuleTransition,
  AmazonS3LifecycleRule: AmazonS3LifecycleRule,
  AmazonS3LoggingConfiguration: AmazonS3LoggingConfiguration,
  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}
