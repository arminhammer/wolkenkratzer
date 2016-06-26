/**
 * Created by arming on 6/5/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class AmazonS3CorsConfigurationRule extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      AllowedHeaders: new wolkenkratzer.ResourceArray(String, false, null),
      AllowedMethods: new wolkenkratzer.ResourceArray(String, true, null),
      AllowedOrigins: new wolkenkratzer.ResourceArray(String, true, null),
      ExposedHeaders: new wolkenkratzer.ResourceArray(String, false, null),
      Id: new wolkenkratzer.ResourceProperty(String, false, null),
      MaxAge: new wolkenkratzer.ResourceProperty(Number, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3CorsConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      CorsRules: new wolkenkratzer.ResourceArray(AmazonS3CorsConfigurationRule, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleNoncurrentVersionTransition extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new wolkenkratzer.ResourceProperty(String, true, null),
      TransitionInDays: new wolkenkratzer.ResourceProperty(Number, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRuleTransition extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      StorageClass: new wolkenkratzer.ResourceProperty(String, true, null),
      TransitionDate: new wolkenkratzer.ResourceProperty(String, false, null),
      TransitionInDays: new wolkenkratzer.ResourceProperty(Number, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LifecycleRule extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ExpirationDate: new wolkenkratzer.ResourceProperty(String, false, null),
      ExpirationInDays: new wolkenkratzer.ResourceProperty(Number, false, null),
      Id: new wolkenkratzer.ResourceProperty(String, false, null),
      NoncurrentVersionExpirationInDays: new wolkenkratzer.ResourceProperty(Number, false, null),
      NoncurrentVersionTransitions: new wolkenkratzer.ResourceArray(AmazonS3LifecycleRuleNoncurrentVersionTransition, false, null),
      Prefix: new wolkenkratzer.ResourceProperty(String, false, null),
      Status: new wolkenkratzer.ResourceProperty(String, false, null),
      Transitions: new wolkenkratzer.ResourceArray(AmazonS3LifecycleRuleTransition, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3LoggingConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      DestinationBucketName: new wolkenkratzer.ResourceProperty(String, false, null),
      LogFilePrefix: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, true, null),
      Value: new wolkenkratzer.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new wolkenkratzer.ResourceArray(AmazonS3NotificationConfigurationConfigFilterS3KeyRules, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Key: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilterS3Key, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, true, null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, true, null),
      Function: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, true, null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, false, null),
      Queue: new wolkenkratzer.ResourceProperty(String, true, null)
  }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new wolkenkratzer.ResourceProperty(String, true, null),
      Filter: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, false, null),
      Queue: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LambdaConfigurations: new wolkenkratzer.ResourceArray(AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, false, null),
      QueueConfigurations: new wolkenkratzer.ResourceArray(AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, false, null),
      TopicConfigurations: new wolkenkratzer.ResourceArray(AmazonS3NotificationConfigurationTopicConfigurations, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Destination: new wolkenkratzer.ResourceProperty(String, true, null),
      Id: new wolkenkratzer.ResourceProperty(String, false, null),
      Prefix: new wolkenkratzer.ResourceProperty(String, true, null),
      Status: new wolkenkratzer.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Role: new wolkenkratzer.ResourceProperty(String, true, null),
      Rules: new wolkenkratzer.ResourceArray(AmazonS3ReplicationConfigurationRules, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Status: new wolkenkratzer.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new wolkenkratzer.ResourceProperty(String, true, null),
      Protocol: new wolkenkratzer.ResourceProperty(String, false, null)
  }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new wolkenkratzer.ResourceProperty(String, false, null),
      HttpRedirectCode:new wolkenkratzer.ResourceProperty(String, false, null),
      Protocol: new wolkenkratzer.ResourceProperty(String, false, null),
      ReplaceKeyPrefixWith: new wolkenkratzer.ResourceProperty(String, false, null),
      ReplaceKeyWith: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new wolkenkratzer.ResourceProperty(String, false, null),
      KeyPrefixEquals: new wolkenkratzer.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RedirectRule: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, true, null),
      RoutingRuleCondition: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends wolkenkratzer.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorDocument: new wolkenkratzer.ResourceProperty(String, false, null),
      IndexDocument: new wolkenkratzer.ResourceProperty(String, true, null),
      RedirectAllRequestsTo: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, false, null),
      RoutingRules: new wolkenkratzer.ResourceArray(AmazonS3WebsiteConfigurationRoutingRulesProperty, false, null),
    }
    super(properties, propertiesObject)
  }
}

class Bucket extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::Bucket'
    let properties = {
      AccessControl: new wolkenkratzer.ResourceProperty(String, false, null),
      BucketName: new wolkenkratzer.ResourceProperty(String, false, null),
      CorsConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3CorsConfiguration, false, null),
      LifecycleConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3LifecycleRule, false, null),
      LoggingConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3LoggingConfiguration, false, null),
      NotificationConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3NotificationConfiguration, false, null),
      ReplicationConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3ReplicationConfiguration, false, null),
      Tags: new wolkenkratzer.TagSet(),
      VersioningConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3VersioningConfiguration, false, null),
      WebsiteConfiguration: new wolkenkratzer.ResourceProperty(AmazonS3WebsiteConfigurationProperty, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class BucketPolicy extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new wolkenkratzer.ResourceProperty(String, true, null),
      PolicyDocument: new wolkenkratzer.ResourceProperty(Object, true, null)
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
