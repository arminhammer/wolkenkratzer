'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module S3 */

/** @memberof module:S3
*   @extends WKResource
* @property {String} AccessControl Required: No. A canned access control list (ACL) that grants predefined permissions to the
                  bucket. For more information about canned ACLs, see Canned ACLs in the
                     Amazon S3 documentation.Valid values: AuthenticatedRead |
                            AwsExecRead | BucketOwnerRead |
                            BucketOwnerFullControl |
                            LogDeliveryWrite | Private |
                            PublicRead |
                        PublicReadWriteUpdate requires: No interruption
* @property {String} BucketName Required: No. A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique
                  physical ID and uses that ID for the bucket name. For more information, see Name Type. The bucket
                  name must contain only lowercase letters, numbers, periods (.), and dashes
                  (-).ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {AmazonS3CorsConfiguration} CorsConfiguration Required: No. Rules that define cross-origin resource sharing of objects in this bucket.
                        For more information, see Enabling
                            Cross-Origin Resource Sharing in the
                            Amazon Simple Storage Service Developer Guide.Update requires: No interruption
* @property {AmazonS3LifecycleConfiguration} LifecycleConfiguration Required: No. Rules that define how Amazon S3 manages objects during their lifetime. For more
                        information, see Object
                            Lifecycle Management in the
                            Amazon Simple Storage Service Developer Guide.Update requires: No interruption
* @property {AmazonS3LoggingConfiguration} LoggingConfiguration Required: No. Settings that defines where logs are stored.Update requires: No interruption
* @property {AmazonS3NotificationConfiguration} NotificationConfiguration Required: No. Configuration that defines which Amazon SNS topic to send messages to and what
                        events to report.Update requires: No interruption
* @property {AmazonS3ReplicationConfiguration} ReplicationConfiguration Required: No. Configuration for replicating objects in an S3 bucket. To enable replication, you
            must also enable versioning by using the VersioningConfiguration
            property.Amazon S3 can store replicated objects in only one destination (S3 bucket). You cannot
            send replicated objects to multiple S3 buckets.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key-value pairs) for this Amazon S3 bucket.Update requires: No interruption
* @property {AmazonS3VersioningConfiguration} VersioningConfiguration Required: No. Enables multiple variants of all objects in this bucket. You might enable
                        versioning to prevent objects from being deleted or overwritten by mistake
                        or to archive objects so that you can retrieve previous versions of
                        them.Update requires: No interruption
* @property {AmazonS3WebsiteConfigurationProperty} WebsiteConfiguration Required: No. Information used to configure the bucket as a static website. For more information, see Hosting Websites on Amazon
                  S3.Update requires: No interruption
*/
class Bucket extends WKResource {
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

/** @memberof module:S3
*   @extends WKResource
* @property {String} Bucket Required: Yes. The Amazon S3 bucket that the policy applies to.You cannot update this property. If you want to add or remove a bucket from a
            bucket policy, you must modify your AWS CloudFormation template by creating a new bucket policy
            resource and removing the old one. Then use the modified template to update your AWS CloudFormation
            stack.
* @property {Object} PolicyDocument Required: Yes. A policy document containing permissions to add to the specified bucket. For
            more information, see Access Policy Language Overview in the
            Amazon Simple Storage Service Developer Guide.Update requires: No interruption
*/
class BucketPolicy extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::S3::BucketPolicy'
    let properties = {
      Bucket: new ResourceAttribute('Bucket', String, 'Yes', null),
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Bucket: Bucket,
  BucketPolicy: BucketPolicy
}
