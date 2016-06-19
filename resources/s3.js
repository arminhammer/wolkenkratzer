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

class AmazonS3NotificationConfigurationConfigFilterS3KeyRules extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Name: new cloudpotato.ResourceProperty(String, true, null),
      Value: new cloudpotato.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilterS3Key extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Rules: new cloudpotato.ResourceArray(AmazonS3NotificationConfigurationConfigFilterS3KeyRules, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationConfigFilter extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      S3Key: new cloudpotato.ResourceProperty(AmazonS3NotificationConfigurationConfigFilterS3Key, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new cloudpotato.ResourceProperty(String, true, null),
      Filter: new cloudpotato.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, true, null),
      Function: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfigurationTopicConfigurations extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new cloudpotato.ResourceProperty(String, true, null),
      Filter: new cloudpotato.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, false, null),
      Queue: new cloudpotato.ResourceProperty(String, true, null)
  }
    super(properties, propertiesObject)
  }
}

class AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Event: new cloudpotato.ResourceProperty(String, true, null),
      Filter: new cloudpotato.ResourceProperty(AmazonS3NotificationConfigurationConfigFilter, false, null),
      Queue: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3NotificationConfiguration extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      LambdaConfigurations: new cloudpotato.ResourceArray(AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations, false, null),
      QueueConfigurations: new cloudpotato.ResourceArray(AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations, false, null),
      TopicConfigurations: new cloudpotato.ResourceArray(AmazonS3NotificationConfigurationTopicConfigurations, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfigurationRules extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Destination: new cloudpotato.ResourceProperty(String, true, null),
      Id: new cloudpotato.ResourceProperty(String, false, null),
      Prefix: new cloudpotato.ResourceProperty(String, true, null),
      Status: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3ReplicationConfiguration extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Role: new cloudpotato.ResourceProperty(String, true, null),
      Rules: new cloudpotato.ResourceArray(AmazonS3ReplicationConfigurationRules, true, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3VersioningConfiguration extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Status: new cloudpotato.ResourceProperty(String, true, null),
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new cloudpotato.ResourceProperty(String, true, null),
      Protocol: new cloudpotato.ResourceProperty(String, false, null)
  }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HostName: new cloudpotato.ResourceProperty(String, false, null),
      HttpRedirectCode:new cloudpotato.ResourceProperty(String, false, null),
      Protocol: new cloudpotato.ResourceProperty(String, false, null),
      ReplaceKeyPrefixWith: new cloudpotato.ResourceProperty(String, false, null),
      ReplaceKeyWith: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      HttpErrorCodeReturnedEquals: new cloudpotato.ResourceProperty(String, false, null),
      KeyPrefixEquals: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationRoutingRulesProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      RedirectRule: new cloudpotato.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty, true, null),
      RoutingRuleCondition: new cloudpotato.ResourceProperty(AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AmazonS3WebsiteConfigurationProperty extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ErrorDocument: new cloudpotato.ResourceProperty(String, false, null),
      IndexDocument: new cloudpotato.ResourceProperty(String, true, null),
      RedirectAllRequestsTo: new cloudpotato.ResourceProperty(AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty, false, null),
      RoutingRules: new cloudpotato.ResourceArray(AmazonS3WebsiteConfigurationRoutingRulesProperty, false, null),
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
      NotificationConfiguration: new cloudpotato.ResourceProperty(AmazonS3NotificationConfiguration, false, null),
      ReplicationConfiguration: new cloudpotato.ResourceProperty(AmazonS3ReplicationConfiguration, false, null),
      Tags: new cloudpotato.TagSet(),
      VersioningConfiguration: new cloudpotato.ResourceProperty(AmazonS3VersioningConfiguration, false, null),
      WebsiteConfiguration: new cloudpotato.ResourceProperty(AmazonS3WebsiteConfigurationProperty, false, null)
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
